var canvas = document.getElementById("myCanvas"), 
                context = canvas.getContext("2d");
                 
            context.font="16px Verdana";
            context.fillStyle = "#222";
            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowBlur = 3;
            context.shadowColor = "#AAA";
            context.fillText("Тени в HTML5", 80, 30);