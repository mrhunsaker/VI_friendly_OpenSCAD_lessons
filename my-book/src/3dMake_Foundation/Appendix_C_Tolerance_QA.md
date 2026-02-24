# Appendix C: Tolerance Testing & Quality Assurance Matrix {#3dmake_foundation-appendix_c_tolerance_qa}

This appendix provides **measurement-based testing methodology** for verifying that 3D-printed parts meet design specifications. It's designed to be used **non-visually**-focusing on calipers, scales, and functional tests rather than visual inspection.

**Referenced in:** Lessons 8-10 (Complex Design, Troubleshooting, Mastery)

---

## Overview: What is Tolerance?

**Tolerance** is the acceptable range of variation in dimensions:

```plaintext
Design spec:  Hole diameter = 6mm
Tolerance:    +/-0.5mm
Acceptable range:  5.5mm to 6.5mm
Actual print:  5.8mm [YES] (within tolerance)
or            7.2mm [NO] (exceeds tolerance)
```

### Why Tolerance Matters

1. **Assembly:** Parts must fit together
2. **Function:** Fit too tight = stuck; too loose = falls apart
3. **Safety:** Wrong tolerance = part failure
4. **Cost:** Tight tolerance = slower, more waste

---

## Essential Measurement Tools

### 1. Digital Calipers

**What they measure:**
- Outside diameter (part width)
- Inside diameter (hole width)
- Depth

**How to use non-visually:**

```plaintext
1. Gently close calipers until they barely touch the part
2. Feel the resistance (should be light, not forced)
3. Read digital display with audio feedback or manually
4. Record three measurements at different locations
5. Average the three measurements
```

**Accuracy:** +/-0.05mm (very precise for 3D printing)

### 2. Digital Scale (Kitchen Scale)

**What it measures:**
- Part weight (indicates infill, material type)

**How to use non-visually:**

```plaintext
1. Place part on scale
2. Wait for reading to stabilize (1-2 seconds)
3. Read digital display (in grams)
4. Compare to expected weight
```

**Accuracy:** +/-1g (good enough for verification)

**Why it matters:**
- Too light = infill too low or void inside part
- Expected weight = indicates proper slicing

### 3. Test Jig / Go/No-Go Gauge

**What it measures:**
- Pass/fail tolerance testing without calipers

**How to make:**

```openscad
// Go/No-Go gauge for bracelet peg holes
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
```

**Use non-visually:**
- Try inserting peg into go-gauge -> Should slide easily
- Try inserting peg into no-go-gauge -> Should NOT fit
- If both tests pass = tolerance correct

---

## Quality Assurance Testing Matrix

### Critical Dimensions to Test

Create a **Test Plan** before printing:

| Part                | Dimension        | Spec  | Tolerance | How to Test                             |
|---------------------|------------------|-------|-----------|-----------------------------------------|
| **Bracelet Holder** | Base width       | 127mm | +/-2mm    | Measure with calipers (multiple points) |
|                     | Peg diameter     | 6mm   | +/-0.5mm  | Test fit with go/no-go gauge            |
|                     | Peg spacing      | 8mm   | +/-1mm    | Measure distance between pegs           |
|                     | Back wall height | 120mm | +/-2mm    | Measure with calipers                   |
| **Phone Stand**     | Slope angle      | 20    | +/-3      | Calculate from height/depth ratio       |
|                     | Weight capacity  | 200g  | 150-250g  | Load test (see below)                   |
|                     | Stability        | N/A   | Pass/fail | 1-hour load test without tipping        |

### Pre-Print Planning

Before slicing, define:

1. **Critical dimensions:** Which measurements matter most?
2. **Acceptable range:** What tolerance is realistic?
3. **Test method:** How will you verify?
4. **Pass/fail criteria:** What does "success" look like?

**Example Plan for Phone Stand:**

```markdown
# Phone Stand - Quality Assurance Plan

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
```

---

## Measurement Procedures

### Procedure 1: Linear Dimension (Width, Height, Depth)

**Equipment needed:** Digital calipers

**Steps:**

```plaintext
1. Place part on flat surface
2. Position caliper jaws perpendicular to surface
3. Gently close jaws until they just touch part
4. Feel for light resistance (not forced)
5. Read digital display
6. Record measurement
7. Repeat at 3 different locations
8. Average the three readings
9. Compare to design spec +/- tolerance
```

**Example:**

```plaintext
Design spec: 127mm (bracelet holder width)
Tolerance:   +/-2mm (acceptable: 125-129mm)

Measurements:
  Location 1: 126.8mm
  Location 2: 127.1mm
  Location 3: 126.5mm
  Average: 126.8mm [YES] (within tolerance)
```

