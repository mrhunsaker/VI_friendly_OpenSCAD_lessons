# Lesson 3: Parametric Architecture and Modular Libraries 

Estimated time: 60 minutes

**Learning Objectives**
- Define and document top-level parameters and use them to drive model variants[^3]
- Create reusable modules and import a library module into a project[^2]
- Produce and test low-resolution renders and export a working STL[^1]

**Materials**
- A 3dMake project scaffold with `src/main.scad`
- Example library (e.g., BOSL) available in `lib/` or classroom assets
- Reference: [openscad-cheat-sheet.md](../../assets/Reference_Materials/openscad-cheat-sheet.md) for parametric design patterns

---
1. Open `src/main.scad` and add three top-level parameters (with units) at the top of the file[^3].

   ```openscad
   // Top-level parameters - customize these
   part_width = 50;    // mm
   part_height = 40;   // mm
   part_thickness = 5; // mm
   ```

2. Implement a simple `module bracket(width, height, thickness)` that composes primitives and boolean operations[^2].

   ```openscad
   // Simple bracket module - combines primitives with CSG
   module bracket(w, h, t) {
     union(){
       // Base plate
       cube([w, h, t], center=false);
       
       // Vertical support
       translate([0, h-5, 0])
         cube([t, 5, 20], center=false);
     }
   }
   
   // Use the module
   bracket(part_width, part_height, part_thickness);
   ```

3. Include a library module (e.g., `include <bosl/constants.scad>`) and call a small helper from it; run `3dm build`[^2].

   **Alternative: Create your own simple library module:**
   ```openscad
   // Create lib/helpers.scad
   module simple_fillet(size, radius) {
     // Simple fillet using minkowski
     minkowski(){
       children();
       cylinder(h=0.01, r=radius, $fn=16);
     }
   }
   ```

   **Then in main.scad:**
   ```openscad
   include <lib/helpers.scad>
   
   simple_fillet(20, 2){
     cube([20, 20, 20]);
   }
   ```

4. Produce a low-resolution render to confirm topology, then export an STL and inspect it in a slicer[^4].
   - Use `$fn=12` or lower during development to speed up renders
   - Once satisfied, increase to `$fn=32` or `$fn=64` for final prints

5. Refactor the module into `lib/` with a short README and a usage example[^3].

### Going Deeper: Parametric Design and Modular Thinking

Now that you've created simple modules, let's explore *why* they matter for design at scale.

#### **What Is Parametric Design?**

**Parametric design** means building your model around adjustable parameters so that a single change propagates automatically throughout your entire design. Instead of hardcoding a dimension like `50`, you store it in a variable:

```openscad
// Non-parametric (fragile):
cube([50, 50, 50]);
translate([50, 0, 0]) cube([50, 50, 50]);
translate([100, 0, 0]) cube([50, 50, 50]);

// Parametric (flexible):
box_size = 50;
cube([box_size, box_size, box_size]);
translate([box_size, 0, 0]) cube([box_size, box_size, box_size]);
translate([2*box_size, 0, 0]) cube([box_size, box_size, box_size]);
```

If you need to change the box size from 50 to 60 mm, the parametric version requires one change; the non-parametric version requires three edits.

#### **Modules with Default Parameters**

A module becomes even more powerful when you define **default parameters**:

```openscad
// Define a module with defaults
module storage_box(length = 40, width = 30, height = 20, wall = 2) {
    difference() {
        // Outer shell
        cube([length, width, height]);
        
        // Inner hollow (remove inside, keep walls and bottom)
        translate([wall, wall, wall])
            cube([length - 2*wall, width - 2*wall, height]);
    }
}

// Call with defaults
storage_box();

// Call with one parameter changed
storage_box(length = 60);

// Call with all custom parameters
storage_box(length = 80, width = 50, height = 30, wall = 3);
```

This approach creates a small, medium, and large box set:

```openscad
// Small box (all defaults)
storage_box();

// Medium box (positioned next to small)
translate([45, 0, 0]) storage_box(length = 50, width = 40, height = 25);

// Large box (positioned next to medium)
translate([100, 0, 0]) storage_box(length = 70, width = 55, height = 35);
```

#### **The DRY Principle: Don't Repeat Yourself**

When you copy-paste the same shape over and over, you create maintenance risk. If you later discover a bug in the shape, you must fix it in *every* copy. Modules eliminate this:

