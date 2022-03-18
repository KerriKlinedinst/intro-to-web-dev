function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(600);
  circle(200, 200, 300);
  stroke(255);

  for (let lineX= 75; lineX <= 225; lineX += 75){
line(lineX, 0, lineX, height);
  }
}
