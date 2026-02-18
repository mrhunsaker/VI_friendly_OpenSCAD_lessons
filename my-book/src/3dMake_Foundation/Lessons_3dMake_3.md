
# **Lesson 3: Parametric Architecture and Modular Libraries**

This lesson demonstrates the practical power of parameterization and modular design in programmatic CAD. Rather than hard-coding dimensions, students are taught to define named parameters at the top of their scripts (for example, `wall_thickness = 2.5`) and propagate those parameters through primitives and modules. This practice enables rapid exploration: changing a single variable produces predictable variants of a model without manual editing of every feature, which encourages experimentation and a data-driven design mindset.

The curriculum also introduces the value of curated libraries and dependency management. 3DMake can automatically fetch, pin, and include external libraries (for example, BOSL) so students can reuse battle-tested primitives for threads, gears, and geometric utilities. Teaching students to `include <library_name>` or `use <library_name>` reinforces software-engineering best practices: reuse instead of reimplement, prefer well-documented modules, and version-control library dependencies to ensure reproducible builds across machines.

Pedagogically, the lesson foregrounds readability, testability, and parameter documentation. Students are encouraged to document each top-level parameter with a one-line description and an expected unit, add default ranges for common classroom materials, and include simple unit tests: small render checks that build an STL at a reduced resolution to confirm geometry compiles. These habits reduce debugging time and make collaborative projects tractable when multiple students modify the same project scaffold.

The following commands and examples are used as in-class references:

| Command                         | Purpose              | Instructional Context                               |
| :------------------------------ | :------------------- | :-------------------------------------------------- |
| include <bosl/constants.scad>    | Global Variables     | Importing standard engineering constants.1          |
| use <bosl/shapes.scad>          | Module Access        | Accessing complex shapes like pyramids or fillets.1 |
| 3dm build slice                 | Multi-stage Pipeline | Combining rendering and slicing into one command.1  |

A key second-order insight in this lesson is the concept of "Abstraction." By creating their own module (the OpenSCAD equivalent of a function), students can define a complex object once and "call" it multiple times with different parameters.3 For example, a student might create a `leg(height, thickness)` module and then call it four times to create a table, demonstrating the efficiency of code reuse over manual duplication.

## Lesson steps

1. Confirm project scaffold and parameters
	- Run `3dm new` (or open the classroom scaffold) and inspect `src/main.scad` for existing parameter definitions.
	- Add or edit three top-level parameters (for example, `wall_thickness`, `hole_diameter`, `socket_depth`) and document each with a brief inline comment and units.

2. Use a library and import one module
	- Add an `include <bosl/constants.scad>` or an equivalent classroom-approved library to the top of `main.scad`.
	- Call a simple library module (for example a threaded nut or rounded corner helper) inside a small test block and run `3dm build` to ensure the library resolves correctly.

3. Create a parametric module
	- Implement a `module bracket(width, height, thickness)` that composes primitives and boolean operations.
	- Use internal variables for fillet radius or mounting-hole offsets derived from the top-level parameters.

4. Test with targeted renders
	- Render a low-resolution preview (`$fn` reduced) to confirm shape topology; if the render fails, simplify the module and re-run until successful.
	- Export the STL to `build/` and inspect in the slicer for obvious mesh problems.

5. Produce variants and record results
	- Adjust a top-level parameter (for example, increase `wall_thickness` by 25%) and rerun `3dm build` to produce a variant.
	- Measure and record dimensional changes with calipers and update the project README with observations.

6. Refactor into reusable library code
	- If the module proves broadly useful, move it into a `lib/` folder and add a short usage example.
	- Add a `README` for the library describing parameter meanings and expected units; commit to version control with an explanatory message.



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

#### **Works cited**

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