/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:1024}).makeSprite(buttonData);
startButton.img.src="images/Start_Button.png"
startButton.y = 420
//startButton.hitBoxWidth=80
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Main_Menu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`bg`,0,true);
		}

		//Hover Effect Graffic
		startButton.changeState(`hover`)
	}
	else
	{
		//Default Button Graphic
		startButton.changeState(`idle`)
	}
	
	menuBackground.drawStaticImage();
	startButton.drawSprite()
}
	
	
