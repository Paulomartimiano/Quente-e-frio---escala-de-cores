let x;
let y;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(80);
  x = x + random(-5, 5);
  x = constrain(x, 0, 400);
  y = y + random(-5, 5);
  y = constrain(y, 0, 400);
  
  let distancia
  
  distancia = dist(mouseX, mouseY,x, y);
  a = distancia/450
  cor = color(240*a, 255, 255);
  fill(cor);
  circle(mouseX, mouseY, distancia);
  

  if(distancia < 10) {
    background("yellow");
    fill('red');
    textFont('Verdana');
    textSize(70);
    stroke('white');
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    text('Encontrei',200,200);
    noLoop();
  }
  //console.log(250*a);
}