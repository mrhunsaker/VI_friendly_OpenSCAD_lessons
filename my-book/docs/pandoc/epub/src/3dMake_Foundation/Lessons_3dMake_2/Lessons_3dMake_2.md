[Header 2 ("3dmake_foundation_lessons_3dmake_2-lessons_3dmake_2", [], []) [Str "Lesson 2: Geometric Primitives and Constructive Solid Geometry"], Para [Str "Estimated time: 75-90 minutes"], BulletList [[Plain [Str "Use OpenSCAD primitives (", Code ("", [], []) "cube()", Str ", ", Code ("", [], []) "sphere()", Str ", ", Code ("", [], []) "cylinder()", Str ") and transforms (", Code ("", [], []) "translate()", Str ", ", Code ("", [], []) "rotate()", Str ", ", Code ("", [], []) "scale()", Str ")", Note [Para [Str "OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem"]]]], [Plain [Str "Apply CSG operators (", Code ("", [], []) "union", Str ", ", Code ("", [], []) "difference", Str ", ", Code ("", [], []) "intersection", Str ") safely and diagnose common numerical issues", Note [Para [Str "Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). ", Emph [Str "Understanding the challenges of OpenSCAD users for 3D printing"], Str ". Proceedings of the ACM Symposium on User Interface Software and Technology."]]]], [Plain [Str "Use quick diagnostic renders and validate geometry in a slicer", Note [Para [Str "Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/"]]]]], Para [Strong [Str "Materials"]], BulletList [[Plain [Str "3dMake project scaffold with ", Code ("", [], []) "src/main.scad"]], [Plain [Str "Example primitive snippets (provided in assets)"]], [Plain [Str "Reference: ", Link ("", [], []) [Str "openscad-cheat-sheet.md"] ("docs%5Cpandoc%5Cepub%5Csrc%5C3dMake_Foundation%5CLessons_3dMake_2%5Copenscad-cheat-sheet.md#3dmake_foundation_lessons_3dmake_2-openscad-cheat-sheet", ""), Str " for syntax quick-reference"]]], HorizontalRule, OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Open ", Code ("", [], []) "src/main.scad", Str "; identify and run simple examples using ", Code ("", [], []) "cube()", Str ", ", Code ("", [], []) "sphere()", Str ", and ", Code ("", [], []) "cylinder()", Str " ", Note [Para [Str "OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem"]], Str "."], Para [Strong [Str "Example primitives:"]], CodeBlock ("", ["openscad"], []) "// Primitive shapes - uncomment one to try


// Cube (x, y, z dimensions)

cube([20, 20, 20]);


// Sphere (radius, resolution)

// sphere(r=10, $fn=32);


// Cylinder (radius, height, resolution)

// cylinder(r=10, h=20, $fn=32);

"], [Para [Str "Create three short examples demonstrating ", Code ("", [], []) "union()", Str ", ", Code ("", [], []) "difference()", Str ", and ", Code ("", [], []) "intersection()", Str " and render with reduced ", Code ("", [], []) "$fn", Str ". Review CSG best practices", Note [Para [Str "Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). ", Emph [Str "Understanding the challenges of OpenSCAD users for 3D printing"], Str ". Proceedings of the ACM Symposium on User Interface Software and Technology."]], Str "."], Para [Strong [Str "Example CSG operations:"]], CodeBlock ("", ["openscad"], []) "// UNION - Combine multiple shapes

union(){

  cube([20, 20, 20]);

  translate([15, 0, 0]) sphere(r=10, $fn=32);

}


// DIFFERENCE - Subtract shapes

// difference(){

//   cube([20, 20, 20]);

//   translate([10, 10, 10]) sphere(r=8, $fn=32);

// }


// INTERSECTION - Keep only overlapping volumes

// intersection(){

//   cube([20, 20, 20]);

//   sphere(r=12, $fn=32);

// }

"], [Para [Str "Reproduce a failing ", Code ("", [], []) "difference()", Str " case and apply the 0.001 offset strategy to the subtractor; re-render and confirm fix. This technique addresses common manifold issues", Note [Para [Str "Google. (2025). ", Emph [Str "Vertex AI Gemini 3 Pro Preview: Getting started with generative AI"], Str ". https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3"]], Str "."], Para [Strong [Str "Fix technique:"]], CodeBlock ("", ["openscad"], []) "// Problem: Coincident faces cause non-manifold issues

difference(){

  cube([20, 20, 20], center=true);

  // Use translate with small offset (0.001) to prevent coincident faces

  translate([0, 0, 0.001]) sphere(r=10, $fn=32);

}

"], [Para [Str "Build an STL with ", Code ("", [], []) "3dm build", Str " and open it in your slicer to check for thin walls or islands", Note [Para [Str "Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/"]], Str "."]], [Para [Str "Document any fixes in the project README and commit the working ", Code ("", [], []) "main.scad", Str " and STL."]]], Header 3 ("modifier-characters-for-advanced-debugging", ["unnumbered", "unlisted"], []) [Str "Modifier Characters for Advanced Debugging"], Para [Str "OpenSCAD includes special ", Strong [Str "modifier characters"], Str " that help you isolate and debug specific parts of your model. These single-character prefixes (placed before module/shape names) change how that object is rendered without affecting the underlying code."], Header 4 ("the-four-modifier-characters", ["unnumbered", "unlisted"], []) [Str "The Four Modifier Characters"], Header 5 ("1-the--character-show-only", ["unnumbered", "unlisted"], []) [Strong [Str "1. The ", Code ("", [], []) "!", Str " Character (Show Only)"]], Para [Str "Use ", Code ("", [], []) "!", Str " to render ", Strong [Str "only"], Str " the marked object and hide everything else. This is essential for isolating geometry when debugging complex models:"], CodeBlock ("", ["openscad"], []) "module base() {

  cube([50, 50, 5]);

}


module stand() {

  translate([0, 0, 5])

    rotate([60, 0, 0])

    cube([50, 5, 40]);

}


module lip() {

  translate([0, 50, 45])

    cube([50, 8, 15]);

}


// Show all parts

base();

stand();

lip();


// DEBUG: Show only the stand by adding !

// !stand();

", Para [Strong [Str "When to use:"], Str " You're debugging a multi-part assembly and want to see one component in isolation"], Header 5 ("2-the--character-highlight", ["unnumbered", "unlisted"], []) [Strong [Str "2. The ", Code ("", [], []) "#", Str " Character (Highlight)"]], Para [Str "Use ", Code ("", [], []) "#", Str " to render the marked object ", Strong [Str "and highlight it in red"], Str " (in preview mode). This helps you see which part corresponds to which code:"], CodeBlock ("", ["openscad"], []) "difference() {

  cube([30, 30, 30], center=true);

  

  // Highlight the subtracted sphere in red

  #sphere(r=15, $fn=32);

}

", Para [Strong [Str "When to use:"], Str " Identifying which boolean operation is creating problems or validating that two objects overlap correctly"], Header 5 ("3-the--character-transparentghost", ["unnumbered", "unlisted"], []) [Strong [Str "3. The ", Code ("", [], []) "%", Str " Character (Transparent/Ghost)"]], Para [Str "Use ", Code ("", [], []) "%", Str " to render the marked object as ", Strong [Str "transparent/ghosted"], Str " (shown as semi-transparent geometry). This helps you see what's \"underneath\" without removing the code:"], CodeBlock ("", ["openscad"], []) "module outer_shell() {

  difference() {

    cube([50, 50, 50], center=true);

    cube([44, 44, 44], center=true);  // Wall thickness of 3mm

  }

}


module internal_support() {

  translate([0, 0, -10])

    cube([20, 20, 10], center=true);

}


// Show shell normally and support as ghosted

outer_shell();

%internal_support();  // Transparent - see where it sits relative to shell

", Para [Strong [Str "When to use:"], Str " Visualizing assembly relationships or checking alignment of internal vs external features"], Header 5 ("4-the--character-disable", ["unnumbered", "unlisted"], []) [Strong [Str "4. The ", Code ("", [], []) "*", Str " Character (Disable)"]], Para [Str "Use ", Code ("", [], []) "*", Str " to ", Strong [Str "disable rendering"], Str " of a marked object entirely. It's like commenting it out but without modifying the code:"], CodeBlock ("", ["openscad"], []) "module component_a() { cube([30, 30, 30]); }

module component_b() { sphere(r=20, $fn=32); }

module component_c() { cylinder(h=40, r=15, $fn=32); }


component_a();

*component_b();  // Disabled - won't render

component_c();

", Para [Strong [Str "When to use:"], Str " Testing whether a component is causing rendering errors or print failures without deleting code"], Header 4 ("practical-debugging-workflow-using-modifiers", ["unnumbered", "unlisted"], []) [Str "Practical Debugging Workflow Using Modifiers"], Para [Strong [Str "Scenario:"], Str " Your phone stand model has three parts, but it's rendering very slowly. You suspect one part is the problem."], CodeBlock ("", ["openscad"], []) "module base() {

  cube([100, 100, 5]);

}


module stand() {

  // Complex geometry with many $fn values

  translate([0, 0, 5])

    rotate([60, 0, 0])

    minkowski() {

      cube([90, 10, 40], center=true);

      cylinder(r=5, h=0.01, $fn=64);  // This might be slow!

    }

}


module lip() {

  translate([0, 100, 45])

    cube([100, 10, 15]);

}


// DEBUGGING STEPS:


// Step 1: Show all parts (original speed problem)

base();

stand();

lip();


// Step 2: Disable stand to test if it's the culprit

// base();

// *stand();

// lip();

// Result: If still slow, problem is elsewhere. If fast, stand() is the issue.


// Step 3: If stand() is slow, highlight just that part

// !#stand();  // Shows only stand in red - can now debug its geometry


// Step 4: Reduce resolution in stand() and test again

// (modify the $fn=64 to $fn=16 and see if faster)

", Header 4 ("key-points-about-modifiers", ["unnumbered", "unlisted"], []) [Str "Key Points About Modifiers"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.13095238095238096)), (AlignDefault, (ColWidth 0.27380952380952384)), (AlignDefault, (ColWidth 0.5952380952380952))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Character"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Effect"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use Case"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "!"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Show only this object"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Isolate one component in multi-part assembly"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "#"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Highlight in red"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "See what's being subtracted/added in boolean ops"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "%"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Ghost/transparent"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "See assembly relationships and overlaps"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "*"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Disable/hide"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Test if a component is causing problems"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Important:"], Str " Modifiers only affect the visual preview/render. They do ", Strong [Str "not"], Str " change the exported STL file. When you export, all objects are included normally (unless you've actually deleted or commented them out)."], Header 4 ("practice-exercise-modifier-workflow", ["unnumbered", "unlisted"], []) [Str "Practice Exercise: Modifier Workflow"], Para [Str "Create a file with three overlapping shapes and practice:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Use ", Code ("", [], []) "!", Str " to show only the middle shape"]], [Plain [Str "Use ", Code ("", [], []) "#", Str " to highlight the bottom shape"]], [Plain [Str "Use ", Code ("", [], []) "%", Str " to ghost the top shape"]], [Plain [Str "Use ", Code ("", [], []) "*", Str " to disable all shapes one at a time"]]], CodeBlock ("", ["openscad"], []) "// Practice: Multi-part assembly debugging


module bottom_part() {

  cube([50, 50, 10], center=true);

}


module middle_part() {

  translate([0, 0, 15])

    cylinder(h=20, r=20, $fn=32);

}


module top_part() {

  translate([0, 0, 40])

    sphere(r=15, $fn=32);

}


// Test 1: Show only middle

// !middle_part();


// Test 2: Highlight bottom

// #bottom_part();

// middle_part();

// top_part();


// Test 3: Ghost top

// bottom_part();

// middle_part();

// %top_part();


// Test 4: Disable one at a time

// *bottom_part();

// middle_part();

// top_part();

", HorizontalRule, Header 4 ("debugging-resolution-and-common-issues", ["unnumbered", "unlisted"], []) [Str "Debugging, Resolution, and Common Issues"], Para [Str "As your OpenSCAD models become more complex, you'll encounter rendering errors, non-manifold geometry, or slow previews. Learning to debug efficiently is essential for productive design work."], Header 5 ("understanding-openscad-console-errors", ["unnumbered", "unlisted"], []) [Strong [Str "Understanding OpenSCAD Console Errors"]], Para [Str "When you press ", Strong [Str "F5"], Str " to preview or ", Strong [Str "F6"], Str " to render your model, OpenSCAD displays warnings and errors in the console at the bottom of the editor. Here's what to look for:"], BulletList [[Plain [Strong [Str "Error Line Numbers:"], Str " The console message tells you the exact line where the problem was detected. Look for missing semicolons, unmatched braces, or undefined variables"]], [Plain [Strong [Str "Syntax Errors:"], Str " These prevent the model from rendering at all (common causes: missing ", Code ("", [], []) ";", Str ", unclosed ", Code ("", [], []) "{", Str " or ", Code ("", [], []) "[", Str ", typos in function names)"]], [Plain [Strong [Str "Warnings (Non-Manifold Geometry):"], Str " Your geometry is ", Emph [Str "technically"], Str " valid but has internal inconsistencies that may prevent printing"]]], Para [Strong [Str "Example Console Output:"]], CodeBlock ("", [""], []) "ERROR: Unexpected token 'sphere' at line 15, column 5

  Expected one of: } ) ]

", Para [Str "This tells you that line 15 has a syntax issue-likely a missing closing bracket on the previous line."], Header 5 ("the-0001-offset-strategy-revisited", ["unnumbered", "unlisted"], []) [Strong [Str "The 0.001 Offset Strategy (Revisited)"]], Para [Str "One of the most common issues with CSG operations is ", Strong [Str "coincident faces"], Str "-when two shapes touch exactly at their boundaries. This creates a non-manifold geometry that slicer tools flag as unprintable."], Para [Strong [Str "The Fix:"], Str " Add a tiny offset (0.001 mm or smaller) to move one surface slightly:"], CodeBlock ("", ["openscad"], []) "// BEFORE (problematic):

difference(){

  cube([20, 20, 20], center=true);

  sphere(r=10, $fn=32);

}


// AFTER (fixed):

difference(){

  cube([20, 20, 20], center=true);

  translate([0, 0, 0.001]) sphere(r=10, $fn=32);  // Tiny offset prevents coincident faces

}

