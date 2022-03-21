function setup() {
  createCanvas(300, 300);
background (128, 128);

  // colors
fill(204, 101, 192, 127);
stroke(127, 63, 120);

// flower
 translate(200, 200);
 noStroke();
 for (let i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 40);
   rotate(PI/5);

   let xpos, ypos; // Starting position

   let xspeed = 3.0; // Speed
   let yspeed = 2.8; 

   let xdirection = 1; // Left or Right
   let ydirection = 1; // Top to Bottom

   if (xpos > width - rad || xpos < rad) {
     xdirection *= -1;
   }
   if (ypos > height - rad || ypos < rad) {
     ydirection *= -1;
   }
