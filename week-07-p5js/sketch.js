let img;

function setup() {
  createCanvas(300, 300);
  img = loadImage('IMG_1603.jpeg');
}

function draw() {
  image(img, 0, 0);
}
