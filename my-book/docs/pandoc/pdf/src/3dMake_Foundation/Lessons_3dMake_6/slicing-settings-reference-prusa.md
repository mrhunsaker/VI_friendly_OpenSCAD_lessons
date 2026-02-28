# Slicing Settings Quick Reference - PrusaSlicer {#3dmake_foundation_lessons_3dmake_6-slicing-settings-reference-prusa}

## Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                          |
|------------------------|--------------|--------|-----------|--------------------------------|
| Quick test / prototype | 0.30 mm      | 10%    | As needed | "Draft" - fastest, roughest    |
| Standard project       | 0.20 mm      | 15-20% | As needed | Best all-around starting point |
| Functional part        | 0.20 mm      | 30-40% | As needed | Use for parts under stress     |
| Fine detail / display  | 0.15 mm      | 15%    | As needed | Smoother surface; slower       |
| Solid reference part   | 0.20 mm      | 40-50% | Rarely    | Rarely needed; long print      |

## Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp | Notes                                      |
|----------|-------------|----------|--------------------------------------------|
| PLA      | 200-215C    | 50-60C   | Easiest to print; default choice           |
| PETG     | 230-250C    | 70-85C   | Use glue stick on PEI bed                  |
| TPU      | 220-240C    | 30-60C   | Print at 20-30 mm/s max; direct drive only |
| ABS      | 230-250C    | 90-110C  | Requires enclosure; more fumes             |

*Always check the temperature range on your filament spool - it may vary by brand.*

## Support Settings Guide

| Overhang Angle | Supports Needed? | Recommended Setting           |
|----------------|------------------|-------------------------------|
| < 45           | No               | None                          |
| 45-60          | Maybe            | Preview first; add if sagging |
| > 60           | Yes              | Support on build plate only   |
| Bridge < 20 mm | No               | Bridges usually fine          |
| Bridge > 20 mm | Maybe            | Preview; consider reorienting |

## Common Print Problems & Quick Fixes

| Problem                      | Likely Cause                            | Fix                                      |
|------------------------------|-----------------------------------------|------------------------------------------|
| Print lifts off bed          | Poor adhesion / warping                 | Add brim; use glue stick; level bed      |
| Stringing between parts      | Temperature too high / retraction       | Lower temp 5C; check retraction settings |
| Layer lines very visible     | Layer height too thick                  | Use 0.15mm or 0.20mm                     |
| Print takes too long         | Layer height too thin / infill too high | Use 0.30mm draft; reduce infill          |
| Holes too small              | FDM tolerance - always undersized       | Add 0.2-0.3mm to hole diameter           |
| Part broke at layer boundary | Weak axis perpendicular to layers       | Reorient so load is parallel to layers   |
| First layer not sticking     | Bed not level                           | Run bed leveling routine                 |
| Spaghetti / print failure    | No supports on overhang                 | Add supports or reorient                 |

## G-code Export Checklist

Before exporting, confirm:

- [ ] Correct printer profile selected
- [ ] Correct filament profile selected
- [ ] Layer height appropriate for use case
- [ ] Infill percentage set
- [ ] Supports enabled if needed
- [ ] Layer preview reviewed (no floating parts, supports where needed)
- [ ] Print time and filament weight noted for your records

## Sources

Prusa Research. (2023). *PrusaSlicer knowledge base*. [https://help.prusa3d.com/category/prusaslicer_204](https://help.prusa3d.com/category/prusaslicer_204)  
Hubs. (2023). *What is FDM 3D printing?* [https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/](https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/)  
ThePrusaSlicer.net. (2025). *How to use PrusaSlicer*. [https://theprusaslicer.net/how-to-use-prusaslicer/](https://theprusaslicer.net/how-to-use-prusaslicer/)
