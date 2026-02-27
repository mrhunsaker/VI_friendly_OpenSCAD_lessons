# Snap-Fit Clip Project {#3dmake_foundation_lessons_3dmake_8-snap-fit-clip}
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