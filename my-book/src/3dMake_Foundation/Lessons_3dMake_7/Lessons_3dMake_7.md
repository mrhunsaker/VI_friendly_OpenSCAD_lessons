# Lesson 7: Parametric Transforms and the Phone Stand Project

Estimated time: 105-135 minutes

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

Transforms are the foundation of positioning objects in 3D space. Unlike drag-and-drop interfaces, OpenSCAD requires you to explicitly specify every position and rotation. This precision is what enables parametric design-once defined mathematically, a model can be infinitely reconfigured.

### Core Transform Operations

| Operation                        | Syntax                                  | Example                                                   |
|----------------------------------|-----------------------------------------|-----------------------------------------------------------|
| **Translate** (move)             | `translate([x, y, z]) { ... }`          | `translate([10, 0, 0]) cube([5, 5, 5]);`                  |
| **Rotate**                       | `rotate([x_deg, y_deg, z_deg]) { ... }` | `rotate([45, 0, 0]) cube([5, 5, 5]);`                     |
| **Scale**                        | `scale([x, y, z]) { ... }`              | `scale([2, 1, 1]) cube([5, 5, 5]);`                       |
| **Minkowski** (fillets/rounding) | `minkowski() { shape; fillet; }`        | `minkowski(){ cube([10,10,10]); cylinder(r=2, h=0.01); }` |

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
// Rotate 45 around X axis (tilts forward/back)
rotate([45, 0, 0]) cube([10, 10, 10]);

// Rotate 90 around Y axis (rotates left/right)
rotate([0, 90, 0]) cube([10, 10, 10]);

// Rotate 45 around Z axis (spins in place)
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

| Parameter | Value | Use Case                                  | Print Time |
|-----------|-------|-------------------------------------------|------------|
| `angle`   | 45    | Shallow viewing (documents, web browsing) | ~1.5 hrs   |
| `angle`   | 65    | Comfortable video watching                | ~1.5 hrs   |
| `angle`   | 75    | Steep vertical viewing                    | ~1.5 hrs   |

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

## Mathematical Functions for Advanced Parametric Design

Beyond translate and rotate, OpenSCAD includes mathematical functions for calculating positions, angles, and dimensions. These enable designs that respond dynamically to parameters.

### Trigonometric Functions: sin(), cos(), atan2()

Trigonometric functions calculate angles and positions in circular patterns. Essential for gears, spirals, and polar arrangements:

```openscad
// Place objects in circular pattern using sin/cos
module circular_array(radius, count) {
  for (i = [0:count-1]) {
    angle = (360 / count) * i;
    x = radius * cos(angle);
    y = radius * sin(angle);
    translate([x, y, 0])
      children();
  }
}

// Create circular array of 8 cylinders
circular_array(30, 8)
  cylinder(h=10, r=3);

// Spiral staircase using sin/cos
module spiral_staircase(radius, height, steps) {
  step_height = height / steps;
  step_angle = 360 / steps;
  
  for (i = [0:steps-1]) {
    angle = i * step_angle;
    z = i * step_height;
    x = radius * cos(angle);
    y = radius * sin(angle);
    
    translate([x, y, z])
      cube([20, 5, step_height]);
  }
}

spiral_staircase(40, 100, 20);
```

**Practical Example: Gear Tooth Positioning**

```openscad
// Simple gear using sin/cos for tooth placement
module simple_gear(radius, teeth_count, tooth_depth) {
  tooth_angle = 360 / teeth_count;
  
  difference() {
    // Main gear body
    cylinder(r=radius, h=5, $fn=128);
    
    // Center hole
    cylinder(r=radius*0.3, h=10);
  }
  
  // Add teeth using circular pattern
  for (i = [0:teeth_count-1]) {
    angle = i * tooth_angle;
    x = (radius + tooth_depth) * cos(angle);
    y = (radius + tooth_depth) * sin(angle);
    z = 5/2;
    
    translate([x, y, z])
      cube([5, 5, 5], center=true);
  }
}

simple_gear(30, 12, 5);  // 30mm radius, 12 teeth, 5mm deep
```

### Rounding Functions: round(), floor(), ceil()

Control precision and create integer-based parametric designs:

```openscad
// round(): Nearest integer
echo(round(3.7));    // Prints: 4
echo(round(3.2));    // Prints: 3

// floor(): Round down
echo(floor(3.9));    // Prints: 3

// ceil(): Round up
echo(ceil(3.1));     // Prints: 4

// Practical use: Ensure grid alignment
grid_spacing = 7.3;
aligned_spacing = round(grid_spacing);  // 7
```

**Practical Example: Grid-Aligned Mounting Pattern**

```openscad
// Create mounting pattern aligned to 5mm grid
module grid_mounting_pattern(width, height, pattern_spacing) {
  // Round spacing to nearest 5mm for printability
  aligned_spacing = round(pattern_spacing / 5) * 5;
  
  // Calculate how many holes fit
  holes_x = floor(width / aligned_spacing);
  holes_y = floor(height / aligned_spacing);
  
  echo(str("Creating grid: ", holes_x, " x ", holes_y, " at ", aligned_spacing, "mm spacing"));
  
  for (x = [0:holes_x-1])
    for (y = [0:holes_y-1])
      translate([x * aligned_spacing, y * aligned_spacing, -5])
        cylinder(h=15, d=3, $fn=16);
}

// Create pattern in 100x80mm area
grid_mounting_pattern(100, 80, 7.3);
```

