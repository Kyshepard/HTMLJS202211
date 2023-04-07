//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
var ball

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the paddle
	player1 = new GameObject();
	player1.width = 10;
	player1.x = 0 + player1.width/2;

	//Instantiate the ball
	ball = new GameObject();
	ball.vx = 5;
	ball.vy = 5;
	
	
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the ball
ball.move();

	//Move the paddle up and down
	if(w)
	{
		console.log("Moving up");
		player1.y += -8;
	}
	if(s)
	{
		console.log("Moving down");
		player1.y += 8;
	}

	//collision for the paddle
	if(player1.y < player1.height/2)
	{
		player1.y = player1.height/2
		player1.vy = -player1.vy;
		
	}

	if(player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height -player1.height/2
		player1.vy = -player1.vy;
		
	}

	//Collision for the ball
if(ball.x < ball.width/2)
{
	ball.x = ball.width/2
	ball.vx = -ball.vx;
	ball.color = "#FFFF00"
}

if(ball.x > canvas.width - ball.width/2)
{
	ball.x = canvas.width - ball.width/2
	ball.vx = -ball.vx;
	ball.color = "#FFFF00"
	
}

if(ball.y < ball.height/2)
{
	ball.y = ball.height/2
	ball.vy = -ball.vy;
	ball.color = "#ff0000"
}

if(ball.y > canvas.height - ball.height/2)
{
	ball.y = canvas.height -ball.height/2
	ball.vy = -ball.vy;
	ball.color = "#ff0000"
}

	//Update the Screen
	player1.drawRect();
	ball.drawCircle();
}