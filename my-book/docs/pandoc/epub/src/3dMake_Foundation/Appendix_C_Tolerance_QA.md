[Header 2 ("3dmake_foundation-appendix_c_tolerance_qa", [], []) [Str "Appendix C: Tolerance Testing & Quality Assurance Matrix"], Para [Str "This appendix provides ", Strong [Str "measurement-based testing methodology"], Str " for verifying that 3D-printed parts meet design specifications. It's designed to be used ", Strong [Str "non-visually"], Str "-focusing on calipers, scales, and functional tests rather than visual inspection."], Para [Strong [Str "Referenced in:"], Str " Lessons 8-10 (Complex Design, Troubleshooting, Mastery)"], HorizontalRule, Header 3 ("overview-what-is-tolerance", ["unnumbered", "unlisted"], []) [Str "Overview: What is Tolerance?"], Para [Strong [Str "Tolerance"], Str " is the acceptable range of variation in dimensions:"], CodeBlock ("", ["plaintext"], []) "Design spec:  Hole diameter = 6mm
Tolerance:    +/-0.5mm
Acceptable range:  5.5mm to 6.5mm
Actual print:  5.8mm [YES] (within tolerance)
or            7.2mm [NO] (exceeds tolerance)
", Header 4 ("why-tolerance-matters", ["unnumbered", "unlisted"], []) [Str "Why Tolerance Matters"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Assembly:"], Str " Parts must fit together"]], [Plain [Strong [Str "Function:"], Str " Fit too tight = stuck; too loose = falls apart"]], [Plain [Strong [Str "Safety:"], Str " Wrong tolerance = part failure"]], [Plain [Strong [Str "Cost:"], Str " Tight tolerance = slower, more waste"]]], HorizontalRule, Header 3 ("essential-measurement-tools", ["unnumbered", "unlisted"], []) [Str "Essential Measurement Tools"], Header 4 ("1-digital-calipers", ["unnumbered", "unlisted"], []) [Str "1. Digital Calipers"], Para [Strong [Str "What they measure:"]], BulletList [[Plain [Str "Outside diameter (part width)"]], [Plain [Str "Inside diameter (hole width)"]], [Plain [Str "Depth"]]], Para [Strong [Str "How to use non-visually:"]], CodeBlock ("", ["plaintext"], []) "1. Gently close calipers until they barely touch the part
2. Feel the resistance (should be light, not forced)
3. Read digital display with audio feedback or manually
4. Record three measurements at different locations
5. Average the three measurements
", Para [Strong [Str "Accuracy:"], Str " +/-0.05mm (very precise for 3D printing)"], Header 4 ("2-digital-scale-kitchen-scale", ["unnumbered", "unlisted"], []) [Str "2. Digital Scale (Kitchen Scale)"], Para [Strong [Str "What it measures:"]], BulletList [[Plain [Str "Part weight (indicates infill, material type)"]]], Para [Strong [Str "How to use non-visually:"]], CodeBlock ("", ["plaintext"], []) "1. Place part on scale
2. Wait for reading to stabilize (1-2 seconds)
3. Read digital display (in grams)
4. Compare to expected weight
", Para [Strong [Str "Accuracy:"], Str " +/-1g (good enough for verification)"], Para [Strong [Str "Why it matters:"]], BulletList [[Plain [Str "Too light = infill too low or void inside part"]], [Plain [Str "Expected weight = indicates proper slicing"]]], Header 4 ("3-test-jig--gono-go-gauge", ["unnumbered", "unlisted"], []) [Str "3. Test Jig / Go/No-Go Gauge"], Para [Strong [Str "What it measures:"]], BulletList [[Plain [Str "Pass/fail tolerance testing without calipers"]]], Para [Strong [Str "How to make:"]], CodeBlock ("", ["openscad"], []) "// Go/No-Go gauge for bracelet peg holes
// Tests if hole is within acceptable range

pegdiameter = 6;        // Design spec
tolerance = 0.5;         // Tolerance
godiameter = pegdiameter - tolerance;     // Min acceptable (5.5)
nogodiameter = pegdiameter + tolerance;  // Max acceptable (6.5)

module gogauge() {
  // Part should fit through this easily
  cylinder(h=10, r=godiameter/2);
}

