# Lesson 4: AI-Enhanced Verification and Multimodal Feedback {#3dmake_foundation_lessons_3dmake_4-lessons_3dmake_4}

Estimated time}}: 45-60 minutes

Learning Objectives

- Run `3dm info` to collect deterministic renders and AI diagnostics (if configured)[^1][^10]
- Compare AI suggestions with renderer and slicer outputs and prioritize deterministic fixes[^8]
- Record and sanitize AI prompts and outputs for reproducibility and data governance[^8]

Materials

- 3dMake configured with an LLM API key (optional)
- Example project with renderable geometry}}

Step-by-step Tasks

1. Verify API configuration (if used) or run}} `3dm info --dry-run` to confirm render pipeline works locally[^1].
2. Run `3dm info` and save the produced images and textual report to `build/` [^1].
3. Inspect deterministic outputs (render warnings, slicer preview) and compare them to AI recommendations; prioritize deterministic issues[^8][^10].
4. Iterate prompt engineering (in `3dmake.toml` or via `--prompt`) with precise technical primitives and re-run}} `3dm info` to examine changes[^8].
5. Document all prompts, AI outputs, and deterministic validation steps in `AI-notes.md` within the project[^8].

Checkpoints

- After step 2 you}} have stored render images and the AI report in `build/` [^1].

## Quiz - Lesson 3dMake.4 (10 questions)

1. What command}} generates AI diagnostics and model renders[^1]?
2. Why must AI outputs be validated against renderer/slicer results[^8][^10]?
3. Name one}} privacy or governance concern when sending models/images to an API[^8].
4. What is an example of a technical primitive to include in a prompt[^8]?
5. Where should you}} record prompts and AI outputs in the project[^8]?
6. True or False: AI-generated suggestions should always be implemented without verification.
7. Describe what "deterministic validation" means in the context of AI-assisted 3D design}}.
8. Explain how you}} would use `3dm info` to validate AI suggestions against your actual model.
9. What steps would you}} take if the AI suggests a design}} change that conflicts with your requirements?
10. How would you}} document AI-assisted decisions in your project for reproducibility and transparency?

Extension Problems (10)

1. Create an `AI-notes.md` documenting three prompts and the AI's responses; indicate which suggestions you}} acted on[^8].
2. Simulate a false-positive AI warning: describe how you}} validated and rejected it using}} deterministic checks[^10].
3. Generate a short prompt that requests the top three structural risks and record the results[^8].
4. Create a short checklist for sanitizing uploads before}} sending to an API[^8].
5. Re-run}} `3dm info` after a code}} fix and compare the differences in the AI report[^1].
6. Design}} a verification workflow}}: use AI suggestions + manual validation + physical testing to validate design}} decisions.
7. Create a transparency log for AI-assisted features: document all AI interactions, suggestions adopted, and decisions made.
8. Build an AI-assisted design}} case study: from initial prompt through final print}}; document the entire decision process.
9. Develop guidelines for trustworthy AI use in 3D printing}}: when to trust AI, when to verify, and how to validate recommendations.
10. Write an accessibility}} guide for using}} AI features in 3DMake}}: how to interpret AI suggestions non-visually and understand confidence levels.

[^1]: 3DMake}} GitHub}} - [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

[^8]: AI Output Validation - Best Practices for Prompt Engineering - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language)

[^10]: Deterministic Validation in Design}} - [https://www.nist.gov/publications](https://www.nist.gov/publications)

