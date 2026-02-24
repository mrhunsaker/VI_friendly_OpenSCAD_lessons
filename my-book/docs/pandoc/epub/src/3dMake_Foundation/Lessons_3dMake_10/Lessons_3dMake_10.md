[Header 2 ("3dmake_foundation_lessons_3dmake_10-lessons_3dmake_10", [], []) [Str "Lesson 10: Hands-On Practice Exercises and Troubleshooting"], Para [Str "Estimated time: 120-150 minutes (multiple activities)"], Para [Strong [Str "Learning Objectives"]], BulletList [[Plain [Str "Apply all prior lessons in integrated projects", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]]]], [Plain [Str "Diagnose and fix common 3D printing and OpenSCAD issues", Note [Para [Str "3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/"]]]], [Plain [Str "Validate models using deterministic and AI-assisted inspection", Note [Para [Str "3DMake Documentation - https://github.com/tdeck/3dmake/wiki/Troubleshooting"]]]], [Plain [Str "Document design decisions and troubleshooting processes", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]]]]], Para [Strong [Str "Materials"]], BulletList [[Plain [Str "3dMake project scaffold"]], [Plain [Str "Printer for test prints (recommended)"]], [Plain [Str "Measuring tools (calipers, protractor)"]], [Plain [Str "Access to 3dm commands"]], [Plain [Str "Reference: ", Link ("", [], []) [Str "master-rubric.md"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/Lessons_3dMake_11/master-rubric.md", ""), Str " for assessment criteria"]], [Plain [Str "Reference: ", Link ("", [], []) [Str "filament-comparison-table.md"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/Lessons_3dMake_5/filament-comparison-table.md", ""), Str " for material properties"]]], Para [Strong [Str "Extension Projects"], Str ": Complete ", Link ("", [], []) [Str "Dice_Dice_Dice"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/Lessons_3dMake_4/Dice_Dice_Dice.md", ""), Str " or ", Link ("", [], []) [Str "Snap_Fit_Clip"] ("docs%5Cpandoc%5Cepub%5Csrc%5C3dMake_Foundation%5CLessons_3dMake_8%5Csnap-fit-clip.md#3dmake_foundation_lessons_3dmake_8-snap-fit-clip", ""), Str " to practice integrated validation workflows."], HorizontalRule, Header 3 ("measurement-fundamentals", ["unnumbered", "unlisted"], []) [Str "Measurement Fundamentals"], Para [Str "Before you can validate that your designs print correctly, you need to measure accurately. This section covers using calipers and interpreting measurement data."], Header 4 ("understanding-digital-calipers", ["unnumbered", "unlisted"], []) [Str "Understanding Digital Calipers"], Para [Str "A ", Strong [Str "digital caliper"], Str " is a precision tool with three measurement modes:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.20689655172413793)), (AlignDefault, (ColWidth 0.3218390804597701)), (AlignDefault, (ColWidth 0.47126436781609193))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Mode"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Outside jaws"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure outer dimensions"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Diameter of a cylinder, width of a part"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Inside jaws"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure inner dimensions"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Hole diameter, inside width of a box"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Depth rod"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure depth or thickness"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Depth of a recess, thickness of a part"]]]])] (TableFoot ("", [], []) []), Header 4 ("measurement-best-practices", ["unnumbered", "unlisted"], []) [Str "Measurement Best Practices"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Zero the caliper:"], Str " With jaws closed, press the ON/ZERO button to confirm it reads 0.0 mm"]], [Plain [Strong [Str "Use gentle pressure:"], Str " Tighten jaws just enough to hold the object; excessive force causes false readings"]], [Plain [Strong [Str "Take three trials:"], Str " Measure the same feature three times and calculate the average"]], [Plain [Strong [Str "Record to 0.1 mm:"], Str " Most printed parts can be reliably measured to one decimal place"]]], Para [Strong [Str "Example measurement sequence:"]], CodeBlock ("", [""], []) "Object: 3D-printed cube

Trial 1: 24.5 mm

Trial 2: 24.2 mm

Trial 3: 24.6 mm

Average: (24.5 + 24.2 + 24.6) / 3 = 24.43 mm  24.4 mm


Interpretation: Designed as 25.0 mm, printed as 24.4 mm

Deviation: -0.6 mm (0.24% shrinkage, acceptable for PLA)

", Header 4 ("using-measurements-to-improve-design", ["unnumbered", "unlisted"], []) [Str "Using Measurements to Improve Design"], Para [Str "When you find a deviation between your designed and actual dimensions, you can adjust future prints:"], CodeBlock ("", ["openscad"], []) "// Design parameter

part_height = 50;  // Designed: 50 mm


// After first print, measured: 49.7 mm

// Shrinkage: ~0.6% (typical for PLA)


// Adjustment for next print:

// Option 1: Add 0.3 mm to compensate

part_height = 50.3;  // Should now print ~50.0 mm


// OR


// Option 2: Scale the entire design by 1.006 (0.6% larger)

scale([1.006, 1.006, 1.006])

  main_model();

", Header 4 ("tolerance-stack-up-in-assemblies", ["unnumbered", "unlisted"], []) [Str "Tolerance Stack-Up in Assemblies"], Para [Str "When multiple parts fit together, measurement errors compound. This is called ", Strong [Str "tolerance stack-up"], Str ":"], CodeBlock ("", [""], []) "Example: Stackable bins

Designed: Outer width = 80.0 mm, Rim clearance = 0.6 mm


If each part prints 0.3 mm undersized:

Bin A actual: 79.7 mm outer

Bin B actual: 79.7 mm outer


Stack-up effect: Instead of 0.6 mm clearance, you get 0.9 mm

Result: Bins stack loosely (might be acceptable or problematic depending on use)


Solution: Design with 0.8 mm clearance initially, measure test prints,

then adjust if needed.

", Header 4 ("creating-a-measurement-log", ["unnumbered", "unlisted"], []) [Str "Creating a Measurement Log"], Para [Str "For any parametric design project, maintain a measurement log:"], CodeBlock ("", [""], []) "Project: Phone Stand Variants

Date: February 10, 2026


Part: Base (narrow variant, 60 mm)

Design dimension: 60.0 mm width

Trial 1: 59.7 mm

Trial 2: 59.8 mm

Trial 3: 59.9 mm

Average: 59.8 mm

Deviation: -0.2 mm

Status:  Acceptable (within +/-0.5 mm tolerance)


Part: Base (wide variant, 120 mm)

Design dimension: 120.0 mm width

Trial 1: 119.5 mm

Trial 2: 119.6 mm

Trial 3: 119.8 mm

Average: 119.6 mm

Deviation: -0.4 mm

Status:  Acceptable


Part: Lip (lip_height parameter: 15 mm)

Design dimension: 15.0 mm

Trial 1: 14.8 mm

Trial 2: 14.9 mm

Trial 3: 14.9 mm

Average: 14.87 mm  14.9 mm

Deviation: -0.1 mm

Status:  Excellent

", Header 4 ("reference-appendix-c", ["unnumbered", "unlisted"], []) [Str "Reference: Appendix C"], Para [Str "For comprehensive QA procedures, assembly testing, and durability validation, see ", Strong [Str "Appendix C: Tolerance Testing & QA Matrix"], Str ", which covers:"], BulletList [[Plain [Str "Go/no-go gauges for functional validation"]], [Plain [Str "Multi-cycle durability testing (snap-fits, hinges)"]], [Plain [Str "Stress testing procedures"]], [Plain [Str "Complete measurement worksheets"]]], HorizontalRule, Header 3 ("exercise-set-a-guided-projects-with-real-world-constraints", ["unnumbered", "unlisted"], []) [Str "Exercise Set A: Guided Projects with Real-World Constraints"], Header 4 ("exercise-a1-the-parametric-phone-stand-beginner", ["unnumbered", "unlisted"], []) [Str "Exercise A1: The Parametric Phone Stand (Beginner)"], Para [Strong [Str "Objective:"], Str " Create a phone stand that works for 3+ phone models with different screen sizes."], Para [Strong [Str "Requirements:"]], BulletList [[Plain [Str "Base must support 300g weight"]], [Plain [Str "Angle must be adjustable (45-75)"]], [Plain [Str "Width must accommodate phones 60-90mm wide"]], [Plain [Str "All parameters at top of file"]]], Para [Strong [Str "Starter Code:"]], CodeBlock ("", ["openscad"], []) "// Parametric Phone Stand v1

// Required parameters


phone_width = 75;   // mm - adjust for different phones

base_width = phone_width + 10;  // Add margin

base_depth = 100;   // mm

base_thickness = 5; // mm


stand_angle = 60;   // degrees - adjust viewing angle

lip_height = 15;    // mm - hold phone at top


// Module definitions

module base() {

  cube([base_width, base_depth, base_thickness]);

}


module stand() {

  rotate([stand_angle, 0, 0])

    cube([base_width, base_depth, base_thickness]);

}


module lip() {

  translate([0, base_depth - 8, base_thickness])

    cube([base_width, 8, lip_height]);

}


// Assemble

union() {

  base();

  stand();

  lip();

}

", Para [Strong [Str "Tasks:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Build the model and verify it's manifold with ", Code ("", [], []) "3dm describe"]], [Plain [Str "Generate 3 variants: iPhone (60mm), iPad mini (100mm), Tablet (150mm)"]], [Plain [Str "Test each variant by measuring critical dimensions"]], [Plain [Str "Document which variant works best with real devices"]]], Para [Strong [Str "Success Criteria:"]], BulletList [[Plain [Str "All 3 variants build without errors"]], [Plain [Str "Printed parts successfully hold test phones"]], [Plain [Str "Dimensions match designs within 0.5mm"]]], HorizontalRule, Header 4 ("exercise-a2-the-customizable-keycap-set-intermediate", ["unnumbered", "unlisted"], []) [Str "Exercise A2: The Customizable Keycap Set (Intermediate)"], Para [Strong [Str "Objective:"], Str " Design a family of keycaps for a custom keyboard with text, icons, and different profiles."], Para [Strong [Str "Requirements:"]], BulletList [[Plain [Str "5+ keycap sizes (mm 12-28)"]], [Plain [Str "Support embossed text and numbers"]], [Plain [Str "Optional: icon cutouts"]], [Plain [Str "All printable without supports"]]], Para [Strong [Str "Challenge:"], Str " Use parametric code to generate all 5 caps from a single design", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str ":"], CodeBlock ("", ["openscad"], []) "// Parametric Keycap Generator v1


// PARAMETERS TO CUSTOMIZE

cap_size = 18;      // mm - change for different key sizes

cap_height = 12;    // mm

wall = 1.2;         // mm

text_char = \"A\";    // Character to emboss

emboss_depth = 0.8; // mm


// Derived calculations

inner_size = cap_size - 2*wall;


module keycap() {

  // Hollow shell

  difference() {

    cube([cap_size, cap_size, cap_height], center=false);

    translate([wall, wall, wall])

      cube([inner_size, inner_size, cap_height], center=false);

  }

}


module emboss() {

  translate([cap_size/2, cap_size/2, cap_height - 0.01])

    linear_extrude(height=emboss_depth)

      text(text_char, size=cap_size*0.5, 

           halign=\"center\", valign=\"center\", $fn=32);

}


// Main assembly

union() {

  keycap();

  emboss();

}

", Para [Strong [Str "Tasks:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create variants with ", Code ("", [], []) "cap_size", Str " = 12, 16, 18, 20, 24 mm"]], [Plain [Str "Build each variant and verify emboss quality"]], [Plain [Str "Test printability: print 2-3 variants"]], [Plain [Str "Measure final dimensions and compare to design"]]], Para [Strong [Str "Documentation Required:"]], BulletList [[Plain [Str "Parameter table showing all 5 variants"]], [Plain [Str "Print time estimates for each"]], [Plain [Str "Post-processing notes (support removal, surface finishing)"]]], HorizontalRule, Header 4 ("exercise-a3-the-stackable-storage-system-advanced", ["unnumbered", "unlisted"], []) [Str "Exercise A3: The Stackable Storage System (Advanced)"], Para [Strong [Str "Objective:"], Str " Design a modular storage system where bins stack securely and dividers are customizable."], Para [Strong [Str "Requirements:"]], BulletList [[Plain [Str "Bins must stack without binding"]], [Plain [Str "Dividers must be optional and repositionable"]], [Plain [Str "3+ configurations (small/medium/large)"]], [Plain [Str "Tolerance management documented", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]]]]], Para [Strong [Str "Key Features:"]], CodeBlock ("", ["openscad"], []) "// Advanced Stackable Bin System


// PARAMETERS

bin_width = 80;

bin_depth = 120;

bin_height = 60;

wall_thick = 2;

rim_height = 3;

stack_clearance = 0.6;  // KEY TOLERANCE PARAMETER

divider_thickness = 1.5;

num_dividers = 2;       // 0 for no dividers


// Tolerance-critical calculation

rim_inner_width = bin_width - 2*(wall_thick + stack_clearance);

rim_inner_depth = bin_depth - 2*(wall_thick + stack_clearance);


module bin_body() {

  difference() {

    cube([bin_width, bin_depth, bin_height]);

    translate([wall_thick, wall_thick, wall_thick])

      cube([bin_width - 2*wall_thick, 

            bin_depth - 2*wall_thick, 

            bin_height - wall_thick]);

  }

}


module stacking_rim() {

  difference() {

    translate([0, 0, bin_height]) 

      cube([bin_width, bin_depth, rim_height]);

    translate([wall_thick + stack_clearance, 

               wall_thick + stack_clearance, 

               bin_height])

      cube([rim_inner_width, rim_inner_depth, rim_height]);

  }

}


module dividers() {

  if (num_dividers > 0) {

    for (i = [1 : num_dividers]) {

      y = wall_thick + (i * (bin_depth - 2*wall_thick) / (num_dividers + 1));

      translate([wall_thick, y, wall_thick])

        cube([bin_width - 2*wall_thick, divider_thickness, bin_height - 2*wall_thick]);

    }

  }

}


// Main assembly

union() {

  bin_body();

  stacking_rim();

  dividers();

}

", Para [Strong [Str "Tasks:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Print 2 identical bins and test stacking"]], [Plain [Str "Create 3 configurations: Small (60x80x40), Medium (80x120x60), Large (120x160x80)"]], [Plain [Str "Test with different ", Code ("", [], []) "stack_clearance", Str " values: 0.4, 0.6, 0.8mm"]], [Plain [Str "Document which clearance works best in practice", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]]]], [Plain [Str "Print a large bin with 3 dividers and test storage capacity"]]], Para [Strong [Str "Documentation Required:"]], BulletList [[Plain [Str "Tolerance testing matrix with measurements"]], [Plain [Str "Assembly instructions with photos/descriptions"]], [Plain [Str "Recommendations for printer calibration"]]], HorizontalRule, Header 3 ("advanced-geometry-techniques-hull-and-minkowski-operations", ["unnumbered", "unlisted"], []) [Str "Advanced Geometry Techniques: Hull and Minkowski Operations"], Para [Str "Beyond basic primitives and boolean operations, professional designs often use hull and Minkowski operations to create smooth, rounded, and organic shapes. These are essential for creating high-quality, manufacturable designs."], Header 4 ("example-1-hull-operations-for-organic-shapes", ["unnumbered", "unlisted"], []) [Str "Example 1: Hull Operations for Organic Shapes"], Para [Str "The ", Code ("", [], []) "hull()", Str " function creates the convex hull of shapes-imagine wrapping them in plastic wrap. This is perfect for creating smooth, organic forms:"], CodeBlock ("", ["openscad"], []) "// Birdhouse using hull() - from Simplifying 3D Printing textbook

// Demonstrates combining simple shapes into organic forms

$fn = 100;


module generate_bird_shape() {

    hull() {

        // Create organic shape by blending multiple spheres

        translate([0, 0, 90])

        resize([180, 180, 180])

        minkowski() {

            cube([10, 10, 10], center = true);

            rotate([0, 0, 45])

            cube([25, 25, 55], center = true);

            cylinder(h = 40, d1 = 30, d2 = 2, center = true);

        }

        

        // Second shape - top of birdhouse

        translate([0, 0, 150])

        sphere(65);

    }

}


// Hollow out the interior

module birdhouse_hollow() {

    difference() {

        generate_bird_shape();

        

        // Entrance hole

        translate([0, 100, 120])

        rotate([90, 0, 0])

        cylinder(h = 200, d = 80, center = true, $fn = 64);

        

        // Hollow interior

        translate([0, 0, -2])

        scale([0.95, 0.95, 1])

        generate_bird_shape();

    }

}


birdhouse_hollow();

", Para [Strong [Str "Key insights:"]], BulletList [[Plain [Code ("", [], []) "hull()", Str " automatically creates a smooth envelope around shapes"]], [Plain [Str "Blending multiple spheres creates organic, curved surfaces"]], [Plain [Str "Combining ", Code ("", [], []) "hull()", Str " with ", Code ("", [], []) "minkowski()", Str " creates sophisticated forms"]], [Plain [Str "Great for product design, containers, and artistic shapes"]]], Header 4 ("example-2-minkowski-operations-for-rounded-edges", ["unnumbered", "unlisted"], []) [Str "Example 2: Minkowski Operations for Rounded Edges"], Para [Str "The ", Code ("", [], []) "minkowski()", Str " function adds a shape to every point of another shape. This is perfect for creating rounded edges and fillets without complex calculations:"], CodeBlock ("", ["openscad"], []) "// Parametric Phone Stand with Minkowski Rounding

// Demonstrates edge rounding for professional appearance

$fn = 100;


thickness = 4;

width = 70;

depth = 90;

angle = 65;

lipheight = 12;

filletr = 6;  // Fillet radius


module plate(w, d, t) {

    cube([w, d, t], center = false);

}


module rounded_plate(w, d, t, r) {

    // Use minkowski to add rounded edges

    minkowski() {

        cube([w - 2*r, d - 2*r, t], center = false);

        cylinder(h = 0.01, r = r, $fn = 40);

    }

}


// Base plate with rounded edges

module base() {

    rounded_plate(width, depth, thickness, filletr);

}


// Back plate at angle with rounded edges

module back() {

    rotate([angle, 0, 0])

    rounded_plate(width, depth, thickness, filletr);

}


// Lip to hold device

module lip() {

    translate([0, depth - 8, thickness])

    cube([width, 8, lipheight], center = false);

}


// Main assembly

union() {

    base();

    back();

    lip();

}

", Para [Strong [Str "Comparison:"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.3068181818181818)), (AlignDefault, (ColWidth 0.13636363636363635)), (AlignDefault, (ColWidth 0.09090909090909091)), (AlignDefault, (ColWidth 0.22727272727272727)), (AlignDefault, (ColWidth 0.23863636363636365))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Method"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Complexity"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Speed"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Quality"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use Case"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Sharp edges"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Simple"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fast"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Angular, technical"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Mechanical parts"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "hull()", Str " for rounding"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Smooth, organic"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Consumer products"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "minkowski()", Str " for fillets"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Professional"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Finished goods"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Manual fillet modules"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Complex"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slow"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Precise"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Custom requirements"]]]])] (TableFoot ("", [], []) []), Header 4 ("example-3-combining-hull-and-minkowski", ["unnumbered", "unlisted"], []) [Str "Example 3: Combining Hull and Minkowski"], Para [Str "Create sophisticated shapes by combining multiple techniques:"], CodeBlock ("", ["openscad"], []) "// Advanced technique: Hull + Minkowski for professional design

