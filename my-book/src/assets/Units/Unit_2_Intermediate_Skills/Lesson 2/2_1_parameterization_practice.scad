//Author: Chris Correll
//Date: 10/1/2022
//Description: 2-1 parameterization assignment solutions

$fn = 40;

//Have students read through the example (it should be in the student file) and change paramets notice how the model grows and retains its over all structure. Notice the descriptive varible names. 

//Make a parameterized mickey mouse shape
face_size = 6;
ear_size = 4;
thickness = 1;

cylinder(h = thickness, d = face_size, center = true);
translate([-face_size/3, face_size/3, 0])
cylinder(h = thickness, d = ear_size, center = true);
translate([face_size/3, face_size/3, 0])
cylinder(h = thickness, d = ear_size, center = true);


//PROBLEM
//Choose a model from Lesson 1-0 and 1-1 (top, stair case, yo-yo) and parameterize it. Every parameter you use should have a descriptive name and you should be able to change the whole model correctly by chaning the parameters. 
//Have students think about what parameters they would like to use before programming the model. Have them first copy and paste the code from lesson 1-0 or lesson 1-1 into their file and read it over thinking about what they would want to be represented by a variable and how different dimensions of their object could be represented in terms of that variable. Could any variable or dimension be represented as a porportion of another variable? Objects can be parameterized in many different ways its good practice to try to minimize your number of editable parameters by defining paremeters interms of other variables this makes things easier to modify, but harder to code! Its helpful to add comments after your parameters so you or someone else will know what you are thinking!
//Optional: Have students pair up (use audio splitters in the desk drawer so they can both hear the code if necessary) and try to program the most efficient parameterized model together!

/*
//Possible Solutions
//Make a yo-yo
h_yo_yo = 30;
w_yo_yo = 40;
translate([0,0,-h_yo_yo/20])
cylinder(h=h_yo_yo/2, d1=w_yo_yo, d2=0, center=true);
translate([0,0,h_yo_yo/20])
cylinder(h=h_yo_yo/2, d1=0, d2=w_yo_yo, center=true);


//Make a top
h_top = 5000;

h_spinner = 1/2 * h_top;
h_handle = 1/2 * h_top;

w_top = 3*h_top/2; //150% height of top
w_handle = w_top/10; // 10% width of top
 
cylinder(d1=.1,d2=w_top,h=h_spinner,center=true); //dont set d1 to 0 so we can 3d print it facing down otherwise first layer has no geometry (ie cant have a 0 dimension layer in real world)
cylinder(d = w_handle,h=h_handle);


//Make a parametereized stair step 
//Solution 1
h_stair_case = 40;
l_stair_case = 40;
w_stair_case = 50;

h_stair = h_stair_case/4;
l_stair = l_stair_case/4;

cube([l_stair*4,w_stair_case,h_stair*1]); //Step 1
cube([l_stair*3,w_stair_case,h_stair*2]); //Step 2
cube([l_stair*2,w_stair_case,h_stair*3]); //Step 3
cube([l_stair*1,w_stair_case,h_stair*4]); //Step 4


//Another Solution...
h_stair_case = 40;
l_stair_case = 40;
w_stair_case = 50;

h_stair = h_stair_case/4;
l_stair = l_stair_case/4;

cube([l_stair*4,w_stair_case,h_stair]); //Step 1

translate([l_stair,0,h_stair])
cube([l_stair*3,w_stair_case,h_stair]); //Step 2

translate([l_stair*2,0,h_stair*2])
cube([l_stair*2,w_stair_case,h_stair]); //Step 3

translate([l_stair*3,0,h_stair*3])
cube([l_stair,w_stair_case,h_stair]); //Step 4
*/
