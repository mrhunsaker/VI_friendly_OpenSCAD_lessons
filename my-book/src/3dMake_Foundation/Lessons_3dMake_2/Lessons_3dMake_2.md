# Lesson 2: Geometric Primitives and Constructive Solid Geometry 

Estimated time: 60 minutes

**Learning Objectives**
- Use OpenSCAD primitives (`cube()`, `sphere()`, `cylinder()`) and transforms (`translate()`, `rotate()`, `scale()`)[^2]
- Apply CSG operators (`union`, `difference`, `intersection`) safely and diagnose common numerical issues[^3]
- Use quick diagnostic renders and validate geometry in a slicer[^1]

**Materials**
- 3dMake project scaffold with `src/main.scad`
- Example primitive snippets (provided in assets)
- Reference: [openscad-cheat-sheet.md](../../assets/Reference_Materials/openscad-cheat-sheet.md) for syntax quick-reference

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
This tells you that line 15 has a syntax issue—likely a missing closing bracket on the previous line.

#### **The 0.001 Offset Strategy (Revisited)**

One of the most common issues with CSG operations is **coincident faces**—when two shapes touch exactly at their boundaries. This creates a non-manifold geometry that slicer tools flag as unprintable.

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

- **`$fn = 12`** — Very fast preview, coarse geometry (useful for quick testing)
- **`$fn = 32`** — Good balance for most designs (default for many situations)
- **`$fn = 100+`** — High quality but slow to render; use only for final export

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

1. **Coincident Faces** → Use small offsets (0.001 mm)
2. **Zero-Thickness Walls** → Ensure all walls are at least 0.8–1.0 mm
3. **Gaps Between Shapes** → Check that boolean operations have no small gaps; use `minkowski()` for rounded edges if needed
4. **Inside-Out Geometry** → A shape might be flipped; use `scale([1, 1, -1])` to flip normals if needed

When your slicer reports non-manifold issues, use the slicer's visualization to locate the problem, then reference the line numbers in your OpenSCAD code and test fixes incrementally using F5/F6.

Checkpoints
- After task 3 the problematic boolean should render without non-manifold warnings[^4].
- After this section, you should be able to interpret at least three common console error messages and apply appropriate fixes.

## Quiz — Lesson 3dMake.2 (10 questions)

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

- **Lesson 2 Asset Overview** ([assets/Lessons_3dMake_2/README.md](../../assets/3dMake_Foundation/Lessons_3dMake_2/README.md)) — Folder contents and learning resources
- **Your Second Print Project** ([assets/Lessons_3dMake_2/Your_Second_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_2/Your_Second_Print/)) — Adapt models to real-world needs
- **Bonus Print Project** ([assets/Lessons_3dMake_2/Bonus_Print/](../../assets/3dMake_Foundation/Lessons_3dMake_2/Bonus_Print/)) — Practice resizing and parametric variation

These projects reinforce the boolean operations and CSG concepts you learned in this lesson.

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

- **[Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub)** — Comprehensive guide to primitives, boolean operations, and CSG fundamentals
- **[CodeSolutions: 3D Primitives](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/1_3D-Shapes)** — Working examples of cube, sphere, cylinder, and other 3D shapes
- **[CodeSolutions: Combining Shapes](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/AppendixB_OpenSCAD-Visual-Reference)** — Examples of union, difference, intersection, and hull operations
- **[Practice Worksheets: 3D Shapes](https://programmingwithopenscad.github.io/learning.html)** — Visualization and decomposition exercises

[^1]: Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/

[^2]: OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem

[^3]: Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing*. Proceedings of the ACM Symposium on User Interface Software and Technology.

[^4]: Google. (2025). *Vertex AI Gemini 3 Pro Preview: Getting started with generative AI*. https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3  
