var fr
var flag
var accuracy
var h

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100)
  ellipseMode(RADIUS)
  angleMode(DEGREES)
  //frameRate(0.5)
  accuracy = 100
  fr = 1.0
  flag = -1
  h = 40
}

function draw() {
  //background(220);
  fr = 0.1*flag + fr
  
  if (fr <= -1) {
    fr = -0.9;
    flag = 1
  }
  if (fr >= 1) {
    fr = 0.9;
    flag = -1
  }
  

  h = (h+3)%360
  for (let r = width/4; r > 0; r = r-2) {
    let b = (sin(r*3.6))*50; 
    if (fr%2 == 1) {
      h = (h+1)%360
    }
    b *= fr
    b += 90
    //print(b)
    noStroke()
    fill(h, 50, b, 1)
    ellipse(width/2, height/2, r, r)    
  }
  
}
