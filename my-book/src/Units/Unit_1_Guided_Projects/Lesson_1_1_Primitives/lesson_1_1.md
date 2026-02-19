```markdown


# Lesson 1.1 — Primitives (Self-Paced)

Estimated time: 30–45 minutes

Learning objectives:
- Create `cube()`, `sphere()`, and `cylinder()` primitives.
- Use `center` and `$fn` effectively for positioning and resolution.

Materials:
- Computer with OpenSCAD
- Optional tactile examples of primitives

Step-by-step instructions:
1. Open a new file `lesson1_1.scad`. Add a short header with your name and date.
2. Create a cube using literal values: `cube([20,20,20]);` Preview (`F5`).
3. Convert literals to variables (`size = [20,20,20]; cube(size);`). Re-preview.
4. Create a sphere with `sphere(d=20);` then set `$fn = 24` and compare with `$fn = 80`.
5. Create a cylinder: `cylinder(h=20, d=10);` then make a tapered cone using `r1`/`r2`.

Checkpoint tasks:
- Show a centered 10 mm cube and confirm its coordinates.
- Show a sphere rendered at `$fn = 80` and note the render time.

Quiz — Lesson 1.1 (5 items):
1. Short answer: Example code to center a 10 mm cube.
2. Multiple choice: `$fn` affects (A) color (B) curve smoothness (C) position.
3. True/False: `sphere(d = 20);` uses diameter.
4. Practical: Code for cone with bottom radius 6 mm, top radius 2 mm, height 20 mm.
5. Short answer: One advantage of named variables.

Extension problems (5):
1. Build a compound object made of one cube and one cylinder; align them so the cylinder sits on the cube center.
2. Create three spheres with increasing `$fn` values and export screenshots (or notes on render time).
3. Make a centered cube and rotate it by 45 degrees about Z, explain how centering changes the result.
4. Write a short module `module stud(size, height) { ... }` and create an array of studs with different sizes.
5. Design a small tactile token using only primitives and variables; list the variables you used.

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.

``` 
