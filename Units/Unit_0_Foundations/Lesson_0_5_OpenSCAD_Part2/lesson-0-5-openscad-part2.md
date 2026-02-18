# Lesson 0.5: Introduction to OpenSCAD — Part 2

**Unit:** 0 — Foundations  
**Duration:** 1–2 class periods (50–60 min each)  
**Prerequisite:** Lesson 0.4 (Part 1)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Move objects using `translate()`
- Rotate objects using `rotate()`
- Combine objects using `union()`
- Create holes and subtractions using `difference()`
- Design a simple composite object (a box with a hole in it)
- Understand the concept of constructive solid geometry (CSG)

---

## Constructive Solid Geometry (CSG)

OpenSCAD uses a design approach called **constructive solid geometry**. The idea is that complex shapes are made by combining, subtracting, or intersecting simple shapes.

Think of it like working with **clay** — you start with basic blocks and either add more clay (union) or carve pieces away (difference).

The three Boolean operations in OpenSCAD:

| Operation | What It Does | Analogy |
|-----------|-------------|---------|
| `union()` | Combines two or more shapes into one | Gluing pieces together |
| `difference()` | Subtracts one shape from another | Carving a hole |
| `intersection()` | Keeps only the overlapping region | Cookie-cutter through two shapes |

---

## `translate()` — Moving Objects

By default, all shapes appear at the origin (0, 0, 0). `translate()` moves a shape to a new position.

```scad
translate([x, y, z]) shape;
```

**Example: Two boxes side by side**

```scad
cube([20, 10, 5]);                    // first box at origin
translate([25, 0, 0]) cube([20, 10, 5]);  // second box, moved 25mm to the right
```

The numbers in `translate()` are the distances to move along each axis:
- X = left/right
- Y = front/back  
- Z = up/down

---

## `rotate()` — Rotating Objects

```scad
rotate([x_angle, y_angle, z_angle]) shape;
```

**Example: A cylinder lying on its side**

```scad
rotate([90, 0, 0]) cylinder(h = 20, r = 5);
```

This rotates the cylinder 90 degrees around the X axis, tipping it from vertical to horizontal.

**Important:** Rotation happens **before** translation in OpenSCAD. If you need to both rotate and move an object, put `translate()` outside and `rotate()` inside:

```scad
translate([10, 0, 0]) rotate([90, 0, 0]) cylinder(h = 20, r = 5);
```

---

## `union()` — Combining Shapes

```scad
union() {
    shape1;
    shape2;
}
```

**Example: An L-shaped bracket**

```scad
union() {
    cube([40, 5, 20]);              // vertical part
    cube([20, 5, 5]);               // horizontal part (base)
}
```

**Note:** In OpenSCAD, multiple objects listed without any Boolean operator are implicitly unioned. `union()` is most useful when you want to be explicit or when combining inside `difference()`.

---

## `difference()` — Subtracting Shapes

This is one of the most important operations in OpenSCAD. You start with a solid shape and then subtract another shape from it.

```scad
difference() {
    base_shape;     // the shape you start with
    hole_shape;     // the shape you remove
}
```

**Example: A box with a round hole**

```scad
$fn = 50;

difference() {
    cube([30, 30, 10]);                    // solid box
    translate([15, 15, -1]) cylinder(h = 12, r = 5);  // cylinder to subtract
}
```

**Key technique:** When making holes with `difference()`, make the subtracting shape **slightly taller** than the base shape (extend it above and below). In the example above, the cylinder starts at Z = -1 (1 mm below the base) and has height 12 (2 mm above the top of the 10 mm box). This prevents a "zero-thickness wall" artifact that appears in the preview.

---

## Putting It Together: A Slotted Box

Here is a complete example combining everything learned so far. Study it, type it, and render it:

