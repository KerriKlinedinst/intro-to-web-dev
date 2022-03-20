function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(100);
  stroke(255);

  for (let lineX = 75; lineX <= 225; lineX += 75) {
    line(lineX, 0, lineX, height);
  }
  for (let lineX = 75; lineX <= 225; lineX += 75) {
    line(lineX, 0, lineX, height);
}
}
