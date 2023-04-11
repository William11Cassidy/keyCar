canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width=75
greencar_height=100
greencar_x=5
greencar_y=225

function add() {
	bgTag = new Image()
    bgTag.onload = uploadBackground
    bgTag.src = background_image

	gcTag = new Image()
    gcTag.onload = uploadgreencar
    gcTag.src = greencar_image

}

function uploadBackground() {
	ctx.drawImage(bgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(gcTag, greencar_x, greencar_y, greencar_width,greencar_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}


function left() {

    if (greencar_x >= 0) {
        greencar_x -= 10
        uploadBackground()
        uploadgreencar()
    }
}

function right() {
    if (greencar_x <= 700) {
        greencar_x += 10
        uploadBackground()
        uploadgreencar()
    }
}

function up() {

    if (greencar_y >= 0) {
        greencar_y -= 10
        uploadBackground()
        uploadgreencar()
    }
}

function down() {
    if (greencar_y <= 250) {
        greencar_y += 10
        uploadBackground()
        uploadgreencar()

    }

}
