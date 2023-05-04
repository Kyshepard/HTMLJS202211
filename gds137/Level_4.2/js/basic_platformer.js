//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:150});

	platform0 = new GameObject();
		platform0.width = 150;
		platform0.x = platform0.width/2;
		platform0.y = player.y +player.height/2 + platform0.height/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 575;
		platform1.x = canvas.width -platform1.width/2;
		platform1.y = player.y +player.height/2 + platform1.height/2;
		platform1.color = "#66ff33";
		
	
	goal = new GameObject({width:24, height:50, x:platform1.x + 100, y:platform1.y-100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

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
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	//while(platform0.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	//{
	//	player.vx = 0;
	//	player.x--;
	//	player.canJump = true;
	//}
	
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	
	player.drawDebug();

	//---------Objective: Jump the gap to get the blue pearl----------------------------------------------------------------------------------------------------
	//---------Call the players drawDebug() function to see where his current hitpoints are
	//---------Change the objects in the hitTestPoint function so that the player has a hitpoint on his bottom left and bottom right.
	//---------You will need to manually draw these new points if you want to see them for debugging purposes.
	
	/*-------------------------------------------------------------------------------------------------------------------------------------
				NOTE: An unnecessary but great alternative to simply changing the object literals in the hitTestPoint 
				would be to create actual bottomRight() and bottomLeft() methods in your GameObject. However this is not necessary to complete this level. 
				You simply need to change the values of the x and y properties of the object literals listed below to find the solution.
	*/

	while(platform0.hitTestPoint({x:player.x, y:player.y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	while(platform1.hitTestPoint({x:player.x, y:player.y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	if(player.hitTestObject(goal))
	{
		goal.y = 100000;
	}

	
	platform0.drawRect();
	platform1.drawRect();

	player.drawRect();
	
	goal.drawCircle();
}

