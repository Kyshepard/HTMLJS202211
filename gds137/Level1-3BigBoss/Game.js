//Setting up the variables
var canvas;
var context;
var timer;

var interval = 1000/60;
var ball;
var paddle;
var score;
var ball

//Setting up the canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the ball
ball = new GameObject();
ball.width = 80;
ball.height = ball.width;
ball.color = `#ff00ff`;
ball.vx = 5;
ball.vy = 0;
gravity = 1;
ball.x = canvas.width/2
ball.y = canvas.height/2

//Instantiate the paddle
paddle = new GameObject();
paddle.width = 250;
paddle.height = 40;
paddle.color = `#00ffff`;
paddle.x = canvas.width/2;
paddle.y = canvas.height - 50;

//setting the animation timer
timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the ball
ball.move();

	//Move the paddle left and right
	if(a)
	{
		console.log("Moving Left");
		paddle.x += -8;
	}
	if(d)
	{
		console.log("Moving right");
		paddle.x += 8;
	}

	//collision for the paddle
	if(paddle.x < paddle.width/2)
	{
		paddle.x = paddle.width/2
		paddle.vx = -paddle.vx;
		
	}

	if(paddle.x > canvas.width - paddle.width/2)
	{
		paddle.x = canvas.width - paddle.width/2
		paddle.vx = -paddle.vx;
		
	}

	//Collision for the ball
if(ball.x < canvas.wdith/2 - ball.width/2)
{
	
	ball.x = canvas.width/2;
	ball.vx = -ball.vx
}
if(ball.x > canvas.width - ball.width/2)
{
	ball.x = canvas.width - ball.width/2;
	ball.vx = -ball.vx
}

if(ball.y < ball.width/2)
{
	ball.y = ball.width/2
	ball.vy = -ball.vy;
}

if(ball.y > canvas.height - ball.width/2)
{
	ball.y = canvas.height -ball.width/2
	ball.vy = -ball.vy;
}

//collisions for ball hiting paddle
if(ball.hitTestObject(paddle))
	{
		ball.x = paddle.x + paddle.width/2 + ball.width/2
		ball.vx = -ball.vx

		if(ball.y < player1.y - player1.height /6)
		{
		
			ball.vy = -3
		}
		if (ball.y > paddle.y + paddle.height/6)
		{
			
			ball.vy =  3
		}
		
	}

	//Update the Screen
	paddle.drawRect();
	ball.drawCircle();
	context.textAlign = "center";
	context.font = "16px Arial";
    context.fontColor = "black";
	context.fillText("Score: "+score+"", canvas.width - 920, canvas.height - 575);

    //drawing line from ball to paddle
    context.save();
    //context.strokeStyle = 'black';
    context.moveTo(ball.x,ball.y);
    context.lineTo(paddle.x, paddle.y)
    context.closePath();
    context.stroke();
    context.restore();
}