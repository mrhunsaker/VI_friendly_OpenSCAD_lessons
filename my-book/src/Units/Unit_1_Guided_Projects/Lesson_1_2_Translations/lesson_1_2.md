```markdown


# Lesson 1.2 — Translations (Self-Paced)

Estimated time: 25–45 minutes

Learning objectives:
- Move and place primitives precisely using `translate()`.
- Reason about dimensions when working with centered vs non-centered shapes.

Materials:
- Computer with OpenSCAD

Step-by-step instructions:
1. Open `lesson1_2.scad`. Create a 20×20×20 cube and preview it.
2. Translate it to the right by 30 mm: `translate([30,0,0]) cube([20,20,20]);` Preview and observe coordinates.
3. Create a centered sphere `sphere(d=20, center=true);` and compute how far to translate it up so its bottom touches Z=0.
4. Build two cubes side-by-side with a 2 mm gap; test different translate values to place them precisely.

Checkpoint (verify):
- Write the `translate()` call that moves an object up by 10 mm and save the file.

Quiz — Lesson 1.2 (5 items):
1. Short answer: `translate()` to move up 10 mm.
2. Multiple choice: For a centered sphere with `r=8`, translate Z by which value for bottom to touch Z=0? (A)0 (B)8 (C)16
3. Practical: Two cubes with 2 mm gap code.
4. Short answer: What is an octant?
5. Short answer: Why use centering before translating in many assembly tasks?

Extension problems (5):
1. Create a 3×3 grid of 10 mm cubes with 2 mm spacing using `for()` and `translate()`.
2. Place a cylinder so its edge is flush with a cube face; include calculations.
3. Use nested `translate()` calls to build a stepped stack of three cubes.
4. Combine translation and `rotate()` to place a rotated object at a precise offset; explain the order of operations.
5. Design a small clip built from primitives placed precisely; list your translation values and rationale.


**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.

``` 