### Procedure 2: Hole or Peg Diameter

**Equipment needed:** Digital calipers, Go/No-Go gauges (optional)

**Method A: Direct Measurement**

```plaintext
1. Insert caliper jaws into hole/around peg
2. Adjust jaws to gently touch surfaces
3. Feel for light resistance on both sides
4. Read digital display (inside measurement mode)
5. Record three measurements
6. Average the readings
```

**Method B: Go/No-Go Gauge**

```plaintext
1. Print test jigs (go & no-go gauges)
2. Attempt to insert peg/hole into go-gauge
   -> Should slide through easily with light resistance
3. Attempt to insert peg/hole into no-go-gauge
   -> Should NOT fit or fit with visible resistance
4. If both pass -> dimension is acceptable
```

**Example: Peg Diameter**

```plaintext
Design spec: 6.0mm
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
```

### Procedure 3: Surface Finish / Layer Quality

**Equipment needed:** Caliper, ruler, touch/texture assessment

**Step 1: Surface Texture**

```plaintext
Run fingers/hand over surface:
  [YES] Smooth -> Good quality
   Slightly rough -> Acceptable
  [NO] Very rough/bumpy -> Quality issue
```

**Step 2: Layer Line Visibility**

```plaintext
Feel horizontal ridges (layer lines):
  [YES] Barely perceptible -> Good (0.2mm layers)
   Noticeable but even -> OK (0.25mm layers)
  [NO] Very pronounced -> Quality issue
```

**Step 3: Dimensional Consistency**

```plaintext
Measure thickness at multiple points:
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
```

### Procedure 4: Weight Verification (Confirms Infill)

**Equipment needed:** Digital scale

**Step 1: Calculate Expected Weight**

```plaintext
Expected weight = Volume x Density x Infill%

For bracelet holder (PLA):
Volume = 127mm x 80mm x 120mm = 1,219,200 mm
       = 1,219.2 cm
PLA density = 1.24 g/cm
Infill = 20%

Expected weight = 1,219.2 x 1.24 x 0.20 = 302.4g

Acceptable range: 290-315g (+/-5%)
```

**Step 2: Measure Actual Weight**

```plaintext
1. Place part on digital scale
2. Wait for reading to stabilize (1-2 seconds)
3. Read display in grams
4. Compare to expected weight
```

**Step 3: Interpret Result**

| Actual Weight | Interpretation                               |
|---------------|----------------------------------------------|
| 290-315g      | [YES] Correct infill, no internal voids      |
| <280g         | Infill too low or significant voids          |
| >320g         | Infill too high (was it supposed to be 20%?) |

---

## Functional Testing

### Test 1: Load Testing (Strength)

**Purpose:** Verify part can hold weight without failure

**Equipment needed:**
- Digital scale
- Test weights (or books, water jugs)
- Calipers (to check for deflection)

**Procedure:**

```plaintext
1. Measure baseline dimensions (part unloaded)
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
```

**Acceptance Criteria for Phone Stand:**

```plaintext
[YES] PASS if:
  - Deflection <0.5mm under 200g load
  - No cracks visible/felt
  - Full recovery after load removed

[NO] FAIL if:
  - Deflection >1mm
  - Visible cracks
  - Permanent deformation after unload
```

### Test 2: Assembly Testing

**Purpose:** Verify parts fit together as designed

**Equipment needed:**
- Calipers
- Go/No-Go gauges

**Procedure for Multi-Part Assembly (e.g., Stackable Bins):**

```plaintext
Part A (Bin body) dimensions:
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
```

### Test 3: Durability Testing (Repeated Use)

**Purpose:** Verify part doesn't fail after repeated cycles

**Example: Phone Stand Tilt Cycles**

```plaintext
1. Record baseline dimensions
2. Cycle 1: Place phone, tilt to max angle, remove
3. Inspect for cracks or damage
4. Repeat cycle 10 times
5. Measure dimensions again
6. Compare to baseline: Should be <0.1mm change

If no damage after 10 cycles -> Durable [YES]
```

---

## Tolerance Stack-Up (Multi-Part Designs)

When multiple parts are assembled, tolerances add:

```plaintext
Design:
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
```

### Tolerance Stack-Up Calculation

For N parts in assembly:

```plaintext
Total tolerance = (tolerance + tolerance + ... + tolerance)

Example with 3 parts (each +/-0.5mm):
Total = (0.5 + 0.5 + 0.5)
      = 0.75
      = 0.87mm
```

