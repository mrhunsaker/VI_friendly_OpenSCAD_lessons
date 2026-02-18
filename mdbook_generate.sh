#!/bin/bash
# Generate mdbook HTML output from markdown sources in my-book/src/ to my-book/docs/

set -e

# Define directories relative to script location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BOOK_DIR="$SCRIPT_DIR/my-book"
BUILD_OUTPUT="$BOOK_DIR/docs"

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
if [ ! -f "$BOOK_DIR/book.toml" ]; then
    echo "Error: book.toml not found at $BOOK_DIR/book.toml"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p "$BUILD_OUTPUT"

# Build the book
echo "Building mdbook..."
echo "  Source: $BOOK_DIR/src/"
echo "  Output: $BUILD_OUTPUT"
echo ""

cd "$BOOK_DIR"
mdbook build --dest-dir "$BUILD_OUTPUT"

echo ""
echo "✓ Build complete!"
echo "HTML output is available at: $BUILD_OUTPUT"
