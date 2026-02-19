# Dice Design Workshop — Guided Extension (Self-Paced)

**Accessibility:** When including images or diagrams, add short alt-text and provide a comment-based walkthrough for any .scad examples so screen-reader users can follow the design steps.


Estimated time: 3–6 hours

**Learning Objectives**
- Design parametric dice in OpenSCAD with controlled mass distribution
- Test durability and randomness for small, thrown objects
- Document design decisions and measure physical outcomes

**Materials**
- Computer with OpenSCAD and slicer
- Printer and filament, small testing surface

Step-by-step Tasks
1. Create three distinct die designs in OpenSCAD using parameters (size, face style, internal cavities).
2. For each die, explain which parameters you changed and why (one short paragraph each).
3. Print one sample of each die and perform a basic durability test (five throws onto a soft surface).
4. Record outcomes of each throw and compute a simple frequency table for face results.
5. Measure mass and critical dimensions; document any deformation or failure modes.

Probing Questions
- How does internal infill or cavity affect mass distribution and roll randomness?
- Which parameter had the largest effect on durability and why?

Quick Quiz (5)
1. What parameter controls wall thickness in your `.scad` file? (short answer)
2. Name one method to increase a part’s impact resistance. (short answer)
3. How would you test randomness in a die? (short answer)
4. Why might a hollow die behave differently than a solid one? (one sentence)
5. What is a simple sign of print-layer delamination? (one sentence)

Extension Problems (5)
1. Create a parametric script that produces dice with adjustable center-of-mass offsets and show results of roll tests.
2. Design a bead-style die that assembles from two printed halves and document assembly steps.
3. Compare two infill patterns for the same die and report on mass and durability differences.
4. Add tactile markers to faces for non-visual testing and document how they affect roll behavior.
5. Publish your `.scad` and test logs to the class repo and provide feedback on two classmates’ designs.

