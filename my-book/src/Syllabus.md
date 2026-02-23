# 3D Design & Printing Curriculum - Non-Visual Toolchain Edition

**Author:** Michael Ryan Hunsaker, M.Ed., Ph.D.
**Last Updated:** 2026-02-20
**Target Audience:** Blind and visually impaired high school students; anyone learning 3D design and printing through screen reader-accessible workflows.

---

## Overview

This curriculum teaches 3D design and digital fabrication using a fully accessible, command-line-driven toolchain centered on **OpenSCAD** (text-based CAD), **3DMake** (non-visual build automation), and accessible editors (VS Code, Notepad++, command-line editors) with screen reader support. Students progress from foundational command-line skills through guided projects to real-world, stakeholder-driven design challenges.

### Who This Course Is For

This course is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, VoiceOver). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access.

**Accessibility is not an add-on.** It is the foundation of every tool, workflow, and lesson in this curriculum.

### Core Philosophy

1. **Text-First Design**: All core work happens in text editors and command-line interfaces-no graphical CAD previews, no mouse-dependent menu navigation.

2. **Parametric Thinking**: Students learn to express geometry as code using OpenSCAD, enabling precise, reproducible, and iterable designs without visual feedback.

3. **Automation and Independence**: **3DMake** automates the journey from code to printed object, handling compilation, slicing orchestration, and metadata management through simple command-line commands and text configuration files.

4. **Screen Reader Mastery**: Students develop fluency with accessibility technologies (NVDA, JAWS, VoiceOver) and accessible editors, building skills that apply to careers in software, engineering, and digital fabrication.

5. **Real-World Impact**: Projects culminate in designing assistive-technology solutions for real stakeholders, combining technical skill with human-centered design and documentation.

---

## Curriculum Structure & Scope/Sequence

### Part 1: Command-Line Foundation (Prerequisite - 20-25 hours)

**Start here:** [Command Line Interface Selection Guide](CommandLineInterfaceSelection.md)

Students who have never opened a terminal begin with foundational command-line skills. **Choose one of three equivalent pathways** based on your operating system and preferences. All three pathways teach the same concepts and prepare you equally well for 3dMake work.

#### **🔍 Step 1: Choose Your Pathway**

**[→ Command Line Interface Selection Guide](CommandLineInterfaceSelection.md)** - Read this first to compare PowerShell, CMD, and Git Bash and choose which works best for you.

---

#### **Pathway A: PowerShell Foundation** (Recommended for Windows)

**Total Duration:** 30-45 hours  
**Start here:** [PowerShell Curriculum Overview](PowerShellFoundation/PowerShellCurriculumOverview/PowerShellCurriculumOverview.md)

| Component                                 | Duration    | Content                                                                        |
|-------------------------------------------|-------------|--------------------------------------------------------------------------------|
| **Screen Reader Accessibility Guide**     | 1.5-2 hours | NVDA/JAWS reference, navigation sequences, handling output, keyboard shortcuts |
| **PS-Pre: Your First Terminal**           | 2-2.5 hours | Opening PowerShell, first commands, basic navigation, screen reader tricks     |
| **PS-0: Getting Started**                 | 1.5 hours   | Paths, shortcuts, tab completion                                               |
| **PS-1: Navigation**                      | 2-2.5 hours | Moving around the file system confidently                                      |
| **PS-2: File & Folder Manipulation**      | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories             |
| **PS-3: Input, Output & Piping**          | 2.5-3 hours | Redirecting output, piping commands, understanding data flow                   |
| **PS-4: Environment Variables & Aliases** | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations               |
| **PS-5: Filling in the Gaps**             | 2.5-3 hours | Control flow, profiles, useful tricks, scripting fundamentals                  |
| **PS-6: Advanced Techniques**             | 3-3.5 hours | Scripts, functions, professional workflows, automation patterns                |
| **PS Unit Test & Practice**               | 2-3 hours   | Practice exercises, assessment, reinforcement                                  |

**Outcomes:** Terminal fluency, file system mastery, basic scripting, screen reader optimization, automation readiness

---

#### **Pathway B: Windows Command Prompt (CMD)** (Simpler alternative)

**Total Duration:** 30-45 hours  
**Start here:** [CMD Curriculum Overview](CMDFoundation/CMDCurriculumOverview/CMDCurriculumOverview.md)

