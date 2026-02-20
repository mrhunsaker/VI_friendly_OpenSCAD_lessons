# Appendix B: Material Properties & Selection Guide

This appendix covers **material properties, characteristics, and selection criteria** for 3D printing filaments. Each material includes:
- Physical properties (strength, flexibility, temperature tolerance)
- Printing parameters (nozzle temp, bed temp, speed)
- Suitability for different projects
- Accessibility considerations (measurement-based verification)
- Cost/availability comparison

**Referenced in:** Lessons 5 (Safety), 6–10 (Projects), 11 (Customer Requirements)

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
├─ Strength & Detail?
│  └─ PLA (best for beginners, detail)
│     or PETG (stronger, tougher)
├─ Flexibility?
│  └─ TPU/TPE (rubber-like)
├─ Heat Resistance?
│  └─ ABS or Polycarbonate
├─ Transparency?
│  └─ PETG or Polycarbonate
├─ Food Contact?
│  └─ FDA-approved PETG or PLA
└─ Cost-Conscious?
   └─ PLA (cheapest, easiest)
```

---

## 1. PLA (Polylactic Acid)

### Properties at a Glance

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★☆☆ | Good for most projects; not for dynamic loads |
| **Flexibility** | ★☆☆☆☆ | Brittle; will snap under stress |
| **Temperature Resistance** | ★★☆☆☆ | Softens around 60°C; bad for hot environments |
| **Ease of Printing** | ★★★★★ | Most forgiving; best for beginners |
| **Cost** | ★★★★★ | Cheapest option (~$20/kg) |
| **Appearance** | ★★★★★ | Excellent surface finish; many colors |
| **Availability** | ★★★★★ | Available everywhere |

### Ideal Projects

- ✅ Decorative pieces (jewelry, miniatures)
- ✅ Enclosures/shells (light loads)
- ✅ Prototype/mockups
- ✅ Low-stress connector clips
- ✅ Educational demonstrations
- ❌ Load-bearing brackets
- ❌ Hinges or flexing parts
- ❌ Heat-resistant applications

### Printing Parameters

| Parameter | Value | Tolerance |
|---|---|---|
| **Nozzle Temp** | 200°C | 190–210°C (varies by brand) |
| **Bed Temp** | 60°C | 50–65°C |
| **Print Speed** | 50 mm/s | 40–60 mm/s |
| **Retraction** | 5mm @ 40 mm/s | Yes, prevents stringing |
| **Cooling Fan** | 100% | High cooling improves quality |
| **First Layer** | Slower (25 mm/s) | Ensures adhesion |
| **Layer Height** | 0.2mm | 0.1–0.3mm depending on detail |

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

| Problem | Cause | Solution |
|---|---|---|
| **Warping on corners** | Bed too hot or cooling too fast | Reduce bed temp to 50°C; disable cooling for first layer |
| **Stringing** | Temp too high | Lower nozzle temp 5°C |
| **Poor layer adhesion** | Nozzle too high | Lower Z-offset 0.1mm |
| **Brittleness after print** | Normal for PLA | Not a problem; expected behavior |
| **Nozzle clogs on retraction** | Temperature inconsistency | Ensure stable nozzle temp +/- 5°C |

### Why PLA for This Course

**PLA is recommended for all Lessons 1–11 because:**
1. **Beginner-friendly:** Most forgiving material
2. **Predictable:** Consistent across different printers
3. **Cost-effective:** Maximize printing volume on student budget
4. **Accessibility:** Easier to troubleshoot for new users
5. **Safe:** Non-toxic, low fume emission
6. **Available:** Found at any 3D printing supplier

---

## 2. PETG (Polyethylene Terephthalate Glycol)

### Properties at a Glance

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★★☆ | Tougher than PLA; better for load-bearing |
| **Flexibility** | ★★☆☆☆ | Better than PLA but still primarily rigid |
| **Temperature Resistance** | ★★★☆☆ | Softens around 85°C; better than PLA |
| **Ease of Printing** | ★★★★☆ | Slightly more challenging than PLA |
| **Cost** | ★★★★☆ | ~$25/kg (slightly more than PLA) |
| **Appearance** | ★★★★☆ | Good surface finish; slightly glossier than PLA |
| **Availability** | ★★★★★ | Widely available |

### When to Use PETG Instead of PLA

- **Functional brackets or mounts** (where strength matters)
- **Parts that may be load-bearing** (shelves, holders)
- **Outdoors/higher temperature environments**
- **Parts requiring transparency** (clear PETG available)
- **Better moisture resistance** (vs. PLA)

### Printing Parameters

| Parameter | Value | Tolerance |
|---|---|---|
| **Nozzle Temp** | 235°C | 230–245°C |
| **Bed Temp** | 80°C | 75–85°C |
| **Print Speed** | 50 mm/s | 40–60 mm/s (same as PLA) |
| **Retraction** | 4mm @ 40 mm/s | Slightly less than PLA |
| **Cooling Fan** | 30–50% | Less cooling than PLA |
| **First Layer** | Normal (50 mm/s) | Harder to adjust than PLA |
| **Layer Height** | 0.2mm | 0.1–0.3mm |

### Comparison: PETG vs. PLA

| Aspect | PLA | PETG |
|---|---|---|
| Nozzle Temp | 200°C | 235°C |
| Bed Temp | 60°C | 80°C |
| Strength | Good | Better (20% stronger) |
| Flexibility | Brittle | More resilient |
| Heat Tolerance | 60°C | 85°C |
| Ease | Very easy | Easy (needs tweaking) |
| Cost | $20/kg | $25/kg |
| Outdoor Use | Not ideal | Better |

### Projects for PETG

- ✅ Phone stand (needs strength)
- ✅ Bracket or shelf support
- ✅ Flexible clip (needs resilience)
- ✅ Outdoor item
- ✅ Clear enclosure (if using clear PETG)
- ❌ Fine detail work (slightly courser finish)
- ❌ Food-contact items (not food-safe unless specified)

---

## 3. ABS (Acrylonitrile Butadiene Styrene)

### Properties at a Glance

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★★☆ | Similar to PETG; good impact resistance |
| **Flexibility** | ★★★☆☆ | More flexible than PETG |
| **Temperature Resistance** | ★★★★★ | Softens around 105°C; best of common materials |
| **Ease of Printing** | ★★☆☆☆ | Requires enclosure/heated bed; challenging |
| **Cost** | ★★★★☆ | ~$25–30/kg |
| **Appearance** | ★★★☆☆ | Rougher than PLA; requires post-processing |
| **Availability** | ★★★★☆ | Good availability; not as universal as PLA |

### When to Use ABS

- **High-temperature environments** (near heat sources)
- **Mechanical parts** (gears, bearings)
- **Durability** (parts lasting years)
- **Post-processing** (can be sanded, glued, vapor-smoothed)
- **Professional applications** (not toys/decorative)

### Why ABS is Challenging

ABS requires:
1. **Enclosed environment:** Minimize temperature fluctuations
2. **Heated bed:** 100°C+ (much higher than PLA)
3. **Controlled cooling:** Too-fast cooling causes warping
4. **Ventilation:** ABS emits fumes (acetone-like smell)

### Printing Parameters

| Parameter | Value | Tolerance |
|---|---|---|
| **Nozzle Temp** | 240°C | 230–250°C |
| **Bed Temp** | 100°C | 95–105°C |
| **Enclosure** | Required | Maintains heat (reduces warping) |
| **Print Speed** | 40 mm/s | Slower than PLA |
| **Retraction** | 3mm @ 30 mm/s | Very short |
| **Cooling Fan** | 0% | OFF (causes warping) |
| **First Layer** | Slow (30 mm/s) | Critical for adhesion |

### Projects for ABS

- ✅ Mechanical components
- ✅ Heat-resistant enclosure
- ✅ Durable outdoor item
- ✅ Professional prototypes
- ❌ Beginner projects (too challenging)
- ❌ Decorative/aesthetic work (not recommended)
- ❌ Flexible parts

### Accessibility Note

ABS is **not recommended for this course** because:
1. Requires enclosed printer (expensive for beginners)
2. High failure rate for inexperienced users
3. Strong odor (ventilation concerns for some users)
4. Requires extra equipment (acetone for post-processing)

---

## 4. TPU / TPE (Thermoplastic Polyurethane / Elastomer)

### Properties at a Glance

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★☆☆ | Good; impact-resistant |
| **Flexibility** | ★★★★★ | Very flexible; rubber-like |
| **Temperature Resistance** | ★★★☆☆ | Softens around 80°C; moderate |
| **Ease of Printing** | ★★★☆☆ | Needs tweaking; flexible materials are tricky |
| **Cost** | ★★★☆☆ | ~$30–40/kg (expensive) |
| **Appearance** | ★★★★☆ | Smooth; feels good tactilely |
| **Availability** | ★★★★☆ | Growing availability |

### What is TPU?

TPU is a **flexible rubber-like plastic** that:
- Doesn't crack when bent
- Absorbs impact
- Returns to original shape
- Bridges the gap between plastic and rubber

### Printing Parameters

| Parameter | Value | Tolerance |
|---|---|---|
| **Nozzle Temp** | 215°C | 210–225°C |
| **Bed Temp** | 60°C | 50–70°C |
| **Print Speed** | 20–30 mm/s | VERY SLOW (flexibility needs time) |
| **Retraction** | Minimal or Off | 0–1mm (flexible material doesn't retract well) |
| **Cooling Fan** | 0% | Off (material needs heat) |
| **Line Width** | 0.5mm | Wider than normal (flexible material bridges) |

### Projects for TPU

- ✅ Phone case (needs flexibility + protection)
- ✅ Flex joints / hinges
- ✅ Gasket or seal
- ✅ Shoe insert or orthotic
- ✅ Tactile button (for accessibility)
- ❌ Fine detail work (too stretchy)
- ❌ Decorative items (usually not aesthetic)
- ❌ Precision parts

### Challenges with TPU

1. **Very slow printing:** 5–10× slower than PLA
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

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★★★ | Extremely strong; impact-resistant |
| **Flexibility** | ★★☆☆☆ | Rigid; similar to PETG |
| **Temperature Resistance** | ★★★★★ | Best; softens around 130°C |
| **Ease of Printing** | ★★☆☆☆ | Difficult; prone to warping |
| **Cost** | ★★☆☆☆ | Most expensive (~$50+/kg) |
| **Appearance** | ★★★★☆ | Transparent/translucent options |
| **Availability** | ★★☆☆☆ | Limited; specialty supply |

### When to Use Polycarbonate

- **Highest strength required**
- **Transparent/bullet-proof enclosure needed**
- **Extreme temperature environment**
- **Professional/industrial applications**

### Why Polycarbonate is Not for This Course

1. Extreme difficulty (high failure rate)
2. Very expensive (3–5× cost of PLA)
3. Requires industrial-grade printer
4. Post-processing complex

---

## 6. Nylon (PA)

### Properties at a Glance

| Property | Rating | Notes |
|---|---|---|
| **Strength** | ★★★★★ | Very strong; can be flexible |
| **Flexibility** | ★★★★☆ | More flexible than ABS |
| **Temperature Resistance** | ★★★★☆ | Good; softens around 120°C |
| **Ease of Printing** | ★★☆☆☆ | Difficult; very temperature-sensitive |
| **Cost** | ★★★☆☆ | ~$30–40/kg |
| **Appearance** | ★★★☆☆ | Matte finish; less aesthetic than PLA |
| **Availability** | ★★★☆☆ | Growing but limited |

### Nylon Use Cases

- ✅ Mechanical parts (gears, hinges)
- ✅ Flexible connectors
- ✅ Threads/screws
- ✅ High-stress applications
- ❌ Not for beginners

---

## Material Comparison Table

| Material | Nozzle | Bed | Strength | Flexibility | Heat | Ease | Cost | Best For |
|---|---|---|---|---|---|---|---|---|
| **PLA** | 200°C | 60°C | ★★★ | ★ | ★★ | ★★★★★ | $ | Beginners, detail |
| **PETG** | 235°C | 80°C | ★★★★ | ★★ | ★★★ | ★★★★ | $$ | Functional parts |
| **ABS** | 240°C | 100°C | ★★★★ | ★★★ | ★★★★★ | ★★ | $$ | High-temp/mechanical |
| **TPU** | 215°C | 60°C | ★★★ | ★★★★★ | ★★★ | ★★★ | $$$ | Flexibility/tactile |
| **PC** | 280°C | 110°C | ★★★★★ | ★★ | ★★★★★ | ★ | $$$$ | Extreme strength |
| **Nylon** | 250°C | 85°C | ★★★★★ | ★★★★ | ★★★★ | ★★ | $$$ | Mechanical/flexible |

---

## Filament Quality Factors

### Why Not All PLA is the Same

**Diameter Tolerance**
- Good filament: ±0.03mm
- Poor filament: ±0.1mm or worse
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
- Poor: Visible specs/contaminants → possible clogs

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
   Should be consistent ±0.03mm
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
   Print small cube (20mm×20mm×20mm)
   Inspect surface: Smooth or bubbly?
   Weight: Does it match expected weight?
   ```

