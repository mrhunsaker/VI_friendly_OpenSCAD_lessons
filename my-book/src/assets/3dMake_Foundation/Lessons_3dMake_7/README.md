# Lesson 7 Code Examples - Parametric Transforms and the Phone Stand Project

## Files

- **phonestand.scad** - Intermediate-level example of transforms and Minkowski operations in a multi-part assembly

## Learning Objectives

- Master parametric transforms: `rotate()`, `translate()`, `scale()`
- Use Minkowski operations to create rounded/filleted edges
- Design multi-part assemblies with precise positioning
- Understand the order of operations in nested transforms

## How to Use This Code

1. Copy `phonestand.scad` into your 3dMake project's `src/` folder
2. Open in OpenSCAD (or use `3dm edit-model phonestand.scad`)
3. Press F5 to preview; F6 for full render
4. Modify the top-level parameters:
   - `angle` - Adjust stand tilt (degrees)
   - `width` / `depth` - Change platform size
   - `filletr` - Adjust edge rounding radius
   - `lipheight` - Control phone lip height
5. Run `3dm build` to generate STL
6. Test print to ensure phone fits securely

## Key Concepts

- **Transforms**: How `rotate()`, `translate()`, and `scale()` position objects
- **Minkowski Operations**: Creating rounded edges by combining shapes
- **Multi-Part Assembly**: Combining multiple modules with `union()`
- **Coordinate System Visualization**: Understanding how transforms work in 3D space
- **Parametric Variation**: Quickly create different sizes by changing variables

## Customization Ideas

- Create variants for different phone sizes
- Adjust angle for different viewing preferences
- Add rubberized grip area
- Create matching phone stand in different colors

## Common Issues & Solutions

**Problem**: Base and back don't align  
**Solution**: Check `translate()` coordinates; ensure they sum correctly

**Problem**: Edges are sharp instead of rounded  
**Solution**: Verify `filletr` value is positive; increase `$fn` for smoother curves

**Problem**: Phone doesn't fit in stand  
**Solution**: Reduce `lipheight` or adjust `width`/`depth` parameters

## Related Files

- See Lesson 7: [Lesson 7 Markdown](../../../3dMakeFoundation/Lessons3dMake7/Lessons3dMake7.md) for full tutorial
- Reference: [OpenSCAD Cheat Sheet](../../../3dMakeFoundation/Lessons3dMake2/openscad-cheat-sheet.md) for transform and Minkowski syntax
- See Appendix D: [PowerShell Integration](../../../3dMakeFoundation/AppendixDPowerShellIntegration.md) for scripting multiple variants
