# 3D Design & Printing Curriculum - Non-Visual Toolchain Edition {#syllabus}

Author: Michael Ryan Hunsaker, M.Ed., Ph.D.
Last Updated: 2026-02-22
Target Audience: Blind and visually impaired high school students; anyone learning 3D design and printing through screen reader-accessible workflows.

## Overview

This curriculum teaches 3D design and digital fabrication using a fully accessible, command-line-driven toolchain centered on OpenSCAD (text-based CAD), 3DMake (non-visual build automation), and accessible editors (VS Code, Notepad++, command-line editors) with screen reader support. Students progress from foundational command-line skills through guided projects to real-world, stakeholder-driven design challenges.

### Who This Course Is For

This course is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, VoiceOver). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access.

Accessibility is not an add-on. It is the foundation of every tool, workflow, and lesson in this curriculum.

### Core Philosophy

1. Text-First Design: All core work happens in text editors and command-line interfaces - no graphical CAD previews, no mouse-dependent menu navigation.

2. Parametric Thinking: Students learn to express geometry as code using OpenSCAD, enabling precise, reproducible, and iterable designs without visual feedback.

3. Automation and Independence: 3DMake automates the journey from code to printed object, handling compilation, slicing orchestration, and metadata management through simple command-line commands and text configuration files.

4. Screen Reader Mastery: Students develop fluency with accessibility technologies (NVDA, JAWS, VoiceOver) and accessible editors, building skills that apply to careers in software, engineering, and digital fabrication.

5. Real-World Impact: Projects culminate in designing assistive-technology solutions for real stakeholders, combining technical skill with human-centered design and documentation.

## Curriculum Structure & Scope/Sequence

### Setup & Accessibility Fundamentals (Prerequisite - 2-3 hours)

Start here: [Screen Reader Accessibility Guide](Setup/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md)

Before choosing a command-line pathway, students optimize their screen reader setup for terminal work.

| Component                                                                                                         | Duration    | Content                                                                   |
|-------------------------------------------------------------------------------------------------------------------|-------------|---------------------------------------------------------------------------|
| [Screen Reader Accessibility Guide](Setup/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md) | 1-1.5 hours | NVDA/JAWS reference for PowerShell, CMD, and Git Bash; keyboard shortcuts |
| [Screen Reader Choice: Windows CLI](Setup/Screen_Reader_Choice/Screen_Reader_Choice.md)                           | 30 min      | Comparing NVDA, JAWS, Narrator, and Dolphin; choosing the right tool      |
| [Braille Display & Terminal Mode](Setup/Braille_Displays/Braille_Displays.md)                                     | 30 min      | Optional: configuring refreshable braille displays for terminal work      |
| [Editor Selection and Setup](Setup/Editor_Selection_Setup/Editor_Selection_Setup.md)                              | 30 min      | Choosing Notepad, Notepad++, or VS Code; configuring indent announcement  |

### Command-Line Foundation (Choose Your Path)

Start here: [Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md)

Students master terminal/command-line fundamentals before learning 3D design. Choose one of three equivalent pathways based on your operating system and preferences. All three pathways teach the same concepts and prepare you equally well for 3dMake work.

> [!IMPORTANT]
> Choose ONE pathway and complete it fully. All three teach identical fundamental concepts using different tools. Each integrates fully with 3D design workflows.

#### Pathway A: PowerShell Foundation (Recommended for Windows)

Total Duration: 30-45 hours
Start here: [PowerShell Curriculum Overview](PowerShell_Foundation/PowerShell_Curriculum_Overview/PowerShell_Curriculum_Overview.md)

