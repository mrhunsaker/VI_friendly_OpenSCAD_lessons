# Lesson 9: Automation and 3dm Workflows {#3dmake_foundation_lessons_3dmake_9-lessons_3dmake_9}

Estimated time: 90-120 minutes

Learning Objectives

- Chain 3dm commands to automate the design-to-print pipeline[^1]
- Create shell scripts that manage multiple model variants automatically[^1]
- Use `3dm lib` for library management and code reuse[^2]
- Optimize workflows for batch processing and continuous improvement[^1]

Materials

- 3dMake project scaffold with multiple model files
- Terminal/command line access
- Text editor for script creation

## The 3dm Command Chain

Instead of running commands one at a time, you can chain them to automate the entire workflow:

```bash
# Individual commands (slow, manual)
3dm build src/main.scad
3dm describe src/main.scad
3dm slice src/main.scad

# Chained commands (fast, automatic)
3dm build src/main.scad && 3dm describe src/main.scad && 3dm slice src/main.scad
```

The `&&` operator ensures each command runs only if the previous one succeeds.

## Step-by-step Tasks

### Task 1: Create a Multi-Variant Project

Organize your project with multiple model files:

```
src/
+------ main.scad              # Base model
+------ keycap_small.scad      # Variant 1
+------ keycap_medium.scad     # Variant 2
+------ keycap_large.scad      # Variant 3
+------ stand_test.scad        # Experimental model
```

Each file should be independent and buildable:

```openscad
// keycap_small.scad
key_size = 14;
key_height = 10;
letter = "S";
// ... rest of keycap code
```

### Task 2: Create a Batch Build Script

Create `build_all.sh` to build, describe, and slice all models:

```bash
#!/bin/bash
# build_all.sh - Batch process all SCAD files

echo "=== Building all models ==="

for scad_file in src/*.scad; do
  echo "Processing: $scad_file"
  
  # Extract filename without extension
  base_name=$(basename "$scad_file" .scad)
  
  # Build
  echo "  Building..."
  3dm build "$scad_file" || continue
  
  # Describe (AI analysis if configured)
  echo "  Describing..."
  3dm describe "$scad_file" > "build/${base_name}.description.txt"
  
  # Slice (generate G-code)
  echo "  Slicing..."
  3dm slice "$scad_file"
  
  # Move G-code to organized folder
  if [ -f "build/main.gcode" ]; then
    mv "build/main.gcode" "build/${base_name}.gcode"
  fi
  
  echo "   Done: $base_name"
done

echo "=== All models processed ==="
ls -lh build/*.gcode
```

To run the script:

```bash
chmod +x build_all.sh    # Make executable
./build_all.sh           # Run
```

### Task 3: Create a Variant Testing Script

Test parameter variations automatically and compare results:

```bash
#!/bin/bash
# test_variants.sh - Build and compare parameter variants

echo "=== Testing keycap variants ==="

# Array of sizes to test
sizes=(12 16 20 24)

for size in "${sizes[@]}"; do
  echo "Testing size: ${size}mm"
  
  # Create temporary SCAD with this size
  cat > temp_keycap.scad << EOF
key_size = $size;
key_height = 12;
wall = 1.2;
letter = "T";

module shell(){
  difference(){
    cube([key_size, key_size, key_height], center=false);
    translate([wall, wall, wall])
      cube([key_size-2*wall, key_size-2*wall, key_height], center=false);
  }
}

module emboss(){
  translate([key_size/2, key_size/2, key_height-0.01])
    linear_extrude(height=0.8)
      text("T", size=10, halign="center", valign="center");
}

union(){
  shell();
  emboss();
}
EOF

  # Build and analyze
  3dm build temp_keycap.scad
  
  # Get file size (proxy for material volume)
  stl_file="build/temp_keycap.stl"
  file_size=$(stat -f%z "$stl_file" 2>/dev/null || stat -c%s "$stl_file" 2>/dev/null)
  
  echo "  -> STL size: $(numfmt --to=iec-i --suffix=B "$file_size" 2>/dev/null || echo "$file_size bytes")"
  
  # Save for comparison
  cp "$stl_file" "build/keycap_${size}mm.stl"
done

echo "=== Variant testing complete ==="
echo "Results saved to build/"
```

