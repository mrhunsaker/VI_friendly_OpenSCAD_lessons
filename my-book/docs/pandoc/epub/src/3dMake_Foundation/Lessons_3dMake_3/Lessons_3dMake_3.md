[Header 2 ("lesson-3-parametric-architecture-and-modular-libraries", [], []) [Str "Lesson 3: Parametric Architecture and Modular Libraries"], Para [Str "Estimated time: 90–120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Understand and apply the DRY (Don't Repeat Yourself) principle through modules and functions"]], [Plain [Str "Use ", Code ("", [], []) "include", Str " vs ", Code ("", [], []) "use", Str " for library files"]], [Plain [Str "Apply ", Code ("", [], []) "for", Str " loops, conditionals, and list comprehensions"]], [Plain [Str "Write type-safe modules using ", Code ("", [], []) "is_number()", Str ", ", Code ("", [], []) "is_list()", Str ", and ", Code ("", [], []) "is_string()"]], [Plain [Str "Build a reusable module library"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project from Lessons 1–2"]], [Plain [Str "Terminal and editor"]]], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("1-define-a-reusable-module", ["unnumbered", "unlisted"], []) [Str "1. Define a Reusable Module"], Para [Str "Modules create named geometry. They accept parameters and can be called anywhere in the file. See ", Note [Para [Str "OpenSCAD User Manual — Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Modules create geometry; calling them produces shapes
module rounded_box(w, d, h, r=2) {
  // r is the corner rounding radius, defaulting to 2mm
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=true);
    cylinder(r=r, h=0.01, $fn=32);
  }
}

// Call the module with different sizes
rounded_box(50, 30, 20);
translate([60, 0, 0]) rounded_box(40, 40, 15, r=5);
", Header 4 ("2-write-a-function-computes-a-value-no-geometry", ["unnumbered", "unlisted"], []) [Str "2. Write a Function (Computes a Value, No Geometry)"], CodeBlock ("", ["openscad"], []) "// Functions return values, never geometry
function clearance_fit(nominal) = nominal + 0.2;
function tight_fit(nominal)    = nominal - 0.1;

hole_diameter = clearance_fit(8);   // = 8.2
peg_diameter  = tight_fit(8);       // = 7.9

cylinder(r=hole_diameter/2, h=10, $fn=64);
", Header 4 ("3-use-include-and-use-for-libraries", ["unnumbered", "unlisted"], []) [Str "3. Use include and use for Libraries"], CodeBlock ("", ["openscad"], []) "// include: executes the file (modules, functions, AND top-level geometry)
include <BOSL2/std.scad>

// use: imports modules and functions only — no top-level geometry executes
use <my_library.scad>
", Para [Str "Key distinction: ", Code ("", [], []) "include", Str " will also render any top-level geometry in the library file; ", Code ("", [], []) "use", Str " imports only the module and function definitions.", SoftBreak, Str "For more on ", Code ("", [], []) "include", Str " and ", Code ("", [], []) "use", Str ", see ", Note [Para [Str "OpenSCAD User Manual — Include and Use - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement", "")]], Str "."], Header 4 ("4-apply-for-loops-and-conditionals", ["unnumbered", "unlisted"], []) [Str "4. Apply For Loops and Conditionals"], Para [Str "For loop and conditional syntax is described in ", Note [Para [Str "OpenSCAD User Manual — For Loops and Conditionals - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Array of peg positions
peg_positions = [[0,0], [20,0], [40,0], [20,20]];

for (pos = peg_positions) {
  translate([pos[0], pos[1], 0]) cylinder(r=3, h=10, $fn=32);
}

// Conditional: only add a lid if show_lid is true
show_lid = true;
if (show_lid) {
  translate([0, 0, 30]) cube([50, 30, 3]);
}

