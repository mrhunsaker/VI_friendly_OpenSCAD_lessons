# Lesson 0.3: Introduction to Calipers

**Unit:** 0 — Foundations  
**Duration:** 1–2 class periods (50–60 min each)  
**Prerequisite:** Lessons 0.1 and 0.2

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Identify the parts of a digital or tactile caliper
- Zero (calibrate) a caliper before measuring
- Take outside, inside, and depth measurements accurately
- Record measurements in millimeters to one decimal place (e.g., 25.3 mm)
- Measure the same object three times and calculate the average

---

## Why Calipers?

When you design an object in OpenSCAD, every dimension you type into your code becomes a real physical measurement in your print. If your object needs to fit around something — a command strip, a bolt, a finger — the fit depends entirely on accurate measurements. A ruler is not precise enough for this work.

**Calipers** are precision measuring tools that can measure to the nearest **0.1 mm** (digital) or even **0.02 mm** (vernier). For our purposes, accuracy to **0.5 mm** is usually sufficient, but the habit of careful measurement is what matters.

You will use calipers in every project in this class.

---

## Types of Calipers

There are three common types. We will primarily use **digital calipers**, which are the easiest to read.

| Type | How You Read It | Notes |
|------|----------------|-------|
| **Digital** | LCD screen | Easiest; requires battery |
| **Dial** | Analog dial + main scale | No battery needed; very durable |
| **Vernier** | Two scales, read manually | No battery; requires more skill to read |

---

## Parts of a Digital Caliper

```
╔══════════════════════════════════════════╗
║  Outside jaw (large)   Inside jaw (small)║
║  ┌─┐                          ┌─┐        ║
║  │ │◄──── Object here ────────│ │        ║
║  └─┘                          └─┘        ║
║                                          ║
║  [ON/ZERO]  [mm/in]   [ 025.3 mm ]       ║
║                                          ║
║  ────────────── Scale ───────────────►   ║
║                                Depth Rod ║
║                                   │      ║
╚═══════════════════════════════════▼══════╝
```

| Part | Function |
|------|----------|
| Outside jaws (large) | Measure external dimensions (width, length, diameter) |
| Inside jaws (small, top) | Measure internal dimensions (hole diameter, channel width) |
| Depth rod | Measures the depth of a hole or recess |
| Thumbwheel | Slides the jaw smoothly |
| Locking screw | Locks the jaw in place to preserve a measurement |
| On/Zero button | Turns on; resets to zero |
| mm/in button | Switches between metric and imperial |
| Display | Shows the measurement |

---

## Step-by-Step: Taking an Outside Measurement

This is the most common measurement you'll take — the external width, height, or length of an object.

1. **Turn on** the caliper. Press the ON/ZERO button.
2. **Close the jaws** completely. Confirm the display reads **0.0 mm** (or 0.00). If it doesn't, press ZERO again.
3. **Open the outside jaws** by sliding the thumbwheel.
4. **Place the object** between the large outside jaws. Ensure the object sits flat and parallel to the jaws, not tilted.
5. **Gently close the jaws** until they make firm but light contact with the object. Do not squeeze hard — over-tightening gives a false reading and can damage the caliper.
6. **Read the display.** Record the value in millimeters.
7. **Lock the screw** if you need to preserve the measurement.

### Repeat Three Times

To ensure accuracy, measure the same feature three times and record all three values. Calculate the average.

| Measurement 1 | Measurement 2 | Measurement 3 | Average |
|--------------|--------------|--------------|---------|
| ________ mm | ________ mm | ________ mm | ________ mm |

---

## Step-by-Step: Taking a Depth Measurement

1. Zero the caliper with jaws closed.
2. Place the base of the caliper flat on the rim of the hole or recess.
3. Extend the depth rod downward by sliding the thumbwheel.
4. When the rod touches the bottom, read the display.

---

## Common Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| Not zeroing before measuring | All readings are offset | Always press ZERO with jaws fully closed |
| Tilting the object in the jaws | Reads a diagonal dimension, not true width | Keep object parallel to the jaw faces |
| Over-tightening jaws | False (small) reading; can damage caliper | Stop when you feel light resistance |
| Measuring in inches by accident | Completely wrong numbers | Check the mm/in button |
| Reading before the display stabilizes | Unstable reading | Wait one second after closing jaws |

