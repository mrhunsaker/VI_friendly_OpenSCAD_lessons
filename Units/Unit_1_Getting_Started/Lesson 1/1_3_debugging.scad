/*
Author: Chris Correll
Date: 11/3/2022
Description: This lesson is about debugging in openSCAD we will go over how to find errors in your code and how to fix them. This is the teacher copy.
*/

/*
Debugging is the process of fixing errors in your code. We will be focusing on sytax errors in this lesson. Syntax errors are errors where we typed something wrong. They are usually pretty straight forward to fix. Debugging can also be where your code is doing something you do not want it to do. For instance say you wanted to cut a cube in half but your code is just making the cube bigger, fixing that is also debugging!

Debugging is called debugging because back when computers where large machines the size of a building they had a lot of parts, one time a bug got into these parts and broke the machine, when they removed the bug (debugged it) the machine started working again

Check for understanding:
-What is debugging?
-Why do you need to debug?
-What type of debugging are we going to focus on today?
*/

/*
Different windows in OpenSCAD
- editor: where we type our code
- console: output from renders and previews. This has a lot of text some of it is important some of it is not. We do not need to worry about it a lot right now.
- error-log: This has a table of the errors in your code they usually show up one at a time. It is a table and has entries for file, line, and error info.
- customizer (hide it for now): We don't need this right now we can hide it in the window menu
- model preview: This has a preview of the model when we render it

- Hit alt w to bring up the list of each window type and hit enter on the window type to change focus to it. You can also hide the windows here

Checks for understanding:
- Change to each window 
- Hide and then show the editor  
*/

/*
Finding an error steps
- Preview code F5
- Hit ctrl alt e to jump to error
- Read all command/ arrow key around sometimes it wont but you where your error is this usually means you are missing a semi-colon
- Make sure punctuation is being read. 
- If you can not find the error or would like more information about it navigate to the error-log window (alt-w-l)you can then navigate left and right to hear the table entries and press enter on the line number to move to the editor window where your error is
- If you still can not hear the error go to the top of the code and go through each line. 
*/



//Fix the errors and then comment out the line(s)
//1.
//cylinder(4,4,4);

//2.
//sphere(r=1);

//3.
//translate([0,0,1])
//sphere(1);
//*/



