# Lesson 0.4: Introduction to OpenSCAD — Part 1

**Unit:** 0 — Foundations  
**Duration:** 1–2 class periods (50–60 min each)  
**Prerequisite:** Lessons 0.1–0.3

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Open OpenSCAD and navigate the interface
- Write and render the three basic 3D primitives: `cube()`, `sphere()`, `cylinder()`
- Use named variables to store dimensions
- Preview and render a model (F5 vs F6)
- Export a model as an `.stl` file

---

## What Is OpenSCAD?

Most 3D design software works like drawing — you use a mouse to drag, pull, and sculpt shapes. OpenSCAD is different: **you describe shapes by writing code**. This might sound harder, but it has major advantages:

- **Precision.** Every dimension is a number. You type `70` and you get exactly 70 mm.
- **Parametric design.** If you store dimensions in variables, you can change one number and update the entire design instantly.
- **Reproducibility.** Code is easy to share, version, and modify.
- **Math.** You can write `height / 2` and OpenSCAD will calculate the correct value automatically.

OpenSCAD is free, open-source, and available for Windows, Mac, and Linux.

**Download:** [https://openscad.org/downloads.html](https://openscad.org/downloads.html)

---

## The OpenSCAD Interface

When you open OpenSCAD, you will see three panels:

```
┌─────────────────────────────────────────────────────┐
│                  Menu Bar                            │
├─────────────────────────────┬───────────────────────┤
│                             │                       │
│   CODE EDITOR               │   3D PREVIEW          │
│   (left panel)              │   (right panel)       │
│                             │                       │
│   Type your OpenSCAD code   │   Your model appears  │
│   here                      │   here                │
│                             │                       │
├─────────────────────────────┴───────────────────────┤
│   CONSOLE (bottom) — error messages and output      │
└─────────────────────────────────────────────────────┘
```

### Key Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `F5` | Preview (fast, good for working) |
| `F6` | Full render (slower, needed for export) |
| `Ctrl + S` | Save |
| Mouse drag (left) | Rotate the 3D view |
| Mouse drag (right) | Pan |
| Scroll wheel | Zoom |

---

## Primitive 1: `cube()`

The simplest shape. Creates a rectangular box.

```scad
cube([length, width, height]);
```

**Example:**
```scad
cube([70, 16, 5]);
```

This creates a box that is 70 mm long, 16 mm wide, and 5 mm tall. This is exactly the floor marker from Project 0.

**Try it:** Type this in the editor and press F5. You should see a flat rectangular box.

### Variables

Instead of typing raw numbers, store them in variables:

```scad
length = 70;
width = 16;
height = 5;

cube([length, width, height]);
```

This does the same thing but is much easier to modify. If you want to change the length, you change one number instead of hunting through your code.

**Rules for variables:**
- Variable names are case-sensitive (`Length` ≠ `length`)
- Use descriptive names (`width` is better than `w`)
- End each statement with a semicolon `;`
- Comments start with `//` and are ignored by OpenSCAD

```scad
// This is a comment — OpenSCAD ignores this line
length = 70;   // also a comment — useful for notes
```

---

## Primitive 2: `sphere()`

Creates a sphere.

```scad
sphere(r = 10);   // radius = 10 mm, so diameter = 20 mm
```

Or using diameter:
```scad
sphere(d = 20);   // diameter = 20 mm
```

**Note:** Spheres look blocky at first. Add `$fn = 50;` to make them smoother (more faces):

```scad
$fn = 50;
sphere(r = 10);
```

Higher `$fn` values = smoother curves = longer render time. Use `$fn = 20` while working, `$fn = 50–100` for final export.

---

## Primitive 3: `cylinder()`

Creates a cylinder (or cone if the two radii differ).

```scad
cylinder(h = 20, r = 5);         // height 20, radius 5
cylinder(h = 20, d = 10);        // height 20, diameter 10
cylinder(h = 20, r1 = 5, r2 = 2); // cone: 5mm bottom, 2mm top
```

Add `$fn = 50;` for smooth cylinders:

```scad
$fn = 50;
cylinder(h = 20, r = 5);
```

---

## Practice: Three Shapes

Open a new OpenSCAD file. Write code to create all three primitives using variables for their dimensions. Add comments explaining what each shape is. Press F5 to preview after each addition.

```scad
// Practice file — three primitives

// Box
box_length = 50;
box_width = 30;
box_height = 10;
cube([box_length, box_width, box_height]);

// Sphere (in a different location — more on translate() in Lesson 0.5)
// $fn = 40;
// sphere(r = 15);

// Cylinder
// cylinder(h = 25, r = 8);
```

---

## Exporting to STL

When you're ready to print or turn in a file:

1. Press `F6` (full render — wait for it to complete)
2. Go to **File > Export > Export as STL**
3. Save the file with a clear name (e.g., `project0_v1.stl`)

---

## Video Resources

1. **OpenSCAD Tutorial Part 1: Introduction (IDE Usage)** — via Class Central  
   [https://www.classcentral.com/course/youtube-openscad-tutorial-90515](https://www.classcentral.com/course/youtube-openscad-tutorial-90515)  
   *Multi-part YouTube tutorial series covering IDE, primitives, transformations, and modules.*

2. **OpenSCAD Tutorial Chapter 1 — Wikibooks**  
   [https://en.wikibooks.org/wiki/OpenSCAD_Tutorial/Chapter_1](https://en.wikibooks.org/wiki/OpenSCAD_Tutorial/Chapter_1)  
   *Free, detailed written tutorial on cubes, variables, and the interface. Excellent for self-paced learning.*

3. **Beginner's Guide to OpenSCAD: Programming 3D Printed Models — MakeUseOf**  
   [https://www.makeuseof.com/tag/beginners-guide-openscad-programming-3d-printed-models/](https://www.makeuseof.com/tag/beginners-guide-openscad-programming-3d-printed-models/)  
   *Covers primitives, variables, and STL export. Well-written for beginners with no coding background.*

4. **OpenSCAD Tutorial for Beginners: 10 Easy Steps — All3DP**  
   [https://all3dp.com/2/openscad-tutorial-beginner/](https://all3dp.com/2/openscad-tutorial-beginner/)  
   *Step-by-step written guide with screenshots. Good for working through at your own pace.*

5. **OpenSCAD Beginner Tutorial — EduTech Wiki**  
   [https://edutechwiki.unige.ch/en/OpenScad_beginners_tutorial](https://edutechwiki.unige.ch/en/OpenScad_beginners_tutorial)  
   *Academic-style tutorial with examples; good if you want more depth on any specific command.*

6. **OpenSCAD Official Documentation**  
   [https://openscad.org/documentation.html](https://openscad.org/documentation.html)  
   *The official reference. Use this to look up any command when you're unsure of the syntax.*

---

## Book Resource

Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press.  
[https://nostarch.com/programmingopenscad](https://nostarch.com/programmingopenscad)

*Written for students at the middle/high school level. Covers all concepts we use in this course and more. Highly recommended if you want to go further.*

---

## References

All3DP. (2023). *OpenSCAD tutorial for beginners: 10 easy steps*. https://all3dp.com/2/openscad-tutorial-beginner/

Class Central. (n.d.). *OpenSCAD tutorial* [YouTube course]. https://www.classcentral.com/course/youtube-openscad-tutorial-90515

EduTech Wiki. (n.d.). *OpenScad beginners tutorial*. https://edutechwiki.unige.ch/en/OpenScad_beginners_tutorial

Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press. https://nostarch.com/programmingopenscad

MakeUseOf. (2017). *Beginner's guide to OpenSCAD: Programming 3D printed models*. https://www.makeuseof.com/tag/beginners-guide-openscad-programming-3d-printed-models/

OpenSCAD. (n.d.). *Documentation*. https://openscad.org/documentation.html

Wikibooks. (2019). *OpenSCAD tutorial/Chapter 1*. https://en.wikibooks.org/wiki/OpenSCAD_Tutorial/Chapter_1
