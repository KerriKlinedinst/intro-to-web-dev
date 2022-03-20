function setup() {
  createCanvas(300, 300);
function draw() {
  background(100);
  stroke(255);
}

// simple flower design
translate(580, 200);
noStroke();
for (let i = 0; i < 10; i ++) {
ellispe(0, 30, 20, 80);
rotate(PI/5);
}
}
