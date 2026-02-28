[Header 2 ("3dmake_foundation_lessons_3dmake_3-lessons_3dmake_3", [], []) [Str "Lesson 3: Parametric Architecture and Modular Libraries"], Para [Str "Estimated time: 120-150 minutes"], BulletList [[Plain [Str "Define and document top-level parameters and use them to drive model variants", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]]]], [Plain [Str "Create reusable modules and import a library module into a project", Note [Para [Str "BOSL - OpenSCAD Standard Library - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2"] ("https://github.com/BelfrySCAD/BOSL2", "")]]]], [Plain [Str "Produce and test low-resolution renders and export a working STL", Note [Para [Str "3DMake GitHub - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]]]], Para [Str "Materials"], BulletList [[Plain [Str "A 3dMake project scaffold with ", Code ("", [], []) "src/main.scad"]], [Plain [Str "Example library (e.g., BOSL) available in ", Code ("", [], []) "lib/", Str " or classroom assets"]], [Plain [Str "Reference: ", Link ("", [], []) [Str "openscad-cheat-sheet.md"] ("docs/pandoc/pdf/src/3dMake_Foundation/Lessons_3dMake_2/openscad-cheat-sheet.md#3dmake_foundation_lessons_3dmake_2-openscad-cheat-sheet", ""), Str " for parametric design patterns"]]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Open ", Code ("", [], []) "src/main.scad", Str " and add three top-level parameters (with units) at the top of the file", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Top-level parameters - customize these
part_width = 50;    // mm
part_height = 40;   // mm
part_thickness = 5; // mm
"], [Para [Str "Implement a simple ", Code ("", [], []) "module bracket(width, height, thickness)", Str " that composes primitives and boolean operations", Note [Para [Str "BOSL - OpenSCAD Standard Library - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2"] ("https://github.com/BelfrySCAD/BOSL2", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Simple bracket module - combines primitives with CSG
module bracket(w, h, t) {
  union(){
    // Base plate
    cube([w, h, t], center=false);
    // Vertical support
    translate([0, h-5, 0])
      cube([t, 5, 20], center=false);
  }
}
// Use the module
bracket(part_width, part_height, part_thickness);
"], [Para [Str "Include a library module (e.g., ", Code ("", [], []) "include <bosl/constants.scad>", Str ") and call a small helper from it; run ", Code ("", [], []) "3dm build", Str " ", Note [Para [Str "BOSL - OpenSCAD Standard Library - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2"] ("https://github.com/BelfrySCAD/BOSL2", "")]], Str "."], Para [Str "Alternative: Create your own simple library module:"], CodeBlock ("", ["openscad"], []) "// Create lib/helpers.scad
module simple_fillet(size, radius) {
  // Simple fillet using minkowski
  minkowski(){
    children();
    cylinder(h=0.01, r=radius, $fn=16);
  }
}
", Para [Str "Then in main.scad:"], CodeBlock ("", ["openscad"], []) "include <lib/helpers.scad>
simple_fillet(20, 2){
  cube([20, 20, 20]);
}
"], [Para [Str "Produce a low-resolution render to confirm topology, then export an STL and inspect it in a slicer", Note [Para [Str "OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, ", Link ("", [], []) [Str "https://learn.cadhub.xyz/blog/openscad-review/"] ("https://learn.cadhub.xyz/blog/openscad-review/", "")]], Str "."], BulletList [[Plain [Str "Use ", Code ("", [], []) "$fn=12", Str " or lower during development to speed up renders"]], [Plain [Str "Once satisfied, increase to ", Code ("", [], []) "$fn=32", Str " or ", Code ("", [], []) "$fn=64", Str " for final prints"]]]], [Para [Str "Refactor the module into ", Code ("", [], []) "lib/", Str " with a short README and a usage example", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]]], Header 4 ("going-deeper-parametric-design-and-modular-thinking", ["unnumbered", "unlisted"], []) [Str "Going Deeper: Parametric Design and Modular Thinking"], Para [Str "Now that you've created simple modules, let's explore ", Emph [Str "why"], Str " they matter for design at scale."], Header 5 ("what-is-parametric-design", ["unnumbered", "unlisted"], []) [Str "What Is Parametric Design?"], Para [Str "Parametric design means building your model around adjustable parameters so that a single change propagates automatically throughout your entire design. Instead of hardcoding a dimension like ", Code ("", [], []) "50", Str ", you store it in a variable:"], CodeBlock ("", ["openscad"], []) "// Non-parametric (fragile):
cube([50, 50, 50]);
translate([50, 0, 0]) cube([50, 50, 50]);
translate([100, 0, 0]) cube([50, 50, 50]);
// Parametric (flexible):
box_size = 50;
cube([box_size, box_size, box_size]);
translate([box_size, 0, 0]) cube([box_size, box_size, box_size]);
translate([2*box_size, 0, 0]) cube([box_size, box_size, box_size]);
", Para [Str "If you need to change the box size from 50 to 60 mm, the parametric version requires one change; the non-parametric version requires three edits."], Header 5 ("modules-with-default-parameters", ["unnumbered", "unlisted"], []) [Str "Modules with Default Parameters"], Para [Str "A module becomes even more powerful when you define default parameters:"], CodeBlock ("", ["openscad"], []) "// Define a module with defaults
module storage_box(length = 40, width = 30, height = 20, wall = 2) {
    difference() {
        // Outer shell
        cube([length, width, height]);
        // Inner hollow (remove inside, keep walls and bottom)
        translate([wall, wall, wall])
            cube([length - 2*wall, width - 2*wall, height]);
    }
}
// Call with defaults
storage_box();
// Call with one parameter changed
storage_box(length = 60);
// Call with all custom parameters
storage_box(length = 80, width = 50, height = 30, wall = 3);
", Para [Str "This approach creates a small, medium, and large box set:"], CodeBlock ("", ["openscad"], []) "// Small box (all defaults)
storage_box();
// Medium box (positioned next to small)
translate([45, 0, 0]) storage_box(length = 50, width = 40, height = 25);
// Large box (positioned next to medium)
translate([100, 0, 0]) storage_box(length = 70, width = 55, height = 35);
", Header 5 ("the-dry-principle-dont-repeat-yourself", ["unnumbered", "unlisted"], []) [Str "The DRY Principle: Don't Repeat Yourself"], Para [Str "When you copy-paste the same shape over and over, you create maintenance risk. If you later discover a bug in the shape, you must fix it in ", Emph [Str "every"], Str " copy. Modules eliminate this:"], Para [Str "Without modules (DRY violation):"], CodeBlock ("", ["openscad"], []) "// Bracket repeated 3 times (copy-paste)
union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
translate([50, 0, 0]) union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
translate([100, 0, 0]) union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
", Para [Str "With modules (DRY compliant):"], CodeBlock ("", ["openscad"], []) "module bracket() {
    union(){
        cube([10,10,10]);
        translate([0,20,0]) cube([2,30,10]);
    }
}
bracket();
translate([50, 0, 0]) bracket();
translate([100, 0, 0]) bracket();
", Header 5 ("scope-and-reusability", ["unnumbered", "unlisted"], []) [Str "Scope and Reusability"], Para [Str "Parameters are scoped to their module, meaning you can't access a module's parameters from outside it. This is intentional-it prevents naming conflicts and makes modules truly reusable:"], CodeBlock ("", ["openscad"], []) "module box(size = 10) {
    cube([size, size, size]);
}
// You can use 'size' in multiple contexts without conflict
size = 100;  // Global size
box();       // Calls box with its default size=10
translate([size, 0, 0]) box(size = 50);  // Calls box with size=50
", Header 5 ("importing-libraries-include-vs-use", ["unnumbered", "unlisted"], []) [Str "Importing Libraries: ", Code ("", [], []) "include", Str " vs ", Code ("", [], []) "use"], Para [Str "Once you've written modules in ", Code ("", [], []) "lib/helpers.scad", Str ", you can share them with other projects:"], CodeBlock ("", ["openscad"], []) "// Option 1: include (gives you all functions and modules)
include <lib/helpers.scad>
// Option 2: use (brings in functions but hides module definitions)
use <lib/helpers.scad>
// Now you can call any module from helpers.scad
simple_fillet(20, 2) {
    cube([20, 20, 20]);
}
", Para [Str "For most classroom use, ", Code ("", [], []) "include", Str " is simpler to understand. For larger projects, ", Code ("", [], []) "use", Str " provides cleaner namespace isolation."], Header 5 ("testing-your-modules", ["unnumbered", "unlisted"], []) [Str "Testing Your Modules"], Para [Str "Before committing a module to your library, test it with:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Different parameter values: Call the module with minimum, maximum, and mid-range values"]], [Plain [Str "Default values: Verify that calling it with no parameters produces a reasonable result"]], [Plain [Str "Rendered output: Use ", Code ("", [], []) "$fn = 32", Str " to render the module and visually inspect for geometry issues"]], [Plain [Str "STL export: Export to STL and open in your slicer to check for non-manifold warnings"]]], Para [Str "Checkpoints"], BulletList [[Plain [Str "After step 2 you have a parametric module you can call with different arguments", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]], [Plain [Str "After this section, you should understand how to create modules with default parameters and why that matters for reusability."]]], Header 3 ("advanced-technique-loops-and-repetition", ["unnumbered", "unlisted"], []) [Str "Advanced Technique: Loops and Repetition"], Para [Str "Beyond creating individual modules, OpenSCAD allows you to create multiple copies using for loops. This is powerful for creating arrays, spirals, or radially symmetric designs."], Header 4 ("example-creating-arrays-with-for-loops", ["unnumbered", "unlisted"], []) [Str "Example: Creating Arrays with For Loops"], Para [Str "The ", Code ("", [], []) "for()", Str " function iterates over a range and creates multiple copies of geometry:"], CodeBlock ("", ["openscad"], []) "// Simple 3x3 array of cubes
$fn = 32;
for (x = [0:20:40])
  for (y = [0:20:40])
    translate([x, y, 0])
      cube([10, 10, 10]);
", Para [Str "What it does:"], BulletList [[Plain [Code ("", [], []) "x = [0:20:40]", Str " creates x positions: 0, 20, 40"]], [Plain [Str "Nested ", Code ("", [], []) "y", Str " loop creates 9 positions total (3 x 3)"]], [Plain [Str "Each cube is translated to its position"]]], Header 4 ("practical-example-parametric-fin-can", ["unnumbered", "unlisted"], []) [Str "Practical Example: Parametric Fin Can"], Para [Str "This real-world example from the ", Emph [Str "Simplifying 3D Printing"], Str " textbook demonstrates using for loops to create radially symmetric fins around a cylinder:"], CodeBlock ("", ["openscad"], []) "// Parametric Fin Can - demonstrates for loops and radial arrays
$fn = 100;
// Parameters
height = 70;
diameter = 43.5;
thickness = 1.2;
guide_diameter = 3;
fins = 3;  // Number of fins to create
// Define the fin profile as a 2D polygon
fin_shape = [[0, 0], [height, 0], [100, 35], [100, 45], [35, 35]];
// Module to create a single fin
module create_fin(angle = 0) {
    rotate([0, 0, angle])
    translate([diameter/2, 0, height])
    rotate([90, 90, 0])
    linear_extrude(height = thickness, center = true)
      polygon(fin_shape);
}
// Main assembly
module generate_fin_can() {
    difference() {
        union() {
            // Central cylinder
            cylinder(h = height, d = diameter + thickness);
            // Create fins using a for loop
            for (i = [0 : fins - 1]) {
                create_fin(i * (360 / fins));
            }
            // Guide post
            rotate([0, 0, 180 / fins])
            translate([diameter/2 + guide_diameter/2 + thickness/2, 0, 0])
            difference() {
                cylinder(h = height, d = guide_diameter + thickness);
                cylinder(h = height, d = guide_diameter);
            }
        }
        // Hollow center
        cylinder(h = 1000, d = diameter, center = true);
    }
}
// Render the complete assembly
generate_fin_can();
", Para [Str "Key points:"], BulletList [[Plain [Str "The ", Code ("", [], []) "for (i = [0 : fins - 1])", Str " loop creates a fin at each angle: 0deg, 120deg, 240deg"]], [Plain [Str "The angle is calculated as ", Code ("", [], []) "i * (360 / fins)", Str " to distribute fins evenly"]], [Plain [Str "Each iteration calls ", Code ("", [], []) "create_fin()", Str " with a different rotation angle"]], [Plain [Str "This creates 3 identical fins perfectly positioned without copying code"]]], Header 4 ("common-for-loop-patterns", ["unnumbered", "unlisted"], []) [Str "Common For Loop Patterns"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.35294117647058826)), (AlignDefault, (ColWidth 0.21176470588235294)), (AlignDefault, (ColWidth 0.43529411764705883))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pattern"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use Case"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for (x = [0:10:50])"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Linear array"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Grid of objects"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for (i = [0:n-1])"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Index-based loop"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Radial array with calculated angles"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nested for loops"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "2D grids"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Multiple rows and columns"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for (i = [start:step:end])"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Custom spacing"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Items at irregular intervals"]]]])] (TableFoot ("", [], []) []), Header 4 ("try-this-modify-the-fin-can", ["unnumbered", "unlisted"], []) [Str "Try This: Modify the Fin Can"], CodeBlock ("", ["openscad"], []) "// Experiment with changing these parameters:
fins = 4;           // Try 4, 5, or 6 fins
height = 100;       // Make it taller
diameter = 60;      // Make it wider
thickness = 2;      // Make fins thicker
// The for loop automatically distributes the fins evenly around the cylinder
", Para [Str "Checkpoint: After this section, you can:"], BulletList [[Plain [Str "Use ", Code ("", [], []) "for", Str " loops to create arrays of objects"]], [Plain [Str "Calculate rotation angles for radial symmetry"]], [Plain [Str "Combine loops with modules to create parametric families of designs"]]], Header 3 ("advanced-programming-concepts", ["unnumbered", "unlisted"], []) [Str "Advanced Programming Concepts"], Para [Str "Beyond basic modules, professional OpenSCAD code uses conditional logic, type checking, and advanced data structures. These techniques enable robust, flexible, and maintainable designs."], Header 4 ("1-conditional-logic-with-if-else-statements", ["unnumbered", "unlisted"], []) [Str "1. Conditional Logic with If-Else Statements"], Para [Str "Use ", Code ("", [], []) "if/else", Str " to create designs that adapt based on parameters. This enables single-code designs that behave differently based on user input:"], CodeBlock ("", ["openscad"], []) "// Parametric phone stand with optional features
phone_width = 75;
include_cable_holder = true;  // Toggle feature with parameter
module phone_stand() {
  // Always create the base
  cube([phone_width + 20, 100, 5]);
  // Conditionally add cable holder
  if (include_cable_holder) {
    translate([phone_width + 10, 20, 5])
      cube([10, 15, 20]);  // Cable management slot
  }
}
phone_stand();
", Para [Str "Practical Example: Parametric Bracket with Optional Features"], CodeBlock ("", ["openscad"], []) "// Advanced bracket with conditional features
bracket_size = 50;
include_mounting_holes = true;
include_reinforcement = true;
hole_diameter = 3;
module bracket() {
  // Main body (always created)
  difference() {
    cube([bracket_size, bracket_size, 10]);
    // Hollow interior
    translate([5, 5, 5])
      cube([bracket_size - 10, bracket_size - 10, 10]);
  }
  // Optional: Add mounting holes
  if (include_mounting_holes) {
    for (x = [10, bracket_size - 10])
      for (y = [10, bracket_size - 10])
        translate([x, y, -5])
          cylinder(h=20, d=hole_diameter, $fn=16);
  }
  // Optional: Add diagonal reinforcement
  if (include_reinforcement) {
    rotate([45, 0, 0])
      cube([bracket_size - 10, 5, 5], center=true);
  }
}
bracket();
", Para [Str "Key Patterns:"], CodeBlock ("", ["openscad"], []) "// Simple conditional
if (parameter) {
  // Create this if parameter is true
  cube([10, 10, 10]);
}
// If-else conditional
if (parameter > 50) {
  // Create large version
  cube([100, 100, 100]);
} else {
  // Create small version
  cube([50, 50, 50]);
}
// Multiple conditions
if (enable_feature_a && enable_feature_b) {
  // Both features enabled
} else if (enable_feature_a) {
  // Only A enabled
} else if (enable_feature_b) {
  // Only B enabled
} else {
  // Neither enabled
}
", Header 4 ("2-type-testing-and-validation", ["unnumbered", "unlisted"], []) [Str "2. Type Testing and Validation"], Para [Str "Before using parameters, test their type to avoid errors. This makes modules robust and user-friendly:"], CodeBlock ("", ["openscad"], []) "// Type testing functions: is_number(), is_string(), is_list(), is_bool(), is_undef()
// Example: Create a function that accepts either a single number or list
module create_array(size) {
  if (is_number(size)) {
    // Single number: create 3x3 array of that size
    for (x = [0:20:40])
      for (y = [0:20:40])
        translate([x, y, 0])
          cube([size, size, size]);
  } else if (is_list(size)) {
    // List: [width, depth, height]
    for (x = [0:20:40])
      for (y = [0:20:40])
        translate([x, y, 0])
          cube(size);  // Use list directly
  } else {
    // Error: invalid type
    echo(\"ERROR: size must be number or list\");
  }
}
// Both work:
create_array(10);           // Creates 10x10x10 cubes
create_array([15, 15, 20]); // Creates 15x15x20 cubes
", Para [Str "Practical Validation Example:"], CodeBlock ("", ["openscad"], []) "// Robust parametric keycap with validation
module keycap(size, height, letter) {
  // Validate inputs before using
  valid_size = is_number(size) && size > 5 && size < 50;
  valid_height = is_number(height) && height > 3 && height < 20;
  valid_letter = is_string(letter) && len(letter) == 1;
  if (valid_size && valid_height && valid_letter) {
    // All parameters valid: create keycap
    difference() {
      cube([size, size, height]);
      translate([size/2, size/2, size/2 - 1])
        cube([size - 4, size - 4, height], center=true);
    }
    // Add embossed letter
    translate([size/2, size/2, height - 0.5])
      linear_extrude(0.8)
        text(letter, size=size*0.4, halign=\"center\", valign=\"center\");
  } else {
    // Parameter validation failed: report errors
    if (!valid_size) echo(\"ERROR: size must be 5-50mm\");
    if (!valid_height) echo(\"ERROR: height must be 3-20mm\");
    if (!valid_letter) echo(\"ERROR: letter must be single character\");
  }
}
// These work:
keycap(14, 10, \"A\");
// These will fail gracefully with error messages:
// keycap(-5, 10, \"A\");      // Invalid size
// keycap(14, 10, \"ABC\");    // Invalid letter
", Header 4 ("3-list-comprehensions-and-advanced-data-structures", ["unnumbered", "unlisted"], []) [Str "3. List Comprehensions and Advanced Data Structures"], Para [Str "List comprehensions create new lists by transforming or filtering existing lists. This enables sophisticated parametric designs:"], CodeBlock ("", ["openscad"], []) "// Basic list comprehension syntax: [for (x = list) ... x ... ]
// Example 1: Create list of squares
squares = [for (x = [1:5]) x*x];
// Result: [1, 4, 9, 16, 25]
// Example 2: Filter list (keep only even numbers)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evens = [for (x = numbers) if (x % 2 == 0) x];
// Result: [2, 4, 6, 8, 10]
// Example 3: Create array of positions for mounting holes
hole_positions = [for (i = [0:3]) [i*20, i*20, 0]];
// Creates: [[0,0,0], [20,20,0], [40,40,0], [60,60,0]]
", Para [Str "Practical Example: Parametric Grid of Features"], CodeBlock ("", ["openscad"], []) "// Create parametric grid of mounting holes using list comprehension
bracket_width = 100;
bracket_depth = 80;
hole_spacing = 20;  // mm between holes
hole_diameter = 3;  // mm
// Generate hole positions automatically
hole_x_positions = [for (i = [0:(bracket_width/hole_spacing)]) i * hole_spacing];
hole_y_positions = [for (i = [0:(bracket_depth/hole_spacing)]) i * hole_spacing];
module bracket_with_holes() {
  difference() {
    // Base plate
    cube([bracket_width, bracket_depth, 5]);
    // Subtract holes using comprehension
    for (x = hole_x_positions)
      for (y = hole_y_positions)
        translate([x, y, -5])
          cylinder(h=15, d=hole_diameter, $fn=16);
  }
}
bracket_with_holes();
", Header 4 ("4-special-variables-preview-children-fn", ["unnumbered", "unlisted"], []) [Str "4. Special Variables: $preview, $children, $fn"], Para [Str "OpenSCAD includes special variables that give modules information about their context:"], CodeBlock ("", ["openscad"], []) "// $preview: Detects if in preview (F5) or render (F6) mode
module adaptive_quality() {
  quality = $preview ? 16 : 64;  // Low res in preview, high in render
  for (i = [0:360/quality:360])
    rotate([0, 0, i])
      translate([50, 0, 0])
        sphere(r=5, $fn=quality);
}
// $children: Number of child objects passed to module
module repeat_with_offset(count) {
  for (i = [0:count-1])
    translate([i*20, 0, 0])
      children();  // Render each child at new position
}
// Usage:
repeat_with_offset(3)
  cube([10, 10, 10]);
// Creates 3 cubes in a row, spaced 20mm apart
// $fn, $fa, $fs: Global resolution parameters
// $fn = 32;  // Number of segments (0 disables, uses $fa/$fs)
// $fa = 12;  // Angle per segment (degrees)
// $fs = 2;   // Minimum segment length (mm)
", Para [Str "Practical Example: Adaptive Quality Module"], CodeBlock ("", ["openscad"], []) "// Module that renders efficiently in preview but beautifully in export
module rounded_box(w, h, d, radius) {
  // Automatically adjust quality based on render mode
  fn = $preview ? 8 : 32;  // Fast preview, quality export
  minkowski() {
    cube([w - 2*radius, h - 2*radius, d - 2*radius], center=true);
    cylinder(r=radius, h=0.01, $fn=fn);
  }
}
// Use normally; quality automatically adapts
rounded_box(50, 50, 50, 3);
", Header 4 ("5-user-defined-functions-vs-modules", ["unnumbered", "unlisted"], []) [Str "5. User-Defined Functions vs Modules"], Para [Str "OpenSCAD supports both modules (which create geometry) and functions (which compute values). Understanding the difference is critical:"], CodeBlock ("", ["openscad"], []) "// MODULE: Creates 3D geometry (what we've been using)
module box(w, h, d) {
  cube([w, h, d]);
}
// FUNCTION: Computes and returns a value (no geometry)
function box_volume(w, h, d) = w * h * d;
// Usage:
box(50, 50, 50);                    // Creates 50x50x50 cube
volume = box_volume(50, 50, 50);    // Calculates: 125000
echo(volume);                        // Prints: 125000
// ============================================
// Practical Example: Recursive function for power calculation
function power(base, exp) = 
  exp == 0 ? 1 :                    // Base case: anything^0 = 1
  base * power(base, exp - 1);      // Recursive case
// Calculate 2^5
result = power(2, 5);
echo(result);  // Prints: 32
// ============================================
// Another Example: Distance between two points
function distance(p1, p2) =
  sqrt((p2[0] - p1[0])^2 + (p2[1] - p1[1])^2 + (p2[2] - p1[2])^2);
point_a = [0, 0, 0];
point_b = [3, 4, 0];
dist = distance(point_a, point_b);
echo(dist);  // Prints: 5 (Pythagorean triple)
", Para [Str "Key Differences:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Feature"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Module"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Function"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Creates geometry"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Yes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Returns value"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Yes"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Can use ", Code ("", [], []) "children()"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Yes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Can combine with echo/if"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Yes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Yes"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use for"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "3D objects"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Calculations"]]]])] (TableFoot ("", [], []) []), Para [Str "Practical Combined Example:"], CodeBlock ("", ["openscad"], []) "// Use function to calculate, module to create
// Function: Calculate optimal wall thickness based on size
function optimal_wall_thickness(size) =
  size < 20 ? 1.0 :
  size < 50 ? 1.5 :
  size < 100 ? 2.0 :
  2.5;
// Module: Create parametric container
module container(width, height) {
  wall = optimal_wall_thickness(width);
  difference() {
    cube([width, width, height]);
    translate([wall, wall, wall])
      cube([width - 2*wall, width - 2*wall, height]);
  }
}
// Usage
container(30, 40);   // 1mm walls automatically
container(75, 100);  // 1.5mm walls automatically
container(120, 150); // 2mm walls automatically
", Header 3 ("quiz---lesson-3dmake3-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.3 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is a parametric module and why is it useful", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "?"]], [Plain [Str "How do you include an external library in OpenSCAD", Note [Para [Str "BOSL - OpenSCAD Standard Library - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2"] ("https://github.com/BelfrySCAD/BOSL2", "")]], Str "?"]], [Plain [Str "What is one advantage of moving code into ", Code ("", [], []) "lib/", Str " ", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "?"]], [Plain [Str "How can you test a module quickly without a full high-resolution render", Note [Para [Str "OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, ", Link ("", [], []) [Str "https://learn.cadhub.xyz/blog/openscad-review/"] ("https://learn.cadhub.xyz/blog/openscad-review/", "")]], Str "?"]], [Plain [Str "Name one safety or documentation step to include when producing a reusable module", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]], [Plain [Str "True or False: Parametric modules can only accept one parameter."]], [Plain [Str "Describe what \"Don't Repeat Yourself\" (DRY) means in the context of 3D model code."]], [Plain [Str "Explain how you would create a module with three parameters and use it in your main file."]], [Plain [Str "What testing strategies should you use to validate a new module before using it in production prints?"]], [Plain [Str "How would you document a reusable module so that future users (including yourself) understand its parameters and limitations?"]]], Para [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a module for a mounting bracket with parameters for hole size and spacing; publish a usage example", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]], [Plain [Str "Use a library module to add a fillet and compare the final STL before and after", Note [Para [Str "BOSL - OpenSCAD Standard Library - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2"] ("https://github.com/BelfrySCAD/BOSL2", "")]], Str "."]], [Plain [Str "Produce three variants by changing a parameter and record estimated print times", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]], [Plain [Str "Move a working module into ", Code ("", [], []) "lib/", Str " and commit with a clear commit message", Note [Para [Str "3DMake GitHub - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "."]], [Plain [Str "Write a short README for your module describing parameter ranges and expected units", Note [Para [Str "OpenSCAD Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules", "")]], Str "."]], [Plain [Str "Build a complete module library with 5+ reusable parts; create comprehensive documentation and usage examples for each."]], [Plain [Str "Design a module versioning and compatibility system; document how to manage parameter changes over time."]], [Plain [Str "Create a module testing suite: write validation tests for parameter ranges, edge cases, and output consistency."]], [Plain [Str "Develop an accessibility guide for module parameters: explain how to use and understand module options without visual feedback."]], [Plain [Str "Write a module library contribution guide: standards for code style, documentation, testing, and review for collaborative development."]]], Header 3 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], Para [Str "For deeper exploration of parametric design and module creation, explore these resources:"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/pdf/src/assets/Programming_with_OpenSCAD.epub", ""), Str " - Comprehensive guide to modules, parametric design, and library creation"]], [Plain [Link ("", [], []) [Str "CodeSolutions: Modules"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/5_Modules", ""), Str " - Working examples of module definition, parameter passing, and reusable components"]], [Plain [Link ("", [], []) [Str "BOSL2 Library"] ("https://github.com/BelfrySCAD/BOSL2", ""), Str " - Professional OpenSCAD library with hundreds of reusable modules for common operations"]]], Header 3 ("starter-templates", ["unnumbered", "unlisted"], []) [Str "Starter Templates"], Header 4 ("parametric-template", ["unnumbered", "unlisted"], []) [Str "Parametric Template"], CodeBlock ("", ["openscad"], []) "// Parametric Design Template
// Demonstrates how to create designs that adapt to different inputs
// This pattern allows you to quickly generate variations
// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================
// Box dimensions (change these to regenerate different sizes)
boxwidth = 40;
boxdepth = 40;
boxheight = 30;
// Feature sizing (scales with box size)
cornerradius = 3;
wallthickness = 2;
// Boolean flags for feature toggling
includelid = true;
includefeet = true;
hollowinterior = true;
// ============================================
// QUALITY SETTINGS
// ============================================
$fn = 30;  // Fragment quality
// ============================================
// PARAMETRIC MODULES
// ============================================
// Simple box with rounded corners
module roundedbox(width, depth, height, radius) {
    hull() {
        // Create 8 corner spheres to define the shape
        translate([radius, radius, radius])
            sphere(r = radius);
        translate([width - radius, radius, radius])
            sphere(r = radius);
        translate([radius, depth - radius, radius])
            sphere(r = radius);
        translate([width - radius, depth - radius, radius])
            sphere(r = radius);
        translate([radius, radius, height - radius])
            sphere(r = radius);
        translate([width - radius, radius, height - radius])
            sphere(r = radius);
        translate([radius, depth - radius, height - radius])
            sphere(r = radius);
        translate([width - radius, depth - radius, height - radius])
            sphere(r = radius);
    }
}
// Use the module
roundedbox(boxwidth, boxdepth, boxheight, cornerradius);
", Header 4 ("module-template", ["unnumbered", "unlisted"], []) [Str "Module Template"], CodeBlock ("", ["openscad"], []) "// Module Design Pattern Template
// Demonstrates best practices for organizing code with reusable modules
// Modules promote code reuse, clarity, and maintainability
// ============================================
// CONFIGURATION SECTION
// ============================================
$fn = 32;
// Component dimensions
connectordiameter = 8;
connectorlength = 15;
connectorwall = 1.5;
basesize = 50;
baseheight = 5;
// ============================================
// UTILITY MODULES (General Purpose)
// ============================================
// Create a hollow cylinder (tube/connector)
module hollowcylinder(od, id, height) {
    difference() {
        cylinder(h = height, d = od, center = true);
        cylinder(h = height + 1, d = id, center = true);
    }
}
// Create a flat base/mounting plate
module flatbase(size, thickness) {
    cube([size, size, thickness], center = true);
}
// Create corner supports for strengthening
module cornersupport(size, height) {
    linearextrude(height = height, center = true)
        polygon(points = [[0, 0], [size, 0], [0, size]]);
}
// ============================================
// ASSEMBLY
// ============================================
// Combine modules for a complete design
union(){
    flatbase(basesize, baseheight);
    translate([0, 0, baseheight]) 
        hollowcylinder(connectordiameter, connectordiameter - 2*connectorwall, connectorlength);
}
"]