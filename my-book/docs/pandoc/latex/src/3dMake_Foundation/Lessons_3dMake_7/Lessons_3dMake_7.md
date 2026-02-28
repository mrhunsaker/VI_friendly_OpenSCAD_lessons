[Header 2 ("lesson-7-parametric-transforms-and-the-phone-stand-project", [], []) [Str "Lesson 7: Parametric Transforms and the Phone Stand Project"], Para [Str "Estimated time: 90–120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Apply ", Code ("", [], []) "translate()", Str ", ", Code ("", [], []) "rotate()", Str ", ", Code ("", [], []) "scale()", Str ", and ", Code ("", [], []) "mirror()", Str " correctly"]], [Plain [Str "Understand transform order of operations"]], [Plain [Str "Use ", Code ("", [], []) "minkowski()", Str " for organic edge rounding"]], [Plain [Str "Apply trigonometric functions (", Code ("", [], []) "sin()", Str ", ", Code ("", [], []) "cos()", Str ", ", Code ("", [], []) "atan()", Str ", ", Code ("", [], []) "atan2()", Str ") for angular positioning"]], [Plain [Str "Build a complete parametric phone stand"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Terminal and editor"]], [Plain [Str "Calipers for measuring your phone"]]], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("1-master-transforms-and-order-of-operations-", ["unnumbered", "unlisted"], []) [Str "1. Master Transforms and Order of Operations ", Note [Para [Str "OpenSCAD User Manual — Transformations. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]]], Para [Str "Transforms in OpenSCAD apply right-to-left (innermost first). Order matters:"], CodeBlock ("", ["openscad"], []) "// rotate THEN translate (object moves to [20,0,0] first, then rotates in place)
rotate([0, 0, 45]) translate([20, 0, 0]) cube([10, 5, 5]);

// translate THEN rotate (object moves 20mm, then rotates around origin)
translate([20, 0, 0]) rotate([0, 0, 45]) cube([10, 5, 5]);
", Para [Str "These produce different results. A helpful rule: read transforms from the inside out."], Header 4 ("2-use-trigonometric-and-math-functions-", ["unnumbered", "unlisted"], []) [Str "2. Use Trigonometric and Math Functions ", Note [Para [Str "OpenSCAD User Manual — Mathematical Functions. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions", "")]]], CodeBlock ("", ["openscad"], []) "// Place objects in a circle using sin() and cos()
r = 30;
for (i = [0 : 45 : 315]) {
  x = r * cos(i);
  y = r * sin(i);
  translate([x, y, 0]) cylinder(r=3, h=5, $fn=16);
}

// atan(y/x) gives angle from a ratio (single-argument arctangent)
angle_a = atan(1);      // 45 degrees

// atan2(y, x) gives angle from x and y components directly
// Use atan2() when both x and y are known — it handles all four quadrants correctly
angle_b = atan2(1, 1);  // 45 degrees (equivalent for this case)
angle_c = atan2(1, -1); // 135 degrees (atan(1/-1) would give -45 — wrong quadrant!)

echo(angle_a, angle_b, angle_c);  // 45, 45, 135

// Round/floor/ceil/pow/sqrt
echo(round(3.6));   // 4
echo(floor(3.6));   // 3
echo(ceil(3.6));    // 4
echo(pow(2, 8));    // 256
echo(sqrt(144));    // 12
", Para [Strong [Str "When to use ", Code ("", [], []) "atan2(y, x)", Str " vs ", Code ("", [], []) "atan(y/x)", Str ":"], Str " Use ", Code ("", [], []) "atan2()", Str " whenever you have both x and y components and need the correct quadrant. ", Code ("", [], []) "atan()", Str " only returns values in the range -90° to +90° and divides by zero when x=0."], Header 4 ("3-apply-minkowski-sum-for-rounded-edges-", ["unnumbered", "unlisted"], []) [Str "3. Apply Minkowski Sum for Rounded Edges ", Note [Para [Str "OpenSCAD User Manual — Minkowski and Hull. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull", "")]]], CodeBlock ("", ["openscad"], []) "// Minkowski adds the shape of one object to every point of another
// Result: rounded box with smooth edges
module rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r], center=false);
    sphere(r=r, $fn=16);
  }
}

