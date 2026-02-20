
// 01_cube_keycap.scad
// Beginner: A simple 20mm cube keycap with an embossed letter
// Parameters
key_size = 18;     // mm
key_height = 12;   // mm
wall = 1.2;        // mm
letter = "R";      // change to your preferred letter
letter_size = 10;  // mm
letter_raise = 0.8;// mm

module shell(){
  difference(){
    cube([key_size, key_size, key_height], center=false);
    translate([wall, wall, wall])
      cube([key_size-2*wall, key_size-2*wall, key_height], center=false);
  }
}

module emboss(){
  // Emboss letter on top face
  translate([key_size/2, key_size/2, key_height-0.01])
    linear_extrude(height=letter_raise)
      text(letter, size=letter_size, halign="center", valign="center");
}

union(){
  shell();
  emboss();
}