| Component                                    | Duration    | Content                                                             |
|----------------------------------------------|-------------|---------------------------------------------------------------------|
| **CMD-Pre: Your First Terminal**             | 2-2.5 hours | Opening CMD, first commands, basic navigation, screen reader tricks |
| **CMD-0: Getting Started**                   | 1.5 hours   | Paths, shortcuts, command basics                                    |
| **CMD-1: Navigation**                        | 2-2.5 hours | Moving around the file system confidently                           |
| **CMD-2: File & Folder Manipulation**        | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories  |
| **CMD-3: Input, Output & Redirection**       | 2-2.5 hours | Redirecting output, piping commands, understanding data flow        |
| **CMD-4: Environment Variables & Shortcuts** | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations    |
| **CMD-5: Filling in the Gaps**               | 2.5-3 hours | Batch files, advanced techniques, scripting fundamentals            |
| **CMD-6: Advanced Techniques**               | 3-3.5 hours | Scripts, automation patterns, professional workflows                |
| **CMD Unit Test & Practice**                 | 2-3 hours   | Practice exercises, assessment, reinforcement                       |

**Outcomes:** Terminal fluency, file system mastery, batch scripting, screen reader optimization, automation readiness

---

#### **Pathway C: Git Bash** (Best for macOS/Linux or cross-platform development)

**Total Duration:** 20-25 hours  
**Start here:** [Git Bash Curriculum Overview](GitBashFoundation/GitBashCurriculumOverview/GitBashCurriculumOverview.md)

| Component                             | Duration    | Content                                                                  |
|---------------------------------------|-------------|--------------------------------------------------------------------------|
| **GitBash-Pre: Your First Terminal**  | 2-2.5 hours | Opening Git Bash, first commands, basic navigation, screen reader tricks |
| **GitBash-1: Navigation & Files**     | 2-2.5 hours | File system fundamentals, moving around, creating/editing files          |
| **GitBash-2: Advanced Navigation**    | 2-2.5 hours | Advanced file operations, understanding paths, symlinks                  |
| **GitBash-3: Text Processing**        | 2-2.5 hours | grep, sed, awk, text manipulation                                        |
| **GitBash-4: Scripting & Automation** | 2.5-3 hours | Bash scripts, functions, loops, conditional logic                        |
| **GitBash-5: Professional Workflows** | 2-2.5 hours | Git integration, version control, collaboration patterns                 |
| **GitBash Unit Test & Practice**      | 2-2.5 hours | Practice exercises, assessment, reinforcement                            |

**Outcomes:** Terminal fluency, file system mastery, bash scripting, version control basics, automation readiness

---

### Common Outcomes (All Pathways)

- Comfort with terminal/command-line interface
- File system navigation and manipulation
- Basic scripting and automation
- Screen reader optimization for terminal work
- Foundation for 3DMake automation tasks

**Note:** Students should complete their chosen Command-Line Foundation pathway before starting 3dMake Lesson 9 (Automation). Lessons 1-8 can begin without CLI foundation, but Lesson 9+ requires command-line fluency.

---

### Part 2: 3dMake Foundation (Main Curriculum - 16-20 hours)

**Start here:** [3dMake Introduction](3dMakeFoundation/3dMakeIntro/3dMakeIntro.md)

11 progressive lessons building from foundational concepts to leadership-level design thinking, organized in 5 parts. Version 2.1 adds comprehensive advanced programming and design topics throughout.

#### **Part 1: Foundations** (Lessons 1-3 | ~4-5 hours)

| Lesson                                                            | Focus                                                           | Duration   | Project |
|-------------------------------------------------------------------|-----------------------------------------------------------------|------------|---------|
| **[Lesson 1](3dMakeFoundation/Lessons3dMake1/Lessons3dMake1.md)** | Environmental Configuration + Code Documentation Standards      | 60-90 min  | None    |
| **[Lesson 2](3dMakeFoundation/Lessons3dMake2/Lessons3dMake2.md)** | Primitives & Boolean Operations + Modifier Characters Debugging | 75-90 min  | None    |
| **[Lesson 3](3dMakeFoundation/Lessons3dMake3/Lessons3dMake3.md)** | Parametric Architecture + Advanced Programming Concepts         | 90-120 min | None    |

#### **Part 2: Verification & Safety** (Lessons 4-5 | ~2 hours)

