# Lesson 2.1: Parametric Design & Modules in OpenSCAD

**Unit:** 2 — Intermediate Skills  
**Duration:** 1–2 class periods  
**Prerequisite:** Unit 0 (all lessons) and Unit 1 (Projects 0 and 1 complete)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Explain what "parametric design" means and why it matters
- Define a `module` in OpenSCAD with parameters
- Call a module with different values to generate variations
- Refactor an existing design to use modules
- Recognize when a module would simplify repeated design elements

---

## What Is Parametric Design?

When you store a dimension in a variable, you've taken your first step toward parametric design. **Parametric design** means building your model around adjustable parameters so that a single change automatically updates the whole design.

**Example without parametric thinking:**

```scad
cube([70, 16, 5]);
translate([0, 20, 0]) cube([70, 16, 5]);
translate([0, 40, 0]) cube([70, 16, 5]);
```

If you want to change the width from 16 to 20, you must edit three places. If you have 30 of these, that's 30 edits — and you'll probably miss one.

**Example with parametric thinking:**

```scad
w = 16;  // change this one number to update the whole design
cube([70, w, 5]);
translate([0, 20, 0]) cube([70, w, 5]);
translate([0, 40, 0]) cube([70, w, 5]);
```

Better — but there's still a lot of repetition. That's where **modules** come in.

---

## Modules

A **module** is a reusable block of code. You define it once, give it a name, and then call it by name as many times as you need.

### Basic Module Syntax

```scad
module my_module_name() {
    // your shapes here
    cube([10, 10, 10]);
}

// Call the module:
my_module_name();
```

### Module with Parameters

```scad
module floor_marker(length, width, height) {
    cube([length, width, height]);
}

// Call with different sizes:
floor_marker(70, 16, 5);
translate([0, 30, 0]) floor_marker(50, 12, 3);
```

Parameters work like variables that are local to the module. When you call `floor_marker(70, 16, 5)`, the value 70 is assigned to `length`, 16 to `width`, and 5 to `height` — but only inside that module call.

### Default Parameter Values

You can give parameters default values so you don't have to specify them every time:

```scad
module floor_marker(length = 70, width = 16, height = 5) {
    cube([length, width, height]);
}

floor_marker();                  // uses all defaults: 70 x 16 x 5
floor_marker(50);                // length=50, width=16, height=5
floor_marker(length = 80, height = 8);  // width stays at default 16
```

---

## Why Modules Matter for Projects

### Project 1 — Revisited

Your Project 1 floor marker had specific dimensions. But what if the school needed markers in two sizes — one for desks and one for chairs? With a module:

```scad
module velcro_marker(length = 70, width = 16, height = 5, lip = 1) {
    difference() {
        cube([length, width, height]);
        // Optional recess for command strip
        translate([lip, lip, -0.1])
            cube([length - 2*lip, width - 2*lip, height - 1]);
    }
}

// Desk marker (original size)
velcro_marker();

// Chair marker (smaller)
translate([0, 30, 0]) velcro_marker(length = 50, width = 12);
```

### Project 3 (Jewelry Beads) — Preview

Project 3 requires **two different bead shapes** made with **parametric modules**. Here's the structure you'll build:

```scad
module round_bead(diameter = 15, hole_d = 3) {
    // Your bead shape here
}

module faceted_bead(size = 12, hole_d = 3) {
    // Your different bead shape here
}
```

You'll define both modules in one file and call them to build your complete jewelry piece.

---

## Practice: Build a Parametric Box Set

Design a module called `storage_box` that accepts `length`, `width`, `height`, and `wall_thickness` as parameters. The module should create a hollow box (open on top) using `difference()`.

Then call your module three times with different sizes to create a small, medium, and large box arranged side by side.

**Starter code:**

```scad
module storage_box(length = 40, width = 30, height = 20, wall = 2) {
    difference() {
        // outer shell
        cube([length, width, height]);
        
        // inner hollow (remove the inside, keep the walls and bottom)
        translate([wall, wall, wall])
            cube([length - 2*wall, width - 2*wall, height]);
    }
}

// Small box
storage_box(30, 20, 15);

// Medium box — position it next to the small one
translate([35, 0, 0]) storage_box(40, 30, 20);

// Large box — fill in the parameters yourself
translate([80, 0, 0]) storage_box(/* your values */);
```

---

## Refactoring Challenge

Take your existing Project 0 or Project 1 `.scad` file. Identify any shapes or repeated elements that could be converted to modules. Rewrite the file using at least one module. The printed output should look identical to the original.

This is called **refactoring** — improving the structure of code without changing what it does.

---

## Video Resources

1. **OpenSCAD Part 7: Modules** — via Class Central YouTube playlist  
   [https://www.classcentral.com/course/youtube-openscad-tutorial-90515](https://www.classcentral.com/course/youtube-openscad-tutorial-90515)  
   *Watch "Part 7: Modules" from the OpenSCAD Tutorial playlist. Covers module syntax, parameters, and practical examples.*

2. **OpenSCAD Tutorial: Variables and Scope (Part 6)** — same playlist as above  
   *Watch Part 6 immediately before Part 7 to understand how variables and scope work with modules.*

3. **Programming with OpenSCAD — Chapter 5: Modules** — No Starch Press  
   [https://nostarch.com/programmingopenscad](https://nostarch.com/programmingopenscad)  
   *The definitive textbook chapter on modules. Covers parameters, default values, and recursion.*

4. **OpenSCAD Tutorial Chapter 3 — Wikibooks** (modules and loops)  
   [https://en.wikibooks.org/wiki/OpenSCAD_Tutorial](https://en.wikibooks.org/wiki/OpenSCAD_Tutorial)  
   *Free written tutorial covering modules, loops, and scope.*

5. **OpenSCAD Cheat Sheet — Official Reference**  
   [https://openscad.org/cheatsheet/](https://openscad.org/cheatsheet/)  
   *The full module syntax reference. Use alongside any tutorial.*

---

## References

All3DP. (2023). *OpenSCAD tutorial for beginners: 10 easy steps*. https://all3dp.com/2/openscad-tutorial-beginner/

Class Central. (n.d.). *OpenSCAD tutorial* [YouTube course]. https://www.classcentral.com/course/youtube-openscad-tutorial-90515

Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects* (Chapter 5). No Starch Press. https://nostarch.com/programmingopenscad

OpenSCAD. (n.d.). *OpenSCAD cheatsheet*. https://openscad.org/cheatsheet/

Wikibooks. (2019). *OpenSCAD tutorial*. https://en.wikibooks.org/wiki/OpenSCAD_Tutorial
