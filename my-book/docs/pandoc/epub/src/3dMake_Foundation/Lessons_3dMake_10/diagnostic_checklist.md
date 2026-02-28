[Header 4 ("3dmake_foundation_lessons_3dmake_10-diagnostic_checklist", [], []) [Str "Diagnostic Checklist for 3D Printing"], Para [Str "Use this comprehensive checklist to systematically diagnose and troubleshoot printing issues."], Header 5 ("quick-diagnosis-flowchart", ["unnumbered", "unlisted"], []) [Str "Quick Diagnosis Flowchart"], CodeBlock ("", ["plaintext"], []) "Print Problem?
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
", Header 5 ("pre-print-diagnostics", ["unnumbered", "unlisted"], []) [Str "Pre-Print Diagnostics"], Header 6 ("category-a-power--connectivity", ["unnumbered", "unlisted"], []) [Str "Category A: Power & Connectivity"], Para [Str "Checklist:"], BulletList [[Plain [Str "\9744", Space, Str "Printer powered on"]], [Plain [Str "\9744", Space, Str "LED indicators showing normal status"]], [Plain [Str "\9744", Space, Str "USB cable connected (if applicable)"]], [Plain [Str "\9744", Space, Str "No error codes displaying"]], [Plain [Str "\9744", Space, Str "Display/interface responding to input"]]], Para [Str "If failed:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Check power outlet and cable"]], [Plain [Str "Verify power supply specifications (voltage, current)"]], [Plain [Str "Test with different power outlet"]], [Plain [Str "Try power-cycling (off 30 sec, on)"]], [Plain [Str "Check for blown fuses inside printer"]]], Header 6 ("category-b-temperature-system", ["unnumbered", "unlisted"], []) [Str "Category B: Temperature System"], Para [Str "Heating Element Status:"], BulletList [[Plain [Str "\9744", Space, Str "Hot end temperature rises when heating commanded"]], [Plain [Str "\9744", Space, Str "Bed temperature rises when heating commanded"]], [Plain [Str "\9744", Space, Str "Temperature readings stable (not fluctuating 5C+)"]], [Plain [Str "\9744", Space, Str "No error messages during heating"]]], Para [Str "Measurement Method:"], CodeBlock ("", ["plaintext"], []) "1. Set hot end to 200C, observe rise
   - Expected time to reach: 2-4 minutes
   - Steady rise without plateau:  Good
   - Plateau before reaching:  Problem (see below)
2. Set bed to 60C, observe rise
   - Expected time to reach: 5-10 minutes
   - Stable at target:  Good
", Para [Str "If heating slow/incomplete:"], BulletList [[Plain [Str "\9744", Space, Str "Verify target temperature was set"]], [Plain [Str "\9744", Space, Str "Check heating element firmware settings"]], [Plain [Str "\9744", Space, Str "Test thermal sensor connectivity"]], [Plain [Str "\9744", Space, Str "Inspect heating element for damage"]], [Plain [Str "\9744", Space, Str "Measure electrical resistance of heaters"]]], Para [Str "Temperature Stability Test:"], CodeBlock ("", ["plaintext"], []) "1. Heat to target temperature
2. Wait 10 minutes for stabilization
3. Record temperature every minute
4. Calculate range (max - min)
Results:
- +/-2C range:  Excellent
- +/-5C range:  Acceptable  
- +/-10C range:  Marginal
- >+/-10C range:  Problem
", Header 6 ("category-c-mechanical-systems", ["unnumbered", "unlisted"], []) [Str "Category C: Mechanical Systems"], Para [Str "Movement Diagnostics:"], Para [Str "Manual Axis Movement:"], CodeBlock ("", ["plaintext"], []) "1. Disable motors (if possible)
2. Manually move each axis
3. Record observations:
   - X-axis:  (smooth/rough/stuck)
   - Y-axis:  (smooth/rough/stuck)
   - Z-axis:  (smooth/rough/stuck)
", Para [Str "Expected results: Smooth, no grinding sounds"], Para [Str "If rough/stuck:"], BulletList [[Plain [Str "\9744", Space, Str "Check for visible obstructions"]], [Plain [Str "\9744", Space, Str "Inspect rails for debris"]], [Plain [Str "\9744", Space, Str "Verify pulleys turn freely"]], [Plain [Str "\9744", Space, Str "Check belt tension (if accessible)"]], [Plain [Str "\9744", Space, Str "Lubricate dry joints"]]], Para [Str "Powered Movement Test:"], CodeBlock ("", ["plaintext"], []) "1. Position nozzle at center
2. Command X+10mm movement
3. Verify nozzle moved ~10mm
4. Repeat for Y+10mm and Z+5mm
5. Check for skipping or missed steps
", Header 6 ("category-d-leveling--alignment", ["unnumbered", "unlisted"], []) [Str "Category D: Leveling & Alignment"], Para [Str "Build Plate Leveling Test:"], Para [Str "Paper Method (Most Common):"], CodeBlock ("", ["plaintext"], []) "1. Heat bed to printing temperature
2. Heat nozzle to printing temperature  
3. Position nozzle at first corner
4. Adjust leveling screw until paper drags slightly
5. Move to next corner and repeat
6. Repeat for all 4-9 corners
7. Do center point check last
Target: Consistent slight paper drag all points
", Para [Str "Leveling Validation:"], BulletList [[Plain [Str "\9744", Space, Str "Level at 4 corners"]], [Plain [Str "\9744", Space, Str "Level at bed center"]], [Plain [Str "\9744", Space, Str "No high/low points"]], [Plain [Str "\9744", Space, Str "Nozzle doesn't hit bed at any point"]], [Plain [Str "\9744", Space, Str "Consistent first-layer appearance across bed"]]], Header 6 ("category-e-filament--extruder", ["unnumbered", "unlisted"], []) [Str "Category E: Filament & Extruder"], Para [Str "Filament Quality Check:"], BulletList [[Plain [Str "\9744", Space, Str "Filament diameter consistent (visually inspect ", Str "~", Str "50cm)"]], [Plain [Str "\9744", Space, Str "No visible cracks or damage"]], [Plain [Str "\9744", Space, Str "Spool rotates freely without binding"]], [Plain [Str "\9744", Space, Str "Filament path clear to extruder"]], [Plain [Str "\9744", Space, Str "No tangles in filament path"]]], Para [Str "Extruder Test:"], CodeBlock ("", ["plaintext"], []) "1. Heat to printing temperature
2. Remove print head (if removable)
3. Push 10-20mm of filament through manually
4. Feel resistance during push
5. Observe material exits cleanly
Expected: Smooth push, consistent extrusion
", Header 5 ("filament-loading-test", ["unnumbered", "unlisted"], []) [Str "Filament Loading Test"], Para [Str "Test Sequence:"], CodeBlock ("", ["plaintext"], []) "1. Heat extruder to material temp
2. Load filament into extruder
3. Watch for material at nozzle tip
Timeline:
- 0-10 sec: Filament engaging
- 10-30 sec: Moving through hot end
- 30-60 sec: Should appear at nozzle tip
- >60 sec: Possible partial clog
If fails:
-> See \"Filament Won't Load\" troubleshooting
", Header 5 ("first-layer-diagnostics", ["unnumbered", "unlisted"], []) [Str "First Layer Diagnostics"], Header 6 ("layer-appearance-test", ["unnumbered", "unlisted"], []) [Str "Layer Appearance Test"], Para [Str "After printing first 5-10 layer heights, evaluate:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.31645569620253167)), (AlignDefault, (ColWidth 0.35443037974683544)), (AlignDefault, (ColWidth 0.3291139240506329))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Appearance"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Issue"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Action"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Wavy/embossed"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Bed not level or too close"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Relevel bed"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Gaps between lines"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nozzle too high"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Lower Z-offset"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Completely squished"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nozzle too low"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Raise Z-offset"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Partial adhesion"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Bed too cool or dirty"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Clean bed, increase temp"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Consistent squish/lines"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Correct"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Continue print"]]]])] (TableFoot ("", [], []) []), Header 5 ("mid-print-issue-diagnostics", ["unnumbered", "unlisted"], []) [Str "Mid-Print Issue Diagnostics"], Header 6 ("extrusion-failure-checklist", ["unnumbered", "unlisted"], []) [Str "Extrusion Failure Checklist"], Para [Str "When extrusion stops during print:"], Para [Str "Immediate Actions:"], BulletList [[Plain [Str "\9744", Space, Str "Pause print (don't stop)"]], [Plain [Str "\9744", Space, Str "Listen for extruder sounds (grinding = jam)"]], [Plain [Str "\9744", Space, Str "Feel nozzle carefully (if cooled slightly)"]], [Plain [Str "\9744", Space, Str "Observe filament in extruder (is it feeding?)"]]], Para [Str "Diagnostic Decision:"], CodeBlock ("", ["plaintext"], []) "Is filament stuck in extruder?
+---- YES -> Nozzle clog likely
|        -> See Nozzle Clog section (common_issues_and_solutions.md)
|        -> Try: Cold pull, retract, clean
|
+---- NO -> Filament loading issue
         -> Is spool binding? -> Fix spool rotation
         -> Is path blocked? -> Clear obstruction
         -> Is drive gear slipping? -> Clean/tension drive gear
