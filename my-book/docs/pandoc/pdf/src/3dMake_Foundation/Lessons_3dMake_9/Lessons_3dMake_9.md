[Header 2 ("3dmake_foundation_lessons_3dmake_9-lessons_3dmake_9", [], []) [Str "Lesson 9: Automation and 3dm Workflows"], Para [Str "Estimated time}}: 90-120 minutes"], Para [Str "Learning Objectives"], BulletList [[Plain [Str "Chain 3dm commands}} to automate the design}}-to-print}} pipeline", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]]]], [Plain [Str "Create shell}} scripts}} that manage multiple model variants automatically", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]]]], [Plain [Str "Use ", Code ("", [], []) "3dm lib", Str " for library management and code}} reuse", Note [Para [Str "3DMake}} Library Management - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/wiki/Library-Management"] ("https://github.com/tdeck/3dmake/wiki/Library-Management", "")]]]], [Plain [Str "Optimize workflows for batch processing and continuous improvement", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]]]]], Para [Str "Materials"], BulletList [[Plain [Str "3dMake project scaffold with multiple model files}}"]], [Plain [Str "Terminal/command}} line access"]], [Plain [Str "Text editor for script}} creation"]]], Header 3 ("the-3dm-command-chain", ["unnumbered", "unlisted"], []) [Str "The 3dm Command Chain"], Para [Str "Instead of running commands}} one}} at a time}}, you}} can}} chain them to automate the entire workflow}}:"], CodeBlock ("", ["bash"], []) "# Individual commands (slow, manual)
3dm build src/main.scad
3dm describe src/main.scad
3dm slice src/main.scad

# Chained commands (fast, automatic)
3dm build src/main.scad && 3dm describe src/main.scad && 3dm slice src/main.scad
", Para [Str "The ", Code ("", [], []) "&&", Str " operator ensures each}} command}} runs only if the previous one}} succeeds."], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("task-1-create-a-multi-variant-project", ["unnumbered", "unlisted"], []) [Str "Task 1: Create a Multi-Variant Project"], Para [Str "Organize your project with multiple model files}}:"], CodeBlock ("", [""], []) "src/
+------ main.scad              # Base model
+------ keycap_small.scad      # Variant 1
+------ keycap_medium.scad     # Variant 2
+------ keycap_large.scad      # Variant 3
+------ stand_test.scad        # Experimental model
", Para [Str "Each file}} should be independent and buildable:"], CodeBlock ("", ["openscad"], []) "// keycap_small.scad
key_size = 14;
key_height = 10;
letter = \"S\";
// ... rest of keycap code
", Header 4 ("task-2-create-a-batch-build-script", ["unnumbered", "unlisted"], []) [Str "Task 2: Create a Batch Build Script"], Para [Str "Create ", Code ("", [], []) "build_all.sh", Str " to build}}, describe, and slice all models:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# build_all.sh - Batch process all SCAD files

echo \"=== Building all models ===\"

