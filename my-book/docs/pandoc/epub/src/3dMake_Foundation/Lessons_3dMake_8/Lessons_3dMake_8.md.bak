# Lesson 8: Advanced Parametric Design and Interlocking Features {#3dmake_foundation_lessons_3dmake_8-lessons_3dmake_8}

Estimated time: 120-150 minutes

Learning Objectives

- Design parametric walls with precise clearances for stackable assemblies[^1]
- Create interlocking features (rims, tabs, snap-fits) for assembly without fasteners[^2]
- Apply chamfers for edge finishing and print quality[^3]
- Manage tolerance stack-up in complex parametric designs[^1]

Materials

- 3dMake project scaffold with `src/main.scad`
- Calipers for measuring clearances and wall thickness
- Printer for test prints (recommended for validation)

Related Project: Work through [stackable_bins.scad](../../assets/3dMake_Foundation/Lessons_3dMake_8/stackable_bins.scad) to apply tolerance design in a multi-part assembly with interlocking features.

## Understanding Tolerance and Clearance

In 3D printing, tolerance refers to the acceptable variation in printed dimensions. When designing parts that must fit together, you must account for:

- Printer accuracy (~0.1-0.3 mm typical)
- Material shrinkage (PLA: ~0.3-0.5%)
- Cumulative tolerance when multiple parts fit together

For stackable bins with interlocking rims:

```
bin_outer = 80 mm
rim_clearance = 0.6 mm  (small space between stack and rim below)
rim_inner = bin_outer - 2*wall - 2*rim_clearance
```

## Step-by-step Tasks

### Task 1: Design a Parametric Stackable Bin

Create a storage bin with walls, a removable lid, and interlocking features:

```openscad
// Stackable Storage Bin - Advanced Parametric Design
// Features: walls, interlocking rim, chamfered edges, optional dividers
// === PARAMETERS ===
bin_w = 80;         // mm - width
bin_d = 120;        // mm - depth
bin_h = 60;         // mm - height
wall = 2;           // mm - wall thickness (structural)
rim = 3;            // mm - interlock rim height
chamfer = 2;        // mm - edge chamfer
stack_clear = 0.6;  // mm - clearance between stacking parts
// Derived parameters
inner_w = bin_w - 2*wall;
inner_d = bin_d - 2*wall;
rim_inner_w = bin_w - 2*(wall + stack_clear);
rim_inner_d = bin_d - 2*(wall + stack_clear);
// === MODULES ===
// Outer shell of the bin
module outer_shell() {
  cube([bin_w, bin_d, bin_h]);
}
// Inner cavity (creates walls by subtracting)
module inner_cavity() {
  translate([wall, wall, wall])
    cube([inner_w, inner_d, bin_h - wall]);
}
// Main bin body (hollow box)
module body() {
  difference() {
    outer_shell();
    inner_cavity();
  }
}
// Outer rim (sits on top of bin, inside rim of bin below)
module rim_outer() {
  translate([0, 0, bin_h])
    cube([bin_w, bin_d, rim]);
}
// Inner rim cutout (where the bin below's rim sits)
module rim_inner() {
  translate([wall + stack_clear, wall + stack_clear, bin_h])
    cube([rim_inner_w, rim_inner_d, rim]);
}
// Rim assembly (outer + inner cutout)
module rim_assembly() {
  difference() {
    rim_outer();
    rim_inner();
  }
}
// Chamfer edges for better print quality
module chamfered_edges() {
  difference() {
    children();
    // Top edge chamfer
    translate([-1, -1, bin_h - chamfer])
      cube([bin_w + 2, bin_d + 2, chamfer + 1]);
  }
}
// === ASSEMBLE ===
union() {
  chamfered_edges() {
    body();
  }
  rim_assembly();
}
```

### Task 2: Test Stackability

After printing the first bin:

1. Print a second identical bin
2. Stack one on top of the other and verify:
   - Does the rim insert smoothly into the rim below?
   - Can you stack 3 bins without binding?
   - Does the stack remain stable without tipping?

