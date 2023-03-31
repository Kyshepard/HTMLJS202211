//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Ball();
	player.vx = 5
	player.vy = 5
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.move();

	//Collision
	if(player.x < player.width/2)
	{
		player.x = player.width/2
		player.vx = -player.vx;
	}

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = -player.vx;
		
	}

	if(player.y < player.height/2)
	{
		player.y = player.height/2
		player.vy = -player.vy;
	}

	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height -player.height/2
		player.vy = -player.vy;
		
	}
	
	//Update the Screen
	player.draw();
}