### Task 4: Library Management

Organize reusable modules into libraries:

```bash
# Create a library structure
mkdir -p lib
mkdir -p lib/connectors
mkdir -p lib/shapes
mkdir -p lib/fasteners

# Create lib/shapes/rounded_cube.scad
cat > lib/shapes/rounded_cube.scad << 'EOF'
// Rounded cube module for reuse across projects

module rounded_cube(w, h, d, radius, fn=16) {
  minkowski(){
    cube([w-2*radius, h-2*radius, d-2*radius], center=true);
    cylinder(r=radius, h=0.01, $fn=fn);
  }
}

// Example usage:
// rounded_cube(20, 20, 20, 2);
EOF

# View available libraries
3dm lib list

# Install a community library
3dm lib install BOSL2
```

Then in your main.scad:

```openscad
include <lib/shapes/rounded_cube.scad>
// Use the custom module
rounded_cube(30, 20, 15, 2);
```

### Task 5: Continuous Integration Concept

Create a workflow that regenerates designs when parameters change:

```bash
#!/bin/bash
# watch_and_build.sh - Rebuild whenever SCAD files change

watch_dir="src"
build_dir="build"

echo "Watching for changes in $watch_dir..."

while true; do
  # Find recently modified files
  find "$watch_dir" -name "*.scad" -mmin -1 | while read file; do
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Change detected: $file"
    
    # Rebuild
    3dm build "$file" && echo "   Build successful"
  done
  
  sleep 5  # Check every 5 seconds
done
```

## Batch Processing Workflow

Complete pipeline from code to print-ready files:

```bash
#!/bin/bash
# production_build.sh - Complete pipeline

PROJECT="my_keycaps"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_DIR="builds/$PROJECT/$TIMESTAMP"

mkdir -p "$OUTPUT_DIR"

echo "=== Production Build: $PROJECT ($TIMESTAMP) ==="

# Step 1: Build all models
for scad in src/*.scad; do
  name=$(basename "$scad" .scad)
  echo "Building: $name"
  3dm build "$scad" || { echo "Failed: $name"; exit 1; }
  cp "build/main.stl" "$OUTPUT_DIR/${name}.stl"
  cp "build/main.gcode" "$OUTPUT_DIR/${name}.gcode"
done

# Step 2: Generate summaries
echo "Generating build report..."
{
  echo "# Production Build Report"
  echo "Date: $(date)"
  echo "Project: $PROJECT"
  echo ""
  echo "## Files Generated"
  ls -lh "$OUTPUT_DIR"
  echo ""
  echo "## Total Material Required"
  du -sh "$OUTPUT_DIR"
} > "$OUTPUT_DIR/BUILD_REPORT.md"

# Step 3: Archive
echo "Archiving..."
tar -czf "${OUTPUT_DIR}.tar.gz" "$OUTPUT_DIR"

echo "=== Build complete ==="
echo "Output: $OUTPUT_DIR"
echo "Archive: ${OUTPUT_DIR}.tar.gz"
```

## File Import/Export: Working with External Assets

Professional OpenSCAD projects often incorporate external files-DXF drawings, SVG logos, or shared library modules. Understanding import, include, and use is critical for managing complex projects.

### import(): Loading 3D Files (DXF, STL, AMF)

Import 3D geometry from external files. Useful for incorporating CAD data or third-party parts:

```openscad
// Import DXF profile and extrude it
import("path/to/profile.dxf");  // Load 2D or 3D geometry
// Practical example: Import CAD drawing and extrude
module extruded_part() {
  linear_extrude(height=10)
    import("technical_drawing.dxf");
}
// Scale imported geometry (OpenSCAD units may differ from source)
scale([1, 1, 10])  // Scale Z by 10 if DXF uses different units
  import("part.dxf");
```

Practical Example: Combining CAD and Parametric Design

```openscad
// Import a technical DXF sketch and create 3D model around it
module custom_bracket() {
  // Import 2D profile from technical drawing
  difference() {
    linear_extrude(height=5)
      scale(25.4)  // Convert from inches to mm
        import("bracket_profile.dxf");
    // Add mounting holes (parametric)
    for (x = [10, 40])
      for (y = [10, 40])
        translate([x, y, -5])
          cylinder(h=15, d=3, $fn=16);
  }
}
custom_bracket();
```

