//Author: 
//Date: 
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

//We use a boolean union so we can group and nest shapes, see what happens if you comment out the union command
/*
difference() {
  union() {
    cube([10, 10, 10]);
    cylinder(h=10, r1=2, r2=2);
  }
  sphere(5);
}
*/

//1. Make an ice cream cone (cone and ice cream scoop) with a union command

//2. Take a bite out of your ice cream cone!

//Bonus: parameterize your ice cream cone

//Bonus: make a parameterized 2 by 2 square lego brick

