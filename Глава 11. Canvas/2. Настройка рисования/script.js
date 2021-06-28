var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");

context.strokeStyle = "red";

context.setLineDash([15, 5]);
context.strokeRect(40, 40, 100, 100);

context.strokeStyle = "blue";
context.setLineDash([2, 5, 6]);
context.strokeRect(180, 40, 100, 100);

context.strokeStyle = "green";
context.setLineDash([2]);
context.strokeRect(320, 40, 100, 100);

canvas = document.getElementById("myCanvas1"),
context = canvas.getContext("2d");

context.strokeStyle = "red";
context.fillStyle = "blue";

context.lineWidth = 15;
context.lineJoin = "miter";
context.strokeRect(40, 40, 100, 100);
context.lineJoin = "bevel";
context.strokeRect(180, 40, 100, 100);
context.lineJoin = "round";
context.strokeRect(310, 40, 100, 100);

canvas = document.getElementById("myCanvas2"), 
context = canvas.getContext("2d");
                  
context.fillStyle = "blue";
context.fillRect(50, 50, 100, 100);
             
context.globalAlpha = 0.5;
context.fillStyle = "red";
 context.fillRect(100, 100, 100, 100);