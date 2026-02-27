# Lesson 10: Hands-On Practice Exercises and Troubleshooting

Estimated time: 120–150 minutes

## Learning Objectives [^1]
- Apply skills from Lessons 1–9 in three integrated design exercises
- Use calipers to measure and validate printed parts against specifications
- Diagnose and fix non-manifold geometry errors
- Perform tolerance stack-up analysis
- Use `3dm describe` for non-visual validation

## Materials
- 3dMake project
- Printer and PLA filament
- Digital calipers
- Printed parts from previous lessons (or new prints from exercises below)

## Exercise Set A: Phone Stand Refinement

### A1 — Measure and Iterate

Using calipers, measure your printed phone stand against the design specification:

```
Measurement checklist:
[ ] Base width = phone_w + 20 ± 0.3 mm
[ ] Base depth as calculated ± 0.5 mm
[ ] Back support angle (measure with angle gauge or protractor)
[ ] Lip depth = lip_h ± 0.3 mm
[ ] Phone fits and is stable (functional test)
```

For each out-of-spec dimension, calculate the correction and update the parameter in `src/main.scad`. Rebuild and reprint.

### A2 — Tolerance Stack-Up Analysis [^2]

```
Scenario: phone stand cradle with three stacked parts:
- Base plate: designed 5mm, printed 5.12mm (+ 0.12mm)
- Back brace: designed 60mm, printed 59.87mm (- 0.13mm)
- Lip:        designed 15mm, printed 15.09mm (+ 0.09mm)

Total stack height: 5.12 + 59.87 + 15.09 = 80.08mm
Design intent:      5 + 60 + 15            = 80.00mm
Error:              80.08 - 80.00          = +0.08mm  (within 0.5mm spec — PASS)

Worst case (all errors same direction): 0.12 + 0.13 + 0.09 = 0.34mm — still within spec
```

Document your own measurements in a similar table.

### A3 — Add a Cable Slot [^3]

Extend your phone stand design with a cable slot through the base:

```openscad
cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add to main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
```

## Exercise Set B: Keycap with Text

### B1 — Build a Mechanical Keyboard Keycap

```openscad
// Parametric keycap
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5mm diameter
stem_h     = 3.8;
wall       = 1.5;
label_text = "A";

module keycap() {
  difference() {
    // Keycap body with slight top curve
    hull() {
      cube([key_w, key_d, key_h - 2], center=true);
      translate([0, 0, 1]) cube([key_w - 2, key_d - 2, key_h], center=true);
    }
    // Hollow inside
    translate([0, 0, -wall])
      cube([key_w - 2*wall, key_d - 2*wall, key_h], center=true);
    // MX stem hole
    translate([0, 0, -(key_h/2 + 0.001)])
      cylinder(r=stem_r + 0.1, h=stem_h + 0.001, $fn=16);
  }
}

module stem_mount() {
  translate([0, 0, -(key_h/2 + stem_h)])
    difference() {
      cylinder(r=stem_r + wall, h=stem_h, $fn=16);
      cylinder(r=stem_r, h=stem_h + 0.001, $fn=16);
    }
}

keycap();
stem_mount();

// Engrave label
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font="Liberation Sans:style=Bold",
         halign="center", valign="center", $fn=4);
```

### B2 — Validate with 3dm describe

```bash
3dm describe
```

Expected output should confirm the keycap geometry. Document what the AI description says and compare it to your design intent.

### B3 — Print and Test

Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase `stem_r + 0.1` to `stem_r + 0.15`. If too loose, decrease to `stem_r + 0.05`.

## Exercise Set C: Stackable Bins

### C1 — Build a Three-Size Bin Set

Using the stackable bin module from Lesson 8, generate three sizes:

```openscad
// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
```

### C2 — Diagnose and Fix Non-Manifold Geometry

Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). Common causes:

```openscad
// PROBLEM: two cubes share a face exactly — may produce non-manifold edge
cube([20, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);  // touching at x=20 — ambiguous edge

// FIX 1: use union()
union() {
  cube([20, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}

// FIX 2: overlap slightly
cube([20.001, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);
```

Diagnosis tool:
```bash
3dm describe  # AI will often flag non-manifold geometry
# Also open STL in slicer and enable "Check for geometry errors"
```

### C3 — Advanced Geometry: hull() and minkowski()

```openscad
// hull() creates a convex envelope — useful for organic shapes
module smooth_transition() {
  hull() {
    translate([0, 0, 0]) cylinder(r=15, h=5, $fn=64);
    translate([0, 0, 30]) cylinder(r=5, h=2, $fn=64);
  }
}

smooth_transition();

// minkowski() adds the shape of a small object to every surface point
module rounded_hull() {
  minkowski() {
    hull() {
      cylinder(r=10, h=3, $fn=8);      // octagonal prism
      translate([30, 0, 0]) sphere(r=8, $fn=32);
    }
    sphere(r=2, $fn=16);  // rounds all edges by 2mm
  }
}

rounded_hull();
```

## Quiz — Lesson 3dMake.10 (15 questions)

1. What tool do you use to measure printed part dimensions against the design specification?
2. What is tolerance stack-up, and why does it matter for multi-part assemblies?
3. What causes non-manifold geometry in OpenSCAD, and how do you detect it?
4. How does `hull()` differ from `union()`?
5. What does `3dm describe` help you verify about your model?
6. What does a Cherry MX stem measure in diameter, and what clearance would you add for a slip-fit keycap?
7. True or False: `find -newer` is an event-driven file change detection method.
8. If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?
9. What does the `$fn` parameter control in OpenSCAD?
10. Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes.
11. What is the difference between `hull()` and `minkowski()` for creating organic shapes? Give one use case for each.
12. What does `resize([50, 0, 0])` do, and why might `resize()` behave unexpectedly for non-uniform scaling?
13. When measuring a printed part with calipers, what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?
14. Describe the iterative design workflow for dialing in press-fit tolerances: what do you print, what do you measure, and how do you adjust?
15. If `3dm describe` reports "the model appears non-manifold," what are three possible causes you would investigate in your OpenSCAD code?

## Extension Problems (15)

1. Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches.
2. Design a go/no-go gauge for a 10 mm nominal hole: a part with a "go" pin sized for slip-fit and a "no-go" pin sized for interference fit.
3. Write a printer calibration SOP (standard operating procedure): bed leveling, first-layer calibration, and dimension verification. Include a measurement checklist.
4. Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid.
5. Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment.
6. Build a parametric test coupon that tests four different wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print.
7. Design a caliper stand: a holder that holds your digital calipers at a comfortable angle for one-handed operation.
8. Build a non-manifold error catalog: intentionally create 5 different types of non-manifold geometry, document how each was created and how to fix it.
9. Use `hull()` to design a smooth ergonomic tool handle and compare it to a simple cylinder handle.
10. Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs.
11. Research the `resize()` function in OpenSCAD. Build an example showing how it behaves differently from `scale()` for non-uniform resizing.
12. Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches the concepts of tolerance, alignment, and slip-fit.
13. Build a "measurement worksheet" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part.
14. Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine if the errors are normally distributed.
15. Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered (or researched), with causes, prevention, and fixes.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Hull and Minkowski. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

[^2]: Digital Calipers Measurement Technique — General metrology reference. See also: [Measurement Worksheet Asset](../../assets/3dMake_Foundation/measurement_worksheet.md)

[^3]: 3DMake GitHub Repository — Command reference including `3dm describe`. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Troubleshooting and advanced geometry chapters
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked practice exercises
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Function reference
- [Master Rubric](../../assets/3dMake_Foundation/master-rubric.md) — Assessment criteria for practice exercises
