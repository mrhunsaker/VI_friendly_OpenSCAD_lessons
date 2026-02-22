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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Accessible 3D Printing with OpenSCAD and 3DMake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Syllabus.html">Syllabus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/ScreenReaderAccessibilityGuide/ScreenReaderAccessibilityGuide.html">Screen Reader Accessibility Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ScreenReaderChoice.html">Screen Reader Choice: Windows CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="BrailleDisplays.html">Braille Display &amp; Terminal Mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CommandLineInterfaceSelection.html">Choose Your Command Line Interface Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/Part1.html"><strong aria-hidden="true">1.</strong> Part 1: (Option) Foundations of PowerShell - Terminal &amp; Screen Reader Accessibility</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PowerShellCurriculumOverview/PowerShellCurriculumOverview.html"><strong aria-hidden="true">1.1.</strong> PowerShell Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PSPreYourFirstTerminal/PSPreYourFirstTerminal.html"><strong aria-hidden="true">1.2.</strong> PS-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS0gettingstartedlayoutpaths/PS0gettingstartedlayoutpaths.html"><strong aria-hidden="true">1.3.</strong> PS-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS1navigation/PS1navigation.html"><strong aria-hidden="true">1.4.</strong> PS-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS2filefoldermanipulationmodification/PS2filefoldermanipulationmodification.html"><strong aria-hidden="true">1.5.</strong> PS-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS3inputoutputpiping/PS3inputoutputpiping.html"><strong aria-hidden="true">1.6.</strong> PS-3: Input, Output, and Piping</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS4environmentvariablesaliases/PS4environmentvariablesaliases.html"><strong aria-hidden="true">1.7.</strong> PS-4: Environment Variables and Aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS5fillinginthegaps/PS5fillinginthegaps.html"><strong aria-hidden="true">1.8.</strong> PS-5: Filling in the Gaps - Control Flow, Profiles, and Useful Tricks</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PS6AdvancedTechniques/PS6AdvancedTechniques.html"><strong aria-hidden="true">1.9.</strong> PS-6: Advanced Terminal Techniques - Scripts, Functions &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PSUnitTest/PSUnitTest.html"><strong aria-hidden="true">1.10.</strong> PowerShell Unit Test &amp; Practice</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CMDFoundation/Part1.html"><strong aria-hidden="true">2.</strong> Part 1 (Option): Foundations of Windows Command Prompt - Terminal &amp; Screen Reader Accessibility</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMDCurriculumOverview/CMDCurriculumOverview.html"><strong aria-hidden="true">2.1.</strong> CMD Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMDPreYourFirstTerminal/CMDPreYourFirstTerminal.html"><strong aria-hidden="true">2.2.</strong> CMD-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD0gettingstartedlayoutpaths/CMD0gettingstartedlayoutpaths.html"><strong aria-hidden="true">2.3.</strong> CMD-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD1navigation/CMD1navigation.html"><strong aria-hidden="true">2.4.</strong> CMD-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD2filefoldermanipulationmodification/CMD2filefoldermanipulationmodification.html"><strong aria-hidden="true">2.5.</strong> CMD-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD3inputoutputpiping/CMD3inputoutputpiping.html"><strong aria-hidden="true">2.6.</strong> CMD-3: Input, Output &amp; Redirection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD4environmentvariablesaliases/CMD4environmentvariablesaliases.html"><strong aria-hidden="true">2.7.</strong> CMD-4: Environment Variables &amp; Shortcuts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD5fillinginthegaps/CMD5fillinginthegaps.html"><strong aria-hidden="true">2.8.</strong> CMD-5: Filling in the Gaps - Batch Files &amp; Advanced Techniques</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMD6AdvancedTechniques/CMD6AdvancedTechniques.html"><strong aria-hidden="true">2.9.</strong> CMD-6: Advanced Terminal Techniques - Scripts &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CMDFoundation/CMDUnitTest/CMDUnitTest.html"><strong aria-hidden="true">2.10.</strong> CMD Unit Test &amp; Practice</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GitBashFoundation/Part1.html"><strong aria-hidden="true">3.</strong> Part 1 (Option): Foundations of Git Bash - Terminal &amp; Screen Reader Accessibility</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBashCurriculumOverview/GitBashCurriculumOverview.html"><strong aria-hidden="true">3.1.</strong> GitBash Curriculum Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBashPreYourFirstTerminal/GitBashPreYourFirstTerminal.html"><strong aria-hidden="true">3.2.</strong> GitBash-Pre: Your First Terminal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash0gettingstartedlayoutpaths/GitBash0gettingstartedlayoutpaths.html"><strong aria-hidden="true">3.3.</strong> GitBash-0: Getting Started - Layout, Paths, and the Shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash1navigation/GitBash1navigation.html"><strong aria-hidden="true">3.4.</strong> GitBash-1: Navigation - Moving Around Your File System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash2filefoldermanipulationmodification/GitBash2filefoldermanipulationmodification.html"><strong aria-hidden="true">3.5.</strong> GitBash-2: File and Folder Manipulation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash3inputoutputpiping/GitBash3inputoutputpiping.html"><strong aria-hidden="true">3.6.</strong> GitBash-3: Input, Output &amp; Piping</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash4environmentvariablesaliases/GitBash4environmentvariablesaliases.html"><strong aria-hidden="true">3.7.</strong> GitBash-4: Environment Variables &amp; Aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash5fillinginthegaps/GitBash5fillinginthegaps.html"><strong aria-hidden="true">3.8.</strong> GitBash-5: Filling in the Gaps - Shell Profiles, History, and Debugging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBash6AdvancedTechniques/GitBash6AdvancedTechniques.html"><strong aria-hidden="true">3.9.</strong> GitBash-6: Advanced Terminal Techniques - Scripts, Functions &amp; Professional Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="GitBashFoundation/GitBashUnitTest/GitBashUnitTest.html"><strong aria-hidden="true">3.10.</strong> GitBash Unit Test &amp; Practice</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Part2.html"><strong aria-hidden="true">4.</strong> Part 2: 3dMake and OpenSCAD</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/3dMakeIntro/3dMakeIntro.html"><strong aria-hidden="true">4.1.</strong> 3D Make Intro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/3dMakeTutorial/3dMakeTutorial.html"><strong aria-hidden="true">4.2.</strong> 3D Make Tutorial</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/Lessons3dMake1.html"><strong aria-hidden="true">4.3.</strong> Lesson 1: Foundations of 3D Make</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/3dmake-setup-guide.html"><strong aria-hidden="true">4.3.1.</strong> Setup Guide: 3dMake</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/vscode-setup-guide.html"><strong aria-hidden="true">4.3.2.</strong> Setup Guide: VSCode</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/mdbook-navigation-guide.html"><strong aria-hidden="true">4.3.3.</strong> Navigation Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/terminology.html"><strong aria-hidden="true">4.3.4.</strong> Terminology &amp; Vocabulary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/vocabulary-glossary.html"><strong aria-hidden="true">4.3.5.</strong> Vocabulary Glossary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/nvda-jaws-coding-tips.html"><strong aria-hidden="true">4.3.6.</strong> Screen Reader Tips (NVDA &amp; JAWS)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/your-first-print.html"><strong aria-hidden="true">4.3.7.</strong> Your First Print Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/yourfirstprintstudenttemplate.html"><strong aria-hidden="true">4.3.8.</strong> Your First Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake1/yourfirstprintteachertemplate.html"><strong aria-hidden="true">4.3.9.</strong> Your First Print - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/Lessons3dMake2.html"><strong aria-hidden="true">4.4.</strong> Lesson 2: Geometric Primitives and the Mathematics of Constructive Solid Geometry</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/openscad-cheat-sheet.html"><strong aria-hidden="true">4.4.1.</strong> OpenSCAD Cheat Sheet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/your-second-print.html"><strong aria-hidden="true">4.4.2.</strong> Your Second Print Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/yoursecondprintstudenttemplate.html"><strong aria-hidden="true">4.4.2.1.</strong> Your Second Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/yoursecondprintteachertemplate.html"><strong aria-hidden="true">4.4.2.2.</strong> Your Second Print - Teacher Template</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/bonus-print.html"><strong aria-hidden="true">4.4.3.</strong> Bonus Print Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/bonusprintstudenttemplate.html"><strong aria-hidden="true">4.4.3.1.</strong> Bonus Print - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake2/bonusprintteachertemplate.html"><strong aria-hidden="true">4.4.3.2.</strong> Bonus Print - Teacher Template</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake3/Lessons3dMake3.html"><strong aria-hidden="true">4.5.</strong> Lesson 3: Parametric Architecture and Modular Libraries</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake4/Lessons3dMake4.html"><strong aria-hidden="true">4.6.</strong> Lesson 4: AI-Enhanced Verification and Multimodal Feedback</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake4/DiceDiceDice.html"><strong aria-hidden="true">4.6.1.</strong> Dice-Dice-Dice Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake4/dicedicedicestudenttemplate.html"><strong aria-hidden="true">4.6.1.1.</strong> Dice-Dice-Dice - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake4/dicedicediceteachertemplate.html"><strong aria-hidden="true">4.6.1.2.</strong> Dice-Dice-Dice - Teacher Template</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake5/Lessons3dMake5.html"><strong aria-hidden="true">4.7.</strong> Lesson 5: Safety Protocols and the Physical Fabrication Interface</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake5/safetychecklist.html"><strong aria-hidden="true">4.7.1.</strong> Safety Checklist</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake5/maintenancelog.html"><strong aria-hidden="true">4.7.2.</strong> Maintenance Log</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake6/Lessons3dMake6.html"><strong aria-hidden="true">4.8.</strong> Lesson 6: Practical 3dm Commands and Text Embossing</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake6/slicing-settings-reference.html"><strong aria-hidden="true">4.8.1.</strong> Slicing Settings Reference</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake6/parametric-keychain.html"><strong aria-hidden="true">4.8.2.</strong> Parametric Keychain Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake6/parametrickeychainstudenttemplate.html"><strong aria-hidden="true">4.8.2.1.</strong> Parametric Keychain - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake6/parametrickeychainteachertemplate.html"><strong aria-hidden="true">4.8.2.2.</strong> Parametric Keychain - Teacher Template</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake7/Lessons3dMake7.html"><strong aria-hidden="true">4.9.</strong> Lesson 7: Parametric Transforms and the Phone Stand Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake8/Lessons3dMake8.html"><strong aria-hidden="true">4.10.</strong> Lesson 8: Advanced Parametric Design and Interlocking Features</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake8/snap-fit-clip.html"><strong aria-hidden="true">4.10.1.</strong> Snap-Fit Clip Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake8/snapfitclipstudenttemplate.html"><strong aria-hidden="true">4.10.1.1.</strong> Snap-Fit Clip - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake8/snapfitclipteachertemplate.html"><strong aria-hidden="true">4.10.1.2.</strong> Snap-Fit Clip - Teacher Template</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake9/Lessons3dMake9.html"><strong aria-hidden="true">4.11.</strong> Lesson 9: Automation and 3dm Workflows</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake10/Lessons3dMake10.html"><strong aria-hidden="true">4.12.</strong> Lesson 10: Hands-On Practice Exercises and Troubleshooting</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake10/accessibility-audit.html"><strong aria-hidden="true">4.12.1.</strong> Accessibility Audit Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake10/accessibilityauditstudenttemplate.html"><strong aria-hidden="true">4.12.1.1.</strong> Accessibility Audit - Student Template</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake10/accessibilityauditteachertemplate.html"><strong aria-hidden="true">4.12.1.2.</strong> Accessibility Audit - Teacher Template</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake11/Lessons3dMake11.html"><strong aria-hidden="true">4.13.</strong> Lesson 11: Stakeholder-Centric Design and the Beaded Jewelry Project</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/Lessons3dMake11/beaded-jewelry.html"><strong aria-hidden="true">4.13.1.</strong> Beaded Jewelry Project</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/3dMakeFinalExam.html"><strong aria-hidden="true">4.14.</strong> Final Exam - 25 Problems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Appendices/Appendices.html"><strong aria-hidden="true">5.</strong> Appendices</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PowershellIntroduction/PowershellIntroduction.html"><strong aria-hidden="true">5.1.</strong> Part 1 Appendix A: Introduction to Command Line Interfaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="PowerShellFoundation/PowershellTutorial/PowershellTutorial.html"><strong aria-hidden="true">5.2.</strong> Part 1 Appendix B: PowerShell Overview &amp; Full Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/AppendixAComprehensiveSlicingGuide.html"><strong aria-hidden="true">5.3.</strong> Part 2 Appendix A: Comprehensive Slicing Guide - All Major Slicers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/AppendixBMaterialProperties.html"><strong aria-hidden="true">5.4.</strong> Part 2 Appendix B: Material Properties &amp; Selection Guide</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/AppendixCToleranceQA.html"><strong aria-hidden="true">5.5.</strong> Part 2 Appendix C: Tolerance Testing &amp; Quality Assurance Matrix</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dMakeFoundation/AppendixDPowerShellIntegration.html"><strong aria-hidden="true">5.6.</strong> Part 2 Appendix D: PowerShell Integration for SCAD Workflows</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Contributors.html">About the Author</a></span></li></ol>';
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

