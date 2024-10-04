function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(24);
  background(0);
  rectMode(CENTER);
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
}

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
let isCircle = false;
let color = "blue";

function createGradient() {
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(255, 0, 150, 1)");
  gradient.addColorStop(1, "rgba(0, 150, 255, 1)");
  return gradient;
}

function drawTriangle() {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 20, y + 40);
  ctx.lineTo(x + 20, y + 40);
  ctx.closePath();
  ctx.fillStyle = createGradient();
  ctx.fill();
  ctx.restore();
}

function drawCircle() {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = createGradient();
  ctx.fill();
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isCircle) {
    drawCircle();
  } else {
    drawTriangle();
  }

  // Movimiento de la forma
  x += dx;
  y += dy;

  if (x + 20 > canvas.width || x - 20 < 0) {
    dx = -dx;
    isCircle = !isCircle;
  }

  if (y + 20 > canvas.height || y - 40 < 0) {
    dy = -dy;
    isCircle = !isCircle;
  }
}

setInterval(draw, 10);
