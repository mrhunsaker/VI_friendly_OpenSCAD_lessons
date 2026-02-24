# Appendix B: Material Properties & Selection Guide {#3dmake_foundation-appendix_b_material_properties}

This appendix covers **material properties, characteristics, and selection criteria** for 3D printing filaments. Each material includes:
- Physical properties (strength, flexibility, temperature tolerance)
- Printing parameters (nozzle temp, bed temp, speed)
- Suitability for different projects
- Accessibility considerations (measurement-based verification)
- Cost/availability comparison

**Referenced in:** Lessons 5 (Safety), 6-10 (Projects), 11 (Customer Requirements)

---

## Overview: Why Material Matters

The material you choose affects:
- **Strength:** Can the part hold weight?
- **Flexibility:** Will it bend or break?
- **Temperature:** Can it withstand heat?
- **Durability:** Will it last months or years?
- **Cost:** Budget constraints?
- **Printability:** Ease of use for beginners?
- **Appearance:** Texture, color, finish?

### The Material Selection Flowchart

```
What's the primary requirement?
+-- Strength & Detail?
    +-- PLA (best for beginners, detail)
        or PETG (stronger, tougher)
+-- Flexibility?
    +-- TPU/TPE (rubber-like)
+-- Heat Resistance?
    +-- ABS or Polycarbonate
+-- Transparency?
    +-- PETG or Polycarbonate
+-- Food Contact?
    +-- FDA-approved PETG or PLA
+-- Cost-Conscious?
    +-- PLA (cheapest, easiest)
```

---

## 1. PLA (Polylactic Acid)

### Properties at a Glance

| Property                   | Rating | Notes                                         |
|----------------------------|--------|-----------------------------------------------|
| **Strength**               | [3/5]  | Good for most projects; not for dynamic loads |
| **Flexibility**            | [1/5]  | Brittle; will snap under stress               |
| **Temperature Resistance** | [2/5]  | Softens around 60C; bad for hot environments  |
| **Ease of Printing**       | [5/5]  | Most forgiving; best for beginners            |
| **Cost**                   | [5/5]  | Cheapest option (~$20/kg)                     |
| **Appearance**             | [5/5]  | Excellent surface finish; many colors         |
| **Availability**           | [5/5]  | Available everywhere                          |

### Ideal Projects

- [YES] Decorative pieces (jewelry, miniatures)
- [YES] Enclosures/shells (light loads)
- [YES] Prototype/mockups
- [YES] Low-stress connector clips
- [YES] Educational demonstrations
- [NO] Load-bearing brackets
- [NO] Hinges or flexing parts
- [NO] Heat-resistant applications

### Printing Parameters

| Parameter        | Value            | Tolerance                     |
|------------------|------------------|-------------------------------|
| **Nozzle Temp**  | 200C             | 190-210C (varies by brand)    |
| **Bed Temp**     | 60C              | 50-65C                        |
| **Print Speed**  | 50 mm/s          | 40-60 mm/s                    |
| **Retraction**   | 5mm @ 40 mm/s    | Yes, prevents stringing       |
| **Cooling Fan**  | 100%             | High cooling improves quality |
| **First Layer**  | Slower (25 mm/s) | Ensures adhesion              |
| **Layer Height** | 0.2mm            | 0.1-0.3mm depending on detail |

### PLA Variants

**Standard PLA**
- Most common, reliable
- Best for beginners

**PLA Pro / Enhanced PLA**
- Slightly stronger than standard PLA
- Same temperature parameters
- ~10% cost premium

**Silk PLA**
- Glossy finish instead of matte
- Same strength as standard PLA
- Slightly slower to print

**Marble or Color-Changing PLA**
- Visual effects
- Same printing parameters
- Mostly for aesthetics

### Common Issues & Solutions

| Problem                        | Cause                           | Solution                                                |
|--------------------------------|---------------------------------|---------------------------------------------------------|
| **Warping on corners**         | Bed too hot or cooling too fast | Reduce bed temp to 50C; disable cooling for first layer |
| **Stringing**                  | Temp too high                   | Lower nozzle temp 5C                                    |
| **Poor layer adhesion**        | Nozzle too high                 | Lower Z-offset 0.1mm                                    |
| **Brittleness after print**    | Normal for PLA                  | Not a problem; expected behavior                        |
| **Nozzle clogs on retraction** | Temperature inconsistency       | Ensure stable nozzle temp +/- 5C                        |

