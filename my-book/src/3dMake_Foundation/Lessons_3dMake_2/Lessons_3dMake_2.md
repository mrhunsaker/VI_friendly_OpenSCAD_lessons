```markdown


# Lesson 2: Geometric Primitives and Constructive Solid Geometry (Self-Paced)



Estimated time: 60 minutes

**Learning Objectives**
- Use OpenSCAD primitives (`cube()`, `sphere()`, `cylinder()`) and transforms (`translate()`, `rotate()`, `scale()`)
- Apply CSG operators (`union`, `difference`, `intersection`) safely and diagnose common numerical issues
- Use quick diagnostic renders and validate geometry in a slicer

**Materials**
- 3dMake project scaffold with `src/main.scad`
- Example primitive snippets (provided in assets)

Step-by-step Tasks
1. Open `src/main.scad`; identify and run simple examples using `cube()`, `sphere()`, and `cylinder()`.
2. Create three short examples demonstrating `union()`, `difference()`, and `intersection()` and render with reduced `$fn`.
3. Reproduce a failing `difference()` case and apply the 0.001 offset strategy to the subtractor; re-render and confirm fix.
4. Build an STL with `3dm build` and open it in your slicer to check for thin walls or islands.
5. Document any fixes in the project README and commit the working `main.scad` and STL.

Checkpoints
- After task 3 the problematic boolean should render without non-manifold warnings.

Quick Quiz (5)
1. Name three primitive functions in OpenSCAD.
2. What does `difference()` accomplish?
3. Why might two coincident faces cause a render failure?
4. What is the 0.001 rule and why is it useful?
5. How does lowering `$fn` help during debugging?

Extension Problems (5)
1. Create a small assembly using `union()` of three primitives and export the STL.
2. Intentionally create a failing boolean and fix it using offsets; explain your approach.
3. Write a short test script that generates three variants with varying `$fn` values and compare render times.
4. Use `3dm info` (if available) to generate a report on your model and document any recommendations.
5. Explore using a library module (e.g., a fillet helper) to fix a sharp corner and note the difference in final STL.


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

```
