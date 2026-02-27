# 3dMake Foundation Final Exam {#3dmake_foundation-3dmake_final_exam}

Name:  | Date:

Total Points: 100 (4 points per problem)

Instructions:

- Answer all 25 questions
- For code errors, identify the specific problem and explain why it's wrong
- For behavioral questions, show your reasoning
- For design problems, explain your approach and why it solves the stated challenge
- You may reference the OpenSCAD documentation and appendices
- All work must be your own

## Section 1: Error Detection & Code Analysis (Problems 1-10)

For each code block, identify any errors. If there is an error, explain what's wrong and how to fix it. If the code is correct, state "No error" and explain what the code does.

### Problem 1: Primitive Definition Error

```openscad
cube([10, 10, 10], center=true);
sphere(r=5, $fn=16);
cylinder(h=20, r=8);
```

Question: Is there an error in this code? If yes, identify it. If no, explain what this code renders.

Answer:

### Problem 2: Transform Syntax Error

```openscad
translate([5, 5, 0])
  rotate([0, 45, 0])
    cube([10, 10, 10], center=true);
```

Question: Does this code have a syntax error? Explain what this code does.

Answer:

### Problem 3: CSG Operation Error

```openscad
cube([20, 20, 20], center=true);
difference() {
  sphere(r=12);
  cylinder(h=30, r=5, center=true);
}
```

Question: What is wrong with this CSG operation? Explain the fix.

Answer:

### Problem 4: Module Definition Error

```openscad
module bracket(width, height, depth) {
  cube([width, height, depth], center=true);
  translate([width/2 + 2, 0, 0])
    cube([4, height, depth/2], center=true);
}
bracket(20, 15, 10);
```

Question: Is there an error in this module definition or call? Why or why not?

Answer:

### Problem 5: Parameter & Variable Scoping Error

```openscad
wallthickness = 2;
module hollowcube(size) {
  difference() {
    cube([size, size, size], center=true);
    cube([size - wallthickness, size - wallthickness, size - wallthickness], center=true);
  }
}
hollowcube(20);
```

Question: Will this code work correctly? If not, what is the problem and how would you fix it?

Answer:

### Problem 6: Loop & Iteration Error

```openscad
for (i = [0:5:20]) {
  translate([i, 0, 0])
    cube([4, 4, 4]);
}
```

Question: Will this code produce 5 cubes? Show the positions and explain why or why not.

Answer:

### Problem 7: Center Parameter Misunderstanding

```openscad
cube([10, 10, 20], center=false);
sphere(r=5);
```

Question: What is the relationship between these two shapes? Where would the sphere appear relative to the cube?

Answer:

### Problem 8: Intersection Error

```openscad
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=8, $fn=32);
}
```

Question: Is there an error? What will this code render?

Answer:

### Problem 9: Nested Transform Error

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    translate([5, 0, 0])
      cube([5, 5, 5], center=true);
```

Question: Are the transforms applied in the correct order? Trace the final position of the cube.

Answer:

### Problem 10: Resolution Parameter Error

```openscad
sphere(r=10, $fn=4);
cylinder(h=20, r=8, $fn=3);
cube([10, 10, 10]);
```

Question: Identify the problem(s) with resolution in this code. What will happen when rendered?

Answer:

## Section 2: Code Behavior & Theory (Problems 11-17)

For each question, show your reasoning. You may draw diagrams if helpful.

### Problem 11: Vertex Coordinates

Question: A cube is defined as `cube([10, 10, 20], center=false)`.

a) List the XYZ coordinates of all 8 vertices.

Answer:

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

b) Now define the SAME cube with `center=true`. List the NEW coordinates of all 8 vertices.

Answer:

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

### Problem 12: Sphere Geometry

Question: Explain the difference between `sphere(r=10, $fn=8)` and `sphere(r=10, $fn=128)`.

Which would you use for a prototype and which for final printing? Why?

Answer:

### Problem 13: Transform Order

Question: Given this code:

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    cube([5, 5, 5], center=true);
```

Does the order matter? What if you swap translate and rotate? Show both final positions.

Answer:

### Problem 14: Boolean Operation Behavior

Question: You have a solid cube and you want to create a hole through it. Which CSG operation would you use: `union()`, `difference()`, or `intersection()`?

Explain your choice and write pseudocode showing how you'd accomplish this.

Answer:

### Problem 15: Parametric Design Advantage

Question: Compare these two approaches:

Approach A: Hard-coded cube with fixed dimensions

```openscad
cube([10, 10, 20]);
```

Approach B: Parametric cube

```openscad
module parametricbox(width, height, depth) {
  cube([width, height, depth], center=true);
}
parametricbox(10, 10, 20);
```

Why is Approach B better for design iteration? Give an example of how you'd use it.

Answer:

### Problem 16: Scale Transform Behavior

Question: If you apply `scale([2, 1, 0.5])` to a `cube([10, 10, 10], center=true)`, what are the NEW dimensions of the cube?

Answer: New dimensions:

Show your calculation:

### Problem 17: Library Organization