// Flat-base rounded box (cylinder instead of sphere)
module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=false);
    cylinder(r=r, h=0.01, $fn=24);
  }
}
", Header 4 ("4-apply-scale-and-mirror", ["unnumbered", "unlisted"], []) [Str "4. Apply scale() and mirror()"], CodeBlock ("", ["openscad"], []) "// scale() stretches geometry — use when you need non-uniform scaling
scale([1, 1, 2]) sphere(r=10, $fn=32);  // stretch sphere 2x in Z = ellipsoid

// mirror() reflects geometry across a plane
module ear() {
  translate([20, 0, 0]) cylinder(r=5, h=3, $fn=32);
}
// Original + mirrored = symmetric pair
ear();
mirror([1, 0, 0]) ear();  // reflect across YZ plane
", Header 4 ("5-build-the-complete-phone-stand", ["unnumbered", "unlisted"], []) [Str "5. Build the Complete Phone Stand"], CodeBlock ("", ["openscad"], []) "// ============================================================
// Parametric Phone Stand
// ============================================================
// Measure your phone and set these parameters:
phone_w = 75;   // mm — phone width
phone_d = 9;    // mm — phone thickness
angle   = 65;   // degrees — viewing angle from horizontal
lip_h   = 15;   // mm — depth of cradle lip

// Derived dimensions
base_d      = (phone_d + 10) / cos(90 - angle);
base_h      = 5;
cradle_wall = 3;
r_fillet    = 3;

module base_plate() {
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  rotate([angle - 90, 0, 0])
    translate([0, 0, 0])
      flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([max(1, w - 2*r), max(1, d - 2*r), h]);
    cylinder(r=r, h=0.01, $fn=24);
  }
}

translate([0, 0, base_h]) {
  back_support();
  lip();
}
base_plate();
", Header 4 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 2: ", Code ("", [], []) "echo()", Str " outputs confirm trig function results."]], [Plain [Str "After step 3: The ", Code ("", [], []) "rounded_cube", Str " module produces a smooth-edged box (check in preview)."]], [Plain [Str "After step 5: The phone stand stands at the correct angle and the lip depth matches your ", Code ("", [], []) "lip_h", Str " parameter."]]], Header 3 ("advanced-transform-patterns", ["unnumbered", "unlisted"], []) [Str "Advanced Transform Patterns"], Header 4 ("vector-math-functions", ["unnumbered", "unlisted"], []) [Str "Vector Math Functions"], CodeBlock ("", ["openscad"], []) "// dot product: measures how aligned two vectors are
a = [1, 0, 0];
b = [0.7, 0.7, 0];
echo(a * b);         // scalar dot product = 0.7

// cross product: finds a vector perpendicular to two input vectors
c = cross([1, 0, 0], [0, 1, 0]);  // = [0, 0, 1]

// norm: vector magnitude (length)
v = [3, 4, 0];
echo(norm(v));       // 5 (Pythagorean theorem)
", Header 4 ("adaptive-quality-with-preview", ["unnumbered", "unlisted"], []) [Str "Adaptive Quality with $preview"], CodeBlock ("", ["openscad"], []) "// Use lower $fn during preview for fast rendering, higher for export
$fn = $preview ? 16 : 64;

