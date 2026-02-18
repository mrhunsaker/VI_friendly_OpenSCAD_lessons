# Unit 0: Foundations

**Duration:** 2 weeks
**Driving Question:** How does a 3D printer turn a digital design into a physical object?

---

## Unit Summary

Before students touch a printer, they need a mental model of how the whole system works — from measurement to code to sliced file to printed object. This unit builds that foundation step by step. Every lesson feeds directly into Project 0, which serves as the unit's culminating assessment.

Students complete Unit 0 in the role of **Observer and Learner**: they are absorbing how the system works, building vocabulary, and developing the skills they will apply in Unit 1.

---

## Prerequisite for This Unit

None — this is the starting point for all students.

---

## Lessons in This Unit

| Lesson | Title | Duration |
|--------|-------|---------|
| 0.1 | Safety & Printer Orientation | 1 class period |
| 0.2 | How 3D Printing Works (FDM Fundamentals) | 1 class period |
| 0.3 | Introduction to Calipers | 1–2 class periods |
| 0.4 | Introduction to OpenSCAD — Part 1 | 1–2 class periods |
| 0.5 | Introduction to OpenSCAD — Part 2 | 1–2 class periods |
| 0.6 | Introduction to Slicing with PrusaSlicer | 1 class period |

Followed by: **Project 0 — Measure and Recreate** (the unit assessment)

---

## Learning Progression

Each lesson in Unit 0 builds directly on the previous one and prepares students for Project 0:

- **Lesson 0.1** establishes safe habits before any contact with equipment
- **Lesson 0.2** gives students a mental model of the whole process before they touch any software
- **Lesson 0.3** teaches measurement, which students need to accurately recreate an object
- **Lessons 0.4 and 0.5** teach the OpenSCAD skills needed to write the Project 0 code
- **Lesson 0.6** teaches slicing, the final step before printing

---

## Project 0: Measure and Recreate

See `project_0_briefing.txt` and `project_0_student.txt` in this folder.

Students measure the provided tactile floor marker using calipers, recreate it in OpenSCAD, slice it, and print it. This project is the assessment for Unit 0. It is **complete / incomplete** — no 0–9 point scale. All deliverables must be submitted satisfactorily.

---

## Key Vocabulary for This Unit

| Term | Definition |
|------|-----------|
| FDM | Fused Deposition Modeling — printing by melting and depositing plastic layer by layer |
| Filament | The plastic material fed into the printer |
| Layer height | The thickness of each printed layer; affects quality and print time |
| Infill | The internal structure of a print, expressed as a percentage |
| Slicer | Software that converts a 3D model into printer instructions (G-code) |
| G-code | Machine instructions that tell the printer exactly where to move and at what temperature |
| Caliper | A precision measuring tool accurate to 0.1 mm |
| Primitive | A basic 3D shape in OpenSCAD: cube, sphere, or cylinder |
| Variable | A named value in code that can be changed in one place |
| Boolean operation | A way of combining or subtracting shapes: union, difference, intersection |

---

## Materials Needed for This Unit

- Prusa Mini+ printer (or equivalent FDM printer)
- Digital or tactile calipers (one per student or pair)
- PLA filament
- Computers with OpenSCAD and PrusaSlicer installed (or VSCode with the task runner configured — see the VSCode Setup Guide in Reference Materials)
- 5 small objects for Lesson 0.3 measurement practice (e.g., small blocks, hex nuts, coins, an eraser)
- The Project 0 tactile floor marker physical sample

---

## Teacher Notes

- Complete Lesson 0.1 (safety) before students are near any printer. The safety checklist must be signed before any hands-on work.
- Lesson 0.3 (calipers) can feel tedious but is critical — students who skip careful measurement practice produce inaccurate prints throughout the course.
- For Lessons 0.4 and 0.5, students using VSCode should follow the VSCode Setup Guide to configure their environment before the first coding lesson.
- Lesson 0.6 (slicing) can be done entirely in the slicer software without printing anything. The goal is reading the interface, not producing a print.
- Project 0 should be the student's second print if possible — consider running a very short test print (e.g., a small cube) so students experience the printer before an assignment is attached.
- Lesson 0.2 works well alongside an actual print in progress — if you can run a print while teaching, students can observe the layer-by-layer process in real time.