// For loop with range [start:step:end]
for (i = [0 : 5 : 45]) {
  rotate([0, 0, i]) translate([20, 0, 0]) cylinder(r=2, h=5, $fn=16);
}
", Header 4 ("5-use-type-testing-and-list-comprehensions", ["unnumbered", "unlisted"], []) [Str "5. Use Type Testing and List Comprehensions"], Para [Str "The BOSL2 library provides many advanced parametric modules and functions ", Note [Para [Str "BOSL2 Library Documentation - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2/wiki"] ("https://github.com/BelfrySCAD/BOSL2/wiki", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Type testing prevents hard-to-debug errors
module validated_cylinder(r, h) {
  if (!is_number(r)) echo(\"WARNING: r must be a number\");
  if (!is_number(h)) echo(\"WARNING: h must be a number\");
  cylinder(r=r, h=h, $fn=64);
}

// List comprehension: create a list of computed values
angles = [for (i = [0:10:350]) i];
echo(angles);  // [0, 10, 20, ..., 350]

// Use list comprehension to build geometry positions
positions = [for (i=[0:3]) i * 25];
for (x = positions) {
  translate([x, 0, 0]) cube([20, 20, 5]);
}
", Header 4 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: calling ", Code ("", [], []) "rounded_box(50, 30, 20)", Str " builds a rounded box. Verify in preview."]], [Plain [Str "After step 3: ", Code ("", [], []) "include", Str " vs ", Code ("", [], []) "use", Str " behavior should be tested by placing a top-level ", Code ("", [], []) "cube()", Str " in a library file and using both import methods."]], [Plain [Str "After step 5: ", Code ("", [], []) "echo()", Str " output appears in the OpenSCAD console window."]]], Header 3 ("building-a-practical-library", ["unnumbered", "unlisted"], []) [Str "Building a Practical Library"], Para [Str "A well-designed module library is the backbone of efficient parametric design. Here is a starter library structure:"], CodeBlock ("", ["openscad"], []) "// ============================================================
// fasteners.scad — Parametric fastener library
// Usage: use <fasteners.scad>
// ============================================================

// M3 clearance hole (ISO standard: 3.2mm diameter)
module m3_hole(depth=10) {
  cylinder(r=1.6, h=depth + 0.001, $fn=16);
}

// M4 clearance hole (ISO standard: 4.3mm diameter)
module m4_hole(depth=10) {
  cylinder(r=2.15, h=depth + 0.001, $fn=16);
}

// Countersink pocket for M3 flat-head screw
module m3_countersink(depth=3) {
  union() {
    cylinder(r=1.6, h=10, $fn=16);  // shaft
    cylinder(r1=3.2, r2=1.6, h=depth, $fn=32);  // conical seat
  }
}

// Hex nut trap (for embedding M3 hex nut)
module m3_nut_trap(extra_depth=0) {
  // M3 nut: 5.5mm across flats, 2.4mm thick
  cylinder(r=3.2, h=2.4 + extra_depth, $fn=6);
}
", Para [Str "Using the library:"], CodeBlock ("", ["openscad"], []) "use <fasteners.scad>

difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_hole(depth=10.002);
  translate([30, 15, -0.001]) m3_hole(depth=10.002);
}
", Header 3 ("quiz--lesson-3dmake3-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.3 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is the DRY principle and why is it important in parametric design?"]], [Plain [Str "What is the difference between a module and a function in OpenSCAD?"]], [Plain [Str "What does ", Code ("", [], []) "include <library.scad>", Str " do differently from ", Code ("", [], []) "use <library.scad>", Str "?"]], [Plain [Str "Write a ", Code ("", [], []) "for", Str " loop that places a sphere every 30° around a circle of radius 20."]], [Plain [Str "What does ", Code ("", [], []) "is_number()", Str " return, and give one example of when to use it."]], [Plain [Str "What does a list comprehension ", Code ("", [], []) "[for (i=[0:5:20]) i*2]", Str " evaluate to?"]], [Plain [Str "What does the ", Code ("", [], []) "echo()", Str " function do in OpenSCAD?"]], [Plain [Str "True or False: a function in OpenSCAD can create geometry."]], [Plain [Str "How do you specify a default parameter value in an OpenSCAD module?"]], [Plain [Str "What does the ", Code ("", [], []) "$preview", Str " special variable allow you to do in OpenSCAD?"]], [Plain [Str "Write an OpenSCAD ", Code ("", [], []) "for", Str " loop that creates 8 evenly spaced holes around a circle using ", Code ("", [], []) "for (i = [0:45:315])", Str "."]], [Plain [Str "What is the difference between ", Code ("", [], []) "[0:10]", Str " and ", Code ("", [], []) "[0:2:10]", Str " in an OpenSCAD range expression?"]], [Plain [Str "Explain why you might use type testing (", Code ("", [], []) "is_number()", Str ", ", Code ("", [], []) "is_list()", Str ") in a module rather than relying on the caller to pass correct types."]], [Plain [Str "Describe how recursive functions work in OpenSCAD and give a simple example."]], [Plain [Str "What would happen if you accidentally used ", Code ("", [], []) "include", Str " instead of ", Code ("", [], []) "use", Str " for a library that contains a top-level ", Code ("", [], []) "cube([10,10,10]);", Str " statement?"]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a ", Code ("", [], []) "bolts.scad", Str " library with at least M3, M4, and M5 clearance holes and nut traps; use it in a test plate."]], [Plain [Str "Build a parametric pegboard using a ", Code ("", [], []) "for", Str " loop. Parameters: ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "spacing", Str ", ", Code ("", [], []) "peg_r", Str ", ", Code ("", [], []) "peg_h", Str "."]], [Plain [Str "Implement a recursive function that generates a Fibonacci sequence up to ", Code ("", [], []) "n", Str " terms and use it to space pegs."]], [Plain [Str "Build a module that validates all its inputs using ", Code ("", [], []) "assert()", Str " and logs warnings with ", Code ("", [], []) "echo()", Str "; document when ", Code ("", [], []) "assert()", Str " halts rendering vs. ", Code ("", [], []) "echo()", Str "."]], [Plain [Str "Create two library files—one for mechanical fasteners and one for artistic decorations—and include both in a combined project."]], [Plain [Str "Design a parametric gear profile module. Parameters: ", Code ("", [], []) "teeth", Str ", ", Code ("", [], []) "module_size", Str ", ", Code ("", [], []) "thickness", Str ". (You don't need to compute true involute gear geometry — a simplified triangular-tooth approximation is fine.)"]], [Plain [Str "Build a \"shelf peg\" system: a board with N parametrically positioned holes and matching pegs that press-fit into them."]], [Plain [Str "Use a list comprehension to generate a spiral path of points and place a small cylinder at each point."]], [Plain [Str "Extend the ", Code ("", [], []) "fasteners.scad", Str " library with threaded insert pockets for M3, M4, and M5 heat-set inserts (look up brass insert dimensions)."]], [Plain [Str "Write a module that draws a parametric text label with a surrounding bordered frame; parameters: ", Code ("", [], []) "text_str", Str ", ", Code ("", [], []) "font_size", Str ", ", Code ("", [], []) "padding", Str ", ", Code ("", [], []) "border_thickness", Str "."]], [Plain [Str "Build a parametric snap-fit lid for a rectangular box: the lid uses ", Code ("", [], []) "for", Str " loops to generate evenly-spaced snap clips, and all dimensions are parameters."]], [Plain [Str "Write a module that takes a list of coordinate pairs as input and draws a connecting chain of cylinders between consecutive points."]], [Plain [Str "Create a parametric honeycomb panel module using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "rotate()", Str "; parameters: ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "cell_r", Str ", ", Code ("", [], []) "wall_t", Str ", ", Code ("", [], []) "depth", Str "."]], [Plain [Str "Research BOSL2's ", Code ("", [], []) "regular_ngon()", Str " and ", Code ("", [], []) "bezier_path()", Str " modules. Build a shape that uses both and document what each does."]], [Plain [Str "Design a test suite: build 10 small parametric shapes, each testing a different OpenSCAD feature (extrusion, rotation, for loop, intersection, etc.), and export them all from one main file."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " — Chapters on modules, functions, and libraries"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked examples for parametric architecture"]], [Plain [Link ("", [], []) [Str "BOSL2 GitHub Repository"] ("https://github.com/BelfrySCAD/BOSL2", ""), Str " — Comprehensive parametric library"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]