// Parametric Design Template
// Demonstrates how to create designs that adapt to different inputs
// This pattern allows you to quickly generate variations

// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================

// Box dimensions (change these to regenerate different sizes)
boxwidth = 40;
boxdepth = 40;
boxheight = 30;

// Feature sizing (scales with box size)
cornerradius = 3;
wallthickness = 2;

// Boolean flags for feature toggling
includelid = true;
includefeet = true;
hollowinterior = true;

// ============================================
// QUALITY SETTINGS
// ============================================
$fn = 30;  // Fragment quality

// ============================================
// PARAMETRIC MODULES
// ============================================

// Simple box with rounded corners
module roundedbox(width, depth, height, radius) {
    hull() {
        // Create 8 corner spheres to define the shape
        translate([radius, radius, radius])
            sphere(r = radius);
        translate([width - radius, radius, radius])
            sphere(r = radius);
        translate([radius, depth - radius, radius])
            sphere(r = radius);
        translate([width - radius, depth - radius, radius])
            sphere(r = radius);
        translate([radius, radius, height - radius])
            sphere(r = radius);
        translate([width - radius, radius, height - radius])
            sphere(r = radius);
        translate([radius, depth - radius, height - radius])
            sphere(r = radius);
        translate([width - radius, depth - radius, height - radius])
            sphere(r = radius);
    }
}

// Box with optional hollow interior
module boxbody(width, depth, height, wall, hollow) {
    if (hollow) {
        difference() {
            roundedbox(width, depth, height, cornerradius);
            
            translate([wall, wall, wall])
                roundedbox(width - 2*wall, 
                           depth - 2*wall, 
                           height - 2*wall, 
                           cornerradius);
        }
    } else {
        roundedbox(width, depth, height, cornerradius);
    }
}

// Optional feet/standoff supports
module feet(width, depth, footheight, footradius) {
    footspacingx = width * 0.8;
    footspacingy = depth * 0.8;
    
    translate([width/2 - footspacingx/2, depth/2 - footspacingy/2, 0])
        cylinder(h = footheight, r = footradius, $fn = 16);
    translate([width/2 + footspacingx/2, depth/2 - footspacingy/2, 0])
        cylinder(h = footheight, r = footradius, $fn = 16);
    translate([width/2 - footspacingx/2, depth/2 + footspacingy/2, 0])
        cylinder(h = footheight, r = footradius, $fn = 16);
    translate([width/2 + footspacingx/2, depth/2 + footspacingy/2, 0])
        cylinder(h = footheight, r = footradius, $fn = 16);
}

// Optional lid/cover that fits on top
module lid(width, depth, lidthickness, clearance) {
    translate([0, 0, -lidthickness])
        cube([width + 2*clearance, depth + 2*clearance, lidthickness], center = true);
}

// ============================================
// MAIN ASSEMBLY
// ============================================

// Render the main body
boxbody(boxwidth, boxdepth, boxheight, wallthickness, hollowinterior);

// Add feet if enabled
if (includefeet) {
    feet(boxwidth, boxdepth, 2, 1.5);
}

// Add lid if enabled (displayed above for clarity)
if (includelid) {
    translate([0, 0, boxheight + 3])
        lid(boxwidth, boxdepth, wallthickness, 0.5);
}

// ============================================
// USAGE TIPS
// ============================================
// 1. Change top-level parameters to regenerate designs quickly
// 2. Toggle includelid and includefeet to test variations
// 3. Adjust cornerradius for different aesthetic styles
// 4. Export at different scales for prototyping
// 5. Combine multiple parametric modules for complex designs
