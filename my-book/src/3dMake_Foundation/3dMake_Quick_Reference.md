# 3dMake Foundation Quick Reference Guide

**Fast lookup for lessons, projects, resources, and common tasks**

---

## Lesson Quick Reference

### All 11 Lessons at a Glance

| # | Title | Duration | Level | Main Topics | Key Project |
|---|-------|----------|-------|------------|------------|
| 1 | Environmental Configuration | 60–90m | Beginner | Setup, project structure, `3dm build` | None |
| 2 | Geometric Primitives & CSG | 60m | Beginner | Primitives, CSG operations, debugging | None |
| 3 | Parametric Architecture | 60m | Beginner+ | Modules, libraries, parameters | None |
| 4 | AI Verification | 45–60m | Intermediate | `3dm info`, validation, design documentation | None |
| 5 | Safety & Physical Interface | 60–90m | Intermediate | Safety protocols, materials, pre-print checks | None |
| 6 | 3dm Commands & Text | 60–90m | Intermediate | `3dm describe/preview/orient/slice`, embossing | 🎮 Keycap |
| 7 | Parametric Transforms | 75–90m | Intermediate+ | Transforms, multi-part design, assembly | 📱 Phone Stand |
| 8 | Advanced Parametric Design | 90–120m | Advanced | Tolerance, interlocking features, snap-fits | 🎁 Stackable Bins |
| 9 | Automation & Workflows | 60–90m | Advanced | PowerShell scripting, batch processing, CI/CD | 🔑 Batch Automation |
| 10 | Troubleshooting & Mastery | 120–150m | Advanced | Measurement, QA testing, diagnostics | 🎲 QA + 🔍 Audit |
| 11 | Stakeholder-Centric Design | 90–120m | Advanced+ | Design thinking, user research, iteration | 📿 Jewelry Holder |

---

## 4 Reference Appendices

Quick links to comprehensive reference materials:

| Appendix | Focus | Size | Use When |
|----------|-------|------|----------|
| **[A: Comprehensive Slicing Guide](Appendix_A_Comprehensive_Slicing_Guide.md)** | 7 major slicers | 1,500+ lines | Slicing questions, slicer reference |
| **[B: Material Properties](Appendix_B_Material_Properties.md)** | 6 materials | 1,200+ lines | Choosing material, troubleshooting prints |
| **[C: Tolerance & QA](Appendix_C_Tolerance_QA.md)** | Measurement procedures | 1,200+ lines | Quality verification, measurement techniques |
| **[D: PowerShell Integration](Appendix_D_PowerShell_Integration.md)** | 5 automation scripts | 1,100+ lines | Building automation, batch processing |

---

## Learning Paths

### Path 1: Complete Mastery (18–22 hours)
→ **Lessons 1–11 + All Appendices**

Best for: Complete skill development, comprehensive understanding

### Path 2: Design Focus (12–15 hours)
→ **Lessons 1–3, 6–8, 11 + Appendices A, B, C**

Best for: Experienced makers new to programmatic CAD

### Path 3: Project-Based (14–18 hours)
→ **Lessons 1–5 (Foundations) → 6 (Keycap) → 7 (Stand) → 8 (Bins) → 9 (Automation) → 10 (Troubleshooting) → 11 (Leadership)**

Best for: Learning through building

### Path 4: Safety & Printing (10–12 hours)
→ **Lessons 1, 2, 5, 6, 10 + Appendices A, B, C**

Best for: Focus on practical printing and quality

---

## 3dm Command Reference

### Essential Commands

```bash
# Setup
./3dm setup                 # Initial configuration

# Development
3dm edit-model file.scad    # Open in editor
3dm build src/main.scad     # Generate STL from SCAD

# Inspection
3dm describe file.scad      # Text analysis (AI if configured)
3dm preview file.scad       # Generate 2D tactile preview

# Optimization
3dm orient file.scad        # Suggest print orientation

# Production
3dm slice file.scad         # Generate G-code
3dm send build/main.gcode   # Send to printer

# Libraries
3dm lib list                # Show available libraries
3dm lib install BOSL2       # Install a library
```

### Command Chaining

