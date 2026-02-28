[Header 2 ("lesson-8-advanced-parametric-design-and-interlocking-features", [], []) [Str "Lesson 8: Advanced Parametric Design and Interlocking Features"], Para [Str "Estimated time: 90–120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Apply tolerance and clearance concepts for press-fit and slip-fit assemblies"]], [Plain [Str "Design snap-fit clips using cantilever beam principles"]], [Plain [Str "Create interlocking stackable assemblies"]], [Plain [Str "Use threaded insert pockets for secure metal-to-plastic fastening"]], [Plain [Str "Apply chamfers and true chamfer geometry"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Terminal and calipers"]], [Plain [Str "Reference: standard tolerance table (0.1–0.4 mm clearance guide)"]]], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("1-understand-tolerance-and-clearance-", ["unnumbered", "unlisted"], []) [Str "1. Understand Tolerance and Clearance ", Note [Para [Str "Tolerance and Fit in FDM Printing — All3DP Guide. ", Link ("", [], []) [Str "https://all3dp.com/2/fdm-3d-printing-tolerances/"] ("https://all3dp.com/2/fdm-3d-printing-tolerances/", "")]]], Para [Str "In FDM printing, dimensions come out slightly different from the digital model due to thermal expansion, layer bonding, and material shrinkage:"], CodeBlock ("", ["openscad"], []) "// Tolerance guide for FDM with 0.4mm nozzle, PLA
// Press-fit (tight):  clearance = 0.0 – 0.1 mm
// Slip-fit (smooth):  clearance = 0.2 – 0.3 mm
// Loose/clearance:    clearance = 0.4 – 0.5 mm

nominal_peg = 10;          // design intent: 10mm peg

press_peg  = nominal_peg - 0.1;   // 9.9mm — tight, requires force to insert
slip_peg   = nominal_peg - 0.2;   // 9.8mm — smooth sliding fit
clear_peg  = nominal_peg - 0.4;   // 9.6mm — loose, rattles slightly
", Para [Str "Always print a tolerance test before committing to a design with many mating parts."], Header 4 ("2-design-a-stackable-bin-system-", ["unnumbered", "unlisted"], []) [Str "2. Design a Stackable Bin System ", Note [Para [Str "OpenSCAD User Manual — Difference and Boolean Operations. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling", "")]]], CodeBlock ("", ["openscad"], []) "// Parametric stackable bin
bin_w     = 80;    // mm
bin_d     = 60;    // mm
bin_h     = 40;    // mm
wall      = 2.5;   // mm
lip_h     = 5;     // mm — height of stacking lip
lip_clear = 0.25;  // mm — slip-fit clearance for stacking

module bin_body() {
  difference() {
    cube([bin_w, bin_d, bin_h]);
    translate([wall, wall, wall])
      cube([bin_w - 2*wall, bin_d - 2*wall, bin_h]);  // open top
  }
}

// Outer lip that fits into the base of the bin above
module stacking_lip() {
  translate([lip_clear, lip_clear, bin_h])
    difference() {
      cube([bin_w - 2*lip_clear, bin_d - 2*lip_clear, lip_h]);
      translate([wall - lip_clear, wall - lip_clear, wall])
        cube([bin_w - 2*wall, bin_d - 2*wall, lip_h]);
    }
}

bin_body();
stacking_lip();
", Header 4 ("3-design-a-snap-fit-clip-", ["unnumbered", "unlisted"], []) [Str "3. Design a Snap-Fit Clip ", Note [Para [Str "Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual (widely cited industry reference). Key principle: cantilever beam deflection formula governs clip strength and flexibility."]]], Para [Str "Snap-fits work by deflecting a flexible cantilever beam. The beam deforms during assembly and springs back to lock in place.", Note [Para [Str "Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual (widely cited industry reference). Key principle: cantilever beam deflection formula governs clip strength and flexibility."]]], CodeBlock ("", ["openscad"], []) "// Snap-fit clip — cantilever beam design
clip_w     = 20;    // mm — clip width
beam_l     = 12;    // mm — beam length (longer = more flexible)
beam_t     = 1.2;   // mm — beam thickness (thinner = easier snap)
barb_h     = 1.5;   // mm — retention barb height

module snap_clip() {
  union() {
    // Base anchor
    cube([clip_w, 5, 5]);
    // Flexible beam
    translate([0, 5, 0])
      cube([clip_w, beam_l, beam_t]);
    // Retention barb (tapered for easier entry)
    translate([0, 5 + beam_l - 0.001, 0])
      cube([clip_w, barb_h, barb_h]);
  }
}

snap_clip();
", Para [Str "Key design rule: for PLA, keep ", Code ("", [], []) "beam_t / beam_l < 0.15", Str " for adequate flexibility."], Header 4 ("4-create-threaded-insert-pockets", ["unnumbered", "unlisted"], []) [Str "4. Create Threaded Insert Pockets"], Para [Str "Heat-set threaded inserts provide strong, reusable metal threads in plastic parts."], CodeBlock ("", ["openscad"], []) "// Threaded insert pocket for M3 brass heat-set insert
// Typical M3 brass insert: OD ~4.5mm, length ~5.7mm
// Printed hole: OD + 0.1mm for press-in tolerance

module m3_insert_pocket(depth=6) {
  // Straight hole sized for brass insert
  cylinder(r=2.35, h=depth + 0.001, $fn=16);  // (4.5mm OD + 0.1) / 2
}

module m4_insert_pocket(depth=8) {
  // M4 brass insert: typical OD ~5.6mm
  cylinder(r=2.9, h=depth + 0.001, $fn=16);  // (5.6mm + 0.2) / 2
}

// Apply to a part
difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_insert_pocket(depth=10.002);
  translate([30, 15, -0.001]) m3_insert_pocket(depth=10.002);
}
", Header 4 ("5-apply-true-chamfers", ["unnumbered", "unlisted"], []) [Str "5. Apply True Chamfers"], Para [Str "A chamfer is a 45° angled cut at an edge. The correct way to create one in OpenSCAD is with a rotated and translated cutting cylinder or prism — not just cropping the top of a part."], CodeBlock ("", ["openscad"], []) "// True chamfer using a difference cut
// Chamfer size c = horizontal distance of chamfer at 45 degrees
module chamfered_box(w, d, h, c=2) {
  difference() {
    cube([w, d, h]);
    // Top edge chamfer (45-degree cut around all four top edges)
    // Cut using a rotate_extrude approach or a hull of edges
    translate([0, 0, h - c])
      difference() {
        cube([w, d, c + 0.001]);
        translate([c, c, 0]) cube([w - 2*c, d - 2*c, c + 0.001]);
      }
  }
}

// Note: the above chamfers the top rim by removing the outer corners.
// For a true 45-degree surface, use:
module edge_chamfer_45(w, d, h, c=2) {
  difference() {
    cube([w, d, h]);
    for (x=[0, w], y=[0, d]) {
      translate([x, y, h - c])
        rotate([0, 0, 45])
          cube([c*2, c*2, c + 0.001], center=true);
    }
  }
}

chamfered_box(50, 40, 20, c=3);
", Header 4 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: You can explain the difference between press-fit and slip-fit clearance values."]], [Plain [Str "After step 3: Your snap-fit clip deflects when you check the beam_t / beam_l ratio."]], [Plain [Str "After step 5: Your chamfered box shows angled edges in the slicer preview (not just a flat crop)."]]], Header 4 ("design-notes", ["unnumbered", "unlisted"], []) [Str "Design Notes"], BulletList [[Plain [Str "Tolerance values (0.1–0.4 mm) are starting points. Always print and test before finalizing a mating design."]], [Plain [Str "Snap-fit geometry is highly material-dependent: PLA is brittle; PETG and nylon are more resilient."]], [Plain [Str "Threaded insert dimensions vary by manufacturer — verify against your actual inserts before printing."]]], Header 3 ("dowel-pins-for-alignment", ["unnumbered", "unlisted"], []) [Str "Dowel Pins for Alignment"], Para [Str "For assemblies that must align precisely without a press-fit, dowel pins provide passive alignment:"], CodeBlock ("", ["openscad"], []) "// Alignment pin and pocket system
pin_r    = 3;
pin_h    = 6;
pin_clear = 0.15;  // slip-fit for alignment pin

