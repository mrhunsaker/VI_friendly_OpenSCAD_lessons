# Lesson 1.2 — Basic Shape Modifications: Translations

## Materials

- Computer with OpenSCAD installed
- Tactile examples (optional)

## Overview

This lesson focuses on moving objects with `translate()`, working with centered objects, and reasoning about object extents (width/height) so that students can place parts precisely.

## Sequence & Notes

- Review `center=true` and how it affects the object's origin.
- `translate([x, y, z])` moves objects by the specified amounts along each axis.
- When translating centered shapes, use half of the shape's dimension to align edges (for example, to place a sphere's edge at X = 10, translate by `sphere_radius` if centered).
- Octants: teach coordinates and how positive/negative values map to left/right, forward/back, up/down.

## Classroom Activities

1. Create a cube and translate it to four different quadrants; listen to or examine coordinates.
2. Place a sphere so its surface touches the top face of a cube: compute the needed translate Z value.
3. Use `translate()` and multiple primitives to assemble a compound shape.

## Check for understanding

- What is the width of a cylinder with `d = 20`? (Answer: 20 mm)
- How do you move an object 15 mm to the left? (Answer: `translate([-15,0,0])`)

### Quiz — Lesson 1.2

1. Short answer: Write the `translate()` call to move an object up by 10 mm.
2. Multiple choice: If a sphere has `r = 8` and is centered, how far do you translate it in Z so its bottom touches Z = 0? (A) 0  (B) 8  (C) 16 — Answer: B
3. Practical: Create two cubes side-by-side with a 2 mm gap between them; provide the code.
4. Short answer: Explain what happens if you `translate()` before `rotate()` vs rotate before translate.
# Lesson 1_2: Basic Shape Modifications: Translations
## Materials
- computer with openSCAD installed
- 3D printed primatives
- 3D printed 1_2 models
- APH graph board (two for +z and -z)

## Sequence
- Review center flag
- Translation
- The width of a sphere/cylinder and translating cented objects by half of their dimension 
- Different octants
 
## Check for understanding
- What is the width of a cylinder?
- What is the width of a sphere?
- What is the height of a sphere?
- Translation practice assignment

