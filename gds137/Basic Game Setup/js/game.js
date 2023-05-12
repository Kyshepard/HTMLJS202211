
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

/*------------Use this if you want to implement States---------------
var currentState = "";
var states = [];

states[""] = function()
{

}
----------------------------------------------------------------------*/

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------
	//states[currentState]();
	-------------------------------------------------------------------*/
}



