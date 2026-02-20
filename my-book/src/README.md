## Introduction

This course teaches 3D design and digital fabrication using a fully accessible, command-line–driven toolchain centered on **OpenSCAD** (text-based CAD), **3DMake** (non-visual build automation), and accessible editors (VS Code, Notepad++, command-line editors) with screen reader support.

The curriculum is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, VoiceOver). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access. **Accessibility is not an add-on. It is the foundation of every tool, workflow, and lesson in this curriculum.**

---

## Curriculum Structure

### Part 1: PowerShell Foundation (6 lessons + 4 guides)

**Where to Start:** [PowerShell Introduction](PowerShell_Foundation/Powershell_Introduction/Powershell_Introduction.md)

Before learning 3D design, students master terminal/command-line fundamentals:
- **PS Introduction** — What is a terminal and why learn it (pre-terminal intro for absolute beginners)
- **PS.0 through PS.5** — 6 progressive lessons covering command-line basics through error handling
- **Screen Reader Accessibility Guide** — NVDA & JAWS reference for terminal navigation
- **PowerShell Curriculum Overview** — Complete guide with learning paths

**Time commitment:** ~6 hours  
**Skills gained:** Terminal navigation, file operations, basic scripting, keyboard-only workflow mastery

### Part 2: 3dMake Foundation (11 lessons + 4 appendices)

**Where to Start:** [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

**Main Curriculum: 11 Progressive Lessons**

| Part | Lessons | Focus | Duration | Total Hours |
|------|---------|-------|----------|-------------|
| **Foundations** | 1–3 | Environment setup, primitives, parametric design | ~3 hours | 3 |
| **Verification & Safety** | 4–5 | AI verification, safety protocols, materials | ~2 hours | 5 |
| **Applied Projects** | 6–8 | Practical commands, transforms, advanced design | ~4 hours | 9 |
| **Advanced Topics** | 9–10 | Automation, troubleshooting, mastery | ~3 hours | 12 |
| **Leadership** | 11 | Stakeholder-centric design | ~2 hours | 14 |

**Total:** 14–18 hours instruction + projects

**4 Comprehensive Reference Appendices**

- **[Appendix A: Comprehensive Slicing Guide](3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md)** — 7 major slicers (1,500+ lines)
- **[Appendix B: Material Properties & Selection](3dMake_Foundation/Appendix_B_Material_Properties.md)** — 6 materials (1,200+ lines)
- **[Appendix C: Tolerance Testing & QA Matrix](3dMake_Foundation/Appendix_C_Tolerance_QA.md)** — Measurement procedures (1,200+ lines)
- **[Appendix D: PowerShell Integration for SCAD Workflows](3dMake_Foundation/Appendix_D_PowerShell_Integration.md)** — 5 automation scripts (1,100+ lines)

---

## The Accessible Toolchain

### Screen Reader Compatibility Throughout

This course uses tools designed for screen reader access:

- **Terminal/Command line** — Text-based, fully accessible to NVDA, JAWS, VoiceOver
- **OpenSCAD** — Free, open-source text-based CAD (no visual-only GUI dependency)
- **3DMake** — Command-line build tool eliminating GUI navigation
- **Accessible editors** — VS Code, Notepad++, Nano, Vim (all keyboard-driven, screen reader friendly)

See [Screen Reader Coding Tips (NVDA & JAWS)](Reference_Materials/nvda-jaws-coding-tips.md) for detailed keyboard shortcuts and configuration.

### 3DMake: Non-Visual Build Automation

**3DMake** makes the entire design-to-print pipeline accessible:

```bash
3dm build        → Compiles main.scad to main.stl
3dm info         → Validates geometry and runs diagnostics
3dm slice        → Prepares model for printing
```

- No GUI navigation needed
- Automation eliminates repetitive manual steps
- Configuration files store parameters as human-readable text
- Error reporting is text-based (screen reader accessible)
- Works with command-line slicers

### Iterative, Non-Visual Design

Students learn to design through **code and testing**, not visual previews:

- Write parametric OpenSCAD code in accessible editors
- Run `3dm build` to compile to printable file
- Use measurement-based verification (calipers, scales, functional testing)
- Iterate by editing parameters and rebuilding
- **No reliance on 3D preview or visual feedback**

---

## Project-Based Learning

Every 3dMake lesson includes hands-on projects:

- **Lesson 6:** Keycap with embossed text (3dm commands)
- **Lesson 7:** Phone stand (parametric transforms)
- **Lesson 8:** Stackable bins (interlocking features, tolerances)
- **Lesson 9:** Keychain automation (PowerShell batch processing)
- **Lesson 10:** QA testing + accessibility audit (measurement, troubleshooting)
- **Lesson 11:** Beaded jewelry holder (stakeholder-driven design)

Each project requires:
- Parametric OpenSCAD code (clean, well-commented)
- Functional prototype (tested, iterated)
- Complete documentation (reflections, measurements, decisions)

---

## Learning Support

### Reference Materials

Quick navigation to common topics:

- [OpenSCAD Cheat Sheet](Reference_Materials/openscad-cheat-sheet.md) — Syntax quick-reference
- [3dMake Setup Guide](Reference_Materials/3dmake-setup-guide.md) — Installation walkthrough
- [VSCode Setup Guide](Reference_Materials/vscode-setup-guide.md) — Accessibility configuration
- [Vocabulary Glossary](Reference_Materials/vocabulary-glossary.md) — Course terminology
- [Filament Comparison Table](Reference_Materials/filament-comparison-table.md) — Material reference
- [Master Rubric](Reference_Materials/master-rubric.md) — Project assessment criteria

### Navigation

- **[SUMMARY.md](SUMMARY.md)** — Complete table of contents
- **[Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md)** — Detailed overview of all lessons and appendices
- **[Quick Reference](3dMake_Foundation/3dMake_Quick_Reference.md)** — At-a-glance command and syntax reference

---

## Supplemental Resources & Textbooks

This course is enhanced by comprehensive textbooks and companion materials from the *Programming with OpenSCAD* project:

### Free Textbooks (EPUB Format)
- **[Programming with OpenSCAD: A Beginner's Guide to Coding 3D-Printable Objects](assets/Programming_with_OpenSCAD.epub)** — Comprehensive reference covering OpenSCAD syntax, geometry concepts, and design patterns. Ideal for deep dives into specific topics and as a reference guide throughout the course.
- **[Simplifying 3D Printing with OpenSCAD](assets/Simplifying_3D_Printing_with_OpenSCAD.epub)** — Focused on practical workflows, optimization, and real-world printing scenarios.

### Companion Teaching Resources
- **[Practice Worksheets](https://programmingwithopenscad.github.io/learning.html)** — Printable worksheets for visualization practice, decomposition exercises, vocabulary building, and assessment.
- **[Visual Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html)** — Command syntax guides and geometry reference.
- **[Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)** — Working OpenSCAD examples organized by topic (3D shapes, transformations, loops, modules, if-statements, advanced techniques).

---

## Getting Started

**For Students:**
1. Start with [PowerShell Introduction](PowerShell_Foundation/Powershell_Introduction/Powershell_Introduction.md)
2. Complete PowerShell lessons (PS.0–PS.5)
3. Begin [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)
4. Follow [Lesson 1: Environmental Configuration](3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.md)
5. Continue through Lesson 11

**For Instructors:**
1. Review [Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md)
2. Use [11 Teacher Templates](3dMake_Foundation/Templates/Teacher/) for assessment
3. Reference [Master Rubric](Reference_Materials/master-rubric.md) for grading
4. Check [Syllabus](Syllabus.md) for course policies and learning progression
