//Author: Chris Correll
//Date: 8/18/22
//Description: Lesson 1.0 Introduction to OpenSCAD

/*
Explain what openSCAD is, have student read the terminology text file
*/  

/*
Explain what a comment is: computer ignores code that follows on the same line as a single line comment or is in a comment block
//single line comment
/* 
Multi-line
comment block
*/

/* 
Explore the program. Explain the different windows and what they do: editor window-where to write code, preview window-where to see code, tab bar ( can open ,multiple code documents and tab and use tab navigation commands ctrl +tab to switch bewteen them), console- where text output about your code shows upwhen you preview or render it, error-log- a table that describes what and where errors are that show in your code
*/

/* 
Helpful JAWS and Windows commands for text editing:
If JAWS stops reading try focusing the menu bar and then pressing escape or focusing the editor window
Move cursor by word: CTRL + LEFT/RIGHT ARROW key
Move cursor to start of line: HOME (FN + LEFT ARROW KEY on most laptops)
Move cursor to end of line: END (FN + RIGHT ARROW KEY on most laptops)
Move cursor to beginning of file: CTRL + END
Move cursor to end of file: CTRL + HOME
Select: HOLD SHIFT AND MOVE CURSOR
Change punctuation level: JAWS KEY + SHIFT + 2
Read all from cursor: JAWS KEY + A
Read Current line: JAWS KEY + UP ARROW
Temporarily increase/decrease voice rate: ALT + CTRL + PAGE UP/PAGE DOWN (fn key and up/ down arrow on most laptops)
Spell curent line: JAWS KEY + UP ARROW twice quickly

*/

/*
NOTE:
We will be exploring VS code later in the semester as an alternative to working in the OpenSCAD editor as it is sometimes buggy with JAWS. Remmember to change focus to the menu bar and press esc if JAWS stops reading the openSCAD editor
*/

/* 
Exploring the Menus
ALT will focus the menu bar
You can use first letter navigation to get to things quickly i.e. the layered key stroke ALT > w > e will bring you to the 
Have students Focus the different windows (console, editor, error log)
*/
 
/*
Optional Customization (perhaps not accessible?)
Edit > Preferences > Editor > Auto indent off
Edit > Preferences > Editor > Number Scroll Via Mouse Wheel off 
Edit > Preferences > Editor > Autocomplete off
Edit > Preferences > Advanced > Show Welcome Screen off
Design > Turn off automatic reload and preview
View > Hide 3D view and Editor tool bars
Window > Hide console
*/

/*
First shape cube
Talk about parameters
Rendering 
Exporting to stl etc.
*/

//Your first shape preview it and then try the below preview keyboard commands
cube([1,1,1]);

//You can fit the shape to the whole preview window with the command control + shift + v (alt > v > view all)
//You can change the view projection using ctrl + 4 through 9
//Once completed comment out the code with a single line comment
//Make a larger cube render it, export it as an stl email it to me

//Talk about scaling have braille rulers show students 
// openSCAD is unitless but we can assume that we will be working with one unit= 1mm
cube([10,10,10]);    