| Component                                                                                                                                          | Duration    | Content                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------|
| [PowerShell Introduction](PowerShell_Foundation/Powershell_Introduction/Powershell_Introduction.md)                                                | 20-30 min   | Screen-reader-friendly quick-start (JAWS/NVDA); essential commands overview |
| [PowerShell Tutorial](PowerShell_Foundation/Powershell_Tutorial/Powershell_Tutorial.md)                                                            | 30-45 min   | Hands-on tutorial: paths, navigation, wildcards, running scripts            |
| [PS-Pre: Your First Terminal](PowerShell_Foundation/PS_Pre_Your_First_Terminal/PS_Pre_Your_First_Terminal.md)                                      | 2-2.5 hours | Opening PowerShell, first commands, basic navigation, screen reader tricks  |
| [PS-0: Getting Started](PowerShell_Foundation/PS_0_getting_started_layout_paths/PS_0_getting_started_layout_paths.md)                              | 1.5 hours   | Paths, shortcuts, tab completion                                            |
| [PS-1: Navigation](PowerShell_Foundation/PS_1_navigation/PS_1_navigation.md)                                                                       | 2-2.5 hours | Moving around the file system confidently                                   |
| [PS-2: File & Folder Manipulation](PowerShell_Foundation/PS_2_file_folder_manipulation_modification/PS_2_file_folder_manipulation_modification.md) | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories          |
| [PS-3: Input, Output & Piping](PowerShell_Foundation/PS_3_input_output_piping/PS_3_input_output_piping.md)                                         | 2.5-3 hours | Redirecting output, piping commands, understanding data flow                |
| [PS-4: Environment Variables & Aliases](PowerShell_Foundation/PS_4_environment_variables_aliases/PS_4_environment_variables_aliases.md)            | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations            |
| [PS-5: Filling in the Gaps](PowerShell_Foundation/PS_5_filling_in_the_gaps/PS_5_filling_in_the_gaps.md)                                            | 2.5-3 hours | Control flow, profiles, useful tricks, scripting fundamentals               |
| [PS-6: Advanced Terminal Techniques](PowerShell_Foundation/PS_6_Advanced_Techniques/PS_6_Advanced_Techniques.md)                                   | 4-4.5 hours | Scripts, functions, loops, professional workflows, automation patterns      |
| [PowerShell Unit Test & Practice](PowerShell_Foundation/PS_Unit_Test/PS_Unit_Test.md)                                                              | 2-3 hours   | Practice exercises, assessment, reinforcement                               |

Outcomes: Terminal fluency, file system mastery, basic scripting, screen reader optimization, automation readiness

#### Pathway B: Windows Command Prompt (CMD) (Simpler alternative)

Total Duration: 30-45 hours
Start here: [CMD Curriculum Overview](CMD_Foundation/CMD_Curriculum_Overview/CMD_Curriculum_Overview.md)

| Component                                                                                                                                      | Duration    | Content                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------------------------------------------------------|
| [CMD-Pre: Your First Terminal](CMD_Foundation/CMD_Pre_Your_First_Terminal/CMD_Pre_Your_First_Terminal.md)                                      | 2-2.5 hours | Opening CMD, first commands, basic navigation, screen reader tricks |
| [CMD-0: Getting Started](CMD_Foundation/CMD_0_getting_started_layout_paths/CMD_0_getting_started_layout_paths.md)                              | 1.5 hours   | Paths, shortcuts, command basics                                    |
| [CMD-1: Navigation](CMD_Foundation/CMD_1_navigation/CMD_1_navigation.md)                                                                       | 2-2.5 hours | Moving around the file system confidently                           |
| [CMD-2: File & Folder Manipulation](CMD_Foundation/CMD_2_file_folder_manipulation_modification/CMD_2_file_folder_manipulation_modification.md) | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories  |
| [CMD-3: Input, Output & Redirection](CMD_Foundation/CMD_3_input_output_piping/CMD_3_input_output_piping.md)                                    | 2-2.5 hours | Redirecting output, piping commands, understanding data flow        |
| [CMD-4: Environment Variables & Shortcuts](CMD_Foundation/CMD_4_environment_variables_aliases/CMD_4_environment_variables_aliases.md)          | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations    |
| [CMD-5: Filling in the Gaps](CMD_Foundation/CMD_5_filling_in_the_gaps/CMD_5_filling_in_the_gaps.md)                                            | 2.5-3 hours | Batch files, advanced techniques, scripting fundamentals            |
| [CMD-6: Advanced Terminal Techniques](CMD_Foundation/CMD_6_Advanced_Techniques/CMD_6_Advanced_Techniques.md)                                   | 3-3.5 hours | Scripts, automation patterns, professional workflows                |
| [CMD Unit Test & Practice](CMD_Foundation/CMD_Unit_Test/CMD_Unit_Test.md)                                                                      | 2-3 hours   | Practice exercises, assessment, reinforcement                       |

