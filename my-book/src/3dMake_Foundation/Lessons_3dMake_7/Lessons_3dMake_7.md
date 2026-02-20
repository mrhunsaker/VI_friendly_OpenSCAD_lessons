# Lesson 7: Parametric Transforms and the Phone Stand Project

Estimated time: 75–90 minutes

**Learning Objectives**

- Use parametric transforms (`rotate()`, `translate()`, `scale()`) to position and orient sub-assemblies[^1]
- Apply the Minkowski operation as a method for creating filleted edges[^2]
- Create multi-part assemblies where each component serves a distinct structural function[^3]
- Test and validate parametric variations before printing[^1]

**Materials**

- 3dMake project scaffold with `src/main.scad`
- Access to a printer or slicing software
- Measuring tools (calipers) for post-print validation

**Related Project**: Study [phone_stand.scad](../../assets/3dMake_Foundation/Lessons_3dMake_7/phone_stand.scad) for an advanced example combining multiple transforms and Minkowski operations in a real-world assembly.

---

## Understanding Parametric Transforms

Transforms are the foundation of positioning objects in 3D space. Unlike drag-and-drop interfaces, OpenSCAD requires you to explicitly specify every position and rotation. This precision is what enables parametric design—once defined mathematically, a model can be infinitely reconfigured.

### Core Transform Operations

| Operation | Syntax | Example |
| ----------- | -------- | --------- |
| **Translate** (move) | `translate([x, y, z]) { ... }` | `translate([10, 0, 0]) cube([5, 5, 5]);` |
| **Rotate** | `rotate([x_deg, y_deg, z_deg]) { ... }` | `rotate([45, 0, 0]) cube([5, 5, 5]);` |
| **Scale** | `scale([x, y, z]) { ... }` | `scale([2, 1, 1]) cube([5, 5, 5]);` |
| **Minkowski** (fillets/rounding) | `minkowski() { shape; fillet; }` | `minkowski(){ cube([10,10,10]); cylinder(r=2, h=0.01); }` |

### Translating Objects: Moving in 3D Space

`translate([x, y, z])` moves an object in three-dimensional space. The key insight is that you specify the movement *before* creating or referencing the object:

```openscad
// Move a cube 30 mm to the right
translate([30, 0, 0]) cube([20, 20, 20]);

// Move it up by 10 mm
translate([0, 0, 10]) cube([20, 20, 20]);

// Move it diagonally (right and forward)
translate([30, 20, 0]) cube([20, 20, 20]);
```

**A critical concept:** When you use `translate()`, OpenSCAD moves the *coordinate system*, not just the object. The object is then created in the new coordinate system. This means:

```openscad
// These are functionally equivalent:
translate([10, 0, 0]) cube([20, 20, 20]);

cube([20, 20, 20]);
translate([10, 0, 0]) cube([20, 20, 20]);  // Second cube shifted right
```

For multi-part assemblies, you typically nest `translate()` calls within modules:

```openscad
module phone_stand() {
  // Base stays at origin
  base();
  
  // Back support is translated up and back
  translate([0, -30, base_thickness])
    rotate([65, 0, 0])
      back_support();
}
```

### Rotating Objects: Orientation Around Axes

`rotate([x_deg, y_deg, z_deg])` rotates an object around the X, Y, and Z axes (in degrees):

```openscad
// Rotate 45° around X axis (tilts forward/back)
rotate([45, 0, 0]) cube([10, 10, 10]);

// Rotate 90° around Y axis (rotates left/right)
rotate([0, 90, 0]) cube([10, 10, 10]);

// Rotate 45° around Z axis (spins in place)
rotate([0, 0, 45]) cube([10, 10, 10]);

// Rotate around all three axes
rotate([45, 30, 15]) cube([10, 10, 10]);
```

**Order matters:** When you specify multiple rotations, they are applied in sequence (X, then Y, then Z). This can produce unexpected results:

```openscad
// These produce different final orientations:
rotate([45, 90, 0]) cube([10, 10, 10]);
rotate([90, 45, 0]) cube([10, 10, 10]);
```

### Combining Transforms: The Order of Operations

You can nest transforms to build complex positions. Remember: OpenSCAD applies transforms from the inside out:

```openscad
// Example: Position a cylinder so it sticks up from the back of a base

// Step 1: Create a cylinder at the origin
cylinder(r=5, h=20, $fn=32);

// Step 2: Translate it to the right spot
translate([0, 0, base_thickness])
  cylinder(r=5, h=20, $fn=32);

// Step 3: In a module, combine positioning
module mounting_peg() {
  translate([base_width/2, base_depth - 10, base_thickness])
    cylinder(r=5, h=20, $fn=32);
}

// Inside a phone_stand() assembly:
mounting_peg();
```

### Practical Tip: Coordinate System Visualization

When working with complex assemblies, it helps to visualize the coordinate system:

```openscad
// Small axes indicator (add to your design temporarily for debugging):
module axes() {
  color("red") cube([20, 1, 1]);     // X axis (red)
  color("green") cube([1, 20, 1]);   // Y axis (green)
  color("blue") cube([1, 1, 20]);    // Z axis (blue)
}

// Place it at key points to verify positioning:
axes();
translate([100, 0, 0]) axes();  // Check alignment at offset
```

---

## Step-by-step Tasks

### Task 1: Build a Simple Phone Stand Base

Create a parametric base plate that can be adjusted for different phone weights and sizes:

