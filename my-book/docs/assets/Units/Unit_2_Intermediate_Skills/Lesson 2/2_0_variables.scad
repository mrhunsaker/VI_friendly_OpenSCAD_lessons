//Author: Chris Correll
//Date: 9/13/2022
//Description: Lesson 2.0 Variables and Parametric Programming Teacher 

//This is a variable it has two components, a name, var, and an assignment of value, 10, variables can not have spaces and must start with letters
var = 10;

//We want variable names to be descriptive var is a bad name, lets make our first variable

//In openSCAD you have to both declare (name) and intialize (assign a value) to variables from now on when I say declare I mean name and assign a value to

//When we use variables in our model we are "parameterizing" our model. When we define the shapes in our model in relation to the same variables we can easily change our model without having to rewrite a whole bunch of code

//Declare a variable "res" and make the global resolution equal to it
res = 40;
$fn = res;

//this is a pretty useless variable bc we probably wont use the resolution any where except here... go on to see why variables are useful
// you can shorten variables names to make it less work for you but make sure they are common shortenting and make sense within the context of your program ie w for width would make since but he for height would probably not


//Declare three variables w_cube, l_cube, h_cube
w_cube = 10;
l_cube = 20;
h_cube = 5;

//Make a centered cube with the variables
cube([w_cube,l_cube,h_cube], center=true);

// We can do math operations on variables like multiply * and divide / and addition + and subtraction - . These are known as special characters they can not be included in variable names. The only special character you should use in a variable name is _ 

//Make a centered cylinder that is half the height and twice the width of the cube by declaring a variable h_cyl and setting it equal to h/2 matybe change variable so its name is cube h and h_cylinder
h_cyl = h_cube/2;
w_cyl = 2*w_cube;

translate([0,0,h_cyl/2+h_cube/2]) //half the height of the cylinder moves it to touching the xy plane, half the height of the cuve
cylinder(d= w_cyl, h=h_cyl, center=true);

//move so we have a cylinder at the bottom too
translate([0,0,-h_cyl/2-h_cube/2]) //half the height of the cylinder moves it to touching the xy plane, half the height of the cuve
cylinder(d= 2*w_cube, h=h_cyl, center=true);

//Place the cylinder so that it is on top of the cube (hint remember where translation commands go)

//Change your variables and see how the shapes respond!