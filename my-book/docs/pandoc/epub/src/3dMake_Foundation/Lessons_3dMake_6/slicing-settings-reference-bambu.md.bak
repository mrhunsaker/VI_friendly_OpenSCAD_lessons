# Slicing Settings Quick Reference - Bambu Studio / X1 Series {#3dmake_foundation_lessons_3dmake_6-slicing-settings-reference-bambu}

## Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                                    |
|------------------------|--------------|--------|-----------|------------------------------------------|
| Quick test / prototype | 0.30 mm      | 10%    | As needed | "Draft" - fastest; use standard mode     |
| Standard project       | 0.20 mm      | 15-20% | As needed | Best all-around; Bambu default-optimized |
| Functional part        | 0.20 mm      | 30-40% | As needed | Use for load-bearing parts               |
| Fine detail / display  | 0.15 mm      | 15%    | As needed | Bambu achieves excellent detail at speed |
| Solid reference part   | 0.20 mm      | 40-50% | Rarely    | Rarely needed; modern infill sufficient  |

## Filament Temperature Settings

| Filament       | Nozzle Temp | Bed Temp | Notes                                              |
|----------------|-------------|----------|----------------------------------------------------|
| PLA (standard) | 200-210C    | 50-60C   | Fastest print times; Bambu-optimized profiles      |
| PETG           | 230-250C    | 70-80C   | Slight cooling fan reduction for layer adhesion    |
| TPU            | 220-240C    | 20-30C   | Best quality with Bambu's tuned retraction         |
| ABS            | 240-260C    | 100-110C | Requires chamber heating; enclosed AMS recommended |

*Check Bambu's material database for exact profile updates - these are dynamically optimized.*

## Support Settings Guide

| Overhang Angle | Supports Needed? | Recommended Setting                            |
|----------------|------------------|------------------------------------------------|
| < 45           | No               | None                                           |
| 45-60          | Maybe            | Auto-supports may activate; accept defaults    |
| > 60           | Yes              | Bambu auto-tree supports; minimal removal      |
| Bridge < 20 mm | No               | Bridges excellent on Bambu; no supports needed |
| Bridge > 20 mm | Maybe            | Often bridgeable; preview before confirming    |

## Common Print Problems & Quick Fixes

| Problem                         | Likely Cause                      | Fix                                       |
|---------------------------------|-----------------------------------|-------------------------------------------|
| Nozzle clogging mid-print       | Thermal runaway / wet filament    | Dry filament in AMS; check nozzle temp    |
| Layer splitting or separation   | Wrong material in AMS slot        | Verify correct material in Bambu Studio   |
| Stringing / blobbing            | Cooling fan reduced too much      | Increase cooling; adjust material profile |
| Print lifts off bed             | Rare on Bambu; bed leveling drift | Auto-calibrate via Bambu Studio           |
| Holes undersized                | FDM tolerance - always undersized | Add 0.3-0.4mm to hole diameter            |
| Part broke at layer boundary    | Weak axis perpendicular to layers | Reorient so load is parallel to layers    |
| Print aborts unexpectedly       | AMS issue / filament jam          | Clear AMS; verify filament path is smooth |
| Multi-material print misaligned | Nozzle offset miscalibration      | Run auto-calibration in maintenance menu  |

## G-code Export Checklist (Bambu Studio)

Before starting print, confirm:

- [ ] Correct printer (X1 / X1E) and hotend selected
- [ ] Filament material and color match actual AMS configuration
- [ ] Layer height optimal for desired quality
- [ ] Infill and supports enabled/disabled appropriately
- [ ] Print preview shows correct color layering (if multi-material)
- [ ] Estimated time and filament weight acceptable
- [ ] Camera enabled for remote monitoring
- [ ] Web upload or USB export ready

## Sources

Bambu Lab. (2024). *Bambu Studio documentation & material profiles*. [https://bambulab.com/en/download](https://bambulab.com/en/download)  
Bambu Lab Community. (2024). *Forum & troubleshooting guides*. [https://community.bambulab.com/](https://community.bambulab.com/)  
Luke's Lab. (2024). *Bambu Lab deep-dives & calibration tutorials*. [https://www.youtube.com/@LukesBlab](https://www.youtube.com/@LukesBlab)
