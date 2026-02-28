[Header 3 ("3dmake_foundation_lessons_3dmake_8-snap_fit_clip", [], []) [Str "Snap-Fit Clip - Extension Project"], Para [Str "Estimated time: 3-6 hours"], Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By completing this project, you will:"], BulletList [[Plain [Str "Design flexible components that must bend without failing"]], [Plain [Str "Conduct tolerance and material testing systematically"]], [Plain [Str "Understand the relationship between geometry, material properties, and functional performance"]], [Plain [Str "Document design iterations and trade-offs"]]], Header 4 ("objective", ["unnumbered", "unlisted"], []) [Str "Objective"], BulletList [[Plain [Str "Design a snap-fit clip with customizable clip thickness and spacing to determine optimal tolerances for your printer and material."]]], Header 4 ("tasks", ["unnumbered", "unlisted"], []) [Str "Tasks"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Design a parametric snap-fit test piece with adjustable clip thickness and spacing."]], [Plain [Str "Print test pieces for three tolerance values (adjust clip geometry for each variant)."]], [Plain [Str "Test each clip for snap-fit behavior and document success/failure modes."]], [Plain [Str "Refine dimensions based on testing results and create final clip design."]]], Header 4 ("deliverable", ["unnumbered", "unlisted"], []) [Str "Deliverable"], BulletList [[Plain [Str "Source ", Code ("", [], []) ".scad", Str " file with parametric clip modules"]], [Plain [Str "Test print results and tolerance documentation"]], [Plain [Str "Final clip design with recommended print settings"]]], Header 4 ("starter-files", ["unnumbered", "unlisted"], []) [Str "Starter files"], BulletList [[Plain [Link ("", [], []) [Str "starter.scad"] ("docs/pandoc/latex/src/assets/Extension_Projects/Snap_Fit_Clip/starter.scad", ""), Str " - minimal snap-fit test scaffold."]]], Header 4 ("assessment-questions-optional", ["unnumbered", "unlisted"], []) [Str "Assessment Questions (Optional)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What clip thickness and spacing values resulted in a reliable snap-fit for your printer?"]], [Plain [Str "How did you balance flexibility (easy to snap/unsnap) with durability (no premature failure)?"]], [Plain [Str "What would you change in the design if this clip needed to work reliably 1,000+ times?"]]], Header 4 ("starter-code", ["unnumbered", "unlisted"], []) [Str "Starter Code"], Para [Str "Use this stackable bins example as your starting point:"], CodeBlock ("", ["openscad"], []) "// Stackable Storage Bins - Advanced Example
// Parameters
binw = 80;      // width
bind = 120;     // depth
binh = 60;      // height
wall = 2;        // wall thickness
rim = 3;         // interlock rim height
chamfer = 2;
stackclear = 0.6; // clearance between stacks
module outer(){
  cube([binw, bind, binh]);
}
module inner(){
  translate([wall, wall, wall])
    cube([binw-2*wall, bind-2*wall, binh-2*wall]);
}
module body(){
  difference(){ outer(); inner(); }
}
module rimouter(){
  translate([0,0,binh]) cube([binw, bind, rim]);
}
module riminner(){
  translate([wall+stackclear, wall+stackclear, binh])
    cube([binw-2*(wall+stackclear), bind-2*(wall+stackclear), rim]);
}
module chamferedges(){
  // Simple top edge chamfer via difference
  difference(){
    children();
    translate([-1,-1,binh-chamfer]) cube([binw+2, bind+2, chamfer+2]);
  }
}
union(){
  chamferedges(){ body(); }
  rimouter();
  difference(){ rimouter(); riminner(); }
}
"]