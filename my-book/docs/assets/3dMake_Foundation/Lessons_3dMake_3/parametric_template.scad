// Parametric Design Template
// Demonstrates how to create designs that adapt to different inputs
// This pattern allows you to quickly generate variations

// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================

// Box dimensions (change these to regenerate different sizes)
box_width = 40;
box_depth = 40;
box_height = 30;

// Feature sizing (scales with box size)
corner_radius = 3;
wall_thickness = 2;

// Boolean flags for feature toggling
include_lid = true;
include_feet = true;
hollow_interior = true;

// ============================================
// QUALITY SETTINGS
// ============================================
$fn = 30;  // Fragment quality

// ============================================
// PARAMETRIC MODULES
// ============================================

// Simple box with rounded corners
module rounded_box(width, depth, height, radius) {
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
module box_body(width, depth, height, wall, hollow) {
    if (hollow) {
        difference() {
            rounded_box(width, depth, height, corner_radius);
            
            translate([wall, wall, wall])
                rounded_box(width - 2*wall, 
                           depth - 2*wall, 
                           height - 2*wall, 
                           corner_radius);
        }
    } else {
        rounded_box(width, depth, height, corner_radius);
    }
}

// Optional feet/standoff supports
module feet(width, depth, foot_height, foot_radius) {
    foot_spacing_x = width * 0.8;
    foot_spacing_y = depth * 0.8;
    
    translate([width/2 - foot_spacing_x/2, depth/2 - foot_spacing_y/2, 0])
        cylinder(h = foot_height, r = foot_radius, $fn = 16);
    translate([width/2 + foot_spacing_x/2, depth/2 - foot_spacing_y/2, 0])
        cylinder(h = foot_height, r = foot_radius, $fn = 16);
    translate([width/2 - foot_spacing_x/2, depth/2 + foot_spacing_y/2, 0])
        cylinder(h = foot_height, r = foot_radius, $fn = 16);
    translate([width/2 + foot_spacing_x/2, depth/2 + foot_spacing_y/2, 0])
        cylinder(h = foot_height, r = foot_radius, $fn = 16);
}

// Optional lid/cover that fits on top
module lid(width, depth, lid_thickness, clearance) {
    translate([0, 0, -lid_thickness])
        cube([width + 2*clearance, depth + 2*clearance, lid_thickness], center = true);
}

// ============================================
// MAIN ASSEMBLY
// ============================================

// Render the main body
box_body(box_width, box_depth, box_height, wall_thickness, hollow_interior);

// Add feet if enabled
if (include_feet) {
    feet(box_width, box_depth, 2, 1.5);
}

// Add lid if enabled (displayed above for clarity)
if (include_lid) {
    translate([0, 0, box_height + 3])
        lid(box_width, box_depth, wall_thickness, 0.5);
}

// ============================================
// USAGE TIPS
// ============================================
// 1. Change top-level parameters to regenerate designs quickly
// 2. Toggle include_lid and include_feet to test variations
// 3. Adjust corner_radius for different aesthetic styles
// 4. Export at different scales for prototyping
// 5. Combine multiple parametric modules for complex designs