### Why PLA for This Course

**PLA is recommended for all Lessons 1-11 because:**
1. **Beginner-friendly:** Most forgiving material
2. **Predictable:** Consistent across different printers
3. **Cost-effective:** Maximize printing volume on student budget
4. **Accessibility:** Easier to troubleshoot for new users
5. **Safe:** Non-toxic, low fume emission
6. **Available:** Found at any 3D printing supplier

---

## 2. PETG (Polyethylene Terephthalate Glycol)

### Properties at a Glance

| Property                   | Rating | Notes                                           |
|----------------------------|--------|-------------------------------------------------|
| **Strength**               | [4/5]  | Tougher than PLA; better for load-bearing       |
| **Flexibility**            | [2/5]  | Better than PLA but still primarily rigid       |
| **Temperature Resistance** | [3/5]  | Softens around 85C; better than PLA             |
| **Ease of Printing**       | [4/5]  | Slightly more challenging than PLA              |
| **Cost**                   | [4/5]  | ~$25/kg (slightly more than PLA)                |
| **Appearance**             | [4/5]  | Good surface finish; slightly glossier than PLA |
| **Availability**           | [5/5]  | Widely available                                |

### When to Use PETG Instead of PLA

- **Functional brackets or mounts** (where strength matters)
- **Parts that may be load-bearing** (shelves, holders)
- **Outdoors/higher temperature environments**
- **Parts requiring transparency** (clear PETG available)
- **Better moisture resistance** (vs. PLA)

### Printing Parameters

| Parameter        | Value            | Tolerance                 |
|------------------|------------------|---------------------------|
| **Nozzle Temp**  | 235C             | 230-245C                  |
| **Bed Temp**     | 80C              | 75-85C                    |
| **Print Speed**  | 50 mm/s          | 40-60 mm/s (same as PLA)  |
| **Retraction**   | 4mm @ 40 mm/s    | Slightly less than PLA    |
| **Cooling Fan**  | 30-50%           | Less cooling than PLA     |
| **First Layer**  | Normal (50 mm/s) | Harder to adjust than PLA |
| **Layer Height** | 0.2mm            | 0.1-0.3mm                 |

### Comparison: PETG vs. PLA

| Aspect         | PLA       | PETG                  |
|----------------|-----------|-----------------------|
| Nozzle Temp    | 200C      | 235C                  |
| Bed Temp       | 60C       | 80C                   |
| Strength       | Good      | Better (20% stronger) |
| Flexibility    | Brittle   | More resilient        |
| Heat Tolerance | 60C       | 85C                   |
| Ease           | Very easy | Easy (needs tweaking) |
| Cost           | $20/kg    | $25/kg                |
| Outdoor Use    | Not ideal | Better                |

### Projects for PETG

- [YES] Phone stand (needs strength)
- [YES] Bracket or shelf support
- [YES] Flexible clip (needs resilience)
- [YES] Outdoor item
- [YES] Clear enclosure (if using clear PETG)
- [NO] Fine detail work (slightly courser finish)
- [NO] Food-contact items (not food-safe unless specified)

---

## 3. ABS (Acrylonitrile Butadiene Styrene)

### Properties at a Glance

| Property                   | Rating | Notes                                         |
|----------------------------|--------|-----------------------------------------------|
| **Strength**               | [4/5]  | Similar to PETG; good impact resistance       |
| **Flexibility**            | [3/5]  | More flexible than PETG                       |
| **Temperature Resistance** | [5/5]  | Softens around 105C; best of common materials |
| **Ease of Printing**       | [2/5]  | Requires enclosure/heated bed; challenging    |
| **Cost**                   | [4/5]  | ~$25-30/kg                                    |
| **Appearance**             | [3/5]  | Rougher than PLA; requires post-processing    |
| **Availability**           | [4/5]  | Good availability; not as universal as PLA    |

### When to Use ABS

- **High-temperature environments** (near heat sources)
- **Mechanical parts** (gears, bearings)
- **Durability** (parts lasting years)
- **Post-processing** (can be sanded, glued, vapor-smoothed)
- **Professional applications** (not toys/decorative)

### Why ABS is Challenging