### include vs use: Library Management

Both load external SCAD files, but with different scoping:

```openscad
// include: Imports functions and modules into current namespace
// Use this when you want all definitions merged into current file
include <library.scad>
// Now you can use any function/module defined in library.scad
my_shape();
// ============================================
// use: Imports but creates separate namespace
// Use this when you want to avoid name conflicts
use <library.scad>
// You must prefix functions/modules with filename (no extension)
library:my_shape();
```

Practical Example: Multi-File Project Structure

```openscad
// main.scad - Main project file
// Load reusable components
include <utilities.scad>        // Common helpers
include <fasteners.scad>        // Bolt/screw definitions
include <connectors.scad>       // Joining mechanisms
// Define local modules
module housing() {
  difference() {
    cube([100, 100, 50]);
    translate([10, 10, 10])
      cube([80, 80, 40]);
  }
}
// Use imported components
union() {
  housing();
  // Position imported fasteners
  translate([10, 10, 50])
    bolt_m3(length=10);
  translate([90, 10, 50])
    bolt_m3(length=10);
}
```

Content of utilities.scad (included file):

```openscad
// utilities.scad - Reusable helper functions
// Create repeating pattern
module repeat_linear(count, spacing) {
  for (i = [0:count-1])
    translate([i * spacing, 0, 0])
      children();
}
// Create grid of components
module grid_pattern(cols, rows, spacing) {
  for (x = [0:cols-1])
    for (y = [0:rows-1])
      translate([x * spacing, y * spacing, 0])
        children();
}
function calculate_bolt_clearance(bolt_diameter) = bolt_diameter + 0.5;
```

### Export Formats: DXF, SVG, AMF

After creating your model, export it in various formats:

```bash
# Render to STL (standard 3D printing format)
3dm slice src/main.scad

# Export specific formats using OpenSCAD command line
openscad -o output.dxf src/main.scad      # 2D projection as DXF
openscad -o output.svg src/main.scad      # 2D projection as SVG
openscad -o output.amf src/main.scad      # AMF (supports color/material)
```

Practical Example: Complete Export Workflow

```bash
#!/bin/bash
# export_variants.sh - Export design in multiple formats

INPUT_FILE="src/main.scad"
OUTPUT_DIR="build/exports"

mkdir -p "$OUTPUT_DIR"

echo "Exporting $INPUT_FILE in multiple formats..."

# STL (3D printing)
openscad -o "$OUTPUT_DIR/model.stl" "$INPUT_FILE"
echo "[YES] STL export complete"

# DXF (CAD compatible)
openscad -o "$OUTPUT_DIR/model_projection.dxf" "$INPUT_FILE"
echo "[YES] DXF export complete"

# SVG (web and vector graphics)
openscad -o "$OUTPUT_DIR/model_projection.svg" "$INPUT_FILE"
echo "[YES] SVG export complete"

# Generate report
echo ""
echo "=== Export Summary ==="
ls -lh "$OUTPUT_DIR"
```

### Advanced: Dynamic File Loading Based on Parameters

Create designs that load different components based on configuration:

```openscad
// Dynamic library loader
// Automatically selects component based on parameter
material = "aluminum";  // or "steel", "plastic"
component_type = "bracket";  // or "connector", "fastener"
// Load appropriate component library
include <materials/aluminum_properties.scad>
include <components/bracket_library.scad>
include <components/connector_library.scad>
// Create part using selected material properties
module material_part(dimensions) {
  material_density = material_density_aluminum;  // From included file
  material_strength = material_strength_aluminum;
  // Apply material-specific design rules
  wall_thickness = (material_strength < 50) ? 3 : 2;
  difference() {
    cube(dimensions);
    translate([2, 2, 2])
      cube([dimensions[0]-4, dimensions[1]-4, dimensions[2]-4]);
  }
}
material_part([50, 50, 30]);
```

### File Path Handling and Organization

Best practices for organizing files in larger projects:

