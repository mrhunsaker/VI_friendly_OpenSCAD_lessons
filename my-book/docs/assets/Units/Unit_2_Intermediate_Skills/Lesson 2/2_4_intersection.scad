//Author: Chris Correll
//Date: 10/13/2022
//Description: Lesson 2-4 Combing shapes with intersections

// Our last boolean operation is intersection
// Intersection takes the intersection of all the shapes in order of the first shape (takes intersection of shape 1 with shape 2, then takes result of intersection and intersect its with shape 3, etc. etc.)
/*
intersection() {
sphere(5);
#cube([10, 10, 10]);
}
*/

//You can also add a # if you want to see one of your intersecting objects in red

//1. Take the intersection of a sphere and a cube so that a quarter of the sphere reamin in octant 2
/*
intersection() {
  sphere(5);
  translate([-10,0,0])
  cube([10, 10, 10]);
}
*/

//2. Using intersection make a quarter of a circle (cylinder) in the first octant
/*
intersection() {
  cylinder(r=5,h=5,center=true);
  cube([10, 10, 10]);
}
*/

//3. Using intersection make a half of a circle (cylinder) in the first and second octants
/*
intersection() {
  cylinder(r=5,h=5,center=true);
  translate([0,5,0])
  cube([10, 10, 10],center=true);
}
*/

//4. Using intersection make two quarters of a cirlce (cylinder) in adjacent octants (i.e. 1 and 3)
/*
intersection() {
  cylinder(r=5,h=5,center=true);
  union(){
    cube([10, 10, 10]);
    translate([-10,-10,0])
    cube([10, 10, 10]);
  }
}
*/

//Intersections are useful to make rounded corners try intersecting an overlapping cube and sphere

// Bonus: Make a dice
/*
intersection(){
  cube(20,center=true);
  sphere(14);
} 
*/