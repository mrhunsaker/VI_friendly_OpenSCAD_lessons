# Lesson 8 Code Examples — Advanced Parametric Design and Interlocking Features

## Files

- **stackable_bins.scad** - Advanced example of tolerance design, interlocking features, and multi-part assemblies

## Learning Objectives

- Design parametric walls with precise clearances
- Create interlocking features (rims) for stackable assemblies
- Manage tolerance stack-up across multiple parts
- Apply chamfers for edge finishing and print quality
- Understand print-time dimensional variations

## How to Use This Code

1. Copy `stackable_bins.scad` into your 3dMake project's `src/` folder
2. Open in OpenSCAD (or use `3dm edit-model stackable_bins.scad`)
3. Press F5 to preview; F6 for full render
4. Modify the top-level parameters:
   - `bin_w`, `bin_d`, `bin_h` — Adjust bin dimensions
   - `wall` — Wall thickness (affects strength and print time)
   - `stack_clear` — Clearance between stacking parts (usually 0.6mm)
   - `rim` — Height of interlocking rim
   - `chamfer` — Edge rounding (improves printability)
5. Run `3dm build` to generate STL
6. Print test pieces and measure with calipers

## Key Concepts

- **Tolerance Stack-Up**: How small errors compound in multi-part assemblies
- **Interlocking Features**: Creating rims that allow parts to nest without fasteners
- **Clearance Design**: Intentional small gaps for assembly without friction
- **Chamfers**: Beveled edges that improve print quality and handling
- **Hollow Box Construction**: Using `difference()` to create wall thickness

## Customization Ideas

- Create bins for specific storage needs
- Adjust stack clearance for tighter or looser fit
- Add dividers or compartments inside bins
- Create matching lids with interlocking rim

## Manufacturing Considerations

- **Print Orientation**: Place bins on largest face to minimize support
- **Slicing Settings**: Use tree supports to reduce waste
- **Post-Print**: Measure actual dimensions against design; adjust `stack_clear` if needed
- **Multiple Prints**: Batch print several bins at once to save material

## Tolerance Testing Workflow

1. **Print Test Piece**: Print one bin with designed dimensions
2. **Measure Dimensions**: Use calipers on all critical dimensions
3. **Calculate Shrinkage**: Compare actual to designed; typically 0.3-0.5% for PLA
4. **Adjust Clearance**: If bins stack too tight, increase `stack_clear`; if too loose, decrease it
5. **Print Final**: Update parameters based on test results and print final version

## Related Files

- See Lesson 8: [Lesson 8 Markdown](../../../3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md) for full tutorial
- See Appendix C: [Tolerance Testing & QA Matrix](../../../3dMake_Foundation/Appendix_C_Tolerance_QA.md) for complete validation procedures
- See Appendix B: [Material Properties](../../../3dMake_Foundation/Appendix_B_Material_Properties.md) for shrinkage data by material
- Reference: [Snap-Fit Clip Project](../../../Extension_Projects/Snap_Fit_Clip/Snap_Fit_Clip.md) for more tolerance examples
- Reference: [Measurement Worksheet](../../../Reference_Materials/measurement-worksheet.md) for recording tolerance data
