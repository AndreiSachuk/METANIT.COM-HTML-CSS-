var canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(160, 130, 100, 0, 2 * Math.PI);
    ctx.fill();

    // рот
    ctx.beginPath();
    ctx.moveTo(100, 160);
    ctx.quadraticCurveTo(160, 250, 220, 160);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();

    // зубы
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(140, 160, 15, 15);
    ctx.fillRect(170, 160, 15, 15);

    //глаза
    ctx.beginPath();
    ctx.arc(130, 90, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#333333";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(190, 90, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#333333";
    ctx.fill();
    ctx.closePath();

}