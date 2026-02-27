[Header 2 ("3dmake_foundation_lessons_3dmake_7-lessons_3dmake_7", [], []) [Str "Lesson 7: Parametric Transforms and the Phone Stand Project"], Para [Str "Estimated time: 105-135 minutes"], Para [Str "Learning Objectives"], BulletList [[Plain [Str "Use parametric transforms (", Code ("", [], []) "rotate()", Str ", ", Code ("", [], []) "translate()", Str ", ", Code ("", [], []) "scale()", Str ") to position and orient sub-assemblies", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]]]], [Plain [Str "Apply the Minkowski operation as a method for creating filleted edges", Note [Para [Str "OpenSCAD Manual - Minkowski - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski", "")]]]], [Plain [Str "Create multi-part assemblies where each component serves a distinct structural function", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]]]], [Plain [Str "Test and validate parametric variations before printing", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]]]]], Para [Str "Materials"], BulletList [[Plain [Str "3dMake project scaffold with ", Code ("", [], []) "src/main.scad"]], [Plain [Str "Access to a printer or slicing software"]], [Plain [Str "Measuring tools (calipers) for post-print validation"]]], Para [Str "Related Project: Study ", Link ("", [], []) [Str "phone_stand.scad"] ("docs/pandoc/latex/src/assets/3dMake_Foundation/Lessons_3dMake_7/phone_stand.scad", ""), Str " for an advanced example combining multiple transforms and Minkowski operations in a real-world assembly."], Header 3 ("understanding-parametric-transforms", ["unnumbered", "unlisted"], []) [Str "Understanding Parametric Transforms"], Para [Str "Transforms are the foundation of positioning objects in 3D space. Unlike drag-and-drop interfaces, OpenSCAD requires you to explicitly specify every position and rotation. This precision is what enables parametric design-once defined mathematically, a model can be infinitely reconfigured."], Header 4 ("core-transform-operations", ["unnumbered", "unlisted"], []) [Str "Core Transform Operations"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.23076923076923078)), (AlignDefault, (ColWidth 0.3153846153846154)), (AlignDefault, (ColWidth 0.45384615384615384))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Operation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Syntax"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Translate (move)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "translate([x, y, z]) { ... }"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "translate([10, 0, 0]) cube([5, 5, 5]);"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Rotate"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "rotate([x_deg, y_deg, z_deg]) { ... }"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "rotate([45, 0, 0]) cube([5, 5, 5]);"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Scale"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "scale([x, y, z]) { ... }"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "scale([2, 1, 1]) cube([5, 5, 5]);"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Minkowski (fillets/rounding)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "minkowski() { shape; fillet; }"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "minkowski(){ cube([10,10,10]); cylinder(r=2, h=0.01); }"]]]])] (TableFoot ("", [], []) []), Header 4 ("translating-objects-moving-in-3d-space", ["unnumbered", "unlisted"], []) [Str "Translating Objects: Moving in 3D Space"], Para [Code ("", [], []) "translate([x, y, z])", Str " moves an object in three-dimensional space. The key insight is that you specify the movement ", Emph [Str "before"], Str " creating or referencing the object:"], CodeBlock ("", ["openscad"], []) "// Move a cube 30 mm to the right
translate([30, 0, 0]) cube([20, 20, 20]);
// Move it up by 10 mm
translate([0, 0, 10]) cube([20, 20, 20]);
// Move it diagonally (right and forward)
translate([30, 20, 0]) cube([20, 20, 20]);
", Para [Str "A critical concept: When you use ", Code ("", [], []) "translate()", Str ", OpenSCAD moves the ", Emph [Str "coordinate system"], Str ", not just the object. The object is then created in the new coordinate system. This means:"], CodeBlock ("", ["openscad"], []) "// These are functionally equivalent:
translate([10, 0, 0]) cube([20, 20, 20]);
cube([20, 20, 20]);
translate([10, 0, 0]) cube([20, 20, 20]);  // Second cube shifted right
", Para [Str "For multi-part assemblies, you typically nest ", Code ("", [], []) "translate()", Str " calls within modules:"], CodeBlock ("", ["openscad"], []) "module phone_stand() {
  // Base stays at origin
  base();
  // Back support is translated up and back
  translate([0, -30, base_thickness])
    rotate([65, 0, 0])
      back_support();
}
", Header 4 ("rotating-objects-orientation-around-axes", ["unnumbered", "unlisted"], []) [Str "Rotating Objects: Orientation Around Axes"], Para [Code ("", [], []) "rotate([x_deg, y_deg, z_deg])", Str " rotates an object around the X, Y, and Z axes (in degrees):"], CodeBlock ("", ["openscad"], []) "// Rotate 45 around X axis (tilts forward/back)
rotate([45, 0, 0]) cube([10, 10, 10]);
// Rotate 90 around Y axis (rotates left/right)
rotate([0, 90, 0]) cube([10, 10, 10]);
// Rotate 45 around Z axis (spins in place)
rotate([0, 0, 45]) cube([10, 10, 10]);
// Rotate around all three axes
rotate([45, 30, 15]) cube([10, 10, 10]);
", Para [Str "Order matters: When you specify multiple rotations, they are applied in sequence (X, then Y, then Z). This can produce unexpected results:"], CodeBlock ("", ["openscad"], []) "// These produce different final orientations:
rotate([45, 90, 0]) cube([10, 10, 10]);
rotate([90, 45, 0]) cube([10, 10, 10]);
", Header 4 ("combining-transforms-the-order-of-operations", ["unnumbered", "unlisted"], []) [Str "Combining Transforms: The Order of Operations"], Para [Str "You can nest transforms to build complex positions. Remember: OpenSCAD applies transforms from the inside out:"], CodeBlock ("", ["openscad"], []) "// Example: Position a cylinder so it sticks up from the back of a base
// Step 1: Create a cylinder at the origin
cylinder(r=5, h=20, $fn=32);
// Step 2: Translate it to the right spot
translate([0, 0, base_thickness])
  cylinder(r=5, h=20, $fn=32);
