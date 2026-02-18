# Unit 0: Foundations
**Duration:** 2 weeks  
**Driving Question:** How does a 3D printer turn a digital design into a physical object?

---

## Unit Summary
Before students touch a printer, they need a mental model of how the whole system works — from measurement to code to sliced file to printed object. This unit builds that foundation step by step. Every lesson feeds directly into Project 0, which serves as the unit's culminating assessment.

---

## Lessons

### Lesson 0.1 — What is 3D Printing?
**Objective:** Students can explain FDM printing in their own words and identify the major parts of the printer.

**Topics:**
- How FDM (Fused Deposition Modeling) works: layer-by-layer construction
- Filament types: PLA, PETG, flexible — properties and common uses
- Anatomy of the Prusa Mini+: bed, nozzle, extruder, frame, display
- What can and cannot be printed (overhangs, fine detail, size limits)

**Activity:** Observe a short print in progress. Students label a diagram of the printer and write a one-paragraph explanation of what they observed.

---

### Lesson 0.2 — Measurement and Precision
**Objective:** Students can use digital calipers accurately and record measurements in a standard format.

**Topics:**
- Why precision matters in fabrication (tolerance, fit, function)
- Parts of a digital caliper: jaws, depth rod, display, zero button
- How to measure: outside diameter, inside diameter, depth, step
- Recording measurements: units (mm), significant figures, labeling dimensions

**Activity:** Students measure 5 provided objects using calipers and record results in a measurement table. Discuss discrepancies between student measurements as a class.

**Vocabulary:** tolerance, caliper, dimension, X/Y/Z axis

---

### Lesson 0.3 — Introduction to OpenSCAD
**Objective:** Students can open OpenSCAD, write basic shape primitives, and render a 3D preview.

**Topics:**
- What OpenSCAD is and why we use code instead of drag-and-drop tools
- The coordinate system: X (left/right), Y (front/back), Z (up/down)
- Primitive shapes: `cube([x,y,z])`, `sphere(r)`, `cylinder(h,r)`
- Rendering: F5 (preview) vs F6 (render), exporting to STL

**Activity:** Students are given a spec sheet with 3 simple objects (a rectangular block, a cylinder, a sphere of given dimensions). They write the OpenSCAD code to match each one and screenshot their renders.

**Vocabulary:** primitive, render, STL, parameter

---

### Lesson 0.4 — OpenSCAD: Transformations and Boolean Operations
**Objective:** Students can position and combine shapes using translate, rotate, union, difference, and intersection.

**Topics:**
- `translate([x,y,z])` — moving shapes in space
- `rotate([x,y,z])` — rotating shapes around axes
- `union()` — combining shapes into one
- `difference()` — subtracting one shape from another
- `intersection()` — keeping only the overlapping volume

**Activity:** Students build a "box with a hole in it" using `difference()`, then add a raised label on top using `union()`. Stretch goal: create an object that uses all three boolean operations.

---

### Lesson 0.5 — Introduction to Slicing with PrusaSlicer
**Objective:** Students can import an STL into PrusaSlicer, configure basic settings, and export a print-ready file.

**Topics:**
- What a slicer does: converting geometry into printer instructions (G-code)
- Key settings: layer height (quality vs. speed), infill % (strength vs. material use), supports, brim
- Reading the slicer: estimated print time, filament use, layer preview
- Exporting and loading files onto the printer

**Activity:** Students take one STL file and slice it three ways — low quality/fast, medium, high quality/slow. They record settings and predicted outcomes in a comparison table, then discuss the tradeoffs.

---

### Project 0 — Measure and Recreate
*See `Projects/Project_0/project_0_briefing.txt` and `project_0_student.txt`*

Students measure the provided tactile floor marker using calipers, recreate it in OpenSCAD, slice it, and print it. Documentation follows the `project_0_student.txt` template.

**This project is the assessment for Unit 0.** Completion is pass/fail — all deliverables must be submitted satisfactorily.

---

## Materials Needed
- Prusa Mini+ printer (or equivalent FDM printer)
- Digital calipers (one per student or pair)
- PLA filament
- Computers with OpenSCAD and PrusaSlicer installed
- 5 small objects for measurement practice (e.g., blocks, containers, coins)
- Printed caliper diagram for Lesson 0.2

---

## Key Vocabulary for the Unit
| Term | Definition |
|---|---|
| FDM | Fused Deposition Modeling — printing by melting and depositing plastic layer by layer |
| Filament | The plastic material fed into the printer |
| Tolerance | The acceptable range of variation in a measurement |
| Primitive | A basic geometric shape (cube, sphere, cylinder) |
| Boolean operation | A way of combining or subtracting shapes (union, difference, intersection) |
| Slicer | Software that converts a 3D model into printer instructions |
| Infill | The internal structure of a print, expressed as a percentage of solid fill |
| Layer height | The thickness of each printed layer; affects quality and print time |

---

## Teacher Notes
- Lesson 0.2 works best with objects that have a mix of inside and outside measurements (a small cup, a bolt, a rectangular block).
- For Lesson 0.3, students often struggle with the coordinate system at first — use a physical X/Y/Z model or tape on the floor to make it concrete.
- The slicer lesson (0.5) can be done without printing anything; the goal is reading the interface, not producing a print.
- Project 0 should be the student's *second* print, not their first — consider printing a small test object before Project 0 so students experience the printer without the pressure of an assignment.