---

## Common Dimensional Problems & Fixes

| Problem                                 | Typical Cause             | How to Fix                                       | Prevent Next Time                   |
|-----------------------------------------|---------------------------|--------------------------------------------------|-------------------------------------|
| **Part too small (all dimensions off)** | Scale wrong in slicer     | Scale STL up in CAD or slicer                    | Verify scale before slicing         |
| **Holes too small**                     | Compensation shrinkage    | Increase hole diameter +0.5mm                    | Add shrinkage factor to design      |
| **Walls too thin**                      | Layer squishing           | Check first layer height; may need recalibration | Measure first layer thickness       |
| **Infill showing through (loose fill)** | Infill too low            | Increase infill % to 25-30%                      | Recalculate for part type           |
| **Inconsistent across print**           | Nozzle clogging mid-print | Clean nozzle; check filament quality             | Use quality filament; monitor print |
| **Z-axis dimensions off                 | Z-axis uncalibrated       | Run Z-calibration procedure                      | Calibrate before critical prints    |
| **Dimensions change between prints**    | Thermal drift             | Print in stable temperature                      | Use enclosed printer if possible    |

---

## Testing Checklist Template

Print this checklist **before starting a new project**:

```markdown
# Quality Assurance Checklist: [Project Name]

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
```

---

## PowerShell Integration: Track Quality Metrics

```powershell
# Track print quality across multiple projects

$qualityLog = @"
ProjectName,Date,Material,PartCount,DimensionsPass,FunctionalPass,Weight(g),Notes
"@

# Log entries
$qualityLog += "`nBraceletHolder,2024-01-15,PLA,1,PASS,PASS,302.1,Perfect fit"
$qualityLog += "`nPhoneStand,2024-01-16,PETG,2,PASS,PASS,487.3,Strong joints"
$qualityLog += "`nStackableBins,2024-01-17,PLA,3,FAIL,N/A,N/A,Holes too small reprint"

# Save to CSV
$qualityLog | Out-File "C:\Projects\quality-log.csv"

# Analyze pass/fail rate
$log = Import-Csv "C:\Projects\quality-log.csv"
$passCount = ($log | Where-Object { $.DimensionsPass -eq "PASS" }).Count
$totalCount = $log.Count
$passRate = ($passCount / $totalCount) * 100

Write-Host "Print success rate: $passRate%"

# Show recent failures
Write-Host "`nRecent issues:"
$log | Where-Object { $.DimensionsPass -eq "FAIL" } | Select-Object ProjectName, Notes
```

---

## Accessibility-Focused QA Best Practices

### Why Measurement-Based Testing Matters

Traditional visual QA (looking at surface finish, checking dimensions by eye) is inherently inaccessible. This appendix prioritizes:

1. **Caliper measurements:** Objective, quantifiable
2. **Weight verification:** Numerical result
3. **Functional testing:** Pass/fail criteria
4. **Go/No-Go gauges:** Tactile pass/fail
5. **Test jigs:** Can be shared/standardized

### Screen Reader Integration

When documenting QA results:

```plaintext
[YES] GOOD: "Bracket width measured 49.8mm (spec 50+/-1mm)"
[NO] AVOID: "Bracket looks good" (not measurable)

[YES] GOOD: "Part weighs 298g (spec 300+/-10g)"
[NO] AVOID: "Feels about right" (subjective)

[YES] GOOD: "Slides through go-gauge, blocks no-go-gauge"
[NO] AVOID: "Hole looks the right size" (visual only)
```

### Documentation Template (Accessible)

```markdown
## Part: Bracelet Holder Peg (Test Date: Jan 15, 2024)

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
```

---

## Summary

**Key Principles:**

1. **Plan before printing:** Define tolerances and test methods
2. **Measure precisely:** Use calibrated tools (digital calipers, scale)
3. **Test functionally:** Will parts assemble and work?
4. **Document quantitatively:** Use numbers, not adjectives
5. **Iterate based on data:** If test fails, adjust design or process

**When to Use Each Test:**

| Situation                 | Recommended Test            |
|---------------------------|-----------------------------|
| Prototype/mockup          | Linear dimensions only      |
| Assembly with other parts | Tolerance stack-up analysis |
| Load-bearing part         | Functional load test        |
| Repeated-use item         | Durability cycling test     |
| Multi-part design         | Assembly fit test           |

**Accessibility Reminder:**

All QA testing in this appendix is **measurement-based and non-visual**, making it equally accessible to all users. The goal is objective, quantifiable verification-not subjective assessment.
