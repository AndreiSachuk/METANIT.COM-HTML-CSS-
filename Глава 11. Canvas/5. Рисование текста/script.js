var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");
context.font = "22px Verdana";
context.fillText("Hello HTML5!", 20, 200);

context.font = "30px Verdana";
context.strokeStyle = "red";
context.strokeText("Hello HTML5!", 20, 250);

context.font = "30px Verdana";
context.strokeStyle = "red";
             
context.lineWidth = 2;
context.strokeText("Hello HTML5!", 20, 300);

context.font = "22px Verdana";
context.textAlign = "right";
context.fillText("Right Text", 120, 30);
context.textAlign = "left";
context.fillText("Left Text", 120, 60);
context.textAlign = "center";
context.fillText("Center Text", 120, 90);
context.textAlign = "start";
context.fillText("Start Text", 120, 120);
context.textAlign = "end";
context.fillText("End Text", 120, 150);

