amplitude  = 860;
angle = 0.0
function setup() {
  createCanvas(12000, 600);
}

function draw() {
  background(220);
  translate(width/2,height/2);
  
  x = amplitude * sin(angle);
  fill(128);
  stroke(0)
  line(0,0,x,0)
  ellipse(x,0,36,36)
  
  angle += 0.02;
}