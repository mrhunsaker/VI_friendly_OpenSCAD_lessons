# Slicing Settings Quick Reference — Cura / Anycubic i3 Mega

---

## Recommended Settings by Use Case

| Use Case | Layer Height | Infill | Supports | Notes |
| ---------- | ------------ | -------- | ---------- | ------- |
| Quick test / prototype | 0.30 mm | 10% | As needed | "Draft" — fastest, roughest |
| Standard project | 0.20 mm | 15–20% | As needed | Best all-around starting point |
| Functional part | 0.20 mm | 30–40% | As needed | Use for parts under stress |
| Fine detail / display | 0.15 mm | 15% | As needed | Smoother surface; slower |
| Solid reference part | 0.20 mm | 40–50% | Rarely | Rarely needed; long print |

---

## Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp | Notes |
| --------- | ------------ | --------- | ------- |
| PLA | 200–210°C | 50–60°C | Easiest to print; Anycubic default |
| PETG | 230–240°C | 70–80°C | Use painter's tape on steel bed |
| TPU | 220–235°C | 30–50°C | Reduced speed recommended (25–30 mm/s) |
| ABS | 240–250°C | 100–110°C | Requires ventilation; enclosed chamber recommended |

*Always check the temperature range on your filament spool — it may vary by brand.*

---

## Support Settings Guide

| Overhang Angle | Supports Needed? | Recommended Setting |
| --------------- | ----------------- | ------------------- |
| < 45° | No | None |
| 45°–60° | Maybe | Preview first; add if sagging |
| > 60° | Yes | Tree supports (Cura) recommended for easier removal |
| Bridge < 20 mm | No | Bridges usually fine |
| Bridge > 20 mm | Maybe | Preview; consider reorienting |

---

## Common Print Problems & Quick Fixes

| Problem | Likely Cause | Fix |
| --------- | ------------- | ----- |
| Print not adhering to steel bed | Poor bed leveling / tape worn | Re-level nozzle; refresh painter's tape |
| Filament oozing on travel | Temperature too high | Lower temp 5°C; check Z-hop setting |
| Rough bottom layer | Bed too close | Use leveling knob to adjust distance |
| Print takes too long | Layer height too thin / infill too high | Use 0.30mm draft; reduce infill to 10% |
| Holes too small | FDM tolerance — always undersized | Add 0.2–0.3mm to hole diameter |
| Part broke at layer boundary | Weak axis perpendicular to layers | Reorient so load is parallel to layers |
| Clogs at nozzle | Moisture in filament / debris | Dry filament; clean nozzle with needle |
| Spaghetti / complete failure | Bed not leveled or supports missed | Run leveling; add supports or reorient |

---

## G-code Export Checklist (Cura)

Before exporting, confirm:

- [ ] Anycubic i3 Mega printer profile selected
- [ ] Correct filament type and diameter (1.75 mm)
- [ ] Layer height appropriate for use case
- [ ] Infill percentage set
- [ ] Supports enabled if needed (tree supports preferred)
- [ ] Nozzle and bed temperature set correctly
- [ ] Print preview checked (no floating parts)
- [ ] Estimated time and filament weight noted

---

## Sources

Anycubic. (2024). *Anycubic i3 Mega official documentation*. [https://www.anycubic.com/](https://www.anycubic.com/)  
Ultimaker. (2024). *Cura slicing software guide*. [https://ultimaker.com/software/ultimaker-cura](https://ultimaker.com/software/ultimaker-cura)  
Teaching Tech. (2024). *3D printer calibration guide*. [https://www.youtube.com/@TeachingTech](https://www.youtube.com/@TeachingTech)
