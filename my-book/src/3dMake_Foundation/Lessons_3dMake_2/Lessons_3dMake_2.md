# Lesson 2: Geometric Primitives and Constructive Solid Geometry 

Estimated time: 75-90 minutes
- Use OpenSCAD primitives (`cube()`, `sphere()`, `cylinder()`) and transforms (`translate()`, `rotate()`, `scale()`)[^2]
- Apply CSG operators (`union`, `difference`, `intersection`) safely and diagnose common numerical issues[^3]
- Use quick diagnostic renders and validate geometry in a slicer[^1]

**Materials**
- 3dMake project scaffold with `src/main.scad`
- Example primitive snippets (provided in assets)
- Reference: [openscad-cheat-sheet.md](openscad-cheat-sheet.md) for syntax quick-reference

---
1. Open `src/main.scad`; identify and run simple examples using `cube()`, `sphere()`, and `cylinder()`[^2].

   **Example primitives:**
   ```openscad
   // Primitive shapes - uncomment one to try
   
   // Cube (x, y, z dimensions)
   cube([20, 20, 20]);
   
   // Sphere (radius, resolution)
   // sphere(r=10, $fn=32);
   
   // Cylinder (radius, height, resolution)
   // cylinder(r=10, h=20, $fn=32);
   ```

2. Create three short examples demonstrating `union()`, `difference()`, and `intersection()` and render with reduced `$fn`. Review CSG best practices[^3].

   **Example CSG operations:**
   ```openscad
   // UNION - Combine multiple shapes
   union(){
     cube([20, 20, 20]);
     translate([15, 0, 0]) sphere(r=10, $fn=32);
   }
   
   // DIFFERENCE - Subtract shapes
   // difference(){
   //   cube([20, 20, 20]);
   //   translate([10, 10, 10]) sphere(r=8, $fn=32);
   // }
   
   // INTERSECTION - Keep only overlapping volumes
   // intersection(){
   //   cube([20, 20, 20]);
   //   sphere(r=12, $fn=32);
   // }
   ```

3. Reproduce a failing `difference()` case and apply the 0.001 offset strategy to the subtractor; re-render and confirm fix. This technique addresses common manifold issues[^4].

   **Fix technique:**
   ```openscad
   // Problem: Coincident faces cause non-manifold issues
   difference(){
     cube([20, 20, 20], center=true);
     // Use translate with small offset (0.001) to prevent coincident faces
     translate([0, 0, 0.001]) sphere(r=10, $fn=32);
   }
   ```

4. Build an STL with `3dm build` and open it in your slicer to check for thin walls or islands[^1].
5. Document any fixes in the project README and commit the working `main.scad` and STL.

## Modifier Characters for Advanced Debugging

OpenSCAD includes special **modifier characters** that help you isolate and debug specific parts of your model. These single-character prefixes (placed before module/shape names) change how that object is rendered without affecting the underlying code.

### The Four Modifier Characters

#### **1. The `!` Character (Show Only)**

Use `!` to render **only** the marked object and hide everything else. This is essential for isolating geometry when debugging complex models:

```openscad
module base() {
  cube([50, 50, 5]);
}

module stand() {
  translate([0, 0, 5])
    rotate([60, 0, 0])
    cube([50, 5, 40]);
}

module lip() {
  translate([0, 50, 45])
    cube([50, 8, 15]);
}

// Show all parts
base();
stand();
lip();

// DEBUG: Show only the stand by adding !
// !stand();
```

**When to use:** You're debugging a multi-part assembly and want to see one component in isolation

#### **2. The `#` Character (Highlight)**

Use `#` to render the marked object **and highlight it in red** (in preview mode). This helps you see which part corresponds to which code:

```openscad
difference() {
  cube([30, 30, 30], center=true);
  
  // Highlight the subtracted sphere in red
  #sphere(r=15, $fn=32);
}
```

**When to use:** Identifying which boolean operation is creating problems or validating that two objects overlap correctly

#### **3. The `%` Character (Transparent/Ghost)**

Use `%` to render the marked object as **transparent/ghosted** (shown as semi-transparent geometry). This helps you see what's "underneath" without removing the code:

```openscad
module outer_shell() {
  difference() {
    cube([50, 50, 50], center=true);
    cube([44, 44, 44], center=true);  // Wall thickness of 3mm
  }
}

module internal_support() {
  translate([0, 0, -10])
    cube([20, 20, 10], center=true);
}

// Show shell normally and support as ghosted
outer_shell();
%internal_support();  // Transparent - see where it sits relative to shell
```

**When to use:** Visualizing assembly relationships or checking alignment of internal vs external features

