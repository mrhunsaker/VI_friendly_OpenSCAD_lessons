[Header 2 ("3dmake_foundation_lessons_3dmake_1-lessons_3dmake_1", [], []) [Str "Lesson 1: Environmental Configuration and the Developer Workflow"], Para [Str "Estimated time: 90-120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Install and verify 3dm", Note [Para [Str "3DMake GitHub Repository - https://github.com/tdeck/3dmake"]], Str ", openscad", Note [Para [Str "OpenSCAD Manual - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual"]], Str ", and a slicer are discoverable in the terminal"]], [Plain [Str "Initialize a 3dMake project and understand the project scaffold (", Code ("", [], []) "src/", Str ", ", Code ("", [], []) "build/", Str ", ", Code ("", [], []) "3dmake.toml", Str ")"]], [Plain [Str "Edit ", Code ("", [], []) "src/main.scad", Str " using OpenSCAD's parametric design capabilities", Note [Para [Str "OpenSCAD Parametric Design - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables"]], Str ", run ", Code ("", [], []) "3dm build", Str ", and inspect the generated ", Code ("", [], []) "build/main.stl"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "Terminal with 3dMake installed"]], [Plain [Str "Editor (VS Code or Notepad)"]], [Plain [Str "Example scaffold or classroom repository"]]], HorizontalRule, Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Run ", Code ("", [], []) "./3dm setup", Str " or follow instructor's installation notes; confirm tools with ", Code ("", [], []) "which 3dm", Str " and ", Code ("", [], []) "which openscad", Str ". Verify your 3dMake installation is properly configured", Note [Para [Str "3DMake GitHub Repository - https://github.com/tdeck/3dmake"]], Str "."]], [Para [Str "Create a project scaffold with ", Code ("", [], []) "3dm new", Str " and open ", Code ("", [], []) "src/main.scad", Str " using ", Code ("", [], []) "3dm edit-model", Str ". For a comprehensive introduction to the workflow, consult the OpenSCAD documentation", Note [Para [Str "OpenSCAD Manual - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual"]], Str "."]], [Para [Str "Add three top-level parameters (e.g., ", Code ("", [], []) "width", Str ", ", Code ("", [], []) "height", Str ", ", Code ("", [], []) "thickness", Str ") and a minimal model. This demonstrates the parametric design philosophy central to OpenSCAD", Note [Para [Str "OpenSCAD Parametric Design - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables"]], Str "."], Para [Str "Example ", Code ("", [], []) "src/main.scad", Str ":"], CodeBlock ("", ["openscad"], []) "// Top-level parameters (change these to customize your model)
width = 50;      // mm
height = 30;     // mm
thickness = 5;   // mm

