# **Lesson 5: Safety Protocols and the Physical Fabrication Interface**

The final lesson moves students from purely digital workflows into the workshop, where a completed model becomes a physical object. While 3DMake streamlines the transition—coordinating render, slice, and print—the classroom context requires careful framing of risks, controls, and verification steps. Students must understand that each stage of the pipeline introduces new hazards: thermal and electrical risks from the printer hardware, chemical exposure from heated polymers, and geometric risks arising from flawed meshes that can cause unpredictable printing behavior.

Chemical exposures from common filaments (ABS, PLA, PETG, nylon) are non-trivial. Heating thermoplastics emits Ultrafine Particles (UFPs) and Volatile Organic Compounds (VOCs) such as styrene and formaldehyde; concentration and composition depend on filament chemistry and extrusion temperature.12 Instructors should emphasize engineering mitigations (enclosures, HEPA/activated-carbon filtration, and adequate ventilation) and administrative measures (time-limited access, consumption-free build areas) before permitting hands-on printing. Students should also learn practical monitoring techniques: logging ambient air changes, checking enclosure filters, and recording filament lot and print temperatures when anomalous odors or sensor alerts occur.

The course explicitly teaches the **Hierarchy of Controls** so students can prioritize interventions that remove or reduce hazards. The list below retains the original emphasis while providing operational detail:

1. **Elimination/Substitution:** Prefer lower-emission materials (for example, PLA instead of ABS where mechanical properties permit). Encourage design choices that avoid high-temperature-resistant filaments unless necessary, and select breakaway or soluble support systems that reduce manual post-processing.
2. **Engineering Controls:** Use enclosed printers with properly rated HEPA and activated-carbon filtration, position printers near exhaust or in rooms with measured air-change rates, and apply physical interlocks where possible to prevent access while the heater is active. Document filter change intervals and verify airflow rates as part of lab maintenance.
3. **Administrative Controls:** Implement written SOPs, require pre-print sign-offs for new designs, limit access during active prints, and mandate clear labeling of spool metadata (material, diameter, vendor, print temperature). Train students to log prints and report unexpected behaviors immediately.
4. **Personal Protective Equipment (PPE):** Use heat-resistant gloves and eye protection when removing parts and supports; wear appropriate respiratory protection when doing sanding or resin post-processing that generates fine particulates. PPE is the last line of defense and should supplement—never replace—engineering and administrative controls.

The lesson also covers remote and networked workflows. Integrating OctoPrint (or similar print microservices) with 3DMake via `3dm print` introduces operational conveniences—and new responsibilities. Remote submissions require thoughtful monitoring policies: confirm camera-based observation is available, maintain a remote user log, and require an instructor or designated operator to be present during the first layers of any new profile. Because printers operate at high temperatures and draw substantial current, fire-safety procedures (clear access to extinguishers, known electrical cut-off points, and emergency shutdown drills) must be practiced and documented.

Concluding the unit, students complete a full lifecycle exercise: author a parametric model, run the automated build pipeline, validate the STL in the slicer, and produce a supervised print. Emphasis is placed on pre-print verification and post-print inspection; the physical object becomes a focal point for reflective engineering: did the part meet dimensional expectations, were supports removable without damage, and what changes in code would improve the next iteration?

## Lesson steps

1. Pre-class safety briefing and vocabulary check
	- Review the **Hierarchy of Controls** and classroom SOPs; ensure students can explain why elimination and engineering controls are prioritized over PPE.
	- Confirm that all students know the location of safety equipment: fire extinguisher, first-aid kit, and electrical shutoff.

2. Environmental and equipment checks
	- Verify ventilation and filtration units are operational and logged.
	- Inspect the printer for loose wiring, damaged belts, and correct bed adhesion surface.
	- Confirm the spool metadata (material, diameter, vendor) is recorded.

3. Model and pipeline verification (digital-first)
	- Run `3dm build` to generate the STL; inspect render logs for warnings.
	- Open the STL in the slicer, run the layer-preview, and check for non-manifold regions or thin walls.
	- If issues are found, iterate in OpenSCAD and re-run `3dm build` until the STL loads cleanly.

4. Slicing and remote-submission rehearsal
	- Slice with the approved classroom profile, export G-code to `build/`, and perform a final layer-preview.
	- If using OctoPrint, perform a supervised test submission (no-extrusion dry-run if available) and confirm camera & logging are active.

5. Instructor sign-off and initial print monitoring
	- Obtain instructor approval before starting the physical print.
	- Observe the first few layers in-person or via camera feed; be prepared to pause or cancel on detection of adhesion failure, extrusion issues, or abnormal odors/smoke.

6. Post-print procedures and documentation
	- Allow the part to cool below $30^\\circ\\text{C}$ before removal.
	- Perform a dimensional check with calipers and document observations in the project README.
	- Safely remove supports, dispose of waste filaments per lab policy, and clean the build surface.