ABS requires:
1. **Enclosed environment:** Minimize temperature fluctuations
2. **Heated bed:** 100C+ (much higher than PLA)
3. **Controlled cooling:** Too-fast cooling causes warping
4. **Ventilation:** ABS emits fumes (acetone-like smell)

### Printing Parameters

| Parameter       | Value          | Tolerance                        |
|-----------------|----------------|----------------------------------|
| **Nozzle Temp** | 240C           | 230-250C                         |
| **Bed Temp**    | 100C           | 95-105C                          |
| **Enclosure**   | Required       | Maintains heat (reduces warping) |
| **Print Speed** | 40 mm/s        | Slower than PLA                  |
| **Retraction**  | 3mm @ 30 mm/s  | Very short                       |
| **Cooling Fan** | 0%             | OFF (causes warping)             |
| **First Layer** | Slow (30 mm/s) | Critical for adhesion            |

### Projects for ABS

- [YES] Mechanical components
- [YES] Heat-resistant enclosure
- [YES] Durable outdoor item
- [YES] Professional prototypes
- [NO] Beginner projects (too challenging)
- [NO] Decorative/aesthetic work (not recommended)
- [NO] Flexible parts

### Accessibility Note

ABS is **not recommended for this course** because:
1. Requires enclosed printer (expensive for beginners)
2. High failure rate for inexperienced users
3. Strong odor (ventilation concerns for some users)
4. Requires extra equipment (acetone for post-processing)

---

## 4. TPU / TPE (Thermoplastic Polyurethane / Elastomer)

### Properties at a Glance

| Property                   | Rating | Notes                                         |
|----------------------------|--------|-----------------------------------------------|
| **Strength**               | [3/5]  | Good; impact-resistant                        |
| **Flexibility**            | [5/5]  | Very flexible; rubber-like                    |
| **Temperature Resistance** | [3/5]  | Softens around 80C; moderate                  |
| **Ease of Printing**       | [3/5]  | Needs tweaking; flexible materials are tricky |
| **Cost**                   | [3/5]  | ~$30-40/kg (expensive)                        |
| **Appearance**             | [4/5]  | Smooth; feels good tactilely                  |
| **Availability**           | [4/5]  | Growing availability                          |

### What is TPU?

TPU is a **flexible rubber-like plastic** that:
- Doesn't crack when bent
- Absorbs impact
- Returns to original shape
- Bridges the gap between plastic and rubber

### Printing Parameters