Document:
- Any friction or resistance (good for stability)
- Gaps or looseness (adjust `stack_clear` if needed)

### Task 3: Design Variants for Different Storage Needs

Create three different bin sizes using the same parametric code:

```openscad
// Small bin (desk organization)
bin_w = 60;
bin_d = 80;
bin_h = 40;
// OR
// Medium bin (general storage)
// bin_w = 80;
// bin_d = 120;
// bin_h = 60;
// OR
// Large bin (bulk storage)
// bin_w = 120;
// bin_d = 160;
// bin_h = 80;
```

### Task 4: Add Optional Internal Dividers

Enhance the design with parametric dividers:

```openscad
// Optional: Parametric dividers
num_dividers = 2;        // Number of internal compartments
divider_thickness = 1.5; // mm
module dividers() {
  for (i = [1 : num_dividers]) {
    y_pos = wall + (i * inner_d / (num_dividers + 1));
    translate([wall, y_pos, wall])
      cube([inner_w, divider_thickness, bin_h - 2*wall]);
  }
}
// Add to union:
// dividers();
```

### Task 5: Document Tolerance Sensitivity

Create a testing matrix to understand how variations affect fit:

```
Test Configuration Matrix:
========================================
Config | stack_clear | wall | Result
========================================
A      | 0.4 mm      | 2.0  | Tight - hard to stack
B      | 0.6 mm      | 2.0  | Ideal - smooth fit
C      | 0.8 mm      | 2.0  | Loose - unstable
D      | 0.6 mm      | 2.5  | Better - stronger walls
========================================
```

After printing and testing, record observations about fit quality.

## Advanced Topics: Snap-Fit Connectors and Multi-Part Assemblies

As you progress beyond simple stacking, you may want to create assemblies where parts connect without fasteners. This section covers snap-fit and interlocking designs.

### Designing Snap-Fit Clips

A snap-fit clip works by:
1. Creating a flexible arm that bends outward to release
2. Providing a catch (usually a small notch or undercut) that locks into place
3. Balancing flexibility (easy to insert/remove) with durability (survives many cycles)

Here's a simple snap-fit connector:

```openscad
// Simple snap-fit clip for connecting parts
module snap_fit_base() {
  // Main mounting block
  cube([20, 40, 15]);
}
module snap_fit_arm(thickness = 1.5, deflection = 0.5) {
  // Flexible arm that bends to insert/release
  // thickness: how thick the arm is (0.8-2.0 mm typical)
  // deflection: how far it must bend to insert (0.3-1.0 mm typical)
  translate([0, 0, 15]) {
    // Thin vertical arm
    cube([thickness, 35, 12]);
    // Catch hook (small bump on end)
    translate([-1, 30, 10])
      cube([3, 5, 2]);  // Notch for mating part to lock onto
  }
}
// Test the snap-fit assembly
union() {
  snap_fit_base();
  translate([3, 0, 0]) snap_fit_arm();
}
```

Key parameters to test:
- `thickness` (1.0-2.0 mm): Thicker = stronger but harder to flex
- Arm length: Longer = more flexible but weaker
- Catch geometry: Size and shape determine how securely parts lock

### Tolerance for Snap-Fits

Unlike stackable bins, snap-fit parts need tighter tolerances because they must flex on insertion:

```
Recommended tolerances for snap-fit:
- Arm thickness tolerance: +/-0.2 mm (tighter than bins)
- Catch gap (clearance): 0.3-0.5 mm (smaller than stacking clearance)
- Insertion force: Should be noticeable but not require tools

If too loose: Parts fall apart
If too tight: Parts won't insert or break on insertion
```

### Multi-Part Assemblies: Coordinating Multiple Components

For more complex assemblies (like the Miniature Assembly in later projects), you need to:

1. Define a global coordinate system where all parts know their positions
2. Use modular design so each part can be printed, tested, and refined independently
3. Document assembly order so users know which parts fit together first

Here's a pattern for a multi-part assembly:

