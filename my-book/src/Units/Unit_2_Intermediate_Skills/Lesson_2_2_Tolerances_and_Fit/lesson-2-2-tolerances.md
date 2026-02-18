# Lesson 2.2: Tolerances & Fit in 3D Printing

**Unit:** 2 — Intermediate Skills  
**Duration:** 1–2 class periods (plus a print session)  
**Prerequisite:** Lesson 2.1; understanding of calipers (Lesson 0.3)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Explain why 3D printed objects do not exactly match their designed dimensions
- Define tolerance, clearance, and the three types of fit (clearance, transition, interference)
- Design and print a tolerance test part to characterize their specific printer
- Apply appropriate tolerance values when designing parts that must fit together
- Understand why holes in printed parts are always slightly undersized

---

## The Problem: Your Print Won't Be Exactly the Right Size

When you type `cube([20, 20, 20])` in OpenSCAD, you expect a 20 mm cube. In practice, **FDM printing introduces small dimensional errors** — typically ±0.1 to ±0.3 mm for a desktop printer.

This matters enormously when designing parts that:
- Must fit over, around, or inside another object (like a command strip, a bolt, or a cord)
- Must snap or press together with another printed part
- Must slide freely against another surface

A 0.2 mm error is invisible to your eye. But if you're trying to fit a peg into a hole, 0.2 mm is the difference between "fits perfectly" and "won't fit at all."

---

## Key Terms

**Tolerance:** The allowable deviation from the intended dimension. For FDM printing, typical tolerance is ±0.15–0.30 mm.

**Clearance:** The intentional gap between two parts. To make a sliding fit, you add clearance to the design.

**Types of Fit:**

| Fit Type | Description | Gap | Example Use |
|----------|-------------|-----|-------------|
| **Interference fit** (press fit) | Part is slightly larger than the hole; must be forced in | Negative clearance | Permanent assembly |
| **Transition fit** | May be tight or may slide depending on print variation | Near zero | Light press or snug slip |
| **Clearance fit** | Definite space between parts; moves freely | Positive clearance | Sliding drawer, loose hinge |

### Practical Clearance Values for FDM

| Desired Fit | Clearance to Add | Notes |
|------------|----------------|-------|
| Tight / press fit | 0.00–0.05 mm | Requires force; semi-permanent |
| Snug (hand-tight) | 0.10–0.15 mm | Firm but removable |
| Normal / loose | 0.20–0.30 mm | Fits easily by hand |
| Sliding / free | 0.40–0.60 mm | Moves freely with no play |

**Note:** These values are starting points. Every printer is slightly different. The tolerance test in this lesson will determine the right values for your specific printer.

---

## Why Holes Always Print Undersized

When you design a hole using a `cylinder()` in OpenSCAD and subtract it with `difference()`, the printed hole is almost always **slightly smaller than designed**. This happens because:

1. The STL file format represents curves as triangles. A circular hole becomes a many-sided polygon — a circumscribed circle is always slightly smaller than the true circle.
2. The melted filament "swells" slightly as it cools, slightly filling the edges of the hole.

**Practical rule:** For a hole that needs to fit a 5 mm bolt, design it as 5.3–5.5 mm. Test and adjust.

---

## Tolerance Test Design

In this lesson, you will design and print a **tolerance test file** that helps you characterize your printer. The test consists of pegs of a fixed size paired with holes of varying sizes.

### Tolerance Test Code

```scad
// Tolerance Test for FDM Printer
// Author: (your name)
// Date: (today)
// Usage: Print this, then test which hole best fits the 5mm peg.

$fn = 40;
peg_d = 5;      // fixed peg diameter
height = 8;     // height of all cylinders
spacing = 15;   // space between test pieces

// === Reference Peg (the peg to test with) ===
cylinder(h = height, d = peg_d);

// === Test holes at different clearances ===
// 0.0 mm clearance (exact same size — should be very tight or impossible)
translate([spacing * 1, 0, 0])
difference() {
    cube([spacing - 2, spacing - 2, height]);
    translate([(spacing - 2) / 2, (spacing - 2) / 2, -1])
        cylinder(h = height + 2, d = peg_d + 0.0);
}

// 0.1 mm clearance
translate([spacing * 2, 0, 0])
difference() {
    cube([spacing - 2, spacing - 2, height]);
    translate([(spacing - 2) / 2, (spacing - 2) / 2, -1])
        cylinder(h = height + 2, d = peg_d + 0.1);
}

// 0.2 mm clearance
translate([spacing * 3, 0, 0])
difference() {
    cube([spacing - 2, spacing - 2, height]);
    translate([(spacing - 2) / 2, (spacing - 2) / 2, -1])
        cylinder(h = height + 2, d = peg_d + 0.2);
}

// 0.3 mm clearance
translate([spacing * 4, 0, 0])
difference() {
    cube([spacing - 2, spacing - 2, height]);
    translate([(spacing - 2) / 2, (spacing - 2) / 2, -1])
        cylinder(h = height + 2, d = peg_d + 0.3);
}

// 0.5 mm clearance
translate([spacing * 5, 0, 0])
difference() {
    cube([spacing - 2, spacing - 2, height]);
    translate([(spacing - 2) / 2, (spacing - 2) / 2, -1])
        cylinder(h = height + 2, d = peg_d + 0.5);
}
```

