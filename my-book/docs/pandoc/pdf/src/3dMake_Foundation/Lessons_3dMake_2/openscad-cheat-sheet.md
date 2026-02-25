[Header 3 ("3dmake_foundation_lessons_3dmake_2-openscad-cheat-sheet", [], []) [Str "OpenSCAD}} Quick Reference - Cheat Sheet"], Para [Emph [Str "Keep this handy during all OpenSCAD}} work}}. For full documentation: ", Link ("", [], []) [Str "https://openscad.org/documentation.html"] ("https://openscad.org/documentation.html", "")]], Header 4 ("basic-shapes-primitives", ["unnumbered", "unlisted"], []) [Str "Basic Shapes (Primitives)"], CodeBlock ("", ["scad"], []) "cube([length, width, height]);          // rectangular box
cube([l, w, h], center = true);        // centered at origin

sphere(r = radius);                     // sphere by radius
sphere(d = diameter);                   // sphere by diameter

cylinder(h = height, r = radius);       // cylinder
cylinder(h = height, d = diameter);     // cylinder by diameter
cylinder(h = height, r1 = 5, r2 = 2);  // cone (different top/bottom radii)

$fn = 50;  // sets smoothness for spheres/cylinders (higher = smoother, slower)
", Header 4 ("transformations", ["unnumbered", "unlisted"], []) [Str "Transformations"], CodeBlock ("", ["scad"], []) "translate([x, y, z]) shape;             // move
rotate([x_deg, y_deg, z_deg]) shape;    // rotate
scale([x, y, z]) shape;                 // scale (1.5 = 150%)
mirror([1, 0, 0]) shape;               // mirror across YZ plane (use [0,1,0] for XZ, [0,0,1] for XY)
", Header 4 ("boolean-operations", ["unnumbered", "unlisted"], []) [Str "Boolean Operations"], CodeBlock ("", ["scad"], []) "union() { shape1; shape2; }            // combine shapes
difference() { base; subtract; }       // remove one shape from another
intersection() { shape1; shape2; }     // keep only overlapping region
", Para [Str "Tip for difference}}(): Always make the subtracting shape 1 mm taller on both ends than the base shape to avoid zero-thickness artifacts."], CodeBlock ("", ["scad"], []) "// Example - box with a hole:
difference() {
    cube([30, 30, 10]);
    translate([15, 15, -1]) cylinder(h = 12, r = 5);  // extends -1 to +11
}
", Header 4 ("variables", ["unnumbered", "unlisted"], []) [Str "Variables"], CodeBlock ("", ["scad"], []) "length = 70;      // define a variable
width = 16;
height = 5;

cube([length, width, height]);    // use the variables
cube([length * 2, width, height]); // math works too
", Header 4 ("modules-reusable-functions", ["unnumbered", "unlisted"], []) [Str "Modules (Reusable Functions)"], CodeBlock ("", ["scad"], []) "// Define a module:
module my_box(l = 20, w = 15, h = 10) {
    cube([l, w, h]);
}

// Call the module:
my_box();               // uses all defaults
my_box(30, 20, 8);     // positional arguments
my_box(l = 50);         // named argument; others use defaults
", Header 4 ("loops", ["unnumbered", "unlisted"], []) [Str "Loops"], CodeBlock ("", ["scad"], []) "// Repeat a shape N times:
for (i = [0 : 4]) {         // i goes 0, 1, 2, 3, 4
    translate([i * 20, 0, 0]) cube([15, 15, 5]);
}

// Step size:
for (i = [0 : 5 : 20]) {   // i goes 0, 5, 10, 15, 20
    translate([i, 0, 0]) sphere(r = 3);
}
", Header 4 ("2d-shapes-for-extrusion", ["unnumbered", "unlisted"], []) [Str "2D Shapes (for extrusion)"], CodeBlock ("", ["scad"], []) "circle(r = 10);            // 2D circle
square([w, h]);            // 2D rectangle
polygon([[0,0],[10,0],[5,10]]);  // arbitrary 2D shape

// Extrude a 2D shape into 3D:
linear_extrude(height = 5) circle(r = 10);  // makes a cylinder
rotate_extrude() translate([15, 0]) circle(r = 3);  // makes a torus
", Header 4 ("useful-functions", ["unnumbered", "unlisted"], []) [Str "Useful Functions"], CodeBlock ("", ["scad"], []) "len([a, b, c])         // returns 3 (length of a vector)
sqrt(25)               // returns 5
pow(2, 8)              // returns 256 (2^8)
abs(-5)                // returns 5
min(3, 5, 1)           // returns 1
max(3, 5, 1)           // returns 5
", Header 4 ("comments", ["unnumbered", "unlisted"], []) [Str "Comments"], CodeBlock ("", ["scad"], []) "// Single-line comment

/*
  Multi-line
  comment
*/
", Header 4 ("keyboard-shortcuts", ["unnumbered", "unlisted"], []) [Str "Keyboard Shortcuts"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Key"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Action"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "F5"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Preview}} (fast)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "F6"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Full render (for export)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Ctrl+S"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Save"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Ctrl+Z"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Undo"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "F3"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reset camera view"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "F5 then scroll"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Zoom with mouse"]]]])] (TableFoot ("", [], []) []), Header 4 ("export-workflow", ["unnumbered", "unlisted"], []) [Str "Export Workflow"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Press F6 (full render - wait for it to complete)"]], [Plain [Str "File > Export > Export as STL}}"]], [Plain [Str "Save with a descriptive filename: ", Code ("", [], []) "projectname_v2.stl"]]], Header 4 ("sources", ["unnumbered", "unlisted"], []) [Str "Sources"], Para [Str "OpenSCAD}}. (n.d.). ", Emph [Str "OpenSCAD}} cheatsheet"], Str ". ", Link ("", [], []) [Str "https://openscad.org/cheatsheet/"] ("https://openscad.org/cheatsheet/", ""), LineBreak, Str "OpenSCAD}}. (n.d.). ", Emph [Str "OpenSCAD}} documentation"], Str ". ", Link ("", [], []) [Str "https://openscad.org/documentation.html"] ("https://openscad.org/documentation.html", ""), LineBreak, Str "Gohde, J., & Kintel, M. (2021). ", Emph [Str "Programming with OpenSCAD}}"], Str ". No Starch Press. ", Link ("", [], []) [Str "https://nostarch.com/programmingopenscad"] ("https://nostarch.com/programmingopenscad", "")]]