# Parametric Keychain - Extension Project  {#3dmake_foundation_lessons_3dmake_6-parametric-keychain}

**Estimated time:** 2-4 hours

## Learning Objectives

By completing this project, you will:
- Create parametric OpenSCAD modules that accept user inputs
- Implement 2D text manipulation and 3D extrusion techniques
- Generate and test multiple design variants systematically
- Document design parameters for reproducibility and user customization

## Objective
- Create a parametric keychain design that adapts to custom text, dimensions, and materials.

## Tasks
1. Create `keychain.scad` with top-level parameters: `width`, `height`, `thickness`, and `text`.
2. Implement embossed or debossed text using `linear_extrude()` of a 2D text shape (or simulate with simple geometry if system lacks text support).
3. Produce three size variants and export STLs; record print settings.
4. Test attachment point for common key rings and report fit.

## Deliverable
- Source `keychain.scad` file with parametric variables documented
- Three STL variants (small, medium, large)
- Print settings log and fit-test report for key ring attachment

## Starter files
- [starter.scad](../../assets/Extension_Projects/Parametric_Keychain/starter.scad) - minimal parametric scaffold to begin.

## Starter Code

Copy and modify this cube keycap example as your starting point:

```openscad
// Cube Keycap - Beginner Example
// A simple 20mm cube keycap with an embossed letter
// Parameters
keysize = 18;     // mm
keyheight = 12;   // mm
wall = 1.2;        // mm
letter = "R";      // change to your preferred letter
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
      text(letter, size=lettersize, halign="center", valign="center");
}

union(){
  shell();
  emboss();
}
```

## Advanced Text Techniques

Beyond simple embossed letters, you can create sophisticated text effects using the patterns from the *Simplifying 3D Printing* textbook:

### Example 1: Circular Text Array

Arrange text in a circle around a central point:

```openscad
// Circular Text Arrangement
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
            font = "Impact:style=Regular", 
            size = text_size,
            halign = "center");
    } 
}

// Use the module to create circular text
linear_extrude(height = 2)
rotate_text("MAKER", text_size = 12, distance = 30, rotation_value = 75, tilt = 30);
```

**What it does:**
- Rotates each letter individually around a center point
- Creates circular or spiral text effects
- Useful for badges, nameplates, and decorative objects

### Example 2: Multi-Line Text Composition

Combine text at different sizes and positions for a professional nameplate:

```openscad
// Professional Nameplate with Multiple Text Layers
module create_nameplate(name, role, company)
{
    union()
    {
        // Base backing plate
        cube([120, 60, 3], center = true);
        
        // Main name - large, centered
        translate([0, 15, 2])
        linear_extrude(height = 2)
        text(name, size = 24, font = "Impact:style=Regular",
             halign = "center", valign = "center");
        
        // Role - medium, slightly smaller
        translate([0, 0, 2])
        linear_extrude(height = 2)
        text(role, size = 14, font = "Arial:style=Regular",
             halign = "center", valign = "center");
        
        // Company name - small, bottom
        translate([0, -15, 2])
        linear_extrude(height = 2)
        text(company, size = 10, font = "Arial:style=Regular",
             halign = "center", valign = "center");
    }
}

// Create a custom nameplate
create_nameplate("Alex Chen", "3D Design Engineer", "MakerCorp");
```

**Key features:**
- Multiple text elements at different scales
- Layered composition for professional appearance
- Each text element can be customized independently

### Example 3: Parametric Font Selection

Use different fonts for different effects:

```openscad
// Different fonts create different aesthetics
$fn = 100;

// Impact font (bold, modern)
translate([0, 40, 0])
linear_extrude(height = 2)
text("BOLD", size = 20, font = "Impact:style=Regular", halign = "center");

// Arial font (clean, professional)
translate([0, 10, 0])
linear_extrude(height = 2)
text("Clean", size = 20, font = "Arial:style=Regular", halign = "center");

// Script-like (decorative)
translate([0, -20, 0])
linear_extrude(height = 2)
text("Script", size = 20, font = "Courier:style=Regular", halign = "center");
```

**Font options** (availability depends on your system):
- `Impact:style=Regular` - Bold, condensed, modern
- `Arial:style=Regular` - Clean, neutral, professional
- `Courier:style=Regular` - Monospace, technical
- System fonts vary; check OpenSCAD documentation for your platform

### Practical Project: Custom Keychain Nameplate

Combine everything into a professional keychains with multiple variants:

```openscad
// Customizable Keychain Nameplate
// Parameters - change these to create variants
name = "ALEX";
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
        text(name, size = textsize, font = "Impact:style=Regular",
             halign = "center", valign = "center");
        
        // Attachment loop
        translate([width/2, -3, height/2])
        rotate([90, 0, 0])
        cylinder(d = 8, h = 6, center = true, $fn = 32);
    }
}

// Create the nameplate
keychain_nameplate(name, keysize, keyheight, textsize);
```

## Assessment Questions (Optional)
1. How did you use OpenSCAD parameters to enable users to customize the keychain without editing code?
2. What were the key differences in print time and material usage between your three variants?
3. Describe how you tested the key ring attachment and what adjustments you would make for the final design.
