var popup_btn = document.getElementById("popup");
var custom_btn = document.getElementById("custom");

popup_btn.onclick = function () {
    alert("You made this button! Be Proud!");
}

custom_btn.onclick = function () {
    var main_title = document.getElementById("main-title");
    // variables made inside of functions can only be used in that function.
    // these are called local variables.
    if (main_title.style.color == "hotpink") {
        main_title.style.color = "#333";       
    } else {
        main_title.style.color = "hotpink";   
    }
}
//----------------------------------------------------------------------------

// Canvas

// two var must have when drawing on Canvas.
var dino_canvas = document.getElementById("dino");
var stage = dino_canvas.getContext("2d");

// note: main.js is running in html which is in the root.
var dino_r = new Image();
dino_r.src = "images/dino_right.png";

var dino_l = new Image();
dino_l.src = "images/dino_left.png";

var background = new Image();
background.src = "images/Arenal-Volcano.jpg";

// At this point javascript has loaded the images in the browser cache.
// But we still need to draw them on the canvas.

var position = 100;
dino_r.onload = function() {
    // drawImage draws an imgae on the canvas.
    // drawImage(img object, x_pos, y_pos, width, height);
    stage.drawImage(background, 0, 0);
    stage.drawImage(dino_r, position, 400);
}

document.onkeydown = function (key) {
//  alert(key.keyCode); - will give you the key code.
    if (key.keyCode == 37) {
        // code runs if 37 is pressed
        dino_canvas.width = dino_canvas.width;
        position = position - 20; // position -= 20
        stage.drawImage(background, 0, 0);
        stage.drawImage(dino_l, position, 400);
    } else if (key.keyCode == 39) {
        // code runs if 39 is pressed
        dino_canvas.width = dino_canvas.width;
        position += 20;
        stage.drawImage(background, 0, 0);
        stage.drawImage(dino_r, position, 400);      
    }
}













