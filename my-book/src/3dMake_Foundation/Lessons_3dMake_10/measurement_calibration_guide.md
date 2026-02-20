# Measurement Calibration Guide

Ensure accurate dimensions in your 3D printed parts through proper calibration and verification procedures.

## Why Calibration Matters

Printed dimensions often deviate from designed dimensions due to:
- Nozzle width variations
- Extrusion flow rate inconsistencies
- Plastic shrinkage during cooling
- Slicer interpretation differences
- Material-specific shrinkage (ABS can shrink 0.3-1%)

**Typical tolerances without calibration:** ±0.3-0.5mm
**Typical tolerances with calibration:** ±0.1-0.2mm

---

## Pre-Print Calibration

### 1. Nozzle Diameter Verification

**What to verify:** Is your nozzle actually 0.4mm?

**Test:**
1. Create a simple box in OpenSCAD: 10mm × 10mm × 5mm, solid
2. Slice with default 0.4mm line width
3. Print using 100% flow rate
4. Measure printed box

**Adjustment:**
- If too small: Nozzle might be partially clogged (clean)
- If significantly different from 0.4mm: Replace nozzle

---

### 2. E-Steps Calibration (Extrusion Rate)

**What to verify:** Does the extruder push the correct amount of filament?

**Method:**
1. Heat extruder to printing temperature
2. Mark filament 100mm from extruder entrance with marker
3. Command extrusion of 100mm in firmware (G-code: `G1 E100 F100`)
4. Measure actual distance filament moved

**Formula:**
```
New E-steps = Current E-steps × (100mm / Actual distance moved)
```

**Example:**
- Current setting: 93 steps/mm
- Commanded: 100mm
- Actual: 92mm moved
- New: 93 × (100/92) = **101 steps/mm**

**How to apply (varies by printer):**
- Marlin: `M92 E101` then `M500` to save
- Klipper: Update configuration and restart

---

### 3. First Layer Height Verification

**What to verify:** Is first layer height optimal?

**Test:** Print a simple single-layer square (just base layer)

**Measurements:**
- Too high (>0.3mm): Poor layer adhesion
- Too low (<0.1mm): Nozzle scratches bed, plastic squeezed
- Optimal: 0.2-0.25mm (roughly paper thickness)

**Adjustment:** Use bed leveling or Z-offset:
- If too high: Reduce Z-offset by 0.05mm
- If too low: Increase Z-offset by 0.05mm
- Test between adjustments

---

## Dimension Calibration Process

### Standard XY Calibration Test

**Goal:** Create parts with precisely measured dimensions

**Test File (OpenSCAD):**
```
// Create calibration cube
cube_size = 20;  // 20mm cube
wall_thickness = 2;

difference() {
    cube([cube_size, cube_size, cube_size], center=true);
    cube([cube_size - 2*wall_thickness, 
          cube_size - 2*wall_thickness, 
          cube_size + 1], center=true);  // Top open
}
```

**Print Instructions:**
- Use standard settings (your normal layer height, speed, temp)
- Print with 100% flow rate
- Allow complete cooling (2+ hours)

**Measurement Procedure:**
1. Measure internal dimensions (hollow part) in 3 locations each axis
2. Calculate average internal width: `avg_internal`
3. Expected internal: `20 - 2×wall_thickness = 16mm`

**Calibration Formula:**
```
Flow rate adjustment = Expected internal / Actual internal × 100%

Example:
- Expected: 16.00mm
- Actual: 15.75mm
- Adjustment: (16.00 / 15.75) × 100% = 101.6%
- Set flow to: 101.6% in slicer
```

### Z-Height Calibration

**Goal:** Verify layer heights are accurate

**Test:** Print calibration tower with varying layer heights

**Tower Specifications:**
- 20mm × 20mm square base
- Height: 40mm
- Layers: Print at 0.2mm nominal

**Measurements:**
- Stack digital calipers on layers and measure height
- Calculate average layer thickness
- Compare with intended 0.2mm

**Adjustment:**
If actual layer height differs:
```
New Z-scale = Intended height / Actual height

Example:
- Intended: 0.2mm per layer
- Actual: 0.195mm per layer  
- Adjustment: 0.2 / 0.195 = 1.026 (increase Z by 2.6%)
```

---

## Tolerance Measurement Matrix

### Critical Measurements to Track

