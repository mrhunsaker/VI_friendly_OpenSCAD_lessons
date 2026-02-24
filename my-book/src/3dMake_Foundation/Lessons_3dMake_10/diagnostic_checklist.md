# Diagnostic Checklist for 3D Printing {#3dmake_foundation_lessons_3dmake_10-diagnostic_checklist}

Use this comprehensive checklist to systematically diagnose and troubleshoot printing issues.

## Quick Diagnosis Flowchart

```plaintext
Print Problem?
|
+---- [Before Print] Issues?
|  +---- Filament won't load -> CHECK: Temperature, drive gear, nozzle
|  +---- Printer won't heat -> CHECK: Power, temperature sensor, firmware
|  +---- Bed not level -> CHECK: Leveling routine, bed surface
|
+---- [First Layer] Issues?
|  +---- Won't stick -> CHECK: Bed temperature, cleanliness, nozzle height
|  +---- Too squished -> CHECK: Nozzle height, bed temperature
|  +---- Gaps/uneven -> CHECK: Bed levelness, hot end alignment
|
+---- [Mid-Print] Issues?
|  +---- Stops extruding -> CHECK: Clog, temperature drop, jam
|  +---- Layers shift -> CHECK: Loose belts, mechanical bind
|  +---- Print wobbles -> CHECK: Build plate, print stability
|
+---- [Print Quality] Issues?
   +---- Weak/brittle -> CHECK: Temperature, flow rate, layer adhesion
   +---- Rough surface -> CHECK: Flow rate, speed, temperature
   +---- Warped -> CHECK: Bed temperature, cooling rate, material
```

---

## Pre-Print Diagnostics

### Category A: Power & Connectivity

**Checklist:**

- [ ] Printer powered on
- [ ] LED indicators showing normal status
- [ ] USB cable connected (if applicable)
- [ ] No error codes displaying
- [ ] Display/interface responding to input

**If failed:**

1. Check power outlet and cable
2. Verify power supply specifications (voltage, current)
3. Test with different power outlet
4. Try power-cycling (off 30 sec, on)
5. Check for blown fuses inside printer

---

### Category B: Temperature System

**Heating Element Status:**

- [ ] Hot end temperature rises when heating commanded
- [ ] Bed temperature rises when heating commanded
- [ ] Temperature readings stable (not fluctuating 5C+)
- [ ] No error messages during heating

**Measurement Method:**

```plaintext
1. Set hot end to 200C, observe rise
   - Expected time to reach: 2-4 minutes
   - Steady rise without plateau:  Good
   - Plateau before reaching:  Problem (see below)

2. Set bed to 60C, observe rise
   - Expected time to reach: 5-10 minutes
   - Stable at target:  Good
```

**If heating slow/incomplete:**

- [ ] Verify target temperature was set
- [ ] Check heating element firmware settings
- [ ] Test thermal sensor connectivity
- [ ] Inspect heating element for damage
- [ ] Measure electrical resistance of heaters

**Temperature Stability Test:**

```plaintext
1. Heat to target temperature
2. Wait 10 minutes for stabilization
3. Record temperature every minute
4. Calculate range (max - min)

Results:
- +/-2C range:  Excellent
- +/-5C range:  Acceptable  
- +/-10C range:  Marginal
- >+/-10C range:  Problem
```

---

### Category C: Mechanical Systems

**Movement Diagnostics:**

**Manual Axis Movement:**

```plaintext
1. Disable motors (if possible)
2. Manually move each axis
3. Record observations:
   - X-axis:  (smooth/rough/stuck)
   - Y-axis:  (smooth/rough/stuck)
   - Z-axis:  (smooth/rough/stuck)
```

**Expected results:** Smooth, no grinding sounds

**If rough/stuck:**

- [ ] Check for visible obstructions
- [ ] Inspect rails for debris
- [ ] Verify pulleys turn freely
- [ ] Check belt tension (if accessible)
- [ ] Lubricate dry joints

