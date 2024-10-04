function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(24);
  background(0);
  rectMode(CENTER);
}


let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
let isCircle = false;
let color = "blue";

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - 20, y + 40);
  ctx.lineTo(x + 20, y + 40);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isCircle) {
      drawCircle();
  } else {
      drawTriangle();

}

x += dx;
y += dy;

if (x + 20 > canvas.width || x - 20 < 0) {
  dx = -dx;
  isCircle = !isCircle; // Cambia de forma
  color = color === "blue" ? "red" : "blue"; // Cambia de color
}

if (y + 20 > canvas.height || y - 40 < 0) {
  dy = -dy;
  isCircle = !isCircle; // Cambia de forma
  color = color === "blue" ? "red" : "blue"; // Cambia de color
}