// This speeds up preview without compromising final export quality
sphere(r=20, $fn=$fn);
", Header 3 ("quiz--lesson-3dmake7-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.7 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "In OpenSCAD, do transforms apply left-to-right or right-to-left (innermost or outermost first)?"]], [Plain [Str "What is the result of ", Code ("", [], []) "atan(1)", Str "?"]], [Plain [Str "What is the advantage of ", Code ("", [], []) "atan2(y, x)", Str " over ", Code ("", [], []) "atan(y/x)", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "minkowski()", Str " do geometrically?"]], [Plain [Str "What does ", Code ("", [], []) "mirror([1, 0, 0])", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "scale([1, 1, 2])", Str " do to a sphere?"]], [Plain [Str "Write the code to place 6 cylinders evenly spaced around a circle of radius 25 mm."]], [Plain [Str "What does ", Code ("", [], []) "norm([3, 4, 0])", Str " return?"]], [Plain [Str "True or False: ", Code ("", [], []) "translate([10,0,0]) rotate([0,0,45]) cube(5)", Str " rotates the cube and then moves it."]], [Plain [Str "Why would you use ", Code ("", [], []) "$preview", Str " to conditionally set ", Code ("", [], []) "$fn", Str "?"]], [Plain [Str "Describe the difference between ", Code ("", [], []) "atan(y/x)", Str " and ", Code ("", [], []) "atan2(y, x)", Str ". In which quadrant does ", Code ("", [], []) "atan()", Str " fail to return the correct angle?"]], [Plain [Str "A phone stand design uses ", Code ("", [], []) "rotate([angle - 90, 0, 0])", Str " to tilt the back support. If ", Code ("", [], []) "angle = 65", Str ", what is the actual rotation applied?"]], [Plain [Str "What does ", Code ("", [], []) "cross([1,0,0], [0,1,0])", Str " return, and what is the geometric meaning of the cross product?"]], [Plain [Str "Explain why using ", Code ("", [], []) "minkowski()", Str " with a sphere produces a different edge profile than using ", Code ("", [], []) "minkowski()", Str " with a cylinder."]], [Plain [Str "A design requires placing components at the vertices of an equilateral triangle centered at the origin. Using ", Code ("", [], []) "cos()", Str " and ", Code ("", [], []) "sin()", Str ", calculate the coordinates of all three vertices for a circumradius of 30 mm."]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Redesign your phone stand with a cable slot cut through the base. Make the slot width a parameter."]], [Plain [Str "Add rubber feet pockets to the base of your phone stand: four small rectangular cutouts that could hold adhesive rubber bumpers."]], [Plain [Str "Create a phone stand variant that holds the phone in landscape (horizontal) orientation. What parameters change?"]], [Plain [Str "Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "rotate()", Str "."]], [Plain [Str "Use ", Code ("", [], []) "atan2()", Str " to compute the angle of a slope and apply it with ", Code ("", [], []) "rotate()", Str " to align a part precisely with the slope."]], [Plain [Str "Design a phone stand for a large tablet: update parameters and verify the design still holds at the correct angle."]], [Plain [Str "Build a \"compound arm\": three rigid links connected at joints, each rotated by a parameter angle. Display all three links as an assembly."]], [Plain [Str "Create an ergonomic keyboard wrist rest using ", Code ("", [], []) "minkowski()", Str " with an ellipsoid for smooth contouring."]], [Plain [Str "Demonstrate transform order: build a visual example that shows the difference between ", Code ("", [], []) "rotate → translate", Str " and ", Code ("", [], []) "translate → rotate", Str " using colored shapes."]], [Plain [Str "Redesign the phone stand as a wall-mount: replace the base with a plate that has two mounting holes, positioned so the phone faces outward."]], [Plain [Str "Build a mirror-symmetric earring holder: design one arm with pegs, then use ", Code ("", [], []) "mirror()", Str " to create the symmetric pair."]], [Plain [Str "Use ", Code ("", [], []) "norm()", Str " to calculate the diagonal of a rectangular prism and use that value to size a through-hole in the design."]], [Plain [Str "Research OpenSCAD's ", Code ("", [], []) "multmatrix()", Str " function. Build a shear transformation example that could not be achieved with ", Code ("", [], []) "translate()", Str " and ", Code ("", [], []) "rotate()", Str " alone."]], [Plain [Str "Add snap-fit clips to the phone stand: two small flexible fingers on either side of the cradle that hold the phone securely. Use the snap-fit principles from Lesson 8."]], [Plain [Str "Design a dual-phone stand using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "translate()", Str " to create two side-by-side stands at different angles, parametrically spaced."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Transforms chapter"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Phone stand worked example"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — Math and transform functions"]]]]