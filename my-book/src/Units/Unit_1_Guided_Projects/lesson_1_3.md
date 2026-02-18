# Lesson 1.3 — Debugging, Resolution, and Practice

## Materials

- Computer with OpenSCAD installed
- Low- and medium-resolution printed primitives (optional)

## Overview

This lesson covers common syntax errors, debugging workflows in OpenSCAD, and the role of `$fn` and resolution when previewing and rendering curved geometry.

## Sequence & Notes

- Debugging basics: read the console output, identify syntax errors (missing semicolons, unmatched braces), and use small incremental changes to isolate problems.
- Editor navigation: use keyboard shortcuts to move to the line indicated by an error, or copy the error text into a search in your editor.
- `$fn`: a special variable that controls the number of fragments used to approximate circles and curves. Set `$fn` lower for faster previews and higher for final renders.
- Practice incremental rendering: use `F5` while developing and `F6` before export.

## Classroom Activities

1. Introduce a small intentional syntax error and have students locate and fix it.
2. Show how changing `$fn` changes the preview and render times; have students compare `$fn = 12` vs `$fn = 80`.
3. Provide a short multi-part object with several primitives and ask students to debug placement and resolution issues.

## Check for understanding

- What is a common cause of a parse error in OpenSCAD? (Missing `;` or unmatched `{}`)
- How does increasing `$fn` affect render time and model smoothness?

### Quiz — Lesson 1.3

1. Short answer: What does `$fn` control? Give a short explanation.
2. Multiple choice: Which of these is likely to cause a syntax error? (A) Missing semicolon  (B) Using `;` at the end of a line  (C) Properly matched braces — Answer: A
3. Practical: Given a piece of code that fails to render, describe three steps you would take to find the problem.
4. True/False: Setting `$fn` to 200 is always better. — Answer: False (renders smoother but takes longer)
# Lesson 1_3: Debugging Resolution and translation Pracitce
## Materials
- computer with openSCAD installed
- 3D printed primatives med resolution (scale as needed in 3d printer slicer program but keep porportions locked for atleast the cylinder and sphere)
- 3D printed 1_2 models

## Sequence
- 1_3 Debugging 
  - ctrl alt e and arrow key around if you are getting an error after previewing
  - this lesson just goes over syntax errors for actual bugs check out lesson 2 debugging lesson
- 1_3 Resolution
  - $fn at the top always after header...

## Check for understanding
- What is debugging?
- Why do you need to debug?
- What type of debugging are we going to focus on today?
- What is $fn how does changing it effect your code, the shape,  its rendering/previewing?