# Unit 3: Creative and Aesthetic Design
**Duration:** 2 weeks  
**Driving Question:** How do you design an object that is both functional and beautiful?

---

## Unit Summary
Unit 3 introduces aesthetic intent as a design value alongside function. Students have been designing to spec and for stakeholders — now they design for personal expression within a set of creative constraints. The jewelry project is inherently open-ended in form but structured in requirements (two bead types, parametric modules, wearable result), giving students creative freedom within a clear technical framework. Lessons in this unit also expand material knowledge and surface finishing skills.

---

## Lessons

### Lesson 3.1 — Form and Aesthetics in Fabrication
**Objective:** Students can describe the relationship between form and function and apply at least one aesthetic technique in OpenSCAD.

**Topics:**
- Form vs. function: they are not opposites — good design serves both
- Examples of objects where aesthetics matter (jewelry, furniture, consumer electronics)
- Aesthetic techniques in OpenSCAD:
  - `minkowski()` for rounded/softened edges
  - `hull()` for smooth blended forms
  - Surface texture using subtracted patterns (from Lesson 2.2)
  - Chamfers and bevels using `difference()` with angled shapes
- The concept of visual rhythm: repetition, variation, pattern in 3D form

**Activity:** Students take a plain rectangular block and apply at least two aesthetic modifications using the techniques above. They render before/after screenshots and write two sentences explaining each choice.

**Vocabulary:** form, aesthetic, minkowski, hull, chamfer, bevel, visual rhythm

---

### Lesson 3.2 — Flexible Filament and Material Properties
**Objective:** Students can compare the properties of PLA and flexible filament and make an informed material choice for a given application.

**Topics:**
- Review of PLA: rigid, easy to print, good for structural objects
- TPU/Flex filament: flexible, grippy, more complex to print
  - Slower print speeds required
  - Different retraction settings
  - Stringing behavior and how to minimize it
- When to choose each: rigid vs. flexible, structural vs. wearable
- Slicer settings differences for flex filament

**Activity:** Students print the same simple shape (a small flat disc) in both PLA and flex filament using pre-configured profiles. They compare: flexibility, surface feel, dimensional accuracy, layer adhesion. Results recorded in a comparison table.

---

### Lesson 3.3 — Parametric Modules for Repeated Variety
**Objective:** Students can write two distinct parametric bead modules that produce meaningfully different shapes through parameter changes.

**Topics:**
- Review of modules from Unit 1
- Designing for variety: how to write one module that generates genuinely different-looking beads
- The hole problem: printing a through-hole for stringing — sizing it correctly for cord/wire
- Printing orientation: which way to print a bead for best layer strength and surface quality
- Generating and naming STL files for individual beads

**Activity:** Students write their first bead module (any shape), print one test bead, measure the hole against their cord, and revise if needed before committing to printing all eight.

---

### Lesson 3.4 — Assembly and Finishing
**Objective:** Students can complete a multi-part 3D printed assembly and apply at least one post-processing technique.

**Topics:**
- Post-processing options for PLA: sanding, painting, sealing
- Stringing between beads and how to clean it (trim, heat gun at distance)
- Assembly: threading beads, spacing, knot types for different cord materials
- Testing wearability: does it sit correctly, does it catch on clothing, is the clasp/tie secure?

**Activity:** Students assemble and wear their jewelry piece, then write a one-paragraph wearability assessment. They identify at least one thing they would change in a next iteration.

---

### Project 3 — Beaded Jewelry
*See `Projects/Project_3/project_3_briefing.txt`*

Students design and print a wearable piece of jewelry with at least 8 beads using two distinct parametric bead modules. The piece must be complete, wearable, and assembled.

**Assessment:** 0–9 point rubric (see rubric section below).

---

## Rubric

| Category | 3 pts | 2 pts | 1 pt | 0 pts |
|---|---|---|---|---|
| **Function** | Piece is wearable, beads are well-strung, holes are correctly sized, at least 8 beads present using 2 distinct shapes | Mostly wearable with minor issues (loose beads, tight hole); 8 beads present | Structural issues limit wearability; fewer than 8 beads or only 1 shape | Not wearable or not assembled |
| **Design Quality** | Two distinct parametric modules with meaningful shape variety; aesthetic intent is visible; clean code | Two modules present but similar in form; aesthetic effort visible | One module used for both shapes, or modules are not parametric | Code does not produce required shapes |
| **Documentation** | Design notes explain shape choices and measurements; construction notes cover print settings and assembly; reflection is specific | Most sections present; reflection is general | Sections present but very brief | Documentation not submitted |

---

## Materials Needed
- Prusa Mini+ printer
- PLA filament (multiple colors if possible)
- TPU/flex filament (optional, for students who want to explore)
- Elastic cord, string, or thin wire for stringing beads
- Digital calipers (for measuring hole diameter against cord)
- Sandpaper (220 grit) for post-processing
- Scissors, lighter or heat gun (teacher use only) for trimming stringing

---

## Key Vocabulary for the Unit
| Term | Definition |
|---|---|
| Form | The shape and visual appearance of an object |
| Aesthetics | The visual and tactile qualities of an object beyond pure function |
| Minkowski sum | An OpenSCAD operation that rounds or pads the surface of a shape |
| Hull | An OpenSCAD operation that creates the smallest enclosing shape around a set of objects |
| Chamfer | A beveled edge that softens a sharp corner |
| TPU | Thermoplastic Polyurethane — a common flexible 3D printing filament |
| Post-processing | Steps taken after printing to finish or improve the object (sanding, painting, trimming) |
| Wearability | How comfortable, secure, and practical a piece is when worn |

---

## Teacher Notes
- Lesson 3.1 benefits from having physical examples of both well-designed and purely functional objects to compare. Consumer electronics, kitchen tools, and jewelry are good contrast pairs.
- The hole-sizing issue in Lesson 3.3 catches almost every student the first time. Build in an explicit "print a test bead first" checkpoint before students print all eight.
- Flex filament is genuinely harder to print. If your printer struggles with it, it is fine to keep Unit 3 entirely in PLA — the aesthetic and module goals are achievable without it. Flex works best as an enrichment option.
- Encourage students to look at real jewelry for inspiration before coding. Physical references (or image searches) often unlock design ideas that pure abstraction does not.
- The reflection prompt for this unit should push students to compare functional design (Units 1–2) with aesthetic design: what was different about the process? What was harder? What was more satisfying?
