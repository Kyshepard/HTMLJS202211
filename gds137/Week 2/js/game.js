//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
var player2;
var ball;

var p1Wins = 0;
var p2Wins = 0;

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
	player2.x = canvas.width - player2.width/2;
	player2.color = `blue`

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
	
	ball.x = canvas.width/2;
	ball.vx = -5;
	ball.vy = 0;
	p2Wins = p2Wins + 1;
}
if(ball.x > canvas.width)
{
	ball.x = canvas.width/2;
	ball.vx = 5;
	ball.vy = 0;
	p1Wins = p1Wins + 1;
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
	
	if(ball.hitTestObject(player2))
	{
		//ball.x = player2.x - player2.width*2 + ball.width/2
		ball.vx = -ball.vx
		if(ball.y < player2.y - player2.height /6)
		{
		
			ball.vy = -3
		}
		if (ball.y > player2.y + player2.height/6)
		{
			
			ball.vy =  3
		}
	}

	//Update the Screen
	player1.drawRect();
	player2.drawRect();
	ball.drawCircle();
	context.textAlign = "center";
	context.font = "30px Times"
	context.fillText("Player 1 "+p1Wins+" | "+p2Wins+" Player 2" , canvas.width/2, 22)
	
	//drawing the net
	context.save();
	context.strokeStyle = 'pink';
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 20;
	context.stroke();
	context.restore();
}