# Project 1: Tactile Floor Markers - Teacher Template {#3dmake_foundation_templates_teacher-project_1_teacher_template}

## Briefing

Students design}} tactile floor markers that meet real accessibility}} needs. This project emphasizes translating requirements into}} testable criteria, rapid iteration, and accessibility}} validation. Students move from guided single-object modeling (Project 0) to problem-driven design}} with stakeholder feedback.

Key Learning: Requirements-driven design}}; accessibility}} testing; rapid iteration.

Real-world Connection: Accessible design}} is a core engineering practice. Universal design}} benefits all users-tactile markers help people with visual impairments navigate safely.

## Constraints
- Marker must include a 3D-printed component designed in parametric}} OpenSCAD}}
- All key dimensions must be variables}} for rapid iteration
- Must be testable for tactile effectiveness (at least two prototypes)
- Assembly and installation method must be documented

## Functional Requirements (Students Define These)
- Marker must be tactilely recognizable (distinct texture/shape compared to surroundings)
- Marker must adhere to target surface without damage
- Marker must remain stable under typical foot traffic
- Marker dimensions must fit within space constraints (specify per context)
- Marker must be affordable and printable within 1-2 hours

## Deliverables
- `project1.scad` with two parametric}} bead/marker modules
- Completed documentation template with:
  - Five functional requirements and acceptance tests
  - Surface measurements and constraints
  - Photos of prototypes 1 and 2
  - Iteration log (what changed and why)
  - Reflection on accessibility}} feedback
- Installation notes
- Iteration evidence (e.g., parameter}} comparison table)

## Rubric

All projects are scored on a 0-9 scale across three equally weighted categories (3 points each}}):

| Category                | Points | What We Measure                                                                                                      |
|-------------------------|--------|----------------------------------------------------------------------------------------------------------------------|
| Problem & Solution      | 0-3    | Do all functional requirements have clear acceptance tests? Does the prototype meet at least three of them?          |
| Design}} & Code Quality | 0-3    | Is the OpenSCAD}} code}} parametric}} and well-commented? Is iteration evident? Does the prototype work}} tactilely? |
| Documentation           | 0-3    | Are requirements complete? Is iteration documented with measurements? Are reflections specific}} and thoughtful?     |

### Category 1: Problem & Solution (0-3 points)

| Score | Description                                                                                                                                                     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | All five functional requirements defined with clear acceptance tests. Prototype meets at least four tests. Evidence of testing against requirements documented. |
| 2     | Four or five requirements defined; acceptance tests present but may lack clarity. Prototype meets three tests.                                                  |
| 1     | Fewer than four requirements or vague acceptance tests. Prototype meets fewer than three tests.                                                                 |
| 0     | No clear requirements or acceptance tests.                                                                                                                      |

### Category 2: Design}} & Code Quality (0-3 points)

| Score | Description                                                                                                                                                    |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | Code is parametric}}, well-commented, and reusable. At least two distinct modules evident. Two or more iterations documented. Tactile effectiveness validated. |
| 2     | Code is parametric}} but could be clearer. Some iteration evident. Tactile effectiveness partially validated.                                                  |
| 1     | Code is minimal or poorly organized. Little iteration or validation.                                                                                           |
| 0     | Code does not work}} or is not submitted.                                                                                                                      |

### Category 3: Documentation (0-3 points)

| Score | Description                                                                                                                                                          |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | All sections complete with specific}} measurements, requirement tables, and iteration logs. Reflections reference}} specific}} changes and accessibility}} feedback. |
| 2     | Most sections present. Iteration documented but could be more detailed. Reflections present but brief.                                                               |
| 1     | Documentation incomplete. Major gaps in iteration or requirement documentation.                                                                                      |
| 0     | No documentation submitted.                                                                                                                                          |

### Score Interpretation

| Total Score | Interpretation                  | Next Step                                            |
|-------------|---------------------------------|------------------------------------------------------|
| 8-9         | Excellent work}}                | Move to Unit 2 or extensions                         |
| 6-7         | Good work}}; solid iteration    | Move forward; consider extension for accessibility}} |
| 4-5         | Meets basics; improve iteration | Resubmit iteration evidence                          |
| 2-3         | Does not meet expectations      | Resubmission required                                |
| 0-1         | Missing major work}}            | Meet with instructor                                 |

## Resubmission Policy

Students may resubmit to improve their score. Resubmissions must include:
1. A one}}-paragraph explanation of what was changed and why

The resubmission score replaces the original.

## Assessment Notes

- Strong submissions show clear requirement-to-acceptance-test}} thinking, at least two prototype iterations, and specific}} accessibility}} feedback
- Watch for: Vague acceptance tests, no iteration, or dismissive accessibility}} comments
- Reinforce: Requirements-driven design}}; why iteration matters
- Extension: Students with strong accessibility}} focus could develop a guide for testing tactile markers non-visually
