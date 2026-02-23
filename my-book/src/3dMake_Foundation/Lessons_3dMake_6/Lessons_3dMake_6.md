# Lesson 6: Practical 3dm Commands and Text Embossing

Estimated time: 60-90 minutes

**Learning Objectives**

- Master key 3dMake commands: `3dm describe`, `3dm preview`, `3dm orient`, `3dm slice`[^1]
- Apply text embossing and parametric customization to create a personalized keycap[^2]
- Generate tactile 2D previews for accessible model inspection[^1]

**Materials**

- 3dMake project scaffold with `src/main.scad`
- Access to a slicer (PrusaSlicer, Cura, or Bambu Studio)
- Optional: printer for test print
- Reference: [3dmake-setup-guide.md](../Lessons_3dMake_1/3dmake-setup-guide.md) for command reference

**Related Project**: See [cube_keycap.scad](../../assets/3dMake_Foundation/Lessons_3dMake_6/cube_keycap.scad) for a worked example combining text embossing and the 3dm commands.

---

## Understanding the 3dm Command Suite

The 3dMake CLI provides a systematic workflow for model management. Each command serves a specific phase of the design-to-print pipeline.

| Command               | Purpose                                           | Example                      |
|-----------------------|---------------------------------------------------|------------------------------|
| `3dm describe <file>` | Generates text and AI analysis of geometry        | `3dm describe src/main.scad` |
| `3dm preview <file>`  | Creates a 2D tactile printout (ASCII/braille/SVG) | `3dm preview src/main.scad`  |
| `3dm orient <file>`   | Analyzes and suggests optimal print orientation   | `3dm orient src/main.scad`   |
| `3dm slice <file>`    | Generates G-code (machine instructions)           | `3dm slice src/main.scad`    |

---

## Step-by-step Tasks

1. **Create a parametric keycap model** with top-level parameters for customization[^2]:

   ```scad
   // Cube Keycap - Parametric Design
   // A customizable keycap with embossed text
   
   // Parameters (easy customization)
   key_size = 18;      // mm - width/depth of keycap
   key_height = 12;    // mm - height
   wall = 1.2;         // mm - wall thickness
   letter = "A";       // Character to emboss
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
         text(letter, size=letter_size, halign="center", valign="center");
   }
   
   // Assemble keycap
   union(){
     shell();
     emboss();
   }
   ```

2. **Run `3dm describe`** to generate a text-based analysis of your model:

   ```bash
   3dm describe src/main.scad
   ```

   This will output a description suitable for non-visual inspection. If AI is configured, you'll also receive suggestions about geometry and potential print issues.

3. **Generate a tactile 2D preview** with `3dm preview`:

   ```bash
   3dm preview src/main.scad
   ```

   This creates a simplified 2D outline that can be printed for physical inspection or converted to braille for accessibility.

4. **Analyze print orientation** with `3dm orient`:

   ```bash
   3dm orient src/main.scad
   ```

   This command suggests the optimal orientation for printing-minimizing support material and maximizing surface quality.

5. **Prepare for printing** by slicing your model:

   ```bash
   3dm slice src/main.scad
   ```

   This generates G-code (`build/main.gcode`) ready for your printer.

---

## String Functions for Dynamic Naming and Labeling

OpenSCAD includes functions for manipulating strings, enabling designs that automatically label themselves, create dynamic descriptions, or adapt text based on parameters.

### String Concatenation: str()

Combine strings and numbers into single strings:

```openscad
// Basic concatenation
name = str("Keycap_", "Large");
echo(name);  // Prints: Keycap_Large

// Combine strings and numbers
size = 25;
label = str("Size: ", size, "mm");
echo(label);  // Prints: Size: 25mm

// Complex concatenation
width = 50;
height = 30;
material = "PLA";
description = str(material, " box ", width, "x", height);
echo(description);  // Prints: PLA box 50x30
```

**Practical Example: Self-Labeling Container**

```openscad
// Container that labels itself with dimensions
module labeled_container(w, h, d, material_type) {
  // Create dimension label
  label = str(w, "x", h, "x", d, " ", material_type);
  
  // Create container body
  difference() {
    cube([w, h, d]);
    translate([5, 5, 5])
      cube([w-10, h-10, d-5]);
  }
  
  // Add embossed label on side
  translate([w/2, -2, d/2])
    linear_extrude(0.8)
      text(label, size=3, halign="center", valign="center", font="Arial:style=Bold");
}

labeled_container(60, 40, 30, "PLA");
// Output: Creates box labeled "60x40x30 PLA"
```

### String Length and Searching: len(), search()

Find and measure strings:

```openscad
// len(): String length
echo(len("OpenSCAD"));  // Prints: 8
echo(len("Hi"));        // Prints: 2

// search(): Find substring
text = "manufacturing";
result = search("fact", text);
echo(result);  // Returns index where "fact" is found
```

**Practical Example: Smart Keycap Text**

```openscad
// Keycap that validates text before embossing
module smart_keycap(key_size, text_to_engrave) {
  text_length = len(text_to_engrave);
  
  // Choose appropriate text size based on length
  text_size = text_length > 3 ? 8 :
              text_length > 1 ? 12 :
              14;  // Single character gets larger
  
  echo(str("Engraving '", text_to_engrave, "' at ", text_size, "mm"));
  
  difference() {
    cube([key_size, key_size, 10]);
    translate([2, 2, 2])
      cube([key_size-4, key_size-4, 10]);
  }
  
  // Emboss with auto-scaled text
  translate([key_size/2, key_size/2, 9.5])
    linear_extrude(0.8)
      text(text_to_engrave, size=text_size, halign="center", valign="center");
}

smart_keycap(18, "A");      // Single letter: 14mm
smart_keycap(18, "Ctrl");   // Multi-char: 8mm
```

### Substring Extraction: substr()

Extract parts of strings:

```openscad
// substr(): Extract substring
original = "OpenSCAD";
first_three = substr(original, 0, 3);
echo(first_three);  // Prints: Ope

last_three = substr(original, 5, 3);
echo(last_three);  // Prints: CAD
```

**Practical Example: Serial Number Generation**

```openscad
// Generate sequential serial numbers
module part_with_serial(part_name, serial_number) {
  // Create formatted serial: PART_001, PART_002, etc.
  serial_string = str(
    substr(part_name, 0, 4),  // First 4 letters of part_name
    "_",
    serial_number < 10 ? str("00", serial_number) :
    serial_number < 100 ? str("0", serial_number) :
    str(serial_number)
  );
  
  echo(str("Creating: ", serial_string));
  
  // Create part body
  cube([20, 20, 15]);
  
  // Add serial number embossing
  translate([10, 10, 14.5])
    linear_extrude(0.5)
      text(serial_string, size=2, halign="center", valign="center", font="Arial");
}

part_with_serial("bearing", 1);    // Output: BEAR_001
part_with_serial("bearing", 27);   // Output: BEAR_027
part_with_serial("bearing", 150);  // Output: BEAR_150
```

### Variable Scoping with let()

Use `let()` to create temporary local variables in expressions:

```openscad
// let() creates scoped variables in expressions
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
```

**Practical Example: Parametric Gear with Formatted Output**

```openscad
// Complete gear design with dynamic labeling
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
    gear_name, ": ",
    teeth_count, " teeth, ",
    pitch_diameter, "mm PD"
  );
  
  echo(spec);
  
  // Create gear body
  difference() {
    cylinder(r=calculations[1]/2, h=8, $fn=teeth_count*2);
    cylinder(r=bore_diameter/2, h=10);
  }
}

parametric_gear(40, 20, 8, "InputGear");
// Output: "InputGear: 20 teeth, 40mm PD"
```

### Combining String Functions for Batch Documentation

Here's a complete example generating documentation for multiple variants:

```openscad
// Generate a family of keycaps with automatic documentation
module keycap_family() {
  variants = [
    ["S", 12, 8],     // [letter, size, height]
    ["M", 16, 10],
    ["L", 20, 12],
    ["XL", 24, 14]
  ];
  
  for (v = variants) {
    letter = v[0];
    size = v[1];
    height = v[2];
    
    // Build specification string
    spec = str(
      "Keycap_", letter, " (",
      size, "x", size, "x", height, "mm)"
    );
    
    echo(spec);
    
    // Position variant for display
    x_offset = (letter == "S") ? 0 :
               (letter == "M") ? 30 :
               (letter == "L") ? 60 :
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
          text(letter, size=size*0.5, halign="center", valign="center");
    }
  }
}

keycap_family();
// Output:
// Keycap_S (12x12x8mm)
// Keycap_M (16x16x10mm)
// Keycap_L (20x20x12mm)
// Keycap_XL (24x24x14mm)
```

---

## Checkpoint

- After task 1, you have a working keycap model with parameters
- After task 3, you have a 2D tactile preview in `build/`
- After task 5, you have G-code ready to send to a printer

---

## Customization Challenge

Modify the keycap by changing these parameters and observing the results:

| Parameter      | Original | Try This       | Effect                     |
|----------------|----------|----------------|----------------------------|
| `key_size`     | 18       | 25             | Larger keycap              |
| `key_height`   | 12       | 8              | Shorter, lower-profile key |
| `letter`       | "A"      | "YOUR_INITIAL" | Different character        |
| `wall`         | 1.2      | 1.5            | Thicker walls (stronger)   |
| `letter_raise` | 0.8      | 1.5            | Deeper emboss              |

---

## Quiz - Lesson 3dMake.6 (10 questions)

1. What does `3dm describe` provide that `3dm preview` does not[^1]?
2. Why is `3dm preview` useful for accessibility[^1]?
3. What does `3dm orient` help you determine about your model[^1]?
4. How does parametric design (using variables) make customization easier[^2]?
5. Name one use case for embossed text in a 3D model[^2].
6. True or False: You must run `3dm build` before running `3dm describe`.
7. Explain the relationship between wall thickness and print strength.
8. Describe what happens when you change the `$fn` parameter in your text() function.
9. How would you modify the keycap code to add a second embossed character[^2]?
10. What information would you include in a `3dm describe` output for a manufacturer[^1]?

## Extension Problems (10)

1. Create three keycap variants (small, medium, large) by changing `key_size` and export each as a separate STL[^2].
2. Add a decorative border using `linear_extrude` and `text()`; verify the result with `3dm preview`[^1].
3. Run `3dm describe`, `3dm preview`, and `3dm orient` on your keycap; document all outputs[^1].
4. Modify the emboss module to support multiple characters in different positions[^2].
5. Create a parametric keycap library with variants for different keyboard layouts (cherry, OEM, DSA profiles)[^2].
6. Design an accessibility assessment: use `3dm describe` and `3dm preview` to validate your model for non-visual users.
7. Build a custom keycap design system: parameterize profile, height, wall thickness, and emboss content; generate a product family.
8. Create a comparison study: test three different emboss depths and document print quality differences.
9. Develop a keycap troubleshooting guide: common failures (emboss erosion, wall cracking, text illegibility) and solutions.
10. Write a comprehensive keycap design documentation: parameters, materials, print settings, post-processing, and accessibility features.

---

**References**

[^1]: 3DMake GitHub Repository - https://github.com/tdeck/3dmake
[^2]: OpenSCAD Manual - Text & Linear Extrude - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text
