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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Syllabus.html"><strong aria-hidden="true">1.</strong> Syllabus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html"><strong aria-hidden="true">2.</strong> Introduction</a></span></li><li class="chapter-item expanded "><li class="part-title">Getting Started</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/mdbook-navigation-guide.html"><strong aria-hidden="true">3.</strong> How to Navigate This Book</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/vscode-setup-guide.html"><strong aria-hidden="true">4.</strong> VSCode Setup Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/nvda-jaws-coding-tips.html"><strong aria-hidden="true">5.</strong> Screen Reader Coding Tips (NVDA &amp; JAWS)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/terminology.html"><strong aria-hidden="true">6.</strong> Terminology</a></span></li><li class="chapter-item expanded "><li class="part-title">Foundations of Powershell</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/Powershell_Tutorial.html"><strong aria-hidden="true">7.</strong> Overview &amp; Full Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_0_getting_started_layout_paths.html"><strong aria-hidden="true">8.</strong> Intro Lesson: Layout and Paths</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_1_navigation.html"><strong aria-hidden="true">9.</strong> Lesson PS.1: Navigation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_2_file_folder_manipulation_modification.html"><strong aria-hidden="true">10.</strong> Lesson PS.2: File and Folder Manipulation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_3_input_output_piping.html"><strong aria-hidden="true">11.</strong> Lesson PS.3: Input, Output, and Piping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_4_environment_variables_aliases.html"><strong aria-hidden="true">12.</strong> Lesson PS.4: Environment Variables and Aliases</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_5_filling_in_the_gaps.html"><strong aria-hidden="true">13.</strong> Lesson PS.5: Filling in the Gaps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PowerShell_Foundation/PS_Quiz_1.html"><strong aria-hidden="true">14.</strong> Quiz 1: Navigation</a></span></li><li class="chapter-item expanded "><li class="part-title">Foundations of 3D Make</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/3dMake_Tutorial.html"><strong aria-hidden="true">15.</strong> 3D Make Tutorial</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_1.html"><strong aria-hidden="true">16.</strong> Lesson 1: Environmental Configuration and the Developer Workflow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_2.html"><strong aria-hidden="true">17.</strong> Lesson 2: Geometric Primitives and the Mathematics of Constructive Solid Geometry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_3.html"><strong aria-hidden="true">18.</strong> Lesson 3: Parametric Architecture and Modular Libraries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_4.html"><strong aria-hidden="true">19.</strong> Lesson 4: AI-Enhanced Verification and Multimodal Feedback</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3dMake_Foundation/Lessons_3dMake_5.html"><strong aria-hidden="true">20.</strong> Lesson 5: Safety Protocols and the Physical Fabrication Interface</a></span></li><li class="chapter-item expanded "><li class="part-title">Foundations of 3D Printing</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/unit-0-overview.html"><strong aria-hidden="true">21.</strong> Foundations of 3D Printing Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_1_Safety/lesson-0-1-safety.html"><strong aria-hidden="true">22.</strong> Lesson 0.1: Safety 	6 Printer Orientation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_1_Safety/safety-checklist.html"><strong aria-hidden="true">23.</strong> Safety Checklist</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_2_How_3D_Printing_Works/lesson-0-2-how-fdm-works.html"><strong aria-hidden="true">24.</strong> Lesson 0.2: How 3D Printing Works</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_3_Intro_to_Calipers/lesson-0-3-calipers.html"><strong aria-hidden="true">25.</strong> Lesson 0.3: Introduction to Calipers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_3_Intro_to_Calipers/caliper-practice-worksheet.html"><strong aria-hidden="true">26.</strong> Caliper Practice Worksheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_4_OpenSCAD_Part1/lesson-0-4-openscad-part1.html"><strong aria-hidden="true">27.</strong> Lesson 0.4: OpenSCAD Part 1 	6 Primitives &amp; Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_5_OpenSCAD_Part2/lesson-0-5-openscad-part2.html"><strong aria-hidden="true">28.</strong> Lesson 0.5: OpenSCAD Part 2 	6 Transforms &amp; Booleans</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/Lesson_0_6_Intro_to_Slicing/lesson-0-6-slicing.html"><strong aria-hidden="true">29.</strong> Lesson 0.6: Introduction to Slicing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_0_Foundations/quiz-unit-0.html"><strong aria-hidden="true">30.</strong> Unit 0 Quiz</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Extension_Projects/your-first-print.html"><strong aria-hidden="true">31.</strong> First Print Project</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Extension_Projects/bonus_print.html"><strong aria-hidden="true">32.</strong> Practice Resizing</a></span></li><li class="chapter-item expanded "><li class="part-title">3D Printing Projects</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/unit-1-overview.html"><strong aria-hidden="true">33.</strong> 3D Printing Basics Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/lesson_1_0.html"><strong aria-hidden="true">34.</strong> Lesson 1.0: OpenSCAD Basics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/lesson_1_1.html"><strong aria-hidden="true">35.</strong> Lesson 1.1: Primitives</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/Project_0.html"><strong aria-hidden="true">36.</strong> Project 0: Your First 3D Print</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/lesson_1_2.html"><strong aria-hidden="true">37.</strong> Lesson 1.2: Translations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/lesson_1_3.html"><strong aria-hidden="true">38.</strong> Lesson 1.3: Debugging &amp; Resolution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_1_Guided_Projects/Project_1.html"><strong aria-hidden="true">39.</strong> Project 1: Tactile Floor Markers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Extension_Projects/dice-dice-dice.html"><strong aria-hidden="true">40.</strong> Extension: Dice-Dice-Dice</a></span></li><li class="chapter-item expanded "><li class="part-title">Intermediate 3D Printing Skills</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_1_Parametric_Design/lesson_2_outline.html"><strong aria-hidden="true">41.</strong> Intermediate Skills Outline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_1_Parametric_Design/lesson-2-1-parametric-modules.html"><strong aria-hidden="true">42.</strong> Lesson 2.1: Parametric Design &amp; Modules</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_2_Tolerances_and_Fit/lesson-2-2-tolerances.html"><strong aria-hidden="true">43.</strong> Lesson 2.2: Tolerances &amp; Fit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_2_Tolerances_and_Fit/tolerance-test-design.html"><strong aria-hidden="true">44.</strong> Tolerance Test Design Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_3_Advanced_Slicing/lesson-2-3-advanced-slicing.html"><strong aria-hidden="true">45.</strong> Lesson 2.3: Advanced Slicing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_2_Intermediate_Skills/Lesson_2_4_Material_Properties/lesson-2-4-materials.html"><strong aria-hidden="true">46.</strong> Lesson 2.4: Material Properties</a></span></li><li class="chapter-item expanded "><li class="part-title">Open-Ended Application of 3D Printing Skills</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_3_Open_Ended_Projects/Lesson_3_1_Stakeholder_Interviews/lesson-3-1-stakeholder-interviews.html"><strong aria-hidden="true">47.</strong> Lesson 3.1: Stakeholder Interviews &amp; Functional Requirements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Units/Unit_3_Open_Ended_Projects/Lesson_3_1_Stakeholder_Interviews/stakeholder-interview-worksheet.html"><strong aria-hidden="true">48.</strong> Stakeholder Interview Worksheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Extension_Projects/your-second-print.html"><strong aria-hidden="true">49.</strong> Use 3D Print to Solve Real-Life Problems</a></span></li><li class="chapter-item expanded "><li class="part-title">Project Templates</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Templates/project-1-documentation-template.html"><strong aria-hidden="true">50.</strong> Project 1 Documentation Template</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Templates/project-2-documentation-template.html"><strong aria-hidden="true">51.</strong> Project 2 Documentation Template</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Templates/project-3-documentation-template.html"><strong aria-hidden="true">52.</strong> Project 3 Documentation Template</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Templates/project-4-documentation-template.html"><strong aria-hidden="true">53.</strong> Project 4 Documentation Template</a></span></li><li class="chapter-item expanded "><li class="part-title">Reference Materials and Cheat Sheets</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/openscad-cheat-sheet.html"><strong aria-hidden="true">54.</strong> OpenSCAD Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/slicing-settings-reference.html"><strong aria-hidden="true">55.</strong> Slicing Settings Quick Reference</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/filament-comparison-table.html"><strong aria-hidden="true">56.</strong> Filament Comparison Table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/measurement-worksheet.html"><strong aria-hidden="true">57.</strong> Measurement Worksheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/vocabulary-glossary.html"><strong aria-hidden="true">58.</strong> Vocabulary Glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/master-rubric.html"><strong aria-hidden="true">59.</strong> Master Rubric (0	69 Scale)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Reference_Materials/vscode-tasks.html"><strong aria-hidden="true">60.</strong> VSCode tasks.json Template</a></span></li></ol>';
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

