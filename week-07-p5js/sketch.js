class Particle {

  constructor(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1,8);
       this.xSpeed = random(-2,2);
       this.ySpeed = random(-1,1.5);
}
joinParticles(particles) {
  particles.forEach(element =>{
    let dis = dist(this.x,this.y,element.x,element.y);
    if(dis<85) {
      stroke('rgba(255,255,255,0.04)');
      line(this.x,this.y,element.x,element.y);
    }
  });
}
}

createParticles() {
  noStroke();
  fill('rgba(200,169,169,0.5)');
  triangles(this.x,this.y,this.r);
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
