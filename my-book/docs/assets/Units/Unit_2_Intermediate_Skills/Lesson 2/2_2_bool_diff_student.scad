//Author: 
//Date: 
//Description: Combing shapes with booleans differences

$fn = 40; 

//How to do a difference
difference() {
cube([10, 10, 10]);
cylinder(h=10,r=2);
}

//1. Take two holes out of a sphere, they can be anywhere as long as they are not overlapping and are fully cutting through the sphere

//2. Take two holes out of a cube, one in the middle and one touching the edge

//3. Make a box without a lid

//4. Make a cup

//5. Make a quarter slice of pizza (a quarter of a cylinder)

//Bonus: Parameterize (use variables instead of numbers) your cup or box

