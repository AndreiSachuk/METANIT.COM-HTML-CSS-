var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d"),
    gradient = context.createLinearGradient(50, 30, 150, 150);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "white");
context.fillStyle = gradient;
context.fillRect(50, 30, 150, 150);
context.strokeRect(50, 30, 150, 150);

canvas = document.getElementById("myCanvas2"),
context = canvas.getContext("2d"),
gradient = context.createRadialGradient(120, 100, 100, 120, 100, 30);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "white");
context.fillStyle = gradient;
context.fillRect(50, 30, 150, 150);
context.strokeRect(50, 30, 150, 150);