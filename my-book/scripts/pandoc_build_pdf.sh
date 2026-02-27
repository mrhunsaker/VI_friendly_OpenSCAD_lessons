#!/usr/bin/env bash
# Generate PDF via pandoc using mdBook's pandoc source directory
set -euo pipefail

# Debug control: either export DEBUG=1 or pass --debug/-v as first arg
DEBUG=0
if [[ "${1-}" == "--debug" || "${1-}" == "-v" ]]; then
  DEBUG=1
  shift || true
fi

log_debug() {
  if [ "$DEBUG" -eq 1 ]; then
    printf '[DEBUG] %s\n' "${*}"
  fi
}

log_info() { printf '[INFO] %s\n' "${*}"; }

SCRIPTDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPTDIR/.."
PDF_SRC_DIR="$ROOT/docs/pandoc/pdf/src"
OUT_DIR="$ROOT/docs/pandoc/pdf"
OUT_PDF="$OUT_DIR/OpenSCAD_Curriculum.pdf"
PARTS_DIR="$OUT_DIR/parts"

log_debug "script dir: $SCRIPTDIR"
log_debug "root dir: $ROOT"
log_debug "pandoc src dir: $PDF_SRC_DIR"
log_debug "output dir: $OUT_DIR"

if [ ! -d "$PDF_SRC_DIR" ]; then
  log_info "Pandoc source directory not found: $PDF_SRC_DIR"
  log_info "Run 'bash mdbook_generate.sh' first to populate the pandoc sources."
  exit 1
fi

mkdir -p "$OUT_DIR"
rm -rf "$PARTS_DIR"
mkdir -p "$PARTS_DIR"

cd "$PDF_SRC_DIR"

log_info "Building per-chapter PDFs with pandoc (will merge later)..."
log_debug "current working directory: $(pwd)"

# Build ordered file list from SUMMARY.md (extract link targets in order)
mapfile -t files < <(sed -n "s/.*](\([^)]*\.md\)).*/\1/p" SUMMARY.md)

log_debug "Found ${#files[@]} entries in SUMMARY.md"
if [ ${#files[@]} -eq 0 ]; then
  log_info "No markdown files found in SUMMARY.md"
  exit 1
fi

# Show files in debug mode
if [ "$DEBUG" -eq 1 ]; then
  for idx in "${!files[@]}"; do
    f="${files[$idx]}"
    if [ -f "$f" ]; then
      log_debug "[OK]   ${idx}: $f"
    else
      log_debug "[MISSING] ${idx}: $f"
    fi
  done
else
  log_info "Will render ${#files[@]} markdown files to individual PDFs"
fi

# Common pandoc options
PANDOC_COMMON=(--from=markdown --to=latex --template=template.tex --lua-filter=pagebreak.lua --pdf-engine=lualatex -s)

parts=()
index=0
for f in "${files[@]}"; do
  index=$((index+1))
  if [ ! -f "$f" ]; then
    log_info "Warning: source file missing, skipping: $f"
    continue
  fi
  # create an ordered filename like 01-chapter-name.pdf
  base=$(basename "$f" .md)
  num=$(printf "%02d" "$index")
  outpdf="$PARTS_DIR/${num}-${base}.pdf"

  # For the first chapter only, include Cover.tex (if present) before body
  if [ $index -eq 1 ] && [ -f Cover.tex ]; then
    log_info "Rendering (with cover): $f -> $outpdf"
    pandoc "${f}" "${PANDOC_COMMON[@]}" --include-before-body=Cover.tex --output="$outpdf"
  else
    log_info "Rendering: $f -> $outpdf"
    pandoc "${f}" "${PANDOC_COMMON[@]}" --output="$outpdf"
  fi

  if [ $? -ne 0 ]; then
    log_info "Pandoc failed for $f"
    exit 1
  fi

  parts+=("$outpdf")
done

if [ ${#parts[@]} -eq 0 ]; then
  log_info "No PDFs were produced; aborting merge."
  exit 1
fi

# Merge PDFs using pdfunite if available, else fallback to ghostscript
log_info "Merging ${#parts[@]} PDF parts into $OUT_PDF"
if command -v pdfunite >/dev/null 2>&1; then
  pdfunite "${parts[@]}" "$OUT_PDF"
  rc=$?
elif command -v gs >/dev/null 2>&1; then
  # Ghostscript fallback
  gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile="$OUT_PDF" "${parts[@]}"
  rc=$?
else
  log_info "No PDF merge tool found (pdfunite or gs). Install poppler-utils or ghostscript."
  exit 1
fi

if [ $rc -eq 0 ]; then
  log_info "Merged PDF written to: $OUT_PDF"
  log_info "Cleaning up temporary parts: $PARTS_DIR"
  # keep parts for debugging if DEBUG
  if [ "$DEBUG" -eq 0 ]; then
    rm -rf "$PARTS_DIR"
  fi
else
  log_info "PDF merge failed (rc=$rc)"
  exit 1
fi
