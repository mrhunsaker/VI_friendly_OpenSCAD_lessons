//Author: Chris Correll
//Date: 10/13/2022
//Description: Lesson 2-2 Combing shapes with booleans differences

//Its helpful to have playdoh, printed molds for the playdoh, and an aph graph board for this lesson (coordinate system)

$fn = 40; 

//How to do a difference
/*
difference() {
cube([10, 10, 10]);
cylinder(h=10,r=2);
}
*/


//shimmering walls happen in preview mode when one or more differenced shapes overlap perfectly, they will go away if you render the shape (f6)
//you can use a # in front of your differenced shape(s) to preview them in red
/*
difference() {
cube([10, 10, 10]);
#cube([10, 5, 5]);
#sphere(4);
}
*/

//Take two holes out of a sphere, they can be anywhere as long as they are not overlapping and are fully cutting through the sphere
/*
difference() {
  sphere(10);
  translate([2,0,0])
    cylinder(h=20,d=2,center=true);
  translate([-2,0,0])
    cylinder(h=20,d=2,center=true);
}
*/

//Take two holes out of a cube, one in the middle and one touching the edge
/*
difference() {
  cube(20,center=true);
    cylinder(h=21,d=6,center=true);
  translate([-10+3,0,0])
    cylinder(h=21,d=6,center=true);
}
*/

//Make a box without a lid
/*
h = 10;
w = 20;
l = 30;
t = 2;
difference() {
  cube([l,w,h],center = true);
  translate([0,0,t])
    cube([l-t*2,w-t*2, h],center = true);
}
*/

//Make a cup
/*
h = 50;
d = 40;
t = 2;
difference() {
  cylinder(h = h,d = d,center = true);
  translate([0,0,t])
    cylinder(h = h,d = d-t*2,center = true);
}
*/
