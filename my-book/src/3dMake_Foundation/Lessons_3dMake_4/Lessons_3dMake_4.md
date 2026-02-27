# Lesson 4: AI-Enhanced Verification and Multimodal Feedback

Estimated time: 90–120 minutes

## Learning Objectives
- Use `3dm describe` to generate AI-assisted descriptions of STL geometry
- Understand deterministic vs. AI-assisted validation
- Apply prompt engineering techniques for design feedback
- Recognize when to trust, question, or reject AI suggestions
- Understand data privacy considerations when using cloud AI tools

## Materials
- 3dMake project with a completed STL from Lessons 1–3
- Terminal
- Optional: AI chat interface (Claude, ChatGPT, or similar)

## Step-by-step Tasks

### 1. Run 3dm describe on Your Current Model

`3dm describe` sends your STL to an AI service and returns a natural-language description of the geometry. This is especially useful for non-visual validation.

```bash
3dm describe
```

Expected output (example):
```
Model: build/main.stl
The model appears to be a rectangular box approximately 50mm x 30mm x 5mm.
It has uniform wall thickness and no visible holes or undercuts.
Suggested print orientation: flat on the largest face.
```

Review the description. Does it match your design intent? Note any discrepancies.

### 2. Understand Deterministic vs. AI Validation

| Validation Type | What It Checks | Reliability |
|---|---|---|
| Slicer validation | Manifold geometry, wall thickness, overhang angles | Deterministic — same result every run |
| `3dm describe` (AI) | Human-readable shape description, print orientation suggestions | Non-deterministic — may vary slightly between runs |
| Manual calipers | Printed part dimensions | Ground truth |

AI-assisted tools like `3dm describe` are useful for generating first-pass descriptions and spotting obvious issues, but they should not replace deterministic checks (slicer validation, geometry analysis).[^1]

### 3. Craft Effective Verification Prompts

When using an AI assistant (Claude, GPT, etc.) to review OpenSCAD code, prompt quality determines output quality:

**Weak prompt:**
```
Review my OpenSCAD code.
```

**Strong prompt:**
```
I have an OpenSCAD model that creates a parametric mounting bracket with two M3 holes.
Parameters: width=40, height=30, depth=8, hole_r=3.2.
Please review this code for:
1. Correct use of the 0.001 offset rule in all difference() operations
2. Manifold-safe geometry (no co-planar faces)
3. Whether hole_r=3.2 is an appropriate M3 clearance hole diameter
4. Any parameters that could produce invalid geometry if set to extreme values
Respond with: issues found, severity (critical/warning/note), and suggested fix for each.
```

A structured prompt produces structured, actionable feedback.[^2]

### 4. Validate AI Suggestions Before Applying Them

AI tools can produce plausible-sounding but incorrect recommendations. Always apply a verification step:

```
AI suggests: "Change hole_r to 3.0 for an M3 clearance hole"

Verification steps:
1. Check ISO standard: M3 clearance hole = 3.2mm (medium fit), 3.4mm (loose fit)
2. AI recommendation of 3.0mm would be an interference fit, not a clearance hole
3. Reject the suggestion; keep 3.2mm

Conclusion: AI was wrong. Apply human domain knowledge.
```

Document your accept/reject decisions in your project notes for future reference.

### 5. Apply Privacy and Data Considerations

When using cloud AI tools:
- **Don't upload proprietary designs** to free-tier AI services without checking their data retention policies
- **Anonymize or simplify** your model before requesting AI review if IP is a concern
- `3dm describe` uses the same AI backend as configured in your 3dMake settings — check your instance's privacy settings

For classroom use, `3dm describe` on non-sensitive learning projects is appropriate. For professional designs, consult your organization's data policy.[^3]

### Checkpoint
- After step 2: You can articulate the difference between deterministic and AI-based validation.
- After step 3: Your AI prompt produces structured, reviewable output.
- After step 4: You have documented at least one accept or reject decision for an AI suggestion.

## Common AI Validation Patterns

### Pattern 1: Geometry Sanity Check

```bash
# Ask AI to describe what it "sees" in your model
3dm describe

# Then compare to your design checklist:
# - Correct overall dimensions? ✓/✗
# - Expected number of holes/features? ✓/✗
# - No unexpected geometry? ✓/✗
# - Print orientation makes sense? ✓/✗
```

### Pattern 2: Code Review Prompt Template

Use this template when asking an AI to review OpenSCAD code:

```
Context: [describe what the part is and what it will be used for]
Code: [paste your OpenSCAD code]
Parameters: [list key parameter values]
Review for:
  - Boolean operation correctness (0.001 offsets where needed)
  - Parameter range safety (will extreme values break geometry?)
  - Printability (overhangs, thin walls, minimum feature size)
  - Code clarity (variable names, comments)
Output format: numbered list of issues, each with severity and fix
```

