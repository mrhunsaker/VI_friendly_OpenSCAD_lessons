# Lesson 6 Code Examples - Practical 3dm Commands and Text Embossing {#assets_3dmake_foundation_lessons_3dmake_6-readme}

## Files

- **cube_keycap.scad** - Beginner-level example of text embossing with parametric design

## Learning Objectives

- Master text embossing in OpenSCAD using `linearextrude()` and `text()`
- Create parametric designs with top-level variables
- Use boolean operations (difference) to create hollow structures
- Apply 3dm commands: `describe`, `preview`, `orient`, `slice`

## How to Use This Code

1. Copy `cube_keycap.scad` into your 3dMake project's `src/` folder
2. Open in OpenSCAD (or use `3dm edit-model cube_keycap.scad`)
3. Press F5 to preview; F6 for full render
4. Modify the top-level parameters:
   - `letter` - Change to your initial
   - `keysize` - Adjust keycap dimensions
   - `letterraise` - Control emboss depth
5. Run `3dm build` to generate STL
6. Use `3dm describe` and `3dm preview` for accessibility features

## Key Concepts

- **Text Embossing**: Using `linearextrude()` to raise text on a surface
- **Parametric Customization**: All dimensions controlled by variables
- **Boolean Operations**: Using `difference()` to create hollow structures
- **Modular Design**: Separating `shell()` and `emboss()` modules for clarity

## Customization Ideas

- Create keycaps for different keyboard layouts
- Adjust wall thickness for different strengths
- Add decorative patterns alongside text
- Create variants for different languages or symbols

## Related Files

- See Lesson 6: [Lesson 6 Markdown](../../../3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md) for full tutorial
- See Project: [Parametric Keychain Project](../../../3dMake_Foundation/Lessons_3dMake_6/parametric-keychain.md) for more text embossing exercises
- Reference: [OpenSCAD Cheat Sheet](../../../3dMake_Foundation/Lessons_3dMake_2/openscad-cheat-sheet.md) for `text()` and `linearextrude()` syntax
