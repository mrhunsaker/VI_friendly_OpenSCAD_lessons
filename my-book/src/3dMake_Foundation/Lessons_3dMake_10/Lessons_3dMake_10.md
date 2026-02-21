# Lesson 10: Hands-On Practice Exercises and Troubleshooting

Estimated time: 120-150 minutes (multiple activities)

**Learning Objectives**

- Apply all prior lessons in integrated projects[^1]
- Diagnose and fix common 3D printing and OpenSCAD issues[^2]
- Validate models using deterministic and AI-assisted inspection[^3]
- Document design decisions and troubleshooting processes[^1]

**Materials**

- 3dMake project scaffold
- Printer for test prints (recommended)
- Measuring tools (calipers, protractor)
- Access to 3dm commands
- Reference: [master-rubric.md](../Lessons_3dMake_11/master-rubric.md) for assessment criteria
- Reference: [filament-comparison-table.md](../Lessons_3dMake_5/filament-comparison-table.md) for material properties

**Extension Projects**: Complete [Dice_Dice_Dice](../Lessons_3dMake_4/Dice_Dice_Dice.md) or [Snap_Fit_Clip](../Lessons_3dMake_8/snap-fit-clip.md) to practice integrated validation workflows.

---

## Part 1: Measurement Fundamentals

Before you can validate that your designs print correctly, you need to measure accurately. This section covers using calipers and interpreting measurement data.

### Understanding Digital Calipers

A **digital caliper** is a precision tool with three measurement modes:

| Mode             | Use                        | Example                                 |
|------------------|----------------------------|-----------------------------------------|
| **Outside jaws** | Measure outer dimensions   | Diameter of a cylinder, width of a part |
| **Inside jaws**  | Measure inner dimensions   | Hole diameter, inside width of a box    |
| **Depth rod**    | Measure depth or thickness | Depth of a recess, thickness of a part  |

### Measurement Best Practices

1. **Zero the caliper:** With jaws closed, press the ON/ZERO button to confirm it reads 0.0 mm
2. **Use gentle pressure:** Tighten jaws just enough to hold the object; excessive force causes false readings
3. **Take three trials:** Measure the same feature three times and calculate the average
4. **Record to 0.1 mm:** Most printed parts can be reliably measured to one decimal place

**Example measurement sequence:**

```
Object: 3D-printed cube
Trial 1: 24.5 mm
Trial 2: 24.2 mm
Trial 3: 24.6 mm
Average: (24.5 + 24.2 + 24.6) / 3 = 24.43 mm  24.4 mm

Interpretation: Designed as 25.0 mm, printed as 24.4 mm
Deviation: -0.6 mm (0.24% shrinkage, acceptable for PLA)
```

### Using Measurements to Improve Design

When you find a deviation between your designed and actual dimensions, you can adjust future prints:

```openscad
// Design parameter
part_height = 50;  // Designed: 50 mm

// After first print, measured: 49.7 mm
// Shrinkage: ~0.6% (typical for PLA)

// Adjustment for next print:
// Option 1: Add 0.3 mm to compensate
part_height = 50.3;  // Should now print ~50.0 mm

// OR

// Option 2: Scale the entire design by 1.006 (0.6% larger)
scale([1.006, 1.006, 1.006])
  main_model();
```

### Tolerance Stack-Up in Assemblies

When multiple parts fit together, measurement errors compound. This is called **tolerance stack-up**:

```
Example: Stackable bins
Designed: Outer width = 80.0 mm, Rim clearance = 0.6 mm

If each part prints 0.3 mm undersized:
Bin A actual: 79.7 mm outer
Bin B actual: 79.7 mm outer

Stack-up effect: Instead of 0.6 mm clearance, you get 0.9 mm
Result: Bins stack loosely (might be acceptable or problematic depending on use)

Solution: Design with 0.8 mm clearance initially, measure test prints,
then adjust if needed.
```

### Creating a Measurement Log

For any parametric design project, maintain a measurement log:

```
Project: Phone Stand Variants
Date: February 10, 2026

Part: Base (narrow variant, 60 mm)
Design dimension: 60.0 mm width
Trial 1: 59.7 mm
Trial 2: 59.8 mm
Trial 3: 59.9 mm
Average: 59.8 mm
Deviation: -0.2 mm
Status:  Acceptable (within +/-0.5 mm tolerance)

Part: Base (wide variant, 120 mm)
Design dimension: 120.0 mm width
Trial 1: 119.5 mm
Trial 2: 119.6 mm
Trial 3: 119.8 mm
Average: 119.6 mm
Deviation: -0.4 mm
Status:  Acceptable

Part: Lip (lip_height parameter: 15 mm)
Design dimension: 15.0 mm
Trial 1: 14.8 mm
Trial 2: 14.9 mm
Trial 3: 14.9 mm
Average: 14.87 mm  14.9 mm
Deviation: -0.1 mm
Status:  Excellent
```