", Header 6 ("mechanical-issue-diagnostics", ["unnumbered", "unlisted"], []) [Str "Mechanical Issue Diagnostics"], Para [Str "When movement sounds wrong:"], Para [Str "Listen for:"], BulletList [[Plain [Str "Grinding/grating: Bearing issue or obstruction"]], [Plain [Str "Clicking/skipping: Lost steps or over-torque"]], [Plain [Str "Squealing: Lubrication needed"]], [Plain [Str "Silence (but no movement): Stalled motor"]]], Para [Str "Diagnosis Method:"], CodeBlock ("", ["plaintext"], []) "1. Pause print
2. Manually move suspected axis
3. Record resistance type:
   - Smooth:  Normal
   - Rough: Bearing/alignment problem
   - Stuck: Mechanical bind
4. Visually inspect that axis
", Header 5 ("layer-quality-diagnostics", ["unnumbered", "unlisted"], []) [Str "Layer Quality Diagnostics"], Header 6 ("visual-inspection-during-print", ["unnumbered", "unlisted"], []) [Str "Visual Inspection During Print"], Para [Str "Every 30 minutes of printing, check:"], CodeBlock ("", ["plaintext"], []) "[ ] Layer alignment (no X/Y shifting)
[ ] Material flow (consistent lines, not thin or thick)
[ ] Surface appearance (smooth, not rough)
[ ] Support structure (if used, printing properly)
[ ] No material strings between features
[ ] Consistent layer heights visible
", Header 5 ("dimensional-accuracy-diagnostics", ["unnumbered", "unlisted"], []) [Str "Dimensional Accuracy Diagnostics"], Para [Str "After print completes and cools (24 hours):"], Header 6 ("precision-measurement", ["unnumbered", "unlisted"], []) [Str "Precision Measurement"], Para [Str "Materials Needed:"], BulletList [[Plain [Str "Digital calipers (+/-0.05mm accuracy)"]], [Plain [Str "Ruler (for larger dimensions)"]], [Plain [Str "Notepad for recording"]]], Para [Str "Measurement Protocol:"], CodeBlock ("", ["plaintext"], []) "1. Measure each dimension 3 times at different locations
2. Calculate average
3. Compare to design dimension
4. Calculate deviation percentage
Formula:
Deviation % = ((Measured - Design) / Design) x 100%
Example:
- Design: 20.0mm
- Measured: 19.8mm
- Deviation: ((19.8 - 20.0) / 20.0) x 100% = -1%
", Header 6 ("tolerance-evaluation", ["unnumbered", "unlisted"], []) [Str "Tolerance Evaluation"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tolerance"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pass/Fail"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Action"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-0.5mm or better"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PASS"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No adjustment needed"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "+/-0.5-1mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "MARGINAL"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Document and monitor"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str ">+/-1mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "FAIL"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Adjust flow/calibration"]]]])] (TableFoot ("", [], []) []), Header 5 ("environmental-diagnostics", ["unnumbered", "unlisted"], []) [Str "Environmental Diagnostics"], Para [Str "When quality varies between prints:"], Para [Str "Check Conditions:"], BulletList [[Plain [Str "\9744", Space, Str "Room temperature stable (+/-5C?)"]], [Plain [Str "\9744", Space, Str "Humidity reasonable (30-60%?)"]], [Plain [Str "\9744", Space, Str "No drafts from windows/AC near printer"]], [Plain [Str "\9744", Space, Str "Consistent vibration level (no external impact)"]], [Plain [Str "\9744", Space, Str "Same filament spool/batch used"]], [Plain [Str "\9744", Space, Str "Same slicer settings applied"]]], Para [Str "Environmental Log:"], CodeBlock ("", ["plaintext"], []) "Date:     Time:     Temp: C    Humidity: %
Print Duration:     Result Quality: Poor/Fair/Good/Excellent
Notes: 
", Header 5 ("troubleshooting-decision-tree", ["unnumbered", "unlisted"], []) [Str "Troubleshooting Decision Tree"], Para [Str "Start here for systematic diagnosis:"], CodeBlock ("", ["plaintextv"], []) "+---- Printer won't start?
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
", Header 5 ("diagnostic-report-template", ["unnumbered", "unlisted"], []) [Str "Diagnostic Report Template"], Para [Str "Use when seeking help:"], CodeBlock ("", ["plaintext"], []) "DIAGNOSTIC REPORT
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
", Para [Str "Last Diagnostic Date:", SoftBreak, Str "Issue Resolved:", LineBreak, Str "Diagnostic Performed By:"]]