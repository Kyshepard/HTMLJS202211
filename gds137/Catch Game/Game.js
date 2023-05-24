//Setting up the variables
var canvas;
var context;
var timer;

var interval = 1000/60;
//var ball;
var paddle;
var score = 0;

//For gravity
var gravity = 1;

//For aceleration

//For friction
var fX = .97;
var fY = .97;

//for ememy squares and circles
var gsquares = 0;
var bcircles = 0;
var numSquares = 5;
var numCircles = 5;


//Setting up the canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the ball
/*ball = new GameObject();
ball.width = 80;
ball.height = ball.width;
ball.color = `#ffff00`;
ball.vx = 5;
ball.vy = 0;
ball.x = canvas.width/2
ball.y = canvas.height - 50
*/

//Instantiate the paddle
paddle = new GameObject();
paddle.width = 50;
paddle.height = 50;
paddle.color = `#ffff00`;
paddle.x = canvas.width/2;
paddle.y = canvas.height - 25;

//good squares
gsquares = new GameObject();
gsquares.width = 50;
gsquares.height = 50;
gsquares.color = `blue`;
gsquares.x = 650;
gsquares.y = -800;
gsquares.vx = 0;
gsquares.vy = 10;

//bad circles
bcircles = new GameObject();
bcircles.width = 50;
bcircles.height = 50;
bcircles.color = `blue`;
bcircles.x = 250;
bcircles.y = -800;
bcircles.vx = 0;
bcircles.vy = 10;

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//setting the animation timer
timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the ball
//ball.move();
	gsquares.move();
	bcircles.move();
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
	//ball.vy += gravity;
	//gsquares.vy += gravity;

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

	//----------------------------------------------------------
	//Collision for the ball 
/*if(ball.x < canvas.width/2 - 500 + ball.width/2)
{
	ball.x = ball.width/2;
	ball.vx = -ball.vy * .67;
}
if(ball.x > canvas.width - ball.width/2)
{
	ball.x = canvas.width - ball.width/2;
	ball.vx = -ball.vy * .67;
}

if(ball.y < ball.width/2)
{
	ball.y = ball.width/2
	ball.vy = -ball.vy/ .67;
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
		ball.vy = -35;
		score = score + 1;
		console.log("center hit")
		
		
		//inner left
		if(ball.x < paddle.x - paddle.width/6)
		{
			ball.vx = -ball.force
			console.log("Inner hit");
		}
		//inner right
		if(ball.x > paddle.x + paddle.width/6)
		{
			ball.vx = -ball.force
			console.log("Inner hit");
		}
		//outer left side
		if(ball.x < paddle.x - paddle.width/3)
		{
			ball.vx = -ball.force *5
			console.log("outter hit left");
		}

		//outer right side
		if (ball.x > paddle.x + paddle.width/3)
		{
			ball.vx = ball.force*5
			console.log("outer hit right");
		}
		
	}*/

	//this parts put the squares back
	if(gsquares.y >= canvas.height + gsquares.height)
	{
		bcircles.y = randomRange(-800 - 50, -800 - 5)
		bcircles.x = randomRange(canvas.width + bcircles.width, -800 + bcircles.width)
		gsquares.vy = 10;
	}

	if(bcircles.y >= canvas.height + bcircles.height)
	{
		bcircles.y = randomRange(-800 - 50, -800 - 5)
		bcircles.x = randomRange(canvas.width + bcircles.width, -800 + bcircles.width)
		bcircles.vy = 10;
	}



	//Update the Screen
	paddle.drawRect();
	gsquares.drawRect();
	bcircles.drawCircle();
	//ball.drawCircle();
	context.textAlign = "center";
	context.font = " bold 30px Arial";
    context.fontColor = "black";
	context.fillText("Score: "+score+"", canvas.width - 700, canvas.height -760);
}