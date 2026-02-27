# Lesson 1: Environmental Configuration and the Developer Workflow  

Estimated time: 90-120 minutes

## Learning Objectives
- Install and verify 3dm[^1], openscad[^2], and a slicer are discoverable in the terminal
- Initialize a 3dMake project and understand the project scaffold (`src/`, `build/`, `3dmake.toml`)
- Edit `src/main.scad` using OpenSCAD's parametric design capabilities[^3], run `3dm build`, and inspect the generated `build/main.stl`

## Materials
- Terminal with 3dMake installed
- Editor (VS Code or Notepad)
- Example scaffold or classroom repository

## Step-by-step Tasks
1. Run `./3dm setup` or follow instructor's installation notes; confirm tools with `which 3dm` and `which openscad`. Verify your 3dMake installation is properly configured[^1].
2. Create a project scaffold with `3dm new` and open `src/main.scad` using `3dm edit-model`. For a comprehensive introduction to the workflow, consult the OpenSCAD documentation[^2].
3. Add three top-level parameters (e.g., `width`, `height`, `thickness`) and a minimal model. This demonstrates the parametric design philosophy central to OpenSCAD[^3].

   Example `src/main.scad`:
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

## Code Style and Documentation Standards

Professional OpenSCAD code follows consistent documentation practices for clarity, maintainability, and accessibility. As you write more complex designs, good documentation becomes essential for both you and anyone reading your code.

### Comment Types and When to Use Them

File Header Comments - Describe the entire file's purpose:

```openscad
// ==============================================================
// Parametric Phone Stand - Design v2.1
// ==============================================================
// Purpose: Multi-angle viewing stand for phones/tablets
// Author: Alex Chen
// Created: February 2026
// Last Modified: February 23, 2026
// 
// Parameters: phone_width, angle, lip_height
// Dependencies: None (standalone file)
// Print Time Estimate: 45-60 min (PLA, 0.20mm layer height)
// Material: ~50g PLA
// ==============================================================
```

Section Comments - Organize code into logical blocks:

```openscad
// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================
phone_width = 75;    // mm
phone_height = 150;  // mm
stand_angle = 60;    // degrees
// ============================================
// DERIVED CALCULATIONS (calculated from parameters)
// ============================================
base_width = phone_width + 20;
lip_height = 15;
// ============================================
// MODULE DEFINITIONS
// ============================================
module base() { ... }
module stand() { ... }
```

Inline Comments - Clarify complex logic:

```openscad
// Use minkowski for smooth edges (prevents sharp corners)
module rounded_base() {
  minkowski() {
    cube([width - 2*radius, depth - 2*radius, height], center=true);
    cylinder(r=radius, h=0.01, $fn=32);  // $fn=32 for smooth curve
  }
}
```

Parameter Documentation - Explain units and constraints:

```openscad
// Parameter ranges and units
width = 100;         // mm - must be > 50 mm for stability
height = 50;         // mm - can be 20-100 mm
wall_thickness = 2;  // mm - 1.5-3 mm recommended (too thin breaks, too thick wastes material)
angle = 45;          // degrees - 30-80 degrees typical
$fn = 32;            // render quality - use 16-20 for preview, 32+ for export
```

### Documentation Best Practices

1. Write for Your Audience
- Document assumptions and constraints
- Explain non-obvious design choices
- Use clear parameter names (`wall_thickness` not `w`)

2. Include Module Documentation

```openscad
// Create a hollow box with walls of specified thickness
// Parameters: outer_w, outer_d, outer_h (mm), wall (mm)
// Example: hollow_box(50, 50, 50, 2) creates 50x50x50 box with 2mm walls
module hollow_box(outer_w, outer_d, outer_h, wall) {
  difference() {
    cube([outer_w, outer_d, outer_h], center=true);
    cube([outer_w - 2*wall, outer_d - 2*wall, outer_h], center=true);
  }
}
```

3. Document Known Limitations

```openscad
// Phone Stand v2
// Limitations:
// - Not suitable for phones heavier than 200g
// - Recommend PLA or PETG (TPU may warp at recommended angles)
// - Print with 20%+ infill for stability
// - Supports may be needed on underside of angle > 70 degrees
```

4. Accessibility in Code Documentation
- Use plain language, not jargon (or explain jargon)
- Explain visual concepts in text (e.g., "fillet radius of 3mm rounds sharp corners")
- Include parameter ranges and units always
- Describe geometry relationships (e.g., "lip height 1/3 of stand height")

### Example: Well-Documented File

