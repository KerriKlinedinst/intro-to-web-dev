function setup() {
  createCanvas(300, 300);
  background(200, 200);

  // colors
fill(204, 101, 192, 127);
stroke(127, 63, 120);

// flower
 translate(580, 200);
 noStroke();
 for (let i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
 }
}
