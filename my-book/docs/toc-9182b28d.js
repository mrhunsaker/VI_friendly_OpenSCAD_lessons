// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Cover.html">Cover</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Accessible 3D Printing with OpenSCAD and 3DMake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Syllabus.html">Syllabus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Setup/Screen_Reader_Accessibility_Guide/Screen_Reader_Accessibility_Guide.html"><strong aria-hidden="true">1.</strong> Part 1: Setup &amp; Accessibility Fundamentals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Setup/Screen_Reader_Choice/Screen_Reader_Choice.html"><strong aria-hidden="true">1.1.</strong> Screen Reader Choice: Windows CLI</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Setup/Braille_Displays/Braille_Displays.html"><strong aria-hidden="true">1.2.</strong> Braille Display &amp; Terminal Mode</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Setup/Editor_Selection_Setup/Editor_Selection_Setup.html"><strong aria-hidden="true">1.3.</strong> Editor Selection and Setup</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Command_Line_Interface_Selection/Command_Line_Interface_Selection.html"><strong aria-hidden="true">2.</strong> Part 2: Command-Line Foundation (Choose Your Path)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/Part_1.html"><strong aria-hidden="true">2.1.</strong> Part 2A: Foundations of PowerShell</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PowerShell_Curriculum_Overview/PowerShell_Curriculum_Overview.html"><strong aria-hidden="true">2.1.1.</strong> PowerShell Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_Pre_Your_First_Terminal/PS_Pre_Your_First_Terminal.html"><strong aria-hidden="true">2.1.2.</strong> PS-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_0_getting_started_layout_paths/PS_0_getting_started_layout_paths.html"><strong aria-hidden="true">2.1.3.</strong> PS-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_1_navigation/PS_1_navigation.html"><strong aria-hidden="true">2.1.4.</strong> PS-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_2_file_folder_manipulation_modification/PS_2_file_folder_manipulation_modification.html"><strong aria-hidden="true">2.1.5.</strong> PS-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_3_input_output_piping/PS_3_input_output_piping.html"><strong aria-hidden="true">2.1.6.</strong> PS-3: Input, Output, and Piping</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_4_environment_variables_aliases/PS_4_environment_variables_aliases.html"><strong aria-hidden="true">2.1.7.</strong> PS-4: Environment Variables and Aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_5_filling_in_the_gaps/PS_5_filling_in_the_gaps.html"><strong aria-hidden="true">2.1.8.</strong> PS-5: Filling in the Gaps - Control Flow, Profiles, and Useful Tricks</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_6_Advanced_Techniques/PS_6_Advanced_Techniques.html"><strong aria-hidden="true">2.1.9.</strong> PS-6: Advanced Terminal Techniques - Scripts, Functions &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_Unit_Test/PS_Unit_Test.html"><strong aria-hidden="true">2.1.10.</strong> PowerShell Unit Test &amp; Practice</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/Part_1.html"><strong aria-hidden="true">2.2.</strong> Part 2B: Foundations of Windows Command Prompt (CMD)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_Curriculum_Overview/CMD_Curriculum_Overview.html"><strong aria-hidden="true">2.2.1.</strong> CMD Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_Pre_Your_First_Terminal/CMD_Pre_Your_First_Terminal.html"><strong aria-hidden="true">2.2.2.</strong> CMD-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_0_getting_started_layout_paths/CMD_0_getting_started_layout_paths.html"><strong aria-hidden="true">2.2.3.</strong> CMD-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_1_navigation/CMD_1_navigation.html"><strong aria-hidden="true">2.2.4.</strong> CMD-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_2_file_folder_manipulation_modification/CMD_2_file_folder_manipulation_modification.html"><strong aria-hidden="true">2.2.5.</strong> CMD-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_3_input_output_piping/CMD_3_input_output_piping.html"><strong aria-hidden="true">2.2.6.</strong> CMD-3: Input, Output &amp; Redirection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_4_environment_variables_aliases/CMD_4_environment_variables_aliases.html"><strong aria-hidden="true">2.2.7.</strong> CMD-4: Environment Variables &amp; Shortcuts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_5_filling_in_the_gaps/CMD_5_filling_in_the_gaps.html"><strong aria-hidden="true">2.2.8.</strong> CMD-5: Filling in the Gaps - Batch Files &amp; Advanced Techniques</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_6_Advanced_Techniques/CMD_6_Advanced_Techniques.html"><strong aria-hidden="true">2.2.9.</strong> CMD-6: Advanced Terminal Techniques - Scripts &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMD_Foundation/CMD_Unit_Test/CMD_Unit_Test.html"><strong aria-hidden="true">2.2.10.</strong> CMD Unit Test &amp; Practice</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/Part_1.html"><strong aria-hidden="true">2.3.</strong> Part 2C: Foundations of Git Bash</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_Curriculum_Overview/GitBash_Curriculum_Overview.html"><strong aria-hidden="true">2.3.1.</strong> Git Bash Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_Pre_Your_First_Terminal/GitBash_Pre_Your_First_Terminal.html"><strong aria-hidden="true">2.3.2.</strong> GitBash-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_0_getting_started_layout_paths/GitBash_0_getting_started_layout_paths.html"><strong aria-hidden="true">2.3.3.</strong> GitBash-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_1_navigation/GitBash_1_navigation.html"><strong aria-hidden="true">2.3.4.</strong> GitBash-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_2_file_folder_manipulation_modification/GitBash_2_file_folder_manipulation_modification.html"><strong aria-hidden="true">2.3.5.</strong> GitBash-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_3_input_output_piping/GitBash_3_input_output_piping.html"><strong aria-hidden="true">2.3.6.</strong> GitBash-3: Input, Output &amp; Piping</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_4_environment_variables_aliases/GitBash_4_environment_variables_aliases.html"><strong aria-hidden="true">2.3.7.</strong> GitBash-4: Environment Variables &amp; Aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_5_filling_in_the_gaps/GitBash_5_filling_in_the_gaps.html"><strong aria-hidden="true">2.3.8.</strong> GitBash-5: Filling in the Gaps - Shell Profiles, History, and Debugging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_6_Advanced_Techniques/GitBash_6_Advanced_Techniques.html"><strong aria-hidden="true">2.3.9.</strong> GitBash-6: Advanced Terminal Techniques - Scripts, Functions &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBash_Foundation/GitBash_Unit_Test/GitBash_Unit_Test.html"><strong aria-hidden="true">2.3.10.</strong> GitBash Unit Test &amp; Practice</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Part_2.html"><strong aria-hidden="true">3.</strong> Part 3: 3dMake Foundation &amp; Design</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Intro/3dMake_Intro.html"><strong aria-hidden="true">3.1.</strong> 3D Make Introduction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.html"><strong aria-hidden="true">3.2.</strong> 3D Make Foundation Curriculum Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Tutorial/3dMake_Tutorial.html"><strong aria-hidden="true">3.3.</strong> 3D Make Tutorial</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.html"><strong aria-hidden="true">3.4.</strong> Lesson 1: Foundations of 3D Make</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/3dmake-setup-guide.html"><strong aria-hidden="true">3.4.1.</strong> Setup Guide: 3dMake</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/vscode-setup-guide.html"><strong aria-hidden="true">3.4.2.</strong> Setup Guide: VSCode</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/mdbook-navigation-guide.html"><strong aria-hidden="true">3.4.3.</strong> Navigation Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/terminology.html"><strong aria-hidden="true">3.4.4.</strong> Terminology &amp; Vocabulary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/vocabulary-glossary.html"><strong aria-hidden="true">3.4.5.</strong> Vocabulary Glossary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/nvda-jaws-coding-tips.html"><strong aria-hidden="true">3.4.6.</strong> Screen Reader Tips (NVDA &amp; JAWS)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/your-first-print.html"><strong aria-hidden="true">3.4.7.</strong> Your First Print Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/your_first_print_student_template.html"><strong aria-hidden="true">3.4.8.</strong> Your First Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1/your_first_print_teacher_template.html"><strong aria-hidden="true">3.4.9.</strong> Your First Print - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/Lessons_3dMake_2.html"><strong aria-hidden="true">3.5.</strong> Lesson 2: Geometric Primitives and Constructive Solid Geometry</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/openscad-cheat-sheet.html"><strong aria-hidden="true">3.5.1.</strong> OpenSCAD Cheat Sheet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/your-second-print.html"><strong aria-hidden="true">3.5.2.</strong> Your Second Print Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/your_second_print_student_template.html"><strong aria-hidden="true">3.5.3.</strong> Your Second Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/your_second_print_teacher_template.html"><strong aria-hidden="true">3.5.4.</strong> Your Second Print - Teacher Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/bonus-print.html"><strong aria-hidden="true">3.5.5.</strong> Bonus Print Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/bonus_print_student_template.html"><strong aria-hidden="true">3.5.6.</strong> Bonus Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2/bonus_print_teacher_template.html"><strong aria-hidden="true">3.5.7.</strong> Bonus Print - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_3/Lessons_3dMake_3.html"><strong aria-hidden="true">3.6.</strong> Lesson 3: Parametric Architecture and Modular Libraries</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_4/Lessons_3dMake_4.html"><strong aria-hidden="true">3.7.</strong> Lesson 4: AI-Enhanced Verification and Multimodal Feedback</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_4/DiceDiceDice.html"><strong aria-hidden="true">3.7.1.</strong> Dice-Dice-Dice Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_4/dice_dice_dice_student_template.html"><strong aria-hidden="true">3.7.2.</strong> Dice-Dice-Dice - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_4/dice_dice_dice_teacher_template.html"><strong aria-hidden="true">3.7.3.</strong> Dice-Dice-Dice - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.html"><strong aria-hidden="true">3.8.</strong> Lesson 5: Safety Protocols and the Physical Fabrication Interface</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_5/safety_checklist.html"><strong aria-hidden="true">3.8.1.</strong> Safety Checklist</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_5/maintenance_log.html"><strong aria-hidden="true">3.8.2.</strong> Maintenance Log</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.html"><strong aria-hidden="true">3.9.</strong> Lesson 6: Practical 3dm Commands and Text Embossing</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_6/slicing-settings-reference.html"><strong aria-hidden="true">3.9.1.</strong> Slicing Settings Reference</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_6/parametric-keychain.html"><strong aria-hidden="true">3.9.2.</strong> Parametric Keychain Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_6/parametric_keychain_student_template.html"><strong aria-hidden="true">3.9.3.</strong> Parametric Keychain - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_6/parametric_keychain_teacher_template.html"><strong aria-hidden="true">3.9.4.</strong> Parametric Keychain - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.html"><strong aria-hidden="true">3.10.</strong> Lesson 7: Parametric Transforms and the Phone Stand Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.html"><strong aria-hidden="true">3.11.</strong> Lesson 8: Advanced Parametric Design and Interlocking Features</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_8/snap-fit-clip.html"><strong aria-hidden="true">3.11.1.</strong> Snap-Fit Clip Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_8/snap_fit_clip_student_template.html"><strong aria-hidden="true">3.11.2.</strong> Snap-Fit Clip - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_8/snap_fit_clip_teacher_template.html"><strong aria-hidden="true">3.11.3.</strong> Snap-Fit Clip - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_9/Lessons_3dMake_9.html"><strong aria-hidden="true">3.12.</strong> Lesson 9: Automation and 3dm Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/Lessons_3dMake_10.html"><strong aria-hidden="true">3.13.</strong> Lesson 10: Hands-On Practice Exercises and Troubleshooting</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/diagnostic_checklist.html"><strong aria-hidden="true">3.13.1.</strong> Diagnostic Checklist</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/measurement_calibration_guide.html"><strong aria-hidden="true">3.13.2.</strong> Measurement Calibration Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/measurement-worksheet.html"><strong aria-hidden="true">3.13.3.</strong> Measurement Worksheet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/common_issues_and_solutions.html"><strong aria-hidden="true">3.13.4.</strong> Common Issues and Solutions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/Accessibility_Audit.html"><strong aria-hidden="true">3.13.5.</strong> Accessibility Audit Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/accessibility_audit_student_template.html"><strong aria-hidden="true">3.13.6.</strong> Accessibility Audit - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_10/accessibility_audit_teacher_template.html"><strong aria-hidden="true">3.13.7.</strong> Accessibility Audit - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/Lessons_3dMake_11.html"><strong aria-hidden="true">3.14.</strong> Lesson 11: Stakeholder-Centric Design and the Beaded Jewelry Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/stakeholder_interview_template.html"><strong aria-hidden="true">3.14.1.</strong> Stakeholder Interview Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/functional_requirements_template.html"><strong aria-hidden="true">3.14.2.</strong> Functional Requirements Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/design_specification_template.html"><strong aria-hidden="true">3.14.3.</strong> Design Specification Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/feedback_collection_template.html"><strong aria-hidden="true">3.14.4.</strong> Feedback Collection Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/master-rubric.html"><strong aria-hidden="true">3.14.5.</strong> Master Rubric</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_11/beaded-jewelry.html"><strong aria-hidden="true">3.14.6.</strong> Beaded Jewelry Project</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Final_Exam.html"><strong aria-hidden="true">3.15.</strong> 3D Make Final Exam</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Quick_Reference.html"><strong aria-hidden="true">3.16.</strong> 3D Make Quick Reference</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Appendices/Appendices.html"><strong aria-hidden="true">4.</strong> Appendices</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PowerShell_Introduction/PowerShell_Introduction.html"><strong aria-hidden="true">4.1.</strong> Appendix A: Introduction to Command Line Interfaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PowerShell_Tutorial/PowerShell_Tutorial.html"><strong aria-hidden="true">4.2.</strong> Appendix B: PowerShell Comprehensive Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.html"><strong aria-hidden="true">4.3.</strong> Appendix C: Comprehensive Slicing Guide - All Major Slicers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Appendix_B_Material_Properties.html"><strong aria-hidden="true">4.4.</strong> Appendix D: Material Properties &amp; Selection Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Appendix_C_Tolerance_QA.html"><strong aria-hidden="true">4.5.</strong> Appendix E: Tolerance Testing &amp; Quality Assurance Matrix</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Appendix_D_PowerShell_Integration.html"><strong aria-hidden="true">4.6.</strong> Appendix F: PowerShell Integration for SCAD Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Appendix_E_Advanced_OpenSCAD_Concepts.html"><strong aria-hidden="true">4.7.</strong> Appendix G: Advanced OpenSCAD Concepts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="assets/3dMake_Foundation/index.html"><strong aria-hidden="true">4.8.</strong> Appendix H: 3dMake Code Examples &amp; Assets</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Contributors.html">About the Author</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

