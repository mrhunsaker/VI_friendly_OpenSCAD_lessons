# Lesson 6: Practical 3dm Commands and Text Embossing

Estimated time: 60–90 minutes

**Learning Objectives**

- Master key 3dMake commands: `3dm describe`, `3dm preview`, `3dm orient`, `3dm slice`[^1]
- Apply text embossing and parametric customization to create a personalized keycap[^2]
- Generate tactile 2D previews for accessible model inspection[^1]

**Materials**

- 3dMake project scaffold with `src/main.scad`
- Access to a slicer (PrusaSlicer, Cura, or Bambu Studio)
- Optional: printer for test print
- Reference: [3dmake-setup-guide.md](../../assets/Reference_Materials/3dmake-setup-guide.md) for command reference

**Related Project**: See [cube_keycap.scad](../../assets/3dMake_Foundation/Lessons_3dMake_6/cube_keycap.scad) for a worked example combining text embossing and the 3dm commands.

---

## Understanding the 3dm Command Suite

The 3dMake CLI provides a systematic workflow for model management. Each command serves a specific phase of the design-to-print pipeline.

| Command | Purpose | Example |
|---------|---------|---------|
| `3dm describe <file>` | Generates text and AI analysis of geometry | `3dm describe src/main.scad` |
| `3dm preview <file>` | Creates a 2D tactile printout (ASCII/braille/SVG) | `3dm preview src/main.scad` |
| `3dm orient <file>` | Analyzes and suggests optimal print orientation | `3dm orient src/main.scad` |
| `3dm slice <file>` | Generates G-code (machine instructions) | `3dm slice src/main.scad` |

---

## Step-by-step Tasks

1. **Create a parametric keycap model** with top-level parameters for customization[^2]:

   ```openscad
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

   This command suggests the optimal orientation for printing—minimizing support material and maximizing surface quality.

5. **Prepare for printing** by slicing your model:

   ```bash
   3dm slice src/main.scad
   ```

   This generates G-code (`build/main.gcode`) ready for your printer.

---

## Checkpoint

- After task 1, you have a working keycap model with parameters
- After task 3, you have a 2D tactile preview in `build/`
- After task 5, you have G-code ready to send to a printer

---

## Customization Challenge

Modify the keycap by changing these parameters and observing the results:

| Parameter | Original | Try This | Effect |
|-----------|----------|----------|--------|
| `key_size` | 18 | 25 | Larger keycap |
| `key_height` | 12 | 8 | Shorter, lower-profile key |
| `letter` | "A" | "YOUR_INITIAL" | Different character |
| `wall` | 1.2 | 1.5 | Thicker walls (stronger) |
| `letter_raise` | 0.8 | 1.5 | Deeper emboss |

---

## Quiz — Lesson 3dMake.6 (10 questions)

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