// Main model
cube([width, height, thickness]);
"], [Para [Str "Run ", Code ("", [], []) "3dm build", Str " and verify ", Code ("", [], []) "build/main.stl", Str " exists. Compare this build process to standard OpenSCAD workflows", Note [Para [Str "OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, https://learn.cadhub.xyz/blog/openscad-review/"]], Str "."]], [Para [Str "Open the STL in your slicer to check for thin walls or non-manifold geometry", Note [Para [Str "OpenSCAD Prompt Creation - DocsBot AI, accessed February 18, 2026, https://docsbot.ai/prompts/technical/openscad-prompt-creation"]], Str "; if issues appear, iterate on ", Code ("", [], []) "main.scad", Str " and rebuild."]], [Para [Str "Try modifying the parameters and running ", Code ("", [], []) "3dm build", Str " again to see how parametric design allows you to quickly create variants."]]], HorizontalRule, Header 3 ("code-style-and-documentation-standards", ["unnumbered", "unlisted"], []) [Str "Code Style and Documentation Standards"], Para [Str "Professional OpenSCAD code follows consistent documentation practices for clarity, maintainability, and accessibility. As you write more complex designs, good documentation becomes essential for both you and anyone reading your code."], Header 4 ("comment-types-and-when-to-use-them", ["unnumbered", "unlisted"], []) [Str "Comment Types and When to Use Them"], Para [Str "File Header Comments - Describe the entire file's purpose:"], CodeBlock ("", ["openscad"], []) "// ==============================================================
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
", Para [Str "Section Comments - Organize code into logical blocks:"], CodeBlock ("", ["openscad"], []) "// ============================================
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
", Para [Str "Inline Comments - Clarify complex logic:"], CodeBlock ("", ["openscad"], []) "// Use minkowski for smooth edges (prevents sharp corners)
module rounded_base() {
  minkowski() {
    cube([width - 2*radius, depth - 2*radius, height], center=true);
    cylinder(r=radius, h=0.01, $fn=32);  // $fn=32 for smooth curve
  }
}
", Para [Str "Parameter Documentation - Explain units and constraints:"], CodeBlock ("", ["openscad"], []) "// Parameter ranges and units
width = 100;         // mm - must be > 50 mm for stability
height = 50;         // mm - can be 20-100 mm
wall_thickness = 2;  // mm - 1.5-3 mm recommended (too thin breaks, too thick wastes material)
angle = 45;          // degrees - 30-80 degrees typical
$fn = 32;            // render quality - use 16-20 for preview, 32+ for export
", Header 4 ("documentation-best-practices", ["unnumbered", "unlisted"], []) [Str "Documentation Best Practices"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Write for Your Audience"]]], BulletList [[Plain [Str "Document assumptions and constraints"]], [Plain [Str "Explain non-obvious design choices"]], [Plain [Str "Use clear parameter names (", Code ("", [], []) "wall_thickness", Str " not ", Code ("", [], []) "w", Str ")"]]], OrderedList (2, DefaultStyle, DefaultDelim) [[Plain [Str "Include Module Documentation"]]], CodeBlock ("", ["openscad"], []) "// Create a hollow box with walls of specified thickness
// Parameters: outer_w, outer_d, outer_h (mm), wall (mm)
// Example: hollow_box(50, 50, 50, 2) creates 50x50x50 box with 2mm walls
module hollow_box(outer_w, outer_d, outer_h, wall) {
  difference() {
    cube([outer_w, outer_d, outer_h], center=true);
    cube([outer_w - 2*wall, outer_d - 2*wall, outer_h], center=true);
  }
}
", OrderedList (3, DefaultStyle, DefaultDelim) [[Plain [Str "Document Known Limitations"]]], CodeBlock ("", ["openscad"], []) "// Phone Stand v2
// Limitations:
// - Not suitable for phones heavier than 200g
// - Recommend PLA or PETG (TPU may warp at recommended angles)
// - Print with 20%+ infill for stability
// - Supports may be needed on underside of angle > 70 degrees
", OrderedList (4, DefaultStyle, DefaultDelim) [[Plain [Str "Accessibility in Code Documentation"]]], BulletList [[Plain [Str "Use plain language, not jargon (or explain jargon)"]], [Plain [Str "Explain visual concepts in text (e.g., \"fillet radius of 3mm rounds sharp corners\")"]], [Plain [Str "Include parameter ranges and units always"]], [Plain [Str "Describe geometry relationships (e.g., \"lip height 1/3 of stand height\")"]]], Header 4 ("example-well-documented-file", ["unnumbered", "unlisted"], []) [Str "Example: Well-Documented File"], CodeBlock ("", ["openscad"], []) "// ==============================================================
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
letter = \"A\";         // Character to emboss on top
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
           halign = \"center\",
           valign = \"center\",
           font = \"Impact:style=Regular\");
}

// ============================================
// ASSEMBLY: Combine shell + emboss
// ============================================