### Reference: Appendix C

For comprehensive QA procedures, assembly testing, and durability validation, see **Appendix C: Tolerance Testing & QA Matrix**, which covers:
- Go/no-go gauges for functional validation
- Multi-cycle durability testing (snap-fits, hinges)
- Stress testing procedures
- Complete measurement worksheets

---

## Exercise Set A: Guided Projects with Real-World Constraints

### Exercise A1: The Parametric Phone Stand (Beginner)

**Objective:** Create a phone stand that works for 3+ phone models with different screen sizes.

**Requirements:**
- Base must support 300g weight
- Angle must be adjustable (45-75)
- Width must accommodate phones 60-90mm wide
- All parameters at top of file

**Starter Code:**

```openscad
// Parametric Phone Stand v1
// Required parameters

phone_width = 75;   // mm - adjust for different phones
base_width = phone_width + 10;  // Add margin
base_depth = 100;   // mm
base_thickness = 5; // mm

stand_angle = 60;   // degrees - adjust viewing angle
lip_height = 15;    // mm - hold phone at top

// Module definitions
module base() {
  cube([base_width, base_depth, base_thickness]);
}

module stand() {
  rotate([stand_angle, 0, 0])
    cube([base_width, base_depth, base_thickness]);
}

module lip() {
  translate([0, base_depth - 8, base_thickness])
    cube([base_width, 8, lip_height]);
}

// Assemble
union() {
  base();
  stand();
  lip();
}
```

**Tasks:**
1. Build the model and verify it's manifold with `3dm describe`
2. Generate 3 variants: iPhone (60mm), iPad mini (100mm), Tablet (150mm)
3. Test each variant by measuring critical dimensions
4. Document which variant works best with real devices

**Success Criteria:**
- All 3 variants build without errors
- Printed parts successfully hold test phones
- Dimensions match designs within 0.5mm

---

### Exercise A2: The Customizable Keycap Set (Intermediate)

**Objective:** Design a family of keycaps for a custom keyboard with text, icons, and different profiles.

**Requirements:**
- 5+ keycap sizes (mm 12-28)
- Support embossed text and numbers
- Optional: icon cutouts
- All printable without supports

**Challenge:** Use parametric code to generate all 5 caps from a single design[^1]:

```openscad
// Parametric Keycap Generator v1

// PARAMETERS TO CUSTOMIZE
cap_size = 18;      // mm - change for different key sizes
cap_height = 12;    // mm
wall = 1.2;         // mm
text_char = "A";    // Character to emboss
emboss_depth = 0.8; // mm

// Derived calculations
inner_size = cap_size - 2*wall;

module keycap() {
  // Hollow shell
  difference() {
    cube([cap_size, cap_size, cap_height], center=false);
    translate([wall, wall, wall])
      cube([inner_size, inner_size, cap_height], center=false);
  }
}

module emboss() {
  translate([cap_size/2, cap_size/2, cap_height - 0.01])
    linear_extrude(height=emboss_depth)
      text(text_char, size=cap_size*0.5, 
           halign="center", valign="center", $fn=32);
}

// Main assembly
union() {
  keycap();
  emboss();
}
```

**Tasks:**
1. Create variants with `cap_size` = 12, 16, 18, 20, 24 mm
2. Build each variant and verify emboss quality
3. Test printability: print 2-3 variants
4. Measure final dimensions and compare to design

**Documentation Required:**
- Parameter table showing all 5 variants
- Print time estimates for each
- Post-processing notes (support removal, surface finishing)

---

### Exercise A3: The Stackable Storage System (Advanced)

**Objective:** Design a modular storage system where bins stack securely and dividers are customizable.

**Requirements:**
- Bins must stack without binding
- Dividers must be optional and repositionable
- 3+ configurations (small/medium/large)
- Tolerance management documented[^1]

**Key Features:**

