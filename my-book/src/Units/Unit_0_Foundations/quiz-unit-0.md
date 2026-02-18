# Quiz: Unit 0 Foundations

*Complete this quiz after finishing Lessons 0.1 through 0.6. Submit answers to your instructor.*

---

## Section 1: Safety (Lesson 0.1)

1. What is the approximate operating temperature of the printer nozzle?

2. List two things you should never do while the printer is operating.

3. Why should you not stand directly over the printer while it is running?

4. What should you do if you smell burning or see smoke from the printer?

5. True or False: PLA filament is completely harmless and requires no ventilation.

---

## Section 2: How 3D Printing Works (Lesson 0.2)

6. What does FDM stand for?

7. Describe in your own words how an FDM printer builds an object. Use the words "layer," "filament," and "nozzle" in your answer.

8. What is infill? What does 15% infill mean?

9. A model has an overhang — a portion that sticks out horizontally with nothing below it. What does the slicer add to support this?

10. Put the following steps of the 3D printing workflow in the correct order:
    - Slice the file in PrusaSlicer
    - Load G-code onto the printer
    - Write code in OpenSCAD
    - Export an STL file
    - Print the object

---

## Section 3: Calipers (Lesson 0.3)

11. What should the caliper display read before you take any measurement?

12. You measure the same object three times and get 24.1 mm, 23.9 mm, and 24.2 mm. What value would you use in your OpenSCAD code and why?

13. Which part of the caliper do you use to measure the inside diameter of a hole?

14. Why is a ruler not precise enough for 3D printing design work?

---

## Section 4: OpenSCAD Part 1 (Lesson 0.4)

15. Write the OpenSCAD code to create a box that is 50 mm long, 30 mm wide, and 10 mm tall. Use variables — do not use raw numbers inside the cube command.

16. What is the difference between pressing F5 and pressing F6 in OpenSCAD?

17. What does `$fn = 50;` do?

18. Write the OpenSCAD code to create a sphere with a radius of 15 mm with smooth rendering.

---

## Section 5: OpenSCAD Part 2 (Lesson 0.5)

19. Write the OpenSCAD code that creates a 20 mm cube with a cylindrical hole (radius 3 mm) going all the way through the center vertically. Use `difference()`.

20. What is the purpose of extending the subtracting shape slightly beyond the base shape (e.g., starting the cylinder at Z = -1 instead of Z = 0) when using `difference()`?

21. What does `translate([10, 0, 0])` do to a shape?

22. In OpenSCAD, what happens when you list two shapes without any Boolean operator? Does the result look different from using `union()`?

---

## Section 6: Slicing (Lesson 0.6)

23. What is a slicer, and what file format does it output?

24. You need to print a prototype quickly to test if a design works. Which layer height would you choose and why: 0.10 mm, 0.20 mm, or 0.30 mm?

25. A model has a large horizontal surface 30 mm off the build plate with nothing below it. What slicer setting do you need to turn on?

26. After slicing, where in PrusaSlicer can you see exactly how the printer will build your model layer by layer?

27. You slice a model and the estimated print time is 4 hours and 20 minutes. You change the layer height from 0.20 mm to 0.30 mm. Will the new print time be longer, shorter, or the same? Why?

---

## Short Answer

28. Explain in 2–3 sentences why we use variables in OpenSCAD instead of typing numbers directly.

29. A student designs a box to hold a command strip, types in the exact measured dimensions, prints it, and finds the command strip doesn't fit. Name two reasons this might happen and what they could do to fix it.

30. You are about to start a 3-hour print and need to leave the classroom. What should you do?
