[Header 3 ("3dmake_foundation_lessons_3dmake_6-parametric-keychain", [], []) [Str "Parametric Keychain - Extension Project"], Para [Str "Estimated time: 2-4 hours"], Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By completing this project, you will:"], BulletList [[Plain [Str "Create parametric OpenSCAD modules that accept user inputs"]], [Plain [Str "Implement 2D text manipulation and 3D extrusion techniques"]], [Plain [Str "Generate and test multiple design variants systematically"]], [Plain [Str "Document design parameters for reproducibility and user customization"]]], Header 4 ("objective", ["unnumbered", "unlisted"], []) [Str "Objective"], BulletList [[Plain [Str "Create a parametric keychain design that adapts to custom text, dimensions, and materials."]]], Header 4 ("tasks", ["unnumbered", "unlisted"], []) [Str "Tasks"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create ", Code ("", [], []) "keychain.scad", Str " with top-level parameters: ", Code ("", [], []) "width", Str ", ", Code ("", [], []) "height", Str ", ", Code ("", [], []) "thickness", Str ", and ", Code ("", [], []) "text", Str "."]], [Plain [Str "Implement embossed or debossed text using ", Code ("", [], []) "linear_extrude()", Str " of a 2D text shape (or simulate with simple geometry if system lacks text support)."]], [Plain [Str "Produce three size variants and export STLs; record print settings."]], [Plain [Str "Test attachment point for common key rings and report fit."]]], Header 4 ("deliverable", ["unnumbered", "unlisted"], []) [Str "Deliverable"], BulletList [[Plain [Str "Source ", Code ("", [], []) "keychain.scad", Str " file with parametric variables documented"]], [Plain [Str "Three STL variants (small, medium, large)"]], [Plain [Str "Print settings log and fit-test report for key ring attachment"]]], Header 4 ("starter-files", ["unnumbered", "unlisted"], []) [Str "Starter files"], BulletList [[Plain [Link ("", [], []) [Str "starter.scad"] ("docs/pandoc/epub/src/assets/Extension_Projects/Parametric_Keychain/starter.scad", ""), Str " - minimal parametric scaffold to begin."]]], Header 4 ("starter-code", ["unnumbered", "unlisted"], []) [Str "Starter Code"], Para [Str "Copy and modify this cube keycap example as your starting point:"], CodeBlock ("", ["openscad"], []) "// Cube Keycap - Beginner Example
// A simple 20mm cube keycap with an embossed letter
// Parameters
keysize = 18;     // mm
keyheight = 12;   // mm
wall = 1.2;        // mm
letter = \"R\";      // change to your preferred letter
lettersize = 10;  // mm
letterraise = 0.8;// mm
module shell(){
  difference(){
    cube([keysize, keysize, keyheight], center=false);
    translate([wall, wall, wall])
      cube([keysize-2*wall, keysize-2*wall, keyheight], center=false);
  }
}
module emboss(){
  // Emboss letter on top face
  translate([keysize/2, keysize/2, keyheight-0.01])
    linearextrude(height=letterraise)
      text(letter, size=lettersize, halign=\"center\", valign=\"center\");
}
union(){
  shell();
  emboss();
}
", Header 4 ("advanced-text-techniques", ["unnumbered", "unlisted"], []) [Str "Advanced Text Techniques"], Para [Str "Beyond simple embossed letters, you can create sophisticated text effects using the patterns from the ", Emph [Str "Simplifying 3D Printing"], Str " textbook:"], Header 5 ("example-1-circular-text-array", ["unnumbered", "unlisted"], []) [Str "Example 1: Circular Text Array"], Para [Str "Arrange text in a circle around a central point:"], CodeBlock ("", ["openscad"], []) "// Circular Text Arrangement
// Text rotates around a center point
module rotate_text(display_text, 
    text_size = 10, 
    distance = 20, 
    rotation_value = 360, 
    tilt = 0)
{
    rotate([0, 0, tilt])
    for(i = [0:len(display_text) - 1])
    {
        rotate([0, 0, -i * rotation_value / len(display_text)])
        translate([0, distance, 0])
        text(display_text[i], 
            font = \"Impact:style=Regular\", 
            size = text_size,
            halign = \"center\");
    } 
}
// Use the module to create circular text
linear_extrude(height = 2)
rotate_text(\"MAKER\", text_size = 12, distance = 30, rotation_value = 75, tilt = 30);
", Para [Str "What it does:"], BulletList [[Plain [Str "Rotates each letter individually around a center point"]], [Plain [Str "Creates circular or spiral text effects"]], [Plain [Str "Useful for badges, nameplates, and decorative objects"]]], Header 5 ("example-2-multi-line-text-composition", ["unnumbered", "unlisted"], []) [Str "Example 2: Multi-Line Text Composition"], Para [Str "Combine text at different sizes and positions for a professional nameplate:"], CodeBlock ("", ["openscad"], []) "// Professional Nameplate with Multiple Text Layers
module create_nameplate(name, role, company)
{
    union()
    {
        // Base backing plate
        cube([120, 60, 3], center = true);
        // Main name - large, centered
        translate([0, 15, 2])
        linear_extrude(height = 2)
        text(name, size = 24, font = \"Impact:style=Regular\",
             halign = \"center\", valign = \"center\");
        // Role - medium, slightly smaller
        translate([0, 0, 2])
        linear_extrude(height = 2)
        text(role, size = 14, font = \"Arial:style=Regular\",
             halign = \"center\", valign = \"center\");
        // Company name - small, bottom
        translate([0, -15, 2])
        linear_extrude(height = 2)
        text(company, size = 10, font = \"Arial:style=Regular\",
             halign = \"center\", valign = \"center\");
    }
}
// Create a custom nameplate
create_nameplate(\"Alex Chen\", \"3D Design Engineer\", \"MakerCorp\");
", Para [Str "Key features:"], BulletList [[Plain [Str "Multiple text elements at different scales"]], [Plain [Str "Layered composition for professional appearance"]], [Plain [Str "Each text element can be customized independently"]]], Header 5 ("example-3-parametric-font-selection", ["unnumbered", "unlisted"], []) [Str "Example 3: Parametric Font Selection"], Para [Str "Use different fonts for different effects:"], CodeBlock ("", ["openscad"], []) "// Different fonts create different aesthetics
$fn = 100;
// Impact font (bold, modern)
translate([0, 40, 0])
linear_extrude(height = 2)
text(\"BOLD\", size = 20, font = \"Impact:style=Regular\", halign = \"center\");
// Arial font (clean, professional)
translate([0, 10, 0])
linear_extrude(height = 2)
text(\"Clean\", size = 20, font = \"Arial:style=Regular\", halign = \"center\");
// Script-like (decorative)
translate([0, -20, 0])
linear_extrude(height = 2)
text(\"Script\", size = 20, font = \"Courier:style=Regular\", halign = \"center\");
", Para [Str "Font options (availability depends on your system):"], BulletList [[Plain [Code ("", [], []) "Impact:style=Regular", Str " - Bold, condensed, modern"]], [Plain [Code ("", [], []) "Arial:style=Regular", Str " - Clean, neutral, professional"]], [Plain [Code ("", [], []) "Courier:style=Regular", Str " - Monospace, technical"]], [Plain [Str "System fonts vary; check OpenSCAD documentation for your platform"]]], Header 5 ("practical-project-custom-keychain-nameplate", ["unnumbered", "unlisted"], []) [Str "Practical Project: Custom Keychain Nameplate"], Para [Str "Combine everything into a professional keychains with multiple variants:"], CodeBlock ("", ["openscad"], []) "// Customizable Keychain Nameplate
// Parameters - change these to create variants
name = \"ALEX\";
keysize = 35;
keyheight = 8;
wall = 1.2;
textsize = 16;
module keychain_nameplate(name, width, height, textsize) {
    union() {
        // Shell
        difference() {
            cube([width, width, height], center = false);
            translate([wall, wall, wall])
                cube([width - 2*wall, width - 2*wall, height], center = false);
        }
        // Embossed name
        translate([width/2, width/2, height - 0.01])
        linear_extrude(height = 0.8)
        text(name, size = textsize, font = \"Impact:style=Regular\",
             halign = \"center\", valign = \"center\");
        // Attachment loop
        translate([width/2, -3, height/2])
        rotate([90, 0, 0])
        cylinder(d = 8, h = 6, center = true, $fn = 32);
    }
}
// Create the nameplate
keychain_nameplate(name, keysize, keyheight, textsize);
", Header 4 ("assessment-questions-optional", ["unnumbered", "unlisted"], []) [Str "Assessment Questions (Optional)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "How did you use OpenSCAD parameters to enable users to customize the keychain without editing code?"]], [Plain [Str "What were the key differences in print time and material usage between your three variants?"]], [Plain [Str "Describe how you tested the key ring attachment and what adjustments you would make for the final design."]]]]