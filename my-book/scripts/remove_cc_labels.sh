#!/usr/bin/env bash
set -euo pipefail

# Remove occurrences of "{#cccccc}" immediately following Markdown headings
SCRIPTDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPTDIR/.."
SRC_DIR="$ROOT/src"

if [ ! -d "$SRC_DIR" ]; then
  echo "Source directory not found: $SRC_DIR"
  exit 1
fi

echo "Scanning markdown files under: $SRC_DIR"

# Use perl to edit files in-place: remove a trailing ' {#cccccc}' that appears
# immediately after ATX-style headings (1-6 '#'). The regex runs in multi-line
# mode to operate line-by-line while allowing robust matching.
find "$SRC_DIR" -type f -name '*.md' -print0 | \
  xargs -0 -n1 perl -0777 -i -pe 's/^(#{1,6}\s*.+?)\s*\{#cccccc\}/$1/gm'

echo "Removal complete."
