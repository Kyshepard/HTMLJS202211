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
var amt = 5;
var gsquares = [];
var bcircles = [];

console.log(gsquares.length);
console.log(bcircles.length);

//Setting up the canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


//Instantiate the paddle
paddle = new GameObject();
paddle.width = 50;
paddle.height = 50;
paddle.color = `#ffff00`;
paddle.x = canvas.width/2;
paddle.y = canvas.height - 25;

//good squares
for(var i = 0; i < amt; i++)
{
gsquares[i] = new GameObject();
gsquares[i].width = 50;
gsquares[i].height = 50;
gsquares[i].color = `blue`;
gsquares[i].x = Math.random() * canvas.width;
gsquares[i].y = Math.random() * canvas.width;
gsquares[i].vx = 0;
gsquares[i].vy = 10;

bcircles[i] = new GameObject();
bcircles[i].width = 50;
bcircles[i].height = 50;
bcircles[i].color = `orange`;
bcircles[i].x = Math.random() * canvas.width;
bcircles[i].y = Math.random() * canvas.width;
bcircles[i].vx = 0;
bcircles[i].vy = 10;
}

//bad circles


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

	for(var i = 0; i < amt; i++)
	{
		gsquares[i].move();
		bcircles[i].move();
		gsquares[i].drawRect();
		bcircles[i].drawCircle();

	
	}
	
	//bcircles.move();
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


	//this parts put the squares back
	
	if(gsquares[i].y >= canvas.height + gsquares[i].height)
	{
		bcircles[i].y = Math.random() * canvas.height;
		bcircles[i].x = Math.random() * canvas.width;
		//gsquares.vy = 10;
	}

	if(bcircles[i].y >= canvas.height + bcircles[i].height)
	{
		bcircles[i].y = Math.random() * canvas.height;
		bcircles[i].x = Math.random() * canvas.width;
		//bcircles.vy = 10;
	}
	


	//Update the Screen
	paddle.drawRect();	
	context.textAlign = "center";
	context.font = " bold 30px Arial";
    context.fontColor = "black";
	context.fillText("Score: "+score+"", canvas.width - 700, canvas.height -760);
}