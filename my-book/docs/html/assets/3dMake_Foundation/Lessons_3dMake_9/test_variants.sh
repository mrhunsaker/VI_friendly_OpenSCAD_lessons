#!/bin/bash

# testvariants.sh - Test different parameter variations of SCAD files
# Generates multiple versions of a design with different parameters
# Useful for testing parametric designs and export optimization

# Configuration
SCADFILE="${1:-./*.scad}"
OUTPUTDIR="${2:-./variants}"
OPENSCADCMD="openscad"
TESTCOUNT=0

# ============================================
# VARIANT CONFIGURATIONS
# ============================================

# Define parameter variations to test
# Format: "name:parameter1=value1,parameter2=value2"
declare -a VARIANTS=(
    "small:size=10,thickness=1"
    "medium:size=20,thickness=2"
    "large:size=30,thickness=3"
    "extralarge:size=40,thickness=4"
    "highdetail:fn=50,thickness=2"
    "lowdetail:fn=16,thickness=2"
    "hollow:hollow=true,wallthickness=2"
    "solid:hollow=false,wallthickness=3"
)

# ============================================
# FUNCTIONS
# ============================================

setup() {
    mkdir -p "$OUTPUTDIR"
    echo "Output directory: $OUTPUTDIR"
    echo ""
}

testvariant() {
    local name="$1"
    local params="$2"
    local scadfile="$3"
    local outputfile="${OUTPUTDIR}/${name}.stl"
    
    echo -n "Testing variant '$name' ... "
    
    # Build parameter string for OpenSCAD
    local paramstring=""
    IFS=',' read -ra PARAMS <<< "$params"
    for param in "${PARAMS[@]}"; do
        paramstring="$paramstring -D $param"
    done
    
    if $OPENSCADCMD $paramstring -o "$outputfile" "$scadfile" 2>/dev/null; then
        local size=$(du -h "$outputfile" | cut -f1)
        echo " ($size)"
        TESTCOUNT=$((TESTCOUNT + 1))
        return 0
    else
        echo "✗ Failed"
        return 1
    fi
}

runtests() {
    echo "Testing ${#VARIANTS[@]} variants of: $1"
    echo "=========================================="
    echo ""
    
    for variant in "${VARIANTS[@]}"; do
        IFS=':' read -r name params <<< "$variant"
        testvariant "$name" "$params" "$1"
    done
}

summary() {
    echo ""
    echo "=========================================="
    echo "Test Summary: $TESTCOUNT variants created"
    echo "View results in: $OUTPUTDIR"
    echo ""
    echo "Next steps:"
    echo "  1. Load STL files in your slicer"
    echo "  2. Compare print times and file sizes"
    echo "  3. Identify optimal parameters"
    echo "  4. Use best variant for production"
}

# ============================================
# MAIN
# ============================================

setup

# Find SCAD file if using wildcard
if [[ $SCADFILE == *"*"* ]]; then
    SCADFILE=$(ls -1 ${SCADFILE} 2>/dev/null | head -n1)
    if [ -z "$SCADFILE" ]; then
        echo "No SCAD files found!"
        exit 1
    fi
fi

runtests "$SCADFILE"
summary

exit 0