| Lesson                                                            | Focus                                    | Duration  | Project |
|-------------------------------------------------------------------|------------------------------------------|-----------|---------|
| **[Lesson 4](3dMakeFoundation/Lessons3dMake4/Lessons3dMake4.md)** | AI-Enhanced Verification & Feedback      | 45-60 min | None    |
| **[Lesson 5](3dMakeFoundation/Lessons3dMake5/Lessons3dMake5.md)** | Safety Protocols & Material Introduction | 60-90 min | None    |

#### **Part 3: Applied Projects** (Lessons 6-8 | ~5-6 hours)

| Lesson                                                            | Focus                                     | Duration    | Project             |
|-------------------------------------------------------------------|-------------------------------------------|-------------|---------------------|
| **[Lesson 6](3dMakeFoundation/Lessons3dMake6/Lessons3dMake6.md)** | Practical 3dm Commands + String Functions | 75-105 min  | Customizable Keycap |
| **[Lesson 7](3dMakeFoundation/Lessons3dMake7/Lessons3dMake7.md)** | Parametric Transforms + Math Functions    | 90-120 min  | Phone Stand         |
| **[Lesson 8](3dMakeFoundation/Lessons3dMake8/Lessons3dMake8.md)** | Advanced Design + Assembly Best Practices | 105-150 min | Stackable Bins      |

#### **Part 4: Advanced Topics** (Lessons 9-10 | ~3-4 hours)

| Lesson                                                               | Focus                                                    | Duration    | Project                          |
|----------------------------------------------------------------------|----------------------------------------------------------|-------------|----------------------------------|
| **[Lesson 9](3dMakeFoundation/Lessons3dMake9/Lessons3dMake9.md)**    | Automation + File Import/Export (requires PS Foundation) | 75-105 min  | Batch Processing Automation      |
| **[Lesson 10](3dMakeFoundation/Lessons3dMake10/Lessons3dMake10.md)** | Troubleshooting & Mastery with Measurement               | 120-150 min | QA Testing + Accessibility Audit |

#### **Part 5: Leadership** (Lesson 11 | ~2 hours)

| Lesson                                                               | Focus                                        | Duration   | Project               |
|----------------------------------------------------------------------|----------------------------------------------|------------|-----------------------|
| **[Lesson 11](3dMakeFoundation/Lessons3dMake11/Lessons3dMake11.md)** | Stakeholder-Centric Design & Design Thinking | 90-120 min | Beaded Jewelry Holder |

**Total:** 16-20 hours of instruction + projects

---

## 8 Comprehensive Reference Appendices

Located in `/3dMakeFoundation/` alongside the lessons:

### **[Appendix A: Comprehensive Slicing Guide](3dMakeFoundation/AppendixAComprehensiveSlicingGuide.md)** (1,500+ lines)

Reference for 7 major slicers:

- PrusaSlicer, Bambu Studio, Cura, SuperSlicer, OrcaSlicer, IdeaMaker, Fusion 360
- Setup guides, parameter explanations, troubleshooting, command-line integration
- **Use when:** Slicing questions, switching slicers, quality issues

### **[Appendix B: Material Properties & Selection](3dMakeFoundation/AppendixBMaterialProperties.md)** (1,200+ lines)

Complete material reference for 6 materials:

- PLA, PETG, ABS, TPU, Polycarbonate, Nylon
- Properties tables, printing parameters, quality verification, cost analysis
- **Use when:** Choosing material, troubleshooting prints, cost analysis

### **[Appendix C: Tolerance Testing & QA Matrix](3dMakeFoundation/AppendixCToleranceQA.md)** (1,200+ lines)

Measurement-based quality assurance procedures:

- Caliper techniques, weight verification, functional testing, tolerance stack-up
- Step-by-step procedures, checklist templates, CSV tracking
- **Use when:** Starting a project, verifying dimensions, quality issues

### **[Appendix D: PowerShell Integration for SCAD Workflows](3dMakeFoundation/AppendixDPowerShellIntegration.md)** (1,100+ lines)

Complete automation guide for PowerShell + 3dMake:

- 5 complete PowerShell scripts for workflow automation
- Parametric sweeps, batch processing, print logging, printer communication
- **Use when:** Automating tasks, testing variations, batch printing

### **[Appendix E: Advanced OpenSCAD Concepts](3dMakeFoundation/Appendix_E_Advanced_OpenSCAD_Concepts.md)** (2,000+ lines)

Specialized topics for experienced designers (v2.1 NEW):

