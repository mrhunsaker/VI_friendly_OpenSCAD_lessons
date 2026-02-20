# Project 3: Beaded Jewelry — OpenSCAD Design 

**Accessibility:** When including images or diagrams, add short alt-text and provide a comment-based walkthrough for any `.scad` examples so screen-reader users can follow the design steps.

**Unit:** 3 — Open-Ended Projects
**Estimated Duration:** 1 week (self-paced: plan milestones below)
**Deliverables due:** End of week (see milestones)

---

## Project Brief

Design and produce a wearable beaded jewelry piece that includes at least eight 3D-printed beads generated in OpenSCAD. Your design must use two distinct parametric bead modules and combine them into a completed, wearable piece (necklace, bracelet, or similar).

### Constraints (must follow)

- Your prototype must include a 3D-printed component designed in OpenSCAD.
- Code your project in a single `.scad` file that parameterizes bead shapes for repeatability.
- Use at least two different bead shapes in the final assembly.
- The final piece must be wearable and assembled — not just a set of loose beads.

---

## Learning Objectives

- Create parametric OpenSCAD modules for repeated geometry
- Combine modular parts into a coherent assembled object
- Document design decisions and printing notes for reproducibility
- Evaluate designs against measurable functional requirements

---

## Step‑by‑Step Milestones 

1. Project setup (Day 1)
  - Read this briefing and the Unit 3 lessons.
  - Create a folder for your project and initialize a short Design Notes document.
2. Bead module development (Days 1–2)
  - Implement `bead_A(size, detail)` and `bead_B(size, detail)` parametric modules.
  - Test-print a single bead from each module; record optimal print temperature/bed settings.
3. Assembly and iteration (Days 3–4)
  - Create an assembly script that arranges at least 8 beads and tests fit/tolerances.
  - Iterate bead hole diameter and test-strung spacing until beads slide but do not fall off.
4. Final prototype & documentation (Day 5)
  - Print final beads, assemble the piece, photograph the result, and prepare the deliverables.

---

## Deliverables

Submit both digitally and physically as instructed:

- `.scad` file containing parametric bead modules and the assembly script
- `.stl` files (exported as needed) for printed parts
- Technical documentation (Google Drive link or similar) including:
  - Design Notes (ideas, measurements, param values)
  - Construction / 3D printing notes (temperatures, speeds, supports)
  - Photos of final prototype (multiple views)
- Physical turn-in: one assembled piece (if required by instructor)

---

## Functional Requirements (examples — adapt to your design)

- The bead module must allow a hole diameter adjustable in 0.1 mm increments between 2.0–4.0 mm.
- The assembly must include at least 8 beads and remain wearable (fits comfortably on intended body part).
- The OpenSCAD file must be parameterized such that changing a single `scale` parameter adjusts bead size consistently.
- The assembled piece must not have sharp edges that would injure skin under normal use.

---

## Grading Rubric (simplified, 0–9 scale)

- Implementation & parametric code: 3 points
- Functionality & wearability: 3 points
- Documentation & print notes: 2 points
- Presentation & photos: 1 point

---

## Quiz — Project 3: Beaded Jewelry (10 questions)

1. Why use parametric modules for repeated parts? (one sentence)
2. What is a reliable way to test a bead hole for a given cord diameter?
3. Name two OpenSCAD functions or techniques useful for repeating geometry.
4. What printing setting is most likely to affect hole diameter accuracy?
5. How would you document an iteration that changed hole diameter from 2.5 mm to 2.7 mm?
6. True/False: Once your first bead prints successfully, all subsequent iterations will print exactly the same. (Answer: False — each print can vary due to temperature, humidity, and material batch differences)
7. Short answer: Explain what "wearability" means for a jewelry design. What are two specific checks you would perform to confirm a necklace is comfortable to wear?
8. Practical scenario: Your bead design uses a 3 mm hole diameter. When you string it on a cord, it's too tight and won't slide. What are two possible solutions you could implement in OpenSCAD to fix this?
9. Multiple choice: When documenting your design for reproducibility, what should you record? (A) Final bead dimensions only (B) All design iterations, parameter changes, and failed attempts (C) Just the successful version — Answer: B
10. Reflection: Describe how the iterative design process (design → print → test → modify) applies specifically to creating a functional wearable. Why is rapid testing and documentation critical for jewelry design?

Answer key (instructor use):
1. To allow repeatable, adjustable geometry and quick global changes.
2. Print a small tolerance test piece and measure fit; record results.
3. `for()` loops, `module` parameters, `translate()` and `rotate()`; `scale()`.
4. Nozzle diameter and extrusion multiplier; also bridging/cooling.
5. Note the parameter change, reproduce the print settings, measure and record fit, update Design Notes.

---

## Extension Problems (apply project skills)

1. Design an interlocking bead (snap-fit) and describe the tolerances required.
2. Create a parametric clasp module that integrates with your bead string and documents a pass/fail test.
3. Modify one bead to include decorative text or pattern generated procedurally in OpenSCAD.
4. Convert your single `.scad` project into a small library: separate bead modules into include files and demonstrate reuse.
5. Propose a modification to make the piece weather-resistant for outdoor wear (materials, coatings, or geometry).
6. Design and print a complete jewelry set: matching beads, clasp, and string connector with consistent design language.
7. Create a variant generator that produces 10+ different bead designs with single-parameter changes; document aesthetic and functional differences.
8. Build a design system document for your jewelry: modular bead library, material requirements, assembly instructions, and care guide.
9. Investigate material effects: print the same bead in 2+ materials; compare durability, aesthetic, and wearability.
10. Develop a parametric customization guide: enable users to modify size, spacing, color (if multi-material), and aesthetics through top-level variables.

---

## Submission Instructions

Upload your digital deliverables to the course Drive folder and email the instructor with the link; bring the printed prototype to class on the due date.

---

## Accessibility

Provide alt-text for photos and a short written walkthrough of how your `.scad` file generates the bead shapes so screen-reader users can understand the sequence and parameters.

---

## Notes

The attached asset `project_3_briefing.txt` was used as the source. If you want me to also copy the original `.txt` into a `.bak` in the same folder, I can do that — tell me and I'll create an adjacent `.bak` file.