```openscad
// ==============================================================
// Parametric Keycap with Embossed Letter
// ==============================================================
// Purpose: Customizable keyboard keycap for 3D printing
// Applications: Custom keyboards, gaming, accessibility
// Print Time: 3-5 min per cap (varies by size)
// Material: ~2g PLA per cap
//
// PARAMETERS TO CUSTOMIZE:
// - cap_size: 12-28 mm (small to large keycap)
// - cap_height: 6-15 mm
// - letter: any single character to emboss
//
// PRINT RECOMMENDATIONS:
// - Layer height: 0.15 mm (better letter quality)
// - Infill: 15% (sufficient for keyboard use)
// - No supports needed
// - Print with smooth base facing bed
//
// TESTING CHECKLIST:
// - Measure cap_size with calipers (should match design within 0.3mm)
// - Test embossed letter is legible (raised ~0.5mm from surface)
// - Test fit on actual keyboard switch (should snap fit snugly)
// ==============================================================
// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================
cap_size = 14;        // mm - key size (typical: 12-18 for alphanumeric)
cap_height = 10;      // mm - distance from base to top
wall_thickness = 1.2; // mm - side wall thickness (1-1.5 typical)
letter = "A";         // Character to emboss on top
emboss_depth = 0.8;   // mm - how deep letter is raised (0.5-1.0 recommended)
// ============================================
// DERIVED CALCULATIONS
// ============================================
inner_size = cap_size - 2 * wall_thickness;
// ============================================
// MODULE: Hollow shell
// ============================================
module keycap_shell() {
  difference() {
    // Outer box
    cube([cap_size, cap_size, cap_height], center = false);
    // Hollow interior (removed part)
    translate([wall_thickness, wall_thickness, wall_thickness])
      cube([inner_size, inner_size, cap_height], center = false);
  }
}
// ============================================
// MODULE: Embossed letter on top
// ============================================
module embossed_letter() {
  translate([cap_size / 2, cap_size / 2, cap_height - 0.01])
    linear_extrude(height = emboss_depth)
      text(letter, 
           size = cap_size * 0.5,
           halign = "center",
           valign = "center",
           font = "Impact:style=Regular");
}
// ============================================
// ASSEMBLY: Combine shell + emboss
// ============================================
union() {
  keycap_shell();
  embossed_letter();
}
```

This level of documentation makes your code:
- Reusable: Others can use it without reading every line
- Maintainable: You can modify it months later and understand why things are designed a certain way
- Accessible: Non-visual users can understand the design intent and constraints
- Professional: Employers and collaborators trust well-documented code

### Checkpoints
- After step 2 you can locate `3dmake.toml` and the `build/` directory. Ensure your project scaffold matches the expected structure described in the 3dMake repository[^1].
- After step 4 the `build/` folder contains a valid `main.stl`. Verify the geometry using your slicer's validation tools[^5].
- After this section, your code includes file header, parameter documentation, and module descriptions following professional standards.

## Understanding 3D Printing Technology: The FDM Pipeline

Before you send your first print, it's important to understand how 3D printers work and how the choices you make in the slicer affect the final result. This section builds on the workflow you learned above by explaining *what happens after* `3dm build`.

### The FDM (Fused Deposition Modeling) Process

FDM printing builds objects layer by layer, where each layer is a thin horizontal slice of your STL file. Here's the complete pipeline:

1. STL File -> Your 3dMake model exported as an STL geometry file
2. Slicer Analysis -> Software like PrusaSlicer reads the STL and divides it into layers
3. G-code Generation -> The slicer converts layers into machine instructions (coordinates, temperature, speed)
4. Printing -> The printer reads G-code, heats the nozzle to ~200-230C, and extrudes plastic one layer at a time
5. Cooling & Solidification -> Each layer cools and bonds to the layer below

### Critical Settings That Affect Your Print

When you open your STL in a slicer, you'll encounter several parameters that directly impact quality, time, and strength:

#### Layer Height
- Definition: The thickness of each printed layer (typically 0.15-0.30 mm)
- Effect on Time: Smaller layers = more detail but longer print time. A layer height of 0.15 mm prints slower than 0.30 mm because more layers must be printed
- Effect on Quality: Smaller layers produce smoother surfaces; larger layers print faster but appear more "stepped"
- Common Choice: 0.20 mm is a good balance for classroom projects

#### Infill
- Definition: The interior solid percentage of your model (0-100%)
- Purpose: Infill provides internal strength without using solid material throughout (which would be wasteful and heavy)
- Common Values for Classroom: 15-20% infill is typical; 10% for very light parts, 50% for functional parts
- Infill Patterns: Grid, gyroid, or honeycomb patterns determine how the internal structure looks. Grid is simple and fast; gyroid is strong but more complex
- Rule of Thumb: Higher infill = stronger, heavier, and longer print time

#### Supports
- Definition: Temporary structures the printer creates to hold overhanging geometry during printing
- When Needed: Any geometry that "hangs" at a steep angle (typically > 45 from vertical) requires supports
- Post-Processing: Supports must be removed after printing (breaking them off, dissolving them, or picking them away)
- Cost: Supports increase print time and waste material, so good STL design minimizes them

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

## Getting Started: Guided Projects & Extension Resources

Once you've completed this lesson, you're ready to work on hands-on projects. The curriculum includes several guided projects and extension resources:

### Extension Projects (Beginner to Advanced)

These projects are located in the Lesson 1 assets folder and are designed to reinforce your skills in practical contexts:

