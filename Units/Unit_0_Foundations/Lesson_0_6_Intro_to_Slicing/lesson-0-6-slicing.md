# Lesson 0.6: Introduction to Slicing with PrusaSlicer

**Unit:** 0 — Foundations  
**Duration:** 1 class period (50–60 min)  
**Prerequisite:** Lessons 0.4 and 0.5 (you need an STL file to slice)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Open PrusaSlicer and configure it for the classroom printer
- Import an STL file
- Set layer height, infill percentage, and support settings
- Preview sliced layers before printing
- Export a G-code file and understand what it is
- Estimate print time and filament use from the slicer

---

## What Is a Slicer?

Your 3D model (`.stl` file) is just a description of a shape — it knows nothing about a specific printer, temperature, or speed. A **slicer** is software that takes your model and translates it into specific instructions for your specific printer.

The output is a **G-code file** (`.gcode`). G-code is a list of movement and temperature instructions. A typical G-code file might have 10,000–500,000 lines. You never need to read or edit G-code yourself — the slicer generates it automatically.

We use **PrusaSlicer**, which is free and open source.

**Download:** [https://www.prusa3d.com/page/prusaslicer_424/](https://www.prusa3d.com/page/prusaslicer_424/)

---

## Setting Up PrusaSlicer for the First Time

When you open PrusaSlicer for the first time, a **Configuration Wizard** will appear.

1. Select **Prusa FFF** → **Original Prusa MINI & MINI+** (or whatever printer your classroom uses — ask your instructor)
2. Choose your filament type: **PLA**
3. Click Finish

If your classroom uses a different printer brand, your instructor will provide the correct printer profile to import.

---

## The PrusaSlicer Interface

```
┌──────────────────────────────────────────────────────────────────┐
│  Menu Bar: File | Edit | View | Configuration | Window | Help    │
├──────────────────┬───────────────────────────┬───────────────────┤
│                  │                           │                   │
│  Left toolbar:   │     3D VIEW / PLATER      │  Right panel:     │
│  - Add model     │     (your print bed)      │  Printer          │
│  - Scale         │                           │  Filament         │
│  - Rotate        │                           │  Print settings   │
│  - Move          │                           │  - Quality/Speed  │
│  - Place on face │                           │  - Supports on/off│
│                  │                           │  - Infill %       │
│                  │                           │                   │
├──────────────────┴───────────────────────────┴───────────────────┤
│  [Slice now]          Estimated time: 1h 23m     Filament: 4.2g  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step: From STL to G-code

### Step 1: Import Your Model

- Go to **File > Import > Import STL/OBJ/AMF/3MF** (or simply drag and drop your `.stl` file onto the plater)
- Your model will appear on the virtual print bed

### Step 2: Position Your Model

- Click the model to select it
- Use the **Place on face** tool (left toolbar) to set the flattest surface down — this minimizes supports and maximizes bed adhesion
- Use **Auto-arrange** if you have multiple objects

### Step 3: Set Print Quality

In the right panel, find the **Print Settings** dropdown:

| Setting Name | Common Values | What It Means |
|-------------|--------------|---------------|
| 0.20mm QUALITY | Layer height: 0.20mm | Good balance of speed and quality — use this as your default |
| 0.15mm DETAIL | Layer height: 0.15mm | Smoother, but slower |
| 0.30mm DRAFT | Layer height: 0.30mm | Fastest, roughest — good for test prints |

### Step 4: Set Infill

In the right panel, look for the **Infill** slider:

| Infill % | Use Case |
|----------|---------|
| 10–15% | Decorative models, no structural requirement |
| 15–20% | Default for most classroom projects |
| 30–40% | Functional parts that experience stress |
| 50%+ | High strength required; much longer print |

### Step 5: Set Supports

In the right panel, find **Support material** or the **Supports** dropdown:

| Setting | When To Use |
|---------|------------|
| None | Model has no overhangs >45° |
| Support on build plate only | Overhangs that hang from the base; most common |
| Everywhere | Complex overhangs on all sides |

**Tip:** Preview your model in the 3D view after slicing to see where supports will be generated.

### Step 6: Slice and Preview

- Click **Slice now** (bottom right)
- The view switches to **Preview mode**
- Use the slider on the right to scroll through layers — you can see exactly how the printer will build your object
- Check for:
  - Flat, even first layer
  - Support structures where needed
  - No floating pieces
  - Reasonable print time

### Step 7: Export G-code

- If everything looks good, click **Export G-code**
- Save the file to your SD card or USB drive
- Load it onto the printer and start your print (with instructor supervision)

---

## Reading the Print Time and Filament Estimates

After slicing, PrusaSlicer shows:
- **Estimated print time** (in minutes or hours)
- **Filament used** (in grams or meters)

These are usually accurate within 10%. Use them to plan your schedule and make sure you have enough filament.

---

## Practice Activity

1. Open the Project 0 `.stl` file (your instructor will provide it, or export it from OpenSCAD)
2. Import it into PrusaSlicer
3. Slice it with **0.20mm QUALITY**, **15% infill**, **no supports**
4. Record the estimated print time and filament use
5. Change the layer height to **0.30mm DRAFT** and re-slice
6. Record the new estimated time and filament use
7. Discuss: How much time was saved? What quality tradeoff was made?

| Setting | Print Time | Filament |
|---------|-----------|---------|
| 0.20mm / 15% infill | | |
| 0.30mm / 15% infill | | |
| 0.20mm / 30% infill | | |

---

## Video Resources

1. **PrusaSlicer: An In-Depth Walkthrough from Install to Print** (YouTube, ~36 min)  
   *Search YouTube for "PrusaSlicer in-depth walkthrough" — this is the most comprehensive beginner video available.*  
   *Also referenced at: [https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer](https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer)*

2. **How to Use PrusaSlicer: A Beginner's Guide — Tom's Hardware**  
   [https://www.tomshardware.com/how-to/use-prusaslicer](https://www.tomshardware.com/how-to/use-prusaslicer)  
   *Excellent step-by-step written guide with screenshots covering the full workflow.*

3. **How to Use PrusaSlicer (Detailed Tutorial) — ThePrusaSlicer.net**  
   [https://theprusaslicer.net/how-to-use-prusaslicer/](https://theprusaslicer.net/how-to-use-prusaslicer/)  
   *Good overview with tips on infill, brim, and preview mode.*

4. **Prusa Knowledge Base: Print Settings**  
   [https://help.prusa3d.com/category/prusaslicer_204](https://help.prusa3d.com/category/prusaslicer_204)  
   *Official Prusa documentation for every slicer setting. Use as a reference.*

5. **Beginner's Guide for Slic3r Prusa Edition — Prusa Blog**  
   [https://blog.prusa3d.com/slic3r-prusa-edition-beginners-guide_7527/](https://blog.prusa3d.com/slic3r-prusa-edition-beginners-guide_7527/)  
   *Older but still accurate guide directly from Prusa Research. Good for understanding why settings exist.*

6. **PrusaSlicer — Basic Printing — Bucknell Makers**  
   [https://bucknellmakers.dozuki.com/Guide/PrusaSlicer+-+Basic+Printing/289](https://bucknellmakers.dozuki.com/Guide/PrusaSlicer+-+Basic+Printing/289)  
   *Step-by-step with screenshots; written for university makerspace users (accessible level).*

7. **Getting Started with PrusaSlicer — Obico**  
   [https://www.obico.io/blog/prusa-slicer-getting-started/](https://www.obico.io/blog/prusa-slicer-getting-started/)  
   *Includes tips on the three interface modes (Simple, Advanced, Expert) and first-time setup.*

---

## References

Ekaran, S. (2023). *How to use PrusaSlicer: A beginners guide*. Tom's Hardware. https://www.tomshardware.com/how-to/use-prusaslicer

Obico. (2023). *Getting started with PrusaSlicer (for any 3D printer)*. https://www.obico.io/blog/prusa-slicer-getting-started/

Prusa Research. (2019). *Slice with style! The beginner's guide for Slic3r Prusa Edition*. https://blog.prusa3d.com/slic3r-prusa-edition-beginners-guide_7527/

ThePrusaSlicer.net. (2025). *How to use PrusaSlicer — Detailed tutorial*. https://theprusaslicer.net/how-to-use-prusaslicer/

UAS@UCLA. (2024). *Prusa slicer*. https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer
