# 3dMake Foundation Code Examples & Assets

This directory contains all OpenSCAD code examples and supporting materials for the 3dMake Foundation curriculum (Lessons 1-11).

## Folder Structure

```
assets/3dMake_Foundation/
├── README.md (this file)
├── Lessons_3dMake_6/
│   ├── README.md
│   └── cube_keycap.scad
├── Lessons_3dMake_7/
│   ├── README.md
│   └── phone_stand.scad
└── Lessons_3dMake_8/
    ├── README.md
    └── stackable_bins.scad
```

## Code Examples by Lesson

### Lesson 6: Practical 3dm Commands and Text Embossing

**Folder**: `Lessons_3dMake_6/`  
**File**: `cube_keycap.scad`  
**Level**: Beginner  
**Skills**: Text embossing, boolean operations, parametric design

A simple keycap with embossed text. Great for learning:
- How to use `linear_extrude()` and `text()`
- Creating hollow structures with `difference()`
- Running 3dm commands (`describe`, `preview`, `orient`, `slice`)

See `Lessons_3dMake_6/README.md` for detailed learning guide.

---

### Lesson 7: Parametric Transforms and the Phone Stand Project

**Folder**: `Lessons_3dMake_7/`  
**File**: `phone_stand.scad`  
**Level**: Intermediate  
**Skills**: Transforms, Minkowski operations, multi-part assemblies

A functional phone stand combining:
- `rotate()`, `translate()`, and `scale()` transforms
- Minkowski operations for rounded edges
- Multi-part assembly with `union()`
- Parametric customization for different phone sizes

See `Lessons_3dMake_7/README.md` for detailed learning guide.

---

### Lesson 8: Advanced Parametric Design and Interlocking Features

**Folder**: `Lessons_3dMake_8/`  
**File**: `stackable_bins.scad`  
**Level**: Advanced  
**Skills**: Tolerance design, interlocking features, multi-part validation

Stackable storage bins demonstrating:
- Precise clearance design (tolerance stack-up)
- Interlocking rims for assembly without fasteners
- Chamfered edges for print quality
- Parametric variation for different sizes

See `Lessons_3dMake_8/README.md` for detailed learning guide.

---

## How to Use These Files

### Option 1: Direct Import into OpenSCAD

1. Download or locate the `.scad` file
2. Open in OpenSCAD
3. Review comments for parameter explanations
4. Modify top-level parameters to experiment
5. Press F5 for preview; F6 for full render
6. Export as STL when ready

### Option 2: Use with 3dMake Project

1. Copy the `.scad` file into your 3dMake project's `src/` folder
2. Use `3dm edit-model filename.scad` to open in editor
3. Run `3dm build` to generate STL
4. Use `3dm describe` and `3dm preview` for accessibility features
5. Run `3dm slice` to generate G-code for printing

### Option 3: Reference While Learning

- Keep the `.scad` file open alongside the corresponding lesson markdown
- Compare code with lesson explanations
- Trace through module definitions and understand how they work
- Modify parameters in real-time to see effects

## Design Pattern Reference

### Pattern 1: Parametric Customization (Lesson 6)

```openscad
// Top-level parameters (easy to customize)
parameter_name = value;  // unit description

// Modules for organization
module feature() {
  // Implementation
}

// Final assembly
union() {
  feature();
}
```

### Pattern 2: Multi-Part Assembly with Transforms (Lesson 7)

```openscad
// Base parameters
size = 100;

// Component modules
module part1() { ... }
module part2() { ... }

// Positioning with transforms
translate([x, y, z])
rotate([rx, ry, rz])
  part1();

// Assembly
union() {
  part1();
  part2();
}
```

### Pattern 3: Tolerance-Aware Design (Lesson 8)

```openscad
// Critical parameters for tolerance
outer_dim = 100;
wall_thickness = 2;
clearance = 0.6;  // Small gap for fit

inner_dim = outer_dim - 2*wall_thickness - 2*clearance;

module outer_shell() { cube([outer_dim, outer_dim, height]); }
module inner_cavity() { cube([inner_dim, inner_dim, height]); }

difference() {
  outer_shell();
  inner_cavity();
}
```

## Learning Progression

1. **Start with Lesson 6** (cube_keycap.scad)
   - Learn text embossing
   - Understand module organization
   - Apply basic 3dm commands

2. **Move to Lesson 7** (phone_stand.scad)
   - Practice with transforms
   - Combine multiple parts
   - Use Minkowski for rounded edges

3. **Progress to Lesson 8** (stackable_bins.scad)
   - Design with tolerances
   - Test and iterate
   - Validate with measurements
   - Print multiple variants

## Customization Exercises

### Exercise Set A: Modify Individual Parameters

For each code example, try changing:
- Dimensions (size, height, width)
- Visual properties (letter, number of parts)
- Assembly properties (angle, spacing)

### Exercise Set B: Create Variants

Extend each design:
- Add new features alongside the main design
- Create smaller/larger versions
- Change decorative elements

### Exercise Set C: Combine Patterns

After learning each pattern:
- Mix text embossing with transforms
- Add tolerance design to assembled parts
- Create a complex multi-part design

## Reference Links

- **Lesson 6**: [Practical 3dm Commands and Text Embossing](../../../3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md)
- **Lesson 7**: [Parametric Transforms and the Phone Stand](../../../3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.md)
- **Lesson 8**: [Advanced Parametric Design](../../../3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md)
- **OpenSCAD Cheat Sheet**: [Syntax Quick Reference](../../../Reference_Materials/openscad-cheat-sheet.md)
- **3dMake Setup Guide**: [Commands & Workflow](../../../Reference_Materials/3dmake-setup-guide.md)

## Troubleshooting

**File not found when opening in OpenSCAD**
- Ensure file paths are correct
- Use absolute paths or place files in current working directory
- Check that `.scad` extension is present

**Model doesn't preview or renders incorrectly**
- Check for syntax errors (mismatched brackets, missing semicolons)
- Verify all module definitions are complete
- Use OpenSCAD's "Show Errors" to debug

**Parameters don't change the design**
- Ensure you modified top-level parameters (not inside comments)
- Save the file and re-preview (F5)
- Check that parameter names are spelled correctly throughout code

## Tips for Success

1. **Start Simple**: Begin with Lesson 6 example before moving to advanced projects
2. **Read Comments**: Every `.scad` file includes explanatory comments
3. **Experiment**: Try different parameter values to understand effects
4. **Print Small**: Test-print with small parameters first to save material
5. **Measure & Iterate**: Use calipers to validate and adjust designs (Lesson 8)
6. **Document Changes**: Keep notes on what parameters worked for your use case

---

**Last Updated**: February 20, 2026  
**Status**: Complete — All code examples integrated and documented