| Measurement | Method | Tolerance | Frequency |
|------------|--------|-----------|-----------|
| Wall thickness | Calipers (multiple spots) | ±0.1mm | Every print |
| Hole diameter | Calipers or gauge | ±0.1-0.2mm | Every print |
| Overall dimensions | Ruler/calipers | ±0.2mm | Monthly |
| Layer height | Stack on calipers | ±0.02mm | Monthly |
| Vertical dimensions | Measure sides | ±0.1mm | Every print |

---

## Advanced Calibration

### Shrinkage Compensation

Different materials shrink differently after cooling:

| Material | Typical Shrinkage | Compensation |
|----------|------------------|--------------|
| PLA | 0.3-0.5% | Usually acceptable, no action |
| PETG | 0.5-1% | Scale design up by 0.5-1% if critical |
| ABS | 0.8-1.5% | Scale design up by 1% minimum |
| TPU | 1-2% | Significant - scale up 1-2% for critical dimensions |

**How to apply in design:**
```
// In OpenSCAD, scale critical dimensions
final_size = 20;
material_shrinkage = 1.01;  // 1% shrinkage
designed_size = final_size * material_shrinkage;
```

### Bed Temperature Compensation

Different bed temperatures affect final dimensions:

**ABS on cold bed (50°C) vs warm bed (100°C):**
- Cold bed: Faster cooling, less shrinkage (but poor adhesion)
- Warm bed: Slower cooling, more shrinkage (better adhesion)
- Difference: Can be 0.2-0.3% in dimensions

**Solution:** Standardize bed temperature for repeatable results

### Environmental Factors

| Factor | Effect | Mitigation |
|--------|--------|-----------|
| Room temperature | Affects cooling rate | Maintain 20-22°C |
| Humidity | Affects material properties | Keep 40-60% RH |
| Air flow | Inconsistent cooling | Avoid drafts near printer |
| Time of day | Material temperature varies | Print at consistent times |

---

## Quick Calibration Checklist

### Before First Print with New Settings
- [ ] E-steps calibration complete
- [ ] First layer height verified
- [ ] Nozzle diameter confirmed
- [ ] Test print completed and measured

### Monthly Maintenance
- [ ] Calibration cube printed and measured
- [ ] Flow rate adjusted if needed
- [ ] Layer height verified
- [ ] Temperature consistency checked

### When Dimensions Are Critical
- [ ] Printed test part, let cool 24+ hours
- [ ] Measured in multiple locations
- [ ] Calculated average deviation
- [ ] Flow rate adjusted accordingly
- [ ] Re-printed and verified

### After Any Changes
- [ ] Nozzle replacement → Re-verify nozzle diameter
- [ ] Bed leveling → Re-verify first layer
- [ ] Temperature changes → Test print required
- [ ] Material change → Full calibration recommended

---

## Measurement Tools Needed

| Tool | Cost | Accuracy | Use |
|------|------|----------|-----|
| Digital Calipers | $5-15 | ±0.05mm | Primary measurements |
| Steel Ruler | $3-10 | ±1mm | Quick rough checks |
| Vernier Calipers | $10-30 | ±0.05mm | Precision work |
| Micrometer | $20-50 | ±0.01mm | Critical tolerances |
| Layer Height Gauge | DIY or $5-10 | ±0.05mm | Layer verification |

**Recommendation:** Start with digital calipers (most versatile and affordable)

---

## Troubleshooting Calibration Issues

**Problem: Measurements still inconsistent after calibration**
- Check if bed is level (temperature affects levelness)
- Verify material is dry (moisture affects dimensions)
- Ensure ambient temperature is stable
- Try printing on different bed locations

**Problem: Can't achieve target dimensions**
- Nozzle may be damaged/worn (try replacement)
- Printer may have fundamental hardware issues
- Review mechanical components (belts, screws)
- Consider printer calibration limits

**Problem: Dimensions drift over time**
- Printer thermal properties changing
- Nozzle wearing out (gradually gets smaller)
- Bed surface degrading
- Normal wear - recalibrate quarterly

---

## Reference: Standard Test Models

These models are helpful for calibration:

1. **Calibration Cube** (20mm hollow) - Overall accuracy
2. **Tolerance Test Box** (various hole sizes) - Hole accuracy
3. **Layer Tower** (graduated heights) - Layer consistency
4. **Thin Wall Test** (walls 1-5mm) - Wall thickness accuracy

---

**Last Calibration Date:** _______________  
**Printer Model:** _______________  
**Current E-Steps:** _______________  
**Current Flow Rate:** _______________  
**Materials Calibrated For:** _______________
