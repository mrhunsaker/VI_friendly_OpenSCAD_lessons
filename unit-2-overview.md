# Unit 2: Problem Finding and Stakeholder Design
**Duration:** 3 weeks  
**Driving Question:** How do you design something for someone else's needs, not your own assumptions?

---

## Unit Summary
Unit 2 introduces students to the human side of design. Up to this point students have been given requirements — now they must discover them. This unit teaches stakeholder interviewing, need-finding, and the discipline of designing for someone else's context rather than their own. Students also expand their OpenSCAD skills with loops and arrays to handle more complex geometry. The unit culminates in Project 2, where students work with an actual external stakeholder.

---

## Lessons

### Lesson 2.1 — How to Interview a Stakeholder
**Objective:** Students can conduct a structured stakeholder interview and convert the results into a written list of functional requirements.

**Topics:**
- What a stakeholder is and why their perspective drives the design
- The difference between what someone *asks for* and what they *need*
- Good interview questions: open-ended, functional, "how would you know if it worked?"
- Bad interview questions: leading, aesthetic, solution-first ("Should it be blue or red?")
- How to write up interview notes and extract requirements

**Activity:** Role-play in pairs. One student plays a stakeholder with a prepared scenario card (e.g., "I need something to hold my earbuds so I don't lose them on my desk"), the other plays the designer. Students conduct a 5-minute interview, then write up 3–5 functional requirements from their notes. Switch roles and repeat. Debrief as a class.

**Vocabulary:** stakeholder, need-finding, open-ended question, design brief

---

### Lesson 2.2 — Loops and Arrays in OpenSCAD
**Objective:** Students can use `for()` loops in OpenSCAD to generate repeated or patterned geometry.

**Topics:**
- Why loops matter: generating 10 identical features without copy-paste
- `for` loop syntax in OpenSCAD: `for(i = [0:step:end]) { ... }`
- Using `i` to drive `translate()` for evenly spaced repetition
- Nested loops for 2D grids of features
- Application: rows of bumps, holes, fins, or other repeated elements

**Activity:** Students create two objects using loops: (1) a flat tile with a 4×4 grid of raised dots, and (2) a cylinder with evenly spaced notches around the perimeter. These are building blocks for tactile or functional designs.

**Vocabulary:** loop, iteration variable, array, pattern, step

---

### Lesson 2.3 — Designing for Someone Else: Constraints and Context
**Objective:** Students can identify constraints that come from a stakeholder's environment and build those into their design.

**Topics:**
- Environmental constraints: where will it live? What will touch it? What forces will it experience?
- User constraints: accessibility, reach, grip strength, visual impairment
- Material constraints: does it need to be flexible? Waterproof? Lightweight?
- How to document constraints alongside functional requirements

**Activity:** Present a case study — the Project 1 floor marker designed for BVI (blind/visually impaired) students. Analyze it together: what constraints came from the environment? From the users? From the velcro strip? Students then map the constraints to specific design decisions in the existing scad file.

---

### Lesson 2.4 — Iterating with a Stakeholder
**Objective:** Students can present a prototype to a stakeholder, collect feedback, and translate it into design revisions.

**Topics:**
- How to present a prototype: explain what it does, ask functional questions, not "do you like it?"
- Documenting feedback: what the stakeholder said vs. what it means for the design
- Deciding what feedback to act on and what to defer
- Sign-off: what does it mean for a stakeholder to approve a design?

**Activity:** Students bring their first Project 2 prototype (printed or mockup) to a brief stakeholder check-in (with the teacher playing stakeholder if the real one is unavailable). They practice asking feedback questions and write up a revision plan.

---

### Project 2 — External Stakeholder Project
*See `Projects/Project_2/project_2_briefing.txt`*

Students choose between the sock holder or model rocket project (or a project with an external stakeholder of their own). They conduct a stakeholder meeting, define functional requirements, produce at least two printed iterations, and obtain stakeholder sign-off on the final prototype.

**Assessment:** 0–9 point rubric (see rubric section below).

---

## Rubric

| Category | 3 pts | 2 pts | 1 pt | 0 pts |
|---|---|---|---|---|
| **Function** | Prototype meets all stakeholder-defined requirements; stakeholder sign-off obtained | Meets most requirements; sign-off obtained with noted reservations | Meets some requirements; sign-off not obtained | Does not meet requirements or was not tested with stakeholder |
| **Design Quality** | Two or more clear iterations documented; code is clean and parametric; print quality is high | Two iterations present but one is not meaningfully different; minor code/print issues | Only one iteration or iterations are not meaningfully different | Single undocumented attempt |
| **Documentation** | Stakeholder meeting notes, functional requirements, iteration notes, construction notes, and reflection all present and specific | Most sections present; some are brief or vague | Several sections missing | Documentation not submitted |

---

## Materials Needed
- Prusa Mini+ printer
- PLA filament (and optionally flex filament for relevant projects)
- Digital calipers
- Stakeholder scenario cards (for Lesson 2.1 role-play)
- Computers with OpenSCAD and PrusaSlicer

---

## Key Vocabulary for the Unit
| Term | Definition |
|---|---|
| Stakeholder | A person who will use, be affected by, or has a vested interest in the design |
| Need-finding | The process of discovering what a stakeholder actually needs through observation and interview |
| Design brief | A written summary of the problem, stakeholder needs, constraints, and requirements |
| Loop | A programming structure that repeats a block of code a set number of times |
| Sign-off | Formal approval by a stakeholder that a prototype meets their needs |
| Environmental constraint | A limit imposed by the physical context where the object will be used |

---

## Teacher Notes
- The role-play in Lesson 2.1 is most effective when scenario cards are specific and contain hidden needs. For example: "I need a holder for my earbuds" — but the hidden need is that the student is left-handed and the cord always tangles on the right side of the desk.
- For Lesson 2.2, make sure students understand that the loop variable `i` is a number they can use mathematically, not just a counter — `translate([i*20, 0, 0])` is the key insight.
- If real external stakeholders are not available for Project 2, teachers can play the stakeholder role, but make sure to give genuine feedback rather than simply approving everything. The friction of real feedback is the point.
- The model rocket project may require additional safety review depending on your institution's policies. Confirm with administration before assigning it.
