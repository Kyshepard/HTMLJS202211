//--------------------Goal - To find an angle and rotate a turret to that angle--------------------------
//--------------------Description - Make the blue turret aim at the player even if the player moves.
//--------------------Don't touch the walls.------------------------------------------------------------------
//--------------------Read the commented instructions below to complete this assignment----------------------
//--------------------Upload your completed file to the ict server and submit a link-------------------------

var canvas;
var context;
var timer;
var interval;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.force = 1;
	
	turret = new GameObject({x:200, y:200, width:25, color:"cyan"});
	
	bullet = new GameObject({x:200, y:200, width:25, color:"magenta"});
	
	canvasTrigger = new GameObject({width:canvas.width, height:canvas.height});

	
	
	//friction
	var fX = .80;
	var fY = .80;
	
	var angle = 0;
	
	//gravity gets added to the vy
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	/*-----------This function move the player-----------*/
	//w and s move forward and backward
	//a and d rotate the triangle
	angularMovement();
	
	//-------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------INSTRUCTIONS-------------------------------------------------------
	//-------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------Make the blue turret aim at the player-----------------------------------------
	//angle-=5;
	//var radians = angle * Math.PI/180;
	
	//turret.x = player.x + Math.cos(radians) * 200;
	//turret.y = player.y + Math.sin(radians) * 200;

	var dx = player.x - turret.x;
	var dy = player.y - turret.y;
	
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	var radians = Math.atan2(dy, dx);
	
	turret.angle = radians * 180/Math.PI;
	
	//--------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------END OF INSTRUCTIONS-------------------------------------------------
	//--------------------------------------------------------------------------------------------------------------------------
	
	if(bullet.hitTestObject(canvasTrigger) == false)
	{
	 bullet.x = turret.x;
	 bullet.y = turret.y;
	}
	if(bullet.x == turret.x && bullet.y == turret.y)
	{
		bullet.vx = Math.cos(turret.angle * Math.PI/180) * 5;
		bullet.vy = Math.sin(turret.angle * Math.PI/180) * 5;
	}
	
	
	
	
	
	bullet.move();
	player.drawTriangle();
	turret.drawTriangle();
	bullet.drawCircle();
}

function angularMovement()
{
	if(w)
	{	
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * player.force;
		player.vy += player.ay * player.force;
	}
	
	if(s)
	{
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * -player.force;
		player.vy += player.ay * -player.force;
	}
	
	//Rotate Counter Clockwise
	if(a)
	{
		player.angle-=2;
	}
	//Rotate Clockwise
	if(d)
	{
		player.angle+=2;
	}

	//apply physics to velocity
	player.vx *= fX;
	player.vy *= fY;
	
	//apply gravity to velocity
	player.vy += gravity;
	
	//move player
	player.move();
}