module nogogauge() {
  // Part should NOT fit through this
  cylinder(h=10, r=nogodiameter/2);
}

// Test jig with both gauges
union() {
  translate([0, 0, 0]) gogauge();
  translate([0, 15, 0]) nogogauge();
}
", Para [Strong [Str "Use non-visually:"]], BulletList [[Plain [Str "Try inserting peg into go-gauge -> Should slide easily"]], [Plain [Str "Try inserting peg into no-go-gauge -> Should NOT fit"]], [Plain [Str "If both tests pass = tolerance correct"]]], HorizontalRule, Header 3 ("quality-assurance-testing-matrix", ["unnumbered", "unlisted"], []) [Str "Quality Assurance Testing Matrix"], Header 4 ("critical-dimensions-to-test", ["unnumbered", "unlisted"], []) [Str "Critical Dimensions to Test"], Para [Str "Create a ", Strong [Str "Test Plan"], Str " before printing:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.21428571428571427)), (AlignDefault, (ColWidth 0.1836734693877551)), (AlignDefault, (ColWidth 0.07142857142857142)), (AlignDefault, (ColWidth 0.11224489795918367)), (AlignDefault, (ColWidth 0.41836734693877553))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Part"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Dimension"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Spec"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tolerance"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "How to Test"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Bracelet Holder"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Base width"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "127mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-2mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure with calipers (multiple points)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Peg diameter"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "6mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-0.5mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Test fit with go/no-go gauge"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Peg spacing"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-1mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure distance between pegs"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Back wall height"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "120mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-2mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure with calipers"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Phone Stand"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slope angle"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "20"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-3"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Calculate from height/depth ratio"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Weight capacity"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "200g"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "150-250g"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Load test (see below)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Stability"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "N/A"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pass/fail"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1-hour load test without tipping"]]]])] (TableFoot ("", [], []) []), Header 4 ("pre-print-planning", ["unnumbered", "unlisted"], []) [Str "Pre-Print Planning"], Para [Str "Before slicing, define:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Critical dimensions:"], Str " Which measurements matter most?"]], [Plain [Strong [Str "Acceptable range:"], Str " What tolerance is realistic?"]], [Plain [Strong [Str "Test method:"], Str " How will you verify?"]], [Plain [Strong [Str "Pass/fail criteria:"], Str " What does \"success\" look like?"]]], Para [Strong [Str "Example Plan for Phone Stand:"]], CodeBlock ("", ["markdown"], []) "# Phone Stand - Quality Assurance Plan

## Critical Dimensions
1. Slope angle: 20 +/-3
2. Base width: 80mm +/-1mm
3. Stand height: 60mm +/-2mm

## Functional Tests
1. Stability: Hold 200g for 1 hour without tipping
2. Grip: Phone doesn't slide during tilt
3. Assembly: Back brace attaches without force

## Pass/Fail Criteria
[YES] PASS if:
- All dimensions within tolerance
- Phone holds weight for 1 hour
- No cracks or layer separation

[NO] FAIL if:
- Any dimension >2mm off spec
- Phone slides or part tips
- Visible cracks
", HorizontalRule, Header 3 ("measurement-procedures", ["unnumbered", "unlisted"], []) [Str "Measurement Procedures"], Header 4 ("procedure-1-linear-dimension-width-height-depth", ["unnumbered", "unlisted"], []) [Str "Procedure 1: Linear Dimension (Width, Height, Depth)"], Para [Strong [Str "Equipment needed:"], Str " Digital calipers"], Para [Strong [Str "Steps:"]], CodeBlock ("", ["plaintext"], []) "1. Place part on flat surface
2. Position caliper jaws perpendicular to surface
3. Gently close jaws until they just touch part
4. Feel for light resistance (not forced)
5. Read digital display
6. Record measurement
7. Repeat at 3 different locations
8. Average the three readings
9. Compare to design spec +/- tolerance
", Para [Strong [Str "Example:"]], CodeBlock ("", ["plaintext"], []) "Design spec: 127mm (bracelet holder width)
Tolerance:   +/-2mm (acceptable: 125-129mm)

Measurements:
  Location 1: 126.8mm
  Location 2: 127.1mm
  Location 3: 126.5mm
  Average: 126.8mm [YES] (within tolerance)
