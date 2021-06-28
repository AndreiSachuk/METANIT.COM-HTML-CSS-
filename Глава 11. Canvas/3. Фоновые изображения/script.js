var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");

var img = new Image();
img.src = "https://losko.ru/wp-content/uploads/2019/11/7702b9faef4382f33090b0b87b2c0ad0-1.jpg";
img.onload = function () {

    var pattern = context.createPattern(img, "no-repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 300, 200);
    context.strokeRect(0, 0, 300, 200);
};