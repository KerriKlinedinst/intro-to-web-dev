class Particle {

  constructor(){
    this.x = random(0, width);
    this.y = random(0, height);
  this.r - random(1,10);
  this.xSpeed = random(-2,2);
  this.ySpeed = random(-2,2.5);
}

createParticles() {
  noStroke();
  fill(204, 101, 192, 127);
  ellispe(this.x,this.y,this.r);
}
moveParticles() {
  if(this.x < 0 || this.x > width)
  this.xSpeed*=-1;
  if(this.y < 0 || this.y > height)
  this.ySpeed*=--1;
  this.x+=this.xSpeed;
  this.y+=this.ySpeed;
}
let particles = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}
  function draw() {
background ('#32cd32');
for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