#### **4. The `*` Character (Disable)**

Use `*` to **disable rendering** of a marked object entirely. It's like commenting it out but without modifying the code:

```openscad
module component_a() { cube([30, 30, 30]); }
module component_b() { sphere(r=20, $fn=32); }
module component_c() { cylinder(h=40, r=15, $fn=32); }

component_a();
*component_b();  // Disabled - won't render
component_c();
```

**When to use:** Testing whether a component is causing rendering errors or print failures without deleting code

### Practical Debugging Workflow Using Modifiers

**Scenario:** Your phone stand model has three parts, but it's rendering very slowly. You suspect one part is the problem.

```openscad
module base() {
  cube([100, 100, 5]);
}

module stand() {
  // Complex geometry with many $fn values
  translate([0, 0, 5])
    rotate([60, 0, 0])
    minkowski() {
      cube([90, 10, 40], center=true);
      cylinder(r=5, h=0.01, $fn=64);  // This might be slow!
    }
}

module lip() {
  translate([0, 100, 45])
    cube([100, 10, 15]);
}

// DEBUGGING STEPS:

// Step 1: Show all parts (original speed problem)
base();
stand();
lip();

// Step 2: Disable stand to test if it's the culprit
// base();
// *stand();
// lip();
// Result: If still slow, problem is elsewhere. If fast, stand() is the issue.

// Step 3: If stand() is slow, highlight just that part
// !#stand();  // Shows only stand in red - can now debug its geometry

// Step 4: Reduce resolution in stand() and test again
// (modify the $fn=64 to $fn=16 and see if faster)
```

### Key Points About Modifiers

| Character | Effect                | Use Case                                         |
|-----------|-----------------------|--------------------------------------------------|
| `!`       | Show only this object | Isolate one component in multi-part assembly     |
| `#`       | Highlight in red      | See what's being subtracted/added in boolean ops |
| `%`       | Ghost/transparent     | See assembly relationships and overlaps          |
| `*`       | Disable/hide          | Test if a component is causing problems          |