Outcomes: Terminal fluency, file system mastery, batch scripting, screen reader optimization, automation readiness

#### Pathway C: Git Bash (Best for macOS/Linux or cross-platform development)

Total Duration: 20-25 hours
Start here: [Git Bash Curriculum Overview](GitBash_Foundation/GitBash_Curriculum_Overview/GitBash_Curriculum_Overview.md)

| Component                                                                                                                                                        | Duration      | Content                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------|
| [Git Bash Introduction](GitBash_Foundation/GitBash_Introduction/GitBash_Introduction.md)                                                                         | 20-30 min     | Screen-reader-friendly quick-start (JAWS/NVDA); essential commands       |
| [Git Bash Tutorial](GitBash_Foundation/GitBash_Tutorial/GitBash_Tutorial.md)                                                                                     | 30-45 min     | Hands-on tutorial: paths, navigation, wildcards, running scripts         |
| [Screen Reader Accessibility Guide for Git Bash](GitBash_Foundation/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md)                      | 30-45 min     | NVDA and JAWS configuration specific to Git Bash                         |
| [GitBash-Pre: Your First Terminal](GitBash_Foundation/GitBash_Pre_Your_First_Terminal/GitBash_Pre_Your_First_Terminal.md)                                        | 2-2.5 hours   | Opening Git Bash, first commands, basic navigation, screen reader tricks |
| [GitBash-0: Getting Started](GitBash_Foundation/GitBash_0_getting_started_layout_paths/GitBash_0_getting_started_layout_paths.md)                                | 1.5 hours     | Unix-style paths, shortcuts, command basics, Windows path conversion     |
| [GitBash-1: Navigation](GitBash_Foundation/GitBash_1_navigation/GitBash_1_navigation.md)                                                                         | 2-2.5 hours   | Moving around the file system confidently                                |
| [GitBash-2: File and Folder Manipulation](GitBash_Foundation/GitBash_2_file_folder_manipulation_modification/GitBash_2_file_folder_manipulation_modification.md) | 2-2.5 hours   | Creating, editing, moving, copying, deleting files and directories       |
| [GitBash-3: Input, Output & Piping](GitBash_Foundation/GitBash_3_input_output_piping/GitBash_3_input_output_piping.md)                                           | 2-2.5 hours   | Redirecting output, piping with grep/sort/wc, understanding data flow    |
| [GitBash-4: Environment Variables & Aliases](GitBash_Foundation/GitBash_4_environment_variables_aliases/GitBash_4_environment_variables_aliases.md)              | 1.5-2 hours   | Setting variables, creating aliases, editing .bashrc                     |
| [GitBash-5: Filling in the Gaps](GitBash_Foundation/GitBash_5_filling_in_the_gaps/GitBash_5_filling_in_the_gaps.md)                                              | 2-2.5 hours   | Shell profiles, command history, debugging                               |
| [GitBash-6: Advanced Terminal Techniques](GitBash_Foundation/GitBash_6_Advanced_Techniques/GitBash_6_Advanced_Techniques.md)                                     | 2.5-3.5 hours | Shell scripts, functions, loops, professional workflows                  |
| [GitBash Unit Test & Practice](GitBash_Foundation/GitBash_Unit_Test/GitBash_Unit_Test.md)                                                                        | 2-2.5 hours   | Practice exercises, assessment, reinforcement                            |

