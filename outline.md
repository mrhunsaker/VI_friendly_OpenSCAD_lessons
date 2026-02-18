Curriculum Evaluation
The existing curriculum has a solid foundation — real projects with clear deliverables, a logical progression from guided (Project 0) to open-ended (Project 2+), and good use of functional requirements. However, it has some significant gaps.
What's working well:
The project-based structure is strong. Students learn by making real things for real purposes (tactile floor markers, jewelry, problem-solving for stakeholders), which is motivating and meaningful. The rubric system is consistent, and the teacher/student document split is a smart organizational choice.
What's missing or underdeveloped:
The biggest gap is the absence of standalone lessons between projects. Right now students are expected to learn OpenSCAD, calipers, slicing software, and printer operation largely by doing projects — but there's no scaffolded instruction sequence to build those skills first. A student who's never seen OpenSCAD gets handed a briefing doc and is expected to produce a .scad file.
Other gaps include no explicit coverage of design iteration methodology, no safety curriculum, no vocabulary or reference sheets, inconsistent structure across project files (some have teacher versions, some don't), and no assessment rubric document — just references to one that doesn't appear in the files.

Proposed Expanded Curriculum
Unit 0: Foundations (before any projects)
Lesson 0.1 — Safety & Printer Orientation
Cover printer safety, material safety (fumes, hot end temps), fire safety protocol, and a supervised printer walkthrough. Deliverable: signed safety checklist.
Lesson 0.2 — How 3D Printing Works
Conceptual overview: FDM process, layers, infill, supports, bed adhesion. Compare printed objects at different layer heights and infill percentages. No hands-on printing yet — just observation and discussion.
Lesson 0.3 — Intro to Calipers
Hands-on practice measuring 5–10 common objects with tactile or digital calipers. Record measurements in a structured worksheet. Focus on accuracy and repeatability — measure the same object three times and average.
Lesson 0.4 — Intro to OpenSCAD, Part 1
Just cube(), sphere(), and cylinder() with named variables. Students write three shapes, render them, and describe what each parameter does. No projects yet.
Lesson 0.5 — Intro to OpenSCAD, Part 2
translate(), rotate(), union(), and difference(). Students build a simple composite object (e.g., a box with a hole in it). This directly prepares them for Project 0.
Lesson 0.6 — Intro to Slicing
Walk through PrusaSlicer (or equivalent) from importing an STL to exporting a .gcode file. Cover layer height, infill, supports, and print time estimation. Students slice the Project 0 file and predict print time before printing.

Unit 1: Guided Projects (current Project 0 and Project 1, restructured)
Project 0 stays as-is but now has lesson prerequisites. Add a measurement verification step where students compare desired vs. measured dimensions and calculate percent error.
Project 1 add a formal ideation phase — students must sketch at least two alternative designs before choosing one. Add a peer review checkpoint before printing.
Project 1.1: Dice (already exists) — add a lesson on parametric design using module and parameters before this project, since dice are a natural fit for modular thinking.

Unit 2: Intermediate Skills
Lesson 2.1 — Parametric Design & Modules in OpenSCAD
Introduce module definitions and parameters. Students refactor an old design to use modules. This is a prerequisite for Project 3 (jewelry beads).
Lesson 2.2 — Tolerances & Fit
Why printed objects don't match exact dimensions. Demonstrate with a printed peg and hole. Students design and print test fits with three different tolerance values and document results. This is a critical missing concept — it comes up in every real project but is never explicitly taught.
Lesson 2.3 — Advanced Slicing: Supports & Orientation
When do you need supports? How does print orientation affect strength, surface finish, and material use? Students slice the same model in three orientations and compare results.
Lesson 2.4 — Material Properties
Compare PLA, PETG, and TPU (flex filament). Cover strength, temperature resistance, and appropriate use cases. Connects directly to the fidget/texture project which requires flex filament but never explains why or how it differs from PLA.

Unit 3: Open-Ended Projects (current Project 2 and 3, with additions)
Project 2 (stakeholder design) should be preceded by a brief Lesson 3.1 — Stakeholder Interviews, covering how to ask good functional requirement questions and translate answers into design constraints. The current briefing throws students into stakeholder meetings with no preparation.
Project 3 (jewelry) is well-structured but should explicitly require students to use the tolerances lesson — beads need to fit on a cord or wire, which is a real tolerance problem.
Project 4 (new): Assistive Technology Design
Design an object that helps someone with a specific physical need. This fits the school context (TSBVI is a school for the blind) and elevates the curriculum's purpose. Functional requirements would be co-developed with a real user. Two iteration cycles required.

Supporting Documents to Create
The curriculum currently references but lacks several key documents that should be built out: a master rubric document, an OpenSCAD reference/cheat sheet for students, a slicing settings reference card, a measurement worksheet template, and a vocabulary glossary covering terms like infill, layer height, tolerance, parametric, and FDM.

Summary of the Progression
The overall arc would move students from observer → operator → designer → problem-solver, with explicit instruction preceding each new skill demand rather than expecting students to absorb skills through project work alone. The current curriculum is roughly 60% of the way to that goal — the projects are good, but the scaffolding between them needs to be built out.