for scad_file in src/*.scad; do
  echo \"Processing: $scad_file\"
  
  # Extract filename without extension
  base_name=$(basename \"$scad_file\" .scad)
  
  # Build
  echo \"  Building...\"
  3dm build \"$scad_file\" || continue
  
  # Describe (AI analysis if configured)
  echo \"  Describing...\"
  3dm describe \"$scad_file\" > \"build/${base_name}.description.txt\"
  
  # Slice (generate G-code)
  echo \"  Slicing...\"
  3dm slice \"$scad_file\"
  
  # Move G-code to organized folder
  if [ -f \"build/main.gcode\" ]; then
    mv \"build/main.gcode\" \"build/${base_name}.gcode\"
  fi
  
  echo \"   Done: $base_name\"
done

echo \"=== All models processed ===\"
ls -lh build/*.gcode
", Para [Str "To run}} the script}}:"], CodeBlock ("", ["bash"], []) "chmod +x build_all.sh    # Make executable
./build_all.sh           # Run
", Header 4 ("task-3-create-a-variant-testing-script", ["unnumbered", "unlisted"], []) [Str "Task 3: Create a Variant Testing Script"], Para [Str "Test parameter}} variations automatically and compare results:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# test_variants.sh - Build and compare parameter variants

echo \"=== Testing keycap variants ===\"

# Array of sizes to test
sizes=(12 16 20 24)

for size in \"${sizes[@]}\"; do
  echo \"Testing size: ${size}mm\"
  
  # Create temporary SCAD with this size
  cat > temp_keycap.scad << EOF
key_size = $size;
key_height = 12;
wall = 1.2;
letter = \"T\";

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
      text(\"T\", size=10, halign=\"center\", valign=\"center\");
}

union(){
  shell();
  emboss();
}
EOF

  # Build and analyze
  3dm build temp_keycap.scad
  
  # Get file size (proxy for material volume)
  stl_file=\"build/temp_keycap.stl\"
  file_size=$(stat -f%z \"$stl_file\" 2>/dev/null || stat -c%s \"$stl_file\" 2>/dev/null)
  
  echo \"  -> STL size: $(numfmt --to=iec-i --suffix=B \"$file_size\" 2>/dev/null || echo \"$file_size bytes\")\"
  
  # Save for comparison
  cp \"$stl_file\" \"build/keycap_${size}mm.stl\"
done

echo \"=== Variant testing complete ===\"
echo \"Results saved to build/\"
", Header 4 ("task-4-library-management", ["unnumbered", "unlisted"], []) [Str "Task 4: Library Management"], Para [Str "Organize reusable modules into}} libraries:"], CodeBlock ("", ["bash"], []) "# Create a library structure
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
", Para [Str "Then in your main.scad:"], CodeBlock ("", ["openscad"], []) "include <lib/shapes/rounded_cube.scad>
// Use the custom module
rounded_cube(30, 20, 15, 2);
", Header 4 ("task-5-continuous-integration-concept", ["unnumbered", "unlisted"], []) [Str "Task 5: Continuous Integration Concept"], Para [Str "Create a workflow}} that regenerates designs when parameters}} change:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# watch_and_build.sh - Rebuild whenever SCAD files change

watch_dir=\"src\"
build_dir=\"build\"

echo \"Watching for changes in $watch_dir...\"

while true; do
  # Find recently modified files
  find \"$watch_dir\" -name \"*.scad\" -mmin -1 | while read file; do
    echo \"$(date '+%Y-%m-%d %H:%M:%S') - Change detected: $file\"
    
    # Rebuild
    3dm build \"$file\" && echo \"   Build successful\"
  done
  
  sleep 5  # Check every 5 seconds
done
", Header 3 ("batch-processing-workflow", ["unnumbered", "unlisted"], []) [Str "Batch Processing Workflow"], Para [Str "Complete pipeline from code}} to print}}-ready files}}:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# production_build.sh - Complete pipeline

PROJECT=\"my_keycaps\"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
OUTPUT_DIR=\"builds/$PROJECT/$TIMESTAMP\"

mkdir -p \"$OUTPUT_DIR\"

echo \"=== Production Build: $PROJECT ($TIMESTAMP) ===\"

# Step 1: Build all models
for scad in src/*.scad; do
  name=$(basename \"$scad\" .scad)
  echo \"Building: $name\"
  3dm build \"$scad\" || { echo \"Failed: $name\"; exit 1; }
  cp \"build/main.stl\" \"$OUTPUT_DIR/${name}.stl\"
  cp \"build/main.gcode\" \"$OUTPUT_DIR/${name}.gcode\"
done

# Step 2: Generate summaries
echo \"Generating build report...\"
{
  echo \"# Production Build Report\"
  echo \"Date: $(date)\"
  echo \"Project: $PROJECT\"
  echo \"\"
  echo \"## Files Generated\"
  ls -lh \"$OUTPUT_DIR\"
  echo \"\"
  echo \"## Total Material Required\"
  du -sh \"$OUTPUT_DIR\"
} > \"$OUTPUT_DIR/BUILD_REPORT.md\"

# Step 3: Archive
echo \"Archiving...\"
tar -czf \"${OUTPUT_DIR}.tar.gz\" \"$OUTPUT_DIR\"

echo \"=== Build complete ===\"
echo \"Output: $OUTPUT_DIR\"
echo \"Archive: ${OUTPUT_DIR}.tar.gz\"
", Header 3 ("file-importexport-working-with-external-assets", ["unnumbered", "unlisted"], []) [Str "File Import/Export: Working with External Assets"], Para [Str "Professional OpenSCAD}} projects often incorporate external files}}-DXF drawings, SVG logos, or shared library modules. Understanding import, include, and use is critical for managing complex projects."], Header 4 ("import-loading-3d-files-dxf-stl-amf", ["unnumbered", "unlisted"], []) [Str "import(): Loading 3D Files (DXF, STL}}, AMF)"], Para [Str "Import 3D geometry}} from external files}}. Useful for incorporating CAD data or third-party parts:"], CodeBlock ("", ["openscad"], []) "// Import DXF profile and extrude it
import(\"path/to/profile.dxf\");  // Load 2D or 3D geometry
// Practical example: Import CAD drawing and extrude
module extruded_part() {
  linear_extrude(height=10)
    import(\"technical_drawing.dxf\");
}
// Scale imported geometry (OpenSCAD units may differ from source)
scale([1, 1, 10])  // Scale Z by 10 if DXF uses different units
  import(\"part.dxf\");
", Para [Str "Practical Example: Combining CAD and Parametric Design}}"], CodeBlock ("", ["openscad"], []) "// Import a technical DXF sketch and create 3D model around it
module custom_bracket() {
  // Import 2D profile from technical drawing
  difference() {
    linear_extrude(height=5)
      scale(25.4)  // Convert from inches to mm
        import(\"bracket_profile.dxf\");
    // Add mounting holes (parametric)
    for (x = [10, 40])
      for (y = [10, 40])
        translate([x, y, -5])
          cylinder(h=15, d=3, $fn=16);
  }
}
custom_bracket();
", Header 4 ("include-vs-use-library-management", ["unnumbered", "unlisted"], []) [Str "include vs use: Library Management"], Para [Str "Both load external SCAD files}}, but with different scoping:"], CodeBlock ("", ["openscad"], []) "// include: Imports functions and modules into current namespace
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
", Para [Str "Practical Example: Multi-File Project Structure"], CodeBlock ("", ["openscad"], []) "// main.scad - Main project file
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
", Para [Str "Content of utilities.scad (included file}}):"], CodeBlock ("", ["openscad"], []) "// utilities.scad - Reusable helper functions
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
", Header 4 ("export-formats-dxf-svg-amf", ["unnumbered", "unlisted"], []) [Str "Export Formats: DXF, SVG, AMF"], Para [Str "After creating your model, export it in various formats:"], CodeBlock ("", ["bash"], []) "# Render to STL (standard 3D printing format)
3dm slice src/main.scad

# Export specific formats using OpenSCAD command line
openscad -o output.dxf src/main.scad      # 2D projection as DXF
openscad -o output.svg src/main.scad      # 2D projection as SVG
openscad -o output.amf src/main.scad      # AMF (supports color/material)
", Para [Str "Practical Example: Complete Export Workflow"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# export_variants.sh - Export design in multiple formats

INPUT_FILE=\"src/main.scad\"
OUTPUT_DIR=\"build/exports\"

mkdir -p \"$OUTPUT_DIR\"

echo \"Exporting $INPUT_FILE in multiple formats...\"

# STL (3D printing)
openscad -o \"$OUTPUT_DIR/model.stl\" \"$INPUT_FILE\"
echo \"[YES] STL export complete\"

# DXF (CAD compatible)
openscad -o \"$OUTPUT_DIR/model_projection.dxf\" \"$INPUT_FILE\"
echo \"[YES] DXF export complete\"

# SVG (web and vector graphics)
openscad -o \"$OUTPUT_DIR/model_projection.svg\" \"$INPUT_FILE\"
echo \"[YES] SVG export complete\"

# Generate report
echo \"\"
echo \"=== Export Summary ===\"
ls -lh \"$OUTPUT_DIR\"
", Header 4 ("advanced-dynamic-file-loading-based-on-parameters", ["unnumbered", "unlisted"], []) [Str "Advanced: Dynamic File Loading Based on Parameters"], Para [Str "Create designs that load different components based on configuration:"], CodeBlock ("", ["openscad"], []) "// Dynamic library loader
// Automatically selects component based on parameter
material = \"aluminum\";  // or \"steel\", \"plastic\"
component_type = \"bracket\";  // or \"connector\", \"fastener\"
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
", Header 4 ("file-path-handling-and-organization", ["unnumbered", "unlisted"], []) [Str "File Path Handling and Organization"], Para [Str "Best practices for organizing files}} in larger projects:"], CodeBlock ("", ["openscad"], []) "// Recommended project structure
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
        import(\"../assets/sketches/logo.svg\");
  }
}
", Header 4 ("complete-multi-file-assembly-example", ["unnumbered", "unlisted"], []) [Str "Complete Multi-File Assembly Example"], CodeBlock ("", ["openscad"], []) "// main.scad - Complete assembly with imports and exports
include <components/housing.scad>
include <components/internal_support.scad>
use <utilities/positioning_helpers.scad>
// Main assembly
module complete_product() {
  // Housing (from included file)
  housing_shell();
  // Internal support structures
  color(\"lightgray\")
    internal_reinforcement();
  // Add imported external parts
  translate([0, 0, 20])
    import(\"../assets/pcb_holder.dxf\");
}
// Render the complete product
complete_product();
// Export notes:
// - STL: Full 3D model for 3D printing
// - DXF: 2D projection for laser cutting or CNC
// - SVG: 2D artwork for documentation
// - AMF: Multi-material format (if colors matter)
", Header 3 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After task 2, you}} have a working batch build}} script}}"]], [Plain [Str "After task 3, you}}'ve tested multiple parameter}} variants"]], [Plain [Str "After task 5, you}} understand continuous integration concepts"]]], Header 3 ("quiz---lesson-3dmake9-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.9 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does the ", Code ("", [], []) "&&", Str " operator do in a command}} chain", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]], [Plain [Str "Why would you}} use a batch build}} script}} instead of running commands}} manually", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]], [Plain [Str "How would you}} extract the filename without extension in a bash script}}", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]], [Plain [Str "Explain the purpose of creating a temporary SCAD file}} for variant testing", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "What is ", Code ("", [], []) "3dm lib list", Str " used for", Note [Para [Str "3DMake}} Library Management - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/wiki/Library-Management"] ("https://github.com/tdeck/3dmake/wiki/Library-Management", "")]], Str "?"]], [Plain [Str "True or False: You must manually edit each}} model file}} to test}} different parameters}}."]], [Plain [Str "Describe what a continuous integration workflow}} accomplishes", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "How would you}} save variant test}} results for comparison", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]], [Plain [Str "What file}} format would you}} use to archive completed builds for long-term storage", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]], [Plain [Str "How could you}} use scripting to automatically generate documentation for your designs", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "?"]]], Header 3 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a batch build}} script}} that processes 5+ model variants and generates a comparison report", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Design}} a parameter}} testing matrix: test}} 3 dimensions x 3 wall thicknesses and compare results", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Build a library module}} for common}} features (brackets, connectors, fasteners); use in multiple projects", Note [Para [Str "3DMake}} Library Management - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/wiki/Library-Management"] ("https://github.com/tdeck/3dmake/wiki/Library-Management", "")]], Str "."]], [Plain [Str "Create a \"watch and rebuild\" script}} that automatically regenerates designs when code}} changes", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Develop a production workflow}} script}} that generates timestamped builds with complete documentation", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Build an automated testing framework: validate designs against dimensional requirements", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Create a version control integration: automatically tag and archive successful builds", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Design}} a design}} parameter}} database: store and query historical variants and their properties", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Develop a remote print}} queue system: batch multiple models and send to printer}} automatically", Note [Para [Str "3DMake}} GitHub}} - Automation Examples - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/automation.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/automation.md", "")]], Str "."]], [Plain [Str "Write a comprehensive automation documentation: best practices, script}} templates, troubleshooting, and accessibility}} considerations."]]], Header 3 ("helpful-shell-commands-reference", ["unnumbered", "unlisted"], []) [Str "Helpful Shell}} Commands Reference"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.6666666666666666)), (AlignDefault, (ColWidth 0.3333333333333333))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Purpose"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "chmod +x script.sh"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Make script}} executable"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "./script.sh"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Run a shell}} script}}"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for file in *.scad; do ... done"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loop through files}}"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "basename file.scad .scad"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Remove extension"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "stat -c%s file", Str " (Linux) or ", Code ("", [], []) "stat -f%z file", Str " (macOS)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Get file}} size"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "find dir -name \"*.scad\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Find all SCAD files}}"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "tar -czf archive.tar.gz folder/"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Create compressed archive"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "du -sh folder/"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Show folder size"]]]])] (TableFoot ("", [], []) []), Para [Str "References"]]