---

## Storage & Maintenance

### Proper Filament Storage

**Temperature**
- Store between 15–25°C
- Avoid direct sunlight (fades color, degrades material)

**Humidity**
- Keep below 40% humidity
- Use desiccant packets in sealed containers
- Change desiccant every 2–3 months

**Organization**
- Label spools with: Material, color, date opened, approx. remaining
- Store vertically or on spindle (prevents kinking)

### Filament Degradation Signs

| Sign | Cause | Solution |
|---|---|---|
| Weak prints / breaking easily | Filament aged or wet | Replace with fresh filament |
| Discoloration or spots | Oxidation or contamination | Not usable; discard safely |
| Brittle or crumbly | Overheated or UV damage | Not usable; discard |
| Slight fading (color) | UV exposure | Still usable; just faded |

---

## Cost Analysis

### Cost per Project

```
Material cost = (Filament weight used) × (Cost per kg)

Example: Bracelet holder
- Weight: 25 grams
- Material: PLA at $20/kg
- Cost: (25g / 1000g) × $20 = $0.50

vs. PETG at $25/kg: $0.625
vs. ABS at $30/kg: $0.75
```

### Budget Tips

1. **Buy bulk:** 5kg spool is cheaper per gram than 1kg
2. **Buy sales:** 30–40% discounts common during sales
3. **Brand matters:** Premium brands slightly more but more reliable
4. **Generic brands:** Often acceptable if reviews are good