", Header 4 ("procedure-2-hole-or-peg-diameter", ["unnumbered", "unlisted"], []) [Str "Procedure 2: Hole or Peg Diameter"], Para [Strong [Str "Equipment needed:"], Str " Digital calipers, Go/No-Go gauges (optional)"], Para [Strong [Str "Method A: Direct Measurement"]], CodeBlock ("", ["plaintext"], []) "1. Insert caliper jaws into hole/around peg
2. Adjust jaws to gently touch surfaces
3. Feel for light resistance on both sides
4. Read digital display (inside measurement mode)
5. Record three measurements
6. Average the readings
", Para [Strong [Str "Method B: Go/No-Go Gauge"]], CodeBlock ("", ["plaintext"], []) "1. Print test jigs (go & no-go gauges)
2. Attempt to insert peg/hole into go-gauge
   -> Should slide through easily with light resistance
3. Attempt to insert peg/hole into no-go-gauge
   -> Should NOT fit or fit with visible resistance
4. If both pass -> dimension is acceptable
", Para [Strong [Str "Example: Peg Diameter"]], CodeBlock ("", ["plaintext"], []) "Design spec: 6.0mm
Tolerance:   +/-0.5mm (acceptable: 5.5-6.5mm)

Method A (Direct):
  Measurement 1: 5.9mm
  Measurement 2: 6.0mm
  Measurement 3: 5.8mm
  Average: 5.9mm [YES]

Method B (Go/No-Go):
  Slides through go-gauge (5.5mm) -> [YES]
  Doesn't fit no-go-gauge (6.5mm) -> [YES]
  Result: PASS
", Header 4 ("procedure-3-surface-finish--layer-quality", ["unnumbered", "unlisted"], []) [Str "Procedure 3: Surface Finish / Layer Quality"], Para [Strong [Str "Equipment needed:"], Str " Caliper, ruler, touch/texture assessment"], Para [Strong [Str "Step 1: Surface Texture"]], CodeBlock ("", ["plaintext"], []) "Run fingers/hand over surface:
  [YES] Smooth -> Good quality
   Slightly rough -> Acceptable
  [NO] Very rough/bumpy -> Quality issue
", Para [Strong [Str "Step 2: Layer Line Visibility"]], CodeBlock ("", ["plaintext"], []) "Feel horizontal ridges (layer lines):
  [YES] Barely perceptible -> Good (0.2mm layers)
   Noticeable but even -> OK (0.25mm layers)
  [NO] Very pronounced -> Quality issue
", Para [Strong [Str "Step 3: Dimensional Consistency"]], CodeBlock ("", ["plaintext"], []) "Measure thickness at multiple points:
  Design spec: 3mm wall thickness
  Measure at 5 locations
  Record all measurements
  All should be within +/-0.2mm of each other
  
  Example:
    Pt 1: 3.0mm
    Pt 2: 3.1mm
    Pt 3: 3.0mm
    Pt 4: 2.9mm
    Pt 5: 3.1mm
  Std Dev: 0.08mm [YES] (very consistent)
", Header 4 ("procedure-4-weight-verification-confirms-infill", ["unnumbered", "unlisted"], []) [Str "Procedure 4: Weight Verification (Confirms Infill)"], Para [Strong [Str "Equipment needed:"], Str " Digital scale"], Para [Strong [Str "Step 1: Calculate Expected Weight"]], CodeBlock ("", ["plaintext"], []) "Expected weight = Volume x Density x Infill%

For bracelet holder (PLA):
Volume = 127mm x 80mm x 120mm = 1,219,200 mm
       = 1,219.2 cm
PLA density = 1.24 g/cm
Infill = 20%

Expected weight = 1,219.2 x 1.24 x 0.20 = 302.4g

