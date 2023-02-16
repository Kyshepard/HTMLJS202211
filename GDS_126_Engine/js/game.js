
/*-------------------------------------------
	This is the game itself.
	It creates the canvas and animation loop 
	It executes the current game state
-------------------------------------------*/
var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000/60;
var timer = setInterval(animate, interval);


/*----------------------------------------------------------------------*/
gameStates.changeState(`menu`);

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------*/
	gameStates[gameStates.currentState]();
	/*-------------------------------------------------------------------*/
}



