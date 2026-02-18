//Author: Chris Correll
//Date: 10/24/2022
//Description: Lesson 2-3 Combing shapes with booleans unions and nested booleans

//You can add shapes together with the union command
/*
union() {
 cube([10, 10, 10]);
 sphere(5);
}
*/

//Shapes always get added to together in OpenSCAD unless you use a boolean
/*
cube([10, 10, 10]);
sphere(5);
*/

//Make an ice cream cone with a union command
/*
union(){
  cylinder(h=15, r1=0, r2=5, center=true);
  translate([0,0,7.5])
    sphere(r=6);
}
*/

//We use a boolean union so we can group and nest shapes see what happens if you comment out the union command 
/*
difference() {
  union() {
    cube([10, 10, 10]);
    cylinder(h=10, r1=2, r2=2);
  }
  sphere(5);
}
*/

//Take a bite out of your ice cream cone!
/*
difference(){
  union(){
    cylinder(h=15, r1=0, r2=5, center=true);
    translate([0,0,7.5])
      sphere(r=6);
  }
  translate([0,5,10])
	sphere(r=3);
}
*/

//Make a 2 by 2 square lego brick
/*
$fn = 40;
brick_size = 15.8;
brick_h = 9.6; //brick h is actually brick base height and add (brick_h/3)/2 to get actual brick height as nubs are offset byhalf and are brick_h/2 tall

difference(){
  //brick top
  union(){
	union(){
	  translate([brick_size/4,brick_size/4, brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([-brick_size/4,brick_size/4, brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([-brick_size/4,-brick_size/4, brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([brick_size/4,-brick_size/4, brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	}
	//brick
	cube([brick_size,brick_size,brick_h],center=true);
  }
	//brick bottom
	union(){
	  translate([brick_size/4,brick_size/4,-brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([-brick_size/4,brick_size/4,-brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([-brick_size/4,-brick_size/4,-brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	  translate([brick_size/4,-brick_size/4,-brick_h/2])
		cylinder(h=brick_h/3, d=brick_size/4, center=true);
	}
}

//Bonus Parameterize your lego or ice cream cone!

*/