```openscad
// Recommended project structure
/*
my_project/
+------ src/
|   +------ main.scad
|   +------ components/
|   |   +------ fasteners.scad
|   |   +------ connectors.scad
|   |   +------ mounting.scad
|   +------ libraries/
|       +------ utilities.scad
|       +------ math_functions.scad
+------ assets/
|   +------ sketches/
|   |   +------ bracket_profile.dxf
|   |   +------ panel_layout.svg
|   +------ references/
|       +------ part_specifications.pdf
+------ build/
    +------ main.stl
    +------ exports/
    |   +------ main.dxf
    |   +------ main.svg
    +------ documentation/
*/
// In main.scad, use relative paths:
include <components/fasteners.scad>
include <components/connectors.scad>
// For assets in different directory:
module panel_with_logo() {
  difference() {
    cube([100, 100, 5]);
    // Import logo if available
    translate([50, 50, 4.5])
      linear_extrude(0.8)
        import("../assets/sketches/logo.svg");
  }
}
```

### Complete Multi-File Assembly Example

```openscad
// main.scad - Complete assembly with imports and exports
include <components/housing.scad>
include <components/internal_support.scad>
use <utilities/positioning_helpers.scad>
// Main assembly
module complete_product() {
  // Housing (from included file)
  housing_shell();
  // Internal support structures
  color("lightgray")
    internal_reinforcement();
  // Add imported external parts
  translate([0, 0, 20])
    import("../assets/pcb_holder.dxf");
}
// Render the complete product
complete_product();
// Export notes:
// - STL: Full 3D model for 3D printing
// - DXF: 2D projection for laser cutting or CNC
// - SVG: 2D artwork for documentation
// - AMF: Multi-material format (if colors matter)
```

## Checkpoint

- After task 2, you have a working batch build script
- After task 3, you've tested multiple parameter variants
- After task 5, you understand continuous integration concepts

## Quiz - Lesson 3dMake.9 (10 questions)

1. What does the `&&` operator do in a command chain[^1]?
2. Why would you use a batch build script instead of running commands manually[^1]?
3. How would you extract the filename without extension in a bash script[^1]?
4. Explain the purpose of creating a temporary SCAD file for variant testing[^1].
5. What is `3dm lib list` used for[^2]?
6. True or False: You must manually edit each model file to test different parameters.
7. Describe what a continuous integration workflow accomplishes[^1].
8. How would you save variant test results for comparison[^1]?
9. What file format would you use to archive completed builds for long-term storage[^1]?
10. How could you use scripting to automatically generate documentation for your designs[^1]?

## Extension Problems (10)

1. Create a batch build script that processes 5+ model variants and generates a comparison report[^1].
2. Design a parameter testing matrix: test 3 dimensions x 3 wall thicknesses and compare results[^1].
3. Build a library module for common features (brackets, connectors, fasteners); use in multiple projects[^2].
4. Create a "watch and rebuild" script that automatically regenerates designs when code changes[^1].
5. Develop a production workflow script that generates timestamped builds with complete documentation[^1].
6. Build an automated testing framework: validate designs against dimensional requirements[^1].
7. Create a version control integration: automatically tag and archive successful builds[^1].
8. Design a design parameter database: store and query historical variants and their properties[^1].
9. Develop a remote print queue system: batch multiple models and send to printer automatically[^1].
10. Write a comprehensive automation documentation: best practices, script templates, troubleshooting, and accessibility considerations.

## Helpful Shell Commands Reference

| Command                                              | Purpose                   |
|------------------------------------------------------|---------------------------|
| `chmod +x script.sh`                                 | Make script executable    |
| `./script.sh`                                        | Run a shell script        |
| `for file in *.scad; do ... done`                    | Loop through files        |
| `basename file.scad .scad`                           | Remove extension          |
| `stat -c%s file` (Linux) or `stat -f%z file` (macOS) | Get file size             |
| `find dir -name "*.scad"`                            | Find all SCAD files       |
| `tar -czf archive.tar.gz folder/`                    | Create compressed archive |
| `du -sh folder/`                                     | Show folder size          |

References

[^1]: 3DMake GitHub - Automation Examples - [https://github.com/tdeck/3dmake/blob/main/docs/automation.md](https://github.com/tdeck/3dmake/blob/main/docs/automation.md)
[^2]: 3DMake Library Management - [https://github.com/tdeck/3dmake/wiki/Library-Management](https://github.com/tdeck/3dmake/wiki/Library-Management)