```openscad
// Advanced Stackable Bin System

// PARAMETERS
bin_width = 80;
bin_depth = 120;
bin_height = 60;
wall_thick = 2;
rim_height = 3;
stack_clearance = 0.6;  // KEY TOLERANCE PARAMETER
divider_thickness = 1.5;
num_dividers = 2;       // 0 for no dividers

// Tolerance-critical calculation
rim_inner_width = bin_width - 2*(wall_thick + stack_clearance);
rim_inner_depth = bin_depth - 2*(wall_thick + stack_clearance);

module bin_body() {
  difference() {
    cube([bin_width, bin_depth, bin_height]);
    translate([wall_thick, wall_thick, wall_thick])
      cube([bin_width - 2*wall_thick, 
            bin_depth - 2*wall_thick, 
            bin_height - wall_thick]);
  }
}

module stacking_rim() {
  difference() {
    translate([0, 0, bin_height]) 
      cube([bin_width, bin_depth, rim_height]);
    translate([wall_thick + stack_clearance, 
               wall_thick + stack_clearance, 
               bin_height])
      cube([rim_inner_width, rim_inner_depth, rim_height]);
  }
}

module dividers() {
  if (num_dividers > 0) {
    for (i = [1 : num_dividers]) {
      y = wall_thick + (i * (bin_depth - 2*wall_thick) / (num_dividers + 1));
      translate([wall_thick, y, wall_thick])
        cube([bin_width - 2*wall_thick, divider_thickness, bin_height - 2*wall_thick]);
    }
  }
}

// Main assembly
union() {
  bin_body();
  stacking_rim();
  dividers();
}
```

**Tasks:**
1. Print 2 identical bins and test stacking
2. Create 3 configurations: Small (60x80x40), Medium (80x120x60), Large (120x160x80)
3. Test with different `stack_clearance` values: 0.4, 0.6, 0.8mm
4. Document which clearance works best in practice[^1]
5. Print a large bin with 3 dividers and test storage capacity

**Documentation Required:**
- Tolerance testing matrix with measurements
- Assembly instructions with photos/descriptions
- Recommendations for printer calibration

---

## Exercise Set B: Common Problems and Solutions

### B1: Non-Manifold Geometry

**Problem:** Model renders but slicer shows errors or generates invalid G-code

**Diagnosis:**
```bash
3dm describe your_model.scad
# Look for messages like "non-manifold edges" or "thickness near zero"
```

**Common Causes and Fixes:**

| Issue                   | Cause                      | Fix                                                 |
|-------------------------|----------------------------|-----------------------------------------------------|
| Coincident faces        | Shapes touching exactly    | Add 0.001 offset: `translate([0, 0, 0.001])`        |
| Zero-thickness walls    | Wall too thin to render    | Increase wall: `wall = 2.0` instead of `wall = 0.5` |
| Incomplete shape        | Missing face in difference | Check boolean operations have complete shells       |
| Self-intersecting faces | Shape overlaps itself      | Simplify geometry, use `hull()` instead of union    |

**Fix Example:**
```openscad
// BEFORE (often fails)
difference(){
  cube([20, 20, 20]);
  sphere(r=10);
}

// AFTER (usually works)
difference(){
  cube([20, 20, 20]);
  translate([10, 10, 10.001])  // Offset to prevent coincidence
    sphere(r=10, $fn=32);
}
```

---

### B2: Print Failures

**Problem:** Print starts but fails partway through

**Diagnosis:**
```bash
# Check G-code for errors
3dm slice your_model.scad

# Verify model in slicer before printing
# Preview layer-by-layer
```

**Common Causes:**

| Symptom                   | Cause                      | Prevention                      |
|---------------------------|----------------------------|---------------------------------|
| Nozzle clogs after 10 min | Too fast extrusion speed   | Reduce speed in slicer          |
| Parts separate from bed   | Poor first layer adhesion  | Check bed level, clean bed      |
| Melted plastic strands    | Retraction not working     | Verify retraction in slicer     |
| Model warping             | Thermal stress, no cooling | Cool model, improve ventilation |
| Supports fail to remove   | Too thin or fused to model | Thicken supports, adjust angle  |

**Validation Checklist Before Printing:**

```bash
#!/bin/bash
# pre_print_check.sh - Validate before printing

echo "=== Pre-Print Validation ==="

# 1. Check for non-manifold geometry
echo "Checking geometry..."
3dm describe src/main.scad | grep -i "non-manifold"

# 2. Check wall thickness
echo "Checking wall thickness > 1mm..."
# (This requires slicer analysis - do manually)

# 3. Generate preview
echo "Generating 2D preview..."
3dm preview src/main.scad

# 4. Estimate print time
3dm slice src/main.scad
echo "Generated G-code: build/main.gcode"

echo "=== Ready to print? ==="
```

---

### B3: Dimensional Inaccuracy

**Problem:** Printed part measures 0.5-2mm different from design

**Cause:** Printer calibration, shrinkage, or design tolerance issues[^1]