```openscad
// Multi-part assembly pattern
// === ASSEMBLY PARAMETERS ===
assembly_id = "miniature_furniture";  // Unique name for this assembly
part_scale = 1.0;                     // Scale entire assembly if needed
// === PARTS ===
module part_base() {
  cube([60, 40, 5]);
}
module part_support_left() {
  translate([5, 0, 5])
    cube([3, 40, 25]);
}
module part_support_right() {
  translate([52, 0, 5])
    cube([3, 40, 25]);
}
module part_shelf() {
  translate([8, 5, 18])
    cube([44, 30, 2]);
}
// === ASSEMBLY ===
// Complete assembly (print individual parts separately first)
module furniture_assembly() {
  part_base();
  part_support_left();
  part_support_right();
  part_shelf();
}
// Export individual parts by uncommenting one at a time:
// part_base();
// part_support_left();
// part_support_right();
// part_shelf();
// Or export the full assembly:
furniture_assembly();
```

Best practices for multi-part designs:
1. Print and test parts individually before assembling
2. Add small alignment features (pins, notches) to guide assembly
3. Document which parts go together and the order
4. Include spare parts (print 2-3 copies of small connecting pieces)
5. Test the full assembly on a test print before final production

### Assembly Documentation

For any multi-part project, create a simple assembly guide:

```
Miniature Furniture Assembly Guide

Parts:
- Base (60 x 40 x 5 mm, prints in ~20 min)
- Support Left (3 x 40 x 25 mm, prints in ~5 min)
- Support Right (3 x 40 x 25 mm, prints in ~5 min)
- Shelf (44 x 30 x 2 mm, prints in ~15 min)

Assembly Steps:
1. Prepare all four parts and test fit manually
2. Glue or snap supports to base (supports on left and right edges)
3. Slide shelf onto supports
4. Check that shelf is level and square

Quality Checks:
- Shelf should not wobble or flex excessively
- All parts should be free of support marks or defects
- Shelf should hold light objects without sagging
```

## Advanced Assembly Best Practices

Professional assemblies require planning beyond individual parts. Consider assembly sequence, tolerance management, and accessibility.

### Designing for Snap-Fit Assemblies

Snap-fits eliminate fasteners, reducing assembly complexity and cost:

```openscad
// Snap-fit connector with spring arm
module snap_fit_male(width, depth, arm_thickness, flex_distance) {
  difference() {
    // Main body
    cube([width, depth, 10]);
    // Undercut for spring arm
    translate([flex_distance, 2, 2])
      cube([width - 2*flex_distance, depth - 4, 6]);
  }
  // Spring arm that flexes inward
  translate([flex_distance, 2, 2])
    cube([arm_thickness, depth - 4, 6]);
}
// Snap-fit receiver with clip pockets
module snap_fit_female(width, depth) {
  cube([width, depth, 10]);
  // Clip pockets on inside
  translate([3, 2, 5])
    cube([width - 6, depth - 4, 4]);
}
// Usage: Position parts for assembly
snap_fit_male(40, 30, 2, 35);
translate([50, 0, 0])
  snap_fit_female(40, 30);
```

Complete Snap-Fit Housing Example:

```openscad
// Parametric connector box with snap-fit lid
module connector_housing(box_w, box_h, box_d, wall, snap_depth) {
  difference() {
    // Outer shell
    cube([box_w, box_h, box_d]);
    // Hollow interior
    translate([wall, wall, wall])
      cube([box_w - 2*wall, box_h - 2*wall, box_d - wall]);
  }
  // Snap-fit ledges on sides
  for (z = [box_d - 5, box_d - 2])
    for (x = [0, box_w - wall])
      translate([x, 0, z])
        cube([wall, box_h, 3]);
}
module connector_lid(box_w, box_h, snap_depth, tab_thickness) {
  difference() {
    cube([box_w, box_h, 2]);
    // Hollow underside
    translate([tab_thickness, tab_thickness, 0])
      cube([box_w - 2*tab_thickness, box_h - 2*tab_thickness, 2]);
  }
  // Snap tabs underneath
  for (x = [0, box_w - tab_thickness])
    translate([x, tab_thickness, -2])
      cube([tab_thickness, box_h - 2*tab_thickness, 2]);
}
// Assembly visualization
connector_housing(60, 40, 30, 2, 3);
translate([0, 0, 30])
  connector_lid(60, 40, 3, 3);
```