// Step 3: In a module, combine positioning
module mounting_peg() {
  translate([base_width/2, base_depth - 10, base_thickness])
    cylinder(r=5, h=20, $fn=32);
}
// Inside a phone_stand() assembly:
mounting_peg();
", Header 4 ("practical-tip-coordinate-system-visualization", ["unnumbered", "unlisted"], []) [Str "Practical Tip: Coordinate System Visualization"], Para [Str "When working with complex assemblies, it helps to visualize the coordinate system:"], CodeBlock ("", ["openscad"], []) "// Small axes indicator (add to your design temporarily for debugging):
module axes() {
  color(\"red\") cube([20, 1, 1]);     // X axis (red)
  color(\"green\") cube([1, 20, 1]);   // Y axis (green)
  color(\"blue\") cube([1, 1, 20]);    // Z axis (blue)
}
// Place it at key points to verify positioning:
axes();
translate([100, 0, 0]) axes();  // Check alignment at offset
", Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("task-1-build-a-simple-phone-stand-base", ["unnumbered", "unlisted"], []) [Str "Task 1: Build a Simple Phone Stand Base"], Para [Str "Create a parametric base plate that can be adjusted for different phone weights and sizes:"], CodeBlock ("", ["openscad"], []) "// Phone Stand - Base Component
// Adjustable platform for holding phones and tablets
// === TOP-LEVEL PARAMETERS (customize these) ===
base_width = 70;    // mm - front-to-back width
base_depth = 90;    // mm - side-to-side depth
base_thickness = 4; // mm - thickness of base
angle = 65;         // degrees - tilt angle
lip_height = 12;    // mm - height of friction lip
fillet_r = 6;       // mm - edge rounding radius
// === MODULES ===
// Simple rectangular plate
module plate(w, d, t) {
  cube([w, d, t], center=false);
}
// Fillet edges using Minkowski sum (approximation)
module filleted_plate(w, d, t, r) {
  minkowski() {
    plate(w, d, t);
    cylinder(h=0.01, r=r, $fn=40);
  }
}
// Base of the stand
module base() {
  translate([0, 0, 0])
    filleted_plate(base_width, base_depth, base_thickness, fillet_r);
}
// Back support angled for viewing
module back() {
  // Rotate the plate to create the angle
  rotate([angle, 0, 0])
    filleted_plate(base_width, base_depth, base_thickness, fillet_r);
}
// Friction lip to prevent phone from sliding
module lip() {
  translate([0, base_depth - 8, base_thickness])
    cube([base_width, 8, lip_height], center=false);
}
// === ASSEMBLE ===
union() {
  base();
  back();
  lip();
}
", Header 4 ("task-2-test-parameter-variations", ["unnumbered", "unlisted"], []) [Str "Task 2: Test Parameter Variations"], Para [Str "Save your file and test each variant by modifying the parameters and running ", Code ("", [], []) "3dm build", Str ":"], CodeBlock ("", ["bash"], []) "# Build the base version
3dm build

# Then try modifying angle in main.scad and rebuild
# angle = 45;  // Shallow angle for viewing documents
# 3dm build

# Or try a steep angle for portrait viewing
# angle = 75;  // Steep for reading
# 3dm build
", Para [Str "Document the impact:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.1506849315068493)), (AlignDefault, (ColWidth 0.0958904109589041)), (AlignDefault, (ColWidth 0.589041095890411)), (AlignDefault, (ColWidth 0.1643835616438356))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parameter"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Value"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use Case"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Print Time"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "angle"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "45"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Shallow viewing (documents, web browsing)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "~", Str "1.5 hrs"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "angle"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "65"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Comfortable video watching"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "~", Str "1.5 hrs"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "angle"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "75"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Steep vertical viewing"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "~", Str "1.5 hrs"]]]])] (TableFoot ("", [], []) []), Header 4 ("task-3-run-3dm-orient-to-optimize-orientation", ["unnumbered", "unlisted"], []) [Str "Task 3: Run ", Code ("", [], []) "3dm orient", Str " to Optimize Orientation"], CodeBlock ("", ["bash"], []) "3dm orient src/main.scad
", Para [Str "This command analyzes your model and suggests:"], BulletList [[Plain [Str "Optimal rotation for minimal support material"]], [Plain [Str "Estimated support volume that will need to be removed"]], [Plain [Str "Print time savings from better orientation"]]], Header 4 ("task-4-generate-variants-for-different-devices", ["unnumbered", "unlisted"], []) [Str "Task 4: Generate Variants for Different Devices"], Para [Str "Modify your main.scad to create three configurations (tablet, phone, document holder):"], CodeBlock ("", ["openscad"], []) "// At the bottom of main.scad, uncomment one configuration:
// Configuration 1: Phone (narrow, shallow angle)
// base_width = 60;
// angle = 55;
// Configuration 2: Tablet (wide, moderate angle)
base_width = 120;
angle = 40;
// Configuration 3: Document (wide, steep angle)
// base_width = 200;
// angle = 20;
", Header 4 ("task-5-validate-and-document", ["unnumbered", "unlisted"], []) [Str "Task 5: Validate and Document"], Para [Str "After printing (or slicing), record:"], BulletList [[Plain [Str "Actual dimensions (measure with calipers)"]], [Plain [Str "Angle accuracy (verify tilt angle with protractor or phone measurement app)"]], [Plain [Str "Friction resistance (does phone stay in place?)"]], [Plain [Str "Print quality (note any support marks, layer quality)"]]], Header 3 ("advanced-adding-snap-fit-connectors", ["unnumbered", "unlisted"], []) [Str "Advanced: Adding Snap-Fit Connectors"], Para [Str "To join the base and back without fasteners, you can add interlocking features:"], CodeBlock ("", ["openscad"], []) "// Optional: Add snap-fit connectors
// Slot in base plate (where back plate slides in)
module base_slot() {
  slot_width = base_thickness + 0.5;  // Slight clearance
  slot_depth = 20;
  translate([base_width/2 - slot_width/2, 0, base_thickness])
    cube([slot_width, slot_depth, lip_height]);
}
// Tab on back plate (fits into base slot)
module back_tab() {
  tab_width = base_thickness;
  tab_height = lip_height;
  translate([base_width/2 - tab_width/2, 0, 0])
    cube([tab_width, 20, tab_height]);
}
", Header 3 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After task 1, you have a working 3-part stand (base, back, lip)"]], [Plain [Str "After task 2, you've tested at least 2 parameter variations"]], [Plain [Str "After task 4, you have 3 different configurations ready to print"]]], Header 3 ("mathematical-functions-for-advanced-parametric-design", ["unnumbered", "unlisted"], []) [Str "Mathematical Functions for Advanced Parametric Design"], Para [Str "Beyond translate and rotate, OpenSCAD includes mathematical functions for calculating positions, angles, and dimensions. These enable designs that respond dynamically to parameters."], Header 4 ("trigonometric-functions-sin-cos-atan2", ["unnumbered", "unlisted"], []) [Str "Trigonometric Functions: sin(), cos(), atan2()"], Para [Str "Trigonometric functions calculate angles and positions in circular patterns. Essential for gears, spirals, and polar arrangements:"], CodeBlock ("", ["openscad"], []) "// Place objects in circular pattern using sin/cos
module circular_array(radius, count) {
  for (i = [0:count-1]) {
    angle = (360 / count) * i;
    x = radius * cos(angle);
    y = radius * sin(angle);
    translate([x, y, 0])
      children();
  }
}
// Create circular array of 8 cylinders
circular_array(30, 8)
  cylinder(h=10, r=3);