| Parameter       | Value          | Tolerance                                      |
|-----------------|----------------|------------------------------------------------|
| **Nozzle Temp** | 215C           | 210-225C                                       |
| **Bed Temp**    | 60C            | 50-70C                                         |
| **Print Speed** | 20-30 mm/s     | VERY SLOW (flexibility needs time)             |
| **Retraction**  | Minimal or Off | 0-1mm (flexible material doesn't retract well) |
| **Cooling Fan** | 0%             | Off (material needs heat)                      |
| **Line Width**  | 0.5mm          | Wider than normal (flexible material bridges)  |

### Projects for TPU

- [YES] Phone case (needs flexibility + protection)
- [YES] Flex joints / hinges
- [YES] Gasket or seal
- [YES] Shoe insert or orthotic
- [YES] Tactile button (for accessibility)
- [NO] Fine detail work (too stretchy)
- [NO] Decorative items (usually not aesthetic)
- [NO] Precision parts

### Challenges with TPU

1. **Very slow printing:** 5-10x slower than PLA
2. **Stringing:** Flexible material tends to ooze
3. **Flexible bed needed:** Standard beds may not work
4. **Post-processing difficult:** Hard to sand/glue

### Why TPU for Accessibility

**TPU is excellent for accessibility because:**
- Can create tactile buttons/indicators
- Flexible grips for ergonomic handles
- Gaskets that don't damage delicate equipment
- Accessible because: Achievable by all users if given proper guidance

---

## 5. Polycarbonate (PC)

### Properties at a Glance

| Property                   | Rating | Notes                              |
|----------------------------|--------|------------------------------------|
| **Strength**               | [5/5]  | Extremely strong; impact-resistant |
| **Flexibility**            | [2/5]  | Rigid; similar to PETG             |
| **Temperature Resistance** | [5/5]  | Best; softens around 130C          |
| **Ease of Printing**       | [2/5]  | Difficult; prone to warping        |
| **Cost**                   | [2/5]  | Most expensive (~$50+/kg)          |
| **Appearance**             | [4/5]  | Transparent/translucent options    |
| **Availability**           | [2/5]  | Limited; specialty supply          |

### When to Use Polycarbonate

- **Highest strength required**
- **Transparent/bullet-proof enclosure needed**
- **Extreme temperature environment**
- **Professional/industrial applications**

### Why Polycarbonate is Not for This Course

1. Extreme difficulty (high failure rate)
2. Very expensive (3-5x cost of PLA)
3. Requires industrial-grade printer
4. Post-processing complex

---

## 6. Nylon (PA)

### Properties at a Glance

| Property                   | Rating | Notes                                 |
|----------------------------|--------|---------------------------------------|
| **Strength**               | [5/5]  | Very strong; can be flexible          |
| **Flexibility**            | [4/5]  | More flexible than ABS                |
| **Temperature Resistance** | [4/5]  | Good; softens around 120C             |
| **Ease of Printing**       | [2/5]  | Difficult; very temperature-sensitive |
| **Cost**                   | [3/5]  | ~$30-40/kg                            |
| **Appearance**             | [3/5]  | Matte finish; less aesthetic than PLA |
| **Availability**           | [3/5]  | Growing but limited                   |

### Nylon Use Cases

- [YES] Mechanical parts (gears, hinges)
- [YES] Flexible connectors
- [YES] Threads/screws
- [YES] High-stress applications
- [NO] Not for beginners

---

## Material Comparison Table

| Material  | Nozzle | Bed  | Strength | Flexibility | Heat  | Ease  | Cost | Best For             |
|-----------|--------|------|----------|-------------|-------|-------|------|----------------------|
| **PLA**   | 200C   | 60C  | [3/5]    | [1/5]       | [2/5] | [5/5] | $    | Beginners, detail    |
| **PETG**  | 235C   | 80C  | [4/5]    | [2/5]       | [3/5] | [4/5] | $$   | Functional parts     |
| **ABS**   | 240C   | 100C | [4/5]    | [3/5]       | [5/5] | [2/5] | $$   | High-temp/mechanical |
| **TPU**   | 215C   | 60C  | [3/5]    | [5/5]       | [3/5] | [3/5] | $$$  | Flexibility/tactile  |
| **PC**    | 280C   | 110C | [5/5]    | [2/5]       | [5/5] | [1/5] | $$$$ | Extreme strength     |
| **Nylon** | 250C   | 85C  | [5/5]    | [4/5]       | [4/5] | [2/5] | $$$  | Mechanical/flexible  |

---

## Filament Quality Factors

### Why Not All PLA is the Same

**Diameter Tolerance**
- Good filament: +/- 0.03mm
- Poor filament: +/- 0.1mm or worse
- Impact: Inconsistent extrusion, layer quality varies

**Dryness**
- PLA absorbs moisture from air
- Wet filament = weak prints + bubbles
- Solution: Store in sealed container with desiccant

**Color Consistency**
- Good brands: Same color throughout
- Poor brands: Color varies spool-to-spool

**Impurities**
- Good: Minimal impurities
- Poor: Visible specs/contaminants -> possible clogs

### How to Check Filament Quality (Non-Visually)

1. **Weight Check**
   ```
   Known: 1kg spool
   Weigh spool + filament
   Calculate remaining filament
   Should match spool markings
   ```

2. **Diameter Check**
   ```
   Use caliper to measure multiple points
   Should be consistent +/- 0.03mm
   If varying, likely lower quality
   ```

3. **Dryness Test**
   ```
   Feel texture: Should be smooth, not tacky
   Smell: Should be neutral (not musty)
   If wet, store in sealed container with desiccant
   ```

4. **Print Test**
   ```
   Print small cube (20mm x 20mm x 20mm)
   Inspect surface: Smooth or bubbly?
   Weight: Does it match expected weight?
   ```

---

## Storage & Maintenance

### Proper Filament Storage

**Temperature**
- Store between 15-25C
- Avoid direct sunlight (fades color, degrades material)

**Humidity**
- Keep below 40% humidity
- Use desiccant packets in sealed containers
- Change desiccant every 2-3 months

**Organization**
- Label spools with: Material, color, date opened, approx. remaining
- Store vertically or on spindle (prevents kinking)

### Filament Degradation Signs

| Sign                          | Cause                      | Solution                    |
|-------------------------------|----------------------------|-----------------------------|
| Weak prints / breaking easily | Filament aged or wet       | Replace with fresh filament |
| Discoloration or spots        | Oxidation or contamination | Not usable; discard safely  |
| Brittle or crumbly            | Overheated or UV damage    | Not usable; discard         |
| Slight fading (color)         | UV exposure                | Still usable; just faded    |

---

## Cost Analysis

### Cost per Project

```
Material cost = (Filament weight used) x (Cost per kg)

Example: Bracelet holder
- Weight: 25 grams
- Material: PLA at $20/kg
- Cost: (25g / 1000g) x $20 = $0.50

vs. PETG at $25/kg: $0.625
vs. ABS at $30/kg: $0.75
```

### Budget Tips

1. **Buy bulk:** 5kg spool is cheaper per gram than 1kg
2. **Buy sales:** 30-40% discounts common during sales
3. **Brand matters:** Premium brands slightly more but more reliable
4. **Generic brands:** Often acceptable if reviews are good

### Recommended Brands (Ranked by Beginner-Friendliness)

| Rank | Brand         | Known For                        | Cost | Notes                        |
|------|---------------|----------------------------------|------|------------------------------|
| 1    | Prusament     | Reliability, Prusa compatibility | $$$  | Best; excellent support      |
| 2    | MatterHackers | Quality, variety                 | $$   | Very good; educational focus |
| 3    | Fillamentum   | European quality                 | $$   | Excellent; eco-friendly      |
| 4    | Overture      | Value, consistency               | $    | Good budget option           |
| 5    | eSUN          | Variety, affordable              | $    | Decent; variable quality     |

---

## Material Selection Decision Tree

```
START HERE: What's most important?

GOAL: Beginner success?
  YES - PLA (best choice)
  NO  - Next question

GOAL: Strength matters?
  YES - PETG or Nylon
  NO  - Next question

GOAL: Flexibility needed?
  YES - TPU (rubber-like)
  NO  - Next question

GOAL: High temperature?
  YES - ABS or Polycarbonate
  NO  - Next question

GOAL: Transparent?
  YES - Clear PETG or Polycarbonate
  NO  - Use PLA

FINAL CHOICE:
- If unsure, use PLA
- If needs strength, use PETG
- If needs flexibility, use TPU
- If needs heat, use ABS
```

---

## PowerShell Integration: Track Material Usage

```powershell
# Track filament usage across all projects

$materialLog = @"
ProjectName,Material,ColorName,WeightUsed(g),DatePrinted,Notes
"@

# Example entries
$materialLog += "`nBraceletHolder,PLA,NaturalWhite,25.3,2024-01-15,Final design"
$materialLog += "`nPhoneStand,PETG,Black,47.2,2024-01-16,Needs strength"
$materialLog += "`nKeycap,PLA,Red,12.5,2024-01-17,Prototype"

# Save to CSV
$materialLog | Out-File "C:\Projects\material-log.csv"

# Analyze usage
$materials = Import-Csv "C:\Projects\material-log.csv"

$totalWeight = ($materials | Measure-Object -Property "WeightUsed(g)" -Sum).Sum
$avgWeight = ($materials | Measure-Object -Property "WeightUsed(g)" -Average).Average

Write-Host "Total weight used: $totalWeight grams"
Write-Host "Average per project: $avgWeight grams"

# Calculate cost (PLA at $20/kg)
$costPerKg = 20
$totalCost = ($totalWeight / 1000) * $costPerKm
Write-Host "Estimated cost: $$($totalCost.ToString("F2"))"
```

---

## Summary

**Key Takeaways:**

1. **Start with PLA:** Best for learning; most forgiving
2. **Understand the tradeoffs:** Strength vs. ease, cost vs. quality
3. **Match material to project:** Decorative = PLA; functional = PETG
4. **Store properly:** Desiccant, cool, dark location
5. **Track usage:** Know what works for future projects
6. **Test before committing:** Print small test on new filament

**Recommended Progression:**
- Lessons 6-7: PLA (simplest)
- Lessons 8-9: PLA or PETG (functional parts)
- Lesson 10: PETG or TPU (testing materials)
- Lesson 11: Student choice (depends on stakeholder requirements)
