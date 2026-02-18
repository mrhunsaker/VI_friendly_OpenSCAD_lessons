# Tolerance Test Design — Lesson 2.2 Companion

*This document accompanies Lesson 2.2: Tolerances & Fit. Print the test piece, run the tests below, and record your results. Keep this sheet — you will reference your printer's clearance value in every project that requires parts to fit together.*

---

## What You Are Testing

You printed a set of test blocks, each with a cylindrical hole at a different diameter. You also printed a reference peg with a known diameter. Your goal: find the minimum clearance needed for the peg to fit into a hole, and characterize what each clearance feels like.

---

## Before Testing: Verify the Peg

Measure the reference peg with your calipers:

| Trial | Peg Diameter (mm) |
|-------|------------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

How close is your measured average to the designed value of **5.0 mm**?

Difference: _______ mm

This difference tells you something about your printer's dimensional accuracy on external (outside) dimensions.

---

## Test Results Table

For each test block, try to insert the peg. Record what happens.

| Block | Designed Hole Diameter | Does It Fit? | Fit Description |
|-------|----------------------|-------------|----------------|
| 0.0 mm clearance | 5.0 mm | Yes / No | |
| 0.1 mm clearance | 5.1 mm | Yes / No | |
| 0.2 mm clearance | 5.2 mm | Yes / No | |
| 0.3 mm clearance | 5.3 mm | Yes / No | |
| 0.5 mm clearance | 5.5 mm | Yes / No | |

**Fit descriptions to choose from:**
- Won't fit at all
- Forces in but won't come out
- Forces in, comes out with effort
- Snug — firm but removable by hand
- Slides in with light push
- Slides freely with noticeable play
- Falls through — too loose

---

## Also Measure the Holes

Use your calipers to measure the inside diameter of each hole and compare to the designed size:

| Block | Designed Hole (mm) | Measured Hole (mm) | Difference (mm) |
|-------|------------------|--------------------|----------------|
| 0.0 mm clearance | 5.0 | | |
| 0.2 mm clearance | 5.2 | | |
| 0.5 mm clearance | 5.5 | | |

Are the holes larger or smaller than designed? _______________

This is expected — FDM holes are almost always slightly undersized because of how the slicer generates the perimeter path and how plastic cools. The amount of undersizing is a property of your specific printer and settings.

---

## Determine Your Printer's Clearance Values

Based on your test results, fill in the values that work for your printer:

| Fit Type | Clearance Value That Worked |
|---------|---------------------------|
| Press fit (forces in, permanent) | _______ mm |
| Snug fit (removable by hand) | _______ mm |
| Normal / loose fit (slides easily) | _______ mm |
| Free sliding (moves with no resistance) | _______ mm |

**My printer's standard clearance for a normal fit: _______ mm**

Write this number somewhere you can find it — you will use it in Project 3 (jewelry beads) and Project 2 (any part that must fit something).

---

## Applying What You Learned

### Example: Jewelry Bead (Project 3)

Your cord measures _______ mm diameter (measure it now with calipers).

To design a hole that fits the cord easily:

```
hole_diameter = cord_diameter + my_clearance_value
hole_diameter = _______ + _______ = _______ mm
```

In OpenSCAD:
```scad
cord_d = ;        // measured cord diameter
clearance = ;     // your clearance value from this test

hole_d = cord_d + clearance;
```

### Example: Command Strip Slot (Project 1 context)

If a command strip measures 16.2 mm wide and you want it to slide into a slot:

```
slot_width = 16.2 + my_clearance_value
slot_width = 16.2 + _______ = _______ mm
```

---

## Reflection Questions

1. Were the holes printed larger or smaller than designed? By roughly how much?

___________________________________________________________________________

2. Why do you think FDM printers consistently produce holes that are a different size than designed?

___________________________________________________________________________

___________________________________________________________________________

3. You are designing a hinge where two parts need to rotate freely against each other. Based on your test results, what clearance would you use between the two surfaces?

___________________________________________________________________________

4. You are designing a cap that needs to snap onto a cylindrical post and stay in place. What clearance would you use?

___________________________________________________________________________

---

## Quick Reference Card

*Cut out or copy this section to keep at your workstation.*

```
MY PRINTER TOLERANCE VALUES
============================
Printer model: ________________
Filament: ________________
Date tested: ________________

Press fit:      _______ mm
Snug fit:       _______ mm
Normal fit:     _______ mm
Free sliding:   _______ mm

Holes print approx _______ mm SMALLER than designed.
```
