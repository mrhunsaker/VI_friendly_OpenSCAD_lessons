// Basic Project Scaffold for 3D Printing
// This template provides a starting point for beginner projects
// Complete the TODO sections to create your own design

// ============================================
// PROJECT CONFIGURATION
// ============================================

// TODO: Set your project name
project_name = "My First Project";

// TODO: Define overall dimensions (mm)
object_width = 50;
object_depth = 50;
object_height = 20;

// Wall thickness for strength (2-3mm recommended)
wall_thickness = 2;

// ============================================
// MATERIAL PROPERTIES
// ============================================

// Print resolution (0.2mm layers recommended)
$fn = 30;  // Fragment quality (higher = smoother curves, slower rendering)

// ============================================
// MAIN DESIGN
// ============================================

module base_shape() {
    // TODO: Replace this cube with your design
    cube([object_width, object_depth, object_height], center = true);
}

module hollow_version() {
    // Creates a hollow version by subtracting an inner cube
    difference() {
        base_shape();
        
        // Inner void (adjust padding as needed)
        translate([0, 0, 0.5])
            cube([object_width - 2*wall_thickness, 
                  object_depth - 2*wall_thickness, 
                  object_height - 2*wall_thickness], 
                 center = true);
    }
}

// ============================================
// OUTPUT OPTIONS
// ============================================

// TODO: Uncomment one of these to see different versions:

// Solid version
base_shape();

// Hollow version (useful for reducing material)
// hollow_version();

// ============================================
// CUSTOMIZATION TIPS
// ============================================
// 1. Test print at small scale first
// 2. Add support structures if needed
// 3. Use wall_thickness variable for quick adjustments
// 4. Check dimensions match your design intent
// 5. Consider printing orientation for strength
