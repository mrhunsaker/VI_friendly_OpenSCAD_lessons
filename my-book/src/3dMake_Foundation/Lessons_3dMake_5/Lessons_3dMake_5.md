# Lesson 5: Safety Protocols and the Physical Fabrication Interface  {#3dmake_foundation_lessons_3dmake_5-lessons_3dmake_5}

Estimated time}}: 60-90 minutes

Learning Objectives
- Describe the Hierarchy of Controls and apply it to a classroom maker-space[^5][^6]
- Perform pre-print}} environmental and equipment checks[^5]
- Validate the digital-to-physical pipeline and document post-print}} inspection results[^1][^3]

Materials
- Classroom 3D printer}}, enclosure, and filtration (or documented lab SOP)
- Example parametric}} OpenSCAD}} project and slicer profile

Step-by-step Tasks
1. Conduct a safety briefing: review the Hierarchy of Controls and locate safety equipment[^5].
2. Verify environmental controls and printer}} readiness: confirm filtration, bed}} adhesion, and spool metadata[^5][^6].
3. Run `3dm build` and inspect the STL}} in a slicer; check layer}}-preview and non-manifold warnings[^1][^3].
4. If using}} remote submission (OctoPrint), confirm camera monitoring and logging before}} any unattended prints[^5].
5. Obtain instructor sign-off and monitor the first}} layers in-person or via camera.
6. After printing}}, wait for the part}} to cool (< $30^\\circ\\text}}{C}$), measure critical dimensions, and record observations[^5][^6].

Checkpoints
- Completed environmental checklist and saved inspection notes in the project README[^1][^5].

### Introduction to Material Selection

Before your part}} goes to print}}, it's important to understand how material}} choice affects the printing}} process, the final product's properties, and the safety considerations for your workspace.

#### Why Material Choice Matters

Most projects in this class use PLA - and for good reason. It's the easiest, cheapest, and lowest-emission option. But as you}} advance, you}}'ll encounter projects that require different materials:

- A flexible phone case needs TPU (thermoplastic polyurethane)
- A functional bracket that will be outdoors might use PETG (polyethylene terephthalate)
- A decorative miniature works perfectly in PLA

#### Three Common}} Materials: Quick Reference

Each material}} has different print}} temperatures, strength properties, and difficulty levels. Here's a quick comparison:

| Material | Print Temp | Difficulty | Best Uses                                                 | Cautions                                                      |
|----------|------------|------------|-----------------------------------------------------------|---------------------------------------------------------------|
| PLA      | 190-220C   | Easy       | Prototypes, classroom projects, decorative models         | Brittle; low heat resistance; low emission                    |
| PETG     | 230-250C   | Moderate   | Functional parts, mechanical components, water resistance | Stringing issues; requires bed}} heat; more emission than PLA |
| TPU      | 220-240C   | Hard       | Flexible parts, phone cases, gaskets, wearables           | Requires slow speeds; produces more fumes; needs ventilation  |

#### How Material Choice Affects Your Slicer}} Settings

When you}} switch materials, you}} must adjust:
- Nozzle}} Temperature: Too cold and plastic won't extrude; too hot and it burns
- Bed}} Temperature: Helps adhesion; critical for PETG, optional for PLA
- Print Speed: TPU requires very slow speeds (20-30 mm/s) to prevent extrusion problems
- Cooling: PLA benefits from active cooling; TPU does not

Most slicers (like PrusaSlicer) have material}} profiles that automatically set these values. Always verify the temperatures match your filament}}'s specifications (check the spool label).

#### Environmental and Safety Considerations

Different materials produce different levels of emission:
- PLA: Lowest concern; generally safe in ventilated rooms
- PETG: Low emission; still requires good ventilation
- TPU: Moderate to higher emission; requires active ventilation or filtration

Always follow your classroom's safety protocol and consult Appendix B: Material Properties & Selection for a comprehensive reference}} on all available materials, their specifications, and best practices.

#### Looking Ahead: Material and Design}} Decisions

Later in this curriculum, you}}'ll encounter projects that specifically require:
- Flexible materials (Lesson 8: Assembly and Durability)
- High-strength materials (Lesson 10: Quality Assurance and Measurement)
- Multiple-material}} assemblies (Lesson 11: Stakeholder-Centric Design}})

By understanding material}} properties now, you}}'ll be prepared to make informed design}} decisions in those lessons.

## Quiz - Lesson 3dMake.5 (10 questions)

1. What are the four levels of the Hierarchy of Controls[^5]?
2. Name two engineering controls useful for reducing emissions[^5][^6].
3. Why must you}} monitor the first}} layers of a new}} print}} profile[^5]?
4. Where should you}} record spool metadata and print}} observations[^1][^5]?
5. What is the safe cooldown temperature suggested before}} part}} removal[^6]?
6. True or False: Ventilation is only necessary for commercial printing}} facilities.
7. Describe the relationship between}} print}} temperature, material}} type, and emissions.
8. Explain what "spool metadata" includes and why tracking it is important for reproducibility.
9. How would you}} measure and record critical dimensions on a printed part}}?
10. What health and safety precautions should be documented in an SOP for supervised prints?

Extension Problems (10)
1. Draft a one}}-page SOP for start-to-finish supervised prints in your lab[^5][^6].
2. Create a checklist script}} that verifies spool metadata and build}} settings before}} `3dm build` runs[^1].
3. Run a test}} print}} and log measured deviations; propose a parameter}} change to correct the error}}[^3].
4. Design}} an accessible post-print}} inspection checklist that non-visual users can}} follow[^5][^6].
5. Research filtration options and recommend one}} for your classroom, including maintenance intervals[^5][^6].
6. Develop a comprehensive classroom safety and operations manual: SOPs, checklists, emergency procedures, and accessibility}} considerations.
7. Create a print}} quality}} assurance system: define metrics, measurement methods, and acceptance criteria for finished prints.
8. Build a calibration and maintenance log: document all calibration activities, maintenance dates, and performance metrics over time}}.
9. Design}} a student training certification program: define knowledge and skill requirements, create}} assessments, and track competency.
10. Write an operations handbook that covers setup, troubleshooting, safety, maintenance, and accessibility}} for your 3D printing}} facility.

[^6]: 10+ OpenSCAD}} Online Courses for 2026 | Explore Free Courses & Certifications, accessed February 18, 2026, [https://www.classcentral.com/subject/openscad](https://www.classcentral.com/subject/openscad)  

[^1]: STL}} Validation and Geometry Checking - [https://docs.prusa3d.com/en/guide/39012-validation-tools/](https://docs.prusa3d.com/en/guide/39012-validation-tools/)

[^3]: Post-Print Inspection Procedures - [https://www.prusa3d.com/support}}/](https://www.prusa3d.com/support}}/)

[^5]: ANSI/AIHA Z590.3 - Hierarchy of Controls - [https://www.aiha.org/](https://www.aiha.org/)

