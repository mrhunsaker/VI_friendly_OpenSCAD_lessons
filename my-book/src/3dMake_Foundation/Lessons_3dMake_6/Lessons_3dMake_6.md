# Lesson 6: Practical 3dm Commands and Text Embossing

Estimated time: 90–120 minutes

## Learning Objectives
- Use the full `3dm` command suite: `describe`, `preview`, `orient`, `slice`
- Emboss and engrave text using OpenSCAD's `text()` function with `linear_extrude()`
- Use OpenSCAD string functions: `str()`, `len()`, `search()`, `substr()`
- Apply `let()` for scoped variable declarations
- Build a parametric label-making system

## Materials
- 3dMake project from previous lessons
- Terminal and editor
- Slicer (PrusaSlicer or equivalent)

## Step-by-step Tasks

### 1. Master the 3dm Command Suite

```bash
# Describe your current model using AI analysis (non-visual validation)
3dm describe

# Generate a preview image (PNG) of the model
3dm preview

# Suggest optimal print orientation
3dm orient

# Slice the model using your configured slicer settings
3dm slice
```

Quick Reference:

| Command | What It Does | Output |
|---|---|---|
| `3dm build` | Compile `.scad` → `.stl` | `build/main.stl` |
| `3dm describe` | AI geometry description | Console text |
| `3dm preview` | Render model to PNG image | `build/preview.png` |
| `3dm orient` | Suggest print orientation | Console text with recommendation |
| `3dm slice` | Call slicer on current STL | G-code file |

Note: `3dm describe` and `3dm orient` both use the AI backend configured in your `3dmake.toml`.[^1]

### 2. Emboss Text with text() and linear_extrude()

```openscad
// Basic text emboss (text raised above a base). See [^2] for more on text and fonts.
module embossed_label(label_text, font_size=8, depth=1.5) {
  linear_extrude(height=depth) {
    text(label_text,
         size=font_size,
         font="Liberation Sans:style=Bold",
         halign="center",
         valign="center",
         $fn=4   // $fn affects curve resolution on letters
    );
  }
}

// Base plate with embossed text
difference() {
  cube([60, 20, 5], center=true);
  translate([0, 0, 4])
    embossed_label("HELLO", font_size=8, depth=2);  // cuts 2mm into plate (engrave)
}

// OR: emboss (text proud of surface)
union() {
  cube([60, 20, 3], center=true);
  translate([0, 0, 3])
    embossed_label("HELLO", font_size=8, depth=1.5);
}
```

### 3. Use String Functions

```openscad
// str() - convert and concatenate values into strings
part_id = str("PART-", 2026, "-", 42);
echo(part_id);  // PART-2026-42

// len() - length of a string or list
name = "OpenSCAD";
echo(len(name));  // 8

// search() - find a character's position
echo(search("S", "OpenSCAD"));  // [[4]]

// substr() - extract substring
full = "BATCH-001";
batch = substr(full, 0, 5);   // "BATCH"
number = substr(full, 6, 3);  // "001"
echo(batch, number);
```

### 4. Use let() for Scoped Variables

```openscad
// let() scopes variables to a block — they don't pollute the global namespace
let (
  base_w = 80,
  base_d = 50,
  text_offset_z = 5
) {
  cube([base_w, base_d, text_offset_z]);
  translate([base_w/2, base_d/2, text_offset_z])
    linear_extrude(2) text("v1.0", size=6, halign="center", valign="center");
}
```

### 5. Build a Parametric Label Maker

```openscad
// Parametric label: all dimensions and content are parameters
label_text   = "STORAGE BOX";
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
        text(txt, size=fs, font="Liberation Sans:style=Bold",
             halign="center", valign="center", $fn=4);
    // Mounting hole
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
```

### Checkpoint
- After step 1: All four commands run without error and produce expected output.
- After step 2: `3dm build` produces an STL with readable text in the slicer preview.
- After step 5: Your label plate shows the text correctly positioned and engraved.