```bash
# Sequential with error handling
3dm build src/main.scad && 3dm slice src/main.scad && echo "Ready to print"

# Loop through files
for f in src/*.scad; do 3dm build "$f" && 3dm slice "$f"; done
```

---

## OpenSCAD Quick Reference

### Primitives

```openscad
cube([width, height, depth], center=false);
sphere(r=radius, $fn=32);
cylinder(r=radius, h=height, $fn=32);
```

### Transforms

```openscad
translate([x, y, z]) { ... }
rotate([x_deg, y_deg, z_deg]) { ... }
scale([x, y, z]) { ... }
```

### Boolean Operations

```openscad
union() { shape1; shape2; }         // Combine
difference() { shape1; shape2; }    // Subtract
intersection() { shape1; shape2; }  // Keep overlap
```

### Modules

```openscad
module my_shape(size) {
  cube([size, size, size]);
}

my_shape(20);   // Call module
```

### Parameters

```openscad
width = 50;     // mm
height = 30;    // mm
inner = width - 2*wall;
```

---

## Projects Reference

### Project 1: Parametric Keycap (Lesson 6)

**Key Parameters:**
```openscad
key_size = 18;      // mm
key_height = 12;    // mm
wall = 1.2;         // mm
letter = "A";       // Character
```

**Variants to Try:**
- Small: 12mm, 10mm height
- Medium: 18mm, 12mm height
- Large: 24mm, 14mm height

**Files:**
- Code: Lesson 6 (Keycap section)
- Output: keycap_*.scad, keycap_*.stl

---

### Project 2: Phone Stand (Lesson 7)

**Key Parameters:**
```openscad
phone_width = 75;   // mm
base_width = 85;    // mm
angle = 60;         // degrees
lip_height = 15;    // mm
```

**Configurations:**
| Phone | Width | Angle | Result |
|-------|-------|-------|--------|
| iPhone | 60mm | 60° | Portrait viewing |
| iPad | 100mm | 40° | Landscape viewing |
| Tablet | 150mm | 35° | Document viewing |

**Files:**
- Code: Lesson 7 (Phone Stand section)
- Output: stand_*.stl, stand_*.gcode

---

### Project 3: Stackable Bins (Lesson 8)

**Key Parameters:**
```openscad
bin_w = 80;         // width (mm)
bin_d = 120;        // depth (mm)
bin_h = 60;         // height (mm)
wall = 2;           // thickness (mm)
stack_clear = 0.6;  // tolerance (mm) — CRITICAL
```

**Tolerance Testing:**
```
stack_clear = 0.4mm  → Too tight (hard to stack)
stack_clear = 0.6mm  → Ideal (smooth fit)
stack_clear = 0.8mm  → Too loose (unstable)
```

**Files:**
- Code: Lesson 8 (Bins section)
- Output: bin_*.stl, tolerance_matrix.md

---

## Code Template Library

### Generic Parametric Part Template

```openscad
// ====== PARAMETERS (customize here) ======
param1 = 50;        // mm
param2 = 30;        // mm
param3 = 5;         // mm
$fn = 32;           // Resolution (lower = faster)

// ====== CALCULATED PARAMETERS ======
derived_param = param1 - 2*param3;

// ====== MODULES ======
module my_part() {
  cube([param1, param2, param3]);
}

// ====== MAIN ======
my_part();
```

### Hollow Box Template

```openscad
outer_size = 50;
inner_size = 40;
wall = 5;

difference() {
  cube([outer_size, outer_size, outer_size]);
  translate([wall, wall, wall])
    cube([inner_size, inner_size, inner_size]);
}
```

### Batch Build Script Template

```bash
#!/bin/bash
# batch_build.sh

for scad in src/*.scad; do
  name=$(basename "$scad" .scad)
  echo "Building: $name"
  3dm build "$scad" || continue
  cp "build/main.stl" "build/${name}.stl"
done
```

---

## Troubleshooting Quick Fixes

### Problem: Model won't build

**Diagnosis:**
```bash
3dm describe file.scad
# Look for error messages
```

**Common Fixes:**
- Check syntax (missing semicolons, parentheses)
- Look for non-manifold geometry
- Use `$fn=12` for faster test renders

