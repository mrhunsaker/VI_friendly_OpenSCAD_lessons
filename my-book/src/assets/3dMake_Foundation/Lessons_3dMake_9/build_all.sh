#!/bin/bash

# build_all.sh - Batch build script for OpenSCAD projects
# Compiles all SCAD files in the current directory to STL format
# Usage: ./build_all.sh [output_directory]

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SCAD_FILES=()
OUTPUT_DIR="${1:-./_builds}"
OPENSCAD_CMD="openscad"
FAILED_COUNT=0
SUCCESS_COUNT=0

# ============================================
# HELPER FUNCTIONS
# ============================================

# Check if OpenSCAD is installed
check_openscad() {
    if ! command -v $OPENSCAD_CMD &> /dev/null; then
        echo -e "${RED}Error: OpenSCAD not found. Install it first.${NC}"
        echo "Ubuntu/Debian: sudo apt-get install openscad"
        echo "macOS: brew install openscad"
        exit 1
    fi
}

# Create output directory
setup_output() {
    mkdir -p "$OUTPUT_DIR"
    echo -e "${YELLOW}Output directory: $OUTPUT_DIR${NC}"
}

# Find all SCAD files
find_scad_files() {
    echo "Searching for SCAD files..."
    while IFS= read -r file; do
        SCAD_FILES+=("$file")
    done < <(find . -name "*.scad" -type f | sort)
    
    if [ ${#SCAD_FILES[@]} -eq 0 ]; then
        echo -e "${RED}No SCAD files found!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Found ${#SCAD_FILES[@]} SCAD files${NC}"
}

# Compile a single SCAD file
compile_scad() {
    local scad_file="$1"
    local output_file="${OUTPUT_DIR}/$(basename "$scad_file" .scad).stl"
    
    echo -n "Building: $scad_file ... "
    
    if $OPENSCAD_CMD -o "$output_file" "$scad_file" 2>/dev/null; then
        echo -e "${GREEN}✓ Success${NC}"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        return 0
    else
        echo -e "${RED}✗ Failed${NC}"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        return 1
    fi
}

# ============================================
# MAIN EXECUTION
# ============================================

echo "=========================================="
echo "OpenSCAD Batch Build Script"
echo "=========================================="
echo ""

check_openscad
setup_output
find_scad_files

echo ""
echo "Building ${#SCAD_FILES[@]} files..."
echo "=========================================="

# Build all SCAD files
for scad_file in "${SCAD_FILES[@]}"; do
    compile_scad "$scad_file"
done

echo "=========================================="
echo ""
echo -e "Build Summary:"
echo -e "  ${GREEN}✓ Successful: $SUCCESS_COUNT${NC}"
if [ $FAILED_COUNT -gt 0 ]; then
    echo -e "  ${RED}✗ Failed: $FAILED_COUNT${NC}"
fi
echo ""

# Exit with appropriate code
if [ $FAILED_COUNT -eq 0 ]; then
    echo -e "${GREEN}All builds successful!${NC}"
    echo "Files ready in: $OUTPUT_DIR"
    exit 0
else
    echo -e "${RED}$FAILED_COUNT build(s) failed. Check for errors above.${NC}"
    exit 1
fi
