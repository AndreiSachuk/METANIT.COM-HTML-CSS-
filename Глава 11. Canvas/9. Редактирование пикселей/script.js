var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");
                 
var img = new Image();
img.src = "myPhoto.png";
img.onload = function() {
                 
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0,0, img.width, img.height);
    var newImageData = context.createImageData(imageData);
                 
    for (var i = 0; i < newImageData.data.length; i++) {
                 
        newImageData.data[i] = imageData.data[i];
        // если это альфа-компонента
        if( (i+1)%4===0){
                         
            newImageData.data[i] = 120;
        }
    }
    context.putImageData(newImageData, img.width + 10, 0);
};