- **Gears and Mechanical Components**: Gear tooth geometry, servo gearboxes, belt/pulley systems
- **Batch Processing & Statistical Analysis**: Parameter sweeps, design space exploration, data-driven selection
- **Performance Optimization**: Render profiling, resolution strategies, caching calculations
- **Print Orientation & Support Algorithms**: Strength analysis, support minimization, bridge calculations
- **Recursive Function Patterns**: Fractals, nested structures, performance considerations
- **Use when:** Building mechanical systems, optimizing complex models, exploring design variations

---

## Learning Progression: Student Roles

Students move through roles across the curriculum:

| Phase                     | Role             | Core Tools                       | Focus                                          |
|---------------------------|------------------|----------------------------------|------------------------------------------------|
| **PowerShell Foundation** | Observer/Learner | Terminal, command line           | CLI fundamentals and keyboard navigation       |
| **3dMake Lessons 1-5**    | Observer/Learner | OpenSCAD, 3DMake, editor         | Using CLI tools, safety, concepts, measurement |
| **3dMake Lessons 6-8**    | Operator         | Editor, OpenSCAD, 3DMake, slicer | Hands-on practice with structured projects     |
| **3dMake Lessons 9-10**   | Designer         | Full toolchain                   | Parametric design, automation, troubleshooting |
| **3dMake Lesson 11**      | Problem-Solver   | Full toolchain + documentation   | Stakeholder design, real-world impact          |

---

## The Accessible Toolchain: How It Works

### OpenSCAD - Text-Based 3D Design

**OpenSCAD** is a free, open-source CAD tool that uses a programming language to describe 3D geometry. Students write code that defines shapes, transforms them, and combines them using Boolean operations.

**Why OpenSCAD?**

- **Screen reader friendly**: All work happens in a text editor; no visual-only 3D preview.
- **Repeatable**: Code is version-controlled, documented, and shareable.
- **Parametric**: Variables allow students to design once and generate variations by changing numbers.
- **No visual dependency**: Students reason about geometry through code structure and testing.

### 3DMake - The Non-Visual Build Bridge

**3DMake** is a command-line tool that automates the journey from OpenSCAD code to a printable file:

```bash
3dm build        
3dm info         
3dm slice        
```

**Why 3DMake?**

- **No GUI navigation**: All interaction is keyboard-driven and text-based.
- **Automation**: Eliminates repetitive manual steps.
- **Metadata tracking**: Configuration files store parameters as human-readable text.
- **Error reporting**: Diagnostic output is text that screen readers can read aloud.

### Accessible Editors

Students write OpenSCAD code using **screen reader-accessible editors**:

- **VS Code** (Windows, macOS, Linux): Industry-standard with built-in screen reader support
- **Notepad++** (Windows): Lightweight, keyboard-driven, excellent screen reader support
- **Command-line editors** (Nano, Vim, Emacs): Full keyboard control, no mouse needed

---

## Prerequisites by Section

| Section                   | Prerequisites                                 | What You'll Learn                                                      |
|---------------------------|-----------------------------------------------|------------------------------------------------------------------------|
| **PowerShell Foundation** | None - start here                             | Terminal basics, keyboard navigation, file operations, basic scripting |
| **3dMake Lessons 1-5**    | PowerShell Foundation                         | 3D printing concepts, safety, measurement, OpenSCAD basics, debugging  |
| **3dMake Lessons 6-8**    | Lessons 1-5                                   | Building projects, parametric design, transforms, tolerances           |
| **3dMake Lessons 9-10**   | Lessons 6-8 (Lesson 9 requires PS Foundation) | Automation, troubleshooting, advanced measurement and QA               |
| **3dMake Lesson 11**      | Lessons 9-10                                  | Stakeholder design, real-world prototyping, leadership                 |

---

## Grading Rubric

All projects are scored on a 0-9 scale across three equally weighted categories (3 points each):

| Category                  | Points | What We Measure                                                                                                            |
|---------------------------|--------|----------------------------------------------------------------------------------------------------------------------------|
| **Problem & Solution**    | 0-3    | Does the design solve the stated problem? Are all functional requirements met?                                             |
| **Design & Code Quality** | 0-3    | Is the OpenSCAD code clean, well-commented, and well-structured? Does the print work well? Is there evidence of iteration? |
| **Documentation**         | 0-3    | Are all sections complete? Are reflections thoughtful and specific? Are measurements recorded?                             |

### Category 1: Problem & Solution (0-3 points)

