#!/bin/bash
# Generate mdbook HTML output from markdown sources in my-book/src/ to my-book/docs/

set -e

# Define directories relative to script location
SCRIPTDIR="$(cd "$(dirname "${BASHSOURCE[0]}")" && pwd)"
BOOKDIR="$SCRIPTDIR/my-book"
BUILDOUTPUT="$BOOKDIR/docs"

# Check if mdbook is installed
if ! command -v mdbook &> /dev/null; then
    echo "Error: mdbook is not installed."
    echo "Please install mdbook with one of the following:"
    echo "  - cargo install mdbook"
    echo "  - brew install mdbook (macOS)"
    echo "  - Or download from https://github.com/rust-lang/mdBook/releases"
    exit 1
fi

# Check if book.toml exists
if [ ! -f "$BOOKDIR/book.toml" ]; then
    echo "Error: book.toml not found at $BOOKDIR/book.toml"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$BUILDOUTPUT"

# Build the book
echo "Building mdbook..."
echo "  Source: $BOOKDIR/src/"
echo "  Output: $BUILDOUTPUT"
echo ""

cd "$BOOKDIR"
RUST_BACKTRACE=full mdbook build --dest-dir "$BUILDOUTPUT"

echo "building pdf in root directory with lualatex"
cd "$SCRIPTDIR"
lualatex "$BUILDOUTPUT/pandoc/latex/OpenSCAD_Curriculum.tex"
lualatex "$BUILDOUTPUT/pandoc/latex/OpenSCAD_Curriculum.tex"

echo ""
echo "All Builds complete!"
echo " Outputs are available at: $BUILDOUTPUT"