$fn = 100;


module advanced_connector() {

    minkowski() {

        // Base shape with hull

        hull() {

            cube([10, 10, 30], center = true);

            translate([20, 0, 0])

            cylinder(h = 30, d = 8, center = true);

        }

        

        // Add small sphere for fillet

        sphere(r = 2);

    }

}


// Use in assembly

union() {

    advanced_connector();

    translate([50, 0, 0])

    advanced_connector();

}

", Para [Strong [Str "When to use each technique:"]], BulletList [[Plain [Str "Use ", Code ("", [], []) "hull()", Str " when you need organic, flowing shapes"]], [Plain [Str "Use ", Code ("", [], []) "minkowski()", Str " when you need consistent rounding around edges"]], [Plain [Str "Combine them for maximum design flexibility"]], [Plain [Str "Test both approaches and choose based on render time and output quality"]]], Header 4 ("design-best-practices", ["unnumbered", "unlisted"], []) [Str "Design Best Practices"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Start simple:"], Str " Create basic geometry first, then add rounding"]], [Plain [Strong [Str "Test early:"], Str " Render at low ", Code ("", [], []) "$fn", Str " during design, high ", Code ("", [], []) "$fn", Str " before export"]], [Plain [Strong [Str "Document parameters:"], Str " Make rounding radius and other values adjustable"]], [Plain [Strong [Str "Validate manifold:"], Str " Always run ", Code ("", [], []) "3dm describe", Str " after using hull/minkowski"]], [Plain [Strong [Str "Consider performance:"], Str " These operations can slow down preview significantly"]]], HorizontalRule, Header 3 ("exercise-set-b-common-problems-and-solutions", ["unnumbered", "unlisted"], []) [Str "Exercise Set B: Common Problems and Solutions"], Header 4 ("b1-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "B1: Non-Manifold Geometry"], Para [Strong [Str "Problem:"], Str " Model renders but slicer shows errors or generates invalid G-code"], Para [Strong [Str "Diagnosis:"]], CodeBlock ("", ["bash"], []) "3dm describe your_model.scad

# Look for messages like \"non-manifold edges\" or \"thickness near zero\"

", Para [Strong [Str "Common Causes and Fixes:"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.2358490566037736)), (AlignDefault, (ColWidth 0.2641509433962264)), (AlignDefault, (ColWidth 0.5))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Issue"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Cause"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fix"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Coincident faces"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Shapes touching exactly"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Add 0.001 offset: ", Code ("", [], []) "translate([0, 0, 0.001])"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Zero-thickness walls"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Wall too thin to render"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Increase wall: ", Code ("", [], []) "wall = 2.0", Str " instead of ", Code ("", [], []) "wall = 0.5"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Incomplete shape"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Missing face in difference"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check boolean operations have complete shells"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Self-intersecting faces"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Shape overlaps itself"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Simplify geometry, use ", Code ("", [], []) "hull()", Str " instead of union"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Fix Example:"]], CodeBlock ("", ["openscad"], []) "// BEFORE (often fails)

difference(){

  cube([20, 20, 20]);

  sphere(r=10);

}


// AFTER (usually works)

difference(){

  cube([20, 20, 20]);

  translate([10, 10, 10.001])  // Offset to prevent coincidence

    sphere(r=10, $fn=32);

}

", HorizontalRule, Header 4 ("b2-print-failures", ["unnumbered", "unlisted"], []) [Str "B2: Print Failures"], Para [Strong [Str "Problem:"], Str " Print starts but fails partway through"], Para [Strong [Str "Diagnosis:"]], CodeBlock ("", ["bash"], []) "# Check G-code for errors

3dm slice your_model.scad


# Verify model in slicer before printing

# Preview layer-by-layer

", Para [Strong [Str "Common Causes:"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.3068181818181818)), (AlignDefault, (ColWidth 0.3181818181818182)), (AlignDefault, (ColWidth 0.375))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Symptom"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Cause"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Prevention"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nozzle clogs after 10 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Too fast extrusion speed"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reduce speed in slicer"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parts separate from bed"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Poor first layer adhesion"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check bed level, clean bed"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Melted plastic strands"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Retraction not working"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Verify retraction in slicer"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Model warping"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Thermal stress, no cooling"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Cool model, improve ventilation"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Supports fail to remove"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Too thin or fused to model"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Thicken supports, adjust angle"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Validation Checklist Before Printing:"]], CodeBlock ("", ["bash"], []) "#!/bin/bash

# pre_print_check.sh - Validate before printing


echo \"=== Pre-Print Validation ===\"


# 1. Check for non-manifold geometry

echo \"Checking geometry...\"

3dm describe src/main.scad | grep -i \"non-manifold\"


# 2. Check wall thickness

echo \"Checking wall thickness > 1mm...\"

# (This requires slicer analysis - do manually)


# 3. Generate preview

echo \"Generating 2D preview...\"

3dm preview src/main.scad


# 4. Estimate print time

3dm slice src/main.scad

echo \"Generated G-code: build/main.gcode\"


echo \"=== Ready to print? ===\"

", HorizontalRule, Header 4 ("b3-dimensional-inaccuracy", ["unnumbered", "unlisted"], []) [Str "B3: Dimensional Inaccuracy"], Para [Strong [Str "Problem:"], Str " Printed part measures 0.5-2mm different from design"], Para [Strong [Str "Cause:"], Str " Printer calibration, shrinkage, or design tolerance issues", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]]], Para [Strong [Str "Diagnosis:"]], CodeBlock ("", ["bash"], []) "# After printing, measure 3 locations and average

# Compare to design parameters

", Para [Strong [Str "Solution Process:"]], CodeBlock ("", [""], []) "Step 1: Measure printed part (3 locations)

        Design: 50mm

        Measured: 49.7mm, 49.8mm, 49.6mm

        Average: 49.7mm (0.3mm small)


Step 2: Calculate correction factor

        Correction = 50.0 / 49.7 = 1.0060 (0.6% larger)


Step 3: Apply to design

        New param = old_param * 1.0060


Step 4: Reprint and verify

", Para [Strong [Str "Prevention:"]], BulletList [[Plain [Str "Use standard calibration models (benchy, calibration cube)"]], [Plain [Str "Document printer baseline dimensions"]], [Plain [Str "Apply material-specific shrinkage factors"]]], HorizontalRule, Header 3 ("exercise-set-c-validation-and-documentation", ["unnumbered", "unlisted"], []) [Str "Exercise Set C: Validation and Documentation"], Header 4 ("c1-design-review-checklist", ["unnumbered", "unlisted"], []) [Str "C1: Design Review Checklist"], Para [Str "After completing any design, validate using this checklist:"], CodeBlock ("", ["markdown"], []) "# Design Review Checklist


## Geometry Validation

- [ ] Model builds without errors (`3dm build`)

- [ ] No non-manifold edges (`3dm describe` shows no warnings)

- [ ] All walls  1.5mm thick

- [ ] No floating parts or disconnected geometry

- [ ] All features clearly serve a purpose


## Parametric Design

- [ ] All dimensions are parameters (no hard-coded values)

- [ ] Parameter names are descriptive (e.g., `wall_thickness` not `w`)

- [ ] Parameters have units comments (e.g., `wall = 2; // mm`)

- [ ] Derived values calculated from parameters (e.g., `inner = outer - 2*wall`)


## Printability

- [ ] Overhangs  45 or have support strategy

- [ ] No fine details < 0.5mm

- [ ] Assembly features tested (snap-fits, interlocks)

- [ ] Post-processing needs documented


## Documentation

- [ ] README describes design purpose and key parameters

- [ ] Usage examples provided

- [ ] Known limitations documented

- [ ] Assembly instructions included (if multi-part)


## Accessibility

- [ ] Model dimensions available in text form

- [ ] AI description (`3dm describe`) is useful

- [ ] Assembly process described non-visually

- [ ] No features rely solely on visual inspection

", Header 4 ("c2-troubleshooting-documentation-template", ["unnumbered", "unlisted"], []) [Str "C2: Troubleshooting Documentation Template"], Para [Str "After solving any issue, document it:"], CodeBlock ("", ["markdown"], []) "# Troubleshooting Record


## Issue: [Describe the problem]

**Date:** YYYY-MM-DD

**Project:** [Project name]


## Symptoms

- [What did you observe?]

- [When did it happen?]


## Root Cause

[Analysis of why it happened]


## Solution Applied

[Exact steps to fix]


## Verification

[How did you confirm it worked?]


## Prevention

[How to avoid this in future designs]


## References

- [Related documentation]

- [Similar issues]

", HorizontalRule, Header 3 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After Exercise A1, you have a working phone stand"]], [Plain [Str "After Exercise A2, you have a parametric keycap set"]], [Plain [Str "After Exercise A3, you have a stackable bin system with tolerance data"]], [Plain [Str "After Exercise B, you understand common failure modes"]], [Plain [Str "After Exercise C, you have documentation habits"]]], HorizontalRule, Header 3 ("quiz---lesson-3dmake10-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.10 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is the first diagnostic step when a model fails to slice", Note [Para [Str "3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/"]], Str "?"]], [Plain [Str "Explain the 0.001 offset rule and when to apply it", Note [Para [Str "3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/"]], Str "."]], [Plain [Str "How would you verify that a wall is thick enough before printing", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "?"]], [Plain [Str "What measurement method would you use to validate dimensional accuracy", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "?"]], [Plain [Str "Describe what happens when stack_clearance is too small or too large", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "True or False: Parametric design makes it harder to troubleshoot issues."]], [Plain [Str "How would you document a design so that others can modify and reprint it", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "?"]], [Plain [Str "What should you check in a slicer preview before sending a file to print", Note [Para [Str "3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/"]], Str "?"]], [Plain [Str "How would you use ", Code ("", [], []) "3dm describe", Str " to find design flaws", Note [Para [Str "3DMake Documentation - https://github.com/tdeck/3dmake/wiki/Troubleshooting"]], Str "?"]], [Plain [Str "Describe a complete workflow from problem diagnosis to solution verification", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]]], Header 3 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Complete all three exercises (A1, A2, A3) and document results", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Print and test 2+ variants of your phone stand; measure and compare", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Conduct a tolerance sensitivity study: test bins with 3+ clearance values", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Create a troubleshooting guide for your specific printer: common issues and fixes", Note [Para [Str "3D Printing Troubleshooting Guide - https://www.prusa3d.com/support/"]], Str "."]], [Plain [Str "Design a validation workflow: automated checks before printing", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Build a design documentation database: parameter ranges, material recommendations, print settings", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Create before/after case studies of design problems and solutions", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Develop a printer calibration procedure and document baseline dimensions", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Design a quality assurance system: define metrics, measurement methods, acceptance criteria", Note [Para [Str "OpenSCAD Best Practices - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ"]], Str "."]], [Plain [Str "Write a comprehensive troubleshooting and maintenance guide: diagnostics, solutions, prevention strategies, and accessibility considerations."]]], HorizontalRule, Para [Strong [Str "References"]]]