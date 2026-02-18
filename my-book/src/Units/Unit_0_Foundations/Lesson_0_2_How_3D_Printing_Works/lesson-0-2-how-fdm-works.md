# Lesson 0.2: How 3D Printing Works (FDM Fundamentals)

**Unit:** 0 — Foundations  
**Duration:** 1 class period (50–60 min)  
**Prerequisite:** Lesson 0.1 (Safety Checklist completed)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Explain in plain language how FDM 3D printing works
- Define the key terms: filament, nozzle, layer height, infill, support structures, G-code, slicing
- Identify why layer height and infill affect strength, surface quality, and print time
- Describe the journey from a 3D model file to a finished physical object

---

## What Is FDM 3D Printing?

**FDM** stands for **Fused Deposition Modeling**. It is the most common type of desktop 3D printing. The idea is straightforward: a plastic filament is fed into a heated nozzle, melted, and deposited on a surface in precise locations. The object is built up **layer by layer**, from the bottom up, each layer fusing to the one below it as the plastic cools.

Think of it like a very precise, very slow hot glue gun that is controlled by a computer.

### The Basic Process, Step by Step

1. **Design** — You create or download a 3D model (in OpenSCAD, we write code that generates the model)
2. **Export** — The model is exported as a `.stl` file (a standard format that describes 3D geometry as triangles)
3. **Slice** — A program called a **slicer** (we use PrusaSlicer) takes the `.stl` and converts it to a series of two-dimensional layers, generating machine instructions called **G-code**
4. **Print** — The G-code file is loaded onto the printer (via SD card or USB), and the printer follows those instructions to build your object layer by layer
5. **Post-process** — When done, you remove the object from the build plate and clean up any support structures

### Key Components of an FDM Printer

| Component | Role |
|-----------|------|
| Filament spool | Holds the raw plastic material |
| Extruder | Grips and feeds filament into the hot end |
| Hot end / nozzle | Heats and melts filament, deposits it precisely |
| Print bed / build plate | The surface the object is built on |
| X/Y/Z motion system | Moves the printhead (or bed) in three dimensions |
| Firmware / controller board | The printer's "brain" that reads G-code |

---

## Critical Concepts

### Layer Height
Layer height is how thick each individual layer of plastic is. Typical values are **0.1 mm to 0.3 mm**.

- **Thinner layers (0.1 mm):** smoother surface, more detail, longer print time
- **Thicker layers (0.3 mm):** rougher surface, less detail, faster print time

A good all-purpose starting point is **0.2 mm**.

### Infill
Infill is the internal structure of a printed object. Objects are rarely printed solid — instead, the printer creates a geometric pattern inside the walls.

- **0% infill:** hollow shell
- **15–20% infill:** adequate for most models; balanced strength and speed
- **50%+ infill:** strong functional parts; slower and more material-intensive
- **100% infill:** completely solid; rarely necessary

Different infill patterns (grid, gyroid, honeycomb, etc.) offer different strength characteristics.

### Support Structures
Some geometries overhang or float in mid-air — the printer cannot print into empty space. **Support structures** are automatically generated temporary scaffolding that the printer builds first, providing a surface for overhanging features to rest on. They are removed after printing.

Good design practice reduces the need for supports by orienting prints wisely.

### Bed Adhesion
The first layer must stick to the build plate. If it doesn't, the print will fail (a common problem called **warping**). Methods for improving adhesion include a heated bed, glue stick, painter's tape, and proper leveling.

---

## The STL → G-code Pipeline (Diagram)

```
[OpenSCAD Code]
      ↓  (Render + Export)
  [.stl file]
      ↓  (Import to PrusaSlicer)
[Slicer Settings]
  - Layer height
  - Infill %
  - Supports on/off
  - Print temperature
      ↓  (Slice Now)
  [.gcode file]
      ↓  (Load onto printer)
[Physical Print]
```

---

## Hands-On Observation Activity

Your instructor will run a print during or before this lesson. As it runs, observe and record:

1. What is the layer height being used? _______________
2. What is the infill percentage? _______________
3. Does the model require support structures? _______________
4. How long is the estimated print time? _______________
5. Describe in your own words what you see happening as the layers build up:

_________________________________________________________________________

_________________________________________________________________________

---

## Video Resources

Watch these videos to reinforce the concepts covered in class:

1. **What Is FDM 3D Printing? — Protolabs Network** (YouTube, ~10 min)  
   [https://www.hubs.com/blog/the-3d-printing-handbook-now-as-youtube-series/](https://www.hubs.com/blog/the-3d-printing-handbook-now-as-youtube-series/)  
   *Covers how FDM works, layers, infill, and support material clearly and visually.*

2. **How a 3D Printer Works — Product Design Online** (written guide with visuals)  
   [https://productdesignonline.com/how-a-3d-printer-works-explained-for-beginners/](https://productdesignonline.com/how-a-3d-printer-works-explained-for-beginners/)  
   *Excellent beginner overview including the filament-to-finished-print pipeline.*

3. **FDM 3D Printing: Complete Beginner Guide — All3DP**  
   [https://all3dp.com/2/3d-printing-for-beginners-all-you-need-to-know-to-get-started/](https://all3dp.com/2/3d-printing-for-beginners-all-you-need-to-know-to-get-started/)  
   *Comprehensive written guide covering printer components, materials, and first print tips.*

4. **Introduction to FDM 3D Printing — Hubs Knowledge Base**  
   [https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/](https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/)  
   *Technical but accessible article with great diagrams on layer height, infill, and warping.*

5. **BYU Makerspace 3D Printing Overview — 75-Second Intro Video**  
   [https://guides.lib.byu.edu/3Dprinting](https://guides.lib.byu.edu/3Dprinting)  
   *A very quick visual overview — great for a first glance at the overall process.*

---

## Vocabulary Check

Define the following terms in your own words:

| Term | My Definition |
|------|--------------|
| Filament | |
| Nozzle | |
| Layer height | |
| Infill | |
| Support structures | |
| G-code | |
| Slicer | |
| Build plate | |
| Warping | |

---

## References

Hubs (Protolabs Network). (2023). *What is FDM (fused deposition modeling) 3D printing?* https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/

FacFox. (2021). *Introduction to FDM 3D printing*. https://facfox.com/docs/kb/introduction-to-fdm-3d-printing

Lewis, A. (2022). *How a 3D printer works (explained for beginners)*. Product Design Online. https://productdesignonline.com/how-a-3d-printer-works-explained-for-beginners/

Sculpteo. (2025). *Mastering FDM 3D printing: Techniques and applications*. https://www.sculpteo.com/en/3d-learning-hub/3d-printing-technologies-and-processes/fdm-3d-printing/

Taylor, T. (2025). *3D printing for beginners: How to get started with FDM*. All3DP. https://all3dp.com/2/3d-printing-for-beginners-all-you-need-to-know-to-get-started/
