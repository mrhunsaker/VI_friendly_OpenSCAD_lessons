```markdown


# Project 0 — Your First 3D Print (Guided Self-Paced)

Estimated time: 2–4 hours (including test prints)

**Learning Objectives**
- Measure physical objects and convert measurements into parametric OpenSCAD variables
- Produce an STL from parametric code and verify printability in a slicer
- Compare printed results to expected dimensions and document corrective actions

**Materials**
- Calipers, computer with OpenSCAD and slicer, access to a classroom printer
- Project documentation template (fillable)

Step-by-step Tasks
1. Select a small object and list three key measurable features (length, width, height).
2. Use calipers to take three measurements for each feature; record averages in the documentation template.
3. Create `project0.scad` with top-level variables for your averaged measurements.
4. Build the model using primitives and `translate()`/`rotate()`; preview (`F5`) frequently and render (`F6`) once satisfied.
5. Export STL, slice with the classroom profile, and note estimated print time and filament usage.
6. Print a test piece, measure critical dimensions after cooling, and log deviations.
7. Write a 1‑page reflection including cause hypotheses and a corrective parameter adjustment you would apply next.

Probing Questions
- Which measurement showed the largest deviation and what do you suspect caused it?
- How does your chosen layer height influence both accuracy and print time?

Quick Quiz (5)
1. What is the purpose of defining top-level variables in your `.scad` file? (short answer)
2. How many times should you measure a feature to get a reliable average? (short answer)
3. Name one cause of dimensional mismatch between model and print. (short answer)
4. What command previews your OpenSCAD model without rendering? (one-word answer)
5. Where do you record filament and print-time metadata for reproducibility? (short answer)

Extension Problems (5)
1. Create two scaled variants for different nozzle sizes and document the parameter changes.
2. Add a snap-fit feature and test assembly tolerance with a small print.
3. Parameterize a tolerance variable and test three values, reporting fit outcomes.
4. Write a short automation script to produce multiple STL variants from the same SCAD file.
5. Produce a troubleshooting checklist focused on adhesion and dimensional errors.

Deliverables
- `project0.scad` with variables and comments
- Exported STL and slicer profile settings
- Completed documentation template with measurements, test logs, and reflection

**Accessibility:** Provide alt-text for images and a short comment-based walkthrough in `.scad` files so screen-reader users can follow step-by-step.

```
