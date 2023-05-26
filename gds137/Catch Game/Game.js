//Setting up the variables
var canvas;
var context;
var timer;

var interval = 1000/60;
var paddle;
var score = 0;

//For gravity
var gravity = 1;

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
gsquares[i].y = Math.random() * canvas.height - 1000;
gsquares[i].vx = 0;
gsquares[i].vy = randomRange(7, 12);

bcircles[i] = new GameObject();
bcircles[i].width = 50;
bcircles[i].height = 50;
bcircles[i].color = `orange`;
bcircles[i].x = Math.random() * canvas.width;
bcircles[i].y = Math.random() * canvas.height - 1000;
bcircles[i].vx = 0;
bcircles[i].vy = randomRange(7, 12);	
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//setting the animation timer
timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	


	for(var i = 0; i < amt; i++)
	{
	gsquares[i].move();
	bcircles[i].move();
	
		if(gsquares[i].y >= canvas.height + 50)
		{
		gsquares[i].y = canvas.height - 1000;
		gsquares[i].x = Math.random() * canvas.width;
		gsquares[i].vy = randomRange(7, 12);
		gsquares[i].vx = 0;
		}

		if(bcircles[i].y >= canvas.height + 50)
		{
		bcircles[i].y = canvas.height - 1000;
		bcircles[i].x = Math.random() * canvas.width;
		bcircles[i].vy = randomRange(7,12);
		bcircles[i].vx = 0;
		 }
		
		 if(paddle.hitTestObject(bcircles[i]))
		 {
			clearTimeout(waiting);
			bcircles[i].y = canvas.height - 1000;
			bcircles[i].x = Math.random() * canvas.width;
			bcircles[i].vy = randomRange(7,12);
			bcircles[i].vx = 0;
			 paddle.color = "red";
			 score = 0;
			 setTimeout(waiting, 500);
			 
		 }
		 if(paddle.hitTestObject(gsquares[i]))
		 {
			
			clearTimeout(points);
			gsquares[i].y = canvas.height - 1000;
			gsquares[i].x = Math.random() * canvas.width;
			gsquares[i].vy = randomRange(7, 12);
			gsquares[i].vx = 0;
			paddle.color = "green";
			setTimeout(points, 500);
			
		 }

		gsquares[i].drawRect();
		bcircles[i].drawCircle();
	}
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


	//collision for the paddle with walls
	if(paddle.x < paddle.width/2)
	{
		paddle.x = paddle.width/2;
		paddle.vx = -paddle.vx;
		
	}

	if(paddle.x > canvas.width - paddle.width/2)
	{
		paddle.x = canvas.width - paddle.width/2;
		paddle.vx = -paddle.vx;
		
	}


	

	//Update the Screen
	paddle.drawRect();	
	context.textAlign = "center";
	context.font = " bold 30px Arial";
    context.fontColor = "black";
	context.fillText("Score: "+score+"", canvas.width - 700, canvas.height -760);
}

function waiting()
{
	paddle.color = "yellow";
}
function points()
{
	score = score + 1;
	paddle.color = "yellow";
}