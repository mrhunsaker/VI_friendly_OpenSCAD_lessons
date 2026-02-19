# Lesson 2.1 — Parametric Design & Modules (Self-Paced)

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

Estimated time: 60–90 minutes

Learning objectives:
- Explain parametric design and why it matters
- Define and call `module()` with parameters in OpenSCAD
- Refactor repeated geometry into modules and default parameters

Materials:
- OpenSCAD; an example `.scad` file to refactor; text editor

Step-by-step student tasks:
1. Open `lesson-2-1-parametric-modules.md` starter file or your Project 1 `.scad`.
2. Identify one repeated shape or pattern and extract it into a `module` with parameters.
3. Replace repeated code with calls to your module; use default parameter values where sensible.
4. Create a `storage_box(length, width, height, wall)` module that produces a hollow box using `difference()`.
5. Call `storage_box()` three times with different sizes and arrange them side-by-side using `translate()`.

Checkpoint:
- Upload `lesson2_1_refactor.scad` showing at least one module and three size variants, plus brief comments.

Quiz — Lesson 2.1 (5 items):
1. Short answer: What is a module in OpenSCAD?
2. Multiple choice: How do you give a parameter a default value? (A) `param = 5` inside module header (B) `module foo(x=5)` (C) `default(x=5)` ) — Answer: B
3. Practical: Show module code that creates a cube using `length` and `width` parameters.
4. Short answer: Why prefer modules over copy‑paste for repeated geometry?
5. Practical: Provide the `storage_box` call that creates a 30×20×15 box.

Extension problems (5):
1. Refactor an entire Project 1 `.scad` file into modules and submit a small changelog of edits.
2. Create a module with optional parameters (use defaults) and demonstrate calling it with named parameters.
3. Write a tiny test script that generates 5 variants of a module in a row using a `for()` loop.
4. Build a small parts library file `parts.scad` that other students can `use` or `include` in their projects.
5. Create a README explaining how to use your `storage_box` module (include parameter meanings and example calls).

**Accessibility:** Add comments and a short, line-by-line walkthrough in your `.scad` file so a screen-reader user can understand the structure and parameter meanings.

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
