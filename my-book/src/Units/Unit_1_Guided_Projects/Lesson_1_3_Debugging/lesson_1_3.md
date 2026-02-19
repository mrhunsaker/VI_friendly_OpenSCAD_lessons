```markdown
# Lesson 1.3 — Debugging, Resolution, and Practice

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example `.scad` files so screen-reader users can follow step-by-step.
## Materials
## Overview
This lesson covers common syntax errors, debugging workflows in OpenSCAD, and the role of `$fn` and resolution when previewing and rendering curved geometry.

## Sequence & Notes
## Classroom Activities
1. Introduce a small intentional syntax error and have students locate and fix it.
2. Show how changing `$fn` changes the preview and render times; have students compare `$fn = 12` vs `$fn = 80`.
3. Provide a short multi-part object with several primitives and ask students to debug placement and resolution issues.

## Check for understanding
### Quiz — Lesson 1.3
1. Short answer: What does `$fn` control? Give a short explanation.
2. Multiple choice: Which of these is likely to cause a syntax error? (A) Missing semicolon  (B) Using `;` at the end of a line  (C) Properly matched braces — Answer: A
3. Practical: Given a piece of code that fails to render, describe three steps you would take to find the problem.
4. True/False: Setting `$fn` to 200 is always better. — Answer: False (renders smoother but takes longer)

# Lesson 1.3 — Debugging, Resolution, and Practice (Self-Paced)

Estimated time: 30–60 minutes

Learning objectives:
- Read and interpret OpenSCAD console errors.
- Isolate and fix common syntax mistakes.
- Use `$fn` to balance preview speed and final model resolution.

Materials:
- Computer with OpenSCAD

Step-by-step instructions:
1. Open `lesson1_3.scad`. Insert a short header and set `$fn = 24`.
2. Introduce a simple syntax error intentionally (remove a semicolon) and run `F5` to see the console message.
3. Use the console error line number to find and correct the mistake. Re-preview.
4. Experiment with `$fn = 12`, `$fn = 48`, and `$fn = 120` on a sphere; note preview and render times.
5. Practice incremental rendering: frequent `F5` while editing, `F6` before export.

Checkpoint:
- Fix the provided broken file (small broken example included in this folder). Confirm it renders.

Quiz — Lesson 1.3 (5 items):
1. Short answer: What does `$fn` control?
2. Multiple choice: Which causes a parse error? (A) Missing semicolon (B) Correct braces (C) Proper syntax)
3. Practical: List three steps to debug code that fails to render.
4. True/False: Higher `$fn` always improves model quality with no downsides.
5. Short answer: How can incremental rendering speed your workflow?

Extension problems (5):
1. Given a file with multiple primitives and a missing brace, describe and demonstrate your approach to isolate the error.
2. Create the same curved model with `$fn=20` and `$fn=100`; measure and report render times and triangle counts (or file size).
3. Build a small assembly that fails to align; use debug prints (comments and stepwise removal) to find the misplaced transform.
4. Write a short troubleshooting checklist students can follow when a print fails (e.g., check model, slice settings, printer temperature).
5. Create a reproducible bug report for an issue you experienced: include code, steps to reproduce, expected vs actual result.

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.

``` 
