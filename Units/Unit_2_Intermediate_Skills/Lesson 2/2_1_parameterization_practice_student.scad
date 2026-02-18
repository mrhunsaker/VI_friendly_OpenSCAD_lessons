//Author: 
//Date: 
//Description: 2-1 parameterization assignment

$fn = 40;

//Read through the example and change paramets notice how the model grows and retains its over all structure.

//Make a parameterized mickey mouse shape
face_size = 10;
ear_size = 4;
thickness = 1;

cylinder(h = thickness, d = face_size, center = true);
translate([-face_size/3, face_size/3, 0])
cylinder(h = thickness, d = ear_size, center = true);
translate([face_size/3, face_size/3, 0])
cylinder(h = thickness, d = ear_size, center = true);


//PROBLEM
//Choose a model from Lesson 1-0 and 1-1 (top, stair case, yo-yo) and parameterize it. Every parameter you use should have a descriptive name and you should be able to change the whole model correctly by chaning the parameters. 