**Without modules (DRY violation):**
```openscad
// Bracket repeated 3 times (copy-paste)
union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
translate([50, 0, 0]) union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
translate([100, 0, 0]) union(){ cube([10,10,10]); translate([0,20,0]) cube([2,30,10]); }
```

**With modules (DRY compliant):**
```openscad
module bracket() {
    union(){
        cube([10,10,10]);
        translate([0,20,0]) cube([2,30,10]);
    }
}

bracket();
translate([50, 0, 0]) bracket();
translate([100, 0, 0]) bracket();
```

#### **Scope and Reusability**

Parameters are **scoped** to their module, meaning you can't access a module's parameters from outside it. This is intentional—it prevents naming conflicts and makes modules truly reusable:

```openscad
module box(size = 10) {
    cube([size, size, size]);
}

// You can use 'size' in multiple contexts without conflict
size = 100;  // Global size
box();       // Calls box with its default size=10
translate([size, 0, 0]) box(size = 50);  // Calls box with size=50
```

#### **Importing Libraries: `include` vs `use`**

Once you've written modules in `lib/helpers.scad`, you can share them with other projects:

```openscad
// Option 1: include (gives you all functions and modules)
include <lib/helpers.scad>

// Option 2: use (brings in functions but hides module definitions)
use <lib/helpers.scad>

// Now you can call any module from helpers.scad
simple_fillet(20, 2) {
    cube([20, 20, 20]);
}
```

For most classroom use, `include` is simpler to understand. For larger projects, `use` provides cleaner namespace isolation.

#### **Testing Your Modules**

Before committing a module to your library, test it with:

1. **Different parameter values:** Call the module with minimum, maximum, and mid-range values
2. **Default values:** Verify that calling it with no parameters produces a reasonable result
3. **Rendered output:** Use `$fn = 32` to render the module and visually inspect for geometry issues
4. **STL export:** Export to STL and open in your slicer to check for non-manifold warnings

Checkpoints
- After step 2 you have a parametric module you can call with different arguments[^3].
- After this section, you should understand how to create modules with default parameters and why that matters for reusability.

## Quiz — Lesson 3dMake.3 (10 questions)

1. What is a parametric module and why is it useful[^3]?
2. How do you include an external library in OpenSCAD[^2]?
3. What is one advantage of moving code into `lib/`[^3]?
4. How can you test a module quickly without a full high-resolution render[^4]?
5. Name one safety or documentation step to include when producing a reusable module[^3].
6. True or False: Parametric modules can only accept one parameter.
7. Describe what "Don't Repeat Yourself" (DRY) means in the context of 3D model code.
8. Explain how you would create a module with three parameters and use it in your main file.
9. What testing strategies should you use to validate a new module before using it in production prints?
10. How would you document a reusable module so that future users (including yourself) understand its parameters and limitations?

Extension Problems (10)
1. Create a module for a mounting bracket with parameters for hole size and spacing; publish a usage example[^3].
2. Use a library module to add a fillet and compare the final STL before and after[^2].
3. Produce three variants by changing a parameter and record estimated print times[^3].
4. Move a working module into `lib/` and commit with a clear commit message[^1].
5. Write a short README for your module describing parameter ranges and expected units[^3].
6. Build a complete module library with 5+ reusable parts; create comprehensive documentation and usage examples for each.
7. Design a module versioning and compatibility system; document how to manage parameter changes over time.
8. Create a module testing suite: write validation tests for parameter ranges, edge cases, and output consistency.
9. Develop an accessibility guide for module parameters: explain how to use and understand module options without visual feedback.
10. Write a module library contribution guide: standards for code style, documentation, testing, and review for collaborative development.

## Supplemental Resources

For deeper exploration of parametric design and module creation, explore these resources:

- **[Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub)** — Comprehensive guide to modules, parametric design, and library creation
- **[CodeSolutions: Modules](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/5_Modules)** — Working examples of module definition, parameter passing, and reusable components
- **[BOSL2 Library](https://github.com/BelfrySCAD/BOSL2)** — Professional OpenSCAD library with hundreds of reusable modules for common operations

[^1]: 3DMake GitHub - https://github.com/tdeck/3dmake

[^2]: BOSL - OpenSCAD Standard Library - https://github.com/BelfrySCAD/BOSL2

[^3]: OpenSCAD Modules - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Modules

[^4]: OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, https://learn.cadhub.xyz/blog/openscad-review/  
