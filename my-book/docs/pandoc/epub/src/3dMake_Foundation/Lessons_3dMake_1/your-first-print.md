[Header 4 ("3dmake_foundation_lessons_3dmake_1-your-first-print", [], []) [Str "Your First Print - Guided Extension"], Para [Str "Estimated time: 2-4 hours (including setup and print monitoring)"], Header 5 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Select a simple ready-made model and evaluate its printability for a classroom printer"]], [Plain [Str "Configure slicer settings for a short-duration print and prepare the printer safely"]], [Plain [Str "Document print parameters and reflect on the physical outcome"]]], Header 5 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "Computer with slicer and access to the online repository"]], [Plain [Str "Prusa Mini+ or classroom-approved printer, filament spool"]]], Header 5 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Choose a simple model (", Str "<", Str "2 hours print) from Thingiverse or Printables and save the STL."]], [Plain [Str "Inspect the model: note overhangs, thin features, and dimensions; write two short reasons why this model is appropriate for a first print."]], [Plain [Str "Load the model in your slicer, select the classroom profile, and adjust settings only if necessary (layer height, infill, supports). Record the final print time and filament estimate."]], [Plain [Str "Perform safety checks, start the print, and monitor the first 10 minutes for adhesion and extrusion problems."]], [Plain [Str "After cooling, measure three critical dimensions and compare to the models stated dimensions; record deviations."]]], Header 5 ("starter-code", ["unnumbered", "unlisted"], []) [Str "Starter Code"], Para [Str "You can use this basic project scaffold as your starting point:"], CodeBlock ("", ["openscad"], []) "// Basic Project Scaffold for 3D Printing
// This template provides a starting point for beginner projects
// Complete the TODO sections to create your own design
// ============================================
// PROJECT CONFIGURATION
// ============================================
// TODO: Set your project name
projectname = \"My First Project\";
// TODO: Define overall dimensions (mm)
objectwidth = 50;
objectdepth = 50;
objectheight = 20;
// Wall thickness for strength (2-3mm recommended)
wallthickness = 2;
// ============================================
// MATERIAL PROPERTIES
// ============================================
// Print resolution (0.2mm layers recommended)
$fn = 30;  // Fragment quality (higher = smoother curves, slower rendering)
// ============================================
// MAIN DESIGN
// ============================================
module baseshape() {
    // TODO: Replace this cube with your design
    cube([objectwidth, objectdepth, objectheight], center = true);
}
module hollowversion() {
    // Creates a hollow version by subtracting an inner cube
    difference() {
        baseshape();
        // Inner void (adjust padding as needed)
        translate([0, 0, 0.5])
            cube([objectwidth - 2*wallthickness, 
                  objectdepth - 2*wallthickness, 
                  objectheight - 2*wallthickness], 
                 center = true);
    }
}
// Render the solid version for your first print
baseshape();
", Header 5 ("probing-questions", ["unnumbered", "unlisted"], []) [Str "Probing Questions"], BulletList [[Plain [Str "Why did you select this model? What risks did you anticipate and how did you mitigate them?"]], [Plain [Str "Which slicer setting most affects print time for this model and why?"]], [Plain [Str "If a thin feature failed, what minimal change would you make to ensure success next time?"]]], Header 5 ("quiz---your-first-print-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Your First Print (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is the first-check you do after loading filament? (short answer)"]], [Plain [Str "Name two slicer settings that affect strength. (short answer)"]], [Plain [Str "Why monitor the first layers of a print? (one sentence)"]], [Plain [Str "How do you document filament used for reproducibility? (short answer)"]], [Plain [Str "What is one sign of poor bed adhesion? (one sentence)"]], [Plain [Str "True/False: Selecting a model with support requirements is not recommended for your first print. (Answer: True)"]], [Plain [Str "Short answer: Describe two characteristics of a \"printability-friendly\" model that would be good for a beginner's first print."]], [Plain [Str "Practical scenario: Your first print is showing stringing (thin lines between parts). What are two possible causes and how would you troubleshoot?"]], [Plain [Str "Multiple choice: When measuring a printed dimension, where should you measure multiple times (three different spots) to account for print variation? (A) Never, measure once (B) Only if you suspect error (C) Always measure at least three locations - Answer: C"]], [Plain [Str "Reflection: Explain why carefully selecting your first print model (simple, robust, known to work on your printer) is better than immediately attempting a complex design. What will you learn from success that prepares you for harder projects?"]]], Header 5 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Re-slice the model with a finer layer height and compare surface finish and print time; document differences."]], [Plain [Str "Modify the model in OpenSCAD to thicken a failing feature and reprint a small test piece."]], [Plain [Str "Create a short checklist script (or text checklist) that verifies spool metadata and bed temperature before printing."]], [Plain [Str "Produce a one-page reflection that includes three lessons learned and one parameter you will change next time."]], [Plain [Str "Share your measurements and photos in the class folder and give feedback on two peers' prints."]], [Plain [Str "Conduct a post-print analysis: compare actual measurements to STL specifications; identify and document any deviations."]], [Plain [Str "Print the same model in two different materials or with two different slicer profiles; compare durability, appearance, and accuracy."]], [Plain [Str "Create a detailed documentation package: CAD file, slicer settings, print log, measurements, and lessons learned."]], [Plain [Str "Design a quality assurance test: define pass/fail criteria and systematically verify your print meets all requirements."]], [Plain [Str "Write a \"first print troubleshooting guide\" based on your experience: common issues you encountered and how you solved them."]]], Header 5 ("deliverables", ["unnumbered", "unlisted"], []) [Str "Deliverables"], BulletList [[Plain [Str "Short report: model chosen, key slicer settings, measured deviations, and answers to probing questions."]], [Plain [Str "Photos of the final print and the measured values table."]]]]