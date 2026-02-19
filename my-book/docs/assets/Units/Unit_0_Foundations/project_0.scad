// Placeholder project_0.scad for Unit 0 foundations
// Replace with actual lesson model when available.

// Simple cube with a hole
difference(){
  cube([20,20,10], center=true);
  translate([8,0,0]) cylinder(h=12, r=2, center=true);
}
//Author: Chris Correll
//Date: 8/21/2022
//Description: Project 0 tactile floor marker v0 fits a velcro command strip

cube([70, 16, 5]);