**Powered Movement Test:**

```plaintext
1. Position nozzle at center
2. Command X+10mm movement
3. Verify nozzle moved ~10mm
4. Repeat for Y+10mm and Z+5mm
5. Check for skipping or missed steps
```

---

### Category D: Leveling & Alignment

**Build Plate Leveling Test:**

**Paper Method (Most Common):**

```plaintext
1. Heat bed to printing temperature
2. Heat nozzle to printing temperature  
3. Position nozzle at first corner
4. Adjust leveling screw until paper drags slightly
5. Move to next corner and repeat
6. Repeat for all 4-9 corners
7. Do center point check last

Target: Consistent slight paper drag all points
```

**Leveling Validation:**

- [ ] Level at 4 corners
- [ ] Level at bed center
- [ ] No high/low points
- [ ] Nozzle doesn't hit bed at any point
- [ ] Consistent first-layer appearance across bed

---

### Category E: Filament & Extruder

**Filament Quality Check:**

- [ ] Filament diameter consistent (visually inspect ~50cm)
- [ ] No visible cracks or damage
- [ ] Spool rotates freely without binding
- [ ] Filament path clear to extruder
- [ ] No tangles in filament path

**Extruder Test:**

```plaintext
1. Heat to printing temperature
2. Remove print head (if removable)
3. Push 10-20mm of filament through manually
4. Feel resistance during push
5. Observe material exits cleanly

Expected: Smooth push, consistent extrusion
```

---

## Filament Loading Test

**Test Sequence:**

```plaintext
1. Heat extruder to material temp
2. Load filament into extruder
3. Watch for material at nozzle tip

Timeline:
- 0-10 sec: Filament engaging
- 10-30 sec: Moving through hot end
- 30-60 sec: Should appear at nozzle tip
- >60 sec: Possible partial clog

If fails:
-> See "Filament Won't Load" troubleshooting
```

---

## First Layer Diagnostics

### Layer Appearance Test

**After printing first 5-10 layer heights, evaluate:**

| Appearance              | Issue                      | Action                   |
|-------------------------|----------------------------|--------------------------|
| Wavy/embossed           | Bed not level or too close | Relevel bed              |
| Gaps between lines      | Nozzle too high            | Lower Z-offset           |
| Completely squished     | Nozzle too low             | Raise Z-offset           |
| Partial adhesion        | Bed too cool or dirty      | Clean bed, increase temp |
| Consistent squish/lines | Correct                    | Continue print           |

---

## Mid-Print Issue Diagnostics

### Extrusion Failure Checklist

**When extrusion stops during print:**

**Immediate Actions:**

