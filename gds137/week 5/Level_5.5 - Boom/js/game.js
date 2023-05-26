	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will blow up a platform exactly one second after its collided with--------
	//---------------------Read through the code to see how arrays have been used ------------------------------------------
	//---------------------Look carefully at line 94 to see one way a timer can be made-------------------------------------
	//---------------------Follow the commented instructions in the boom function located at the end of this program--------

var canvas;
var context;
var timer;
var interval;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:300, y:canvas.height/2-100});
	
	//-------------------------------------------------Create an Array of Platforms-----------------------------------
	platform = []
	platform[0] = new GameObject();
		platform[0].width = canvas.width-300;
		platform[0].x = platform[0].width/2;
		platform[0].color = "#66ff33";
		
	
	platform[1] = new GameObject();
		platform[1].x = 500;
		platform[1].y = platform[0].y- platform[0].height/2 - platform[1].height/2;
		platform[1].color = "#ffff00";
		
	platform[2] = new GameObject();
		platform[2].width = canvas.width-300;
		platform[2].x = platform[0].width/2;
		platform[2].color = "#66ff33";
		platform[2].y = platform[0].y- 200;
		platform[2].color = "#66ff33";
	
	goal = new GameObject({width:24, height:50, x:700, y:platform[0].y-100, color:"#00ffff"});
	//-------------------------------------------------------------------------------------------------------------------------
	
	//----------------------------------------------Create particles------------------------------------------------
	var amount = 25;
	var particles = [];
	
	for(var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject({width:10, height:10, x:platform[1].x, y:platform[1].y, color:"#ffff00"});
	}
	//---------------------------------------------------------------------------------------------------------------
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	//-----------------------------------------------------Move the Player--------------------------------------------
	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	//-------------------------------------------------------------------------------------------------------------------------
	
	
	//----------------------------Check collision between player and yellow wall.------------------------------------------
	if(player.hitTestObject(platform[1]))
		{
			//wait one second before calling the boom function
			setTimeout(boom, 1000);
		}
	//----------------------------------------------------------------------------------------------------------------------
	
	
	//-------------------------------------------Check Platform Collision---------------------------------------------------
	for(var i = 0; i < platform.length; i++)
	{

		while(platform[i].hitTestPoint(player.bottom()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(platform[i].hitTestPoint(player.left()) && player.vx <=0)
		{
			player.x++;
			player.vx = 0;
		}
		while(platform[i].hitTestPoint(player.right()) && player.vx >=0)
		{
			player.x--;
			player.vx = 0;
			
		}
		while(platform[i].hitTestPoint(player.top()) && player.vy <=0)
		{
			player.y++;
			player.vy = 0;
		}
		platform[i].drawRect();
	}
	
	//-------------------------------------------------------------------------------------------------------------------------
	
	//-----------------------------------------------------Check collision with goal-------------------------------------------
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
	}
	//-------------------------------------------------------------------------------------------------------------------------
	
	
	player.drawRect();
	player.drawDebug();
	goal.drawCircle();
	
	//--------------------------------------------------------Move and Draw particles-------------------------------------------
	
	for(var p = 0; p < particles.length; p++)
	{	
		particles[p].x += particles[p].vx;
		particles[p].y += particles[p].vy;
		particles[p].drawRect();
	}
	
	//-------------------------------------------------------------------------------------------------------------------------
}

function boom()
{
		//INSTRUCTIONS
		//Loop through the particles array
		//In each loop do the following:
		//	1.Change the platform[1]'s y position to -100000
		//	2.Change each particles vx so that it is a random number between -10 and 10.
		//	3.Change each particles vy so that it is a random number between -10 and 10.
}