union() {
  keycap_shell();
  embossed_letter();
}
", Para [Str "This level of documentation makes your code:"], BulletList [[Plain [Str "Reusable: Others can use it without reading every line"]], [Plain [Str "Maintainable: You can modify it months later and understand why things are designed a certain way"]], [Plain [Str "Accessible: Non-visual users can understand the design intent and constraints"]], [Plain [Str "Professional: Employers and collaborators trust well-documented code"]]], Header 4 ("checkpoints", ["unnumbered", "unlisted"], []) [Str "Checkpoints"], BulletList [[Plain [Str "After step 2 you can locate ", Code ("", [], []) "3dmake.toml", Str " and the ", Code ("", [], []) "build/", Str " directory. Ensure your project scaffold matches the expected structure described in the 3dMake repository", Note [Para [Str "3DMake GitHub Repository - https://github.com/tdeck/3dmake"]], Str "."]], [Plain [Str "After step 4 the ", Code ("", [], []) "build/", Str " folder contains a valid ", Code ("", [], []) "main.stl", Str ". Verify the geometry using your slicer's validation tools", Note [Para [Str "Slicer Validation Tools - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/"]], Str "."]], [Plain [Str "After this section, your code includes file header, parameter documentation, and module descriptions following professional standards."]]], HorizontalRule, Header 3 ("understanding-3d-printing-technology-the-fdm-pipeline", ["unnumbered", "unlisted"], []) [Str "Understanding 3D Printing Technology: The FDM Pipeline"], Para [Str "Before you send your first print, it's important to understand how 3D printers work and how the choices you make in the slicer affect the final result. This section builds on the workflow you learned above by explaining ", Emph [Str "what happens after"], Str " ", Code ("", [], []) "3dm build", Str "."], Header 4 ("the-fdm-fused-deposition-modeling-process", ["unnumbered", "unlisted"], []) [Str "The FDM (Fused Deposition Modeling) Process"], Para [Str "FDM printing builds objects layer by layer, where each layer is a thin horizontal slice of your STL file. Here's the complete pipeline:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "STL File -> Your 3dMake model exported as an STL geometry file"]], [Plain [Str "Slicer Analysis -> Software like PrusaSlicer reads the STL and divides it into layers"]], [Plain [Str "G-code Generation -> The slicer converts layers into machine instructions (coordinates, temperature, speed)"]], [Plain [Str "Printing -> The printer reads G-code, heats the nozzle to ", Str "~", Str "200-230C, and extrudes plastic one layer at a time"]], [Plain [Str "Cooling & Solidification -> Each layer cools and bonds to the layer below"]]], Header 4 ("critical-settings-that-affect-your-print", ["unnumbered", "unlisted"], []) [Str "Critical Settings That Affect Your Print"], Para [Str "When you open your STL in a slicer, you'll encounter several parameters that directly impact quality, time, and strength:"], Header 5 ("layer-height", ["unnumbered", "unlisted"], []) [Str "Layer Height"], BulletList [[Plain [Str "Definition: The thickness of each printed layer (typically 0.15-0.30 mm)"]], [Plain [Str "Effect on Time: Smaller layers = more detail but longer print time. A layer height of 0.15 mm prints slower than 0.30 mm because more layers must be printed"]], [Plain [Str "Effect on Quality: Smaller layers produce smoother surfaces; larger layers print faster but appear more \"stepped\""]], [Plain [Str "Common Choice: 0.20 mm is a good balance for classroom projects"]]], Header 5 ("infill", ["unnumbered", "unlisted"], []) [Str "Infill"], BulletList [[Plain [Str "Definition: The interior solid percentage of your model (0-100%)"]], [Plain [Str "Purpose: Infill provides internal strength without using solid material throughout (which would be wasteful and heavy)"]], [Plain [Str "Common Values for Classroom: 15-20% infill is typical; 10% for very light parts, 50% for functional parts"]], [Plain [Str "Infill Patterns: Grid, gyroid, or honeycomb patterns determine how the internal structure looks. Grid is simple and fast; gyroid is strong but more complex"]], [Plain [Str "Rule of Thumb: Higher infill = stronger, heavier, and longer print time"]]], Header 5 ("supports", ["unnumbered", "unlisted"], []) [Str "Supports"], BulletList [[Plain [Str "Definition: Temporary structures the printer creates to hold overhanging geometry during printing"]], [Plain [Str "When Needed: Any geometry that \"hangs\" at a steep angle (typically > 45 from vertical) requires supports"]], [Plain [Str "Post-Processing: Supports must be removed after printing (breaking them off, dissolving them, or picking them away)"]], [Plain [Str "Cost: Supports increase print time and waste material, so good STL design minimizes them"]]], Header 4 ("why-this-matters-for-your-design", ["unnumbered", "unlisted"], []) [Str "Why This Matters for Your Design"], Para [Str "When you wrote ", Code ("", [], []) "src/main.scad", Str " in the tasks above, you created a parametric model. Those parameters become ", Emph [Str "constraints"], Str " that affect how well your part prints:"], BulletList [[Plain [Str "A ", Code ("", [], []) "thickness", Str " of 0.5 mm might be too thin for FDM (will break easily)"]], [Plain [Str "A ", Code ("", [], []) "width", Str " of 300 mm will take many hours to print"]], [Plain [Str "Sharp corners and thin walls can cause printing failures"]]], Para [Str "Understanding the FDM pipeline helps you design parts that not only look correct in OpenSCAD but will actually ", Emph [Str "print successfully"], Str "."], Header 4 ("next-steps-the-slicer", ["unnumbered", "unlisted"], []) [Str "Next Steps: The Slicer"], Para [Str "After you create an STL with ", Code ("", [], []) "3dm build", Str ", you open it in a slicer to:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Verify geometry (check for thin walls or non-manifold faces)"]], [Plain [Str "Set layer height, infill, and supports"]], [Plain [Str "Preview the layers to see what the printer will do"]], [Plain [Str "Export as G-code to send to the printer"]]], Para [Str "You'll practice this workflow in Lesson 2, where you'll iterate on a simple part and resolve common printing issues."], HorizontalRule, Header 3 ("getting-started-guided-projects--extension-resources", ["unnumbered", "unlisted"], []) [Str "Getting Started: Guided Projects & Extension Resources"], Para [Str "Once you've completed this lesson, you're ready to work on hands-on projects. The curriculum includes several guided projects and extension resources:"], Header 4 ("extension-projects-beginner-to-advanced", ["unnumbered", "unlisted"], []) [Str "Extension Projects (Beginner to Advanced)"], Para [Str "These projects are located in the Lesson 1 assets folder and are designed to reinforce your skills in practical contexts:"], BulletList [[Para [Str "Your First Print (", Link ("", [], []) [Str "Lesson 1 Assets - Your First Print"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_1%5CYour_First_Print%5Cyour-first-print.md", ""), Str ")"], BulletList [[Plain [Str "Goal: Low-friction introduction to the complete printing workflow"]], [Plain [Str "Skills: Setup, basic slicing, first-time print validation"]], [Plain [Str "Best for: After completing Lesson 1"]], [Plain [Str "Asset folder: ", Link ("", [], []) [Str "assets/Lessons_3dMake_1/Your_First_Print/"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_1%5CYour_First_Print", "")]]]], [Para [Str "Basic Project Scaffold Template (", Link ("", [], []) [Str "Lesson 1 Assets - SCAD Template"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_1%5Cbasic_project_scaffold.scad", ""), Str ")"], BulletList [[Plain [Str "A starter template for your own 3D printing projects"]], [Plain [Str "Includes parameter configuration and TODO sections"]]]]], Header 4 ("learning-series-sample-projects", ["unnumbered", "unlisted"], []) [Str "Learning Series Sample Projects"], Para [Str "The ", Code ("", [], []) "3dmake_learning_series/", Str " folder contains worked examples aligned with this curriculum:"], BulletList [[Plain [Str "01_cube_keycap (Beginner) - Text embossing basics"]], [Plain [Str "02_parametric_phone_stand (Intermediate) - Transforms and Minkowski fillets"]], [Plain [Str "03_stackable_bins (Advanced) - Tolerance and assemblies"]]], Header 4 ("reference-materials", ["unnumbered", "unlisted"], []) [Str "Reference Materials"], Para [Str "Quick-reference guides are available in ", Code ("", [], []) "Reference_Materials/", Str ":"], BulletList [[Plain [Str "3dmake-setup-guide.md - Complete setup walkthrough and command reference"]], [Plain [Str "openscad-cheat-sheet.md - Keyboard shortcuts, syntax, and common functions"]], [Plain [Str "filament-comparison-table.md - Material properties for different print scenarios"]], [Plain [Str "master-rubric.md - Assessment criteria for evaluating student work"]], [Plain [Str "markdown-starter-guide.md - Documentation best practices"]]], HorizontalRule, Header 3 ("quiz---lesson-3dmake1-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.1 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What command initializes a 3dMake project?"]], [Plain [Str "What folder holds generated STLs?"]], [Plain [Str "How do you open the main model editor from the CLI?"]], [Plain [Str "Why is it useful to run ", Code ("", [], []) "3dm build", Str " frequently during development?"]], [Plain [Str "Give one reason to prefer an external editor over editing inline."]], [Plain [Str "True or False: 3dMake requires a graphical user interface to use effectively."]], [Plain [Str "Explain what the ", Code ("", [], []) "3dmake.toml", Str " file does in your project."]], [Plain [Str "Describe what the ", Code ("", [], []) "src/", Str ", ", Code ("", [], []) "build/", Str ", and other project scaffold folders are used for."]], [Plain [Str "How would you compare the 3dMake build workflow to traditional OpenSCAD workflows?"]], [Plain [Str "What validation steps should you perform after running ", Code ("", [], []) "3dm build", Str " and before sending a file to print?"]]], Header 3 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Add a README entry explaining your top-level parameters and expected units. Reference best practices from the OpenSCAD documentation", Note [Para [Str "OpenSCAD Manual - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual"]], Str "."]], [Plain [Str "Create a parameter variant by changing ", Code ("", [], []) "width", Str " by 20% and build both variants; compare dimensions with calipers. This demonstrates the power of parametric design discussed in programming resources", Note [Para [Str "OpenSCAD Parametric Design - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables"]], Str "."]], [Plain [Str "Script a ", Code ("", [], []) "3dm", Str " command sequence that automates new -> edit -> build for the scaffold. Review the 3dMake test suite for inspiration", Note [Para [Str "3dmake/e2e_test.py at main - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake/blob/main/e2e_test.py"]], Str "."]], [Plain [Str "Intentionally create a thin-wall error and document the steps you took to find and fix it. Consult slicing guides", Note [Para [Str "Slicing Guides and Common Geometry Issues - PrusaSlicer Documentation, accessed February 18, 2026, https://docs.prusa3d.com/en/"]], Str " for identifying common geometry issues."]], [Plain [Str "Prepare a short instructor sign-off checklist describing safety checks before printing."]], [Plain [Str "Build a variant testing suite: create 5+ parameter combinations, export STLs, and compare file sizes and estimated print times."]], [Plain [Str "Create a 3dMake project template with best-practice structure, documentation, and reusable modules for future projects."]], [Plain [Str "Develop a screen-reader accessibility guide for 3dMake CLI commands and parameter syntax."]], [Plain [Str "Design a parametric part library in 3dMake format; document all parameters, units, and example usage."]], [Plain [Str "Write a comprehensive troubleshooting guide for common 3dMake build errors, with solutions and prevention tips."]]], Header 3 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], Para [Str "For deeper exploration of OpenSCAD and parametric design, consult these resources:"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " - Comprehensive reference with examples of parametric design, transformations, and modules"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " - Working OpenSCAD code organized by topic, including 3D primitives and parametric examples relevant to Lesson 1"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " - Visual syntax guide and command reference"]]]]