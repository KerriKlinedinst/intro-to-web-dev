function setup() {
  createCanvas(300, 300);
  background(200);

  // Set colors
   fill(204, 101, 192, 127);
   stroke(127, 63, 120);

// simple flower design
translate(580, 200);
noStroke();
for (let i = 0; i < 10; i ++) {
ellispe(0, 30, 20, 80);
rotate(PI/5);
}
}