### Power and Root Functions: pow(), sqrt()

Calculate exponential relationships and distances:

```openscad
// pow(): Raise to power
echo(pow(2, 3));     // 2^3 = 8
echo(pow(10, 2));    // 10^2 = 100

// sqrt(): Square root
echo(sqrt(9));       // 3
echo(sqrt(2));       // 1.41421...

// Practical: Calculate distance between two points
function distance_2d(p1, p2) =
  sqrt(pow(p2[0] - p1[0], 2) + pow(p2[1] - p1[1], 2));

// Distance from [0, 0] to [3, 4] is 5
d = distance_2d([0, 0], [3, 4]);
echo(d);  // Prints: 5
```

**Practical Example: Parametric Phone Stand Angle Calculation**

```openscad
// Calculate stand geometry based on phone height and desired viewing distance
module calculated_stand(phone_width, phone_height, viewing_distance) {
  // Calculate required back angle for ergonomic viewing
  required_angle = atan(phone_height / viewing_distance);
  
  // Calculate back support length needed
  base_length = phone_width + 20;  // 20mm margin
  back_length = sqrt(pow(base_length, 2) + pow(phone_height + 30, 2));
  
  echo(str("Calculated angle: ", required_angle, " degrees"));
  echo(str("Back support length: ", back_length, " mm"));
  
  // Create stand with calculated dimensions
  union() {
    // Base
    cube([base_length, 80, 4]);
    
    // Back support at calculated angle
    translate([0, -30, 4])
      rotate([required_angle, 0, 0])
        cube([base_length, 10, 4]);
  }
}

calculated_stand(75, 160, 300);  // 75mm phone, 160mm tall, 300mm viewing distance
```

### Vector Math: cross(), dot(), norm()

Advanced positional calculations for complex assemblies:

```openscad
// dot(): Dot product (measure alignment)
// cross(): Cross product (calculate perpendicular)
// norm(): Vector magnitude (length)

// Example: Align two objects perpendicular
function perpendicular_vector(v) =
  cross(v, [0, 0, 1]);  // Perpendicular to v in Z plane

// Practical: Create perpendicular support bar
v1 = [1, 0, 0];  // Forward direction
v_perp = perpendicular_vector(v1);
// v_perp is now [0, 1, 0] (sideways)
```

**Practical Example: Dynamic Fixture Positioning**

```openscad
// Position fixtures based on desired alignment direction
module fixture_on_surface(surface_direction, offset_distance) {
  // Ensure surface_direction is normalized
  normal = surface_direction / sqrt(pow(surface_direction[0], 2) + 
                                   pow(surface_direction[1], 2) + 
                                   pow(surface_direction[2], 2));
  
  // Position fixture along surface normal
  translate([normal[0] * offset_distance, 
             normal[1] * offset_distance, 
             normal[2] * offset_distance])
    cube([10, 10, 10]);
}

// Mount fixture 20mm away from surface
fixture_on_surface([1, 0, 0], 20);
```

### Practical Application: Parametric Spiral Design

Here's a complete example combining multiple math functions:

```openscad
// Create a parametric spiral using sin/cos and sqrt
module spiral_generator(max_radius, height, spiral_tightness) {
  steps = 200;
  
  for (i = [0:steps-1]) {
    // Calculate angle and radius for spiral point
    angle = (i / steps) * spiral_tightness * 360;
    t = i / steps;  // Normalized 0-1
    r = max_radius * t;  // Radius increases with height
    
    // Calculate position using trigonometry
    x = r * cos(angle);
    y = r * sin(angle);
    z = (t * height);
    
    // Place sphere at calculated position
    translate([x, y, z])
      sphere(r=2, $fn=16);
  }
}

spiral_generator(30, 50, 3);  // 30mm radius, 50mm tall, 3 complete revolutions
```

---

## Quiz - Lesson 3dMake.7 (10 questions)

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

## Starter Code

Use this parametric phone stand as your starting point:

```openscad
// Parametric Phone Stand - Intermediate Example
// Parameters
thickness = 4;        // mm
width = 70;           // mm
depth = 90;           // mm
angle = 65;           // degrees
lipheight = 12;       // mm
filletr = 6;          // mm (mock fillet by minkowski)

module plate(w, d, t){
  cube([w, d, t], center=false);
}

module fillet(shape, r){
  minkowski(){
    children();
    cylinder(h=0.01, r=r, $fn=40);
  }
}

// Back plate
module back(){
  rotate([angle,0,0])
    fillet(){ plate(width, depth, thickness); }
}

// Base
module base(){
  translate([0,0,0])
    fillet(){ plate(width, depth, thickness); }
}

// Lip
module lip(){
  translate([0, depth-8, thickness])
    cube([width, 8, lipheight], center=false);
}

union(){
  base();
  back();
  lip();
}
```

---

**References**

[^1]: OpenSCAD Manual - Transformations - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations
[^2]: OpenSCAD Manual - Minkowski - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski
[^3]: 3DMake GitHub - Phone Stand Example - https://github.com/tdeck/3dmake/blob/main/docs/examples.md