| Score | Description                                                                                                                                                            |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **3** | The prototype clearly and effectively solves the stated problem. All functional requirements are met. The solution shows evidence of testing against the requirements. |
| **2** | The prototype mostly meets the problem. Most functional requirements are met. Minor gaps between the design and the requirements.                                      |
| **1** | The prototype partially addresses the problem. Several functional requirements are not met or were not clearly tested.                                                 |
| **0** | The prototype does not address the stated problem, or no functional requirements were established.                                                                     |

### Category 2: Design & Code Quality (0-3 points)

**OpenSCAD code is central to this course.** We evaluate the clarity, structure, and documentation of your code as much as the print quality.

| Score | Description                                                                                                                                                                                          |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **3** | Code is clean, well-organized, and thoroughly commented. Variables/modules are used appropriately. Print quality is excellent. Design shows original thinking and at least one meaningful iteration. |
| **2** | Code works but lacks clear structure or comments. Variables are used but could be better named. Print quality is acceptable. Some iteration evident.                                                 |
| **1** | Code is functional but poorly organized. Comments are minimal or missing. Print quality has defects. Little or no iteration.                                                                         |
| **0** | Code does not work, is not submitted, or shows no original thinking. Print is not functional.                                                                                                        |

### Category 3: Documentation (0-3 points)

| Score | Description                                                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **3** | All required sections are present, complete, and specific. Reflections are thoughtful and reference specific decisions, problems encountered, and learning. Photos/measurements are included. |
| **2** | Most required sections are present. Some sections are vague or missing detail. Reflections show some thought but are brief or generic.                                                        |
| **1** | Documentation is incomplete. Major sections are missing or consist of one-line responses. Reflections are minimal.                                                                            |
| **0** | Documentation is not submitted or is essentially empty.                                                                                                                                       |

### Score Interpretation

| Total Score | Interpretation                      | Next Step                                              |
|-------------|-------------------------------------|--------------------------------------------------------|
| 8-9         | Excellent work                      | Move on to next project                                |
| 6-7         | Good work with room for improvement | Move on; instructor may suggest revisiting one element |
| 4-5         | Meets basic expectations            | Resubmission of specific weak areas recommended        |
| 2-3         | Does not meet expectations          | Resubmission required                                  |
| 0-1         | Missing major deliverables          | Meet with instructor; create a completion plan         |

### Resubmission Policy

Students may resubmit any project as many times as they need to improve their score. Resubmissions must include a one-paragraph explanation of what was changed and why. The resubmission score **replaces** the original score.

---

## Quick Links to Essential Tools & Setup

### Core Design Toolchain

### OpenSCAD

