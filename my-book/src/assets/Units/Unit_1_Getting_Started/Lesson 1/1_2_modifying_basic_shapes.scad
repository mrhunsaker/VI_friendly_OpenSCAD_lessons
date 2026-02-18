/*
Author: Chris Correll
Date: 11/8/2021
Description: Lesson 1.2 Chapter 1. Basic 3D shape modifications.
*/


/*
Center
The sphere command draws a sphere so that it’s centered around 
the origin; the cube, cylinder (and import) do not.abs

The  center will be at (0, 0, 0).
*/
/*
cube([20, 10, 10],center=true);
cylinder(h=20,r=5,center=true); 
*/

/*
Translate
Moves a shape to a specific location in the Preview window.

The below statement draws a cuboid that is shifted from its default position by 10 units in the negative direction along the x-axis, 20 units in the positive direction along the y-axis, and 0 units along the z-axis.

Shapes move with respect to center of shape.

*/
/*
translate([-10, 20, 0]) cube([20, 10, 10]);
translate([-10, 20, 0]) //can do in two lines notice no ; after translate
  sphere(r=10); 
*/

/*
The width (and depth) of a sphere/cylinder is its diameter.
Translating centered objects by half of their dimension will move them to touching the edge of which ever plane you translated.
This is a point that is tricky to understand for most students but is imperative for sucess later in the course. Use the graph board and primative shapes to help explain. Start in 2D with the XY plane
*/

/*
Review quadrants in 3d space.
Notes:
1st octant: +X +Y +Z
2nd octant: -X +Y +Z
3rd octant: -X -Y +Z
4th octant: +X -Y +Z
5th octant: +X +Y -Z
6th octant: -X +Y -Z
7th octan: -X -Y -Z
8th octant: +X -Y -Z
*/

//Make a centered cube!
//cube(10,center=true);

//Move it completely to the first octant.
/*
translate([5,5,5])
cube(10,center=true);
*/

//Make a centered cylinder!
//cylinder(h=10,d=10,center=true);

//Move it completely to the third octant. Anything more than half the width and height in the negative direction will suffice anything les 
/*
translate([-5,-5,5])
cylinder(h=10,d=10,center=true);
*/

//Make a centered cone!
//cylinder(h=10,d1=10,d2=0,center=true);

//Move it completely to the seventh octant.
/*
translate([-5,-5,-5])
cylinder(h=10,d1=10,d2=0,center=true);
*/

//Practice 
//Make a mickey mouse shape
/*
cylinder(h=1, r= 3, center=true);
translate([-2,2,0])
cylinder(h=1, r= 2, center=true);
translate([2,2,0])
cylinder(h=1, r= 2, center=true);
*/

//Make a yo-yo
/*
translate([0,0,-2])
cylinder(h=20, r1 = 20, r2 = 0, center=true);
translate([0,0,2])
cylinder(h=20, r1= 0, r2 = 20, center=true);
*/

/*
Check for understanding
- What is the width of a cylinder?
- What is the width of a sphere?
- What is the height of a sphere?
*/