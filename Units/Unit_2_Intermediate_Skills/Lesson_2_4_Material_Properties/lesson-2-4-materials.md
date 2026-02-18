# Lesson 2.4: Material Properties — PLA, PETG, and TPU

**Unit:** 2 — Intermediate Skills  
**Duration:** 1 class period (50–60 min)  
**Prerequisite:** Lessons 0.1 (Safety) and 0.6 (Slicing)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Compare the physical properties of PLA, PETG, and TPU
- Choose an appropriate filament material for a given design application
- Explain how printing settings change when switching materials
- Describe the safety considerations specific to each material

---

## Why Material Choice Matters

Most projects in this class use **PLA** — and for good reason. It's the easiest, cheapest, and lowest-emission option. But knowing about other materials helps you:

1. Understand why PLA sometimes isn't enough (projects that need flexibility, outdoor use, or higher strength)
2. Prepare for Project 1.3 (the Exploring Textures project), which requires flexible filament (TPU)
3. Make informed material recommendations in professional or stakeholder contexts

---

## The Three Materials

### PLA — Polylactic Acid

PLA is the standard starting point for FDM printing. It is bio-derived (from corn starch or sugarcane) and relatively low-emission.

| Property | Value |
|---------|-------|
| Print temperature | 190–220°C |
| Bed temperature | 50–60°C (often not required) |
| Strength | High rigidity; brittle under impact |
| Heat resistance | Low (~60°C; softens in a hot car) |
| Flexibility | None — snaps under bending |
| Ease of printing | Very easy — best for beginners |
| Relative cost | Low ($15–25 / kg) |
| Safety | Lowest emission of common filaments |

**Best for:** Prototypes, classroom projects, decorative models, anything that won't be exposed to heat or heavy stress.

**Not good for:** Parts that need to flex, parts used outdoors long-term, or anything that will get hot.

---

### PETG — Polyethylene Terephthalate Glycol-Modified

PETG is described as combining the ease of PLA with the toughness of ABS. It's more durable and heat-resistant than PLA, with less emission concern than ABS.

| Property | Value |
|---------|-------|
| Print temperature | 230–250°C |
| Bed temperature | 70–85°C |
| Strength | High; more impact-resistant than PLA |
| Heat resistance | Better (~80°C) |
| Flexibility | Slight; less brittle than PLA |
| Ease of printing | Moderate — prone to stringing |
| Relative cost | Low–medium ($15–30 / kg) |
| Safety | Low emission; considered food-safe by many |

**Best for:** Functional parts, mechanical components, parts that need moderate durability or water resistance.

**Not good for:** Very fine detail (it strings slightly), and it sticks aggressively to smooth PEI beds (use a release agent).

---

### TPU — Thermoplastic Polyurethane

TPU is a **flexible filament** — it bends, stretches, and returns to its shape like rubber. It's used for phone cases, wearables, gaskets, and anything that needs to absorb impacts.

| Property | Value |
|---------|-------|
| Print temperature | 220–240°C |
| Bed temperature | 30–60°C |
| Strength | Excellent elasticity; resists tearing |
| Heat resistance | Moderate |
| Flexibility | Very high — rubber-like |
| Ease of printing | Difficult — requires slow speeds, direct drive extruder |
| Relative cost | Medium–high ($20–40 / kg) |
| Safety | Produces more fumes than PLA; ventilate well |

**Best for:** Phone cases, bumpers, tactile elements, wearable objects, anything that needs to flex or absorb vibration.

**Not good for:** Fine detail models, beginners without experience, Bowden extruder setups.

> **Note for this class:** Project 1.3 (Exploring Textures) requires TPU. Read this section carefully before attempting that project. Print TPU at very low speeds (20–30 mm/s) and ensure ventilation.

---

## Side-by-Side Comparison

