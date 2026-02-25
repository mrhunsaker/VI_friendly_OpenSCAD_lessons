[Header 2 ("3dmake_foundation_lessons_3dmake_6-lessons_3dmake_6", [], []) [Str "Lesson 6: Practical 3dm Commands and Text Embossing"], Para [Str "Estimated time}}: 90-120 minutes"], Para [Str "Learning Objectives"], BulletList [[Plain [Str "Master key 3dMake commands}}: ", Code ("", [], []) "3dm describe", Str ", ", Code ("", [], []) "3dm preview", Str ", ", Code ("", [], []) "3dm orient", Str ", ", Code ("", [], []) "3dm slice", Str " ", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]]], [Plain [Str "Apply text}} embossing and parametric}} customization to create}} a personalized keycap", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]]]], [Plain [Str "Generate tactile 2D previews for accessible model inspection", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]]]], Para [Str "Materials"], BulletList [[Plain [Str "3dMake project scaffold with ", Code ("", [], []) "src/main.scad"]], [Plain [Str "Access to a slicer (PrusaSlicer, Cura, or Bambu Studio)"]], [Plain [Str "Optional: printer}} for test}} print}}"]], [Plain [Str "Reference: ", Link ("", [], []) [Str "3dmake-setup-guide.md"] ("docs/pandoc/latex/src/3dMake_Foundation/Lessons_3dMake_1/3dmake-setup-guide.md#3dmake_foundation_lessons_3dmake_1-3dmake-setup-guide", ""), Str " for command}} reference}}"]]], Para [Str "Related Project: See ", Link ("", [], []) [Str "cube_keycap.scad"] ("docs/pandoc/latex/src/assets/3dMake_Foundation/Lessons_3dMake_6/cube_keycap.scad", ""), Str " for a worked example combining text}} embossing and the 3dm commands}}."], Header 3 ("understanding-the-3dm-command-suite", ["unnumbered", "unlisted"], []) [Str "Understanding the 3dm Command Suite"], Para [Str "The 3dMake CLI provides a systematic workflow}} for model management. Each command}} serves a specific}} phase of the design}}-to-print}} pipeline."], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.2169811320754717)), (AlignDefault, (ColWidth 0.5)), (AlignDefault, (ColWidth 0.2830188679245283))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Purpose"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm describe <file>"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Generates text}} and AI analysis of geometry}}"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm describe src/main.scad"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm preview <file>"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Creates a 2D tactile printout (ASCII/braille}}/SVG)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm preview src/main.scad"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm orient <file>"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Analyzes and suggests optimal print}} orientation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm orient src/main.scad"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm slice <file>"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Generates G-code}} (machine instructions)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm slice src/main.scad"]]]])] (TableFoot ("", [], []) []), Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create a parametric}} keycap model with top-level parameters}} for customization", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str ":"], CodeBlock ("", ["scad"], []) "// Cube Keycap - Parametric Design
// A customizable keycap with embossed text

// Parameters (easy customization)
key_size = 18;      // mm - width/depth of keycap
key_height = 12;    // mm - height
wall = 1.2;         // mm - wall thickness
letter = \"A\";       // Character to emboss
letter_size = 10;   // mm - text height
letter_raise = 0.8; // mm - emboss depth

// Hollow shell
module shell(){
  difference(){
    cube([key_size, key_size, key_height], center=false);
    translate([wall, wall, wall])
      cube([key_size-2*wall, key_size-2*wall, key_height], center=false);
  }
}

