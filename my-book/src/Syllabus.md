# 3D Design & Printing Curriculum — Non-Visual Toolchain Edition

**Author:** Michael Ryan Hunsaker, M.Ed., Ph.D.   
**Last Updated:** 2026-02-20   
**Target Audience:** Blind and visually impaired high school students; anyone learning 3D design and printing through screen reader–accessible workflows.    

---

## Overview

This curriculum teaches 3D design and digital fabrication using a fully accessible, command-line–driven toolchain centered on **OpenSCAD** (text-based CAD), **3DMake** (non-visual build automation), and accessible editors (VS Code, Notepad++, command-line editors) with screen reader support. Students progress from foundational command-line skills through guided projects to real-world, stakeholder-driven design challenges.

### Who This Course Is For

This course is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, VoiceOver). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access.

**Accessibility is not an add-on.** It is the foundation of every tool, workflow, and lesson in this curriculum.

### Core Philosophy

1. **Text-First Design**: All core work happens in text editors and command-line interfaces—no graphical CAD previews, no mouse-dependent menu navigation.

2. **Parametric Thinking**: Students learn to express geometry as code using OpenSCAD, enabling precise, reproducible, and iterable designs without visual feedback.

3. **Automation and Independence**: **3DMake** automates the journey from code to printed object, handling compilation, slicing orchestration, and metadata management through simple command-line commands and text configuration files.

4. **Screen Reader Mastery**: Students develop fluency with accessibility technologies (NVDA, JAWS, VoiceOver) and accessible editors, building skills that apply to careers in software, engineering, and digital fabrication.

5. **Real-World Impact**: Projects culminate in designing assistive-technology solutions for real stakeholders, combining technical skill with human-centered design and documentation.

---

## Curriculum Structure & Scope/Sequence

### Part 1: PowerShell Foundation (Prerequisite — 6–8 hours)

**Start here:** [PowerShell Introduction](PowerShell_Foundation/Powershell_Introduction/Powershell_Introduction.md)

Students who have never opened a terminal begin with foundational command-line skills:

| Component | Duration | Content |
|-----------|----------|---------|
| **PowerShell Introduction** | 45 min | What is a terminal, opening PowerShell, first 5 commands, screen reader tricks |
| **Screen Reader Accessibility Guide** | 1–2 hours | NVDA/JAWS reference, navigation sequences, handling output, keyboard shortcuts |
| **PS.0: Basic Commands** | 1 hour | pwd, ls, cd, echo, cat, file operations |
| **PS.1: Navigation & Files** | 1 hour | File system navigation, creating/editing files, organizing work |
| **PS.2: Variables & Scripting** | 1 hour | Variables, simple scripts, basic logic |
| **PS.3: Loops & Iteration** | 1 hour | For loops, foreach, batch operations |
| **PS.4: Functions & Modules** | 1 hour | Functions, parameters, reusable code blocks |
| **PS.5: Error Handling** | 1 hour | Try-catch, debugging, troubleshooting |
| **PowerShell Curriculum Overview** | 30 min | Study guide, practice strategies, learning paths |

**Outcomes:**
- Comfort with terminal/command-line interface
- File system navigation and manipulation
- Basic scripting and automation
- Screen reader optimization for terminal work
- Foundation for 3DMake automation tasks

**Note:** Students should complete PowerShell Foundation before starting 3dMake Lesson 9 (Automation). Lessons 1–8 can begin without PowerShell, but Lesson 9+ requires command-line fluency.

---

### Part 2: 3dMake Foundation (Main Curriculum — 14–18 hours)

