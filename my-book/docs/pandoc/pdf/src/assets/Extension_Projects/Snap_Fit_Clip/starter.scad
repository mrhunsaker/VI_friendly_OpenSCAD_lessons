// Placeholder starter.scad for Snap Fit Clip
// Simple clip-like placeholder geometry
module clip(){
  difference(){
    cube([40,8,6], center=true);
    translate([10,0,0]) cube([6,8,6], center=true);
  }
}
clip();