---

## Practice Activity: Measure 5 Objects

Your instructor will provide 5 small objects (e.g., a coin, an eraser, a small block, a PLA print sample, a hex nut). Use the caliper to measure and record:

| Object | Feature Measured | M1 | M2 | M3 | Average |
|--------|----------------|----|----|-----|---------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

When you are done, compare your averages with a partner. If your readings differ by more than **1 mm**, remeasure together and find the source of the discrepancy.

---

## Connecting to OpenSCAD

Once you start designing in OpenSCAD (Lessons 0.4 and 0.5), every number you type is a millimeter. For example:

```scad
cube([70, 16, 5]);
```

This creates a cube 70 mm long, 16 mm wide, and 5 mm tall. If you measured a command strip and got 70.3 mm × 16.1 mm, you might enter:

```scad
cube([70.5, 16.5, 5]);
```

…adding a small tolerance so the strip fits inside without forcing. We'll learn more about tolerances in Lesson 2.2.

---

## Video Resources

1. **How to Use Digital Calipers — Instructables** (step-by-step with photos)  
   [https://www.instructables.com/How-to-Use-Calipers/](https://www.instructables.com/How-to-Use-Calipers/)  
   *Excellent visual walkthrough of all four measurement types.*

2. **How to Use a Caliper — Bantam Tools** (animated GIF tutorials)  
   [https://support.bantamtools.com/hc/en-us/articles/115001656313-Proper-Use-of-Digital-Calipers](https://support.bantamtools.com/hc/en-us/articles/115001656313-Proper-Use-of-Digital-Calipers)  
   *Shows correct and incorrect technique side by side — very useful for catching common errors.*

3. **Caliper Usage Guide — DigiKey Maker** (comprehensive written guide)  
   [https://www.digikey.com/en/maker/tutorials/2024/how-to-use-a-caliper](https://www.digikey.com/en/maker/tutorials/2024/how-to-use-a-caliper)  
   *Covers all parts, all measurement types, and best practices for accuracy.*

4. **How to Use Calipers — System Scale** (written guide with component diagrams)  
   [https://www.system-scale.com/how-to-use-digital-calipers](https://www.system-scale.com/how-to-use-digital-calipers)  
   *Includes a diagram of every component and step-by-step instructions for all five measurement types.*

5. **Measuring with Calipers — Fire Mountain Gems** (video tutorial)  
   [https://www.firemountaingems.com/learn/categories/essential-resources/how-tos/A90C-video-tutorial-with-instructions.html](https://www.firemountaingems.com/learn/categories/essential-resources/how-tos/A90C-video-tutorial-with-instructions.html)  
   *Short video demonstration of caliper technique — great for tactile learners.*

6. **How to Read a Dial Caliper — Travers Tool** (YouTube demo)  
   [https://solutions.travers.com/metalworking-machining/measuring-inspection/how-to-read-a-dial-caliper](https://solutions.travers.com/metalworking-machining/measuring-inspection/how-to-read-a-dial-caliper)  
   *For students using dial calipers instead of digital. Includes video and written guide.*

---

## References

Bantam Tools. (n.d.). *Proper use of digital calipers*. https://support.bantamtools.com/hc/en-us/articles/115001656313-Proper-Use-of-Digital-Calipers

DigiKey. (2024). *How to use a caliper*. https://www.digikey.com/en/maker/tutorials/2024/how-to-use-a-caliper

Instructables. (2023). *How to use calipers*. https://www.instructables.com/How-to-Use-Calipers/

Machine MFG. (2025). *Comprehensive guide to caliper usage: A step-by-step tutorial*. https://shop.machinemfg.com/comprehensive-guide-to-caliper-usage/

Mitutoyo. (2024). *Correct use of calipers, how to read them, and precautions*. https://en-40020.site-translation.com/about-metrology/knowledge/calipers/

System Scale. (2025). *How to use digital calipers*. https://www.system-scale.com/how-to-use-digital-calipers