### After Printing: Record Your Results

| Clearance | Does the peg fit? | Description |
|-----------|------------------|-------------|
| 0.0 mm | | |
| 0.1 mm | | |
| 0.2 mm | | |
| 0.3 mm | | |
| 0.5 mm | | |

Use this data to determine your printer's "normal fit" clearance. Record it here:

**My printer's normal clearance value: ________ mm**

Keep this in your reference materials for all future projects.

---

## Applying Tolerances: Jewelry Beads (Project 3 Preview)

In Project 3, your beads must fit on a cord. If you design a hole with `d = cord_diameter`, the bead probably won't slide. Instead:

```scad
cord_d = 2;          // actual cord diameter (measure with calipers)
clearance = 0.3;     // your printer's clearance value from the test

module round_bead(outer_d = 15, hole_d = cord_d + clearance) {
    difference() {
        sphere(d = outer_d);
        cylinder(h = outer_d + 2, d = hole_d, center = true);
    }
}
```

---

## Video Resources

1. **3D Printing Tolerances & Fits — 3DChimera** (written guide with practical values)  
   [https://3dchimera.com/blogs/connecting-the-dots/3d-printing-tolerances-fits](https://3dchimera.com/blogs/connecting-the-dots/3d-printing-tolerances-fits)  
   *Explains why holes are undersized and provides ready-to-use clearance values.*

2. **Guide to 3D Printing Tolerances, Accuracy, and Precision — Formlabs**  
   [https://formlabs.com/blog/understanding-accuracy-precision-tolerance-in-3d-printing/](https://formlabs.com/blog/understanding-accuracy-precision-tolerance-in-3d-printing/)  
   *Technical but thorough explanation of clearance, transition, and interference fits with engineering diagrams.*

3. **How to Manage 3D Printing Tolerances — MakerVerse**  
   [https://www.makerverse.com/resources/3d-printing/3d-printing-tolerances-guide/](https://www.makerverse.com/resources/3d-printing/3d-printing-tolerances-guide/)  
   *Practical guide with a quick-reference table of tight/standard/loose clearance values.*

4. **Tolerances for 3D Printing — Sinterit**  
   [https://sinterit.com/3d-printing-guide/design-for-3d-printing/tolerances-3d-printing/](https://sinterit.com/3d-printing-guide/design-for-3d-printing/tolerances-3d-printing/)  
   *Covers tolerance values by printing technology (FDM, SLA, SLS) and explains factors that affect accuracy.*

5. **3D Printing Design Tips — Markforged**  
   [https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips](https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips)  
   *Includes the concept of "unit tests" (small test prints) for verifying tolerances — a method used by professional engineers.*

---

## References

3DChimera. (2019). *3D printing tolerances & fits*. https://3dchimera.com/blogs/connecting-the-dots/3d-printing-tolerances-fits

eufymake. (n.d.). *3D printing tolerances: Accuracy for professional results*. https://www.eufymake.com/blogs/printing-guides/3d-printing-tolerances

Formlabs. (2023). *Guide to 3D printing tolerances, accuracy, and precision*. https://formlabs.com/blog/understanding-accuracy-precision-tolerance-in-3d-printing/

MakerVerse. (2025). *How to manage 3D printing tolerances: Smart design for reliable results*. https://www.makerverse.com/resources/3d-printing/3d-printing-tolerances-guide/

Markforged. (2021). *3D printing design tips*. https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips

Sinterit. (2025). *Tolerances for 3D printing: Accuracy, clearance & design tips*. https://sinterit.com/3d-printing-guide/design-for-3d-printing/tolerances-3d-printing/
