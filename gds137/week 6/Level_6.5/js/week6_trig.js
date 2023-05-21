//--------------------Goal - To find an angle and set a velocity based on that angle--------------------------
//Description - Make the player follow the mouse so that you can navigate the player through the maze to the blue goal.
//--------------------Don't touch the walls.------------------------------------------------------------------
//--------------------Read the commented instructions below to complete this assignment----------------------
//--------------------Upload your completed file to the ict server and submit a link-------------------------

var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};
var particles=[];

var currentState ="loading";
var states = [];


var player = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:2, color:"gray"})
var goal = new GameObject({width:50, height:50, color:"cyan"})
var dot = new GameObject({width:50, height:50, color:"orange"})
var level = new Level();
	level.generate(level.l1);		
	
	
var image = new Image();
	image.src = "images/barlow.jpg";
	image.onload = function(){changeStates("start")};
	
	
var sound = document.querySelector("#sound");
var splode = document.querySelector("#splode");
	
	
var startX = player.x;
var startY = player.y;


function startGame()
{
	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot.radius())
	{
		changeStates("play");
	}
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}
	
function changeStates(stateName)
{
	currentState = stateName;
}

function setParticles()
{
	for(var i = 0; i < 50; i++)
	{
		particles[i] = new GameObject({x:0, y:0, width:30, height:30, color:"#ff0000"});
		particles[i].vx = rand(-25, 25);
		particles[i].vy = rand(-25, 25);
		particles[i].x = player.x;
		particles[i].y = player.y;
	}
	
}


states["loading"] = function()
{
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 78px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Loading", canvas.width/2, canvas.height/2+78/4)
	context.restore();
}

states["start"] = function()
{
	player.x = startX;
	player.y = startY;

	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
	}
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Click the orange dot to begin", canvas.width/2, canvas.height/2-78/4)
		context.fillText("DONT TOUCH THE WALLS!", canvas.width/2, canvas.height/2+(64))
	context.restore();
	
	dot.drawCircle();	
	goal.drawCircle();
	player.drawTriangle();
	
}

states["play"] = function()
{
	//-------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------INSTRUCTIONS-------------------------------------------------------
	//-------------------------------------------------------------------------------------------------------------------------
	
	//-----------------------Find the angle between the player and the mouse object in radians---------------------------------
	//-----------------------Store it in "var radians"--------------------------------------------------------------------------
	
	//function is called mouse
	var dx = mouse.x - player.x;
	var dy = mouse.y - player.y;
	var dist = Math.sqrt(dx * dx + dy * dy);
			
	player.x += dx /25;
	player.y += dy /25;
		

		
	
	//----------------------Convert radians to degrees. Store it in a variable called "var deg";
	//----------------------Set player.angle equal to the "deg" variable.

	var radians = Math.atan2(dy, dx);
	
	player.angle = radians * 180/Math.PI;

	//----------------------Find the player's vx and vy if the hypoteneuse is "player.force" and the angle is the "radians" variable.
	

	//--------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------END OF INSTRUCTIONS-------------------------------------------------
	//--------------------------------------------------------------------------------------------------------------------------

	player.move();

	if(goal.hitTestPoint(player))
	{
		sound.play();
		changeStates("win");
	}
	
	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();

		if(level.grid[i].hitTestPoint(player))
		{
			setParticles();
			changeStates("lose");
			//splode.play();
		}
	}
	
	goal.drawCircle();
	player.drawTriangle();
}

states["lose"] = function()
{
	player.x = startX;
	player.y = startY;
	player.angle = 0;

	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
	}
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("You Lose", canvas.width/2, canvas.height/2+78/4)
	context.restore();
	
	dot.drawCircle();
	goal.drawCircle();
	
	for(var i = 0; i < 50; i++)
	{
		particles[i].move();
		particles[i].drawCircle();
	}
	
	
}

states["win"] = function()
{
	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
	}
	
	player.x = startX;
	player.y = startY;
	
	context.drawImage(image,0,0, canvas.width, canvas.height);
	
	setTimeout(changeStates, 2000, "message")
}

states["message"] = function()
{
	player.x = startX;
	player.y = startY;

	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
	}
	
	dot.drawCircle();
		
	goal.drawCircle();
	player.drawTriangle();	
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 78px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Congratulations", canvas.width/2, canvas.height/2+(78/4))
	context.restore();
	
	setTimeout(changeStates, 2000, "start")
}



//--------------------------------------------Animation Loop-------------------------------------------
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}



