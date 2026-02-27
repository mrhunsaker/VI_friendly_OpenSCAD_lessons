# Lesson 5: Safety Protocols and the Physical Fabrication Interface

Estimated time: 90–120 minutes

## Learning Objectives
- Identify and apply the Hierarchy of Controls for 3D printing hazards
- Understand filament-specific hazards and safe material handling
- Follow a safe printer startup, monitoring, and shutdown sequence
- Design parts that are safe to print (minimize supports, overhangs, and VOC-intensive materials)

## Materials
- 3D printer (FDM)
- PLA, PETG, or TPU filament
- Safety checklist (see assets folder)
- Ventilation or enclosure (if using PETG, ABS, or ASA)

## Step-by-step Tasks

### 1. Review the Hierarchy of Controls

The Hierarchy of Controls is a standard safety framework used in occupational health to rank hazard mitigation strategies from most to least effective.[^1] Applied to 3D printing:

| Control Level | Example in 3D Printing |
|---|---|
| **Elimination** | Don't use materials that produce hazardous fumes (e.g., choose PLA over ABS) |
| **Substitution** | Use a low-VOC PETG instead of ABS for a part requiring heat resistance |
| **Engineering Controls** | Install an enclosure with active filtration; use a HEPA filter |
| **Administrative Controls** | Post material-specific operating procedures; require instructor sign-off |
| **PPE** | Wear nitrile gloves when handling uncured resin; use respirator if enclosure is unavailable |

The most effective controls reduce or eliminate the hazard at the source. PPE is the least effective because it relies on consistent human behavior.

### 2. Understand Filament-Specific Hazards

| Filament | Print Temp (°C) | Bed Temp (°C) | Key Hazards | Ventilation Required? |
|---|---|---|---|---|
| PLA | 200–215 | 0–60 | Minimal; slight sweet smell | No (recommended) |
| PETG | 230–250 | 70–90 | Low VOC, slight odor | Yes (moderate) |
| TPU | 220–240 | 30–60 | Low VOC | Yes (moderate) |
| ABS | 230–260 | 100–110 | Styrene fumes (potentially harmful) | Yes (required + enclosure) |
| ASA | 240–260 | 100–110 | Similar to ABS | Yes (required + enclosure) |
| Resin (SLA) | N/A | N/A | Skin/eye irritant; VOCs | Required + gloves |

PLA is the safest classroom filament. ABS and resin require active ventilation and enclosures.[^2]

### 3. Safe Printer Startup Sequence

Follow this sequence every time you start a print:

1. **Visual inspection** — No filament tangles; bed is clear; no debris on nozzle
2. **Bed leveling check** — Run manual or automatic leveling if the printer has been moved
3. **Filament loaded and feeding** — Manually extrude 10–20 mm to confirm clean flow
4. **Slicer preview** — Verify layer preview shows expected geometry before sending G-code [^4]
5. **First layer observation** — Watch the first 2–3 layers to confirm adhesion
6. **Never leave unattended during the first layer** — Most failures occur in the first 10 minutes

### 4. Monitoring and Intervention

During a print:
- Check in every 15–30 minutes for long prints
- Watch for: spaghetti (filament not adhering), layer shifts, nozzle clogs (clicking extruder), or smoke
- **Smoke = stop immediately**: turn off the printer, do not restart until the cause is identified
- Use OctoPrint or built-in camera monitoring if available for remote observation

### 5. Safe Shutdown and Part Removal

1. Wait until the print is complete and the nozzle has cooled to < 50°C
2. Wait until the bed has cooled to < 30°C before removing the part — hot beds can warp thin parts
3. Use a spatula or palette knife to remove parts; never force them off with bare hands
4. Store filament in a sealed bag with desiccant to prevent moisture absorption

### 6. Design for Safety

Good design reduces printing risk:
- **Minimize supports** — Parts that need > 50% support coverage may jam the nozzle when support material tangles
- **Stay within bed size** — Parts larger than the print bed require splitting and bonding
- **Avoid ABS when PLA or PETG will work** — Select the safest material that meets mechanical requirements
- **Print test coupons first** — A small test piece (5% of full size) catches problems before wasting a long print

### Checkpoint
- After step 2: You can match each filament type to its required ventilation level.
- After step 3: You have completed at least one printer startup using the six-step sequence.
- After step 6: Your latest model has been evaluated for support minimization.

## Printability-Focused Design Guidelines

```openscad
// Design with printability in mind from the start
// Rule: any overhang > 45 degrees from vertical needs supports
// Rule: minimum wall thickness for FDM = 0.8mm (2x nozzle width for 0.4mm nozzle)
// Rule: minimum hole diameter = 2mm (smaller holes may not print accurately)
// Rule: add 0.15-0.20mm clearance between mating parts

wall_min = 1.2;        // safe minimum for 0.4mm nozzle: 3x nozzle width
hole_min_r = 1.5;      // 3mm diameter minimum for reliable hole printing
clearance = 0.2;       // fitting clearance between mating faces

module printable_box(w, d, h) {
  wall = max(wall_min, w * 0.05);  // at least 5% of width, minimum 1.2mm
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open top
  }
}

printable_box(50, 40, 30);
```

