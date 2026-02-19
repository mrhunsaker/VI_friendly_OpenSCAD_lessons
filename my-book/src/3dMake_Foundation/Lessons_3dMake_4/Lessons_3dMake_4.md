```markdown


# Lesson 4: AI-Enhanced Verification and Multimodal Feedback (Self-Paced)



Estimated time: 45–60 minutes

**Learning Objectives**
- Run `3dm info` to collect deterministic renders and AI diagnostics (if configured)
- Compare AI suggestions with renderer and slicer outputs and prioritize deterministic fixes
- Record and sanitize AI prompts and outputs for reproducibility and data governance

**Materials**
- 3dMake configured with an LLM API key (optional)
- Example project with renderable geometry

Step-by-step Tasks
1. Verify API configuration (if used) or run `3dm info --dry-run` to confirm render pipeline works locally.
2. Run `3dm info` and save the produced images and textual report to `build/`.
3. Inspect deterministic outputs (render warnings, slicer preview) and compare them to AI recommendations; prioritize deterministic issues.
4. Iterate prompt engineering (in `3dmake.toml` or via `--prompt`) with precise technical primitives and re-run `3dm info` to examine changes.
5. Document all prompts, AI outputs, and deterministic validation steps in `AI-notes.md` within the project.

Checkpoints
- After step 2 you have stored render images and the AI report in `build/`.

Quick Quiz (5)
1. What command generates AI diagnostics and model renders?
2. Why must AI outputs be validated against renderer/slicer results?
3. Name one privacy or governance concern when sending models/images to an API.
4. What is an example of a technical primitive to include in a prompt?
5. Where should you record prompts and AI outputs in the project?

Extension Problems (5)
1. Create an `AI-notes.md` documenting three prompts and the AI’s responses; indicate which suggestions you acted on.
2. Simulate a false-positive AI warning: describe how you validated and rejected it using deterministic checks.
3. Generate a short prompt that requests the top three structural risks and record the results.
4. Create a short checklist for sanitizing uploads before sending to an API.
5. Re-run `3dm info` after a code fix and compare the differences in the AI report.

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
