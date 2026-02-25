# Parametric Keychain - Extension Project {#assets_3dmake_foundation_lessons_3dmake_6_parametric_keychain-parametric_keychain}

Estimated time: 2-4 hours

## Learning Objectives

By completing this project, you will:

- Create parametric OpenSCAD modules that accept user inputs
- Implement 2D text manipulation and 3D extrusion techniques
- Generate and test multiple design variants systematically
- Document design parameters for reproducibility and user customization

## Objective

- Create a parametric keychain design that adapts to custom text, dimensions, and materials.

## Tasks

1. Create `keychain.scad` with top-level parameters: `width`, `height`, `thickness`, and `text`.
2. Implement embossed or debossed text using `linearextrude()` of a 2D text shape (or simulate with simple geometry if system lacks text support).
3. Produce three size variants and export STLs; record print settings.
4. Test attachment point for common key rings and report fit.

## Deliverable

- Source `keychain.scad` file with parametric variables documented
- Three STL variants (small, medium, large)
- Print settings log and fit-test report for key ring attachment

## Starter files

- [starter.scad](../../../Extension_Projects/Parametric_Keychain/starter.scad) - minimal parametric scaffold to begin.

## Assessment Questions (Optional)

1. How did you use OpenSCAD parameters to enable users to customize the keychain without editing code?
2. What were the key differences in print time and material usage between your three variants?
3. Describe how you tested the key ring attachment and what adjustments you would make for the final design.