### Problem: Parts don't fit together

**Diagnosis:**
- Print and test fit
- Measure with calipers

**Solution:**
- Adjust `stack_clear` (smaller = tighter)
- Increase `wall` thickness
- Test with tolerance matrix

### Problem: Embossed text looks bad

**Diagnosis:**
- Check preview in slicer
- Use `3dm preview` for tactile version

**Solution:**
- Increase `letter_raise` (deeper emboss)
- Use larger `$fn` in `text()`
- Simplify character or use different size

### Problem: Print fails

**Diagnosis:**
- Check slicer layer preview
- Verify bed adhesion and temperature

**Solution:**
- Check pre-print checklist (Lesson 5)
- Adjust print temperature
- Verify bed is level and clean

---

## Assessment Checklist

### Lesson Completion Criteria

- [ ] Watched/read entire lesson
- [ ] Completed all step-by-step tasks
- [ ] Reached all checkpoints
- [ ] Answered all quiz questions (self-assessed)
- [ ] Attempted at least 3 extension problems
- [ ] Documented findings

### Project Completion Criteria

- [ ] Code builds without errors
- [ ] All parameters functional
- [ ] STL generated and inspected
- [ ] Measurements documented
- [ ] Assembly tested (if multi-part)
- [ ] README or documentation included

### Quality Standards

- [ ] Code is well-commented
- [ ] Parameters have clear names and units
- [ ] Modules are reusable
- [ ] Design follows DRY principle
- [ ] Documentation is complete

---

## Resources & Links

### Official Docs
- [OpenSCAD Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
- [3DMake GitHub](https://github.com/tdeck/3dmake)
- [BOSL2 Library](https://github.com/revarbat/BOSL2)

### Tutorials
- [OpenSCAD Basics](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language)
- [3D Printing Guide](https://www.prusa3d.com/support/)

### Community
- [OpenSCAD Forums](https://forum.openscad.org/)
- [r/3Dprinting](https://www.reddit.com/r/3Dprinting/)

---

## Tips & Tricks

### Debugging
- Lower `$fn` to 8–12 for faster renders during development
- Use `3dm describe` frequently to catch issues early
- Test components individually before assembling
- Generate `3dm preview` for 2D tactile verification

### Design
- Keep parameters at the top of file for easy modification
- Use descriptive names (not `w`, use `width`)
- Include units in comments
- Document parameter ranges (e.g., `// 0–100 mm`)

### Organization
- Use `src/` for SCAD files, `lib/` for modules, `build/` for outputs
- Create variants by copying files and renaming
- Use bash scripts for batch operations
- Archive successful builds with timestamps

### Accessibility
- Always use `3dm describe` to verify non-visual usability
- Generate `3dm preview` for tactile inspection
- Document measurements clearly
- Test assembly without visual guidance

---

## Glossary

| Term | Definition |
|------|-----------|
| **CSG** | Constructive Solid Geometry — combining shapes using union/difference |
| **Manifold** | Water-tight geometry with clear inside/outside |
| **Parametric** | Driven by variables; changing parameters updates design |
| **Tolerance** | Acceptable variation in dimensions |
| **Stack-up** | Cumulative error from multiple tolerances |
| **Module** | Reusable code block in OpenSCAD |
| **$fn** | Resolution parameter (higher = more detail but slower) |
| **G-code** | Machine instructions for 3D printer |
| **STL** | 3D model file format for printing |

---

## Quick Answers

**Q: Where do I put my SCAD files?**  
A: In the `src/` folder of your 3dMake project

**Q: How do I test if my design will fit?**  
A: Use the tolerance testing matrix; print variants with different parameters

**Q: What should I measure after printing?**  
A: Critical dimensions and compare to design specifications

**Q: How do I fix non-manifold geometry?**  
A: Use the 0.001 offset rule: `translate([0, 0, 0.001])` before subtracting

**Q: Can I combine multiple SCAD files?**  
A: Yes, use `include <path/to/file.scad>` or `use <path/to/file.scad>`

**Q: How do I make designs accessible?**  
A: Use `3dm describe` and `3dm preview` and include written measurements/descriptions

---

**Last Updated:** February 2026  
**Version:** 1.0