### Thread and Screw Calculations

Design for M3 and M4 fasteners commonly available in 3D printing accessories:

```openscad
// M3 bolt hole specifications
M3_clearance_hole = 3.2;    // Loose fit, easy insertion
M3_tight_hole = 2.8;        // Tight fit for threaded inserts
M3_head_diameter = 5.5;     // M3 bolt head diameter
M3_head_height = 2.8;       // M3 bolt head height
// M4 bolt hole specifications
M4_clearance_hole = 4.3;
M4_tight_hole = 3.8;
M4_head_diameter = 7;
M4_head_height = 3.2;
// Threaded insert pocket (wooden threaded inserts for plastic)
module threaded_insert_pocket(bolt_type, pocket_depth) {
  hole_diameter = bolt_type == "M3" ? 3.5 : 4.5;  // Insert body
  head_diameter = bolt_type == "M3" ? 5.8 : 7.5;  // Install head
  difference() {
    cylinder(r=head_diameter/2, h=pocket_depth);
    cylinder(r=hole_diameter/2, h=pocket_depth + 2);
  }
}
// Mounting bracket with threaded insert pockets
module mounting_bracket(length, height, pocket_depth) {
  difference() {
    cube([length, 20, height]);
    // Create pockets for threaded inserts
    for (x = [10, length - 10])
      translate([x, 10, height - pocket_depth])
        threaded_insert_pocket("M3", pocket_depth);
  }
}
mounting_bracket(60, 20, 5);
```

### Alignment Features and Dowel Pins

Guide parts into correct assembly positions:

```openscad
// Dowel pin socket (receives alignment pin)
module dowel_socket(diameter, depth) {
  difference() {
    cylinder(r=diameter/2 + 2, h=depth);
    cylinder(r=diameter/2 + 0.1, h=depth);
  }
}
// Dowel pin (protrudes from part)
module dowel_pin(diameter, height) {
  cylinder(r=diameter/2, h=height);
}
// Part A with dowel pins
module part_a() {
  difference() {
    cube([50, 50, 10]);
    translate([10, 10, -2])
      cylinder(r=2, h=5);  // Nut pocket
  }
  // Alignment pins on top
  translate([10, 10, 10])
    dowel_pin(4, 5);
  translate([40, 10, 10])
    dowel_pin(4, 5);
}
// Part B with dowel sockets
module part_b() {
  difference() {
    cube([50, 50, 10]);
    // Socket for alignment pins from Part A
    translate([10, 10, 10])
      dowel_socket(4, 5);
    translate([40, 10, 10])
      dowel_socket(4, 5);
  }
}
// Assembly visualization
part_a();
translate([0, 0, 15]) color("blue", 0.5) part_b();
```

### Assembly Sequence Documentation

Structure complex assemblies with clear ordering:

```openscad
// Multi-stage assembly documented in code
module complete_assembly(config_name) {
  echo(str("Assembling: ", config_name));
  // STAGE 1: Place base components
  echo("STAGE 1: Install base bracket");
  base_bracket();
  // STAGE 2: Add vertical structure
  echo("STAGE 2: Attach vertical supports");
  translate([0, 0, 20])
    vertical_support();
  // STAGE 3: Install cross members
  echo("STAGE 3: Connect cross members");
  translate([20, 0, 30])
    cross_member();
  // STAGE 4: Final fastening
  echo("STAGE 4: Secure fasteners (M3 bolts)");
  // Fasteners would be positioned here
}
complete_assembly("standard_shelf");
```

### Exploded View Generation

Create exploded assembly drawings for documentation:

```openscad
// Create exploded view by offsetting parts
module exploded_assembly() {
  explode_factor = 30;  // mm spacing between parts
  // Base (stays at origin)
  color("red")
    base_component();
  // Second component (moved up and forward)
  translate([0, explode_factor, 0])
    color("green")
      middle_component();
  // Third component (moved further)
  translate([0, explode_factor*2, 0])
    color("blue")
      top_component();
  // Fasteners (moved separately)
  for (i = [0:3])
    translate([i*10, explode_factor*2, 20])
      color("gray")
        cylinder(r=2, h=10);
}
exploded_assembly();
```

### Testing Interference and Clearance

```openscad
// Visualization: show clearance zones (semi-transparent)
module assembly_with_clearance_check() {
  // Actual parts
  part_1();
  translate([30, 0, 0]) part_2();
  // Clearance zones (show minimum spacing)
  % translate([25, 0, 0])  // % makes transparent
    cube([1, 50, 50]);     // 1mm clearance zone
}
// When rendered, the % shows potential interference areas
```

## Checkpoint

Chamfers improve print quality by:
1. Reducing stress concentration at edges
2. Improving layer adhesion at sharp transitions
3. Making parts easier to remove from the build platform

```openscad
// More sophisticated chamfer (chamfered corner)
module chamfer_corner(size, radius) {
  difference() {
    children();
    translate([size-radius, size-radius, size-radius])
      rotate([45, 0, 0]) cube([radius*2, radius*2, radius*2]);
  }
}
```

## Checkpoint

- After task 1, you have a single parametric bin
- After task 2, you've verified stackability
- After task 4, you have optional dividers working
- After task 5, you've documented tolerance data

## Quiz - Lesson 3dMake.8 (10 questions)

1. What is the purpose of the `stack_clear` parameter in stackable bin design[^1]?
2. Why is wall thickness a critical parameter in structural parts[^1]?
3. Explain what "tolerance stack-up" means and why it matters in multi-part assemblies[^1].
4. How does chamfering improve print quality[^3]?
5. What parameter would you adjust to make bins stack with more friction for stability[^1]?
6. True or False: Thin walls always print faster than thick walls.
7. Describe the difference between the outer rim and inner rim in the stackable bin design[^1].
8. Why might you use `num_dividers` as a parameter instead of hard-coding divider positions[^1]?
9. How would you measure whether your printed bin matches the designed dimensions[^1]?
10. What design considerations apply when stacking more than 3 bins vertically[^1]?

## Extension Problems (10)

1. Create five bin variants (small, medium, large, tall, shallow) using parametric logic; print and stack them[^1].
2. Add parametric rounded corners using `minkowski()` to improve structural integrity[^3].
3. Design a custom divider system: parameterize number, position, and thickness; test strength[^1].
4. Conduct a tolerance study: print bins with `stack_clear` values of 0.4, 0.6, 0.8 mm; document fit quality[^1].
5. Create a modular stacking system with connecting clips or latches; test assembly and disassembly[^2].
6. Build a complete storage system: design multiple bin sizes with standard stackability and create an assembly guide.
7. Develop a manufacturing specification document: tolerance ranges, material recommendations, quality acceptance criteria.
8. Design a labeling system: add parametric label holders or embossed areas for identifying bin contents.
9. Create a structural analysis guide: identify stress concentration points and propose reinforcement strategies.
10. Write comprehensive bin design documentation: parameters, variants, assembly, stackability testing, tolerance management, maintenance, and accessibility features.

References

[^1]: 3DMake GitHub - Stackable Bins Example - [https://github.com/tdeck/3dmake/blob/main/docs/examples.md](https://github.com/tdeck/3dmake/blob/main/docs/examples.md)
[^2]: Engineering Tolerance in 3D Printing - [https://www.sculpteo.com/en/blog/2021/06/17/tolerance-3d-printing/](https://www.sculpteo.com/en/blog/2021/06/17/tolerance-3d-printing/)
[^3]: OpenSCAD Manual - Minkowski (chamfers/rounding) - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski)
