// Module Design Pattern Template
// Demonstrates best practices for organizing code with reusable modules
// Modules promote code reuse, clarity, and maintainability

// ============================================
// CONFIGURATION SECTION
// ============================================

$fn = 32;

// Component dimensions
connectordiameter = 8;
connectorlength = 15;
connectorwall = 1.5;

basesize = 50;
baseheight = 5;

// ============================================
// UTILITY MODULES (General Purpose)
// ============================================

// Create a hollow cylinder (tube/connector)
module hollowcylinder(od, id, height) {
    difference() {
        cylinder(h = height, d = od, center = true);
        cylinder(h = height + 1, d = id, center = true);
    }
}

// Create a flat base/mounting plate
module flatbase(size, thickness) {
    cube([size, size, thickness], center = true);
}

// Create corner supports for strengthening
module cornersupport(size, height) {
    linearextrude(height = height, center = true)
        polygon(points = [[0, 0], [size, 0], [0, size]]);
}

// ============================================
// SPECIFIC COMPONENT MODULES
// ============================================

// Connector with internal thread pattern (for joining parts)
module connectorwiththreads(od, id, length, threads) {
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
module couplingjoint(connectorod, connectorid, couplelength) {
    cylinder(h = couplelength, d = connectorod, center = true);
}

// Base with mounting holes
module basewithholes(size, thickness, holediameter, holespacing) {
    difference() {
        // Solid base
        flatbase(size, thickness);
        
        // Subtract mounting holes
        for (x = [-holespacing/2, holespacing/2]) {
            for (y = [-holespacing/2, holespacing/2]) {
                translate([x, y, 0])
                    cylinder(h = thickness + 1, d = holediameter, center = true);
            }
        }
    }
}

// ============================================
// ASSEMBLY MODULES (Combine Components)
// ============================================

// Basic assembly: base + connector
module simpleconnectorassembly(basesz, baseh, connod, connid, connlen) {
    // Base plate
    flatbase(basesz, baseh);
    
    // Connector mounted vertically
    translate([0, 0, baseh/2 + connlen/2])
        hollowcylinder(connod, connid, connlen);
}

// Complex assembly with multiple connectors
module multiconnectorassembly(basesz, baseh, spacing) {
    // Central base
    basewithholes(basesz, baseh, 2, spacing * 0.8);
    
    // Mounted connectors at four corners
    for (x = [-spacing/2, spacing/2]) {
        for (y = [-spacing/2, spacing/2]) {
            translate([x, y, baseh/2 + connectorlength/2])
                connectorwiththreads(connectordiameter, 
                                      connectordiameter - 2*connectorwall, 
                                      connectorlength, 
                                      6);
        }
    }
}

// ============================================
// OUTPUT SECTION
// ============================================

// Choose which assembly to render:

// Option 1: Simple assembly
// simpleconnectorassembly(basesize, baseheight, 
//                          connectordiameter, 
//                          connectordiameter - 2*connectorwall, 
//                          connectorlength);

// Option 2: Multi-connector assembly
multiconnectorassembly(basesize, baseheight, basesize * 0.7);

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
//    - Use descriptive names (hollowcylinder, not hc)
//    - Prefix related modules (base*, connector*)
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