Acceptable range: 290-315g (+/-5%)
", Para [Strong [Str "Step 2: Measure Actual Weight"]], CodeBlock ("", ["plaintext"], []) "1. Place part on digital scale
2. Wait for reading to stabilize (1-2 seconds)
3. Read display in grams
4. Compare to expected weight
", Para [Strong [Str "Step 3: Interpret Result"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Actual Weight"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Interpretation"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "290-315g"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "[", Str "YES", Str "]", Str " Correct infill, no internal voids"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "<", Str "280g"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Infill too low or significant voids"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str ">320g"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Infill too high (was it supposed to be 20%?)"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 3 ("functional-testing", ["unnumbered", "unlisted"], []) [Str "Functional Testing"], Header 4 ("test-1-load-testing-strength", ["unnumbered", "unlisted"], []) [Str "Test 1: Load Testing (Strength)"], Para [Strong [Str "Purpose:"], Str " Verify part can hold weight without failure"], Para [Strong [Str "Equipment needed:"]], BulletList [[Plain [Str "Digital scale"]], [Plain [Str "Test weights (or books, water jugs)"]], [Plain [Str "Calipers (to check for deflection)"]]], Para [Strong [Str "Procedure:"]], CodeBlock ("", ["plaintext"], []) "1. Measure baseline dimensions (part unloaded)
   Baseline height: 60mm

2. Place test weight on part
   Added weight: 200g

3. Wait 5 minutes (allow part to settle)

4. Measure dimensions again
   New height: 59.8mm
   Deflection: 0.2mm (acceptable)

5. Observe for cracks (visual or tactile)
   No cracks: [YES]

6. Remove weight and wait 5 minutes

7. Measure dimensions again (should return to baseline)
   Height after unload: 60.0mm
   Recovery: Complete [YES]

Result: PASS (part handles load without permanent deformation)
", Para [Strong [Str "Acceptance Criteria for Phone Stand:"]], CodeBlock ("", ["plaintext"], []) "[YES] PASS if:
  - Deflection <0.5mm under 200g load
  - No cracks visible/felt
  - Full recovery after load removed

[NO] FAIL if:
  - Deflection >1mm
  - Visible cracks
  - Permanent deformation after unload
", Header 4 ("test-2-assembly-testing", ["unnumbered", "unlisted"], []) [Str "Test 2: Assembly Testing"], Para [Strong [Str "Purpose:"], Str " Verify parts fit together as designed"], Para [Strong [Str "Equipment needed:"]], BulletList [[Plain [Str "Calipers"]], [Plain [Str "Go/No-Go gauges"]]], Para [Strong [Str "Procedure for Multi-Part Assembly (e.g., Stackable Bins):"]], CodeBlock ("", ["plaintext"], []) "Part A (Bin body) dimensions:
  - Top opening: 50mm x 50mm +/-1mm
  - Wall thickness: 2mm +/-0.2mm

Part B (Stacking rim) dimensions:
  - Base diameter: 50mm +/-0.5mm
  - Should nest inside Part A

Test procedure:
1. Measure Part A opening: 50.1mm [YES]
2. Measure Part B base: 49.8mm [YES]
3. Attempt to nest Part B into Part A
   -> Should fit with light resistance
   -> Feel for smooth insertion (no catching)
4. Check for rocking (part should sit stable)
5. Apply 500g load (simulate stacking)
   -> Should hold without slipping
", Header 4 ("test-3-durability-testing-repeated-use", ["unnumbered", "unlisted"], []) [Str "Test 3: Durability Testing (Repeated Use)"], Para [Strong [Str "Purpose:"], Str " Verify part doesn't fail after repeated cycles"], Para [Strong [Str "Example: Phone Stand Tilt Cycles"]], CodeBlock ("", ["plaintext"], []) "1. Record baseline dimensions
2. Cycle 1: Place phone, tilt to max angle, remove
3. Inspect for cracks or damage
4. Repeat cycle 10 times
5. Measure dimensions again
6. Compare to baseline: Should be <0.1mm change

If no damage after 10 cycles -> Durable [YES]
", HorizontalRule, Header 3 ("tolerance-stack-up-multi-part-designs", ["unnumbered", "unlisted"], []) [Str "Tolerance Stack-Up (Multi-Part Designs)"], Para [Str "When multiple parts are assembled, tolerances add:"], CodeBlock ("", ["plaintext"], []) "Design:
  Part A opening: 50mm +/-0.5mm
  Part B base: 50mm +/-0.5mm