## Font Handling

OpenSCAD accesses system fonts. Use `fontconfig` syntax for precise control:

```openscad
// Font specification format: "FontName:style=StyleName"
text("Hello", font="Liberation Sans:style=Bold");
text("Hello", font="Liberation Mono:style=Regular");
text("Hello", font="DejaVu Serif:style=Italic");

// List available fonts from the OpenSCAD Help menu > Font List
// Or from terminal (Linux):
// fc-list | grep -i "liberation"
```

Common classroom-safe fonts (widely available on Linux):
- `Liberation Sans` — clean, readable sans-serif (Arial-compatible)
- `Liberation Mono` — monospace (good for part numbers)
- `DejaVu Serif` — serif option

## Quiz — Lesson 3dMake.6 (15 questions)

1. What does `3dm describe` do?
2. What does `3dm orient` output, and when would you use it?
3. What is the difference between embossed text and engraved text in 3D printing?
4. What parameter in `text()` controls horizontal alignment?
5. What does `str("PART-", 2024, "-", 1)` return?
6. What does `len("OpenSCAD")` return?
7. What is the purpose of `let()` in OpenSCAD?
8. What does `$fn=4` do to letters rendered with `text()`?
9. True or False: `3dm slice` compiles your `.scad` file before slicing.
10. What font specification format does OpenSCAD use?
11. Explain the difference between `halign="left"` and `halign="center"` in the `text()` function and describe when you would use each.
12. What does `substr("BATCH-001", 6, 3)` return?
13. Describe the role of `linear_extrude()` when used with `text()`. What would happen if you omitted it?
14. Write the OpenSCAD code to engrave the text "LOT-42" into a 50×20×4 mm base plate, centered, with 1.5 mm engraving depth.
15. What is the difference between scoped variables declared with `let()` and top-level global variables in an OpenSCAD file?

## Extension Problems (15)

1. Build a parametric serial number generator: accept a prefix string and a number, concatenate them with `str()`, and emboss the result onto a label plate.
2. Create a dynamic version label: use `str()` to combine a product name and a version number, where both are top-level parameters.
3. Design a 4-up label sheet: 4 identical labels arranged in a 2×2 grid using `translate()` and a `for` loop.
4. Build a multi-line label system: stack two `text()` calls at different Z heights to create a two-line label.
5. Create a label with a decorative border using `difference()` to cut a frame outline around the text.
6. Use `3dm orient` on three different models (flat slab, tall cylinder, L-bracket) and document whether the AI orientation suggestion agrees with your own analysis.
7. Build a "batch tag" system: a module that generates different serial numbers from a list, placing each on a separate small tag in a row.
8. Design a keychain tag: a rounded rectangle with a hole for a ring, parametric text, and two mounting ridges.
9. Use `search()` to find the position of a dash character in a part-number string. Write the code and explain why this might be useful.
10. Build a "negative space" text plate: instead of engraving text, create a plate with all letters cut completely through (silhouette/stencil style).
11. Design a parametric drawer label holder: a clip that slides over the edge of a drawer and holds a label card. Make all dimensions parameters.
12. Create a font comparison tool: render the same text string in Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one plate.
13. Build a screen-reader accessibility guide for the five `3dm` commands taught in this lesson. For each command, document: the command name, what it does, expected output, and how to interpret the output without visual reference.
14. Write a parametric module that auto-sizes the font: given a fixed label width and a string, reduce the font size until the text fits within the width.
15. Create a part-marking system for a small production batch: design a jig that holds 10 labels in a row, each with an incremented part number, ready to print all at once.

## References and Helpful Resources

[^1]: 3DMake GitHub Repository — Command Reference. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake). See README for full list of available commands.

[^2]: OpenSCAD User Manual — Text and Fonts. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — String functions and text embossing examples
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — All string function syntax
- [3DMake Terminal Quickstart Guide](../../assets/3dMake_Foundation/3dmake-setup-guide.md)
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked text embossing examples
