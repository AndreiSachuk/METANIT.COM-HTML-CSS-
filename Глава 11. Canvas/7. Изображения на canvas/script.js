var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");
var video = document.getElementById("myVideo");
document.getElementById("snap").onclick = function (e) {
    context.drawImage(video, 0, 0, 300, 200);
}