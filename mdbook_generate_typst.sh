#!/usr/bin/env bash
# Generate mdBook HTML first, then produce a PDF via mdbook-typst.
# Also sync assets so Typst finds images referenced like "assets/images/...".

set -euo pipefail

# --- Paths --------------------------------------------------------------------
# NOTE: $BASH_SOURCE is the correct variable name (not BASHSOURCE).
SCRIPTDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BOOKDIR="$SCRIPTDIR/my-book"
BUILDOUTPUT="$BOOKDIR/docs"        # mdBook output root (contains html/ and typst/)
PDFOUTPUT="$BOOKDIR/pdf"           # final PDFs live here

# Common subpaths mdBook uses when multiple backends are enabled:
HTMLDIR="$BUILDOUTPUT/html"
TYPSTDIR="$BUILDOUTPUT/typst"

# --- Checks -------------------------------------------------------------------
if ! command -v mdbook >/dev/null 2>&1; then
  echo "Error: mdbook is not installed."
  echo "Install with one of:"
  echo "  - cargo install mdbook"
  echo "  - brew install mdbook (macOS)"
  echo "  - https://github.com/rust-lang/mdBook/releases"
  exit 1
fi

if [ ! -f "$BOOKDIR/book.toml" ]; then
  echo "Error: book.toml not found at $BOOKDIR/book.toml"
  exit 1
fi

mkdir -p "$BUILDOUTPUT" "$PDFOUTPUT"

# --- 1) Build HTML (and likely Typst too) ------------------------------------
echo "Building mdBook..."
echo "  Source: $BOOKDIR/src/"
echo "  Output: $BUILDOUTPUT"
echo

cd "$BOOKDIR"
# Use --dest-dir so the output paths are exactly as we expect.
RUST_BACKTRACE=full mdbook build --dest-dir "$BUILDOUTPUT"

echo
echo "   HTML build finished."
echo "   HTML is at: $HTMLDIR"
echo

# --- 2) Ensure Typst can see assets (images, etc.) ----------------------------
# Typst runs from $TYPSTDIR context. If your Typst code references
# #image(\"assets/images/foo.svg\"), Typst will look in $TYPSTDIR/assets/images/.
# Copy your assets there so the references resolve.
echo "Syncing assets for Typst..."

# Prefer copying from your *source* assets if present:
SRCS_ASSETS="$BOOKDIR/src/assets"
if [ -d "$SRCS_ASSETS" ]; then
  mkdir -p "$TYPSTDIR/assets"
  rsync -a --delete "$SRCS_ASSETS/" "$TYPSTDIR/assets/"
# Fallback: copy the assets that HTML already emitted (if present):
elif [ -d "$HTMLDIR/assets" ]; then
  mkdir -p "$TYPSTDIR/assets"
  rsync -a --delete "$HTMLDIR/assets/" "$TYPSTDIR/assets/"
fi

# Optional: clean up suspicious double extensions like *.svg.png
# (keep this harmless—only rename if the .svg actually exists)
find "$TYPSTDIR/assets" -type f -name '*.svg.png' -print0 2>/dev/null | while IFS= read -r -d '' f; do
  # If a matching .svg exists, prefer the real SVG filename in Typst references
  base="${f%.png}"
  if [ -f "$base" ]; then
    echo "Note: Found suspicious file '$f'. Typst reference likely should be '${base##*/}'."
  fi
done

echo "Assets synced to: $TYPSTDIR/assets"
echo

# --- 3) Build again so Typst can render PDF with assets in place --------------
echo "Building Typst PDF..."
RUST_BACKTRACE=full mdbook build --dest-dir "$BUILDOUTPUT"

# mdbook-typst (when configured to output PDF) writes to $TYPSTDIR/book.pdf by default.
PDF_CANDIDATE="$TYPSTDIR/book.pdf"
if [ -f "$PDF_CANDIDATE" ]; then
  # Name the PDF after the book title if you'd like; otherwise keep "book.pdf".
  # Here we'll keep it simple:
  cp -f "$PDF_CANDIDATE" "$PDFOUTPUT/book.pdf"
  echo " Typst PDF generated: $PDFOUTPUT/book.pdf"
else
  echo "  Typst did not produce '$PDF_CANDIDATE'."
  echo "    - Ensure your book.toml has:"
  echo "        [output.typst.output]"
  echo "        format = \"pdf\""
  echo "      (See mdbook-typst docs for config options.)"
fi

echo
echo "   Build complete!"
echo "   HTML: $HTMLDIR"
echo "   PDF : $PDFOUTPUT"