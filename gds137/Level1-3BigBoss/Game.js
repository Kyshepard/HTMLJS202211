//Setting up the variables
var canvas;
var context;
var timer;

var interval = 1000/60;
var ball;
var paddle;
var score = 0;

//For gravity
var gravity = 1;

//For aceleration

//For friction
var fX = .97;
var fY = .97;

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
		paddle.vx += -paddle.ax * paddle.force;
		//paddle.x += -8;
	}
	if(d)
	{
		console.log("Moving right");
		paddle.vx += paddle.ax * paddle.force;
		//paddle.x += 8;
	}

	//paddle aceleration
	paddle.vx *= fX;
	paddle.vy *= fY;

	paddle.x += Math.round(paddle.vx);
	paddle.y += Math.round(paddle.vy);

	//ball gravity
	ball.vy += gravity;

	//collision for the paddle with walls
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
if(ball.x < canvas.width/2 - 500 + ball.width/2)
{
	ball.x = ball.width/2;
	ball.vx = -ball.vx * .67;
}
if(ball.x > canvas.width - ball.width/2)
{
	ball.x = canvas.width - ball.width/2;
	ball.vx = - ball.vx * .67;
}

if(ball.y < ball.width/2)
{
	ball.y = ball.width/2
	ball.vy = -ball.vy * .67;
}

if(ball.y > canvas.height - ball.width/2)
{
	ball.y = canvas.height -ball.width/2
	ball.vy = -ball.vy * .67;
	score = 0;
}

//collisions for ball hiting paddle
if(ball.hitTestObject(paddle))
	{
		ball.y = paddle.y - paddle.height/2 - ball.height/2
		ball.vy = -ball.vy;
		score = score + 1;

		if(ball.x < paddle.x/3)
		{
		
			ball.vy = -35
			ball.vx = 5
		}
		//inner /6
		if(ball.x < paddle.x/6)
		{
		
			ball.vy = -35
			ball.vx = 5
		}
		//outer /6
		if (ball.x < paddle.x/6)
		{
			
			ball.vy =  -35
			ball.vx = 5
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