### Pattern 3: Iterative Improvement Loop

```
1. Write initial design
2. Run 3dm build → fix compile errors
3. Run slicer → fix geometry errors (deterministic)
4. Run 3dm describe or AI review → address suggestions (with verification)
5. Print test piece → compare to spec
6. Iterate on parameters if needed
```

## Quiz — Lesson 3dMake.4 (15 questions)

1. What does `3dm describe` do?
2. What is the difference between deterministic validation and AI-based validation?
3. Give two elements of a strong AI code review prompt that a weak prompt lacks.
4. Why should you always verify AI suggestions before applying them? Give a specific example.
5. What type of geometry errors does slicer validation catch that AI description does not?
6. True or False: `3dm describe` will always produce identical output for the same STL file.
7. What data privacy concern should you consider when uploading a design to a cloud AI service?
8. In the iterative improvement loop described above, at which step should you run slicer validation?
9. What does it mean for a model to be "non-deterministic" in the context of AI feedback?
10. Describe one scenario where AI validation would be useful and one where you must rely on deterministic tools instead.
11. What is "prompt engineering" and why does it matter when using AI for code review?
12. If an AI tool suggests a geometry change that contradicts an ISO standard, what should you do?
13. What is the NIST AI Risk Management Framework, and in what professional context would it be relevant to AI-assisted design validation?[^4]
14. Describe two ways you could reduce IP exposure when using a cloud AI tool to review a proprietary design.
15. In the validation table (deterministic vs. AI vs. calipers), which method provides "ground truth" and why?

## Extension Problems (15)

1. Design a validation checklist for a new 3D printed part. Include at least five items that are deterministic and three that benefit from AI assistance.
2. Build a "prompt library" for three common design review scenarios: mounting brackets, enclosures, and text embossing. Test each prompt and document the output quality.
3. Run `3dm describe` on the same STL five times. Document any variation in output. What does this tell you about reproducibility?
4. Create a structured accept/reject log for one full design cycle (design → AI review → verification → decision). Share the log with a classmate for peer review.
5. Research what "hallucination" means in the context of AI language models. Document two examples of how an AI might hallucinate in a design review context.
6. Design an experiment to compare AI-suggested print orientation with slicer-suggested orientation for 10 different models. Tabulate the agreement rate.
7. Write a one-page data privacy policy for an imaginary classroom 3D printing lab that uses cloud AI tools. Reference your school's existing digital privacy guidelines.
8. Create a set of deliberately flawed OpenSCAD files (missing 0.001 offsets, wrong hole sizes, thin walls) and test whether AI review catches all the flaws.
9. Build a "verification script" using `3dm build` and slicer command-line tools that automates the deterministic validation steps in the iterative loop.
10. Interview a classmate using the stakeholder interview technique from Lesson 11 to understand their mental model of AI validation. What assumptions do they have that might be incorrect?
11. Research the difference between AI classification tasks (is this a manifold mesh?) and AI generation tasks (describe this mesh). Document why classification is more reliable for geometric validation.
12. Build a comparison table: for each of five design features (holes, thin walls, overhangs, text, interlocking parts), list whether AI review, slicer validation, or physical test is most reliable.
13. Write a "red teaming" exercise: intentionally try to get an AI tool to give you incorrect geometry advice. Document what prompts succeeded and what that means for how you use AI in design work.
14. Create a lesson plan (5 minutes) explaining AI validation concepts to a fellow student who has never used an AI tool. Focus on the deterministic vs. non-deterministic distinction.
15. Research and document the difference between "AI-assisted" and "AI-automated" workflows. At what point does removing the human from the validation loop become risky?

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Manifold and Geometry Validation - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language)

[^2]: Anthropic Prompt Engineering Guide — [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview). Covers structured prompting techniques applicable to code review use cases.

[^3]: Data Privacy in AI-Assisted Tools — General guidance: review your AI provider's terms of service and data retention policy before submitting proprietary or sensitive design files.

[^4]: NIST AI Risk Management Framework (AI RMF 1.0) — National Institute of Standards and Technology, 2023. [https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf). Provides a structured framework for managing risks in AI-integrated workflows.

### Supplemental Resources

- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Source for `3dm describe` and other commands
- [Anthropic Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Prompting best practices
- [NIST AI RMF](https://airc.nist.gov/Home) — AI risk management in professional contexts
- [PrusaSlicer Documentation](https://docs.prusa3d.com/en/) — Deterministic slicer validation reference
