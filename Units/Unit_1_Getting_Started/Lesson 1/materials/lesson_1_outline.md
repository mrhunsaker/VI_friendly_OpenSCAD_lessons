# Lesson 1 Outline
## 1_0 OpenSCAD Basics (this one is a lot)
### Materials
- Ruler/callipers 
- computer with openSCAD installed
- (optional) braille display

### Sequence
- What is openSCAD
- openSCAD terminology 
- Comments single line and multiline 
- useful text editing and screen reading commands
- the openSCAD editor
- Your first shape the cube
- Preview, Render, Export
- the preview window and keyboard shortcuts
- units in openSCAD 

### Check for understanding
- What is a comment and how do you comment or uncomment code
- Terminology quiz
- Practice problem

## 1_1 Primitives
### Materials
- computer with openSCAD installed
- 3D printed primatives (scale as needed in 3d printer slicer program but keep porportions locked for atleast the cylinder and sphere)
- 3D printed 1_1 models

### Sequence
- Warm up review terminology 
- Header Author, date, description fill it out or make one always!
- shape commands parameters and ending with a semi-colon
  - can have any amount of space in the code since all shape commands end with a semi-colon
- cheat sheet for syntax
  - layout of cheat sheet (headings)
  - | or symbol
- the cube continued
  - vectors
  - the center flag (ABC- always be centering!)
- the sphere
  - introduce the $fn code (call it a command for now but explain its actually something else, a reserved variable will learn more about in lesson 1_3 and lesson 2)
- cylinder
  - cones
  
### Check for understanding
- What are parameters?
- Where are each shapes centered
- How do you make a pointed cone facing down?
- Practice problems

## Project 0 Your First 3D Print
### Materials
- Callipers
- 3D print of project 0
- a 3D model of one of the practice problems you solved or are working on 
- Project 0 briefing
- Project 0 student (technical documentation template)
- Student computer loaded with a slicer program we recommend slic3r as it is command line based and thus more accessible
- **How to 3D Print: Slicing**
- (optional) **How to 3D print: Octoprint**

### Objectives
- Measuring using calipers
- 3D printing and slicing
- Writing technical notes
- Converting between inches and millimeters

### Sequence
1. Introduce the project briefing to studnets give students the 3D model and callipers teach them how to measure using the callipers and have them measure and document the measured dimensions of the object.
2. Have students model the object in openSCAD
3. Have students render the model or render a model they coded and either email it to you or compelete steps 4-6

The next steps are optional but highly suggested to improve studnets indepednence 
4. Go through the "how to 3D print: slicing" document with students ** NEEDS DOC **
5. Have students slice their object and either export their GCODE to an SD card or email it to you to 3D print (Make sure to double check models with students to make sure there slicing configuration profiles are correct) ** NEEDS DOC **
6. Instead of step five set up octoprint and have students independently print wirelessly. ** NEEDS DOC **

7. Reflect on the 3D printed object with students did it turn out how they expected does it measure the same as the parameters they coded? Were their any issues with teh print process? Have them write their reflections in their technical documentation.

## 1_2 Basic Shape Modifications: Translations
### Materials
- computer with openSCAD installed
- 3D printed primatives
- 3D printed 1_2 models
- APH graph board (two for +z and -z)

### Sequence
- Review center flag
- Translation
- The width of a sphere/cylinder and translating cented objects by half of their dimension 
- Different octants
 
### Check for understanding
- What is the width of a cylinder?
- What is the width of a sphere?
- What is the height of a sphere?
- Translation practice assignment

## 1_3 Debugging Resolution and translation Pracitce
### Materials
- computer with openSCAD installed
- 3D printed primatives med resolution (scale as needed in 3d printer slicer program but keep porportions locked for atleast the cylinder and sphere)
- 3D printed 1_2 models

### Sequence
- 1_3 Debugging 
  - ctrl alt e and arrow key around if you are getting an error after previewing
  - this lesson just goes over syntax errors for actual bugs check out lesson 2 debugging lesson
- 1_3 Resolution
  - $fn at the top always after header...

### Check for understanding
- What is debugging?
- Why do you need to debug?
- What type of debugging are we going to focus on today?
- What is $fn how does changing it effect your code, the shape,  its rendering/previewing?


## Project 1 Tactile Floor Markers

### Materials
- Failed 3d printed prototype
- Example Project doc file
- Project briefing file
- Callipers
- A room with furniture that can be moved and needs to be put back in place (this can be made up, but its helpful if its a real life example or use for students)

### Objectives
- 3D printing 
- Designing a solution based on functional requirements and constraints
- Preparing technical notes
- Meauring using calipers
- Testing multiple iterations

### Sequence
*Project should take around 2 weeks*
1. Have student read the design briefing.
2. Have students sketch out some ideas and take measurements.
3. Have students pick the idea they would like to implement and begin programming it.
4. Have students 3D print their prototype and evaluate it against the projects functional requirements and criteria.
5. Have students reiterate on their prototype. 
6. Have students finish their documentation file and take atleast one product photo. 
7. Have students send all virutal deliverables via email and present the physical device in class.
