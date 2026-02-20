// Module Design Pattern Template
// Demonstrates best practices for organizing code with reusable modules
// Modules promote code reuse, clarity, and maintainability

// ============================================
// CONFIGURATION SECTION
// ============================================

$fn = 32;

// Component dimensions
connector_diameter = 8;
connector_length = 15;
connector_wall = 1.5;

base_size = 50;
base_height = 5;

// ============================================
// UTILITY MODULES (General Purpose)
// ============================================

// Create a hollow cylinder (tube/connector)
module hollow_cylinder(od, id, height) {
    difference() {
        cylinder(h = height, d = od, center = true);
        cylinder(h = height + 1, d = id, center = true);
    }
}

// Create a flat base/mounting plate
module flat_base(size, thickness) {
    cube([size, size, thickness], center = true);
}

// Create corner supports for strengthening
module corner_support(size, height) {
    linear_extrude(height = height, center = true)
        polygon(points = [[0, 0], [size, 0], [0, size]]);
}

// ============================================
// SPECIFIC COMPONENT MODULES
// ============================================

// Connector with internal thread pattern (for joining parts)
module connector_with_threads(od, id, length, threads) {
    difference() {
        // Main connector body
        cylinder(h = length, d = od, center = true);
        
        // Hollow core
        cylinder(h = length + 1, d = id, center = true);
        
        // Thread pattern (decorative/functional grooves)
        for (i = [0 : threads - 1]) {
            rotate([0, 0, (360 / threads) * i])
                translate([od/2 - 0.5, 0, 0])
                    cube([1, 0.5, length + 1], center = true);
        }
    }
}

// Joint/coupling to connect two parts
module coupling_joint(connector_od, connector_id, couple_length) {
    cylinder(h = couple_length, d = connector_od, center = true);
}

// Base with mounting holes
module base_with_holes(size, thickness, hole_diameter, hole_spacing) {
    difference() {
        // Solid base
        flat_base(size, thickness);
        
        // Subtract mounting holes
        for (x = [-hole_spacing/2, hole_spacing/2]) {
            for (y = [-hole_spacing/2, hole_spacing/2]) {
                translate([x, y, 0])
                    cylinder(h = thickness + 1, d = hole_diameter, center = true);
            }
        }
    }
}

// ============================================
// ASSEMBLY MODULES (Combine Components)
// ============================================

// Basic assembly: base + connector
module simple_connector_assembly(base_sz, base_h, conn_od, conn_id, conn_len) {
    // Base plate
    flat_base(base_sz, base_h);
    
    // Connector mounted vertically
    translate([0, 0, base_h/2 + conn_len/2])
        hollow_cylinder(conn_od, conn_id, conn_len);
}

// Complex assembly with multiple connectors
module multi_connector_assembly(base_sz, base_h, spacing) {
    // Central base
    base_with_holes(base_sz, base_h, 2, spacing * 0.8);
    
    // Mounted connectors at four corners
    for (x = [-spacing/2, spacing/2]) {
        for (y = [-spacing/2, spacing/2]) {
            translate([x, y, base_h/2 + connector_length/2])
                connector_with_threads(connector_diameter, 
                                      connector_diameter - 2*connector_wall, 
                                      connector_length, 
                                      6);
        }
    }
}

// ============================================
// OUTPUT SECTION
// ============================================

// Choose which assembly to render:

// Option 1: Simple assembly
// simple_connector_assembly(base_size, base_height, 
//                          connector_diameter, 
//                          connector_diameter - 2*connector_wall, 
//                          connector_length);

// Option 2: Multi-connector assembly
multi_connector_assembly(base_size, base_height, base_size * 0.7);

// ============================================
// MODULE DESIGN BEST PRACTICES
// ============================================
// 1. Utility Modules: General-purpose shapes
//    - Reusable across many projects
//    - Keep parameters generic
//
// 2. Component Modules: Specific parts
//    - Build on utility modules
//    - Include feature-specific logic
//
// 3. Assembly Modules: Combine components
//    - Use positioning and transforms
//    - Organize parts spatially
//
// 4. Naming Conventions:
//    - Use descriptive names (hollow_cylinder, not hc)
//    - Prefix related modules (base_*, connector_*)
//
// 5. Parameter Guidelines:
//    - Put adjustable values at top
//    - Use meaningful default values
//    - Document parameter purposes
//
// 6. Code Organization:
//    - Group related modules
//    - Start with utilities, end with assemblies
//    - Use comments to separate sections
