let img;

function setup() {
  createCanvas(600, 600);
  img = loadImage('IMG_1603.jpeg');
}

function draw() {
  image(img, 0, 0);
}
