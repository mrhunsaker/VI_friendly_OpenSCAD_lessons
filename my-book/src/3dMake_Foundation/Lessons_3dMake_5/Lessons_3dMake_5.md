```markdown

# Lesson 5: Safety Protocols and the Physical Fabrication Interface (Self-Paced)



Estimated time: 60–90 minutes

**Learning Objectives**
- Describe the Hierarchy of Controls and apply it to a classroom maker-space
- Perform pre-print environmental and equipment checks
- Validate the digital-to-physical pipeline and document post-print inspection results

**Materials**
- Classroom 3D printer, enclosure, and filtration (or documented lab SOP)
- Example parametric OpenSCAD project and slicer profile

Step-by-step Tasks
1. Conduct a safety briefing: review the Hierarchy of Controls and locate safety equipment.
2. Verify environmental controls and printer readiness: confirm filtration, bed adhesion, and spool metadata.
3. Run `3dm build` and inspect the STL in a slicer; check layer-preview and non-manifold warnings.
4. If using remote submission (OctoPrint), confirm camera monitoring and logging before any unattended prints.
5. Obtain instructor sign-off and monitor the first layers in-person or via camera.
6. After printing, wait for the part to cool (< $30^\\circ\\text{C}$), measure critical dimensions, and record observations.

Checkpoints
- Completed environmental checklist and saved inspection notes in the project README.

Quick Quiz (5)
1. What are the four levels of the Hierarchy of Controls?
2. Name two engineering controls useful for reducing emissions.
3. Why must you monitor the first layers of a new print profile?
4. Where should you record spool metadata and print observations?
5. What is the safe cooldown temperature suggested before part removal?

Extension Problems (5)
1. Draft a one-page SOP for start-to-finish supervised prints in your lab.
2. Create a checklist script that verifies spool metadata and build settings before `3dm build` runs.
3. Run a test print and log measured deviations; propose a parameter change to correct the error.
4. Design an accessible post-print inspection checklist that non-visual users can follow.
5. Research filtration options and recommend one for your classroom, including maintenance intervals.

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