- [OpenSCAD Download](https://openscad.org/downloads.html) - Free, cross-platform CAD (all major OS)
- [OpenSCAD Documentation](https://openscad.org/documentation.html) - Official reference
- [OpenSCAD Cheat Sheet](3dMakeFoundation/Lessons3dMake2/openscad-cheat-sheet.md) - Quick syntax reference
- [OpenSCAD on GitHub](https://github.com/openscad/openscad) - Source code and issue tracking

### 3DMake

- [3DMake Documentation & Installation](https://github.com/tdeck/3dmake) - Command-line build tool for OpenSCAD
- [3dMake Quick Reference](3dMakeFoundation/3dMakeQuickReference.md) - Command and workflow reference
- [3DMake Terminal Quick Start](https://github.com/tdeck/3dmake/blob/main/docs/terminalquickstart.md) - CLI basics for new users

### Editors

- [VS Code Download](https://code.visualstudio.com/) - Free, screen-reader-accessible code editor
- [VS Code OpenSCAD Extension](https://marketplace.visualstudio.com/items?itemName=Anio.openscad) - Syntax highlighting for OpenSCAD
- [Notepad++ Download](https://notepad-plus-plus.org/) - Free, lightweight Windows editor with OpenSCAD syntax support
- [Vim/Neovim](https://www.vim.org/) - Terminal-based editor with full keyboard control

### Screen Reader & Accessibility

### Screen Readers

- [NVDA Download](https://www.nvaccess.org/) - Free, open-source screen reader (Windows)
- [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/) - Commercial screen reader (Windows, macOS)
- [VoiceOver (macOS/iOS)](https://www.apple.com/accessibility/voiceover/) - Built-in Apple screen reader
- [NVDA User Guide](https://www.nvaccess.org/documentation/) - Complete NVDA documentation

### Accessibility Configuration

- [Screen Reader Coding Tips (NVDA & JAWS)](3dMakeFoundation/Lessons3dMake1/nvda-jaws-coding-tips.md) - Keyboard shortcuts and configuration
- [VSCode Setup Guide](3dMakeFoundation/Lessons3dMake1/vscode-setup-guide.md) - Accessibility-focused editor configuration
- [Accessibility in VS Code](https://code.visualstudio.com/docs/editor/accessibility) - Official VS Code accessibility guide
- [JAWS Script Repository](https://github.com/jsa2/jaws-scripts-for-vscode) - Custom JAWS scripts for developers

### Terminal & Command Line

- [PowerShell & Command Line Fundamentals](PowerShellFoundation/PowershellIntroduction/PowershellIntroduction.md) - Terminal navigation for screen reader users
- [Windows Terminal Accessibility](https://learn.microsoft.com/en-us/windows/terminal/panes) - Official accessibility guide
- [Screen Reader Tips for Linux](https://www.linux-magazine.com/Issues/2018/214/Screen-Reader-Tips-for-Linux) - Linux-specific guidance

### Slicing & Printing

### Slicer Software & Documentation

- [PrusaSlicer Documentation](https://help.prusa3d.com/en/category/prusaslicer424/) - Official Prusa slicer
- [PrusaSlicer Download](https://www.prusa3d.com/page/prusaslicer424/) - Free slicer optimized for Prusa printers
- [Cura Slicer Documentation](https://ultimaker.com/en/resources/documentation) - Official UltiMaker Cura documentation
- [Cura Slicer Download](https://ultimaker.com/software/ultimaker-cura) - Free, open-source slicer for most printers
- [OrcaSlicer Documentation](https://github.com/SoftFever/OrcaSlicer/wiki) - Community wiki for OrcaSlicer
- [OrcaSlicer Download](https://github.com/SoftFever/OrcaSlicer/releases) - Free, open-source slicer fork with advanced features
- [Bambu Studio Documentation](https://wiki.bambulab.com/en/software/bambu-studio) - Official Bambu Lab slicer documentation
- [Bambu Studio Download](https://bambulab.com/en/download/studio) - Free slicer optimized for Bambu Lab printers
- [SuperSlicer Documentation](https://github.com/supermerill/SuperSlicer/wiki) - Community wiki for SuperSlicer
- [SuperSlicer Download](https://github.com/supermerill/SuperSlicer/releases) - Free, open-source advanced slicer
- [IdeaMaker Documentation](https://www.raise3d.com/ideamaker/) - Anycubic/Raise3D slicer documentation
- [IdeaMaker Download](https://www.raise3d.com/ideamaker) - Free slicer for Anycubic and other printers
- [Slic3r Documentation](https://slic3r.org/) - Original open-source command-line slicer
- [Fusion 360 Slicer](https://www.autodesk.com/products/fusion-360/overview) - Integrated slicer in Fusion 360 CAD
- [Repetier-Host Documentation](https://www.repetier.com/documentation/) - Host software with integrated slicing
- [Appendix A: Comprehensive Slicing Guide](3dMakeFoundation/AppendixAComprehensiveSlicingGuide.md) - Detailed comparison and setup guides for all major slicers

### OpenSCAD Learning

**Tutorials & Documentation:**

- [OpenSCAD Official Tutorials](https://openscad.org/documentation.html#tutorials) - Step-by-step guides from the OpenSCAD project
- [OpenSCAD User Manual](https://en.wikibooks.org/wiki/OpenSCADUserManual) - Community-maintained comprehensive reference
- [OpenSCAD by Example](https://openhome.cc/Codes/OpenSCAD/) - Practical examples with code
- [CadHub OpenSCAD Guide](https://learn.cadhub.xyz/blog/openscad-review/) - Real-world applications and best practices

**Advanced Resources:**

- [BOSL2 Library Documentation](https://github.com/revarbat/BOSL2/wiki) - Advanced shapes and transforms
- [OpenSCAD Libraries](https://openscad.org/libraries.html) - Complete library ecosystem
- [Dotscad](https://github.com/dotscad/dotscad) - Parametric design patterns library
- [OpenSCAD Performance Optimization](https://github.com/openscad/openscad/wiki/Performance) - Tips for faster rendering

### Supplemental Textbooks

**EPUB Textbooks:**

- [Programming with OpenSCAD: A Beginner's Guide to Coding 3D-Printable Objects](assets/ProgrammingwithOpenSCAD.epub) - Complete reference textbook (EPUB format)
- [Simplifying 3D Printing with OpenSCAD](assets/Simplifying3DPrintingwithOpenSCAD.epub) - Practical workflows and applications (EPUB format)

**Online Companion Resources:**

- [Programming with OpenSCAD Companion Resources](https://programmingwithopenscad.github.io/learning.html) - Practice worksheets and teaching materials
- [Visual Quick Reference Guides](https://programmingwithopenscad.github.io/quick-reference.html) - Command syntax and geometry reference
- [Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) - Working examples for all exercises
- [Teaching Tech 3D Printing Guide](https://www.youtube.com/c/TeachingTech/playlists) - Video tutorials and workflows

### Assistive Technology Design & Research

**Organizations & Communities:**

- [e-NABLE Community Foundation](https://enablingthefuture.org/) - 3D printed hand/arm devices
- [Makers Making Change](https://www.makersmakingchange.com/) - Open-source assistive designs
- [NIH 3D Print Exchange](https://3dprint.nih.gov/) - Medical and assistive models
- [Printables - Assistive Technology](https://www.printables.com/search/assistive) - Community models
- [Thingiverse - Adaptive/Accessibility](https://www.thingiverse.com/search?q=adaptive) - Model repository
- [YouMagine](https://www.youmagine.com/) - Open-source design platform

**Research & Resources:**

- [MIT D-Lab](https://d-lab.mit.edu/) - Design for development and assistive technology
- [Design for All Institute](https://www.designforall.org/) - Universal design principles
- [Inclusive Design Toolkit](https://www.inclusivedesigntoolkit.org/) - Design resources for disability

### Community & Forums

**OpenSCAD Community:**

- [OpenSCAD Discord](https://discord.gg/F2Nx2VxTB7) - Real-time chat and support
- [OpenSCAD Reddit](https://www.reddit.com/r/openscad/) - Discussion forum for OpenSCAD users
- [OpenSCAD Google Group](https://groups.google.com/forum/#!forum/openscad) - Email-based discussion list
- [CadHub Community](https://cadhub.xyz/community) - Collaborative 3D design community

**3D Printing Community:**

- [Reddit r/3Dprinting](https://www.reddit.com/r/3Dprinting/) - General 3D printing community
- [Prusa Community](https://www.prusaprinters.org/community) - Prusa-specific forum
- [Bambu Lab Forum](https://forum.bambulab.com/) - Bambu printer community
- [3DPrinting Stack Exchange](https://3dprinting.stackexchange.com/) - Q&A platform for 3D printing

### Troubleshooting Resources

### Common Issues

- [Common Issues and Solutions](3dMakeFoundation/Lessons3dMake10/commonissuesandsolutions.md) - Course-specific troubleshooting guide
- [Diagnostic Checklist](3dMakeFoundation/Lessons3dMake10/diagnosticchecklist.md) - Step-by-step diagnostics
- [OpenSCAD FAQ](https://openscad.org/faq.html) - Frequently asked questions
- [PrusaSlicer Troubleshooting](https://help.prusa3d.com/en/article/troubleshooting3) - Prusa-specific solutions

### Tools for Debugging

- [Netfabb Online](https://www.autodesk.com/products/netfabb/overview) - Free online mesh repair tool
- [Meshmixer](https://www.meshmixer.com/) - Advanced mesh editing and repair
- [MeshLab](https://www.meshlab.net/) - Open-source mesh processing
- [STL Viewer Online](https://www.viewstl.com/) - Quick STL preview without installing software

### Printer-Specific Guides

### Prusa Printers

- [Prusa Knowledge Base](https://help.prusa3d.com/en) - Official documentation and troubleshooting
- [Prusa Assembly Guides](https://www.prusa3d.com/en/print-safety-manual/) - Setup and calibration

### Bambu Lab Printers

- [Bambu Lab Wiki](https://wiki.bambulab.com/en/home) - Complete documentation
- [Bambu Lab Support](https://support.bambulab.com/) - Customer support resources

### Anycubic Printers

- [Anycubic Support](https://www.anycubic.com/pages/support-services) - Official support
- [Anycubic Community](https://www.anycubicforums.com/) - User forum

### Creality Printers

- [Creality Documentation](https://www.creality.com/pages/download-guides) - Official guides
- [Creality Support](https://www.creality.com/pages/service) - Customer service

---

## Local Resources: Utah Makerspaces & Community Printing

### Public Library Make Spaces

### Salt Lake City Public Library

- [SLC Public Creative Lab](https://services.slcpl.org/creativelab) - Main Library (Level 1)
  - Hardware: Prusa i3 MK3, LulzBot Taz 5, Elegoo Mars 2 (resin)
  - Pricing: Free for prints under 6 hours; $0.50/hr + material cost otherwise
  - Website: <https://services.slcpl.org/creativelab>

### Salt Lake County Library System

- [County Library "Create" Spaces](https://www.slcolibrary.org/what-we-have/create) - Locations: Daybreak, Granite, Kearns, Syracuse, Tooele, and more
  - Hardware: Flashforge Adventurer 5M Pro, LulzBot Workhorse, laser cutters
  - Pricing: $0.06 per gram of filament used
  - Website: <https://www.slcolibrary.org/what-we-have/create>

### Makerspaces & Community Centers

### Make Salt Lake

- Location: 663 W 100 S, Salt Lake City, UT 84101
- Website: <https://makesaltlake.org/>
- Equipment: Full metal shop, CNC machines, large-scale FDM and resin printing
- Membership: Required; offers certification classes for advanced tools
- Community: Active maker community with regular workshops

### University of Utah Maker Spaces

- [Lassonde Studios](https://www.theblackbookofinnovation.com/lassonde-studios) - Entrepreneurship and innovation hub
- [Marriott Library ProtoSpace](https://lib.utah.edu/protospace.php) - 3D printing and fabrication
- [Eccles Health Sciences Library Technology Hub](https://lib.utah.edu/services/) - Biomedical device development

### Utah Valley University

- [UVU Maker Hub](https://www.uvu.edu/maker/) - Open to community members
- Equipment: Large format 3D printers, laser cutters, CNC machines

### School & Educational Programs

### Salt Lake City Schools

- STEM Lab programs in select elementary and secondary schools
- Advanced manufacturing pathways in Career and Technical Education (CTE)
- Contact: Salt Lake City School District STEM Coordinator

### Weber School District

- Advanced Manufacturing Programs
- 3D Design and Fabrication courses in multiple high schools

### Online Printing Services (When Local Access Unavailable)

### National & International Services

- [Shapeways](https://www.shapeways.com/) - Professional print service with multiple materials
- [Sculpteo](https://www.sculpteo.com/) - Online 3D printing platform
- [Ponoko](https://www.ponoko.com/) - Custom manufacturing platform
- [3D Hubs](https://www.3dhubs.com/) - Community-based distributed manufacturing
- [Local Motors](https://localmotors.com/) - Custom manufacturing and consulting

### Material Suppliers (Utah & Regional)

**Local Filament Suppliers:**

- [MatterHackers](https://www.matterhackers.com/) - Online with local Utah roots; wide material selection
- [Hatchbox](https://www.hatchbox3d.com/) - Reliable filament available at local retailers
- [Prusament](https://shop.prusa3d.com/en/prusament) - Premium Prusa filament

**Regional Retailers:**

- Local Best Buy, Micro Center, and Fry's Electronics locations carry common filaments
- Amazon Prime for next-day delivery on most materials
- Local makerspaces often sell filament at cost

### Recycling & Sustainability

### 3D Printing Waste

- [Fused Filament Fab](https://www.fused3d.com/) - Filament recycling programs
- Salt Lake City Recycling Center: Accepts PLA and PETG at select locations
- Local makerspaces: Often have filament recycling programs

### Professional Development & Certifications

### Organizations Offering Training

- [Make Salt Lake Workshops](https://makesaltlake.org/classes/) - Regular classes and certifications
- [University of Utah Continuing Education](https://continue.utah.edu/) - Professional development courses
- [Weber State University](https://www.weber.edu/cepe/) - Continuing education programs

---

## Troubleshooting & Getting Help

### If you're stuck

1. Check [Common Issues and Solutions](3dMakeFoundation/Lessons3dMake10/commonissuesandsolutions.md)
2. Post in [OpenSCAD Discord](https://discord.gg/F2Nx2VxTB7) or [Reddit](https://www.reddit.com/r/openscad/)
3. Visit your local makerspace for hands-on support
4. Check printer-specific forums (Prusa, Bambu Lab, Anycubic, etc.)

### For accessibility support

- Contact your NVDA/JAWS vendor directly for technical assistance
- Post accessibility-specific questions in [OpenSCAD community](https://www.reddit.com/r/openscad/)
- This course's GitHub Issues page for curriculum-specific questions
