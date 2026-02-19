```markdown


# Lesson 1: Environmental Configuration and the Developer Workflow (Self-Paced)



Estimated time: 60–90 minutes

**Learning Objectives**
- Install and verify `3dm`, `openscad`, and a slicer are discoverable in the terminal
- Initialize a 3dMake project and understand the project scaffold (`src/`, `build/`, `3dmake.toml`)
- Edit `src/main.scad`, run `3dm build`, and inspect the generated `build/main.stl`

**Materials**
- Terminal with 3dMake installed
- Editor (VS Code or Notepad)
- Example scaffold or classroom repository

---

Step-by-step Tasks
1. Run `./3dm setup` or follow instructor's installation notes; confirm tools with `which 3dm` and `which openscad`.
2. Create a project scaffold with `3dm new` and open `src/main.scad` using `3dm edit-model`.
3. Add three top-level parameters (e.g., `width`, `height`, `thickness`) and a minimal model (`cube([width, height, thickness]);`).
4. Run `3dm build` and verify `build/main.stl` exists.
5. Open the STL in your slicer to check for thin walls or non-manifold geometry; if issues appear, iterate on `main.scad` and rebuild.

Checkpoints
- After step 2 you can locate `3dmake.toml` and the `build/` directory.
- After step 4 the `build/` folder contains a valid `main.stl`.

---

Quick Quiz (5)
1. What command initializes a 3dMake project?
2. What folder holds generated STLs?
3. How do you open the main model editor from the CLI?
4. Why is it useful to run `3dm build` frequently during development?
5. Give one reason to prefer an external editor over editing inline.

Extension Problems (5)
1. Add a README entry explaining your top-level parameters and expected units.
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions with calipers.
3. Script a `3dm` command sequence that automates new → edit → build for the scaffold.
4. Intentionally create a thin-wall error and document the steps you took to find and fix it.
5. Prepare a short instructor sign-off checklist describing safety checks before printing.

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

```