// Text embossing on top face
module emboss(){
  translate([key_size/2, key_size/2, key_height-0.01])
    linear_extrude(height=letter_raise)
      text(letter, size=letter_size, halign=\"center\", valign=\"center\");
}

// Assemble keycap
union(){
  shell();
  emboss();
}
"], [Para [Str "Run ", Code ("", [], []) "3dm describe", Str " to generate a text}}-based analysis of your model:"], CodeBlock ("", ["bash"], []) "3dm describe src/main.scad
", Para [Str "This will output}} a description suitable for non-visual inspection. If AI is configured, you}}'ll also receive suggestions about geometry}} and potential print}} issues."]], [Para [Str "Generate a tactile 2D preview with ", Code ("", [], []) "3dm preview", Str ":"], CodeBlock ("", ["bash"], []) "3dm preview src/main.scad
", Para [Str "This creates a simplified 2D outline that can}} be printed for physical inspection or converted to braille}} for accessibility}}."]], [Para [Str "Analyze print}} orientation with ", Code ("", [], []) "3dm orient", Str ":"], CodeBlock ("", ["bash"], []) "3dm orient src/main.scad
", Para [Str "This command}} suggests the optimal orientation for printing}}-minimizing support}} material}} and maximizing surface quality}}."]], [Para [Str "Prepare for printing}} by slicing your model:"], CodeBlock ("", ["bash"], []) "3dm slice src/main.scad
", Para [Str "This generates G-code}} (", Code ("", [], []) "build/main.gcode", Str ") ready for your printer}}."]]], Header 3 ("string-functions-for-dynamic-naming-and-labeling", ["unnumbered", "unlisted"], []) [Str "String Functions for Dynamic Naming and Labeling"], Para [Str "OpenSCAD}} includes functions for manipulating strings, enabling designs that automatically label themselves, create}} dynamic descriptions, or adapt text}} based on parameters}}."], Header 4 ("string-concatenation-str", ["unnumbered", "unlisted"], []) [Str "String Concatenation: str()"], Para [Str "Combine strings and numbers into}} single strings:"], CodeBlock ("", ["openscad"], []) "// Basic concatenation
name = str(\"Keycap_\", \"Large\");
echo(name);  // Prints: Keycap_Large
// Combine strings and numbers
size = 25;
label = str(\"Size: \", size, \"mm\");
echo(label);  // Prints: Size: 25mm
// Complex concatenation
width = 50;
height = 30;
material = \"PLA\";
description = str(material, \" box \", width, \"x\", height);
echo(description);  // Prints: PLA box 50x30
", Para [Str "Practical Example: Self-Labeling Container"], CodeBlock ("", ["openscad"], []) "// Container that labels itself with dimensions
module labeled_container(w, h, d, material_type) {
  // Create dimension label
  label = str(w, \"x\", h, \"x\", d, \" \", material_type);
  // Create container body
  difference() {
    cube([w, h, d]);
    translate([5, 5, 5])
      cube([w-10, h-10, d-5]);
  }
  // Add embossed label on side
  translate([w/2, -2, d/2])
    linear_extrude(0.8)
      text(label, size=3, halign=\"center\", valign=\"center\", font=\"Arial:style=Bold\");
}
labeled_container(60, 40, 30, \"PLA\");
// Output: Creates box labeled \"60x40x30 PLA\"
", Header 4 ("string-length-and-searching-len-search", ["unnumbered", "unlisted"], []) [Str "String Length and Searching: len(), search()"], Para [Str "Find and measure strings:"], CodeBlock ("", ["openscad"], []) "// len(): String length
echo(len(\"OpenSCAD\"));  // Prints: 8
echo(len(\"Hi\"));        // Prints: 2
// search(): Find substring
text = \"manufacturing\";
result = search(\"fact\", text);
echo(result);  // Returns index where \"fact\" is found
", Para [Str "Practical Example: Smart Keycap Text"], CodeBlock ("", ["openscad"], []) "// Keycap that validates text before embossing
module smart_keycap(key_size, text_to_engrave) {
  text_length = len(text_to_engrave);
  // Choose appropriate text size based on length
  text_size = text_length > 3 ? 8 :
              text_length > 1 ? 12 :
              14;  // Single character gets larger
  echo(str(\"Engraving '\", text_to_engrave, \"' at \", text_size, \"mm\"));
  difference() {
    cube([key_size, key_size, 10]);
    translate([2, 2, 2])
      cube([key_size-4, key_size-4, 10]);
  }
  // Emboss with auto-scaled text
  translate([key_size/2, key_size/2, 9.5])
    linear_extrude(0.8)
      text(text_to_engrave, size=text_size, halign=\"center\", valign=\"center\");
}
smart_keycap(18, \"A\");      // Single letter: 14mm
smart_keycap(18, \"Ctrl\");   // Multi-char: 8mm
", Header 4 ("substring-extraction-substr", ["unnumbered", "unlisted"], []) [Str "Substring Extraction: substr()"], Para [Str "Extract parts of strings:"], CodeBlock ("", ["openscad"], []) "// substr(): Extract substring
original = \"OpenSCAD\";
first_three = substr(original, 0, 3);
echo(first_three);  // Prints: Ope
last_three = substr(original, 5, 3);
echo(last_three);  // Prints: CAD
", Para [Str "Practical Example: Serial Number Generation"], CodeBlock ("", ["openscad"], []) "// Generate sequential serial numbers
module part_with_serial(part_name, serial_number) {
  // Create formatted serial: PART_001, PART_002, etc.
  serial_string = str(
    substr(part_name, 0, 4),  // First 4 letters of part_name
    \"_\",
    serial_number < 10 ? str(\"00\", serial_number) :
    serial_number < 100 ? str(\"0\", serial_number) :
    str(serial_number)
  );
  echo(str(\"Creating: \", serial_string));
  // Create part body
  cube([20, 20, 15]);
  // Add serial number embossing
  translate([10, 10, 14.5])
    linear_extrude(0.5)
      text(serial_string, size=2, halign=\"center\", valign=\"center\", font=\"Arial\");
}
part_with_serial(\"bearing\", 1);    // Output: BEAR_001
part_with_serial(\"bearing\", 27);   // Output: BEAR_027
part_with_serial(\"bearing\", 150);  // Output: BEAR_150
", Header 4 ("variable-scoping-with-let", ["unnumbered", "unlisted"], []) [Str "Variable Scoping with let()"], Para [Str "Use ", Code ("", [], []) "let()", Str " to create}} temporary local variables}} in expressions:"], CodeBlock ("", ["openscad"], []) "// let() creates scoped variables in expressions
radius = 10;
// Without let: must use full expression
area = 3.14159 * radius * radius;
// With let: clearer and reusable
area = let(r = radius, pi = 3.14159) pi * r * r;
// Practical: Complex calculations
box_volume = let(
  w = 50,
  h = 30,
  d = 20
) w * h * d;
echo(box_volume);  // Prints: 30000
", Para [Str "Practical Example: Parametric Gear with Formatted Output"], CodeBlock ("", ["openscad"], []) "// Complete gear design with dynamic labeling
module parametric_gear(
  pitch_diameter,
  teeth_count,
  bore_diameter,
  gear_name
) {
  // Use let() for intermediate calculations
  calculations = let(
    module = pitch_diameter / teeth_count,
    addendum = 1.0,
    dedendum = 1.25,
    outer_d = pitch_diameter + 2 * addendum,
    root_d = pitch_diameter - 2 * dedendum
  ) [module, outer_d, root_d];
  // Create formatted specification
  spec = str(
    gear_name, \": \",
    teeth_count, \" teeth, \",
    pitch_diameter, \"mm PD\"
  );
  echo(spec);
  // Create gear body
  difference() {
    cylinder(r=calculations[1]/2, h=8, $fn=teeth_count*2);
    cylinder(r=bore_diameter/2, h=10);
  }
}
parametric_gear(40, 20, 8, \"InputGear\");
// Output: \"InputGear: 20 teeth, 40mm PD\"
", Header 4 ("combining-string-functions-for-batch-documentation", ["unnumbered", "unlisted"], []) [Str "Combining String Functions for Batch Documentation"], Para [Str "Here's a complete example generating documentation for multiple variants:"], CodeBlock ("", ["openscad"], []) "// Generate a family of keycaps with automatic documentation
module keycap_family() {
  variants = [
    [\"S\", 12, 8],     // [letter, size, height]
    [\"M\", 16, 10],
    [\"L\", 20, 12],
    [\"XL\", 24, 14]
  ];
  for (v = variants) {
    letter = v[0];
    size = v[1];
    height = v[2];
    // Build specification string
    spec = str(
      \"Keycap_\", letter, \" (\",
      size, \"x\", size, \"x\", height, \"mm)\"
    );
    echo(spec);
    // Position variant for display
    x_offset = (letter == \"S\") ? 0 :
               (letter == \"M\") ? 30 :
               (letter == \"L\") ? 60 :
               90;
    translate([x_offset, 0, 0]) {
      difference() {
        cube([size, size, height]);
        translate([1.5, 1.5, 1.5])
          cube([size-3, size-3, height-1.5]);
      }
      // Emboss the letter
      translate([size/2, size/2, height - 0.5])
        linear_extrude(0.8)
          text(letter, size=size*0.5, halign=\"center\", valign=\"center\");
    }
  }
}
keycap_family();
// Output:
// Keycap_S (12x12x8mm)
// Keycap_M (16x16x10mm)
// Keycap_L (20x20x12mm)
// Keycap_XL (24x24x14mm)
", Header 3 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After task 1, you}} have a working keycap model with parameters}}"]], [Plain [Str "After task 3, you}} have a 2D tactile preview in ", Code ("", [], []) "build/"]], [Plain [Str "After task 5, you}} have G-code}} ready to send to a printer}}"]]], Header 3 ("customization-challenge", ["unnumbered", "unlisted"], []) [Str "Customization Challenge"], Para [Str "Modify the keycap by changing these parameters}} and observing the results:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.22857142857142856)), (AlignDefault, (ColWidth 0.14285714285714285)), (AlignDefault, (ColWidth 0.22857142857142856)), (AlignDefault, (ColWidth 0.4))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parameter"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Original"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Try This"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Effect"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "key_size"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "18"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "25"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Larger keycap"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "key_height"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "12"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Shorter, lower-profile key"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "letter"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "\"A\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "\"YOUR_INITIAL\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Different character"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "wall"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1.2"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1.5"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Thicker walls (stronger)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "letter_raise"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.8"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1.5"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Deeper emboss"]]]])] (TableFoot ("", [], []) []), Header 3 ("quiz---lesson-3dmake6-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.6 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "3dm describe", Str " provide that ", Code ("", [], []) "3dm preview", Str " does not", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "?"]], [Plain [Str "Why is ", Code ("", [], []) "3dm preview", Str " useful for accessibility}}", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "?"]], [Plain [Str "What does ", Code ("", [], []) "3dm orient", Str " help you}} determine about your model", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "?"]], [Plain [Str "How does parametric}} design}} (using}} variables}}) make customization easier", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "?"]], [Plain [Str "Name one}} use case for embossed text}} in a 3D model", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "."]], [Plain [Str "True or False: You must run}} ", Code ("", [], []) "3dm build", Str " before}} running ", Code ("", [], []) "3dm describe", Str "."]], [Plain [Str "Explain the relationship between}} wall thickness and print}} strength."]], [Plain [Str "Describe what happens when you}} change the ", Code ("", [], []) "$fn", Str " parameter}} in your text}}() function."]], [Plain [Str "How would you}} modify the keycap code}} to add a second embossed character", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "?"]], [Plain [Str "What information would you}} include in a ", Code ("", [], []) "3dm describe", Str " output}} for a manufacturer", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "?"]]], Header 3 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create three keycap variants (small, medium, large) by changing ", Code ("", [], []) "key_size", Str " and export each}} as a separate STL}}", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "."]], [Plain [Str "Add a decorative border using}} ", Code ("", [], []) "linear_extrude", Str " and ", Code ("", [], []) "text()", Str "; verify the result with ", Code ("", [], []) "3dm preview", Str " ", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "."]], [Plain [Str "Run ", Code ("", [], []) "3dm describe", Str ", ", Code ("", [], []) "3dm preview", Str ", and ", Code ("", [], []) "3dm orient", Str " on your keycap; document all outputs", Note [Para [Str "3DMake}} GitHub}} Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "."]], [Plain [Str "Modify the emboss module}} to support}} multiple characters in different positions", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "."]], [Plain [Str "Create a parametric}} keycap library with variants for different keyboard layouts (cherry, OEM, DSA profiles)", Note [Para [Str "OpenSCAD}} Manual - Text & Linear Extrude - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text", "")]], Str "."]], [Plain [Str "Design}} an accessibility}} assessment: use ", Code ("", [], []) "3dm describe", Str " and ", Code ("", [], []) "3dm preview", Str " to validate your model for non-visual users."]], [Plain [Str "Build a custom keycap design}} system: parameterize profile, height}}, wall thickness, and emboss content; generate a product family."]], [Plain [Str "Create a comparison study: test}} three different emboss depths and document print}} quality}} differences."]], [Plain [Str "Develop a keycap troubleshooting guide: common}} failures (emboss erosion, wall cracking, text}} illegibility) and solutions."]], [Plain [Str "Write a comprehensive keycap design}} documentation: parameters}}, materials, print}} settings, post-processing, and accessibility}} features."]]], Para [Str "References"]]