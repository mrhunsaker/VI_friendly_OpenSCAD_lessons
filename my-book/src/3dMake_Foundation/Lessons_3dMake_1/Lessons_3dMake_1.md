# Lesson 1: Environmental Configuration and the Developer Workflow 

Estimated time: 60–90 minutes

## **Learning Objectives**
- Install and verify `3dm`[^1], `openscad`[^2], and a slicer are discoverable in the terminal
- Initialize a 3dMake project and understand the project scaffold (`src/`, `build/`, `3dmake.toml`)
- Edit `src/main.scad` using OpenSCAD's parametric design capabilities[^3], run `3dm build`, and inspect the generated `build/main.stl`

## **Materials**
- Terminal with 3dMake installed
- Editor (VS Code or Notepad)
- Example scaffold or classroom repository

---

## Step-by-step Tasks
1. Run `./3dm setup` or follow instructor's installation notes; confirm tools with `which 3dm` and `which openscad`. Verify your 3dMake installation is properly configured[^1].
2. Create a project scaffold with `3dm new` and open `src/main.scad` using `3dm edit-model`. For a comprehensive introduction to the workflow, consult the OpenSCAD documentation[^2].
3. Add three top-level parameters (e.g., `width`, `height`, `thickness`) and a minimal model. This demonstrates the parametric design philosophy central to OpenSCAD[^3].

   **Example `src/main.scad`:**
   ```openscad
   // Top-level parameters (change these to customize your model)
   width = 50;      // mm
   height = 30;     // mm
   thickness = 5;   // mm
   
   // Main model
   cube([width, height, thickness]);
   ```

4. Run `3dm build` and verify `build/main.stl` exists. Compare this build process to standard OpenSCAD workflows[^4].
5. Open the STL in your slicer to check for thin walls or non-manifold geometry[^8]; if issues appear, iterate on `main.scad` and rebuild.
6. Try modifying the parameters and running `3dm build` again to see how parametric design allows you to quickly create variants.

### Checkpoints
- After step 2 you can locate `3dmake.toml` and the `build/` directory. Ensure your project scaffold matches the expected structure described in the 3dMake repository[^1].
- After step 4 the `build/` folder contains a valid `main.stl`. Verify the geometry using your slicer's validation tools[^5].

---

## Understanding 3D Printing Technology: The FDM Pipeline

Before you send your first print, it's important to understand how 3D printers work and how the choices you make in the slicer affect the final result. This section builds on the workflow you learned above by explaining *what happens after* `3dm build`.

### The FDM (Fused Deposition Modeling) Process

FDM printing builds objects layer by layer, where each layer is a thin horizontal slice of your STL file. Here's the complete pipeline:

1. **STL File** → Your 3dMake model exported as an STL geometry file
2. **Slicer Analysis** → Software like PrusaSlicer reads the STL and divides it into layers
3. **G-code Generation** → The slicer converts layers into machine instructions (coordinates, temperature, speed)
4. **Printing** → The printer reads G-code, heats the nozzle to ~200–230°C, and extrudes plastic one layer at a time
5. **Cooling & Solidification** → Each layer cools and bonds to the layer below

### Critical Settings That Affect Your Print

When you open your STL in a slicer, you'll encounter several parameters that directly impact quality, time, and strength:

#### **Layer Height**
- **Definition:** The thickness of each printed layer (typically 0.15–0.30 mm)
- **Effect on Time:** Smaller layers = more detail but longer print time. A layer height of 0.15 mm prints slower than 0.30 mm because more layers must be printed
- **Effect on Quality:** Smaller layers produce smoother surfaces; larger layers print faster but appear more "stepped"
- **Common Choice:** 0.20 mm is a good balance for classroom projects

#### **Infill**
- **Definition:** The interior solid percentage of your model (0–100%)
- **Purpose:** Infill provides internal strength without using solid material throughout (which would be wasteful and heavy)
- **Common Values for Classroom:** 15–20% infill is typical; 10% for very light parts, 50% for functional parts
- **Infill Patterns:** Grid, gyroid, or honeycomb patterns determine how the internal structure looks. Grid is simple and fast; gyroid is strong but more complex
- **Rule of Thumb:** Higher infill = stronger, heavier, and longer print time

#### **Supports**
- **Definition:** Temporary structures the printer creates to hold overhanging geometry during printing
- **When Needed:** Any geometry that "hangs" at a steep angle (typically > 45° from vertical) requires supports
- **Post-Processing:** Supports must be removed after printing (breaking them off, dissolving them, or picking them away)
- **Cost:** Supports increase print time and waste material, so good STL design minimizes them

### Why This Matters for Your Design

When you wrote `src/main.scad` in the tasks above, you created a parametric model. Those parameters become *constraints* that affect how well your part prints:
- A `thickness` of 0.5 mm might be too thin for FDM (will break easily)
- A `width` of 300 mm will take many hours to print
- Sharp corners and thin walls can cause printing failures