## Quiz — Lesson 3dMake.5 (15 questions)

1. What are the five levels of the Hierarchy of Controls, from most to least effective?
2. Why is Elimination considered the most effective control?
3. What filament requires an enclosure with active ventilation and is NOT recommended for open classrooms?
4. At what bed temperature should you wait before removing a print?
5. What should you do immediately if you see smoke from your 3D printer?
6. Why is PLA considered the safest classroom filament?
7. What is the minimum wall thickness for a 0.4 mm nozzle, and why does this minimum exist?
8. What is the purpose of desiccant when storing filament?
9. True or False: It is safe to leave a 3D printer unattended during the first layer.
10. What does "spaghetti" mean in the context of a 3D printing failure?
11. What is the OSHA Hierarchy of Controls, and how does it differ from simply requiring PPE?[^1]
12. What are the specific hazards associated with resin (SLA/MSLA) printing that differ from FDM?
13. What is the bed temperature recommendation for PETG, and why is this higher than PLA?
14. Explain why minimizing supports in your design is a safety consideration, not just a time-saving one.
15. Describe one engineering control and one administrative control you could implement in a classroom 3D printing lab.

## Extension Problems (15)

1. Create a material selection flowchart: given mechanical requirements (heat resistance, flexibility, strength), the chart guides the user to the safest filament that meets requirements.
2. Conduct a ventilation audit of your classroom or makerspace. Document air exchange rates, window proximity, and filter types. Write a one-page recommendation.
3. Write a standard operating procedure (SOP) for ABS printing in a classroom. Include pre-print checks, monitoring requirements, and shutdown procedures.
4. Design a "first layer test tile" that is 10 cm × 10 cm × 0.4 mm. Print it and assess adhesion quality. Document what you observe.
5. Build a parametric filament moisture indicator holder in OpenSCAD: a box that holds a humidity indicator card inside a filament storage bag.
6. Research OSHA's published guidance on 3D printing VOC exposure. Summarize the key recommendations for occupational settings. Cite the specific OSHA or NIOSH publication.[^1][^3]
7. Compare the safety data sheets (SDS) for PLA and ABS filament from two manufacturers. Document the differences in recommended ventilation and exposure limits.
8. Design a printer enclosure in OpenSCAD. Key requirements: four walls, a door opening, a top panel with a vent hole. Make all dimensions parametric.
9. Create a classroom safety poster (on paper or digitally) covering the five most important 3D printing safety rules, using the Hierarchy of Controls as a framework.
10. Write a short (one-page) risk assessment for a new classroom printer purchase. Consider: filament type, ventilation, fire suppression, and student training.
11. Design and print a filament storage clip: a parametric clip that holds a loose end of filament to a spool. Make the clip diameter a parameter.
12. Build a "print monitoring checklist" as a paper form. Columns: time, nozzle temp, bed temp, layer number, observations, action taken.
13. Research the difference between particle emissions and volatile organic compound (VOC) emissions in FDM printing. Which is more hazardous at typical classroom distances? Cite your sources.[^3]
14. Design a parametric spatula guard in OpenSCAD: a thin safety bumper that clips to the edge of a build plate to prevent the spatula from slipping. Make the plate thickness a parameter.
15. Write a "near-miss" incident report for a hypothetical 3D printing incident (e.g., a student touched a hot nozzle). Use a standard incident report format: what happened, contributing factors, corrective actions.

## References and Helpful Resources

[^1]: OSHA Hierarchy of Controls — Occupational Safety and Health Administration. [https://www.osha.gov/hierarchy-of-controls](https://www.osha.gov/hierarchy-of-controls). Also see NIOSH's explanation: [https://www.cdc.gov/niosh/topics/hierarchy/default.html](https://www.cdc.gov/niosh/topics/hierarchy/default.html)

[^2]: Filament Safety Properties — UL Research Institutes: Characterization of Particles and Gases from Common 3D Printing Filaments. [https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study](https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study)

[^3]: NIOSH Science Blog — Health and Safety Considerations for 3D Printing. [https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/](https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/)

[^4]: PrusaSlicer Documentation — Layer and Print Settings. [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)

### Supplemental Resources

- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
- [OpenSCAD User Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual) — Parametric design for printable parts
- [Safety Checklist](../../assets/3dMake_Foundation/safety_checklist.md) — Classroom printer safety checklist asset
- [Filament Comparison Table](../../assets/3dMake_Foundation/filament-comparison-table.md) — Filament properties reference
