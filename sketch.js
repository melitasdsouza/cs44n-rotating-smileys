let angle = 0;
let hueValue = 0;
let faceColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("OldLace");
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  faceColor = randomColor();
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function draw() {
  let cols = 9;
  let rows = 4;
  let spacingX = 158;
  let spacingY = 165;
  let startX = 100;
  let startY = 100;
  let radius = 120;

  hueValue = (hueValue + 1) % 360;
  let baseHue = frameCount % 360;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = startX + i * spacingX;
      const y = startY + j * spacingY;
      const hue = (baseHue + i * 30 + j * 30) % 360;
      const faceCol = color(hue, 100, 100);

      let direction = ((i + j) % 2 === 0) ? 1 : -1;
      let featureAngle = (angle + i * 5 + j * 5) * direction;

      push();
      translate(x, y);
      drawSmiley(0, 0, radius, faceCol, featureAngle);
      pop();
    }
  }

  angle += 1;
}

function drawSmiley(x, y, radius, color, featureAngle) {
  stroke("Black");
  strokeWeight(4);
  fill(color);
  circle(x, y, radius);

  push();
  translate(x, y);
  rotate(featureAngle);

  fill("Black");
  circle(-radius / 4, -radius / 10, 10);
  circle( radius / 4, -radius / 10, 10);

  noFill();
  stroke("black");
  strokeWeight(5);
  arc(0, -radius / 10, radius * 0.8, radius * 0.8, 30, 162, OPEN);

  pop();
}
