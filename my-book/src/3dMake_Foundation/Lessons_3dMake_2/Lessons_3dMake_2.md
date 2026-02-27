# Lesson 2: Geometric Primitives and Constructive Solid Geometry

Estimated time: 90–120 minutes

## Learning Objectives
- Use all six OpenSCAD primitive shapes: `cube`, `sphere`, `cylinder`, `polyhedron`, `text`, `surface`
- Apply the four CSG operations: `union`, `difference`, `intersection`, and `hull`
- Use modifier characters (`#`, `!`, `%`, `*`) for debugging
- Understand and apply the `0.001` offset rule for clean Boolean operations[^1]

## Materials
- 3dMake project from Lesson 1
- Terminal
- OpenSCAD (for live preview with F5)

## Step-by-step Tasks

### 1. Build a Compound Object with union and difference

```openscad
// Simple canister: cylinder body with a sphere on top
difference() {
  union() {
    cylinder(h=40, r=15, $fn=64);
    translate([0, 0, 40]) sphere(r=15, $fn=64);
  }
  // Hollow out the inside (0.001 offset prevents co-planar faces)
  translate([0, 0, 3])
    cylinder(h=38 + 0.001, r=13, $fn=64);
}
```

Save as `src/main.scad` and run `3dm build`. Preview with F5 for fast render; use F6 for final export-quality render.

### 2. Understand the 0.001 Offset Rule

When two surfaces are exactly co-planar, OpenSCAD may produce rendering artifacts or non-manifold faces. Adding a tiny `0.001 mm` overlap ensures the Boolean operation cuts completely through:

```openscad
// WRONG - co-planar bottom faces may cause artifacts
difference() {
  cube([20, 20, 10]);
  cube([18, 18, 10]);  // same height - ambiguous
}

// CORRECT - 0.001 ensures clean cut
difference() {
  cube([20, 20, 10]);
  translate([1, 1, -0.001])
    cube([18, 18, 10 + 0.002]);  // 0.001 below and above
}
```

This is a widely documented community convention in OpenSCAD for avoiding non-manifold geometry.[^1]

### 3. Apply Modifier Characters for Debugging

```openscad
// # = highlight in pink (still rendered)
# cube([10, 10, 10]);

// % = ghost/transparent (shown but not part of model)
% cube([20, 20, 20]);

// ! = render only this object (ignore everything else)
! sphere(r=10);

// * = disable this object entirely
* cube([5, 5, 5]);
```

Use `#` and `%` while debugging to visualize which geometry is being subtracted or added. Remove all modifier characters before final export. See [^4] for more on modifier characters.

### 4. Use rotate_extrude and linear_extrude [^3]

```openscad
// linear_extrude: 2D profile extruded along Z axis
linear_extrude(height=20, twist=0, scale=1) {
  circle(r=10, $fn=32);
}

// rotate_extrude: 2D profile rotated around Z axis (creates vase/ring shapes)
rotate_extrude(angle=360, $fn=64) {
  translate([15, 0, 0]) circle(r=5, $fn=32);
}
```

### 5. Use intersection and hull [^2]

```openscad
// intersection: keeps only the volume common to both shapes
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=13, $fn=64);
}

// hull: convex envelope of all child geometry
hull() {
  translate([0, 0, 0]) sphere(r=5);
  translate([30, 0, 0]) sphere(r=5);
  translate([15, 20, 0]) sphere(r=5);
}
```

### Checkpoint
- F5 renders quickly in preview mode (not manifold-safe); F6 performs full CGAL render. Always use F6 / `3dm build` before slicing.
- If the slicer reports non-manifold faces, check for missing `0.001` offsets on co-planar surfaces.

## Advanced CSG Patterns

### Combining Operations for Complex Parts

Real parts require nested CSG trees. Here is a parametric mounting bracket that combines all four operations:

```openscad
// Parametric Mounting Bracket
width = 40;
height = 30;
depth = 8;
hole_r = 4;
slot_w = 6;
slot_h = 15;
wall = 3;

module bracket() {
  difference() {
    // Main body
    cube([width, depth, height]);

    // Two mounting holes
    translate([10, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);
    translate([30, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);

    // Lightening slot
    translate([width/2 - slot_w/2, -0.001, height - slot_h - wall])
      cube([slot_w, depth + 0.002, slot_h]);
  }
}

bracket();
```