Worst-case fit:
  Part A minimum: 49.5mm
  Part B maximum: 50.5mm
  Difference: 1.0mm (VERY TIGHT or won't fit!)

Solution: Increase tolerance on Part B to +/-0.3mm
  Part B minimum: 49.7mm
  Part B maximum: 50.3mm
  Now fits inside Part A: 49.5-50.5mm [YES]
", Header 4 ("tolerance-stack-up-calculation", ["unnumbered", "unlisted"], []) [Str "Tolerance Stack-Up Calculation"], Para [Str "For N parts in assembly:"], CodeBlock ("", ["plaintext"], []) "Total tolerance = (tolerance + tolerance + ... + tolerance)

Example with 3 parts (each +/-0.5mm):
Total = (0.5 + 0.5 + 0.5)
      = 0.75
      = 0.87mm
", HorizontalRule, Header 3 ("common-dimensional-problems--fixes", ["unnumbered", "unlisted"], []) [Str "Common Dimensional Problems & Fixes"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.2645161290322581)), (AlignDefault, (ColWidth 0.17419354838709677)), (AlignDefault, (ColWidth 0.3225806451612903)), (AlignDefault, (ColWidth 0.23870967741935484))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Problem"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Typical Cause"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "How to Fix"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Prevent Next Time"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Part too small (all dimensions off)"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Scale wrong in slicer"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Scale STL up in CAD or slicer"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Verify scale before slicing"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Holes too small"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Compensation shrinkage"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Increase hole diameter +0.5mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Add shrinkage factor to design"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Walls too thin"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Layer squishing"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check first layer height; may need recalibration"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Measure first layer thickness"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Infill showing through (loose fill)"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Infill too low"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Increase infill % to 25-30%"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Recalculate for part type"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Inconsistent across print"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nozzle clogging mid-print"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Clean nozzle; check filament quality"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use quality filament; monitor print"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "*", Str "*", Str "Z-axis dimensions off"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Z-axis uncalibrated"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Run Z-calibration procedure"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Calibrate before critical prints"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Strong [Str "Dimensions change between prints"]]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Thermal drift"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Print in stable temperature"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use enclosed printer if possible"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 3 ("testing-checklist-template", ["unnumbered", "unlisted"], []) [Str "Testing Checklist Template"], Para [Str "Print this checklist ", Strong [Str "before starting a new project"], Str ":"], CodeBlock ("", ["markdown"], []) "# Quality Assurance Checklist: [Project Name]

## Design Specs
- [ ] Part A width:  mm +/-  mm
- [ ] Part B height:  mm +/-  mm
- [ ] Hole diameter:  mm +/-  mm
- [ ] Assembly fit tolerance:  mm

## Pre-Print
- [ ] STL exported correctly
- [ ] Scale verified
- [ ] Supports configured
- [ ] Slice file reviewed

## Post-Print (Dimensional)
- [ ] Part A width measured (3 points): mm, mm, mm
  - [ ] Within tolerance? YES/NO
- [ ] Part B height measured (3 points): mm, mm, mm
  - [ ] Within tolerance? YES/NO
- [ ] Hole diameter measured (go/no-go): PASS/FAIL
- [ ] Part weight measured: g (expected: g +/-g)
  - [ ] Within expected weight? YES/NO

## Post-Print (Functional)
- [ ] Load test (if applicable): PASS/FAIL
- [ ] Assembly test: PASS/FAIL
- [ ] Surface quality acceptable: YES/NO
- [ ] No cracks or voids: YES/NO

## Result
- [ ] ACCEPT (all tests pass)
- [ ] REWORK (minor issue, can fix)
- [ ] REJECT (major issue, reprint)

## Notes
[Space for observations]
", HorizontalRule, Header 3 ("powershell-integration-track-quality-metrics", ["unnumbered", "unlisted"], []) [Str "PowerShell Integration: Track Quality Metrics"], CodeBlock ("", ["powershell"], []) "# Track print quality across multiple projects

$qualityLog = @\"
ProjectName,Date,Material,PartCount,DimensionsPass,FunctionalPass,Weight(g),Notes
\"@

# Log entries
$qualityLog += \"`nBraceletHolder,2024-01-15,PLA,1,PASS,PASS,302.1,Perfect fit\"
$qualityLog += \"`nPhoneStand,2024-01-16,PETG,2,PASS,PASS,487.3,Strong joints\"
$qualityLog += \"`nStackableBins,2024-01-17,PLA,3,FAIL,N/A,N/A,Holes too small reprint\"

# Save to CSV
$qualityLog | Out-File \"C:\\Projects\\quality-log.csv\"