```openscad
// Phone Stand - Base Component
// Adjustable platform for holding phones and tablets

// === TOP-LEVEL PARAMETERS (customize these) ===
base_width = 70;    // mm - front-to-back width
base_depth = 90;    // mm - side-to-side depth
base_thickness = 4; // mm - thickness of base

angle = 65;         // degrees - tilt angle
lip_height = 12;    // mm - height of friction lip
fillet_r = 6;       // mm - edge rounding radius

// === MODULES ===

// Simple rectangular plate
module plate(w, d, t) {
  cube([w, d, t], center=false);
}

// Fillet edges using Minkowski sum (approximation)
module filleted_plate(w, d, t, r) {
  minkowski() {
    plate(w, d, t);
    cylinder(h=0.01, r=r, $fn=40);
  }
}

// Base of the stand
module base() {
  translate([0, 0, 0])
    filleted_plate(base_width, base_depth, base_thickness, fillet_r);
}

// Back support angled for viewing
module back() {
  // Rotate the plate to create the angle
  rotate([angle, 0, 0])
    filleted_plate(base_width, base_depth, base_thickness, fillet_r);
}

// Friction lip to prevent phone from sliding
module lip() {
  translate([0, base_depth - 8, base_thickness])
    cube([base_width, 8, lip_height], center=false);
}

// === ASSEMBLE ===
union() {
  base();
  back();
  lip();
}
```

### Task 2: Test Parameter Variations

Save your file and test each variant by modifying the parameters and running `3dm build`:

```bash
# Build the base version
3dm build

# Then try modifying angle in main.scad and rebuild
# angle = 45;  // Shallow angle for viewing documents
# 3dm build

# Or try a steep angle for portrait viewing
# angle = 75;  // Steep for reading
# 3dm build
```

Document the impact:

| Parameter | Value | Use Case | Print Time |
|-----------|-------|----------|-----------|
| `angle` | 45° | Shallow viewing (documents, web browsing) | ~1.5 hrs |
| `angle` | 65° | Comfortable video watching | ~1.5 hrs |
| `angle` | 75° | Steep vertical viewing | ~1.5 hrs |

### Task 3: Run `3dm orient` to Optimize Orientation

```bash
3dm orient src/main.scad
```

This command analyzes your model and suggests:
- **Optimal rotation** for minimal support material
- **Estimated support volume** that will need to be removed
- **Print time savings** from better orientation

### Task 4: Generate Variants for Different Devices

Modify your main.scad to create three configurations (tablet, phone, document holder):

```openscad
// At the bottom of main.scad, uncomment one configuration:

// Configuration 1: Phone (narrow, shallow angle)
// base_width = 60;
// angle = 55;

// Configuration 2: Tablet (wide, moderate angle)
base_width = 120;
angle = 40;

// Configuration 3: Document (wide, steep angle)
// base_width = 200;
// angle = 20;
```

### Task 5: Validate and Document

After printing (or slicing), record:
- **Actual dimensions** (measure with calipers)
- **Angle accuracy** (verify tilt angle with protractor or phone measurement app)
- **Friction resistance** (does phone stay in place?)
- **Print quality** (note any support marks, layer quality)

---

## Advanced: Adding Snap-Fit Connectors

To join the base and back without fasteners, you can add interlocking features:

```openscad
// Optional: Add snap-fit connectors

// Slot in base plate (where back plate slides in)
module base_slot() {
  slot_width = base_thickness + 0.5;  // Slight clearance
  slot_depth = 20;
  translate([base_width/2 - slot_width/2, 0, base_thickness])
    cube([slot_width, slot_depth, lip_height]);
}

// Tab on back plate (fits into base slot)
module back_tab() {
  tab_width = base_thickness;
  tab_height = lip_height;
  translate([base_width/2 - tab_width/2, 0, 0])
    cube([tab_width, 20, tab_height]);
}
```

---

## Checkpoint

- After task 1, you have a working 3-part stand (base, back, lip)
- After task 2, you've tested at least 2 parameter variations
- After task 4, you have 3 different configurations ready to print

---

## Quiz — Lesson 3dMake.7 (10 questions)

1. What does the `rotate()` function do, and how does it differ from physical rotation[^1]?
2. Why is parametric positioning important for design iteration[^1]?
3. Explain the Minkowski sum operation and why it's useful for filleting[^2].
4. How would you position a second component relative to the first using `translate()`[^1]?
5. What parameter would you change to make a phone stand suitable for tablets[^3]?
6. True or False: You can rotate an object around multiple axes in a single `rotate()` call.
7. Describe how `$fn` affects the appearance of rounded edges created by Minkowski[^2].
8. What advantage does parametric design have over manually modeling each variant[^1]?
9. How would you verify that your stand's angle matches your design intent after printing[^3]?
10. What design considerations should you account for when adding a lip to prevent phone slippage[^3]?

## Extension Problems (10)

1. Create five stand variants (for phones, tablets, documents, laptops, and books) by parameterizing width, angle, and lip height[^3].
2. Add parametric feet (small cylinders) to the base to improve stability; test with and without feet[^1].
3. Use `3dm describe` to document each variant's key geometric properties[^1].
4. Design and test a snap-fit connector system that joins the base and back without fasteners[^3].
5. Create a comparison table showing print time, material weight, and assembly complexity for each variant[^3].
6. Build a complete phone stand product family: define naming convention, parameter ranges, and assembly instructions.
7. Develop a stress analysis guide: identify high-stress areas in your stand and propose reinforcement strategies.
8. Create a customization guide for end users: how to modify angle, width, and lip height for different devices.
9. Design an accessibility-focused stand: include tactile angle markers and clear, non-visual assembly instructions.
10. Write a comprehensive stand design documentation: CAD parameters, material recommendations, print settings, assembly, troubleshooting, and accessible design notes.

---

**References**

[^1]: OpenSCAD Manual - Transformations - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations
[^2]: OpenSCAD Manual - Minkowski - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski
[^3]: 3DMake GitHub - Phone Stand Example - https://github.com/tdeck/3dmake/blob/main/docs/examples.md
