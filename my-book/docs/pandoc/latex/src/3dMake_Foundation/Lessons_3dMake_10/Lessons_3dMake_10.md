[Header 2 ("lesson-10-hands-on-practice-exercises-and-troubleshooting", [], []) [Str "Lesson 10: Hands-On Practice Exercises and Troubleshooting"], Para [Str "Estimated time: 120–150 minutes"], Header 3 ("learning-objectives-", ["unnumbered", "unlisted"], []) [Str "Learning Objectives ", Note [Para [Str "OpenSCAD User Manual — Hull and Minkowski. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull", "")]]], BulletList [[Plain [Str "Apply skills from Lessons 1–9 in three integrated design exercises"]], [Plain [Str "Use calipers to measure and validate printed parts against specifications"]], [Plain [Str "Diagnose and fix non-manifold geometry errors"]], [Plain [Str "Perform tolerance stack-up analysis"]], [Plain [Str "Use ", Code ("", [], []) "3dm describe", Str " for non-visual validation"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Printer and PLA filament"]], [Plain [Str "Digital calipers"]], [Plain [Str "Printed parts from previous lessons (or new prints from exercises below)"]]], Header 3 ("exercise-set-a-phone-stand-refinement", ["unnumbered", "unlisted"], []) [Str "Exercise Set A: Phone Stand Refinement"], Header 4 ("a1--measure-and-iterate", ["unnumbered", "unlisted"], []) [Str "A1 — Measure and Iterate"], Para [Str "Using calipers, measure your printed phone stand against the design specification:"], CodeBlock ("", [""], []) "Measurement checklist:
[ ] Base width = phone_w + 20 ± 0.3 mm
[ ] Base depth as calculated ± 0.5 mm
[ ] Back support angle (measure with angle gauge or protractor)
[ ] Lip depth = lip_h ± 0.3 mm
[ ] Phone fits and is stable (functional test)
", Para [Str "For each out-of-spec dimension, calculate the correction and update the parameter in ", Code ("", [], []) "src/main.scad", Str ". Rebuild and reprint."], Header 4 ("a2--tolerance-stack-up-analysis-", ["unnumbered", "unlisted"], []) [Str "A2 — Tolerance Stack-Up Analysis ", Note [Para [Str "Digital Calipers Measurement Technique — General metrology reference. See also: ", Link ("", [], []) [Str "Measurement Worksheet Asset"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_10/../../assets/3dMake_Foundation/measurement_worksheet.md", "")]]], CodeBlock ("", [""], []) "Scenario: phone stand cradle with three stacked parts:
- Base plate: designed 5mm, printed 5.12mm (+ 0.12mm)
- Back brace: designed 60mm, printed 59.87mm (- 0.13mm)
- Lip:        designed 15mm, printed 15.09mm (+ 0.09mm)

Total stack height: 5.12 + 59.87 + 15.09 = 80.08mm
Design intent:      5 + 60 + 15            = 80.00mm
Error:              80.08 - 80.00          = +0.08mm  (within 0.5mm spec — PASS)

Worst case (all errors same direction): 0.12 + 0.13 + 0.09 = 0.34mm — still within spec
", Para [Str "Document your own measurements in a similar table."], Header 4 ("a3--add-a-cable-slot-", ["unnumbered", "unlisted"], []) [Str "A3 — Add a Cable Slot ", Note [Para [Str "3DMake GitHub Repository — Command reference including ", Code ("", [], []) "3dm describe", Str ". ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]], Para [Str "Extend your phone stand design with a cable slot through the base:"], CodeBlock ("", ["openscad"], []) "cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add to main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
", Header 3 ("exercise-set-b-keycap-with-text", ["unnumbered", "unlisted"], []) [Str "Exercise Set B: Keycap with Text"], Header 4 ("b1--build-a-mechanical-keyboard-keycap", ["unnumbered", "unlisted"], []) [Str "B1 — Build a Mechanical Keyboard Keycap"], CodeBlock ("", ["openscad"], []) "// Parametric keycap
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5mm diameter
stem_h     = 3.8;
wall       = 1.5;
label_text = \"A\";

module keycap() {
  difference() {
    // Keycap body with slight top curve
    hull() {
      cube([key_w, key_d, key_h - 2], center=true);
      translate([0, 0, 1]) cube([key_w - 2, key_d - 2, key_h], center=true);
    }
    // Hollow inside
    translate([0, 0, -wall])
      cube([key_w - 2*wall, key_d - 2*wall, key_h], center=true);
    // MX stem hole
    translate([0, 0, -(key_h/2 + 0.001)])
      cylinder(r=stem_r + 0.1, h=stem_h + 0.001, $fn=16);
  }
}

module stem_mount() {
  translate([0, 0, -(key_h/2 + stem_h)])
    difference() {
      cylinder(r=stem_r + wall, h=stem_h, $fn=16);
      cylinder(r=stem_r, h=stem_h + 0.001, $fn=16);
    }
}

keycap();
stem_mount();

// Engrave label
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font=\"Liberation Sans:style=Bold\",
         halign=\"center\", valign=\"center\", $fn=4);
