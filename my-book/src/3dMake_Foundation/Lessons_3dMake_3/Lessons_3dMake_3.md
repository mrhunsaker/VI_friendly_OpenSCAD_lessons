# Lesson 3: Parametric Architecture and Modular Libraries

Estimated time: 90–120 minutes

## Learning Objectives
- Understand and apply the DRY (Don't Repeat Yourself) principle through modules and functions
- Use `include` vs `use` for library files
- Apply `for` loops, conditionals, and list comprehensions
- Write type-safe modules using `is_number()`, `is_list()`, and `is_string()`
- Build a reusable module library

## Materials
- 3dMake project from Lessons 1–2
- Terminal and editor

## Step-by-step Tasks


### 1. Define a Reusable Module

Modules create named geometry. They accept parameters and can be called anywhere in the file. See [^1].

```openscad
// Modules create geometry; calling them produces shapes
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
```

### 2. Write a Function (Computes a Value, No Geometry)

```openscad
// Functions return values, never geometry
function clearance_fit(nominal) = nominal + 0.2;
function tight_fit(nominal)    = nominal - 0.1;

hole_diameter = clearance_fit(8);   // = 8.2
peg_diameter  = tight_fit(8);       // = 7.9

cylinder(r=hole_diameter/2, h=10, $fn=64);
```

### 3. Use include and use for Libraries

```openscad
// include: executes the file (modules, functions, AND top-level geometry)
include <BOSL2/std.scad>

// use: imports modules and functions only — no top-level geometry executes
use <my_library.scad>
```

Key distinction: `include` will also render any top-level geometry in the library file; `use` imports only the module and function definitions.
For more on `include` and `use`, see [^4].


### 4. Apply For Loops and Conditionals

For loop and conditional syntax is described in [^2].

```openscad
// Array of peg positions
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
```


### 5. Use Type Testing and List Comprehensions

The BOSL2 library provides many advanced parametric modules and functions [^3].

```openscad
// Type testing prevents hard-to-debug errors
module validated_cylinder(r, h) {
  if (!is_number(r)) echo("WARNING: r must be a number");
  if (!is_number(h)) echo("WARNING: h must be a number");
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
```

### Checkpoint
- After step 1: calling `rounded_box(50, 30, 20)` builds a rounded box. Verify in preview.
- After step 3: `include` vs `use` behavior should be tested by placing a top-level `cube()` in a library file and using both import methods.
- After step 5: `echo()` output appears in the OpenSCAD console window.

## Building a Practical Library

A well-designed module library is the backbone of efficient parametric design. Here is a starter library structure:

```openscad
// ============================================================
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
```

Using the library:
```openscad
use <fasteners.scad>

difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_hole(depth=10.002);
  translate([30, 15, -0.001]) m3_hole(depth=10.002);
}
```

## Quiz — Lesson 3dMake.3 (15 questions)

1. What is the DRY principle and why is it important in parametric design?
2. What is the difference between a module and a function in OpenSCAD?
3. What does `include <library.scad>` do differently from `use <library.scad>`?
4. Write a `for` loop that places a sphere every 30° around a circle of radius 20.
5. What does `is_number()` return, and give one example of when to use it.
6. What does a list comprehension `[for (i=[0:5:20]) i*2]` evaluate to?
7. What does the `echo()` function do in OpenSCAD?
8. True or False: a function in OpenSCAD can create geometry.
9. How do you specify a default parameter value in an OpenSCAD module?
10. What does the `$preview` special variable allow you to do in OpenSCAD?
11. Write an OpenSCAD `for` loop that creates 8 evenly spaced holes around a circle using `for (i = [0:45:315])`.
12. What is the difference between `[0:10]` and `[0:2:10]` in an OpenSCAD range expression?
13. Explain why you might use type testing (`is_number()`, `is_list()`) in a module rather than relying on the caller to pass correct types.
14. Describe how recursive functions work in OpenSCAD and give a simple example.
15. What would happen if you accidentally used `include` instead of `use` for a library that contains a top-level `cube([10,10,10]);` statement?

## Extension Problems (15)

1. Create a `bolts.scad` library with at least M3, M4, and M5 clearance holes and nut traps; use it in a test plate.
2. Build a parametric pegboard using a `for` loop. Parameters: `cols`, `rows`, `spacing`, `peg_r`, `peg_h`.
3. Implement a recursive function that generates a Fibonacci sequence up to `n` terms and use it to space pegs.
4. Build a module that validates all its inputs using `assert()` and logs warnings with `echo()`; document when `assert()` halts rendering vs. `echo()`.
5. Create two library files—one for mechanical fasteners and one for artistic decorations—and include both in a combined project.
6. Design a parametric gear profile module. Parameters: `teeth`, `module_size`, `thickness`. (You don't need to compute true involute gear geometry — a simplified triangular-tooth approximation is fine.)
7. Build a "shelf peg" system: a board with N parametrically positioned holes and matching pegs that press-fit into them.
8. Use a list comprehension to generate a spiral path of points and place a small cylinder at each point.
9. Extend the `fasteners.scad` library with threaded insert pockets for M3, M4, and M5 heat-set inserts (look up brass insert dimensions).
10. Write a module that draws a parametric text label with a surrounding bordered frame; parameters: `text_str`, `font_size`, `padding`, `border_thickness`.
11. Build a parametric snap-fit lid for a rectangular box: the lid uses `for` loops to generate evenly-spaced snap clips, and all dimensions are parameters.
12. Write a module that takes a list of coordinate pairs as input and draws a connecting chain of cylinders between consecutive points.
13. Create a parametric honeycomb panel module using a `for` loop and `rotate()`; parameters: `rows`, `cols`, `cell_r`, `wall_t`, `depth`.
14. Research BOSL2's `regular_ngon()` and `bezier_path()` modules. Build a shape that uses both and document what each does.
15. Design a test suite: build 10 small parametric shapes, each testing a different OpenSCAD feature (extrusion, rotation, for loop, intersection, etc.), and export them all from one main file.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Modules - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules)

[^2]: OpenSCAD User Manual — For Loops and Conditionals - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop)

[^3]: BOSL2 Library Documentation - [https://github.com/BelfrySCAD/BOSL2/wiki](https://github.com/BelfrySCAD/BOSL2/wiki)

[^4]: OpenSCAD User Manual — Include and Use - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Chapters on modules, functions, and libraries
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for parametric architecture
- [BOSL2 GitHub Repository](https://github.com/BelfrySCAD/BOSL2) — Comprehensive parametric library
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
