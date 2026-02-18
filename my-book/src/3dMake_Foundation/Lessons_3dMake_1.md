# **Lesson 1: Environmental Configuration and the Developer Workflow**

The first instructional unit focuses on the transition from a consumer-grade user experience to a developer-grade environment. High school juniors must first master the command-line interface, which 3DMake uses to orchestrate its sub-processes.1 The installation process involves extracting the 3DMake binaries and executing the ./3dm setup command. During this phase, the student configures the tool to recognize local installations of OpenSCAD and their preferred slicing engine, such as PrusaSlicer or Cura.1  
A critical concept introduced in this lesson is the "3DMake Project Structure." Unlike a solitary .scad file, a 3DMake project is a formalized directory that maintains a separation of concerns.1

| Project Component    | Function                                      | File Location      |
| :------------------- | :-------------------------------------------- | :----------------- |
| **Source Directory** | Contains all OpenSCAD logic and modules.      | src/main.scad      |
| **Build Directory**  | Storage for generated STLs, 3MFs, and G-code. | build/             |
| **Configuration**    | Project-specific settings and AI parameters.  | 3dmake.toml        |
| **G-code Template**  | Defines printer-specific slicing parameters.  | template.gcode.3mf |

Students learn to initialize this structure using the 3dm new. command, which generates the necessary boilerplate.1 The lesson emphasizes the use of an external text editor—such as Visual Studio Code or Notepad++—rather than the built-in OpenSCAD editor. By configuring the editor path in the 3DMake configuration, students can use the 3dm edit-model command to launch their coding environment directly, fostering a professional development cycle.1  
The technical insight for this unit is the automation of the "pre-flight" check. Students are taught to run 3dm build frequently to verify that their code compiles. 3DMake handles the background execution of the OpenSCAD renderer, producing an STL file in the build/ directory without the student needing to leave their editor.1 This encourages a "small-step" iterative process, where changes are immediately validated against the renderer.

## Lesson steps

1. Install and verify tools
	- Open a terminal and run the `./3dm setup` command following your instructor's installation notes.
	- Confirm `openscad` and your chosen slicer (e.g., PrusaSlicer, Cura) are on the PATH by running `which openscad` and `which prusaslicer` (or the slicer executable for your environment).
	- Run `3dm doctor` (or equivalent diagnostic) to verify configuration; record any errors in your lab notebook.

2. Initialize a 3DMake project
	- In your workspace, run `3dm new` to create the project scaffold.
	- Open the generated `src/main.scad` in Visual Studio Code (or your preferred editor) using `3dm edit-model` if configured.
	- Inspect `3dmake.toml` and confirm the `build/` and `src/` paths match the project conventions.

3. Create a minimal, parametric model
	- In `src/main.scad`, define three top-level parameters (e.g., `width`, `height`, `thickness`) and document them with inline comments.
	- Build a simple assembly using primitives and transforms (for example, a rectangular housing with a recessed pocket).
	- Save and run `3dm build` to render an STL; confirm `build/main.stl` appears and note the render time.

4. Verify geometry and fix common issues
	- Load the STL into your slicer and inspect for non-manifold edges, missing faces, or unexpectedly thin walls.
	- If errors appear, return to `main.scad`, reduce `$fn` if necessary for testing, and simplify boolean operations to isolate the problem.
	- Re-run `3dm build` after each fix until the STL loads cleanly in the slicer.

5. Slice and preview G-code (no print yet)
	- Use your slicer to generate G-code with the classroom-approved profile; export to `build/` as `main.gcode`.
	- Run a layer-preview and check overhangs, first-layer adhesion parameters, and estimated print time.
	- Ask a peer or instructor to review the preview for obvious issues.

6. Post-processing and documentation
	- Add a short entry to the project README describing parameter meanings, material chosen, and any known limitations.
	- Commit `src/main.scad`, `3dmake.toml`, and a copy of the final STL to the project repository.

7. Optional: Automate a variant
	- Modify a parameter (for example, increase `width` by 20%) and run `3dm build` to produce a variant.
	- Compare the two STLs and document dimensional differences with caliper measurements.

8. Safety checklist before printing (instructor sign-off required)
	- Verify enclosure/ventilation is operational, filament type is approved, and the printer bed is prepped.
	- Confirm temperatures and retraction settings are correct for the filament.
	- Obtain instructor permission before starting the physical print.



## **References**

Deck, T. (2025). *3DMake: A command-line tool for 3D printing workflows*. GitHub. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)  
Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press.  
Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing*. Proceedings of the ACM Symposium on User Interface Software and Technology.  
Google. (2025). *Vertex AI Gemini 3 Pro Preview: Getting started with generative AI*. [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3)  
National Institute for Occupational Safety and Health (NIOSH). (2024). *Approaches to safe 3D printing: A guide for makerspace users, schools, libraries, and small businesses*. [https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html)  
Ohio State University Environmental Health and Safety. (2026). *3D printer safety concerns and ventilation*. [https://ehs.osu.edu/kb/3d-printer-safety](https://ehs.osu.edu/kb/3d-printer-safety)  
Salt Lake City Public Library. (2026). *Creative Lab: Available hardware and 3D printing procedures*. [https://services.slcpl.org/creativelab](https://services.slcpl.org/creativelab)  
Salt Lake County Library. (2026). *Create Spaces: Hardware specifications and filament fees*. [https://www.slcolibrary.org/what-we-have/create](https://www.slcolibrary.org/what-we-have/create)  
University of Utah. (2026). *Marriott Library ProtoSpace and MakerSpaces*. [https://lib.utah.edu/protospace.php](https://lib.utah.edu/protospace.php)  
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