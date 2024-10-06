let yPos;
let speed;
let isTransformed;
let shapeColor;
let xPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  yPos = height / 2;
  xPos = width / 2;
  speed = 0;
  isTransformed = false;
  shapeColor = "lightblue";
  background(20, 24, 82);
}

function draw() {
  background(20, 24, 82);

  // Dibuja el círculo o triángulo
  fill(shapeColor);
  if (isTransformed) {
    drawTriangle();
  } else {
    drawCircle();
  }

  // Movimiento del círculo/triángulo
  yPos += speed;

  // Condición para el rebote en el suelo
  if (yPos > height - 50) {
    speed = -speed;
    transformShape();
  }

  // Condición para el rebote en la parte superior
  if (yPos < 50) {
    speed = -speed;
    resetShape();
  }
}

// Función para dibujar el círculo
function drawCircle() {
  ellipse(xPos, yPos, 100, 100);
}

// Función para dibujar el triángulo
function drawTriangle() {
  stroke("purple");
  strokeWeight(4);
  fill("purple");
  triangle(xPos, yPos - 50, xPos - 50, yPos + 50, xPos + 50, yPos + 50);
}

// Función para cambiar la forma a triángulo y el color a morado
function transformShape() {
  isTransformed = true;
  shapeColor = "purple";
}

// Función para volver a ser un círculo celeste
function resetShape() {
  isTransformed = false;
  shapeColor = "lightblue";
}

// clic del mouse
function mousePressed() {
  speed = 5;
}
