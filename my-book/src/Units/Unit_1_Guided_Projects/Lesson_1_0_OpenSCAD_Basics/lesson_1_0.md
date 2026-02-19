```markdown


## Lesson 1.0 — OpenSCAD Basics (Self-Paced)

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example `.scad` files so screen-reader users can follow step-by-step.

Estimated time: 20–40 minutes

Learning objectives:

Materials:

Step-by-step instructions:
1. Open OpenSCAD and create a new file. Save it as `lesson1_0.scad`.
2. Type the minimal example below and press `F5` to preview:

	cube([40,20,10]);

3. Replace the numbers with named variables at the top of the file:

	length = 40;
	width = 20;
	height = 10;
	cube([length, width, height]);

4. Add a single-line comment explaining the variables. Re-preview.
5. Press `F6` to do a full render, then `File → Export → Export as STL` to save an STL.

Checkpoint (do this before continuing):

Mini exercise:
- Modify `width` to `30` and preview. Note how the shape changes.

Quiz — Lesson 1.0 (skills this lesson teaches):
1. Short answer: How do you write a single-line comment in OpenSCAD?
2. Multiple choice: Which key performs a fast preview? (A) F5 (B) F6 (C) Ctrl+S
3. True/False: You must do a full render before exporting an STL.
4. Short answer: Why use named variables instead of literal numbers?
5. Practical: Provide the OpenSCAD code for a 40×20×10 mm cube using named variables and center it at the origin.

Extension problems (apply skills independently — 5 problems):
1. Change the cube to be centered (`center=true`) and translate it up by half its height so it sits on Z=0.
2. Create a second, smaller cube and place it on top of the first cube with a 2 mm gap.
3. Add comments explaining each transformation and save two versions (one preview-quality, one render-quality).
4. Export both versions as separate STLs and note the file sizes.
5. Write a one-paragraph reflection: what did changing variables feel like compared to editing raw numbers?


**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.

```