7. Reflective iteration and optional automation
	- Modify a parameter to address observed defects, produce a new build, and compare measurements.
	- Optionally commit a build script or CI hook that runs `3dm build` on parameterized inputs for reproducible variants.

## **References**

Deck, T. (2025). *3DMake: A command-line tool for 3D printing workflows*. GitHub. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)  
Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press.  
Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing*. Proceedings of the ACM Symposium on User Interface Software and Technology.  
Google. (2025). *Vertex AI Gemini 3 Pro Preview: Getting started with generative AI*. [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3)  
National Institute for Occupational Safety and Health (NIOSH). (2024). *Approaches to safe 3D printing: A guide for makerspace users, schools, libraries, and small businesses*. [https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html)  
Ohio State University Environmental Health and Safety. (2026). *3D printer safety concerns and ventilation*. [https://ehs.osu.edu/kb/3d-printer-safety](https://ehs.osu.edu/kb/3d-printer-safety)  
Salt Lake City Public Library. (2026). *Creative Lab: Available hardware and 3D printing procedures*. [https://services.slcpl.org/creativelab](https://services.slcpl.org/creativelab)  
Salt Lake County Library. (2026). *Create Spaces: Hardware specifications and filament fees*. [https://www.slcolibrary.org/what-we-have/create](https://www.slcolibrary.org/what-we-have/create)  
University of Utah. (2026). *Marriott Library ProtoSpace and Maker hubs*. [https://lib.utah.edu/protospace.php](https://lib.utah.edu/protospace.php)  
Washington State Department of Health. (2026). *3D printer and filament selection for safe school environments*. [https://doh.wa.gov/community-and-environment/schools/3d-printers](https://doh.wa.gov/community-and-environment/schools/3d-printers)

## **Works cited**

1. tdeck/3dmake: Non-visual 3D design and 3D printing tool \- GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)  
2. Books \- OpenSCAD, accessed February 18, 2026, [https://openscad.org/documentation-books.html](https://openscad.org/documentation-books.html)  
3. Programming with OpenSCAD, accessed February 18, 2026, [https://programmingwithopenscad.github.io/](https://programmingwithopenscad.github.io/)  
4. OpenSCAD Review \- Worth learning? \- CadHub, accessed February 18, 2026, [https://learn.cadhub.xyz/blog/openscad-review/](https://learn.cadhub.xyz/blog/openscad-review/)  
5. Activity · tdeck/3dmake \- GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake/activity](https://github.com/tdeck/3dmake/activity)  
6. 10+ OpenSCAD Online Courses for 2026 | Explore Free Courses & Certifications, accessed February 18, 2026, [https://www.classcentral.com/subject/openscad](https://www.classcentral.com/subject/openscad)  
7. 3dmake/e2e\_test.py at main \- GitHub, accessed February 18, 2026, [https://github.com/tdeck/3dmake/blob/main/e2e\_test.py](https://github.com/tdeck/3dmake/blob/main/e2e_test.py)  
8. OpenSCAD Prompt Creation \- DocsBot AI, accessed February 18, 2026, [https://docsbot.ai/prompts/technical/openscad-prompt-creation](https://docsbot.ai/prompts/technical/openscad-prompt-creation)  
9. The great thing about OpenSCAD is that it makes it easy to 3D model things which... | Hacker News, accessed February 18, 2026, [https://news.ycombinator.com/item?id=46338565](https://news.ycombinator.com/item?id=46338565)  
10. Build Great AI: LLM-Powered 3D Model Generation for 3D Printing \- ZenML LLMOps Database, accessed February 18, 2026, [https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-printing](https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-printing)  
11. Generating CAD Code with Vision-Language Models for 3D Designs \- arXiv, accessed February 18, 2026, [https://arxiv.org/html/2410.05340v2](https://arxiv.org/html/2410.05340v2)  
12. 3D Printer Safety \- Environmental Health and Safety \- The Ohio State University, accessed February 18, 2026, [https://ehs.osu.edu/kb/3d-printer-safety](https://ehs.osu.edu/kb/3d-printer-safety)  
13. 3-D Printer Safety | Environmental Health & Safety | RIT, accessed February 18, 2026, [https://www.rit.edu/ehs/3-d-printer-safety](https://www.rit.edu/ehs/3-d-printer-safety)  
14. Safe 3D Printing is for Everyone, Everywhere | NIOSH Blogs \- CDC, accessed February 18, 2026, [https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html)  
15. 3D Printers | Washington State Department of Health, accessed February 18, 2026, [https://doh.wa.gov/community-and-environment/schools/3d-printers](https://doh.wa.gov/community-and-environment/schools/3d-printers)  
16. 3D Printer Safety \- Environmental Health & Safety \- University of Tennessee, Knoxville, accessed February 18, 2026, [https://ehs.utk.edu/index.php/table-of-policies-plans-procedures-guides/3d-printer-safety/](https://ehs.utk.edu/index.php/table-of-policies-plans-procedures-guides/3d-printer-safety/)  
17. Using LLMs for Code Generation: A Guide to Improving Accuracy and Addressing Common Issues \- PromptHub, accessed February 18, 2026, [https://www.prompthub.us/blog/using-llms-for-code-generation-a-guide-to-improving-accuracy-and-addressing-common-issues](https://www.prompthub.us/blog/using-llms-for-code-generation-a-guide-to-improving-accuracy-and-addressing-common-issues)  
18. Goodbye Minkowski : r/openscad \- Reddit, accessed February 18, 2026, [https://www.reddit.com/r/openscad/comments/1fhbku5/goodbye\_minkowski/](https://www.reddit.com/r/openscad/comments/1fhbku5/goodbye_minkowski/)  
19. Understanding the Challenges of OpenSCAD Users for 3D Printing \- Thomas Pietrzak, accessed February 18, 2026, [https://thomaspietrzak.com/bibliography/gonzalez24.pdf](https://thomaspietrzak.com/bibliography/gonzalez24.pdf)  
20. Why is there so little content and community around a tool as powerful and interesting as OpenSCAD? (beyond the awesome folks in this channel) \- Reddit, accessed February 18, 2026, [https://www.reddit.com/r/openscad/comments/1fxj8xv/why\_is\_there\_so\_little\_content\_and\_community/](https://www.reddit.com/r/openscad/comments/1fxj8xv/why_is_there_so_little_content_and_community/)  
21. minkowski render problem: slow and bogus error message · Issue \#6130 \- GitHub, accessed February 18, 2026, [https://github.com/openscad/openscad/issues/6130](https://github.com/openscad/openscad/issues/6130)  
22. OpenSCAD: Tieing It Together With Hull() \- Hackaday, accessed February 18, 2026, [https://hackaday.com/2018/02/13/openscad-tieing-it-together-with-hull/](https://hackaday.com/2018/02/13/openscad-tieing-it-together-with-hull/)  
23. OpenSCAD Hull/Minkowski function by hand? \- Computer Graphics Stack Exchange, accessed February 18, 2026, [https://computergraphics.stackexchange.com/questions/2188/openscad-hull-minkowski-function-by-hand](https://computergraphics.stackexchange.com/questions/2188/openscad-hull-minkowski-function-by-hand)  
24. OpenSCAD is creating non-manifold models · Issue \#6114 \- GitHub, accessed February 18, 2026, [https://github.com/openscad/openscad/issues/6114](https://github.com/openscad/openscad/issues/6114)  
25. Boolean operation fails with message that mesh is non-manifold, but mesh appears to be manifold · Issue \#5493 · openscad/openscad \- GitHub, accessed February 18, 2026, [https://github.com/openscad/openscad/issues/5493](https://github.com/openscad/openscad/issues/5493)  
26. Create Space | The County Library, accessed February 18, 2026, [https://www.slcolibrary.org/what-we-have/create](https://www.slcolibrary.org/what-we-have/create)  
27. Understanding the Challenges of OpenSCAD Users for 3D Printing \- Semantic Scholar, accessed February 18, 2026, [https://www.semanticscholar.org/paper/6520ba2b822efd57074f60376a1d607605cd63fc](https://www.semanticscholar.org/paper/6520ba2b822efd57074f60376a1d607605cd63fc)  
28. How to fix non-manifold geometry issues on 3D models \- Sculpteo, accessed February 18, 2026, [https://www.sculpteo.com/en/3d-learning-hub/create-3d-file/fix-non-manifold-geometry/](https://www.sculpteo.com/en/3d-learning-hub/create-3d-file/fix-non-manifold-geometry/)  
29. What is a non-manifold geometry and how to avoid it \- crwjaakko, accessed February 18, 2026, [https://www.creativewithjaakko.com/tutorials/what-is-a-non-manifold-geometry-and-how-to-avoid-it/](https://www.creativewithjaakko.com/tutorials/what-is-a-non-manifold-geometry-and-how-to-avoid-it/)  
30. How to Fix a Non-manifold Boolean Issue in SelfCAD, accessed February 18, 2026, [https://www.selfcad.com/blog/fix-non-manifold-boolean-issue](https://www.selfcad.com/blog/fix-non-manifold-boolean-issue)  
31. Creative Lab \- The City Library, accessed February 18, 2026, [https://services.slcpl.org/creativelab](https://services.slcpl.org/creativelab)  
32. Make Salt Lake \- Meetup, accessed February 18, 2026, [https://www.meetup.com/makesaltlake/](https://www.meetup.com/makesaltlake/)  
33. About Us \- Make Salt Lake, accessed February 18, 2026, [https://makesaltlake.org/about-us](https://makesaltlake.org/about-us)  
34. ProtoSpace | Marriott Library, accessed February 18, 2026, [https://lib.utah.edu/protospace.php](https://lib.utah.edu/protospace.php)