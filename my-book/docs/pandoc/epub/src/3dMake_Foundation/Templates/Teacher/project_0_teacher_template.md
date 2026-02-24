# Project 0: Your First 3D Print - Teacher Template {#3dmake_foundation_templates_teacher-project_0_teacher_template}

## Briefing

Students select a small real-world object, measure it with calipers, translate measurements into parametric OpenSCAD variables, and produce a working 3D model. This project introduces measurement practices, parametric thinking, and the complete workflow from design to print to verification.

**Key Learning:** Converting real-world constraints into code; validating printed output against design intent.

**Real-world Connection:** All 3D printing begins with accurate measurement and parametric design. Engineers use this workflow daily to prototype functional parts.

## Constraints
- Design must use parametric OpenSCAD variables for all key dimensions
- Object must be printable within 2-4 hours at classroom settings
- Must include at least three key measurements (length, width, height)
- Prototype must be tested and documented with physical measurements

## Functional Requirements
- Model parameterizes all major dimensions as top-level variables
- STL exports successfully and is printable in slicer
- Printed part can be measured and compared to intended dimensions
- Design includes evidence of at least one iteration based on print results

## Deliverables
- `project0.scad` with clearly named variables and comments
- Completed documentation template with:
  - Measurements (object features and averages)
  - Slicer settings and estimated print time/filament
  - Printed part measurements and deviations
  - Reflection on accuracy and next steps
- Photograph of final print
- (Optional) Iteration log if multiple prints were tested

## Rubric

All projects are scored on a 0-9 scale across three equally weighted categories (3 points each):

| Category | Points | What We Measure |
| ---------- | ------- | ------------------- |
| **Problem & Solution** | 0-3 | Does the design solve the stated problem? Are all functional requirements met? |
| **Design & Code Quality** | 0-3 | Is the OpenSCAD code clean, well-commented, and well-structured? Does the print work well? Is there evidence of iteration? |
| **Documentation** | 0-3 | Are all sections complete? Are reflections thoughtful and specific? Are measurements recorded? |

### Category 1: Problem & Solution (0-3 points)

| Score | Description |
| ------- | ------------- |
| **3** | Student successfully measures object and creates a parametric model that prints with acceptable dimensional accuracy. All functional requirements met. |
| **2** | Student measures object and creates a working model. Most dimensions print within tolerance. Minor gaps. |
| **1** | Student attempts measurement and modeling. Model prints but shows significant dimensional errors or missing requirements. |
| **0** | No working model submitted or measurements incomplete. |

### Category 2: Design & Code Quality (0-3 points)

| Score | Description |
| ------- | ------------- |
| **3** | Code uses clear variable names and is thoroughly commented. Parametric structure is evident. Print quality is excellent. At least one iteration cycle documented. |
| **2** | Code works and includes some comments. Variable naming could be clearer. Print quality acceptable. Some evidence of iteration. |
| **1** | Code is minimal or poorly organized. Few comments. Print has defects. Little iteration. |
| **0** | Code does not work or is not submitted. |

### Category 3: Documentation (0-3 points)

| Score | Description |
| ------- | ------------- |
| **3** | All sections complete with specific measurements, slicer settings, and thoughtful reflection on deviations. Includes photo and iteration notes. |
| **2** | Most sections present. Measurements recorded but reflection is brief. Photo included. |
| **1** | Documentation incomplete. Major gaps in measurements or reflection. |
| **0** | No documentation submitted. |

### Score Interpretation

| Total Score | Interpretation | Next Step |
| ------------ | --------------- | ----------- |
| 8-9 | Excellent work | Move to Project 1 |
| 6-7 | Good work; strong foundation | Move to Project 1; review iteration |
| 4-5 | Meets basics; needs revision | Resubmit one weak area |
| 2-3 | Does not meet expectations | Resubmission required |
| 0-1 | Missing major work | Meet with instructor |

---

## Resubmission Policy

Students may resubmit to improve their score. Resubmissions must include:
1. A one-paragraph explanation of what was changed and why

The resubmission score **replaces** the original.

---

## Assessment Notes

- **Strong submissions** show parametric structure (variables used throughout), thoughtful measurement practices, and reflection on print deviations
- **Watch for:** Hard-coded dimensions, missing comments, or dismissive reflections
- **Reinforce:** Why parametric design matters; how iteration improves outcomes
- **Extension:** Students who finish early can explore tolerance testing or variant generation
