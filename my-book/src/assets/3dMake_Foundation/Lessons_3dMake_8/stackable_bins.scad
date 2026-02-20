
// 03_stackable_bins.scad
// Advanced: Stackable storage bins
// Parameters
bin_w = 80;      // width
bin_d = 120;     // depth
bin_h = 60;      // height
wall = 2;        // wall thickness
rim = 3;         // interlock rim height
chamfer = 2;
stack_clear = 0.6; // clearance between stacks

module outer(){
  cube([bin_w, bin_d, bin_h]);
}

module inner(){
  translate([wall, wall, wall])
    cube([bin_w-2*wall, bin_d-2*wall, bin_h-2*wall]);
}

module body(){
  difference(){ outer(); inner(); }
}

module rim_outer(){
  translate([0,0,bin_h]) cube([bin_w, bin_d, rim]);
}

module rim_inner(){
  translate([wall+stack_clear, wall+stack_clear, bin_h])
    cube([bin_w-2*(wall+stack_clear), bin_d-2*(wall+stack_clear), rim]);
}

module chamfer_edges(){
  // Simple top edge chamfer via difference
  difference(){
    children();
    translate([-1,-1,bin_h-chamfer]) cube([bin_w+2, bin_d+2, chamfer+2]);
  }
}

union(){
  chamfer_edges(){ body(); }
  rim_outer();
  difference(){ rim_outer(); rim_inner(); }
}
