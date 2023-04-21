//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
var player2;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the paddle
	player1 = new GameObject();
	player1.width = 10;
	player1.x = 0 + player1.width/2;

	//Instantiate the second paddle
	player2 = new GameObject();
	player2.width = 10;
	player2.x = 0 + player2.wdith/2;

	//Instantiate the ball
	ball = new GameObject();
	ball.width = 32;
	ball.height = ball.width;
	ball.vx = -5;
	ball.vy = 0;
	
	
	
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

	//Move the second paddle up and down
	if(upArrow)
	{
		console.log("Moving up");
		player2.y += -8;
	}
	if(downArrow)
	{
		console.log("Moving down");
		player2.y += 8;
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

	//collision for the second paddle
	if(player2.y < player2.height/2)
	{
		player2.y = player2.height/2
		player2.vy = -player2.vy;
		
	}

	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height -player2.height/2
		player2.vy = -player2.vy;
		
	}


	//Collision for the ball
if(ball.x < ball.width/2)
{
	
	ball = new GameObject();
	ball.width = 32;
	ball.vx = -5;
	ball.vy = 0;
}

if(ball.x > canvas.width - ball.width/2)
{
	
	ball.x = canvas.width - ball.width/2
	ball.vx = -ball.vx;
	ball.color = "#FFFF00"
	
}

if(ball.y < ball.width/2)
{
	ball.y = ball.width/2
	ball.vy = -ball.vy;
	ball.color = "#ff0000"
}

if(ball.y > canvas.height - ball.width/2)
{
	ball.y = canvas.height -ball.width/2
	ball.vy = -ball.vy;
	ball.color = "#ff0000"
}

//collisions for ball hiting paddle
if(ball.hitTestObject(player1))
	{
		ball.x = player1.x + player1.width/2 + ball.width/2
		ball.vx = -ball.vx

		if(ball.y < player1.y - player1.height /6)
		{
		
			ball.vy = -3
		}
		if (ball.y > player1.y + player1.height/6)
		{
			
			ball.vy =  3
		}
		
	}
	

	//Update the Screen
	player1.drawRect();
	player2.drawRect();
	ball.drawCircle();
}