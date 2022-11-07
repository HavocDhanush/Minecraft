var canvas = new fabric.Canvas('myCanvas');

block_img_height = 30;
block_img_width = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update () {
    fabric.Image.fromURL("player.png" , function(Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top: player_y,
        left: player_x
        
    });
    canvas.add(player_object);
});
}

function new_Image (get_Image) {

    fabric.Image.fromURL(get_Image , function(Img) {
     block_img_object = Img;
     block_img_object.scaleToWidth(block_img_width);
     block_img_object.scaleToHeight(block_img_height);
     block_img_object.set({
        top: player_y,
        left: player_x
     });

     canvas.add(block_img_object);
    });
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("shift and p pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_height").innerHTML = block_img_height;
        document.getElementById("current_width").innerHTML = block_img_width;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("shift and m pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_height").innerHTML = block_img_height;
        document.getElementById("current_width").innerHTML = block_img_width;
    }

    if (keyPressed == '37') {
        console.log("left");
        left();
    }

    if (keyPressed == '38') {
        console.log("up");
        up();
    }

    if (keyPressed == '39') {
        console.log("right");
        right();
    }

    if (keyPressed == '40') {
        console.log("down");
        down();
    }

    if (keyPressed == '87') {
        console.log("w");
        new_Image('wall.jpg');
    }

    if (keyPressed == '71') {
        console.log("g");
        new_Image('ground.png');
    }

    if (keyPressed == '76') {
        console.log("l");
        new_Image('light_green.png');
    }

    if (keyPressed == '84') {
        console.log("t");
        new_Image('trunk.jpg');
    }

    if (keyPressed == '82') {
        console.log("r");
        new_Image('roof.jpg');
    }
    
    if (keyPressed == '89') {
        console.log("y");
        new_Image('yellow_wall.png');
    }

    if (keyPressed == '68') {
        console.log("d");
        new_Image('dark_green.png');
    }

    if (keyPressed == '85') {
        console.log("u");
        new_Image('unique.png');
    }

    if (keyPressed == '67') {
        console.log("c");
        new_Image('cloud.jpg');
    }
}

function up() {
    if (player_y>=0) {
        player_y = player_y - block_img_height;
        console.log("block_img_height ="+ block_img_height);
        console.log("When the Up arrow key is pressed, x ="+ player_x+ " y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y<=500) {
        player_y = player_y + block_img_height;
        console.log("block_img_height ="+ block_img_height);
        console.log("When the Down arrow key is pressed, x="+ player_x+ " y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x>=0) {
        player_x = player_x - block_img_width;
        console.log("block_img_width ="+ block_img_width);
        console.log("When the Left arrow key is pressed, x="+ player_x+ " y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x<=900) {
        player_x = player_x + block_img_width;
        console.log("block_img_width ="+ block_img_width);
        console.log("When the Right arrow key is pressed, x="+ player_x+ " y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}