# Analyze pass/fail rate
$log = Import-Csv \"C:\\Projects\\quality-log.csv\"
$passCount = ($log | Where-Object { $.DimensionsPass -eq \"PASS\" }).Count
$totalCount = $log.Count
$passRate = ($passCount / $totalCount) * 100

Write-Host \"Print success rate: $passRate%\"

# Show recent failures
Write-Host \"`nRecent issues:\"
$log | Where-Object { $.DimensionsPass -eq \"FAIL\" } | Select-Object ProjectName, Notes
", HorizontalRule, Header 3 ("accessibility-focused-qa-best-practices", ["unnumbered", "unlisted"], []) [Str "Accessibility-Focused QA Best Practices"], Header 4 ("why-measurement-based-testing-matters", ["unnumbered", "unlisted"], []) [Str "Why Measurement-Based Testing Matters"], Para [Str "Traditional visual QA (looking at surface finish, checking dimensions by eye) is inherently inaccessible. This appendix prioritizes:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Caliper measurements:"], Str " Objective, quantifiable"]], [Plain [Strong [Str "Weight verification:"], Str " Numerical result"]], [Plain [Strong [Str "Functional testing:"], Str " Pass/fail criteria"]], [Plain [Strong [Str "Go/No-Go gauges:"], Str " Tactile pass/fail"]], [Plain [Strong [Str "Test jigs:"], Str " Can be shared/standardized"]]], Header 4 ("screen-reader-integration", ["unnumbered", "unlisted"], []) [Str "Screen Reader Integration"], Para [Str "When documenting QA results:"], CodeBlock ("", ["plaintext"], []) "[YES] GOOD: \"Bracket width measured 49.8mm (spec 50+/-1mm)\"
[NO] AVOID: \"Bracket looks good\" (not measurable)

[YES] GOOD: \"Part weighs 298g (spec 300+/-10g)\"
[NO] AVOID: \"Feels about right\" (subjective)

[YES] GOOD: \"Slides through go-gauge, blocks no-go-gauge\"
[NO] AVOID: \"Hole looks the right size\" (visual only)
", Header 4 ("documentation-template-accessible", ["unnumbered", "unlisted"], []) [Str "Documentation Template (Accessible)"], CodeBlock ("", ["markdown"], []) "## Part: Bracelet Holder Peg (Test Date: Jan 15, 2024)

### Dimensional Verification
| Dimension    | Specification  | Measurement 1 | Measurement 2 | Measurement 3 | Average | Result     |
|--------------|----------------|---------------|---------------|---------------|---------|------------|
| Peg Diameter | 6.0 +/- 0.5mm  | 5.9mm         | 6.0mm         | 5.8mm         | 5.9mm   | [YES] PASS |
| Peg Length   | 25.0 +/- 0.5mm | 25.1mm        | 25.0mm        | 25.0mm        | 25.03mm | [YES] PASS |

### Functional Test
- [x] Slides into bracelet loop easily (no forcing)
- [x] No cracks visible or felt
- [x] Survives 1-hour load test with 20 bracelets
- [x] No permanent deformation after load removed

### Overall Result
[YES] **PASS** - All dimensions within tolerance; functionally sound
", HorizontalRule, Header 3 ("summary", ["unnumbered", "unlisted"], []) [Str "Summary"], Para [Strong [Str "Key Principles:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Plan before printing:"], Str " Define tolerances and test methods"]], [Plain [Strong [Str "Measure precisely:"], Str " Use calibrated tools (digital calipers, scale)"]], [Plain [Strong [Str "Test functionally:"], Str " Will parts assemble and work?"]], [Plain [Strong [Str "Document quantitatively:"], Str " Use numbers, not adjectives"]], [Plain [Strong [Str "Iterate based on data:"], Str " If test fails, adjust design or process"]]], Para [Strong [Str "When to Use Each Test:"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Situation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Recommended Test"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Prototype/mockup"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Linear dimensions only"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Assembly with other parts"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tolerance stack-up analysis"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Load-bearing part"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Functional load test"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Repeated-use item"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Durability cycling test"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Multi-part design"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Assembly fit test"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Accessibility Reminder:"]], Para [Str "All QA testing in this appendix is ", Strong [Str "measurement-based and non-visual"], Str ", making it equally accessible to all users. The goal is objective, quantifiable verification-not subjective assessment."]]