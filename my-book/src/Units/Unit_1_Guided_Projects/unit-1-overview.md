# Unit 1: Guided Projects

**Duration:** 3–4 weeks
**Driving Question:** How do you design an object that reliably solves a specific, measurable problem?

---

## Unit Summary

Unit 1 moves students from reproducing existing objects (Project 0) to designing original ones. Students take on the role of **Operator**: they are making real design decisions, but within a clearly defined problem space. The projects in this unit have specific, pre-written functional requirements — students learn to design to a spec before they learn to write specs themselves.

---

## Prerequisite for This Unit

Complete all of Unit 0 (Lessons 0.1–0.6 and Project 0).

---

## Projects in This Unit

| Project | Title | Duration |
|---------|-------|---------|
| Project 1 | Tactile Floor Marker | ~2 weeks |
| Project 1.1 | Dice Dice Dice | ~1 week |
| Extensions | Your First Print / Bonus Print | Flexible |

---

## Project 1: Tactile Floor Marker

See `project_1_briefing.txt` and `project_1_documentation_template.txt`.

Students design an improved tactile floor marker for the production studio. The marker must meet all five functional requirements in the briefing. Students document their design process through at least two printed iterations.

**Skills applied from Unit 0:**
- Calipers for measuring the command strip
- OpenSCAD for designing the marker
- PrusaSlicer for slicing and estimating print time
- Safe printer operation

**New skills introduced in this project:**
- Working from functional requirements
- Iterating based on a physical test
- Writing technical documentation through a design process (not just describing a finished object)

---

## Project 1.1: Dice Dice Dice

See `Extensions/dice-dice-dice.md`.

Students design three unique dice in OpenSCAD. Each die must be different. Bonus points if they differ in more than three ways.

**Skills applied:**
- All Unit 0 OpenSCAD skills
- Parametric thinking — designing variations of a similar object efficiently

**New skills introduced:**
- `intersection()` for rounded corners (connect to Lesson 2-4 in the existing scad files)
- Module design for creating multiple dice efficiently

---

## Suggested Lesson Sequence

Because Unit 1 is project-driven, there are no standalone lessons. However, the following skills should be introduced or reviewed at the start of each project:

**Before Project 1:**
- Review functional requirements (what makes a requirement testable?)
- Review calipers (students will need to measure the command strip)
- Introduce the concept of iteration — design, print, test, revise

**Before Project 1.1:**
- Review `intersection()` for rounded shapes
- Introduce modules with parameters (preview of Unit 2 Lesson 2.1)
- Discuss how to organize a file that generates multiple related objects

---

## Rubric

Projects in Unit 1 are graded on the 0–9 point scale from the master rubric. Project 0 remains complete/incomplete only.

---

## Key Vocabulary for This Unit

| Term | Definition |
|------|-----------|
| Functional requirement | A statement of what an object must do, written so it can be tested |
| Constraint | A fixed limit the design must work within |
| Iteration | A revised version of a design, created after testing the previous version |
| Prototype | A test version of a design — not the final product, but a physical test of an idea |
| Technical documentation | Written records of your design process, measurements, decisions, and reflections |

---

## Materials Needed

- Prusa Mini+ printer
- PLA filament
- Velcro command strips (2–3 per student for prototyping, 1 for final product — Project 1)
- Digital or tactile calipers
- Computers with OpenSCAD and PrusaSlicer (or VSCode with task runner)

---

## Teacher Notes

- The most important habit to establish in Project 1 is testing against the functional requirements before calling the project done. Build in an explicit test session where students check each requirement.
- Students often want to jump straight from design to final print. Encourage printing small test sections first (just the cross-section profile, just the attachment area) to save filament and time.
- Project 1.1 (dice) is a good project for building confidence with more creative, less constrained design. Some students find the open-ended nature refreshing; others find it harder than a spec-driven project.
- For students who finish early, the Extension projects (Your First Print, Bonus Print) give additional practice without requiring new concepts.
