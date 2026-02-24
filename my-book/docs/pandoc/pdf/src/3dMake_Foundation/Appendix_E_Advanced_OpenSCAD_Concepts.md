[Header 2 ("3dmake_foundation-appendix_e_advanced_openscad_concepts", [], []) [Str "Appendix E: Advanced OpenSCAD Concepts"], Para [Str "This appendix covers specialized topics for experienced users seeking to tackle complex parametric designs. These are optional topics not required for foundational mastery but valuable for professional application development."], HorizontalRule, Header 3 ("topic-1-gears-and-mechanical-components", ["unnumbered", "unlisted"], []) [Str "Topic 1: Gears and Mechanical Components"], Para [Str "Gears are one of the most challenging parametric designs, requiring careful calculation of tooth geometry. Understanding gear mathematics enables creation of mechanical systems-power transmission, speed reduction, or precise positioning."], Header 4 ("gear-terminology", ["unnumbered", "unlisted"], []) [Str "Gear Terminology"], BulletList [[Plain [Strong [Str "Pitch Diameter (PD)"], Str ": The reference diameter for meshing calculations"]], [Plain [Strong [Str "Module"], Str ": PD divided by tooth count; determines tooth size"]], [Plain [Strong [Str "Pressure Angle"], Str ": Typically 20deg or 14.5deg; affects tooth shape and strength"]], [Plain [Strong [Str "Clearance"], Str ": Space between teeth to allow smooth meshing"]], [Plain [Strong [Str "Backlash"], Str ": Intentional gap to prevent binding at tolerance extremes"]]], Header 4 ("simple-involute-gear-algorithm", ["unnumbered", "unlisted"], []) [Str "Simple Involute Gear Algorithm"], CodeBlock ("", ["openscad"], []) "// Simplified gear with circular teeth (adequate for most 3D prints)

function gear_module(pitch_diameter, teeth_count) = pitch_diameter / teeth_count;


module simple_gear(pitch_diameter, teeth_count, bore_diameter, thickness) {

  module_m = gear_module(pitch_diameter, teeth_count);

  outer_diameter = pitch_diameter + 2 * module_m;

  tooth_angle = 360 / teeth_count;

  

  difference() {

    // Main gear body

    cylinder(r=outer_diameter/2, h=thickness, $fn=teeth_count*4);

    

    // Center bore

    cylinder(r=bore_diameter/2, h=thickness + 2);

  }

  

  // Add teeth as small protrusions

  for (i = [0:teeth_count-1]) {

    angle = i * tooth_angle;

    translate([

      (pitch_diameter/2 + module_m/2) * cos(angle),

      (pitch_diameter/2 + module_m/2) * sin(angle),

      0

    ])

      rotate([0, 0, angle])

        cube([module_m * 0.8, module_m, thickness], center=true);

  }

}


// Create meshing gear pair

module gear_pair_demo() {

  // Gear 1: 20 teeth, 40mm pitch diameter

  simple_gear(40, 20, 8, 10);

  

  // Gear 2: 30 teeth, positioned to mesh

  center_distance = (40 + 60) / 4;  // Sum of radii

  translate([center_distance, 0, 0])

    simple_gear(60, 30, 8, 10);

}


gear_pair_demo();

", Header 4 ("practical-application-servo-gearbox", ["unnumbered", "unlisted"], []) [Str "Practical Application: Servo Gearbox"], CodeBlock ("", ["openscad"], []) "// Parametric servo gearbox with 3:1 reduction

module servo_gearbox(motor_torque, reduction_ratio, bore_size) {

  // Input gear (motor)

  input_teeth = 12;

  input_pd = 30;

  

  // Output gear (load)

  output_teeth = input_teeth * reduction_ratio;

  output_pd = input_pd * reduction_ratio;

  

  // Gearbox housing

  housing_size = output_pd + 40;

  

  difference() {

    // Main box

    cube([housing_size, housing_size, 30]);

    

    // Interior chamber

    translate([20, 20, 5])

      cube([housing_size - 40, housing_size - 40, 25]);

  }

  

  // Mount input gear

  translate([housing_size/4, housing_size/2, 15]) {

    simple_gear(input_pd, input_teeth, bore_size, 15);

    

    // Motor coupling

    cylinder(r=bore_size/2, h=5);

  }

  

  // Mount output gear

  translate([3*housing_size/4, housing_size/2, 15])

    simple_gear(output_pd, output_teeth, bore_size, 15);

}


servo_gearbox(10, 3, 5);

", Header 4 ("belt-and-pulley-systems", ["unnumbered", "unlisted"], []) [Str "Belt and Pulley Systems"], CodeBlock ("", ["openscad"], []) "// Timing pulley with tooth grooves

module timing_pulley(bore_diameter, pitch_diameter, teeth_count, width) {

  module_m = pitch_diameter / teeth_count;

  tooth_height = module_m * 0.3;

  

  difference() {

    // Main pulley body

    cylinder(r=pitch_diameter/2 + tooth_height/2, h=width);

    

    // Center bore

    cylinder(r=bore_diameter/2, h=width + 2);

    

    // Tooth grooves

    for (i = [0:teeth_count-1]) {

      angle = i * (360 / teeth_count);

      rotate([0, 0, angle])

        translate([pitch_diameter/2, -module_m*0.3, 0])

          cube([module_m * 0.6, module_m * 0.6, width], center=true);

    }

  }

}


// Belt drive demonstration

module belt_drive_system() {

  // Motor pulley (input)

  timing_pulley(5, 20, 16, 10);

  

  // Load pulley (output) - positioned for belt routing

  translate([80, 0, 0])

    timing_pulley(5, 40, 32, 10);

}


belt_drive_system();

", HorizontalRule, Header 3 ("topic-2-batch-processing-and-statistical-analysis", ["unnumbered", "unlisted"], []) [Str "Topic 2: Batch Processing and Statistical Analysis"], Para [Str "Professional applications often generate many variants and need to analyze results. Batch processing enables systematic exploration of parameter spaces."], Header 4 ("parameter-sweep-generation", ["unnumbered", "unlisted"], []) [Str "Parameter Sweep Generation"], CodeBlock ("", ["openscad"], []) "// Generate models with all combinations of parameters


// Define parameter ranges

wall_thicknesses = [1, 1.5, 2, 2.5, 3];

part_sizes = [20, 30, 40, 50];

materials = [\"pla\", \"petg\", \"nylon\"];


// Theory: Generate 5 x 4 x 3 = 60 variants automatically

// In practice, export each to separate STL for analysis

", Header 4 ("statistical-summary-generation-script", ["unnumbered", "unlisted"], []) [Str "Statistical Summary Generation Script"], CodeBlock ("", ["bash"], []) "#!/bin/bash

# analyze_batch.sh - Analyze batch results statistically


OUTPUT_DIR=\"batch_results\"

REPORT_FILE=\"batch_analysis.csv\"


echo \"Part,Wall,Size,File_Size_KB,Est_Print_Time_min,Est_Weight_g\" > \"$REPORT_FILE\"


for wall in 1.0 1.5 2.0 2.5 3.0; do

  for size in 20 30 40 50; do

    # Generate model

    SCAD_FILE=\"part_${size}_wall${wall}.scad\"

    STL_FILE=\"$OUTPUT_DIR/${SCAD_FILE%.scad}.stl\"

    

    # Export to STL

    openscad -D \"part_size=$size\" -D \"wall=$wall\" \\

      -o \"$STL_FILE\" src/main.scad

    

    # Get file size

    FILE_SIZE=$(stat -c%s \"$STL_FILE\" 2>/dev/null | awk '{print $1/1024}')

    

    # Estimate print time (rough: 1 hour per MB)

    EST_TIME=$((FILE_SIZE / 1024 * 60))

    

    # Estimate weight (rough: 1g per MB for PLA)

    EST_WEIGHT=$((FILE_SIZE / 1024))

    

    # Log results

    echo \"part_${size}_wall${wall},$wall,$size,$FILE_SIZE,$EST_TIME,$EST_WEIGHT\" >> \"$REPORT_FILE\"

  done

done


echo \"Analysis complete. Results in $REPORT_FILE\"

", Header 4 ("data-driven-design-selection", ["unnumbered", "unlisted"], []) [Str "Data-Driven Design Selection"], CodeBlock ("", ["openscad"], []) "// Load results and select optimal configuration

// wall=2.0mm gives best balance of strength/weight for most sizes


function optimal_configuration(target_size, priority) =

  priority == \"strength\" ? 3.0 :

  priority == \"speed\" ? 1.0 :

  priority == \"balanced\" ? 2.0 :

  2.0;  // Default


module batch_optimized_part(size, priority) {

  wall = optimal_configuration(size, priority);

  

  echo(str(\"Generating optimized part: size=\", size, \" wall=\", wall, \" priority=\", priority));

  

  // Create part with optimal parameters

  difference() {

    cube([size, size, size]);

    translate([wall, wall, wall])

      cube([size - 2*wall, size - 2*wall, size]);

  }

}


// Generate three variants with different priorities

batch_optimized_part(40, \"strength\");    // thickest walls

translate([60, 0, 0]) batch_optimized_part(40, \"speed\");    // thinnest walls

translate([120, 0, 0]) batch_optimized_part(40, \"balanced\"); // medium walls

", HorizontalRule, Header 3 ("topic-3-performance-optimization", ["unnumbered", "unlisted"], []) [Str "Topic 3: Performance Optimization"], Para [Str "Complex models can take hours to render. Strategic optimization keeps iteration cycles fast."], Header 4 ("measuring-render-performance", ["unnumbered", "unlisted"], []) [Str "Measuring Render Performance"], CodeBlock ("", ["bash"], []) "# Time how long rendering takes

time openscad -o output.stl -D \"quality=32\" src/main.scad

# Output: real 5m 32s, user 5m 28s, sys 0m 2s

", Header 4 ("resolution-parameter-strategy", ["unnumbered", "unlisted"], []) [Str "Resolution Parameter Strategy"], CodeBlock ("", ["openscad"], []) "// Use lower resolution during development, high during export


quality = $preview ? 16 : 64;  // 16 segments in preview, 64 in export


module efficient_sphere(radius) {

  sphere(r=radius, $fn=quality);

}


// In array operations, efficiency matters most

module circular_array(radius, count) {

  for (i = [0:count-1]) {

    angle = (360 / count) * i;

    x = radius * cos(angle);

    y = radius * sin(angle);

    translate([x, y, 0])

      efficient_sphere(5);  // Uses quality parameter

  }

}


circular_array(30, 100);  // 100 spheres: slow with quality=64!

", Header 4 ("cache-complex-calculations", ["unnumbered", "unlisted"], []) [Str "Cache Complex Calculations"], CodeBlock ("", ["openscad"], []) "// Pre-compute expensive calculations outside loops


// SLOW: Recalculates sin/cos for every iteration

module slow_spiral() {

  for (i = [0:200]) {

    angle = i * 2;

    x = 40 * cos(angle);

    y = 40 * sin(angle);

    z = i * 0.5;

    translate([x, y, z])

      sphere(r=1);

  }

}


// FAST: Pre-compute positions, then use them

spiral_positions = [for (i = [0:200]) [

  40 * cos(i * 2),

  40 * sin(i * 2),

  i * 0.5

]];


module fast_spiral() {

  for (pos = spiral_positions)

    translate(pos)

      sphere(r=1);

}


// Use the fast version

fast_spiral();

", Header 4 ("simplification-during-preview", ["unnumbered", "unlisted"], []) [Str "Simplification During Preview"], CodeBlock ("", ["openscad"], []) "// Complex model that simplifies in preview mode


module detailed_model() {

  if ($preview) {

    // Simplified version for fast preview

    cube([100, 100, 50]);

  } else {

    // Detailed version for export

    difference() {

      cube([100, 100, 50]);

      

      // Complex inner geometry

      for (x = [10:10:90])

        for (y = [10:10:90])

          translate([x, y, 20])

            cylinder(h=15, d=3, $fn=32);

    }

  }

}


detailed_model();

", Header 4 ("profile-driven-optimization", ["unnumbered", "unlisted"], []) [Str "Profile-Driven Optimization"], CodeBlock ("", ["bash"], []) "#!/bin/bash

# profile_render.sh - Identify slow rendering hotspots


echo \"Profiling render performance...\"


for fn_value in 8 16 32 64 128; do

  echo \"\"

  echo \"Testing with \\$fn=$fn_value...\"

  

  /usr/bin/time -v openscad -D \"fn=$fn_value\" \\

    -o test_$fn_value.stl src/main.scad 2>&1 | \\

    grep \"Maximum resident set size\"

done

", HorizontalRule, Header 3 ("topic-4-print-orientation-and-support-structure-algorithms", ["unnumbered", "unlisted"], []) [Str "Topic 4: Print Orientation and Support Structure Algorithms"], Para [Str "Strategic orientation dramatically affects support material, print time, and surface quality."], Header 4 ("strength-orientation-analysis", ["unnumbered", "unlisted"], []) [Str "Strength Orientation Analysis"], CodeBlock ("", ["openscad"], []) "// Different orientations affect strength differently


// SCENARIO: Bracket with cantilever load

module bracket() {

  difference() {

    cube([50, 100, 10]);

    translate([25, 50, 5]) cylinder(r=5, h=10);

  }

}


// Orientation A: Lay flat (XY plane) - WEAK for cantilever

echo(\"Orientation A: Flat - Low strength for cantilever\");

bracket();


// Orientation B: Stand tall (Z axis) - STRONG for cantilever

translate([70, 0, 0]) {

  echo(\"Orientation B: Tall - High strength for cantilever\");

  rotate([90, 0, 0]) bracket();

}


// Orientation C: Diagonal - MODERATE strength

translate([0, 150, 0]) {

  echo(\"Orientation C: Diagonal - Moderate strength\");

  rotate([45, 0, 0]) bracket();

}

", Header 4 ("support-material-minimization", ["unnumbered", "unlisted"], []) [Str "Support Material Minimization"], CodeBlock ("", ["openscad"], []) "// Design features to reduce supports needed


// POOR: Overhanging feature needs extensive supports

module poor_design() {

  cube([50, 50, 50]);

  translate([25, 25, 50])

    cube([30, 30, 10]);  // 30mm overhang!

}


// GOOD: Bridge angle keeps overhang under 45deg

module good_design() {

  cube([50, 50, 50]);

  

  // Add ramp instead of overhang

  translate([20, 20, 50])

    rotate([20, 0, 0])

      cube([30, 30, 10]);

}


// Compare

poor_design();

translate([80, 0, 0])

  good_design();

", Header 4 ("bridge-span-calculation", ["unnumbered", "unlisted"], []) [Str "Bridge Span Calculation"], CodeBlock ("", ["openscad"], []) "// Calculate maximum unsupported span for given material/settings


function max_bridge_span(material) =

  material == \"pla\" ? 10 :

  material == \"petg\" ? 12 :

  material == \"nylon\" ? 15 :

  material == \"abs\" ? 8 :

  10;  // Default


module bridged_connector(material, gap_width) {

  max_span = max_bridge_span(material);

  

  if (gap_width <= max_span) {

    echo(str(\"Bridge OK: gap \", gap_width, \"mm fits within \", max_span, \"mm limit\"));

    

    // Create part with bridge

    union() {

      cube([50, 10, 10]);  // Side A

      translate([gap_width, 0, 0])

        cube([50, 10, 10]);  // Side B

      

      // Bridge connecting them

      translate([0, 5, 10])

        cube([gap_width + 100, 2, 1]);

    }

  } else {

    echo(str(\"ERROR: gap \", gap_width, \"mm exceeds \", max_span, \"mm max bridge span\"));

  }

}


bridged_connector(\"pla\", 8);      // OK: 8 < 10

// bridged_connector(\"pla\", 15);  // ERROR: 15 > 10

", Header 4 ("slicing-parameter-calculation", ["unnumbered", "unlisted"], []) [Str "Slicing Parameter Calculation"], CodeBlock ("", ["openscad"], []) "// Calculate optimal slicing parameters based on geometry


function recommended_layer_height(nozzle_diameter, quality_priority) =

  quality_priority == \"fast\" ? nozzle_diameter * 0.75 :

  quality_priority == \"balanced\" ? nozzle_diameter * 0.5 :

  quality_priority == \"detailed\" ? nozzle_diameter * 0.25 :

  nozzle_diameter * 0.5;


function recommended_infill(structural_load, safety_factor) =

  structural_load < 1 ? 10 :    // Decorative: minimal fill

  structural_load < 5 ? 20 :    // Light duty: low fill

  structural_load < 20 ? 50 :   // Medium duty: standard fill

  100;                           // High duty: solid


module optimized_part(

  nozzle_0p4,

  quality_priority,

  structural_load,

  safety_factor

) {

  layer_h = recommended_layer_height(nozzle_0p4, quality_priority);

  infill_pct = recommended_infill(structural_load, safety_factor);

  

  echo(str(\"Recommended layer height: \", layer_h, \"mm\"));

  echo(str(\"Recommended infill: \", infill_pct, \"%\"));

  

  // Create part

  cube([50, 50, 30]);

}


optimized_part(0.4, \"detailed\", 15, 2);

", HorizontalRule, Header 3 ("topic-5-recursive-function-patterns", ["unnumbered", "unlisted"], []) [Str "Topic 5: Recursive Function Patterns"], Para [Str "Recursion enables elegant solutions to problems with self-similar structure: trees, fractals, nested components."], Header 4 ("basic-recursive-pattern", ["unnumbered", "unlisted"], []) [Str "Basic Recursive Pattern"], CodeBlock ("", ["openscad"], []) "// Tree structure: branches recursively smaller


function tree_depth(level) = level > 0 ? level + tree_depth(level - 1) : 0;


// Calculate: tree_depth(5) = 5 + 4 + 3 + 2 + 1 = 15

result = tree_depth(5);

echo(result);  // Prints: 15


// Recursive tree drawing

module tree_branch(length, angle, recursion_depth) {

  if (recursion_depth > 0) {

    // Draw this branch

    rotate([angle, 0, 0])

      cube([2, 2, length]);

    

    // Recursively draw sub-branches

    translate([0, 0, length])

      rotate([-angle/2, 0, 0])

        tree_branch(length * 0.7, angle, recursion_depth - 1);

    

    translate([0, 0, length])

      rotate([angle/2, 0, 0])

        tree_branch(length * 0.7, angle, recursion_depth - 1);

  }

}


tree_branch(30, 25, 4);  // Tree with 4 levels of recursion

", Header 4 ("fractal-generation", ["unnumbered", "unlisted"], []) [Str "Fractal Generation"], CodeBlock ("", ["openscad"], []) "// Sierpinski Triangle fractal


function sierpinski_triangle(size, depth) =

  depth == 0 ?

    [[0, 0], [size, 0], [size/2, size * sqrt(3)/2]] :

    // Recursive case: three smaller triangles at corners

    concat(

      sierpinski_triangle(size/2, depth - 1),

      sierpinski_triangle(size/2, depth - 1),

      sierpinski_triangle(size/2, depth - 1)

    );


// Create 3D fractal structure

module fractal_spiral(base_size, depth, height_per_level) {

  if (depth > 0) {

    // Create current level

    cube([base_size, base_size, 5], center=true);

    

    // Recursively create smaller level on top

    translate([0, 0, height_per_level])

      scale([0.6, 0.6, 1])

        fractal_spiral(base_size, depth - 1, height_per_level);

  }

}


fractal_spiral(40, 5, 10);  // 5-level spiral

", Header 4 ("nested-component-assembly", ["unnumbered", "unlisted"], []) [Str "Nested Component Assembly"], CodeBlock ("", ["openscad"], []) "// Russian doll boxes: each box contains a smaller copy


module russian_doll(size, wall, nesting_depth) {

  if (nesting_depth > 0) {

    // Current level: hollow box

    difference() {

      cube([size, size, size]);

      translate([wall, wall, wall])

        cube([size - 2*wall, size - 2*wall, size - wall]);

    }

    

    // Recursively place next smaller doll inside

    interior_size = size - 4*wall;

    translate([2*wall, 2*wall, wall])

      russian_doll(interior_size, wall, nesting_depth - 1);

  } else {

    // Smallest doll (solid)

    cube([size, size, size]);

  }

}


russian_doll(60, 2, 4);  // 4 nested boxes

", Header 4 ("performance-considerations", ["unnumbered", "unlisted"], []) [Str "Performance Considerations"], CodeBlock ("", ["openscad"], []) "// Recursion can be expensive - monitor depth


// EFFICIENT: Tail recursion (result computed immediately)

function sum_to(n, accumulator) =

  n == 0 ? accumulator :

  sum_to(n - 1, accumulator + n);


result = sum_to(100, 0);  // Computes: 5050


// INEFFICIENT: Deep recursion without optimization

function fibonacci(n) =

  n <= 1 ? n :

  fibonacci(n-1) + fibonacci(n-2);


// fibonacci(20) recalculates sub-problems thousands of times

// Don't use for depth > 20 without memoization


// BETTER: Use iteration where possible

function fibonacci_iter(n) =

  let(

    fib = [for (i = [0:n])

      i <= 1 ? i :

      let(prev = [for (j = [0:i-1]) i==j ? 1 : i==j+1 ? 0 : 0])

        1  // Placeholder

    ]

  ) fib[n];

", Header 4 ("practical-example-cable-management", ["unnumbered", "unlisted"], []) [Str "Practical Example: Cable Management"], CodeBlock ("", ["openscad"], []) "// Recursive cable tray with branching paths


module cable_tray(width, depth, height, levels, branch_angle) {

  if (levels > 0) {

    // Main tray section

    difference() {

      cube([width, depth, height]);

      translate([2, 2, 2])

        cube([width - 4, depth - 4, height - 2]);

    }

    

    // Left branch (recursively smaller)

    translate([-width/2, 0, height])

      rotate([0, 0, -branch_angle])

        cable_tray(width * 0.6, depth, height, levels - 1, branch_angle);

    

    // Right branch

    translate([width/2, 0, height])

      rotate([0, 0, branch_angle])

        cable_tray(width * 0.6, depth, height, levels - 1, branch_angle);

  }

}


cable_tray(40, 10, 5, 3, 30);  // 3-level branching cable tray

", HorizontalRule, Header 3 ("summary-when-to-use-each-advanced-technique", ["unnumbered", "unlisted"], []) [Str "Summary: When to Use Each Advanced Technique"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.2988505747126437)), (AlignDefault, (ColWidth 0.3563218390804598)), (AlignDefault, (ColWidth 0.13793103448275862)), (AlignDefault, (ColWidth 0.20689655172413793))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Technique"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use Case"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Complexity"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Performance"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Gears"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Mechanical power transmission"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "High"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Batch Processing"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Design space exploration"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Depends on scope"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Performance Optimization"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reducing render time"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "High payoff"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Orientation Analysis"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Strength optimization"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Medium"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Simulation cost"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Recursion"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fractal/nested structures"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "High"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Can be expensive"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 3 ("references-and-further-learning", ["unnumbered", "unlisted"], []) [Str "References and Further Learning"], BulletList [[Plain [Str "OpenSCAD Documentation - Advanced Features: https://en.wikibooks.org/wiki/OpenSCAD_User_Manual"]], [Plain [Str "Gear Design Theory: https://www.mekanizmalar.com/"]], [Plain [Str "3D Print Orientation Optimization: https://stratasys.com/"]], [Plain [Str "Fractal Geometry: https://en.wikipedia.org/wiki/Fractal"]], [Plain [Str "Recursive Algorithms: https://www.khanacademy.org/computing/computer-science/algorithms"]]], HorizontalRule, Para [Strong [Str "For Educators and Students"]], Para [Str "These advanced topics are intended for:"], BulletList [[Plain [Str "Experienced users tackling professional applications"]], [Plain [Str "Specialized problem domains (robotics, mechanical design, etc.)"]], [Plain [Str "Research and optimization work"]], [Plain [Str "Custom library and framework development"]]], Para [Str "For accessibility:"], BulletList [[Plain [Str "All recursive examples include base cases clearly marked"]], [Plain [Str "Each section provides simplified versions before advanced variants"]], [Plain [Str "Code comments explain both \"what\" and \"why\""]], [Plain [Str "Practical examples show real-world applications"]], [Plain [Str "Performance considerations documented to prevent frustration"]]], Para [Strong [Str "Contributing"]], Para [Str "If you have additional advanced techniques or optimizations, please contribute via the GitHub repository."]]