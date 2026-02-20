#!/bin/bash

# test_variants.sh - Test different parameter variations of SCAD files
# Generates multiple versions of a design with different parameters
# Useful for testing parametric designs and export optimization

# Configuration
SCAD_FILE="${1:-./*.scad}"
OUTPUT_DIR="${2:-./_variants}"
OPENSCAD_CMD="openscad"
TEST_COUNT=0

# ============================================
# VARIANT CONFIGURATIONS
# ============================================

# Define parameter variations to test
# Format: "name:parameter1=value1,parameter2=value2"
declare -a VARIANTS=(
    "small:size=10,thickness=1"
    "medium:size=20,thickness=2"
    "large:size=30,thickness=3"
    "extra_large:size=40,thickness=4"
    "high_detail:fn=50,thickness=2"
    "low_detail:fn=16,thickness=2"
    "hollow:hollow=true,wall_thickness=2"
    "solid:hollow=false,wall_thickness=3"
)

# ============================================
# FUNCTIONS
# ============================================

setup() {
    mkdir -p "$OUTPUT_DIR"
    echo "Output directory: $OUTPUT_DIR"
    echo ""
}

test_variant() {
    local name="$1"
    local params="$2"
    local scad_file="$3"
    local output_file="${OUTPUT_DIR}/${name}.stl"
    
    echo -n "Testing variant '$name' ... "
    
    # Build parameter string for OpenSCAD
    local param_string=""
    IFS=',' read -ra PARAMS <<< "$params"
    for param in "${PARAMS[@]}"; do
        param_string="$param_string -D $param"
    done
    
    if $OPENSCAD_CMD $param_string -o "$output_file" "$scad_file" 2>/dev/null; then
        local size=$(du -h "$output_file" | cut -f1)
        echo "✓ ($size)"
        TEST_COUNT=$((TEST_COUNT + 1))
        return 0
    else
        echo "✗ Failed"
        return 1
    fi
}

run_tests() {
    echo "Testing ${#VARIANTS[@]} variants of: $1"
    echo "=========================================="
    echo ""
    
    for variant in "${VARIANTS[@]}"; do
        IFS=':' read -r name params <<< "$variant"
        test_variant "$name" "$params" "$1"
    done
}

summary() {
    echo ""
    echo "=========================================="
    echo "Test Summary: $TEST_COUNT variants created"
    echo "View results in: $OUTPUT_DIR"
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
if [[ $SCAD_FILE == *"*"* ]]; then
    SCAD_FILE=$(ls -1 ${SCAD_FILE} 2>/dev/null | head -n1)
    if [ -z "$SCAD_FILE" ]; then
        echo "No SCAD files found!"
        exit 1
    fi
fi

run_tests "$SCAD_FILE"
summary

exit 0
