# Lesson 7: Parametric Transforms and the Phone Stand Project

Estimated time: 90–120 minutes

## Learning Objectives
- Apply `translate()`, `rotate()`, `scale()`, and `mirror()` correctly
- Understand transform order of operations
- Use `minkowski()` for organic edge rounding
- Apply trigonometric functions (`sin()`, `cos()`, `atan()`, `atan2()`) for angular positioning
- Build a complete parametric phone stand

## Materials
- 3dMake project
- Terminal and editor
- Calipers for measuring your phone

## Step-by-step Tasks

### 1. Master Transforms and Order of Operations [^1]

Transforms in OpenSCAD apply right-to-left (innermost first). Order matters:

```openscad
// rotate THEN translate (object moves to [20,0,0] first, then rotates in place)
rotate([0, 0, 45]) translate([20, 0, 0]) cube([10, 5, 5]);

// translate THEN rotate (object moves 20mm, then rotates around origin)
translate([20, 0, 0]) rotate([0, 0, 45]) cube([10, 5, 5]);
```

These produce different results. A helpful rule: read transforms from the inside out.

### 2. Use Trigonometric and Math Functions [^2]

```openscad
// Place objects in a circle using sin() and cos()
r = 30;
for (i = [0 : 45 : 315]) {
  x = r * cos(i);
  y = r * sin(i);
  translate([x, y, 0]) cylinder(r=3, h=5, $fn=16);
}

// atan(y/x) gives angle from a ratio (single-argument arctangent)
angle_a = atan(1);      // 45 degrees

// atan2(y, x) gives angle from x and y components directly
// Use atan2() when both x and y are known — it handles all four quadrants correctly
angle_b = atan2(1, 1);  // 45 degrees (equivalent for this case)
angle_c = atan2(1, -1); // 135 degrees (atan(1/-1) would give -45 — wrong quadrant!)

echo(angle_a, angle_b, angle_c);  // 45, 45, 135

// Round/floor/ceil/pow/sqrt
echo(round(3.6));   // 4
echo(floor(3.6));   // 3
echo(ceil(3.6));    // 4
echo(pow(2, 8));    // 256
echo(sqrt(144));    // 12
```

**When to use `atan2(y, x)` vs `atan(y/x)`:** Use `atan2()` whenever you have both x and y components and need the correct quadrant. `atan()` only returns values in the range -90° to +90° and divides by zero when x=0.

### 3. Apply Minkowski Sum for Rounded Edges [^3]

```openscad
// Minkowski adds the shape of one object to every point of another
// Result: rounded box with smooth edges
module rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r], center=false);
    sphere(r=r, $fn=16);
  }
}

// Flat-base rounded box (cylinder instead of sphere)
module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=false);
    cylinder(r=r, h=0.01, $fn=24);
  }
}
```

### 4. Apply scale() and mirror()

```openscad
// scale() stretches geometry — use when you need non-uniform scaling
scale([1, 1, 2]) sphere(r=10, $fn=32);  // stretch sphere 2x in Z = ellipsoid

// mirror() reflects geometry across a plane
module ear() {
  translate([20, 0, 0]) cylinder(r=5, h=3, $fn=32);
}
// Original + mirrored = symmetric pair
ear();
mirror([1, 0, 0]) ear();  // reflect across YZ plane
```

### 5. Build the Complete Phone Stand

```openscad
// ============================================================
// Parametric Phone Stand
// ============================================================
// Measure your phone and set these parameters:
phone_w = 75;   // mm — phone width
phone_d = 9;    // mm — phone thickness
angle   = 65;   // degrees — viewing angle from horizontal
lip_h   = 15;   // mm — depth of cradle lip

// Derived dimensions
base_d      = (phone_d + 10) / cos(90 - angle);
base_h      = 5;
cradle_wall = 3;
r_fillet    = 3;

module base_plate() {
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  rotate([angle - 90, 0, 0])
    translate([0, 0, 0])
      flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([max(1, w - 2*r), max(1, d - 2*r), h]);
    cylinder(r=r, h=0.01, $fn=24);
  }
}

translate([0, 0, base_h]) {
  back_support();
  lip();
}
base_plate();
```

