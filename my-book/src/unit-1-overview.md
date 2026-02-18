# Unit 1: Designing to Spec
**Duration:** 3 weeks  
**Driving Question:** How do you design an object that reliably solves a specific, measurable problem?

---

## Unit Summary
Unit 1 moves students from reproducing existing objects to designing original ones. The core shift is learning to work *from requirements* — starting with what an object must do, then making design decisions that serve those functions. Students also learn parametric design, which makes their code reusable and easier to iterate. The unit culminates in Project 1, where students design a tactile floor marker for a real use case.

---

## Lessons

### Lesson 1.1 — Parametric Design in OpenSCAD
**Objective:** Students can write OpenSCAD code using variables and modules so that designs can be easily adjusted.

**Topics:**
- Why parametric design matters: change one value, update the whole object
- Declaring variables: `width = 70;` and referencing them in shapes
- Writing modules: `module myShape(x, y, z) { ... }`
- Calling modules with different values to generate variations

**Activity:** Students take their Project 0 hardcoded cube and rewrite it as a parametric module. They then generate three different-sized versions by changing only the variables, and render all three side-by-side using `translate()`.

**Vocabulary:** variable, module, parameter, parametric design

---

### Lesson 1.2 — Functional Requirements
**Objective:** Students can translate a real-world need into a list of measurable functional requirements.

**Topics:**
- What is a functional requirement? (what it must *do*, not what it must *look like*)
- The difference between constraints (fixed limits) and requirements (performance goals)
- How to test a requirement: "How would I know if this passed or failed?"
- Examples: "Fits a command strip" → must be between 68–72mm wide

**Activity:** Present 3 everyday objects (a water bottle, a phone stand, a pencil holder). Students write 3–5 functional requirements for each object, then compare with a partner. Class discussion: which requirements are measurable? Which are vague?

**Vocabulary:** functional requirement, constraint, specification, iteration

---

### Lesson 1.3 — Iteration and the Design Loop
**Objective:** Students understand that design is a cycle, not a single attempt, and can apply a build-test-revise process.

**Topics:**
- Why first designs almost always fail some requirement
- The design loop: Plan → Build → Test → Revise
- Documenting iterations: what changed and why
- Real examples: show v1 vs v2 vs v3 of the Project 0 floor marker

**Activity:** Rapid paper prototype exercise. Students are given a functional requirement ("hold 5 pencils upright on a desk") and must sketch, build a paper/tape prototype, test it against the requirement, and propose one revision — all in 20 minutes. No 3D printing yet: the goal is internalizing the loop.

---

### Lesson 1.4 — Tolerances in Practice
**Objective:** Students can design two interlocking parts with an appropriate tolerance gap and explain why it is needed.

**Topics:**
- Review: what tolerance means
- Why printed dimensions are never exactly as specified (shrinkage, layer size)
- Common tolerance gaps for FDM: 0.1mm (tight), 0.2mm (standard), 0.4mm (loose)
- How to build tolerance into OpenSCAD: adding/subtracting from dimensions in `difference()`

**Activity:** Students print two versions of a simple slot-and-tab joint — one with 0.1mm gap, one with 0.3mm gap — and test which fits. They record results and apply the learning to their Project 1 design if relevant.

---

### Project 1 — Tactile Floor Marker
*See `Projects/Project_1/project_1_briefing.txt` and `project_1_documentation_template.txt`*

Students design an improved tactile floor marker for the production studio. The marker must meet all five functional requirements in the briefing. Students document their design process through at least two iterations.

**Assessment:** 0–9 point rubric (see rubric section below).

---

## Rubric

| Category | 3 pts | 2 pts | 1 pt | 0 pts |
|---|---|---|---|---|
| **Function** | Meets all functional requirements | Meets most requirements with minor gaps | Meets some requirements | Does not meet functional requirements |
| **Design Quality** | Parametric OpenSCAD code, clean and intentional; print is well-executed | Mostly parametric, minor issues with code or print | Hardcoded or messy code; print has quality issues | Code does not work or print failed |
| **Documentation** | All sections complete, measurements accurate, reflections are thoughtful and specific | Most sections complete, reflections somewhat general | Some sections missing or very brief | Documentation not submitted or incomplete |

---

## Materials Needed
- Prusa Mini+ printer
- PLA filament
- Velcro command strips (2–3 per student for prototyping + 1 for final)
- Digital calipers
- Computers with OpenSCAD and PrusaSlicer

---

## Key Vocabulary for the Unit
| Term | Definition |
|---|---|
| Variable | A named value in code that can be changed in one place to update the whole design |
| Module | A reusable block of OpenSCAD code that generates a shape |
| Functional requirement | A statement of what an object must do, written so it can be tested |
| Constraint | A fixed limit the design must work within |
| Iteration | A version of a design; iterating means making a revised version based on testing |
| Tolerance | The intentional gap built into a design to account for printing variation |

---

## Teacher Notes
- Lesson 1.2 is a pivotal lesson — students who understand functional requirements write much better documentation throughout the rest of the course. Take time here.
- The paper prototype activity in Lesson 1.3 often surprises students; many resist non-digital work. Emphasize that the fastest way to test an idea is the cheapest material available.
- For Project 1, encourage students to print a small test piece (just the cross-section) before printing the full marker — it saves filament and time when iterating on tolerance or profile shape.
- Students may want to make the marker purely aesthetic. Redirect them back to the functional requirements, especially "does not impede travel" — this is a good constraint that naturally limits how tall or wide the object can be.
