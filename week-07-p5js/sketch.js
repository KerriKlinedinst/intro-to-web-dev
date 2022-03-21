function setup() {
  createCanvas(300, 300);
backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));

  // colors
fill(204, 101, 192, 127);
stroke(127, 63, 120);

// flower
 translate(200, 200);
 noStroke();
 for (let i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 40);
   rotate(PI/5);

   }
}
