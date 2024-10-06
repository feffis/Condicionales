# Condicionales

Este es un proyecto para aprender condicionales.

Adicionalmente hemos aprendico a utilizar el cdn de p5,js incluyendo el siguiente codigo`<head>` del archivo index.html de la siguiente manera:

<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>

### CREAR VARIABLES

1. yPos: posición vertical del círculo/triángulo.
2. speed: controla la velocidad del movimiento.
3. isTransformed: estado que indica si se ha transformado en triángulo.
4. shapeColor: color actual del círculo/triángulo.
5. xPos: posición horizontal, centrada en el canvas.

### CREAR LAS FUNCIONES DEL DIBUJO

1. drawCircle(): dibuja un círculo.
2. drawTriangle(): dibuja un triángulo con un trazo morado y relleno morado.

### CREAR CONDICONALES

1. Cuando yPos supera el límite inferior, se invierte la dirección del movimiento (rebote) y se transforma el círculo en triángulo y cambia el color a morado.
2. Si yPos es menor que 50, se invierte la dirección nuevamente y se restablece el círculo.

### POR ULTIMO LA INTERACCIÓN

1. Al hacer clic en el canvas, se inicia el movimiento hacia abajo.

Al hacer clic, un círculo caerá, rebotará en el suelo, y al subir se transformará en un triángulo morado. Luego cambiará de nuevo a un círculo celeste al caer.
