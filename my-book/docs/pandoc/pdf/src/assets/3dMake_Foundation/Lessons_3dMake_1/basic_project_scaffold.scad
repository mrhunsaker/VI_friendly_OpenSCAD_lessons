// Basic Project Scaffold for 3D Printing
// This template provides a starting point for beginner projects
// Complete the TODO sections to create your own design

// ============================================
// PROJECT CONFIGURATION
// ============================================

// TODO: Set your project name
projectname = "My First Project";

// TODO: Define overall dimensions (mm)
objectwidth = 50;
objectdepth = 50;
objectheight = 20;

// Wall thickness for strength (2-3mm recommended)
wallthickness = 2;

// ============================================
// MATERIAL PROPERTIES
// ============================================

// Print resolution (0.2mm layers recommended)
$fn = 30;  // Fragment quality (higher = smoother curves, slower rendering)

// ============================================
// MAIN DESIGN
// ============================================

module baseshape() {
    // TODO: Replace this cube with your design
    cube([objectwidth, objectdepth, objectheight], center = true);
}

module hollowversion() {
    // Creates a hollow version by subtracting an inner cube
    difference() {
        baseshape();
        
        // Inner void (adjust padding as needed)
        translate([0, 0, 0.5])
            cube([objectwidth - 2*wallthickness, 
                  objectdepth - 2*wallthickness, 
                  objectheight - 2*wallthickness], 
                 center = true);
    }
}

// ============================================
// OUTPUT OPTIONS
// ============================================

// TODO: Uncomment one of these to see different versions:

// Solid version
baseshape();

// Hollow version (useful for reducing material)
// hollowversion();

// ============================================
// CUSTOMIZATION TIPS
// ============================================
// 1. Test print at small scale first
// 2. Add support structures if needed
// 3. Use wallthickness variable for quick adjustments
// 4. Check dimensions match your design intent
// 5. Consider printing orientation for strength