```scad
// Slotted project box
// Author: (your name)
// Date: (today)

// Variables
box_l = 60;
box_w = 30;
box_h = 10;
slot_w = 20;
slot_h = 4;
wall = 3;

$fn = 40;

// Main box with a rectangular slot cut through the top
difference() {
    cube([box_l, box_w, box_h]);
    
    // Slot in the center of the top
    translate([(box_l - slot_w) / 2, -1, box_h - slot_h])
        cube([slot_w, box_w + 2, slot_h + 1]);
}
```

**Challenge:** Add a circular hole on one end of the box using `difference()` and `cylinder()`.

---

## Common Mistakes and Fixes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Forgetting `;` at end of line | Red error in console | Add semicolons to every statement |
| Forgetting `{` `}` around a Boolean operation | Shapes don't combine correctly | Always wrap multiple shapes in `{ }` |
| Subtracting shape doesn't extend through the base | Thin "skin" remains at top/bottom of hole | Extend the subtracting shape 1 mm above and below |
| Shapes overlap unexpectedly | Parts fuse together | Use `translate()` to position shapes carefully |
| Rotated object is in the wrong place | Shape ends up in a strange location | Remember: `rotate()` applies before `translate()` |

---

## Video Resources

1. **OpenSCAD Tutorial Part 3: Transformations** — via Class Central  
   [https://www.classcentral.com/course/youtube-openscad-tutorial-90515](https://www.classcentral.com/course/youtube-openscad-tutorial-90515)  
   *Watch Part 3 (Transformations) and Part 8 (3D Boolean Operations) from this playlist.*

2. **OpenSCAD Tutorial Chapter 2 — Wikibooks** (translate, rotate, union, difference)  
   [https://en.wikibooks.org/wiki/OpenSCAD_Tutorial](https://en.wikibooks.org/wiki/OpenSCAD_Tutorial)  
   *Free written tutorial continuing from Chapter 1. Covers all transformations and Boolean operations.*

3. **i.materialise OpenSCAD Tutorial — Part 1** (moving, rotating, and subtracting)  
   [https://3dprint.com/161219/openscad-imaterialise-tutorial/](https://3dprint.com/161219/openscad-imaterialise-tutorial/)  
   *Short videos that demonstrate copy-paste-rotate workflow and difference() for making holes.*

4. **Programming with OpenSCAD — No Starch Press** (Chapter 2: More Ways to Transform Shapes)  
   [https://nostarch.com/programmingopenscad](https://nostarch.com/programmingopenscad)  
   *Chapters 1 and 2 cover exactly the content of Lessons 0.4 and 0.5.*

5. **OpenSCAD Official Cheat Sheet**  
   [https://openscad.org/cheatsheet/](https://openscad.org/cheatsheet/)  
   *A single-page reference for every OpenSCAD command. Bookmark this — you'll use it constantly.*

---

## Challenge Project

Design a **simple stand or mount** using only what you've learned in Lessons 0.4 and 0.5:
- At least two different primitives
- At least one `translate()` or `rotate()`
- At least one `difference()` (a hole, slot, or recess)
- Use variables for all major dimensions
- Add comments explaining your design

This is a practice file — it does not need to be printed. But if you'd like to print it, bring it to your instructor.

---

## References

All3DP. (2023). *OpenSCAD tutorial for beginners: 10 easy steps*. https://all3dp.com/2/openscad-tutorial-beginner/

Class Central. (n.d.). *OpenSCAD tutorial* [YouTube course]. https://www.classcentral.com/course/youtube-openscad-tutorial-90515

Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press. https://nostarch.com/programmingopenscad

OpenSCAD. (n.d.). *OpenSCAD cheatsheet*. https://openscad.org/cheatsheet/

Wikibooks. (2019). *OpenSCAD tutorial*. https://en.wikibooks.org/wiki/OpenSCAD_Tutorial

3DPrint.com. (2021). *Learn how to use OpenSCAD software with helpful i.materialise tutorial and how-to videos*. https://3dprint.com/161219/openscad-imaterialise-tutorial/
