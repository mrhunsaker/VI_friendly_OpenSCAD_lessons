# Lesson 2.3: Advanced Slicing — Supports, Orientation & Print Strength

**Unit:** 2 — Intermediate Skills  
**Duration:** 1–2 class periods  
**Prerequisite:** Lesson 0.6 (Intro to Slicing)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Identify which features of a model require support structures
- Understand the 45-degree overhang rule
- Choose an optimal print orientation to minimize supports and maximize strength
- Compare the same model sliced in different orientations
- Use PrusaSlicer's layer preview to diagnose potential print problems

---

## The 45-Degree Overhang Rule

FDM printing builds layer by layer, from the bottom up. Each layer must rest on either:
1. The layer below it
2. A support structure

An **overhang** is any surface that extends beyond the layer below. FDM printers can handle overhangs up to about **45 degrees** from vertical without supports, because each new layer has enough material below it to hold its position.

Beyond 45 degrees, the print will sag, fail, or produce rough surfaces — unless you add supports.

```
OK (≤45°):       NEEDS SUPPORT (>45°):
                 
    ████          ████████
  ████          ████
████           (hanging in air)
```

### Common Features That Require Supports

| Feature | Usually Needs Supports? | Notes |
|---------|------------------------|-------|
| Overhang >45° from vertical | Yes | Standard rule |
| Bridge (horizontal gap) | Sometimes | Short bridges (<20 mm) often print fine |
| Curved ceiling | Sometimes | Depends on span |
| Vertical hole sidewall | No | Prints fine as long as the circle is in a vertical orientation |
| Horizontal hole ceiling | Yes | The top arc of the hole sags |

---

## Print Orientation Matters — A Lot

The same object printed in different orientations will:
- Require different amounts of support material
- Have different strength in different directions
- Have different surface finish quality

**FDM parts are anisotropic** — they are stronger parallel to the print bed than perpendicular to it. Layer adhesion (the bond between layers stacked on top of each other) is the weakest link.

### Example: Printing a Hook

A hook that will hold weight should have its load-bearing axis **aligned with the print bed layers**, not perpendicular to them.

```
WRONG orientation:       RIGHT orientation:
Layers are horizontal.   Layers run along the length.
Hook breaks at layer     Load is distributed across
boundary under load.     many layers.

[====]                   [|||||||||||||]
Load pulls at layers ↓   Load is parallel to layers
```

### Activity: Compare Three Orientations

For this activity, your instructor will provide a simple hook or bracket `.stl` file (or you can design one).

Slice it in **three different orientations** and record:

| Orientation | Print Time | Support Volume | Where Would It Be Weakest? |
|-------------|-----------|----------------|--------------------------|
| Flat (lying down) | | | |
| Standing upright | | | |
| On its side | | | |

Discuss with your class: which orientation produces the best print for the intended use?

---

## Support Settings in PrusaSlicer

### Turning Supports On

In the right panel:
- **None** — no supports generated
- **Support on build plate only** — supports grow from the floor; good for most cases
- **Everywhere** — supports grow from any surface; needed for complex floating geometries

### Support Interface Layers

Found in **Print Settings > Support material**:

- **Interface layers** add a finer-resolution top layer on supports, making the support surface smoother and easier to remove

### Tree Supports (PrusaSlicer Advanced Mode)

Tree supports "grow" from the build plate like tree branches, touching only the minimum necessary surfaces. They use less material and are often easier to remove than standard supports.

To enable: Switch to **Expert mode** (top right) → Print Settings → Support material → Support style: **Tree (organic)**

---

## Diagnosing Problems in Layer Preview

After clicking **Slice now**, always use the layer preview before printing:

1. Drag the **vertical slider** on the right to scroll through layers
2. Look for:
   - **Floating layers** (disconnected from the rest of the model) — a slicing error
   - **Very thin walls** — may not print correctly
   - **Supports too dense** — wastes material; consider reorienting
   - **First layer coverage** — the first layer should be wide and flat

### Color Key in Preview

| Color | What It Represents |
|-------|-------------------|
| Yellow/orange | Perimeters (outer walls) |
| Red | Infill |
| Green | Bridges |
| Light blue | Support material |

---

## Practice Activity

1. In OpenSCAD, design a simple **T-shaped bracket** (a horizontal bar with a vertical post in the center). Export it as STL.
2. Import it into PrusaSlicer.
3. Slice it three ways:
   - Lying flat (T-bar on the bed)
   - Standing upright (post pointing up)
   - Standing on the crossbar end
4. For each orientation, record print time, support material, and note any potential weak points.
5. Choose the best orientation and explain your reasoning in 2–3 sentences.

---

## Video Resources

1. **PrusaSlicer Support Enforcers** (YouTube, 11 min)  
   *Search YouTube for "PrusaSlicer Support Enforcers" — this video shows how to manually add supports to specific areas.*  
   *Also referenced at: [https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer](https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer)*

2. **PrusaSlicer 2.3 — Paint on Supports** (YouTube, 11 min)  
   *Search YouTube for "PrusaSlicer 2.3 paint on supports" — shows how to draw supports only where you need them.*

3. **PrusaSlicer: In-Depth Tutorial (36 min)** — see Lesson 0.6 references  
   *Watch the sections on supports, orientation, and layer preview.*

4. **Prusa Knowledge Base: Support Material**  
   [https://help.prusa3d.com/category/prusaslicer_204](https://help.prusa3d.com/category/prusaslicer_204)  
   *Official Prusa documentation on support types, interface layers, and tree supports.*

5. **3D Printing Design Tips — Markforged** (orientation for strength)  
   [https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips](https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips)  
   *Covers print orientation for strength, the anisotropy of FDM parts, and when to split a model.*

6. **Introduction to FDM 3D Printing — Hubs** (section on supports and warping)  
   [https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/](https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/)  
   *Explains why supports are needed and the design strategies that reduce their use.*

---

## References

Hubs (Protolabs Network). (2023). *What is FDM (fused deposition modeling) 3D printing?* https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/

Markforged. (2021). *3D printing design tips*. https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips

Prusa Research. (2023). *PrusaSlicer knowledge base*. https://help.prusa3d.com/category/prusaslicer_204

UAS@UCLA. (2024). *Prusa slicer*. https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer
