
// 01cubekeycap.scad
// Beginner: A simple 20mm cube keycap with an embossed letter
// Parameters
keysize = 18;     // mm
keyheight = 12;   // mm
wall = 1.2;        // mm
letter = "R";      // change to your preferred letter
lettersize = 10;  // mm
letterraise = 0.8;// mm

module shell(){
  difference(){
    cube([keysize, keysize, keyheight], center=false);
    translate([wall, wall, wall])
      cube([keysize-2*wall, keysize-2*wall, keyheight], center=false);
  }
}

module emboss(){
  // Emboss letter on top face
  translate([keysize/2, keysize/2, keyheight-0.01])
    linearextrude(height=letterraise)
      text(letter, size=lettersize, halign="center", valign="center");
}

union(){
  shell();
  emboss();
}