- Your First Print ([Lesson 1 Assets - Your First Print](../../assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/your-first-print.md))
  - Goal: Low-friction introduction to the complete printing workflow
  - Skills: Setup, basic slicing, first-time print validation
  - Best for: After completing Lesson 1
  - Asset folder: [assets/Lessons_3dMake_1/Your_First_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/)

- Basic Project Scaffold Template ([Lesson 1 Assets - SCAD Template](../../assets/3dMake_Foundation/Lessons_3dMake_1/basic_project_scaffold.scad))
  - A starter template for your own 3D printing projects
  - Includes parameter configuration and TODO sections
  
### Learning Series Sample Projects

The `3dmake_learning_series/` folder contains worked examples aligned with this curriculum:

- 01_cube_keycap (Beginner) - Text embossing basics
- 02_parametric_phone_stand (Intermediate) - Transforms and Minkowski fillets
- 03_stackable_bins (Advanced) - Tolerance and assemblies

### Reference Materials

Quick-reference guides are available in `Reference_Materials/`:

- 3dmake-setup-guide.md - Complete setup walkthrough and command reference
- openscad-cheat-sheet.md - Keyboard shortcuts, syntax, and common functions
- filament-comparison-table.md - Material properties for different print scenarios
- master-rubric.md - Assessment criteria for evaluating student work

## Quiz - Lesson 3dMake.1 (15 questions)

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
11. What is the difference between the global configuration file (`defaults.toml`) and the project configuration file (`3dmake.toml`)? Which takes precedence when both define the same setting?
12. Describe what a TOML boolean value looks like and give one example of a 3dMake setting that would use a boolean.
13. What command would you run to see all available 3dMake commands, and what command shows the installed version number?
14. Explain what FDM stands for and describe the five-step pipeline from STL file to cooled physical part.
15. You run `3dm build` and receive the error "No such file or directory: src/main.scad". What are two likely causes and how would you fix each one?

## Extension Problems (15)
1. Add a README entry explaining your top-level parameters and expected units. Reference best practices from the OpenSCAD documentation[^2].
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions with calipers. This demonstrates the power of parametric design discussed in programming resources[^3].
3. Script a `3dm` command sequence that automates new -> edit -> build for the scaffold. Review the 3dMake test suite for inspiration[^6].
4. Intentionally create a thin-wall error and document the steps you took to find and fix it. Consult slicing guides[^7] for identifying common geometry issues.
5. Prepare a short instructor sign-off checklist describing safety checks before printing.
6. Build a variant testing suite: create 5+ parameter combinations, export STLs, and compare file sizes and estimated print times.
7. Create a 3dMake project template with best-practice structure, documentation, and reusable modules for future projects.
8. Develop a screen-reader accessibility guide for 3dMake CLI commands and parameter syntax.
9. Design a parametric part library in 3dMake format; document all parameters, units, and example usage.
10. Write a comprehensive troubleshooting guide for common 3dMake build errors, with solutions and prevention tips.
11. Add a `.gitignore` file to a new project, commit the scaffold using Git, then make a parameter change and create a second commit. Write a one-paragraph explanation of why version control is valuable for parametric design.
12. Edit the global configuration file using `3dm edit-global-config` to change the default editor. Document the setting name, the value you chose, and how you verified the change took effect.
13. Create a project with three `.scad` files (e.g., `main.scad`, `lid.scad`, `base.scad`) and build each using `3dm build -m <name>`. Record the output STL filenames for each.
14. Research the FDM layer height trade-off: slice the same model at 0.15 mm, 0.20 mm, and 0.30 mm layer heights. Record estimated print time and filament use for each. Write two sentences explaining the trade-off.
15. Write a one-page "new student onboarding guide" for 3dMake that covers installation, project creation, first build, and first print. Use accessible language suitable for someone with no prior terminal experience.

## Supplemental Resources

For deeper exploration of OpenSCAD and parametric design, consult these resources:

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) - Comprehensive reference with examples of parametric design, transformations, and modules
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) - Working OpenSCAD code organized by topic, including 3D primitives and parametric examples relevant to Lesson 1
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) - Visual syntax guide and command reference

[^1]: 3DMake GitHub Repository - [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

[^2]: OpenSCAD Manual - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)

[^3]: OpenSCAD Parametric Design - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables)

[^4]: OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, [https://learn.cadhub.xyz/blog/openscad-review/](https://learn.cadhub.xyz/blog/openscad-review/)

[^5]: Slicer Validation Tools - PrusaSlicer Documentation - [https://docs.prusa3d.com/en/guide/39012-validation-tools/](https://docs.prusa3d.com/en/guide/39012-validation-tools/)

[^6]: 3dmake/e2e_test.py at main - GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake/blob/main/e2e_test.py](https://github.com/tdeck/3dmake/blob/main/e2e_test.py)

[^7]: Slicing Guides and Common Geometry Issues - PrusaSlicer Documentation, accessed February 18, 2026, [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)

[^8]: OpenSCAD User Manual - Non-Manifold Geometry, accessed February 18, 2026, [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F)