", Header 4 ("b2--validate-with-3dm-describe", ["unnumbered", "unlisted"], []) [Str "B2 — Validate with 3dm describe"], CodeBlock ("", ["bash"], []) "3dm describe
", Para [Str "Expected output should confirm the keycap geometry. Document what the AI description says and compare it to your design intent."], Header 4 ("b3--print-and-test", ["unnumbered", "unlisted"], []) [Str "B3 — Print and Test"], Para [Str "Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase ", Code ("", [], []) "stem_r + 0.1", Str " to ", Code ("", [], []) "stem_r + 0.15", Str ". If too loose, decrease to ", Code ("", [], []) "stem_r + 0.05", Str "."], Header 3 ("exercise-set-c-stackable-bins", ["unnumbered", "unlisted"], []) [Str "Exercise Set C: Stackable Bins"], Header 4 ("c1--build-a-three-size-bin-set", ["unnumbered", "unlisted"], []) [Str "C1 — Build a Three-Size Bin Set"], Para [Str "Using the stackable bin module from Lesson 8, generate three sizes:"], CodeBlock ("", ["openscad"], []) "// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
", Header 4 ("c2--diagnose-and-fix-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "C2 — Diagnose and Fix Non-Manifold Geometry"], Para [Str "Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). Common causes:"], CodeBlock ("", ["openscad"], []) "// PROBLEM: two cubes share a face exactly — may produce non-manifold edge
cube([20, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);  // touching at x=20 — ambiguous edge

// FIX 1: use union()
union() {
  cube([20, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}

// FIX 2: overlap slightly
cube([20.001, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);
", Para [Str "Diagnosis tool:"], CodeBlock ("", ["bash"], []) "3dm describe  # AI will often flag non-manifold geometry
# Also open STL in slicer and enable \"Check for geometry errors\"
", Header 4 ("c3--advanced-geometry-hull-and-minkowski", ["unnumbered", "unlisted"], []) [Str "C3 — Advanced Geometry: hull() and minkowski()"], CodeBlock ("", ["openscad"], []) "// hull() creates a convex envelope — useful for organic shapes
module smooth_transition() {
  hull() {
    translate([0, 0, 0]) cylinder(r=15, h=5, $fn=64);
    translate([0, 0, 30]) cylinder(r=5, h=2, $fn=64);
  }
}

smooth_transition();

// minkowski() adds the shape of a small object to every surface point
module rounded_hull() {
  minkowski() {
    hull() {
      cylinder(r=10, h=3, $fn=8);      // octagonal prism
      translate([30, 0, 0]) sphere(r=8, $fn=32);
    }
    sphere(r=2, $fn=16);  // rounds all edges by 2mm
  }
}

rounded_hull();
", Header 3 ("quiz--lesson-3dmake10-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.10 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What tool do you use to measure printed part dimensions against the design specification?"]], [Plain [Str "What is tolerance stack-up, and why does it matter for multi-part assemblies?"]], [Plain [Str "What causes non-manifold geometry in OpenSCAD, and how do you detect it?"]], [Plain [Str "How does ", Code ("", [], []) "hull()", Str " differ from ", Code ("", [], []) "union()", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "3dm describe", Str " help you verify about your model?"]], [Plain [Str "What does a Cherry MX stem measure in diameter, and what clearance would you add for a slip-fit keycap?"]], [Plain [Str "True or False: ", Code ("", [], []) "find -newer", Str " is an event-driven file change detection method."]], [Plain [Str "If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?"]], [Plain [Str "What does the ", Code ("", [], []) "$fn", Str " parameter control in OpenSCAD?"]], [Plain [Str "Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes."]], [Plain [Str "What is the difference between ", Code ("", [], []) "hull()", Str " and ", Code ("", [], []) "minkowski()", Str " for creating organic shapes? Give one use case for each."]], [Plain [Str "What does ", Code ("", [], []) "resize([50, 0, 0])", Str " do, and why might ", Code ("", [], []) "resize()", Str " behave unexpectedly for non-uniform scaling?"]], [Plain [Str "When measuring a printed part with calipers, what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?"]], [Plain [Str "Describe the iterative design workflow for dialing in press-fit tolerances: what do you print, what do you measure, and how do you adjust?"]], [Plain [Str "If ", Code ("", [], []) "3dm describe", Str " reports \"the model appears non-manifold,\" what are three possible causes you would investigate in your OpenSCAD code?"]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches."]], [Plain [Str "Design a go/no-go gauge for a 10 mm nominal hole: a part with a \"go\" pin sized for slip-fit and a \"no-go\" pin sized for interference fit."]], [Plain [Str "Write a printer calibration SOP (standard operating procedure): bed leveling, first-layer calibration, and dimension verification. Include a measurement checklist."]], [Plain [Str "Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid."]], [Plain [Str "Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment."]], [Plain [Str "Build a parametric test coupon that tests four different wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print."]], [Plain [Str "Design a caliper stand: a holder that holds your digital calipers at a comfortable angle for one-handed operation."]], [Plain [Str "Build a non-manifold error catalog: intentionally create 5 different types of non-manifold geometry, document how each was created and how to fix it."]], [Plain [Str "Use ", Code ("", [], []) "hull()", Str " to design a smooth ergonomic tool handle and compare it to a simple cylinder handle."]], [Plain [Str "Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs."]], [Plain [Str "Research the ", Code ("", [], []) "resize()", Str " function in OpenSCAD. Build an example showing how it behaves differently from ", Code ("", [], []) "scale()", Str " for non-uniform resizing."]], [Plain [Str "Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches the concepts of tolerance, alignment, and slip-fit."]], [Plain [Str "Build a \"measurement worksheet\" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part."]], [Plain [Str "Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine if the errors are normally distributed."]], [Plain [Str "Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered (or researched), with causes, prevention, and fixes."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Troubleshooting and advanced geometry chapters"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked practice exercises"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — Function reference"]], [Plain [Link ("", [], []) [Str "Master Rubric"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_10/../../assets/3dMake_Foundation/master-rubric.md", ""), Str " — Assessment criteria for practice exercises"]]]]