var circleX = 0;
var circleY = 0;
var triangleX = 0;
function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(130, 200, 130);
  fill(150, 100, 2);
  ellipse(circleX, circleY, 100, 100);
  fill(100, 255, 100);
  triangle(triangleX, 20, 20);
  
  circleX = circleX + 1;
  circleY = circleY + 2;
  triangleX = triangleX +1;
}