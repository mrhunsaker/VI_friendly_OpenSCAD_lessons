
// 02parametricphonestand.scad
// Intermediate: Parametric phone stand
// Parameters
thickness = 4;        // mm
width = 70;           // mm
depth = 90;           // mm
angle = 65;           // degrees
lipheight = 12;      // mm
filletr = 6;         // mm (mock fillet by minkowski)

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
