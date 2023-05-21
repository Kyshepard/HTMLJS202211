	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will see a "State Machine" in action--------------------------------------
	//---------------------A "Finite State Machine" is a design pattern that allows us--------------------------------------
	//---------------------to switch between different functionality easily-------------------------------------------------
	//----------------------------------------------------------------------------------------------------------------------
	//---------------------Read the comments below to complete this assignment----------------------------------------------
	//---------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv----------------------------------------------
	//----------------------------------------------------------------------------------------------------------------------
	
var canvas;
var context;
var timer;
var interval;
var player;
canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvas.style.backgroundColor = "black";
	
//This is used to determine which state is being called
var currentState = 5;
//This will be an array of functions that can be called using an index
var states =[];


var players =[
				new GameObject({x:-50, y:200, width:50, height:50, color:"pink", vx:5}),
				new GameObject({x:-150, y:200, width:50, height:50, color:"yellow", vx:5})
			]
	
	
	interval = 1000/60;
	timer = setInterval(animate, interval);
	
	function animate()
	{
	
	context.clearRect(0,0,canvas.width, canvas.height);
	
	//This line runs a function in the states array using the "currentState" variable as its index.
	//To change the state I can simply assign a new value to the "currentState" variable
	//This allows me to change everything that happens in the animate function at will. It's a very powerful concept.
	states[currentState]();
	
	}

	
//Each index in the states array stores a function. These functions are being called in the animate function at different times. 
//Notice how each state has a condition that changes the current state.
//Once the currentState changes the function will no longer get called.
		
//This state moves the avatars right		
states[0] = function()
{

	for(var i = 0; i < players.length; i++)
	{
		players[i].x += players[i].vx;
		players[i].drawRect();
		
	}
	
	//if the avatars move offscreen I change the current state!
	//(I also change their positions and velocities)
	if(players[1].x > canvas.width + 50)
		{
			players[0].vx = -5;
			players[0].y = canvas.height - 200;
			players[1].vx = -5;
			players[1].y = canvas.height - 200;
			currentState = 1;
		}
	
}


//This state moves the avatars left
states[1] = function()
{
	for(var i = 0; i < players.length; i++)
	{
		players[i].x += players[i].vx;
		players[i].drawRect();	
	}
	if(players[0].x < -50)
		{
			
			players[0].vx = -5;
			players[0].x = canvas.width + 50;
			players[0].y = canvas.height/2;
			players[1].vx = 5;
			players[1].x = -50;
			players[1].y = canvas.height/2;
			currentState = 2;
		}
}

//This state makes them meet in the middle
states[2] = function()
{
	for(var i = 0; i < players.length; i++)
	{
		players[i].x += players[i].vx;
		players[i].drawRect();	
	}
	if(players[0].hitTestObject(players[1]))
	{
		currentState = 3;
	}
}

//This state draws a heart above them
states[3] = function()
{
	for(var i = 0; i < players.length; i++)
	{
		players[i].drawRect();	
		
		
	//Draws Heart
		context.save();
		context.translate(canvas.width/2, canvas.height/2 - players[0].height - 50);
		context.beginPath();
		context.fillStyle = "red";
		context.moveTo(0,-15);
		context.quadraticCurveTo(35,-50,40,-15);
		context.quadraticCurveTo(40,15,0,35);
		context.quadraticCurveTo(-35,15,-40,-15);
		context.quadraticCurveTo(-40,-50,0,-15);
		context.closePath();
		context.fill();
		context.restore();
		//waits 2 seconds then calls a function
		setTimeout(theEnd, 1000);
	}
}


//This state draws the words "The End" in the middle of the screen
states[4] = function()
{
	context.font = "bold 48px Arial";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.fillText("The End", canvas.width/2, canvas.height/2);
}


states[5] = function()
{
	context.font = "bold 48px Arial";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.fillText("Cut Scene!", canvas.width/2, canvas.height/2);
	//waits 2 seconds then calls a function
	setTimeout(theBeginning, 2000);
}

states[6] = function()
{
	context.font = "bold 38px Arial";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.fillText("Congratulations! You've made it to Level 5.", canvas.width/2, canvas.height/2);
	//waits 2 seconds then calls a function
	setTimeout(congrats, 2000);
}


function theBeginning()
{
	//Changes the current state
	currentState = 6;
}

function congrats()
{
	//Changes the current state
	currentState = 0;
}

function theEnd()
{
	//---------------------------------------------INSTRUCTIONS---------------------------------------------
	//-----------------------1. Change the current state to 4-----------------------------------------------
	//-----------------------2. Run the program to see the end----------------------------------------------
	currentState = 4;
}









