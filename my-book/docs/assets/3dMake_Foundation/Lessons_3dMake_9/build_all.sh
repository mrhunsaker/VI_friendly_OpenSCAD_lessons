#!/bin/bash

# buildall.sh - Batch build script for OpenSCAD projects
# Compiles all SCAD files in the current directory to STL format
# Usage: ./buildall.sh [outputdirectory]

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SCADFILES=()
OUTPUTDIR="${1:-./builds}"
OPENSCADCMD="openscad"
FAILEDCOUNT=0
SUCCESSCOUNT=0

# ============================================
# HELPER FUNCTIONS
# ============================================

# Check if OpenSCAD is installed
checkopenscad() {
    if ! command -v $OPENSCADCMD &> /dev/null; then
        echo -e "${RED}Error: OpenSCAD not found. Install it first.${NC}"
        echo "Ubuntu/Debian: sudo apt-get install openscad"
        echo "macOS: brew install openscad"
        exit 1
    fi
}

# Create output directory
setupoutput() {
    mkdir -p "$OUTPUTDIR"
    echo -e "${YELLOW}Output directory: $OUTPUTDIR${NC}"
}

# Find all SCAD files
findscadfiles() {
    echo "Searching for SCAD files..."
    while IFS= read -r file; do
        SCADFILES+=("$file")
    done < <(find . -name "*.scad" -type f | sort)
    
    if [ ${#SCADFILES[@]} -eq 0 ]; then
        echo -e "${RED}No SCAD files found!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Found ${#SCADFILES[@]} SCAD files${NC}"
}

# Compile a single SCAD file
compilescad() {
    local scadfile="$1"
    local outputfile="${OUTPUTDIR}/$(basename "$scadfile" .scad).stl"
    
    echo -n "Building: $scadfile ... "
    
    if $OPENSCADCMD -o "$outputfile" "$scadfile" 2>/dev/null; then
        echo -e "${GREEN} Success${NC}"
        SUCCESSCOUNT=$((SUCCESSCOUNT + 1))
        return 0
    else
        echo -e "${RED}✗ Failed${NC}"
        FAILEDCOUNT=$((FAILEDCOUNT + 1))
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

checkopenscad
setupoutput
findscadfiles

echo ""
echo "Building ${#SCADFILES[@]} files..."
echo "=========================================="

# Build all SCAD files
for scadfile in "${SCADFILES[@]}"; do
    compilescad "$scadfile"
done

echo "=========================================="
echo ""
echo -e "Build Summary:"
echo -e "  ${GREEN} Successful: $SUCCESSCOUNT${NC}"
if [ $FAILEDCOUNT -gt 0 ]; then
    echo -e "  ${RED}✗ Failed: $FAILEDCOUNT${NC}"
fi
echo ""

# Exit with appropriate code
if [ $FAILEDCOUNT -eq 0 ]; then
    echo -e "${GREEN}All builds successful!${NC}"
    echo "Files ready in: $OUTPUTDIR"
    exit 0
else
    echo -e "${RED}$FAILEDCOUNT build(s) failed. Check for errors above.${NC}"
    exit 1
fi