| Property | PLA | PETG | TPU |
|---------|-----|------|-----|
| Difficulty | ⭐ Easy | ⭐⭐ Moderate | ⭐⭐⭐ Hard |
| Rigidity | High | Medium | None (flexible) |
| Impact resistance | Low | Medium | High |
| Heat resistance | Low | Medium | Medium |
| Flexibility | None | Slight | Very high |
| Emission concern | Lowest | Low | Moderate |
| Recommended for beginners? | Yes | After PLA | After experience |

---

## Changing Slicer Settings for Different Materials

PrusaSlicer has **filament profiles** for each material — these automatically adjust temperature, cooling, and speed. Always:

1. Change the **filament profile** in the right panel before slicing
2. Verify the temperatures shown match your filament's specifications (check the spool label)
3. For TPU, manually lower print speed to 20–30 mm/s

---

## Hands-On Exploration (If Samples Available)

If your instructor has sample prints in PLA, PETG, and TPU:

1. Hold each sample and try to bend it. Note the flexibility.
2. Try to scratch the surface with a fingernail. Note hardness.
3. Describe the surface texture (matte, glossy, rubbery).

| Material | Flexibility | Surface | Notes |
|---------|------------|---------|-------|
| PLA | | | |
| PETG | | | |
| TPU | | | |

---

## Video Resources

1. **3D Printing Filament Types Explained — All3DP**  
   [https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/](https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/)  
   *Comprehensive guide to all common filament types, their properties, and when to use them.*

2. **3D Printing Filament Guide: PLA, TPU, PETG, ABS Compared — Makers101**  
   [https://makers101.com/3d-printing-filament-guide/](https://makers101.com/3d-printing-filament-guide/)  
   *Real-world testing data, print settings, and a quick-reference table for the five most common filaments.*

3. **Filament Comparison Guide — MatterHackers**  
   [https://www.matterhackers.com/3d-printer-filament-compare](https://www.matterhackers.com/3d-printer-filament-compare)  
   *Interactive comparison table covering PLA, ABS, PETG, TPU, and specialty materials.*

4. **PLA vs ABS, PETG, TPU for 3D Printing — The 3D Printer Bee**  
   [https://the3dprinterbee.com/pla-vs-abs-vs-petg-vs-tpu-3d-printing-filament-guide/](https://the3dprinterbee.com/pla-vs-abs-vs-petg-vs-tpu-3d-printing-filament-guide/)  
   *Accessible comparison article written for hobbyists — good for students new to material selection.*

5. **Is PLA Toxic? — QIDI3D** (safety focus)  
   [https://us.qidi3d.com/blogs/news/is-pla-filament-for-3d-printing-toxic](https://us.qidi3d.com/blogs/news/is-pla-filament-for-3d-printing-toxic)  
   *Discusses fume safety for PLA and other materials. Important context for classroom use.*

6. **Bambu Filament Guide** (interactive comparison tool)  
   [https://bambulab.com/en-us/filament/guide](https://bambulab.com/en-us/filament/guide)  
   *Allows you to filter and compare up to four filaments by properties and printing requirements.*

---

## References

All3DP. (2025). *All 3D printing filament types explained — properties, printing & best uses*. https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/

Bambu Lab. (2024). *Filament guide*. https://bambulab.com/en-us/filament/guide

FOW Mould. (2024). *PLA vs TPU: Comparison guide*. https://www.immould.com/pla-vs-tpu/

Makers101. (2025). *3D printing filament guide 2025: PLA, TPU, PETG, ABS, ASA compared*. https://makers101.com/3d-printing-filament-guide/

MatterHackers. (n.d.). *3D printer filament compare*. https://www.matterhackers.com/3d-printer-filament-compare

Sinterit. (2025). *Filament types for 3D printing: PLA, ABS, PETG, TPU & more*. https://sinterit.com/3d-printing-guide/materials-for-3d-printing/filament-types-for-3d-printing/

The 3D Printer Bee. (n.d.). *PLA vs ABS, PETG, TPU for 3D printing: Comparison & guide*. https://the3dprinterbee.com/pla-vs-abs-vs-petg-vs-tpu-3d-printing-filament-guide/
