var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");
                  
context.fillStyle = "blue";
context.fillRect(50, 50, 100, 100);
             
context.translate(100, 50); // смещение на 100 пикселей вправо и 50px вниз
 
context.globalAlpha = 0.5;
context.fillStyle = "red";
context.fillRect(50, 50, 100, 100);

context.resetTransform();
context.fillStyle = "blue";
context.fillRect(150, 150, 200, 200);
             
context.rotate(.52);    // поворот на 0.52 радиан или 30 градусов
 
context.globalAlpha = 0.5;
context.fillStyle = "red";
context.fillRect(150, 150, 200, 200);

context.resetTransform();

context.fillStyle = "blue";
context.fillRect(230, 230, 300, 300);
             
context.scale(1.5, 1.3); // растяжение по ширине в 1.5 раза и сжатие по высоте в 1.3 раза
 
context.globalAlpha = 0.5;
context.fillStyle = "red";
context.fillRect(250, 230, 300, 300);

context.resetTransform();

var k = 0;
for (var x = 0; x < 30; x++) {
    k = Math.floor(255 / 34 * x);
    context.fillStyle = "rgb(" + k + "," + k + "," + k + ")";
    context.fillRect(350, 350, 500, 400);
    context.setTransform(1, 0, 0, 1, x, x);
}