# Caliper Practice Worksheet

**Student Name:** ___________________________________
**Date:** ___________________________________
**Partner Name (if applicable):** ___________________________________

---

## Before You Begin

Check the following before taking any measurements:

- [ ] Caliper is clean and dry
- [ ] Jaws close completely and display reads **0.0 mm** (press ON/ZERO if needed)
- [ ] Display is set to **mm**, not inches (press mm/in button if needed)
- [ ] You know which jaws to use for each measurement type

---

## Measurement Types Review

| Measurement Type | Which Jaws | Example Use |
|----------------|-----------|------------|
| **Outside** (OD) | Large lower jaws | Width of a block, outer diameter of a cylinder |
| **Inside** (ID) | Small upper jaws | Inner diameter of a hole, width of a slot |
| **Depth** | Depth rod (extends from end) | Depth of a hole or recess |

---

## Part A: Five Practice Objects

Your instructor will provide 5 labeled objects. Measure each as directed.

### Object 1: ___________________________

Measure the **outside length** (longest dimension):

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

Measure the **outside width**:

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

Measure the **height**:

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

---

### Object 2: ___________________________

Measure the **outside diameter** (if round) or **length**:

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

Measure the **height**:

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

Does this object have a hole? _____ If yes, measure the **inside diameter**:

| Trial | Reading (mm) |
|-------|------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

---

### Object 3: ___________________________

| Feature to Measure | Trial 1 | Trial 2 | Trial 3 | Average |
|-------------------|---------|---------|---------|---------|
| | | | | |
| | | | | |
| | | | | |

---

### Object 4: ___________________________

| Feature to Measure | Trial 1 | Trial 2 | Trial 3 | Average |
|-------------------|---------|---------|---------|---------|
| | | | | |
| | | | | |
| | | | | |

---

### Object 5: ___________________________

| Feature to Measure | Trial 1 | Trial 2 | Trial 3 | Average |
|-------------------|---------|---------|---------|---------|
| | | | | |
| | | | | |
| | | | | |

---

## Part B: Accuracy Check

Compare your Part A averages with a partner. If any differ by more than 1.0 mm, remeasure together.

| Object | My Average | Partner's Average | Difference | OK? (< 1mm) |
|--------|-----------|-------------------|-----------|------------|
| 1 (length) | | | | |
| 1 (width) | | | | |
| 2 (diameter) | | | | |
| 3 | | | | |
| 4 | | | | |

---

## Part C: Depth Measurement

Find an object with a hole or recess. Using the **depth rod**:

Object: ___________________________

| Trial | Depth (mm) |
|-------|-----------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

---

## Part D: OpenSCAD Translation

Using your measurements from Object 1, write the OpenSCAD code that would create a box with those exact dimensions:

```scad
// Object 1 recreation
// Author:
// Date:

length = ;   // your measured length average
width  = ;   // your measured width average
height = ;   // your measured height average

cube([length, width, height]);
```

Fill in the three values above. Would this box be the same size as the real object? Why might there be a small difference between the printed result and the real object?

___________________________________________________________________________

___________________________________________________________________________

---

## Part E: Reflection

1. What is the hardest thing about taking accurate measurements with calipers?

___________________________________________________________________________

___________________________________________________________________________

2. If you measured the same object 3 times and got 24.1, 24.3, and 24.0 mm, what average would you use in OpenSCAD?

**Calculation:** ( _______ + _______ + _______ ) ÷ 3 = _______ mm

3. If you are designing a slot that a 24.1 mm object needs to slide into freely, would you make the slot exactly 24.1 mm? What would you change and why?

___________________________________________________________________________

___________________________________________________________________________

---

## Common Mistakes Checklist

Before turning this in, confirm:

- [ ] I pressed ZERO before every new measurement
- [ ] I recorded three trials for each feature, not just one
- [ ] All my values are in mm, not inches
- [ ] I calculated averages (not just copied one trial)
- [ ] My values are plausible — nothing that should be 10 mm reads as 100 mm