**Important:** Modifiers only affect the visual preview/render. They do **not** change the exported STL file. When you export, all objects are included normally (unless you've actually deleted or commented them out).

### Practice Exercise: Modifier Workflow

Create a file with three overlapping shapes and practice:
1. Use `!` to show only the middle shape
2. Use `#` to highlight the bottom shape
3. Use `%` to ghost the top shape
4. Use `*` to disable all shapes one at a time

```openscad
// Practice: Multi-part assembly debugging

module bottom_part() {
  cube([50, 50, 10], center=true);
}

module middle_part() {
  translate([0, 0, 15])
    cylinder(h=20, r=20, $fn=32);
}

module top_part() {
  translate([0, 0, 40])
    sphere(r=15, $fn=32);
}

// Test 1: Show only middle
// !middle_part();

// Test 2: Highlight bottom
// #bottom_part();
// middle_part();
// top_part();

// Test 3: Ghost top
// bottom_part();
// middle_part();
// %top_part();

// Test 4: Disable one at a time
// *bottom_part();
// middle_part();
// top_part();
```

---

### Debugging, Resolution, and Common Issues

As your OpenSCAD models become more complex, you'll encounter rendering errors, non-manifold geometry, or slow previews. Learning to debug efficiently is essential for productive design work.

#### **Understanding OpenSCAD Console Errors**

When you press **F5** to preview or **F6** to render your model, OpenSCAD displays warnings and errors in the console at the bottom of the editor. Here's what to look for:

- **Error Line Numbers:** The console message tells you the exact line where the problem was detected. Look for missing semicolons, unmatched braces, or undefined variables
- **Syntax Errors:** These prevent the model from rendering at all (common causes: missing `;`, unclosed `{` or `[`, typos in function names)
- **Warnings (Non-Manifold Geometry):** Your geometry is *technically* valid but has internal inconsistencies that may prevent printing

**Example Console Output:**
```
ERROR: Unexpected token 'sphere' at line 15, column 5
  Expected one of: } ) ]
```
This tells you that line 15 has a syntax issue-likely a missing closing bracket on the previous line.

#### **The 0.001 Offset Strategy (Revisited)**

One of the most common issues with CSG operations is **coincident faces**-when two shapes touch exactly at their boundaries. This creates a non-manifold geometry that slicer tools flag as unprintable.

**The Fix:** Add a tiny offset (0.001 mm or smaller) to move one surface slightly:

```openscad
// BEFORE (problematic):
difference(){
  cube([20, 20, 20], center=true);
  sphere(r=10, $fn=32);
}

// AFTER (fixed):
difference(){
  cube([20, 20, 20], center=true);
  translate([0, 0, 0.001]) sphere(r=10, $fn=32);  // Tiny offset prevents coincident faces
}
```

This 0.001 mm offset is invisible to the human eye but fixes the non-manifold warning and makes the model printable.

#### **Using `$fn` to Balance Speed and Quality**

The `$fn` parameter controls the resolution of curved surfaces (spheres, cylinders, etc.). It represents the number of polygonal faces used to approximate the curve:

- **`$fn = 12`** - Very fast preview, coarse geometry (useful for quick testing)
- **`$fn = 32`** - Good balance for most designs (default for many situations)
- **`$fn = 100+`** - High quality but slow to render; use only for final export

**Debugging Workflow:**
1. During design iteration: Use `$fn = 12` or `$fn = 20` for quick feedback
2. Before export: Increase to `$fn = 32` or higher for final quality
3. For complex assemblies: Keep `$fn` low during iteration to save preview time

#### **Incremental Rendering: The F5/F6 Workflow**

- **F5 (Preview):** Quick render to check overall geometry and catch layout errors
- **F6 (Full Render):** Slower but more accurate; use before export
- **Strategy:** Press F5 frequently while editing to get immediate feedback, then F6 once before exporting

This workflow catches errors early and saves you from spending 10 minutes rendering only to discover a syntax error.

#### **Diagnosing Non-Manifold Geometry**

A model might render in OpenSCAD but still be unprintable. The slicer will report errors like "non-manifold edges" or "holes in surface." Common causes:

1. **Coincident Faces** -> Use small offsets (0.001 mm)
2. **Zero-Thickness Walls** -> Ensure all walls are at least 0.8-1.0 mm
3. **Gaps Between Shapes** -> Check that boolean operations have no small gaps; use `minkowski()` for rounded edges if needed
4. **Inside-Out Geometry** -> A shape might be flipped; use `scale([1, 1, -1])` to flip normals if needed

When your slicer reports non-manifold issues, use the slicer's visualization to locate the problem, then reference the line numbers in your OpenSCAD code and test fixes incrementally using F5/F6.

Checkpoints
- After task 3 the problematic boolean should render without non-manifold warnings[^4].
- After this section, you should be able to interpret at least three common console error messages and apply appropriate fixes.

## Quiz - Lesson 3dMake.2 (10 questions)

1. Name three primitive functions in OpenSCAD[^2].
2. What does `difference()` accomplish[^3]?
3. Why might two coincident faces cause a render failure[^4]?
4. What is the 0.001 rule and why is it useful[^4]?
5. How does lowering `$fn` help during debugging[^3]?
6. True or False: `union()` combines shapes while `intersection()` keeps only overlapping volumes.
7. Describe what Constructive Solid Geometry (CSG) is and give an example of where it's useful.
8. Explain how scale(), translate(), and rotate() transforms change a primitive's behavior.
9. How would you diagnose and fix a non-manifold issue in your model?
10. When validating geometry in a slicer, what specific issues should you look for?

---

## Lesson 2 Assets & Projects

Your Lesson 2 assets are located in the centralized assets folder:

- **Lesson 2 Asset Overview** ([assets/Lessons_3dMake_2/README.md](../../assets/3dMake_Foundation/Lessons_3dMake_2/README.md)) - Folder contents and learning resources
- **Your Second Print Project** ([assets/Lessons_3dMake_2/Your_Second_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_2/Your_Second_Print/)) - Adapt models to real-world needs
- **Bonus Print Project** ([assets/Lessons_3dMake_2/Bonus_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_2/Bonus_Print/)) - Practice resizing and parametric variation

These projects reinforce the boolean operations and CSG concepts you learned in this lesson.

---

## Advanced Example: Rotational and Linear Extrusion

Beyond basic primitives and boolean operations, OpenSCAD provides powerful 2D-to-3D operations. Here are practical examples from real-world designs:

### Example 1: Rotating 2D Shapes with `rotate_extrude()`

The `rotate_extrude()` function spins a 2D profile around the Z-axis, creating axially symmetric objects like vases, bowls, or cones:

```openscad
// Simple Vase - Rotating a 2D profile
$fn = 100;

rotate_extrude(angle = 360, convexity = 4)
{
  translate([20, 0, 0])
  square([8, 50], center=false);
}
```

**What it does:**
- Draws a 2D square 20 units from the center
- Rotates it 360° around the Z-axis
- Creates a hollow cylindrical vase

**Try this variation:**
```openscad
// Vase with a curved profile
$fn = 100;

rotate_extrude(angle = 360, convexity = 4)
{
  // Profile shape: wider at top, narrower at bottom
  polygon([
    [20, 0],      // bottom inner
    [25, 0],      // bottom outer
    [30, 40],     // top outer
    [25, 40]      // top inner
  ]);
}
```

### Example 2: Linear Extrusion with 2D Text

The `linear_extrude()` function pulls a 2D profile vertically (along the Z-axis). Combined with the `text()` function, it creates embossed letters:

```openscad
// Embossed Text - Name Plate
linear_extrude(height = 5, convexity = 10)
{
  text("MAKER", size = 30, font = "Impact:style=Regular",
       halign = "center", valign = "center");
}
```

**What it does:**
- Creates 2D text outline
- Pulls it 5 mm upward
- Creates a 3D embossed nameplate

**Complete nameplate with backing:**
```openscad
// Name plate with base and embossed text
union()
{
  // Base plate
  cube([120, 40, 3], center = true);
  
  // Embossed text
  translate([0, 0, 2])
  linear_extrude(height = 2)
  {
    text("MAKER", size = 24, font = "Impact:style=Regular",
         halign = "center", valign = "center");
  }
}
```

### Example 3: Practical Project - Hook with `rotate_extrude()`

This real-world example creates a wall mount hook by rotating a 2D profile:

```openscad
// Wall Mount Hook
$fn = 100;

difference()
{
  // Outer hook profile - rotated 360°
  rotate_extrude(angle = 360, convexity = 4)
  {
    translate([25, 0, 0])
    square([8, 60], center = false);
  }
  
  // Hollow center
  translate([0, 0, -5])
  cylinder(h = 70, d = 40);
}
```

**Key observations:**
- The 2D square is positioned 25 units from the Z-axis
- Rotating it creates a thick-walled hollow cylinder
- This is used in real products like the birdhouse and PVC hook examples from the *Simplifying 3D Printing* textbook

### Key Concepts for 2D-to-3D Conversion

| Function                      | Purpose                       | Common Use                             |
|-------------------------------|-------------------------------|----------------------------------------|
| `linear_extrude(height)`      | Pull 2D shape vertically      | Text, badges, plaques                  |
| `rotate_extrude(angle)`       | Rotate 2D shape around Z-axis | Vases, bowls, hooks, symmetric parts   |
| `scale()`                     | Stretch/compress along axes   | Tapered cones, proportional variations |
| Combining with `difference()` | Hollow out the extruded shape | Cups, containers, hollow handles       |

**Checkpoint**: After this section, you can:
- Use `linear_extrude()` to create embossed text and flat designs
- Use `rotate_extrude()` to create axially symmetric 3D shapes
- Combine extrusion with boolean operations to hollow or refine shapes

Extension Problems (10)
1. Create a small assembly using `union()` of three primitives and export the STL. Reference best practices from OpenSCAD documentation[^2].
2. Intentionally create a failing boolean and fix it using offsets; explain your approach. Document the manifold issues encountered[^4].
3. Write a short test script that generates three variants with varying `$fn` values and compare render times. Consider using 3dMake workflows[^1].
4. Use `3dm info` (if available) to generate a report on your model and document any recommendations[^1].
5. Explore using a library module (e.g., a fillet helper) to fix a sharp corner and note the difference in final STL[^3].
6. Build a geometry validation toolkit: test all basic transformations (union, difference, intersection) with edge cases and document failure modes.
7. Create a parametric assembly generator that produces 5+ configurations and validates each for printability.
8. Develop a boolean operation troubleshooting guide with visual examples and step-by-step fixes.
9. Design a library module system for common geometric operations (fillets, chamfers, arrays); test reusability across projects.
10. Write an accessibility guide for boolean operations: describe methods for validating geometry non-visually using model properties and slicer feedback.

## Supplemental Resources

For additional examples and practice with 3D primitives and boolean operations, explore these resources:

- **[Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub)** - Comprehensive guide to primitives, boolean operations, and CSG fundamentals
- **[CodeSolutions: 3D Primitives](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/1_3D-Shapes)** - Working examples of cube, sphere, cylinder, and other 3D shapes
- **[CodeSolutions: Combining Shapes](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/AppendixB_OpenSCAD-Visual-Reference)** - Examples of union, difference, intersection, and hull operations
- **[Practice Worksheets: 3D Shapes](https://programmingwithopenscad.github.io/learning.html)** - Visualization and decomposition exercises

[^1]: Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/

[^2]: OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem

[^3]: Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing*. Proceedings of the ACM Symposium on User Interface Software and Technology.

[^4]: Google. (2025). *Vertex AI Gemini 3 Pro Preview: Getting started with generative AI*. https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3  