### Recommended Brands (Ranked by Beginner-Friendliness)

| Rank | Brand | Known For | Cost | Notes |
|---|---|---|---|---|
| 1 | Prusament | Reliability, Prusa compatibility | $$$ | Best; excellent support |
| 2 | MatterHackers | Quality, variety | $$ | Very good; educational focus |
| 3 | Fillamentum | European quality | $$ | Excellent; eco-friendly |
| 4 | Overture | Value, consistency | $ | Good budget option |
| 5 | eSUN | Variety, affordable | $ | Decent; variable quality |

---

## Material Selection Decision Tree

```
START HERE: What's most important?

GOAL: Beginner success?
  YES → PLA (best choice)
  NO  → Next question

GOAL: Strength matters?
  YES → PETG or Nylon
  NO  → Next question

GOAL: Flexibility needed?
  YES → TPU (rubber-like)
  NO  → Next question

GOAL: High temperature?
  YES → ABS or Polycarbonate
  NO  → Next question

GOAL: Transparent?
  YES → Clear PETG or Polycarbonate
  NO  → Use PLA

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
- Lessons 6–7: PLA (simplest)
- Lessons 8–9: PLA or PETG (functional parts)
- Lesson 10: PETG or TPU (testing materials)
- Lesson 11: Student choice (depends on stakeholder requirements)
