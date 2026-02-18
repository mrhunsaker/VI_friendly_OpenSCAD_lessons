
# **Lesson 2: Geometric Primitives and the Mathematics of Constructive Solid Geometry**

Lesson 2 moves from the tooling environment into the core logic of programmatic modeling. OpenSCAD is rooted in Constructive Solid Geometry (CSG), a paradigm that composes complex solids by combining simple primitives through boolean operations.3 For students this is an applied exercise in 3D analytic geometry (working in $\\mathbb{R}^3$): coordinates, vectors, and transforms become the language for describing form. Emphasize that modeling in OpenSCAD is declarative—students describe *what* the geometry is, not *how* to draw it step-by-step.

The lesson surveys the fundamental primitives (`cube()`, `sphere()`, `cylinder()`, `polyhedron()`) and their use as building blocks. Equally important are transforms (`translate()`, `rotate()`, `scale()`), which modify coordinate frames for subsequent primitives. A core conceptual hurdle is that transforms apply to the objects that follow them; teaching a nested, block-structured approach (grouping transforms with braces) helps students reason about local vs. global coordinates and avoids common placement errors.

Boolean operations form the algebra of shape construction. Students practice with the three canonical CSG operators:

1. **Union:** $A \\cup B$ — merges volumes into a single manifold.
2. **Difference:** $A \setminus B$ — subtracts the second volume from the first.
3. **Intersection:** $A \\cap B$ — keeps only shared volume.3

A practical emphasis in this lesson is numerical robustness. CSG operations are sensitive to coincident faces, near-zero-thickness walls, and poorly conditioned coordinate values. The so-called "0.001 rule" is introduced as a pragmatic technique: when performing `difference()` operations, offset or slightly enlarge the subtractor (for example, use $h+0.002$ and a tiny translation like $z-0.001$) to avoid coincident-face artifacts that lead to non-manifold meshes.9 Students are also shown how to reduce `$fn` for quick diagnostic renders and then increase it for final exports to balance speed and fidelity.

The lesson closes by connecting these geometric principles to digital fabrication constraints: thin walls, tiny bridging spans, and intersecting coplanar faces often render correctly in OpenSCAD's preview but fail in slicers or produce fragile prints. Students learn to interpret render warnings, run lightweight mesh checks, and iterate with small, testable changes so that mathematical intent maps reliably to manufactured results.

## Lesson steps

1. Review primitives and transforms
	- Open `src/main.scad` and identify examples of `cube()`, `cylinder()`, and `sphere()`.
	- Experiment with `translate()` and `rotate()` lines: add a small translation and observe the object's position in the preview.

2. Practice basic CSG operations
	- Create three small example blocks demonstrating `union()`, `difference()`, and `intersection()`.
	- Render each example with a low `$fn` and note any warnings or errors produced by the renderer.

3. Apply the 0.001 rule and numerical workarounds
	- Reproduce a failing `difference()` example and apply a tiny offset to the subtracting shape (for example, increase one dimension by 0.002 and shift by -0.001 on the coincident axis).
	- Re-render and confirm the boolean operation completes without producing non-manifold warnings.

4. Diagnostic rendering strategy
	- Use reduced `$fn` for rapid checks, then increase `$fn` or resolution before exporting STL.
	- Use `3dm build` to create an STL, then open it in the slicer to inspect for thin walls or unexpected islands.

5. Mesh validation and remediation
	- If slicer reports problems, simplify boolean chains (split complex booleans into stepwise operations), or use analysis primitives to isolate the problematic sub-shape.
	- Re-run `3dm build` after each incremental fix until the STL loads cleanly.

6. Reflection and documentation
	- Add comments near tricky boolean code explaining why offsets were used and what geometric invariants are expected.
	- Record a short note in the project README about the `$fn` and offset strategy used for this model.



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