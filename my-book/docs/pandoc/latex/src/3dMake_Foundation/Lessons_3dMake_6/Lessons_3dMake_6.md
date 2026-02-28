[Header 2 ("lesson-6-practical-3dm-commands-and-text-embossing", [], []) [Str "Lesson 6: Practical 3dm Commands and Text Embossing"], Para [Str "Estimated time: 90–120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Use the full ", Code ("", [], []) "3dm", Str " command suite: ", Code ("", [], []) "describe", Str ", ", Code ("", [], []) "preview", Str ", ", Code ("", [], []) "orient", Str ", ", Code ("", [], []) "slice"]], [Plain [Str "Emboss and engrave text using OpenSCAD's ", Code ("", [], []) "text()", Str " function with ", Code ("", [], []) "linear_extrude()"]], [Plain [Str "Use OpenSCAD string functions: ", Code ("", [], []) "str()", Str ", ", Code ("", [], []) "len()", Str ", ", Code ("", [], []) "search()", Str ", ", Code ("", [], []) "substr()"]], [Plain [Str "Apply ", Code ("", [], []) "let()", Str " for scoped variable declarations"]], [Plain [Str "Build a parametric label-making system"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project from previous lessons"]], [Plain [Str "Terminal and editor"]], [Plain [Str "Slicer (PrusaSlicer or equivalent)"]]], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("1-master-the-3dm-command-suite", ["unnumbered", "unlisted"], []) [Str "1. Master the 3dm Command Suite"], CodeBlock ("", ["bash"], []) "# Describe your current model using AI analysis (non-visual validation)
3dm describe

# Generate a preview image (PNG) of the model
3dm preview

# Suggest optimal print orientation
3dm orient

# Slice the model using your configured slicer settings
3dm slice
", Para [Str "Quick Reference:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.3333333333333333)), (AlignDefault, (ColWidth 0.3333333333333333)), (AlignDefault, (ColWidth 0.3333333333333333))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "What It Does"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Output"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Compile ", Code ("", [], []) ".scad", Str " → ", Code ("", [], []) ".stl"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "build/main.stl"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm describe"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "AI geometry description"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Console text"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm preview"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Render model to PNG image"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "build/preview.png"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm orient"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Suggest print orientation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Console text with recommendation"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm slice"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Call slicer on current STL"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "G-code file"]]]])] (TableFoot ("", [], []) []), Para [Str "Note: ", Code ("", [], []) "3dm describe", Str " and ", Code ("", [], []) "3dm orient", Str " both use the AI backend configured in your ", Code ("", [], []) "3dmake.toml", Str ".", Note [Para [Str "3DMake GitHub Repository — Command Reference. ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", ""), Str ". See README for full list of available commands."]]], Header 4 ("2-emboss-text-with-text-and-linear_extrude", ["unnumbered", "unlisted"], []) [Str "2. Emboss Text with text() and linear_extrude()"], CodeBlock ("", ["openscad"], []) "// Basic text emboss (text raised above a base). See [^2] for more on text and fonts.
module embossed_label(label_text, font_size=8, depth=1.5) {
  linear_extrude(height=depth) {
    text(label_text,
         size=font_size,
         font=\"Liberation Sans:style=Bold\",
         halign=\"center\",
         valign=\"center\",
         $fn=4   // $fn affects curve resolution on letters
    );
  }
}