**Start here:** [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

11 progressive lessons building from foundational concepts to leadership-level design thinking, organized in 5 parts:

#### **Part 1: Foundations** (Lessons 1–3 | ~3 hours)

| Lesson | Focus | Duration | Project |
|--------|-------|----------|---------|
| **[Lesson 1](3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.md)** | Environmental Configuration + How 3D Printing Works | 60–90 min | None |
| **[Lesson 2](3dMake_Foundation/Lessons_3dMake_2/Lessons_3dMake_2.md)** | Primitives & Boolean Operations + Debugging | 60 min | None |
| **[Lesson 3](3dMake_Foundation/Lessons_3dMake_3/Lessons_3dMake_3.md)** | Parametric Architecture & Modules | 60 min | None |

#### **Part 2: Verification & Safety** (Lessons 4–5 | ~2 hours)

| Lesson | Focus | Duration | Project |
|--------|-------|----------|---------|
| **[Lesson 4](3dMake_Foundation/Lessons_3dMake_4/Lessons_3dMake_4.md)** | AI-Enhanced Verification & Feedback | 45–60 min | None |
| **[Lesson 5](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md)** | Safety Protocols & Material Introduction | 60–90 min | None |

#### **Part 3: Applied Projects** (Lessons 6–8 | ~4 hours)

| Lesson | Focus | Duration | Project |
|--------|-------|----------|---------|
| **[Lesson 6](3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md)** | Practical 3dm Commands & Text Embossing | 60–90 min | 🎮 Customizable Keycap |
| **[Lesson 7](3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.md)** | Parametric Transforms & Assembly | 75–90 min | 📱 Phone Stand |
| **[Lesson 8](3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md)** | Advanced Parametric Design & Interlocking | 90–120 min | 🎁 Stackable Bins |

#### **Part 4: Advanced Topics** (Lessons 9–10 | ~3 hours)

| Lesson | Focus | Duration | Project |
|--------|-------|----------|---------|
| **[Lesson 9](3dMake_Foundation/Lessons_3dMake_9/Lessons_3dMake_9.md)** | Automation & 3dm Workflows (requires PS Foundation) | 60–90 min | 🔑 Batch Processing Automation |
| **[Lesson 10](3dMake_Foundation/Lessons_3dMake_10/Lessons_3dMake_10.md)** | Troubleshooting & Mastery with Measurement | 120–150 min | 🎲 QA Testing + 🔍 Accessibility Audit |

#### **Part 5: Leadership** (Lesson 11 | ~2 hours)

| Lesson | Focus | Duration | Project |
|--------|-------|----------|---------|
| **[Lesson 11](3dMake_Foundation/Lessons_3dMake_11/Lessons_3dMake_11.md)** | Stakeholder-Centric Design & Design Thinking | 90–120 min | 📿 Beaded Jewelry Holder |

**Total:** 14–18 hours of instruction + projects

---

## 4 Comprehensive Reference Appendices

Located in `/3dMake_Foundation/` alongside the lessons:

### **[Appendix A: Comprehensive Slicing Guide](3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md)** (1,500+ lines)

Reference for 7 major slicers:
- PrusaSlicer, Bambu Studio, Cura, SuperSlicer, OrcaSlicer, IdeaMaker, Fusion 360
- Setup guides, parameter explanations, troubleshooting, command-line integration
- **Use when:** Slicing questions, switching slicers, quality issues

### **[Appendix B: Material Properties & Selection](3dMake_Foundation/Appendix_B_Material_Properties.md)** (1,200+ lines)

Complete material reference for 6 materials:
- PLA, PETG, ABS, TPU, Polycarbonate, Nylon
- Properties tables, printing parameters, quality verification, cost analysis
- **Use when:** Choosing material, troubleshooting prints, cost analysis

### **[Appendix C: Tolerance Testing & QA Matrix](3dMake_Foundation/Appendix_C_Tolerance_QA.md)** (1,200+ lines)

Measurement-based quality assurance procedures:
- Caliper techniques, weight verification, functional testing, tolerance stack-up
- Step-by-step procedures, checklist templates, CSV tracking
- **Use when:** Starting a project, verifying dimensions, quality issues

### **[Appendix D: PowerShell Integration for SCAD Workflows](3dMake_Foundation/Appendix_D_PowerShell_Integration.md)** (1,100+ lines)

Complete automation guide for PowerShell + 3dMake:
- 5 complete PowerShell scripts for workflow automation
- Parametric sweeps, batch processing, print logging, printer communication
- **Use when:** Automating tasks, testing variations, batch printing

---

## Learning Progression: Student Roles

Students move through roles across the curriculum:

| Phase | Role | Core Tools | Focus |
| ------- | ------ | ----------- | ------- |
| **PowerShell Foundation** | Observer/Learner | Terminal, command line | CLI fundamentals and keyboard navigation |
| **3dMake Lessons 1–5** | Observer/Learner | OpenSCAD, 3DMake, editor | Using CLI tools, safety, concepts, measurement |
| **3dMake Lessons 6–8** | Operator | Editor, OpenSCAD, 3DMake, slicer | Hands-on practice with structured projects |
| **3dMake Lessons 9–10** | Designer | Full toolchain | Parametric design, automation, troubleshooting |
| **3dMake Lesson 11** | Problem-Solver | Full toolchain + documentation | Stakeholder design, real-world impact |

---

## The Accessible Toolchain: How It Works

### OpenSCAD — Text-Based 3D Design

**OpenSCAD** is a free, open-source CAD tool that uses a programming language to describe 3D geometry. Students write code that defines shapes, transforms them, and combines them using Boolean operations.

**Why OpenSCAD?**
- **Screen reader friendly**: All work happens in a text editor; no visual-only 3D preview.
- **Repeatable**: Code is version-controlled, documented, and shareable.
- **Parametric**: Variables allow students to design once and generate variations by changing numbers.
- **No visual dependency**: Students reason about geometry through code structure and testing.

### 3DMake — The Non-Visual Build Bridge

**3DMake** is a command-line tool that automates the journey from OpenSCAD code to a printable file:

```bash
3dm build        → Compiles main.scad to main.stl
3dm info         → Validates geometry and runs diagnostics
3dm slice        → Prepares the model for printing
```

**Why 3DMake?**
- **No GUI navigation**: All interaction is keyboard-driven and text-based.
- **Automation**: Eliminates repetitive manual steps.
- **Metadata tracking**: Configuration files store parameters as human-readable text.
- **Error reporting**: Diagnostic output is text that screen readers can read aloud.

### Accessible Editors

Students write OpenSCAD code using **screen reader–accessible editors**:

- **VS Code** (Windows, macOS, Linux): Industry-standard with built-in screen reader support
- **Notepad++** (Windows): Lightweight, keyboard-driven, excellent screen reader support
- **Command-line editors** (Nano, Vim, Emacs): Full keyboard control, no mouse needed

---

## Prerequisites by Section

| Section | Prerequisites | What You'll Learn |
| ------ | -------------- | ------------------- |
| **PowerShell Foundation** | None — start here | Terminal basics, keyboard navigation, file operations, basic scripting |
| **3dMake Lessons 1–5** | PowerShell Foundation | 3D printing concepts, safety, measurement, OpenSCAD basics, debugging |
| **3dMake Lessons 6–8** | Lessons 1–5 | Building projects, parametric design, transforms, tolerances |
| **3dMake Lessons 9–10** | Lessons 6–8 (Lesson 9 requires PS Foundation) | Automation, troubleshooting, advanced measurement and QA |
| **3dMake Lesson 11** | Lessons 9–10 | Stakeholder design, real-world prototyping, leadership |

---

## Grading Rubric

All projects are scored on a 0–9 scale across three equally weighted categories (3 points each):

| Category | Points | What We Measure |
| ---------- | ------- | ------------------- |
| **Problem & Solution** | 0–3 | Does the design solve the stated problem? Are all functional requirements met? |
| **Design & Code Quality** | 0–3 | Is the OpenSCAD code clean, well-commented, and well-structured? Does the print work well? Is there evidence of iteration? |
| **Documentation** | 0–3 | Are all sections complete? Are reflections thoughtful and specific? Are measurements recorded? |

### Category 1: Problem & Solution (0–3 points)

| Score | Description |
| ------- | ------------- |
| **3** | The prototype clearly and effectively solves the stated problem. All functional requirements are met. The solution shows evidence of testing against the requirements. |
| **2** | The prototype mostly meets the problem. Most functional requirements are met. Minor gaps between the design and the requirements. |
| **1** | The prototype partially addresses the problem. Several functional requirements are not met or were not clearly tested. |
| **0** | The prototype does not address the stated problem, or no functional requirements were established. |

### Category 2: Design & Code Quality (0–3 points)

**OpenSCAD code is central to this course.** We evaluate the clarity, structure, and documentation of your code as much as the print quality.

| Score | Description |
| ------- | ------------- |
| **3** | Code is clean, well-organized, and thoroughly commented. Variables/modules are used appropriately. Print quality is excellent. Design shows original thinking and at least one meaningful iteration. |
| **2** | Code works but lacks clear structure or comments. Variables are used but could be better named. Print quality is acceptable. Some iteration evident. |
| **1** | Code is functional but poorly organized. Comments are minimal or missing. Print quality has defects. Little or no iteration. |
| **0** | Code does not work, is not submitted, or shows no original thinking. Print is not functional. |

### Category 3: Documentation (0–3 points)

| Score | Description |
| ------- | ------------- |
| **3** | All required sections are present, complete, and specific. Reflections are thoughtful and reference specific decisions, problems encountered, and learning. Photos/measurements are included. |
| **2** | Most required sections are present. Some sections are vague or missing detail. Reflections show some thought but are brief or generic. |
| **1** | Documentation is incomplete. Major sections are missing or consist of one-line responses. Reflections are minimal. |
| **0** | Documentation is not submitted or is essentially empty. |

### Score Interpretation

| Total Score | Interpretation | Next Step |
| ------------ | --------------- | ----------- |
| 8–9 | Excellent work | Move on to next project |
| 6–7 | Good work with room for improvement | Move on; instructor may suggest revisiting one element |
| 4–5 | Meets basic expectations | Resubmission of specific weak areas recommended |
| 2–3 | Does not meet expectations | Resubmission required |
| 0–1 | Missing major deliverables | Meet with instructor; create a completion plan |

### Resubmission Policy

Students may resubmit any project as many times as they need to improve their score. Resubmissions must include a one-paragraph explanation of what was changed and why. The resubmission score **replaces** the original score.

---

## Quick Links to Essential Tools & Setup

### Core Design Toolchain
- [OpenSCAD Download](https://openscad.org/downloads.html) — Free, cross-platform CAD (all major OS)
- [3DMake Documentation & Installation](https://github.com/tdeck/3dmake) — Command-line build tool for OpenSCAD
- [VS Code Download](https://code.visualstudio.com/) — Free, screen-reader-accessible code editor
- [Notepad++ Download](https://notepad-plus-plus.org/) — Free, lightweight Windows editor

### Screen Reader & Accessibility
- [NVDA Download](https://www.nvaccess.org/) — Free, open-source screen reader (Windows)
- [Screen Reader Coding Tips (NVDA & JAWS)](Reference_Materials/nvda-jaws-coding-tips.md) — Keyboard shortcuts and configuration
- [VSCode Setup Guide](Reference_Materials/vscode-setup-guide.md) — Accessibility-focused editor configuration
- [PowerShell & Command Line Fundamentals](PowerShell_Foundation/Powershell_Introduction/Powershell_Introduction.md) — Terminal navigation for screen reader users

### Slicing & Printing
- [PrusaSlicer Download](https://www.prusa3d.com/page/prusaslicer_424/) — Free slicer for Prusa printers
- [Slic3r Documentation](https://slic3r.org/) — Open-source command-line slicer
- [Appendix A: Comprehensive Slicing Guide](3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md) — 7 slicer reference

### OpenSCAD Learning
- [OpenSCAD Documentation](https://openscad.org/documentation.html) — Official reference
- [OpenSCAD Cheat Sheet](Reference_Materials/openscad-cheat-sheet.md) — Quick syntax reference
- [3dMake Quick Reference](3dMake_Foundation/3dMake_Quick_Reference.md) — Command and workflow reference

### Supplemental Textbooks
- [Programming with OpenSCAD: A Beginner's Guide to Coding 3D-Printable Objects](assets/Programming_with_OpenSCAD.epub) — Complete reference textbook (EPUB format)
- [Simplifying 3D Printing with OpenSCAD](assets/Simplifying_3D_Printing_with_OpenSCAD.epub) — Practical workflows and applications (EPUB format)
- [Programming with OpenSCAD Companion Resources](https://programmingwithopenscad.github.io/learning.html) — Practice worksheets and teaching materials
- [Visual Quick Reference Guides](https://programmingwithopenscad.github.io/quick-reference.html) — Command syntax and geometry reference
- [Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Working examples for all exercises

### Assistive Technology Design & Research
- [e-NABLE Community Foundation](https://enablingthefuture.org/) — 3D printed hand/arm devices
- [Makers Making Change](https://www.makersmakingchange.com/) — Open-source assistive designs
- [NIH 3D Print Exchange](https://3dprint.nih.gov/) — Medical and assistive models
- [Printables — Assistive Technology](https://www.printables.com/search/assistive) — Community models
- [Thingiverse — Adaptive/Accessibility](https://www.thingiverse.com/search?q=adaptive) — Model repository
