//---------------------------------Goal - To calculate the sides of a right triangle using trig functions--------------------------------------
//---------------------------------Description: Place a bullet at the tip of gun when it fires-------------------------------------------------
//---------------------------------Read the commented instructions below to complete this assignment-------------------------------------------
//---------------------------------Upload your completed file to the ict server and submit a link----------------------------------------------

var canvas;
var context;
var timer;
var interval;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	var gun = new GameObject({width:200, height:50, angle:-90, x:canvas.width/2, y:canvas.height-100, force:1.2, color:"gray"})
	var target = new GameObject({width:100, height:50, x:canvas.width - 100, y:100, color:"#ff0000"});
	var bullet = new GameObject({width:20, height:20, x:-1000, y:gun.y, color:"#ff9900", force:12});
	
	//Invisible object that matches the size of the canvas. This is used to detect whether the bullet is on screen.
	var canvasTrigger = new GameObject({width:canvas.width, height:canvas.height, x:canvas.width/2, y:canvas.height/2});

	var gravity = 1;
	interval = 1000/60;
	timer = setInterval(animate, interval);
	var targetAngle = 0;

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	//Aim the gun at the target
	var dx = target.x - gun.x;
	var dy = target.y - gun.y;
	var radians = Math.atan2(dy,dx);
	gun.angle = radians * 180/Math.PI;
	
	
	//If the bullet goes off the screen, recycle the bullet and fire using the gun turret's angle.
	if(bullet.hitTestObject(canvasTrigger) == false )
	{
	//-------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------INSTRUCTIONS-------------------------------------------------------
	//-------------------------------------------------------------------------------------------------------------------------
	//--------------------------Place the bullet at the tip of the gun turret instead of at its center-------------------------
	
		bullet.x = gun.x + Math.cos(radians) * 100;
		bullet.y = gun.y + Math.sin(radians) * 100;

	//--------------------------------------------------------------------------------------------------------------------------
	//------------------------------------------------------END OF INSTRUCTIONS-------------------------------------------------
	//--------------------------------------------------------------------------------------------------------------------------
		bullet.vx = Math.cos(radians)*bullet.force;
		bullet.vy = Math.sin(radians)*bullet.force;
		
	}
	
	//Change the bullet's color
	if(bullet.hitTestObject(target))
	{
		target.color = "#ff9999";
		setTimeout(resetTargetColor, 500);
	}
	
	//Move the circle back and forth around the center of the canvas using cosine to create a wave.
	targetAngle+=2;
	target.x = canvas.width/2 + Math.cos(targetAngle*Math.PI/180)*200
	
	bullet.move();
	
	gun.drawTriangle();
	target.drawCircle();
	bullet.drawCircle();
}

function resetTargetColor()
{
	target.color = "#ff0000";
}