", Para [Str "This 0.001 mm offset is invisible to the human eye but fixes the non-manifold warning and makes the model printable."], Header 5 ("using-fn-to-balance-speed-and-quality", ["unnumbered", "unlisted"], []) [Strong [Str "Using ", Code ("", [], []) "$fn", Str " to Balance Speed and Quality"]], Para [Str "The ", Code ("", [], []) "$fn", Str " parameter controls the resolution of curved surfaces (spheres, cylinders, etc.). It represents the number of polygonal faces used to approximate the curve:"], BulletList [[Plain [Strong [Code ("", [], []) "$fn = 12"], Str " - Very fast preview, coarse geometry (useful for quick testing)"]], [Plain [Strong [Code ("", [], []) "$fn = 32"], Str " - Good balance for most designs (default for many situations)"]], [Plain [Strong [Code ("", [], []) "$fn = 100+"], Str " - High quality but slow to render; use only for final export"]]], Para [Strong [Str "Debugging Workflow:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "During design iteration: Use ", Code ("", [], []) "$fn = 12", Str " or ", Code ("", [], []) "$fn = 20", Str " for quick feedback"]], [Plain [Str "Before export: Increase to ", Code ("", [], []) "$fn = 32", Str " or higher for final quality"]], [Plain [Str "For complex assemblies: Keep ", Code ("", [], []) "$fn", Str " low during iteration to save preview time"]]], Header 5 ("incremental-rendering-the-f5f6-workflow", ["unnumbered", "unlisted"], []) [Strong [Str "Incremental Rendering: The F5/F6 Workflow"]], BulletList [[Plain [Strong [Str "F5 (Preview):"], Str " Quick render to check overall geometry and catch layout errors"]], [Plain [Strong [Str "F6 (Full Render):"], Str " Slower but more accurate; use before export"]], [Plain [Strong [Str "Strategy:"], Str " Press F5 frequently while editing to get immediate feedback, then F6 once before exporting"]]], Para [Str "This workflow catches errors early and saves you from spending 10 minutes rendering only to discover a syntax error."], Header 5 ("diagnosing-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Strong [Str "Diagnosing Non-Manifold Geometry"]], Para [Str "A model might render in OpenSCAD but still be unprintable. The slicer will report errors like \"non-manifold edges\" or \"holes in surface.\" Common causes:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Coincident Faces"], Str " -> Use small offsets (0.001 mm)"]], [Plain [Strong [Str "Zero-Thickness Walls"], Str " -> Ensure all walls are at least 0.8-1.0 mm"]], [Plain [Strong [Str "Gaps Between Shapes"], Str " -> Check that boolean operations have no small gaps; use ", Code ("", [], []) "minkowski()", Str " for rounded edges if needed"]], [Plain [Strong [Str "Inside-Out Geometry"], Str " -> A shape might be flipped; use ", Code ("", [], []) "scale([1, 1, -1])", Str " to flip normals if needed"]]], Para [Str "When your slicer reports non-manifold issues, use the slicer's visualization to locate the problem, then reference the line numbers in your OpenSCAD code and test fixes incrementally using F5/F6."], Para [Str "Checkpoints"], BulletList [[Plain [Str "After task 3 the problematic boolean should render without non-manifold warnings", Note [Para [Str "Google. (2025). ", Emph [Str "Vertex AI Gemini 3 Pro Preview: Getting started with generative AI"], Str ". https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3"]], Str "."]], [Plain [Str "After this section, you should be able to interpret at least three common console error messages and apply appropriate fixes."]]], Header 3 ("quiz---lesson-3dmake2-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.2 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Name three primitive functions in OpenSCAD", Note [Para [Str "OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem"]], Str "."]], [Plain [Str "What does ", Code ("", [], []) "difference()", Str " accomplish", Note [Para [Str "Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). ", Emph [Str "Understanding the challenges of OpenSCAD users for 3D printing"], Str ". Proceedings of the ACM Symposium on User Interface Software and Technology."]], Str "?"]], [Plain [Str "Why might two coincident faces cause a render failure", Note [Para [Str "Google. (2025). ", Emph [Str "Vertex AI Gemini 3 Pro Preview: Getting started with generative AI"], Str ". https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3"]], Str "?"]], [Plain [Str "What is the 0.001 rule and why is it useful", Note [Para [Str "Google. (2025). ", Emph [Str "Vertex AI Gemini 3 Pro Preview: Getting started with generative AI"], Str ". https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3"]], Str "?"]], [Plain [Str "How does lowering ", Code ("", [], []) "$fn", Str " help during debugging", Note [Para [Str "Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). ", Emph [Str "Understanding the challenges of OpenSCAD users for 3D printing"], Str ". Proceedings of the ACM Symposium on User Interface Software and Technology."]], Str "?"]], [Plain [Str "True or False: ", Code ("", [], []) "union()", Str " combines shapes while ", Code ("", [], []) "intersection()", Str " keeps only overlapping volumes."]], [Plain [Str "Describe what Constructive Solid Geometry (CSG) is and give an example of where it's useful."]], [Plain [Str "Explain how scale(), translate(), and rotate() transforms change a primitive's behavior."]], [Plain [Str "How would you diagnose and fix a non-manifold issue in your model?"]], [Plain [Str "When validating geometry in a slicer, what specific issues should you look for?"]]], HorizontalRule, Header 3 ("lesson-2-assets--projects", ["unnumbered", "unlisted"], []) [Str "Lesson 2 Assets & Projects"], Para [Str "Your Lesson 2 assets are located in the centralized assets folder:"], BulletList [[Plain [Strong [Str "Lesson 2 Asset Overview"], Str " (", Link ("", [], []) [Str "assets/Lessons_3dMake_2/README.md"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_2%5CREADME.md", ""), Str ") - Folder contents and learning resources"]], [Plain [Strong [Str "Your Second Print Project"], Str " (", Link ("", [], []) [Str "assets/Lessons_3dMake_2/Your_Second_Print/"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_2%5CYour_Second_Print", ""), Str ") - Adapt models to real-world needs"]], [Plain [Strong [Str "Bonus Print Project"], Str " (", Link ("", [], []) [Str "assets/Lessons_3dMake_2/Bonus_Print/"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5C3dMake_Foundation%5CLessons_3dMake_2%5CBonus_Print", ""), Str ") - Practice resizing and parametric variation"]]], Para [Str "These projects reinforce the boolean operations and CSG concepts you learned in this lesson."], HorizontalRule, Header 3 ("advanced-example-rotational-and-linear-extrusion", ["unnumbered", "unlisted"], []) [Str "Advanced Example: Rotational and Linear Extrusion"], Para [Str "Beyond basic primitives and boolean operations, OpenSCAD provides powerful 2D-to-3D operations. Here are practical examples from real-world designs:"], Header 4 ("example-1-rotating-2d-shapes-with-rotate_extrude", ["unnumbered", "unlisted"], []) [Str "Example 1: Rotating 2D Shapes with ", Code ("", [], []) "rotate_extrude()"], Para [Str "The ", Code ("", [], []) "rotate_extrude()", Str " function spins a 2D profile around the Z-axis, creating axially symmetric objects like vases, bowls, or cones:"], CodeBlock ("", ["openscad"], []) "// Simple Vase - Rotating a 2D profile

$fn = 100;


rotate_extrude(angle = 360, convexity = 4)

{

  translate([20, 0, 0])

  square([8, 50], center=false);

}

", Para [Strong [Str "What it does:"]], BulletList [[Plain [Str "Draws a 2D square 20 units from the center"]], [Plain [Str "Rotates it 360deg around the Z-axis"]], [Plain [Str "Creates a hollow cylindrical vase"]]], Para [Strong [Str "Try this variation:"]], CodeBlock ("", ["openscad"], []) "// Vase with a curved profile

$fn = 100;


rotate_extrude(angle = 360, convexity = 4)

{

  // Profile shape: wider at top, narrower at bottom

  polygon([

    [20, 0],      // bottom inner

    [25, 0],      // bottom outer

    [30, 40],     // top outer

    [25, 40]      // top inner

  ]);

}

", Header 4 ("example-2-linear-extrusion-with-2d-text", ["unnumbered", "unlisted"], []) [Str "Example 2: Linear Extrusion with 2D Text"], Para [Str "The ", Code ("", [], []) "linear_extrude()", Str " function pulls a 2D profile vertically (along the Z-axis). Combined with the ", Code ("", [], []) "text()", Str " function, it creates embossed letters:"], CodeBlock ("", ["openscad"], []) "// Embossed Text - Name Plate

linear_extrude(height = 5, convexity = 10)

{

  text(\"MAKER\", size = 30, font = \"Impact:style=Regular\",

       halign = \"center\", valign = \"center\");

}

", Para [Strong [Str "What it does:"]], BulletList [[Plain [Str "Creates 2D text outline"]], [Plain [Str "Pulls it 5 mm upward"]], [Plain [Str "Creates a 3D embossed nameplate"]]], Para [Strong [Str "Complete nameplate with backing:"]], CodeBlock ("", ["openscad"], []) "// Name plate with base and embossed text

union()

{

  // Base plate

  cube([120, 40, 3], center = true);

  

  // Embossed text

  translate([0, 0, 2])

  linear_extrude(height = 2)

  {

    text(\"MAKER\", size = 24, font = \"Impact:style=Regular\",

         halign = \"center\", valign = \"center\");

  }

}

", Header 4 ("example-3-practical-project---hook-with-rotate_extrude", ["unnumbered", "unlisted"], []) [Str "Example 3: Practical Project - Hook with ", Code ("", [], []) "rotate_extrude()"], Para [Str "This real-world example creates a wall mount hook by rotating a 2D profile:"], CodeBlock ("", ["openscad"], []) "// Wall Mount Hook

$fn = 100;


difference()

{

  // Outer hook profile - rotated 360deg

  rotate_extrude(angle = 360, convexity = 4)

  {

    translate([25, 0, 0])

    square([8, 60], center = false);

  }

  

  // Hollow center

  translate([0, 0, -5])

  cylinder(h = 70, d = 40);

}

", Para [Strong [Str "Key observations:"]], BulletList [[Plain [Str "The 2D square is positioned 25 units from the Z-axis"]], [Plain [Str "Rotating it creates a thick-walled hollow cylinder"]], [Plain [Str "This is used in real products like the birdhouse and PVC hook examples from the ", Emph [Str "Simplifying 3D Printing"], Str " textbook"]]], Header 4 ("key-concepts-for-2d-to-3d-conversion", ["unnumbered", "unlisted"], []) [Str "Key Concepts for 2D-to-3D Conversion"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.30392156862745096)), (AlignDefault, (ColWidth 0.30392156862745096)), (AlignDefault, (ColWidth 0.39215686274509803))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Function"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Purpose"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Common Use"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "linear_extrude(height)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pull 2D shape vertically"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Text, badges, plaques"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "rotate_extrude(angle)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Rotate 2D shape around Z-axis"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Vases, bowls, hooks, symmetric parts"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "scale()"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Stretch/compress along axes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tapered cones, proportional variations"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Combining with ", Code ("", [], []) "difference()"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Hollow out the extruded shape"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Cups, containers, hollow handles"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Checkpoint"], Str ": After this section, you can:"], BulletList [[Plain [Str "Use ", Code ("", [], []) "linear_extrude()", Str " to create embossed text and flat designs"]], [Plain [Str "Use ", Code ("", [], []) "rotate_extrude()", Str " to create axially symmetric 3D shapes"]], [Plain [Str "Combine extrusion with boolean operations to hollow or refine shapes"]]], Para [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a small assembly using ", Code ("", [], []) "union()", Str " of three primitives and export the STL. Reference best practices from OpenSCAD documentation", Note [Para [Str "OpenSCAD Manual - Primitives and Transforms - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem"]], Str "."]], [Plain [Str "Intentionally create a failing boolean and fix it using offsets; explain your approach. Document the manifold issues encountered", Note [Para [Str "Google. (2025). ", Emph [Str "Vertex AI Gemini 3 Pro Preview: Getting started with generative AI"], Str ". https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3"]], Str "."]], [Plain [Str "Write a short test script that generates three variants with varying ", Code ("", [], []) "$fn", Str " values and compare render times. Consider using 3dMake workflows", Note [Para [Str "Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/"]], Str "."]], [Plain [Str "Use ", Code ("", [], []) "3dm info", Str " (if available) to generate a report on your model and document any recommendations", Note [Para [Str "Slicer Validation - PrusaSlicer Documentation - https://docs.prusa3d.com/en/guide/39012-validation-tools/"]], Str "."]], [Plain [Str "Explore using a library module (e.g., a fillet helper) to fix a sharp corner and note the difference in final STL", Note [Para [Str "Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). ", Emph [Str "Understanding the challenges of OpenSCAD users for 3D printing"], Str ". Proceedings of the ACM Symposium on User Interface Software and Technology."]], Str "."]], [Plain [Str "Build a geometry validation toolkit: test all basic transformations (union, difference, intersection) with edge cases and document failure modes."]], [Plain [Str "Create a parametric assembly generator that produces 5+ configurations and validates each for printability."]], [Plain [Str "Develop a boolean operation troubleshooting guide with visual examples and step-by-step fixes."]], [Plain [Str "Design a library module system for common geometric operations (fillets, chamfers, arrays); test reusability across projects."]], [Plain [Str "Write an accessibility guide for boolean operations: describe methods for validating geometry non-visually using model properties and slicer feedback."]]], Header 3 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], Para [Str "For additional examples and practice with 3D primitives and boolean operations, explore these resources:"], BulletList [[Plain [Strong [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", "")], Str " - Comprehensive guide to primitives, boolean operations, and CSG fundamentals"]], [Plain [Strong [Link ("", [], []) [Str "CodeSolutions: 3D Primitives"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/1_3D-Shapes", "")], Str " - Working examples of cube, sphere, cylinder, and other 3D shapes"]], [Plain [Strong [Link ("", [], []) [Str "CodeSolutions: Combining Shapes"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions/tree/main/AppendixB_OpenSCAD-Visual-Reference", "")], Str " - Examples of union, difference, intersection, and hull operations"]], [Plain [Strong [Link ("", [], []) [Str "Practice Worksheets: 3D Shapes"] ("https://programmingwithopenscad.github.io/learning.html", "")], Str " - Visualization and decomposition exercises"]]]]