### Polyhedron for Irregular Shapes

```openscad
// Wedge using polyhedron
polyhedron(
  points = [
    [0, 0, 0], [20, 0, 0], [20, 15, 0], [0, 15, 0],  // bottom
    [0, 0, 10], [20, 0, 10]                             // top edge
  ],
  faces = [
    [0, 1, 2, 3],  // bottom
    [0, 4, 5, 1],  // front
    [1, 5, 2],     // right
    [0, 3, 4],     // left
    [3, 2, 5, 4],  // back/top
  ]
);
```

## Quiz — Lesson 3dMake.2 (15 questions)

1. What are the six OpenSCAD primitive shapes?
2. What does `difference()` do in CSG?
3. Why do you add `0.001` mm to the cutting geometry in a `difference()` operation?
4. What does the `#` modifier character do, and when would you use it?
5. What is the difference between `F5` and `F6` in OpenSCAD?
6. What does `hull()` produce, and how is it different from `union()`?
7. What does the `%` modifier do to a shape in OpenSCAD?
8. Describe what `rotate_extrude()` does and give one example of a shape it could produce.
9. What does `intersection()` return when applied to two overlapping cubes?
10. True or False: the `*` modifier renders a shape as a ghost for debugging.
11. Describe what `linear_extrude()` does and explain the `twist` parameter.
12. What is a non-manifold face, and what common OpenSCAD mistake produces it?
13. If you want to subtract a cylinder from a cube and the cylinder is exactly as tall as the cube, what do you need to add to ensure a clean cut?
14. Explain when you would use `polyhedron()` instead of simpler primitives.
15. What is the difference between `union()` combining two overlapping shapes and simply rendering two separate shapes without a CSG operation?

## Extension Problems (15)

1. Build a hollow sphere (a shell with `1.5 mm` walls) using `difference()` and the `0.001` rule.[^1]
2. Create a vase shape using `rotate_extrude()` and a custom 2D profile.
3. Design a bracket or clip using nested `difference()` and `union()` operations. Document each CSG step with inline comments.
4. Use `hull()` to create a smooth transition between two differently-sized shapes.
5. Experiment with the `%` modifier: build a model where a ghost reference shape helps you position a cut accurately. Screenshot the debugging view and explain it.
6. Create a parametric name badge: a flat base with your name text embossed using `linear_extrude()` and `difference()`.
7. Build a compound hinge using two cylinders, a `hull()`, and alignment holes.
8. Design a 10-sided (decagonal) prism using `cylinder()` with `$fn=10` and a `difference()` to cut a through-hole.
9. Create a test print that exercises all four CSG operations in a single part (document what each operation does in a header comment).
10. Using only `cube()`, `sphere()`, `difference()`, and `hull()`, build a simple car silhouette (top-down view).
11. Create a lattice structure using a `for` loop combined with `difference()` to cut a grid of holes in a cube. Document the relationship between hole spacing and wall thickness.
12. Build a parametric ring using `rotate_extrude()` and make the cross-section shape (circle, square, or triangle) a parameter.
13. Research and document the `surface()` primitive: what input does it accept, what shape does it produce, and when would you use it instead of `polyhedron()`? Include a working example.
14. Design a tolerance test set: 5 pairs of pegs and holes with clearances from 0.0 mm to 0.4 mm in 0.1 mm increments. Print one set and document which clearance allows free movement.
15. Write a short guide explaining the four modifier characters (`#`, `!`, `%`, `*`) with one example use case for each and a note on when to remove them before final export.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Primitive Solids and Boolean Operations - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids). The 0.001 offset rule is a community convention documented in the OpenSCAD forums to prevent co-planar face artifacts in Boolean operations.

[^2]: OpenSCAD User Manual — CSG Modelling - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling)

[^3]: OpenSCAD User Manual — Transformations and Extrusions - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem)

[^4]: OpenSCAD User Manual — Modifier Characters - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Chapters on CSG and primitives
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for CSG, hull, and extrusions
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — All primitive and CSG syntax at a glance
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