// Spiral staircase using sin/cos
module spiral_staircase(radius, height, steps) {
  step_height = height / steps;
  step_angle = 360 / steps;
  for (i = [0:steps-1]) {
    angle = i * step_angle;
    z = i * step_height;
    x = radius * cos(angle);
    y = radius * sin(angle);
    translate([x, y, z])
      cube([20, 5, step_height]);
  }
}
spiral_staircase(40, 100, 20);
", Para [Str "Practical Example: Gear Tooth Positioning"], CodeBlock ("", ["openscad"], []) "// Simple gear using sin/cos for tooth placement
module simple_gear(radius, teeth_count, tooth_depth) {
  tooth_angle = 360 / teeth_count;
  difference() {
    // Main gear body
    cylinder(r=radius, h=5, $fn=128);
    // Center hole
    cylinder(r=radius*0.3, h=10);
  }
  // Add teeth using circular pattern
  for (i = [0:teeth_count-1]) {
    angle = i * tooth_angle;
    x = (radius + tooth_depth) * cos(angle);
    y = (radius + tooth_depth) * sin(angle);
    z = 5/2;
    translate([x, y, z])
      cube([5, 5, 5], center=true);
  }
}
simple_gear(30, 12, 5);  // 30mm radius, 12 teeth, 5mm deep
", Header 4 ("rounding-functions-round-floor-ceil", ["unnumbered", "unlisted"], []) [Str "Rounding Functions: round(), floor(), ceil()"], Para [Str "Control precision and create integer-based parametric designs:"], CodeBlock ("", ["openscad"], []) "// round(): Nearest integer
echo(round(3.7));    // Prints: 4
echo(round(3.2));    // Prints: 3
// floor(): Round down
echo(floor(3.9));    // Prints: 3
// ceil(): Round up
echo(ceil(3.1));     // Prints: 4
// Practical use: Ensure grid alignment
grid_spacing = 7.3;
aligned_spacing = round(grid_spacing);  // 7
", Para [Str "Practical Example: Grid-Aligned Mounting Pattern"], CodeBlock ("", ["openscad"], []) "// Create mounting pattern aligned to 5mm grid
module grid_mounting_pattern(width, height, pattern_spacing) {
  // Round spacing to nearest 5mm for printability
  aligned_spacing = round(pattern_spacing / 5) * 5;
  // Calculate how many holes fit
  holes_x = floor(width / aligned_spacing);
  holes_y = floor(height / aligned_spacing);
  echo(str(\"Creating grid: \", holes_x, \" x \", holes_y, \" at \", aligned_spacing, \"mm spacing\"));
  for (x = [0:holes_x-1])
    for (y = [0:holes_y-1])
      translate([x * aligned_spacing, y * aligned_spacing, -5])
        cylinder(h=15, d=3, $fn=16);
}
// Create pattern in 100x80mm area
grid_mounting_pattern(100, 80, 7.3);
", Header 4 ("power-and-root-functions-pow-sqrt", ["unnumbered", "unlisted"], []) [Str "Power and Root Functions: pow(), sqrt()"], Para [Str "Calculate exponential relationships and distances:"], CodeBlock ("", ["openscad"], []) "// pow(): Raise to power
echo(pow(2, 3));     // 2^3 = 8
echo(pow(10, 2));    // 10^2 = 100
// sqrt(): Square root
echo(sqrt(9));       // 3
echo(sqrt(2));       // 1.41421...
// Practical: Calculate distance between two points
function distance_2d(p1, p2) =
  sqrt(pow(p2[0] - p1[0], 2) + pow(p2[1] - p1[1], 2));
// Distance from [0, 0] to [3, 4] is 5
d = distance_2d([0, 0], [3, 4]);
echo(d);  // Prints: 5
", Para [Str "Practical Example: Parametric Phone Stand Angle Calculation"], CodeBlock ("", ["openscad"], []) "// Calculate stand geometry based on phone height and desired viewing distance
module calculated_stand(phone_width, phone_height, viewing_distance) {
  // Calculate required back angle for ergonomic viewing
  required_angle = atan(phone_height / viewing_distance);
  // Calculate back support length needed
  base_length = phone_width + 20;  // 20mm margin
  back_length = sqrt(pow(base_length, 2) + pow(phone_height + 30, 2));
  echo(str(\"Calculated angle: \", required_angle, \" degrees\"));
  echo(str(\"Back support length: \", back_length, \" mm\"));
  // Create stand with calculated dimensions
  union() {
    // Base
    cube([base_length, 80, 4]);
    // Back support at calculated angle
    translate([0, -30, 4])
      rotate([required_angle, 0, 0])
        cube([base_length, 10, 4]);
  }
}
calculated_stand(75, 160, 300);  // 75mm phone, 160mm tall, 300mm viewing distance
", Header 4 ("vector-math-cross-dot-norm", ["unnumbered", "unlisted"], []) [Str "Vector Math: cross(), dot(), norm()"], Para [Str "Advanced positional calculations for complex assemblies:"], CodeBlock ("", ["openscad"], []) "// dot(): Dot product (measure alignment)
// cross(): Cross product (calculate perpendicular)
// norm(): Vector magnitude (length)
// Example: Align two objects perpendicular
function perpendicular_vector(v) =
  cross(v, [0, 0, 1]);  // Perpendicular to v in Z plane
// Practical: Create perpendicular support bar
v1 = [1, 0, 0];  // Forward direction
v_perp = perpendicular_vector(v1);
// v_perp is now [0, 1, 0] (sideways)
", Para [Str "Practical Example: Dynamic Fixture Positioning"], CodeBlock ("", ["openscad"], []) "// Position fixtures based on desired alignment direction
module fixture_on_surface(surface_direction, offset_distance) {
  // Ensure surface_direction is normalized
  normal = surface_direction / sqrt(pow(surface_direction[0], 2) + 
                                   pow(surface_direction[1], 2) + 
                                   pow(surface_direction[2], 2));
  // Position fixture along surface normal
  translate([normal[0] * offset_distance, 
             normal[1] * offset_distance, 
             normal[2] * offset_distance])
    cube([10, 10, 10]);
}
// Mount fixture 20mm away from surface
fixture_on_surface([1, 0, 0], 20);
", Header 4 ("practical-application-parametric-spiral-design", ["unnumbered", "unlisted"], []) [Str "Practical Application: Parametric Spiral Design"], Para [Str "Here's a complete example combining multiple math functions:"], CodeBlock ("", ["openscad"], []) "// Create a parametric spiral using sin/cos and sqrt
module spiral_generator(max_radius, height, spiral_tightness) {
  steps = 200;
  for (i = [0:steps-1]) {
    // Calculate angle and radius for spiral point
    angle = (i / steps) * spiral_tightness * 360;
    t = i / steps;  // Normalized 0-1
    r = max_radius * t;  // Radius increases with height
    // Calculate position using trigonometry
    x = r * cos(angle);
    y = r * sin(angle);
    z = (t * height);
    // Place sphere at calculated position
    translate([x, y, z])
      sphere(r=2, $fn=16);
  }
}
spiral_generator(30, 50, 3);  // 30mm radius, 50mm tall, 3 complete revolutions
", Header 3 ("quiz---lesson-3dmake7-10-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.7 (10 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does the ", Code ("", [], []) "rotate()", Str " function do, and how does it differ from physical rotation", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "?"]], [Plain [Str "Why is parametric positioning important for design iteration", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "?"]], [Plain [Str "Explain the Minkowski sum operation and why it's useful for filleting", Note [Para [Str "OpenSCAD Manual - Minkowski - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski", "")]], Str "."]], [Plain [Str "How would you position a second component relative to the first using ", Code ("", [], []) "translate()", Str " ", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "?"]], [Plain [Str "What parameter would you change to make a phone stand suitable for tablets", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "?"]], [Plain [Str "True or False: You can rotate an object around multiple axes in a single ", Code ("", [], []) "rotate()", Str " call."]], [Plain [Str "Describe how ", Code ("", [], []) "$fn", Str " affects the appearance of rounded edges created by Minkowski", Note [Para [Str "OpenSCAD Manual - Minkowski - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations#minkowski", "")]], Str "."]], [Plain [Str "What advantage does parametric design have over manually modeling each variant", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "?"]], [Plain [Str "How would you verify that your stand's angle matches your design intent after printing", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "?"]], [Plain [Str "What design considerations should you account for when adding a lip to prevent phone slippage", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "?"]]], Header 3 ("extension-problems-10", ["unnumbered", "unlisted"], []) [Str "Extension Problems (10)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create five stand variants (for phones, tablets, documents, laptops, and books) by parameterizing width, angle, and lip height", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "."]], [Plain [Str "Add parametric feet (small cylinders) to the base to improve stability; test with and without feet", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "."]], [Plain [Str "Use ", Code ("", [], []) "3dm describe", Str " to document each variant's key geometric properties", Note [Para [Str "OpenSCAD Manual - Transformations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]], Str "."]], [Plain [Str "Design and test a snap-fit connector system that joins the base and back without fasteners", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "."]], [Plain [Str "Create a comparison table showing print time, material weight, and assembly complexity for each variant", Note [Para [Str "3DMake GitHub - Phone Stand Example - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/docs/examples.md"] ("https://github.com/tdeck/3dmake/blob/main/docs/examples.md", "")]], Str "."]], [Plain [Str "Build a complete phone stand product family: define naming convention, parameter ranges, and assembly instructions."]], [Plain [Str "Develop a stress analysis guide: identify high-stress areas in your stand and propose reinforcement strategies."]], [Plain [Str "Create a customization guide for end users: how to modify angle, width, and lip height for different devices."]], [Plain [Str "Design an accessibility-focused stand: include tactile angle markers and clear, non-visual assembly instructions."]], [Plain [Str "Write a comprehensive stand design documentation: CAD parameters, material recommendations, print settings, assembly, troubleshooting, and accessible design notes."]]], Header 3 ("starter-code", ["unnumbered", "unlisted"], []) [Str "Starter Code"], Para [Str "Use this parametric phone stand as your starting point:"], CodeBlock ("", ["openscad"], []) "// Parametric Phone Stand - Intermediate Example
// Parameters
thickness = 4;        // mm
width = 70;           // mm
depth = 90;           // mm
angle = 65;           // degrees
lipheight = 12;       // mm
filletr = 6;          // mm (mock fillet by minkowski)
module plate(w, d, t){
  cube([w, d, t], center=false);
}
module fillet(shape, r){
  minkowski(){
    children();
    cylinder(h=0.01, r=r, $fn=40);
  }
}
// Back plate
module back(){
  rotate([angle,0,0])
    fillet(){ plate(width, depth, thickness); }
}
// Base
module base(){
  translate([0,0,0])
    fillet(){ plate(width, depth, thickness); }
}
// Lip
module lip(){
  translate([0, depth-8, thickness])
    cube([width, 8, lipheight], center=false);
}
union(){
  base();
  back();
  lip();
}
", Para [Str "References"]]