Question: You've created three useful modules:

- `bracket(width, height, depth)`
- `hollowcube(size, wallthickness)`
- `connectorpin(diameter, height)`

How would you organize these into a reusable library? What file structure would you create and why?

Answer:

## Section 3: Design & Problem-Solving (Problems 18-25)

These problems test your ability to design solutions, debug real-world issues, and think creatively.

### Problem 18: Tolerance Design Challenge

Question: You're designing a snap-fit connector. The male part has a thickness of 2mm. The female slot needs to accommodate this part with enough flexibility to snap but not fall out.

Should the slot be:
a) Exactly 2mm wide
b) 2.1mm wide
c) 1.9mm wide
d) 2.5mm wide

Explain your choice and the design thinking behind it.

Answer:

### Problem 19: Design Iteration Problem

Question: You print a keycap with `keysize=12` and the text embossing is too shallow to feel. Your code uses:

```openscad
linearextrude(height=1)
  text("A", size=8);
```

What parameter(s) would you adjust to make the embossing deeper? Show your new code.

Answer:

### Problem 20: Error Diagnosis

Question: Your 3dMake build fails with this error: "Geometry is non-manifold." You have this code:

```openscad
difference() {
  cube([20, 20, 20], center=true);
  cylinder(h=30, r=4, center=true);
}
```

Why might this fail? What's the common fix for non-manifold geometry?

Answer:

### Problem 21: Multi-Part Assembly

Question: You're designing a two-part box (lid + base). The base has dimensions [50, 30, 20]. The lid should sit on top of the base.

Write parametric modules for both parts and show how you'd position them together. Include appropriate positioning logic.

Answer:

```openscad
module base(length, width, height) {
  // Your code here
}
module lid(length, width, height) {
  // Your code here
}
// Positioning code here:
```

### Problem 22: Optimization Challenge

Question: You have a design that takes 5 minutes to render. You notice you have:

```openscad
sphere(r=10, $fn=256);
cylinder(h=20, r=8, $fn=256);
cube([20, 20, 20]);
```

Which parameter(s) would you reduce to speed up rendering while maintaining acceptable quality for a prototype? Explain your choices.

Answer:

### Problem 23: Real-World Constraint Problem

Question: A stakeholder requests a custom handle for a tool. They specify:

- Must fit a hand (approximately 80mm long)
- Must accommodate fingers 60mm long inside
- Wall thickness must be at least 3mm for durability
- Should be ergonomic (slightly curved)

Sketch or describe a parametric design for this handle. What parameters would you expose to allow customization?

Answer:

### Problem 24: Code Reusability Challenge

Question: You've created a single keycap module. Now you need to create a keyboard with 5 keys arranged in a row. Keys are spaced 15mm apart.

Write code using a loop that creates 5 keycaps with letters A-E, properly spaced.

Answer:

```openscad
module keycap(letter, keysize=10) {
  // Keycap code here (you can assume this exists)
}
// Your loop code here:
```

### Problem 25: Design Thinking & Iteration

Question: You've printed Iteration 1 of a product and measured the results. The wall thickness is 3mm but feels too fragile. In Iteration 2, you increased it to 5mm, and now it feels too rigid and won't flex as intended.

For Iteration 3, what thickness would you try and why? How would you make this decision more scientific/data-driven?

Answer:

## Bonus Challenge (Optional, +5 points)

Question: Design a parametric model for a custom assistive technology device (e.g., a tactile measuring tool, a custom gripper, an adapted eating utensil, etc.).

- Identify the user's specific need
- Specify the key dimensions and parameters
- Write at least one module with realistic dimensions
- Explain how the design would be tested and iterated

Answer:

```openscad
// Your design here:
```

User Need:

Parameters:

Testing Plan:

## Scoring Rubric

| Points per Problem | Criteria                                                                         |
|--------------------|----------------------------------------------------------------------------------|
| 4                  | Correct answer with clear, complete explanation; demonstrates deep understanding |
| 3                  | Mostly correct answer; minor gaps in explanation or reasoning                    |
| 2                  | Partially correct; shows some understanding but has significant gaps             |
| 1                  | Minimal effort; shows limited understanding                                      |
| 0                  | No answer or completely incorrect                                                |

Total Possible: 100 + 5 bonus = 105 points

## References You May Use

- [3dMake Quick Reference](3dMake_Quick_Reference.md)
- [OpenSCAD Cheat Sheet](Lessons_3dMake_2/openscad-cheat-sheet.md)
- [Appendix A: Comprehensive Slicing Guide](Appendix_A_Comprehensive_Slicing_Guide.md)
- [Appendix C: Tolerance Testing & QA Matrix](Appendix_C_Tolerance_QA.md)
- [Appendix D: PowerShell Integration](Appendix_D_PowerShell_Integration.md)

End of Final Exam

Submission Instructions:

1. Answer all 25 questions completely
2. Show your work for calculations and reasoning
3. Include code samples where requested
4. Submit as a PDF with your name and date
5. Scoring will be based on correctness, clarity, and depth of understanding

Good luck! [celebration]