module alignment_pin() {
  cylinder(r=pin_r, h=pin_h, $fn=32);
}

module alignment_pocket() {
  cylinder(r=pin_r + pin_clear, h=pin_h + 0.5, $fn=32);
}

// Part A: has pins
difference() {
  cube([50, 40, 5]);
  // holes for other features
}
translate([10, 10, 5]) alignment_pin();
translate([40, 30, 5]) alignment_pin();

// Part B: has pockets (shown offset for clarity)
translate([60, 0, 0])
  difference() {
    cube([50, 40, 5]);
    translate([10, 10, -0.001]) alignment_pocket();
    translate([40, 30, -0.001]) alignment_pocket();
  }
", Header 3 ("quiz--lesson-3dmake8-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.8 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What clearance range (in mm) produces a slip-fit between two FDM-printed mating parts?"]], [Plain [Str "What is a press-fit, and when would you use one?"]], [Plain [Str "What is a snap-fit clip, and what material property makes it work?"]], [Plain [Str "What is the purpose of a retention barb on a snap-fit beam?"]], [Plain [Str "What is a heat-set threaded insert, and why is it preferred over a tapped plastic hole?"]], [Plain [Str "What is the ", Code ("", [], []) "beam_t / beam_l", Str " rule for PLA snap-fit beams?"]], [Plain [Str "What is a chamfer, and how does it differ from a fillet?"]], [Plain [Str "What does a dowel pin achieve in an assembly design?"]], [Plain [Str "True or False: a thicker snap-fit beam is easier to deflect than a thinner one."]], [Plain [Str "What happens if you design a stacking lip without clearance (clearance = 0)?"]], [Plain [Str "Explain tolerance stack-up: if three parts each have ±0.2 mm dimensional tolerance, what is the worst-case total variation when they are assembled in a chain?"]], [Plain [Str "What is the typical outer diameter of an M3 brass heat-set insert, and what printed hole diameter would you use for a press-in fit?"]], [Plain [Str "Explain the difference between a cropped top edge and a true 45-degree chamfer. Why does the distinction matter for printed aesthetics?"]], [Plain [Str "Describe how you would design and test a tolerance set for a new printer. What measurements would you take and how would you choose the final clearance value?"]], [Plain [Str "For a snap-fit clip made of PLA with ", Code ("", [], []) "beam_l = 15 mm", Str ", what is the maximum ", Code ("", [], []) "beam_t", Str " that satisfies the flexibility rule? Show your calculation."]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Print and test all three."]], [Plain [Str "Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter."]], [Plain [Str "Design a press-fit peg and socket system; print 5 pairs with clearances from 0.0–0.4 mm and document which clearance gives the best press-fit for your printer."]], [Plain [Str "Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (pegboard hole pitch = 25.4 mm, hole diameter = 6.35 mm)."]], [Plain [Str "Build a two-part enclosure with threaded insert pockets for M3 screws; test with real hardware."]], [Plain [Str "Design a multi-part snap-together dice tray: the tray snaps into a carrying case lid."]], [Plain [Str "Create an alignment jig using dowel pins and pockets; use it to verify your printer's dimensional accuracy."]], [Plain [Str "Build a cable management clip with a snap-fit that opens and closes for easy cable insertion/removal."]], [Plain [Str "Design a telescoping tube using a slip-fit: an inner cylinder slides freely inside an outer cylinder."]], [Plain [Str "Create a \"bayonet mount\" that locks with a 45-degree twist."]], [Plain [Str "Design a spring-loaded mechanism using only FDM-printed parts; document the material choice and how the spring geometry provides the spring force."]], [Plain [Str "Build a parametric drawer divider system: interlocking slotted dividers that can be arranged in any grid pattern."]], [Plain [Str "Design a self-locking dovetail joint that slides together in one direction and cannot be pulled apart."]], [Plain [Str "Create a complete assembly drawing for a two-part design: an exploded OpenSCAD render showing each component with a ", Code ("", [], []) "translate()", Str " offset, plus a tolerance table."]], [Plain [Str "Conduct a failure mode analysis for a snap-fit clip: list five ways the clip could fail during assembly or use, assign a likelihood and severity to each, and propose a design change to mitigate the top two risks."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Assemblies and interlocking features"]], [Plain [Link ("", [], []) [Str "Measurement Worksheet"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_8/../../assets/3dMake_Foundation/measurement_worksheet.md", ""), Str " — Tolerance testing worksheet"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]