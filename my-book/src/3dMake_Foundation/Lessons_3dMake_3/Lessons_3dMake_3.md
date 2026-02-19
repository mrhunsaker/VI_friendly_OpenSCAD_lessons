```markdown


# Lesson 3: Parametric Architecture and Modular Libraries (Self-Paced)



Estimated time: 60 minutes

**Learning Objectives**
- Define and document top-level parameters and use them to drive model variants
- Create reusable modules and import a library module into a project
- Produce and test low-resolution renders and export a working STL

**Materials**
- A 3dMake project scaffold with `src/main.scad`
- Example library (e.g., BOSL) available in `lib/` or classroom assets

Step-by-step Tasks
1. Open `src/main.scad` and add three top-level parameters (with units) at the top of the file.
2. Implement a simple `module bracket(width, height, thickness)` that composes primitives and boolean operations.
3. Include a library module (e.g., `include <bosl/constants.scad>`) and call a small helper from it; run `3dm build`.
4. Produce a low-resolution render to confirm topology, then export an STL and inspect it in a slicer.
5. Refactor the module into `lib/` with a short README and a usage example.

Checkpoints
- After step 2 you have a parametric module you can call with different arguments.

Quick Quiz (5)
1. What is a parametric module and why is it useful?
2. How do you include an external library in OpenSCAD?
3. What is one advantage of moving code into `lib/`?
4. How can you test a module quickly without a full high-resolution render?
5. Name one safety or documentation step to include when producing a reusable module.

Extension Problems (5)
1. Create a module for a mounting bracket with parameters for hole size and spacing; publish a usage example.
2. Use a library module to add a fillet and compare the final STL before and after.
3. Produce three variants by changing a parameter and record estimated print times.
4. Move a working module into `lib/` and commit with a clear commit message.
5. Write a short README for your module describing parameter ranges and expected units.
Washington State Department of Health. (2026). *3D printer and filament selection for safe school environments*. [https://doh.wa.gov/community-and-environment/schools/3d-printers](https://doh.wa.gov/community-and-environment/schools/3d-printers)

## **Works cited**

1. tdeck/3dmake: Non-visual 3D design and 3D printing tool \- GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)  
2. Books \- OpenSCAD, accessed February 18, 2026, [https://openscad.org/documentation-books.html](https://openscad.org/documentation-books.html)  
3. Programming with OpenSCAD, accessed February 18, 2026, [https://programmingwithopenscad.github.io/](https://programmingwithopenscad.github.io/)  
4. OpenSCAD Review \- Worth learning? \- CadHub, accessed February 18, 2026, [https://learn.cadhub.xyz/blog/openscad-review/](https://learn.cadhub.xyz/blog/openscad-review/)  
5. Activity · tdeck/3dmake \- GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake/activity](https://github.com/tdeck/3dmake/activity)  

```
