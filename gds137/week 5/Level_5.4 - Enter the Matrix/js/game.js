	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw a lazy version of the "matrix"----------------------------------
	//---------------------You will recalculate some particles positions and colors when they move off screen---------------
	//---------------------Follow the commented instructions below to complete this assignment------------------------------

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	canvas.style.backgroundColor="black";
	
	var amount = 25;
	var particles = [];
	var colors = ["white", "#88ff88"];
	
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:10, height:10});
		
		var randomColor = Math.round(Math.random());
		particles[i].color = colors[randomColor]
	
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = Math.random() * canvas.height;
		particles[i].vy = Math.random() * 10 + 5;
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
			
		//-------------------------------------------------INSTRUCTIONS----------------------------------------------------------
			//If a particle moves off the bottom of the screen do the following:
			//	1. reset it's y to the top of the screen - its height
			//	2. re-calculate it's vy to be a random number between 5 and 15
			//  3. reset its color randomly to one of the colors in the "colors" array
			//     (Hint: The code to do this is already written above)
		//-------------------------------------------------------------------------------------------------------------------------
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = Math.random() * canvas.height;
		particles[i].vy = Math.random() * 10 + 5;

		particles[p].drawRect();
	}
	

}