**Diagnosis:**
```bash
# After printing, measure 3 locations and average
# Compare to design parameters
```

**Solution Process:**

```
Step 1: Measure printed part (3 locations)
        Design: 50mm
        Measured: 49.7mm, 49.8mm, 49.6mm
        Average: 49.7mm (0.3mm small)

Step 2: Calculate correction factor
        Correction = 50.0 / 49.7 = 1.0060 (0.6% larger)

Step 3: Apply to design
        New param = old_param * 1.0060

Step 4: Reprint and verify
```

**Prevention:**
- Use standard calibration models (benchy, calibration cube)
- Document printer baseline dimensions
- Apply material-specific shrinkage factors

---

## Exercise Set C: Validation and Documentation

### C1: Design Review Checklist

After completing any design, validate using this checklist:

```markdown
# Design Review Checklist

## Geometry Validation
- [ ] Model builds without errors (`3dm build`)
- [ ] No non-manifold edges (`3dm describe` shows no warnings)
- [ ] All walls  1.5mm thick
- [ ] No floating parts or disconnected geometry
- [ ] All features clearly serve a purpose

## Parametric Design
- [ ] All dimensions are parameters (no hard-coded values)
- [ ] Parameter names are descriptive (e.g., `wall_thickness` not `w`)
- [ ] Parameters have units comments (e.g., `wall = 2; // mm`)
- [ ] Derived values calculated from parameters (e.g., `inner = outer - 2*wall`)

## Printability
- [ ] Overhangs  45 or have support strategy
- [ ] No fine details < 0.5mm
- [ ] Assembly features tested (snap-fits, interlocks)
- [ ] Post-processing needs documented

## Documentation
- [ ] README describes design purpose and key parameters
- [ ] Usage examples provided
- [ ] Known limitations documented
- [ ] Assembly instructions included (if multi-part)

## Accessibility
- [ ] Model dimensions available in text form
- [ ] AI description (`3dm describe`) is useful
- [ ] Assembly process described non-visually
- [ ] No features rely solely on visual inspection
```

### C2: Troubleshooting Documentation Template

After solving any issue, document it:

```markdown
# Troubleshooting Record

## Issue: [Describe the problem]
**Date:** YYYY-MM-DD
**Project:** [Project name]

## Symptoms
- [What did you observe?]
- [When did it happen?]

## Root Cause
[Analysis of why it happened]

## Solution Applied
[Exact steps to fix]

## Verification
[How did you confirm it worked?]

## Prevention
[How to avoid this in future designs]

## References
- [Related documentation]
- [Similar issues]
```

---

## Checkpoint

- After Exercise A1, you have a working phone stand
- After Exercise A2, you have a parametric keycap set
- After Exercise A3, you have a stackable bin system with tolerance data
- After Exercise B, you understand common failure modes
- After Exercise C, you have documentation habits

---

## Quiz - Lesson 3dMake.10 (10 questions)

1. What is the first diagnostic step when a model fails to slice[^2]?
2. Explain the 0.001 offset rule and when to apply it[^2].
3. How would you verify that a wall is thick enough before printing[^1]?
4. What measurement method would you use to validate dimensional accuracy[^1]?
5. Describe what happens when stack_clearance is too small or too large[^1].
6. True or False: Parametric design makes it harder to troubleshoot issues.
7. How would you document a design so that others can modify and reprint it[^1]?
8. What should you check in a slicer preview before sending a file to print[^2]?
9. How would you use `3dm describe` to find design flaws[^3]?
10. Describe a complete workflow from problem diagnosis to solution verification[^1].

## Extension Problems (10)

1. Complete all three exercises (A1, A2, A3) and document results[^1].
2. Print and test 2+ variants of your phone stand; measure and compare[^1].
3. Conduct a tolerance sensitivity study: test bins with 3+ clearance values[^1].
4. Create a troubleshooting guide for your specific printer: common issues and fixes[^2].
5. Design a validation workflow: automated checks before printing[^1].
6. Build a design documentation database: parameter ranges, material recommendations, print settings[^1].
7. Create before/after case studies of design problems and solutions[^1].
8. Develop a printer calibration procedure and document baseline dimensions[^1].
9. Design a quality assurance system: define metrics, measurement methods, acceptance criteria[^1].
10. Write a comprehensive troubleshooting and maintenance guide: diagnostics, solutions, prevention strategies, and accessibility considerations.

---

**References**

[^1]: OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ
[^2]: 3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/
[^3]: 3DMake Documentation - https://github.com/tdeck/3dmake/wiki/Troubleshooting