// Base plate with embossed text
difference() {
  cube([60, 20, 5], center=true);
  translate([0, 0, 4])
    embossed_label(\"HELLO\", font_size=8, depth=2);  // cuts 2mm into plate (engrave)
}

// OR: emboss (text proud of surface)
union() {
  cube([60, 20, 3], center=true);
  translate([0, 0, 3])
    embossed_label(\"HELLO\", font_size=8, depth=1.5);
}
", Header 4 ("3-use-string-functions", ["unnumbered", "unlisted"], []) [Str "3. Use String Functions"], CodeBlock ("", ["openscad"], []) "// str() - convert and concatenate values into strings
part_id = str(\"PART-\", 2026, \"-\", 42);
echo(part_id);  // PART-2026-42

// len() - length of a string or list
name = \"OpenSCAD\";
echo(len(name));  // 8

// search() - find a character's position
echo(search(\"S\", \"OpenSCAD\"));  // [[4]]

// substr() - extract substring
full = \"BATCH-001\";
batch = substr(full, 0, 5);   // \"BATCH\"
number = substr(full, 6, 3);  // \"001\"
echo(batch, number);
", Header 4 ("4-use-let-for-scoped-variables", ["unnumbered", "unlisted"], []) [Str "4. Use let() for Scoped Variables"], CodeBlock ("", ["openscad"], []) "// let() scopes variables to a block — they don't pollute the global namespace
let (
  base_w = 80,
  base_d = 50,
  text_offset_z = 5
) {
  cube([base_w, base_d, text_offset_z]);
  translate([base_w/2, base_d/2, text_offset_z])
    linear_extrude(2) text(\"v1.0\", size=6, halign=\"center\", valign=\"center\");
}
", Header 4 ("5-build-a-parametric-label-maker", ["unnumbered", "unlisted"], []) [Str "5. Build a Parametric Label Maker"], CodeBlock ("", ["openscad"], []) "// Parametric label: all dimensions and content are parameters
label_text   = \"STORAGE BOX\";
label_w      = 80;
label_h      = 18;
plate_depth  = 3;
text_depth   = 1.2;
font_size    = 7;
corner_r     = 2;

module label_plate(txt, w, h, t, td, fs, cr) {
  difference() {
    // Rounded base plate
    minkowski() {
      cube([w - 2*cr, h - 2*cr, t], center=true);
      cylinder(r=cr, h=0.01, $fn=16);
    }
    // Engraved text
    translate([0, 0, t/2 - td + 0.001])
      linear_extrude(td + 0.001)
        text(txt, size=fs, font=\"Liberation Sans:style=Bold\",
             halign=\"center\", valign=\"center\", $fn=4);
    // Mounting hole
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
", Header 4 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: All four commands run without error and produce expected output."]], [Plain [Str "After step 2: ", Code ("", [], []) "3dm build", Str " produces an STL with readable text in the slicer preview."]], [Plain [Str "After step 5: Your label plate shows the text correctly positioned and engraved."]]], Header 3 ("font-handling", ["unnumbered", "unlisted"], []) [Str "Font Handling"], Para [Str "OpenSCAD accesses system fonts. Use ", Code ("", [], []) "fontconfig", Str " syntax for precise control:"], CodeBlock ("", ["openscad"], []) "// Font specification format: \"FontName:style=StyleName\"
text(\"Hello\", font=\"Liberation Sans:style=Bold\");
text(\"Hello\", font=\"Liberation Mono:style=Regular\");
text(\"Hello\", font=\"DejaVu Serif:style=Italic\");

// List available fonts from the OpenSCAD Help menu > Font List
// Or from terminal (Linux):
// fc-list | grep -i \"liberation\"
", Para [Str "Common classroom-safe fonts (widely available on Linux):"], BulletList [[Plain [Code ("", [], []) "Liberation Sans", Str " — clean, readable sans-serif (Arial-compatible)"]], [Plain [Code ("", [], []) "Liberation Mono", Str " — monospace (good for part numbers)"]], [Plain [Code ("", [], []) "DejaVu Serif", Str " — serif option"]]], Header 3 ("quiz--lesson-3dmake6-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.6 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "3dm describe", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "3dm orient", Str " output, and when would you use it?"]], [Plain [Str "What is the difference between embossed text and engraved text in 3D printing?"]], [Plain [Str "What parameter in ", Code ("", [], []) "text()", Str " controls horizontal alignment?"]], [Plain [Str "What does ", Code ("", [], []) "str(\"PART-\", 2024, \"-\", 1)", Str " return?"]], [Plain [Str "What does ", Code ("", [], []) "len(\"OpenSCAD\")", Str " return?"]], [Plain [Str "What is the purpose of ", Code ("", [], []) "let()", Str " in OpenSCAD?"]], [Plain [Str "What does ", Code ("", [], []) "$fn=4", Str " do to letters rendered with ", Code ("", [], []) "text()", Str "?"]], [Plain [Str "True or False: ", Code ("", [], []) "3dm slice", Str " compiles your ", Code ("", [], []) ".scad", Str " file before slicing."]], [Plain [Str "What font specification format does OpenSCAD use?"]], [Plain [Str "Explain the difference between ", Code ("", [], []) "halign=\"left\"", Str " and ", Code ("", [], []) "halign=\"center\"", Str " in the ", Code ("", [], []) "text()", Str " function and describe when you would use each."]], [Plain [Str "What does ", Code ("", [], []) "substr(\"BATCH-001\", 6, 3)", Str " return?"]], [Plain [Str "Describe the role of ", Code ("", [], []) "linear_extrude()", Str " when used with ", Code ("", [], []) "text()", Str ". What would happen if you omitted it?"]], [Plain [Str "Write the OpenSCAD code to engrave the text \"LOT-42\" into a 50×20×4 mm base plate, centered, with 1.5 mm engraving depth."]], [Plain [Str "What is the difference between scoped variables declared with ", Code ("", [], []) "let()", Str " and top-level global variables in an OpenSCAD file?"]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Build a parametric serial number generator: accept a prefix string and a number, concatenate them with ", Code ("", [], []) "str()", Str ", and emboss the result onto a label plate."]], [Plain [Str "Create a dynamic version label: use ", Code ("", [], []) "str()", Str " to combine a product name and a version number, where both are top-level parameters."]], [Plain [Str "Design a 4-up label sheet: 4 identical labels arranged in a 2×2 grid using ", Code ("", [], []) "translate()", Str " and a ", Code ("", [], []) "for", Str " loop."]], [Plain [Str "Build a multi-line label system: stack two ", Code ("", [], []) "text()", Str " calls at different Z heights to create a two-line label."]], [Plain [Str "Create a label with a decorative border using ", Code ("", [], []) "difference()", Str " to cut a frame outline around the text."]], [Plain [Str "Use ", Code ("", [], []) "3dm orient", Str " on three different models (flat slab, tall cylinder, L-bracket) and document whether the AI orientation suggestion agrees with your own analysis."]], [Plain [Str "Build a \"batch tag\" system: a module that generates different serial numbers from a list, placing each on a separate small tag in a row."]], [Plain [Str "Design a keychain tag: a rounded rectangle with a hole for a ring, parametric text, and two mounting ridges."]], [Plain [Str "Use ", Code ("", [], []) "search()", Str " to find the position of a dash character in a part-number string. Write the code and explain why this might be useful."]], [Plain [Str "Build a \"negative space\" text plate: instead of engraving text, create a plate with all letters cut completely through (silhouette/stencil style)."]], [Plain [Str "Design a parametric drawer label holder: a clip that slides over the edge of a drawer and holds a label card. Make all dimensions parameters."]], [Plain [Str "Create a font comparison tool: render the same text string in Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one plate."]], [Plain [Str "Build a screen-reader accessibility guide for the five ", Code ("", [], []) "3dm", Str " commands taught in this lesson. For each command, document: the command name, what it does, expected output, and how to interpret the output without visual reference."]], [Plain [Str "Write a parametric module that auto-sizes the font: given a fixed label width and a string, reduce the font size until the text fits within the width."]], [Plain [Str "Create a part-marking system for a small production batch: design a jig that holds 10 labels in a row, each with an incremented part number, ready to print all at once."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — String functions and text embossing examples"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — All string function syntax"]], [Plain [Link ("", [], []) [Str "3DMake Terminal Quickstart Guide"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_6/../../assets/3dMake_Foundation/3dmake-setup-guide.md", "")]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked text embossing examples"]]]]