- [ ] Pause print (don't stop)
- [ ] Listen for extruder sounds (grinding = jam)
- [ ] Feel nozzle carefully (if cooled slightly)
- [ ] Observe filament in extruder (is it feeding?)

**Diagnostic Decision:**

```plaintext
Is filament stuck in extruder?
+---- YES -> Nozzle clog likely
|        -> See Nozzle Clog section (common_issues_and_solutions.md)
|        -> Try: Cold pull, retract, clean
|
+---- NO -> Filament loading issue
         -> Is spool binding? -> Fix spool rotation
         -> Is path blocked? -> Clear obstruction
         -> Is drive gear slipping? -> Clean/tension drive gear
```

---

### Mechanical Issue Diagnostics

**When movement sounds wrong:**

**Listen for:**

- Grinding/grating: Bearing issue or obstruction
- Clicking/skipping: Lost steps or over-torque
- Squealing: Lubrication needed
- Silence (but no movement): Stalled motor

**Diagnosis Method:**

```plaintext
1. Pause print
2. Manually move suspected axis
3. Record resistance type:
   - Smooth:  Normal
   - Rough: Bearing/alignment problem
   - Stuck: Mechanical bind
4. Visually inspect that axis
```

---

## Layer Quality Diagnostics

### Visual Inspection During Print

**Every 30 minutes of printing, check:**

```plaintext
[ ] Layer alignment (no X/Y shifting)
[ ] Material flow (consistent lines, not thin or thick)
[ ] Surface appearance (smooth, not rough)
[ ] Support structure (if used, printing properly)
[ ] No material strings between features
[ ] Consistent layer heights visible
```

---

## Dimensional Accuracy Diagnostics

**After print completes and cools (24 hours):**

### Precision Measurement

**Materials Needed:**

- Digital calipers (+/-0.05mm accuracy)
- Ruler (for larger dimensions)
- Notepad for recording

**Measurement Protocol:**

```plaintext
1. Measure each dimension 3 times at different locations
2. Calculate average
3. Compare to design dimension
4. Calculate deviation percentage

Formula:
Deviation % = ((Measured - Design) / Design) x 100%

Example:
- Design: 20.0mm
- Measured: 19.8mm
- Deviation: ((19.8 - 20.0) / 20.0) x 100% = -1%
```

### Tolerance Evaluation

| Tolerance          | Pass/Fail | Action                  |
|--------------------|-----------|-------------------------|
| +/-0.5mm or better | PASS      | No adjustment needed    |
| +/-0.5-1mm         | MARGINAL  | Document and monitor    |
| >+/-1mm            | FAIL      | Adjust flow/calibration |

---

## Environmental Diagnostics

**When quality varies between prints:**

**Check Conditions:**

- [ ] Room temperature stable (+/-5C?)
- [ ] Humidity reasonable (30-60%?)
- [ ] No drafts from windows/AC near printer
- [ ] Consistent vibration level (no external impact)
- [ ] Same filament spool/batch used
- [ ] Same slicer settings applied

**Environmental Log:**

```plaintext
Date:     Time:     Temp: C    Humidity: %
Print Duration:     Result Quality: Poor/Fair/Good/Excellent
Notes: 
```

---

## Troubleshooting Decision Tree

**Start here for systematic diagnosis:**

```plaintextv
+---- Printer won't start?
|  +---- Check: Power, connections, firmware
|
+---- Heating won't work?
|  +---- Check: Temperature sensor, firmware, heater element
|
+---- Won't home/move?
|  +---- Check: Endstops, mechanical bind, motors, belts
|
+---- First layer fails?
|  +---- Check: Bed level, nozzle height, cleanliness, temperature
|
+---- Filament won't feed?
|  +---- Check: Temperature, nozzle, drive gear, clog
|
+---- Extrusion stops mid-print?
|  +---- Extruder grinding? -> Clog (cold pull or replace nozzle)
|  +---- Filament slack? -> Drive gear or load issue
|  +---- No sounds? -> Temperature drop or firmware issue
|
+---- Print quality poor?
|  +---- Weak/thin? -> Increase flow/temp/slow down
|  +---- Rough/bloated? -> Decrease flow/temp/speed up
|  +---- Warped? -> Lower bed temp, faster cooling
|  +---- Strings? -> Increase retraction, lower temp
|
+---- Dimensions wrong?
   +---- Check: Flow rate calibration, printer accuracy limits
```

---

## Diagnostic Report Template

**Use when seeking help:**

```plaintext
DIAGNOSTIC REPORT
================

Printer Model: 
Problem Description: 
When it occurs: (always/sometimes/first 5 layers, etc) 
Recent changes: 

DIAGNOSTICS PERFORMED:
[ ] Power/connectivity verified
[ ] Temperatures verified  
[ ] Mechanical movement tested
[ ] Bed leveling checked
[ ] Filament loading tested
[ ] First layer inspected
[ ] Print quality evaluated

Key Findings:
1. 
2. 
3. 

Attempted Solutions:
1. 
2. 

Result: (Solved/Partial/Ongoing) 
```

---

**Last Diagnostic Date:**
**Issue Resolved:**  
**Diagnostic Performed By:**
