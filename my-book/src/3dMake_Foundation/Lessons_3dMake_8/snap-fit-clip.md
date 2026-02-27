# Snap-Fit Clip - Extension Project  {#3dmake_foundation_lessons_3dmake_8-snap_fit_clip}

Estimated time: 3-6 hours

## Learning Objectives

By completing this project, you will:
- Design flexible components that must bend without failing
- Conduct tolerance and material testing systematically
- Understand the relationship between geometry, material properties, and functional performance
- Document design iterations and trade-offs

## Objective
- Design a snap-fit clip with customizable clip thickness and spacing to determine optimal tolerances for your printer and material.

## Tasks
1. Design a parametric snap-fit test piece with adjustable clip thickness and spacing.
2. Print test pieces for three tolerance values (adjust clip geometry for each variant).
3. Test each clip for snap-fit behavior and document success/failure modes.
4. Refine dimensions based on testing results and create final clip design.

## Deliverable
- Source `.scad` file with parametric clip modules
- Test print results and tolerance documentation
- Final clip design with recommended print settings

## Starter files
- [starter.scad](../../assets/Extension_Projects/Snap_Fit_Clip/starter.scad) - minimal snap-fit test scaffold.

## Assessment Questions (Optional)
1. What clip thickness and spacing values resulted in a reliable snap-fit for your printer?
2. How did you balance flexibility (easy to snap/unsnap) with durability (no premature failure)?
3. What would you change in the design if this clip needed to work reliably 1,000+ times?


## Starter Code

Use this stackable bins example as your starting point:

```openscad
// Stackable Storage Bins - Advanced Example
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
```