### Checkpoint
- After step 2: `echo()` outputs confirm trig function results.
- After step 3: The `rounded_cube` module produces a smooth-edged box (check in preview).
- After step 5: The phone stand stands at the correct angle and the lip depth matches your `lip_h` parameter.

## Advanced Transform Patterns

### Vector Math Functions

```openscad
// dot product: measures how aligned two vectors are
a = [1, 0, 0];
b = [0.7, 0.7, 0];
echo(a * b);         // scalar dot product = 0.7

// cross product: finds a vector perpendicular to two input vectors
c = cross([1, 0, 0], [0, 1, 0]);  // = [0, 0, 1]

// norm: vector magnitude (length)
v = [3, 4, 0];
echo(norm(v));       // 5 (Pythagorean theorem)
```

### Adaptive Quality with $preview

```openscad
// Use lower $fn during preview for fast rendering, higher for export
$fn = $preview ? 16 : 64;

// This speeds up preview without compromising final export quality
sphere(r=20, $fn=$fn);
```

## Quiz — Lesson 3dMake.7 (15 questions)

1. In OpenSCAD, do transforms apply left-to-right or right-to-left (innermost or outermost first)?
2. What is the result of `atan(1)`?
3. What is the advantage of `atan2(y, x)` over `atan(y/x)`?
4. What does `minkowski()` do geometrically?
5. What does `mirror([1, 0, 0])` do?
6. What does `scale([1, 1, 2])` do to a sphere?
7. Write the code to place 6 cylinders evenly spaced around a circle of radius 25 mm.
8. What does `norm([3, 4, 0])` return?
9. True or False: `translate([10,0,0]) rotate([0,0,45]) cube(5)` rotates the cube and then moves it.
10. Why would you use `$preview` to conditionally set `$fn`?
11. Describe the difference between `atan(y/x)` and `atan2(y, x)`. In which quadrant does `atan()` fail to return the correct angle?
12. A phone stand design uses `rotate([angle - 90, 0, 0])` to tilt the back support. If `angle = 65`, what is the actual rotation applied?
13. What does `cross([1,0,0], [0,1,0])` return, and what is the geometric meaning of the cross product?
14. Explain why using `minkowski()` with a sphere produces a different edge profile than using `minkowski()` with a cylinder.
15. A design requires placing components at the vertices of an equilateral triangle centered at the origin. Using `cos()` and `sin()`, calculate the coordinates of all three vertices for a circumradius of 30 mm.

## Extension Problems (15)

1. Redesign your phone stand with a cable slot cut through the base. Make the slot width a parameter.
2. Add rubber feet pockets to the base of your phone stand: four small rectangular cutouts that could hold adhesive rubber bumpers.
3. Create a phone stand variant that holds the phone in landscape (horizontal) orientation. What parameters change?
4. Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using a `for` loop and `rotate()`.
5. Use `atan2()` to compute the angle of a slope and apply it with `rotate()` to align a part precisely with the slope.
6. Design a phone stand for a large tablet: update parameters and verify the design still holds at the correct angle.
7. Build a "compound arm": three rigid links connected at joints, each rotated by a parameter angle. Display all three links as an assembly.
8. Create an ergonomic keyboard wrist rest using `minkowski()` with an ellipsoid for smooth contouring.
9. Demonstrate transform order: build a visual example that shows the difference between `rotate → translate` and `translate → rotate` using colored shapes.
10. Redesign the phone stand as a wall-mount: replace the base with a plate that has two mounting holes, positioned so the phone faces outward.
11. Build a mirror-symmetric earring holder: design one arm with pegs, then use `mirror()` to create the symmetric pair.
12. Use `norm()` to calculate the diagonal of a rectangular prism and use that value to size a through-hole in the design.
13. Research OpenSCAD's `multmatrix()` function. Build a shear transformation example that could not be achieved with `translate()` and `rotate()` alone.
14. Add snap-fit clips to the phone stand: two small flexible fingers on either side of the cradle that hold the phone securely. Use the snap-fit principles from Lesson 8.
15. Design a dual-phone stand using a `for` loop and `translate()` to create two side-by-side stands at different angles, parametrically spaced.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Transformations. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations)

[^2]: OpenSCAD User Manual — Mathematical Functions. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions)

[^3]: OpenSCAD User Manual — Minkowski and Hull. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Transforms chapter
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Phone stand worked example
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Math and transform functions