Understanding the FDM pipeline helps you design parts that not only look correct in OpenSCAD but will actually *print successfully*.

### Next Steps: The Slicer

After you create an STL with `3dm build`, you open it in a slicer to:
1. Verify geometry (check for thin walls or non-manifold faces)
2. Set layer height, infill, and supports
3. Preview the layers to see what the printer will do
4. Export as G-code to send to the printer

You'll practice this workflow in Lesson 2, where you'll iterate on a simple part and resolve common printing issues.

---

## Getting Started: Guided Projects & Extension Resources

Once you've completed this lesson, you're ready to work on hands-on projects. The curriculum includes several guided projects and extension resources:

### Extension Projects (Beginner to Advanced)

These projects are located in the Lesson 1 assets folder and are designed to reinforce your skills in practical contexts:

- **Your First Print** ([Lesson 1 Assets — Your First Print](../../assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/your-first-print.md))
  - Goal: Low-friction introduction to the complete printing workflow
  - Skills: Setup, basic slicing, first-time print validation
  - Best for: After completing Lesson 1
  - Asset folder: [assets/Lessons_3dMake_1/Your_First_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/)

- **Basic Project Scaffold Template** ([Lesson 1 Assets — SCAD Template](../../assets/3dMake_Foundation/Lessons_3dMake_1/basic_project_scaffold.scad))
  - A starter template for your own 3D printing projects
  - Includes parameter configuration and TODO sections
  
### Learning Series Sample Projects

The `3dmake_learning_series/` folder contains worked examples aligned with this curriculum:

- **01_cube_keycap** (Beginner) - Text embossing basics
- **02_parametric_phone_stand** (Intermediate) - Transforms and Minkowski fillets
- **03_stackable_bins** (Advanced) - Tolerance and assemblies

### Reference Materials

Quick-reference guides are available in `Reference_Materials/`:

- **3dmake-setup-guide.md** - Complete setup walkthrough and command reference
- **openscad-cheat-sheet.md** - Keyboard shortcuts, syntax, and common functions
- **filament-comparison-table.md** - Material properties for different print scenarios
- **master-rubric.md** - Assessment criteria for evaluating student work
- **markdown-starter-guide.md** - Documentation best practices

---

## Quiz — Lesson 3dMake.1 (10 questions)

1. What command initializes a 3dMake project?
2. What folder holds generated STLs?
3. How do you open the main model editor from the CLI?
4. Why is it useful to run `3dm build` frequently during development?
5. Give one reason to prefer an external editor over editing inline.
6. True or False: 3dMake requires a graphical user interface to use effectively.
7. Explain what the `3dmake.toml` file does in your project.
8. Describe what the `src/`, `build/`, and other project scaffold folders are used for.
9. How would you compare the 3dMake build workflow to traditional OpenSCAD workflows?
10. What validation steps should you perform after running `3dm build` and before sending a file to print?

## Extension Problems (10)
1. Add a README entry explaining your top-level parameters and expected units. Reference best practices from the OpenSCAD documentation[^2].
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions with calipers. This demonstrates the power of parametric design discussed in programming resources[^3].
3. Script a `3dm` command sequence that automates new → edit → build for the scaffold. Review the 3dMake test suite for inspiration[^6].
4. Intentionally create a thin-wall error and document the steps you took to find and fix it. Consult slicing guides[^7] for identifying common geometry issues.
5. Prepare a short instructor sign-off checklist describing safety checks before printing.
6. Build a variant testing suite: create 5+ parameter combinations, export STLs, and compare file sizes and estimated print times.
7. Create a 3dMake project template with best-practice structure, documentation, and reusable modules for future projects.
8. Develop a screen-reader accessibility guide for 3dMake CLI commands and parameter syntax.
9. Design a parametric part library in 3dMake format; document all parameters, units, and example usage.
10. Write a comprehensive troubleshooting guide for common 3dMake build errors, with solutions and prevention tips.

## Supplemental Resources

For deeper exploration of OpenSCAD and parametric design, consult these resources:

- **[Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub)** — Comprehensive reference with examples of parametric design, transformations, and modules
- **[CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)** — Working OpenSCAD code organized by topic, including 3D primitives and parametric examples relevant to Lesson 1
- **[OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html)** — Visual syntax guide and command reference

[^1]: 3DMake GitHub Repository - https://github.com/tdeck/3dmake

[^2]: OpenSCAD Manual - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual

[^3]: OpenSCAD Parametric Design - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables

[^4]: OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, https://learn.cadhub.xyz/blog/openscad-review/

[^5]: Slicer Validation Tools - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/

[^6]: 3dmake/e2e_test.py at main - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake/blob/main/e2e_test.py

[^7]: Slicing Guides and Common Geometry Issues - PrusaSlicer Documentation, accessed February 18, 2026, https://docs.prusa3d.com/en/

[^8]: OpenSCAD Prompt Creation - DocsBot AI, accessed February 18, 2026, https://docsbot.ai/prompts/technical/openscad-prompt-creation  