Outcomes: Terminal fluency, file system mastery, bash scripting, version control basics, automation readiness

### Common Outcomes (All Pathways)

- Comfort with terminal/command-line interface
- File system navigation and manipulation
- Basic scripting and automation
- Screen reader optimization for terminal work
- Foundation for 3DMake automation tasks

### 3dMake Foundation (Main Curriculum - 16-20 hours)

Start here: [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

11 progressive lessons building from foundational concepts to leadership-level design thinking, organized in 5 parts. Version 2.1 adds comprehensive advanced programming and design topics throughout.

#### Foundations (Lessons 1-3 | ~4-5 hours)

| Lesson                                                             | Focus                                                           | Duration   | Project |
|--------------------------------------------------------------------|-----------------------------------------------------------------|------------|---------|
| [Lesson 1](3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.md) | Environmental Configuration + Code Documentation Standards      | 60-90 min  | None    |
| [Lesson 2](3dMake_Foundation/Lessons_3dMake_2/Lessons_3dMake_2.md) | Primitives & Boolean Operations + Modifier Characters Debugging | 75-90 min  | None    |
| [Lesson 3](3dMake_Foundation/Lessons_3dMake_3/Lessons_3dMake_3.md) | Parametric Architecture + Advanced Programming Concepts         | 90-120 min | None    |

#### Verification & Safety (Lessons 4-5 | ~2 hours)

| Lesson                                                             | Focus                                    | Duration  | Project |
|--------------------------------------------------------------------|------------------------------------------|-----------|---------|
| [Lesson 4](3dMake_Foundation/Lessons_3dMake_4/Lessons_3dMake_4.md) | AI-Enhanced Verification & Feedback      | 45-60 min | None    |
| [Lesson 5](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) | Safety Protocols & Material Introduction | 60-90 min | None    |

#### Applied Projects (Lessons 6-8 | ~5-6 hours)

| Lesson                                                             | Focus                                     | Duration    | Project             |
|--------------------------------------------------------------------|-------------------------------------------|-------------|---------------------|
| [Lesson 6](3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md) | Practical 3dm Commands + String Functions | 75-105 min  | Customizable Keycap |
| [Lesson 7](3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.md) | Parametric Transforms + Math Functions    | 90-120 min  | Phone Stand         |
| [Lesson 8](3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md) | Advanced Design + Assembly Best Practices | 105-150 min | Stackable Bins      |

#### Advanced Topics (Lessons 9-10 | ~3-4 hours)

| Lesson                                                                | Focus                                                     | Duration    | Project                          |
|-----------------------------------------------------------------------|-----------------------------------------------------------|-------------|----------------------------------|
| [Lesson 9](3dMake_Foundation/Lessons_3dMake_9/Lessons_3dMake_9.md)    | Automation + File Import/Export (requires CLI Foundation) | 75-105 min  | Batch Processing Automation      |
| [Lesson 10](3dMake_Foundation/Lessons_3dMake_10/Lessons_3dMake_10.md) | Troubleshooting & Mastery with Measurement                | 120-150 min | QA Testing + Accessibility Audit |

#### Leadership (Lesson 11 | ~2 hours)

| Lesson                                                                | Focus                                        | Duration   | Project               |
|-----------------------------------------------------------------------|----------------------------------------------|------------|-----------------------|
| [Lesson 11](3dMake_Foundation/Lessons_3dMake_11/Lessons_3dMake_11.md) | Stakeholder-Centric Design & Design Thinking | 90-120 min | Beaded Jewelry Holder |

Total: 16-20 hours of instruction + projects

### Reference Appendices

Located in `3dMake_Foundation/` alongside the lessons:

| Appendix                                                                  | Title                                        | Use When                                                 |
|---------------------------------------------------------------------------|----------------------------------------------|----------------------------------------------------------|
| [Appendix A](3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md) | Comprehensive Slicing Guide                  | Slicing questions, switching slicers, quality issues     |
| [Appendix B](3dMake_Foundation/Appendix_B_Material_Properties.md)         | Material Properties & Selection Guide        | Choosing material, troubleshooting prints, cost analysis |
| [Appendix C](3dMake_Foundation/Appendix_C_Tolerance_QA.md)                | Tolerance Testing & Quality Assurance Matrix | Starting a project, verifying dimensions, quality issues |
| [Appendix D](3dMake_Foundation/Appendix_D_PowerShell_Integration.md)      | PowerShell Integration for SCAD Workflows    | Automating tasks, testing variations, batch printing     |
| [Appendix E](3dMake_Foundation/Appendix_E_Advanced_OpenSCAD_Concepts.md)  | Advanced OpenSCAD Concepts                   | Building mechanical systems, optimizing complex models   |
| [Appendix F](assets/3dMake_Foundation/README.md)                          | 3dMake Code Examples & Assets                | Reference designs, working code examples                 |

## Learning Progression: Student Roles

Students move through roles across the curriculum:

| Phase               | Role             | Core Tools                       | Focus                                          |
|---------------------|------------------|----------------------------------|------------------------------------------------|
| CLI Foundation      | Observer/Learner | Terminal, command line           | CLI fundamentals and keyboard navigation       |
| 3dMake Lessons 1-5  | Observer/Learner | OpenSCAD, 3DMake, editor         | Using CLI tools, safety, concepts, measurement |
| 3dMake Lessons 6-8  | Operator         | Editor, OpenSCAD, 3DMake, slicer | Hands-on practice with structured projects     |
| 3dMake Lessons 9-10 | Designer         | Full toolchain                   | Parametric design, automation, troubleshooting |
| 3dMake Lesson 11    | Problem-Solver   | Full toolchain + documentation   | Stakeholder design, real-world impact          |

## The Accessible Toolchain: How It Works

### OpenSCAD - Text-Based 3D Design

OpenSCAD is a free, open-source CAD tool that uses a programming language to describe 3D geometry. Students write code that defines shapes, transforms them, and combines them using Boolean operations.

Why OpenSCAD?

- Screen reader friendly: All work happens in a text editor; no visual-only 3D preview.
- Repeatable: Code is version-controlled, documented, and shareable.
- Parametric: Variables allow students to design once and generate variations by changing numbers.
- No visual dependency: Students reason about geometry through code structure and testing.

### 3DMake - The Non-Visual Build Bridge

3DMake is a command-line tool that automates the journey from OpenSCAD code to a printable file:

```bash
3dm build
3dm info
3dm slice
```

Why 3DMake?

- No GUI navigation: All interaction is keyboard-driven and text-based.
- Automation: Eliminates repetitive manual steps.
- Metadata tracking: Configuration files store parameters as human-readable text.
- Error reporting: Diagnostic output is text that screen readers can read aloud.

### Accessible Editors

Students write OpenSCAD code using screen reader-accessible editors:

- VS Code (Windows, macOS, Linux): Industry-standard with built-in screen reader support
- Notepad++ (Windows): Lightweight, keyboard-driven, excellent screen reader support
- Command-line editors (Nano, Vim, Emacs): Full keyboard control, no mouse needed

## Prerequisites by Section

| Section             | Prerequisites                         | What You'll Learn                                                      |
|---------------------|---------------------------------------|------------------------------------------------------------------------|
| Setup               | None - start here                     | Screen reader optimization, editor selection, accessibility setup      |
| CLI Foundation      | Setup                                 | Terminal basics, keyboard navigation, file operations, basic scripting |
| 3dMake Lessons 1-5  | Setup (CLI Foundation recommended)    | 3D printing concepts, safety, measurement, OpenSCAD basics, debugging  |
| 3dMake Lessons 6-8  | Lessons 1-5                           | Building projects, parametric design, transforms, tolerances           |
| 3dMake Lessons 9-10 | Lessons 6-8 + CLI Foundation required | Automation, troubleshooting, advanced measurement and QA               |
| 3dMake Lesson 11    | Lessons 9-10                          | Stakeholder design, real-world prototyping, leadership                 |

## Grading Rubric

All projects are scored on a 0-9 scale across three equally weighted categories (3 points each):

| Category              | Points | What We Measure                                                                                                            |
|-----------------------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Problem & Solution    | 0-3    | Does the design solve the stated problem? Are all functional requirements met?                                             |
| Design & Code Quality | 0-3    | Is the OpenSCAD code clean, well-commented, and well-structured? Does the print work well? Is there evidence of iteration? |
| Documentation         | 0-3    | Are all sections complete? Are reflections thoughtful and specific? Are measurements recorded?                             |

### Category 1: Problem & Solution (0-3 points)

| Score | Description                                                                                                                                                            |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | The prototype clearly and effectively solves the stated problem. All functional requirements are met. The solution shows evidence of testing against the requirements. |
| 2     | The prototype mostly meets the problem. Most functional requirements are met. Minor gaps between the design and the requirements.                                      |
| 1     | The prototype partially addresses the problem. Several functional requirements are not met or were not clearly tested.                                                 |
| 0     | The prototype does not address the stated problem, or no functional requirements were established.                                                                     |

### Category 2: Design & Code Quality (0-3 points)

OpenSCAD code is central to this course. We evaluate the clarity, structure, and documentation of your code as much as the print quality.

| Score | Description                                                                                                                                                                                          |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | Code is clean, well-organized, and thoroughly commented. Variables/modules are used appropriately. Print quality is excellent. Design shows original thinking and at least one meaningful iteration. |
| 2     | Code works but lacks clear structure or comments. Variables are used but could be better named. Print quality is acceptable. Some iteration evident.                                                 |
| 1     | Code is functional but poorly organized. Comments are minimal or missing. Print quality has defects. Little or no iteration.                                                                         |
| 0     | Code does not work, is not submitted, or shows no original thinking. Print is not functional.                                                                                                        |

### Category 3: Documentation (0-3 points)

| Score | Description                                                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | All required sections are present, complete, and specific. Reflections are thoughtful and reference specific decisions, problems encountered, and learning. Photos/measurements are included. |
| 2     | Most required sections are present. Some sections are vague or missing detail. Reflections show some thought but are brief or generic.                                                        |
| 1     | Documentation is incomplete. Major sections are missing or consist of one-line responses. Reflections are minimal.                                                                            |
| 0     | Documentation is not submitted or is essentially empty.                                                                                                                                       |

### Score Interpretation

| Total Score | Interpretation                      | Next Step                                              |
|-------------|-------------------------------------|--------------------------------------------------------|
| 8-9         | Excellent work                      | Move on to next project                                |
| 6-7         | Good work with room for improvement | Move on; instructor may suggest revisiting one element |
| 4-5         | Meets basic expectations            | Resubmission of specific weak areas recommended        |
| 2-3         | Does not meet expectations          | Resubmission required                                  |
| 0-1         | Missing major deliverables          | Meet with instructor; create a completion plan         |

### Resubmission Policy

Students may resubmit any project as many times as they need to improve their score. Resubmissions must include a one-paragraph explanation of what was changed and why. The resubmission score replaces the original score.

## Quick Links to Essential Tools & Setup

### Core Design Toolchain

OpenSCAD

- [OpenSCAD Download](https://openscad.org/downloads.html) - Free, cross-platform CAD (all major OS)
- [OpenSCAD Documentation](https://openscad.org/documentation.html) - Official reference
- [OpenSCAD Cheat Sheet](3dMake_Foundation/Lessons_3dMake_2/openscad-cheat-sheet.md) - Quick syntax reference

3DMake

- [3DMake Documentation & Installation](https://github.com/tdeck/3dmake) - Command-line build tool for OpenSCAD
- [3dMake Quick Reference](3dMake_Foundation/3dMake_Quick_Reference.md) - Command and workflow reference

Editors
- [VS Code Download](https://code.visualstudio.com/) - Free, screen-reader-accessible code editor
- [Notepad++ Download](https://notepad-plus-plus.org/) - Free, lightweight Windows editor
- [Editor Selection and Setup Guide](Setup/Editor_Selection_Setup/Editor_Selection_Setup.md) - Accessibility-focused setup guide

### Screen Reader & Accessibility

Screen Readers

- [NVDA Download](https://www.nvaccess.org/) - Free, open-source screen reader (Windows)
- [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/) - Commercial screen reader (Windows, macOS)

Accessibility Configuration

- [Screen Reader Accessibility Guide](Setup/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md) - Comprehensive terminal accessibility guide
- [Screen Reader Coding Tips (NVDA & JAWS)](3dMake_Foundation/Lessons_3dMake_1/nvda-jaws-coding-tips.md) - Keyboard shortcuts and configuration
- [VSCode Setup Guide](3dMake_Foundation/Lessons_3dMake_1/vscode-setup-guide.md) - Accessibility-focused editor configuration
- [Git Bash Screen Reader Guide](GitBash_Foundation/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md) - NVDA and JAWS configuration for Git Bash

### Slicing Software

- [PrusaSlicer](https://www.prusa3d.com/page/prusaslicer424/)
- [Bambu Studio](https://bambulab.com/en/download/studio)
- [Cura](https://ultimaker.com/software/ultimaker-cura)
- [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer/releases)
- [Appendix A: Comprehensive Slicing Guide](3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md) - Detailed setup guides for all major slicers

### Supplemental Textbooks

- [Programming with OpenSCAD: A Beginner's Guide](https://nostarch.com/programmingopenscad)
- [Simplifying 3D Printing with OpenSCAD](https://www.packtpub.com/en-us/product/simplifying-3d-printing-with-openscad-9781801813174)
- [Programming with OpenSCAD Companion Resources](https://programmingwithopenscad.github.io/learning.html)
- [Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)

## Local Resources: Utah Makerspaces & Community Printing

### Public Library Make Spaces

Salt Lake City Public Library

- [SLC Public Creative Lab](https://services.slcpl.org/creativelab) - Main Library (Level 1)
  - Hardware: Prusa i3 MK3, LulzBot Taz 5, Elegoo Mars 2 (resin)
  - Pricing: Free for prints under 6 hours; $0.50/hr + material cost otherwise

Salt Lake County Library System

- [County Library "Create" Spaces](https://www.slcolibrary.org/what-we-have/create)
  - Hardware: Flashforge Adventurer 5M Pro, LulzBot Workhorse, laser cutters
  - Pricing: $0.06 per gram of filament used

### Makerspaces & Community Centers

Make Salt Lake

- Location: 663 W 100 S, Salt Lake City, UT 84101
- Website: [https://makesaltlake.org/](https://makesaltlake.org/)
- Equipment: Full metal shop, CNC machines, large-scale FDM and resin printing

University of Utah Maker Spaces

- [Lassonde Studios](https://www.theblackbookofinnovation.com/lassonde-studios)
- [Marriott Library ProtoSpace](https://lib.utah.edu/protospace.php)

## Troubleshooting & Getting Help

If you're stuck:

1. Check [Common Issues and Solutions](3dMake_Foundation/Lessons_3dMake_10/common_issues_and_solutions.md)
2. Check [Diagnostic Checklist](3dMake_Foundation/Lessons_3dMake_10/diagnostic_checklist.md)
3. Post in [OpenSCAD Discord](https://discord.gg/F2Nx2VxTB7) or [Reddit](https://www.reddit.com/r/openscad/)
4. Visit your local makerspace for hands-on support

For accessibility support:

- Contact your NVDA/JAWS vendor directly for technical assistance
- Refer to the [Screen Reader Accessibility Guide](Setup/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md)
- Check the [Git Bash Screen Reader Guide](GitBash_Foundation/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.md) if using Git Bash

