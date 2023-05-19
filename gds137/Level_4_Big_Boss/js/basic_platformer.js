//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;

var shape = 1;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});


	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = platform0.width/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.x = 500;
		platform1.y = platform0.y- platform0.height/2 - platform1.height/2;
		platform1.color = "#ffff00";	
	
	goal = new GameObject({width:24, height:50, x:20, y:platform0.y-100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	

	interval = 1000/60;
	timer = setInterval(animate, interval);

	var state = [
		function(){player.drawRect()},
		function(){player.drawCircle()},
		function(){player.drawTriangle()},

	]

	console.log(state)

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

	
	if(one)
	{
		player.color = 'purple';
		shape = 0;
		player.ax = 1;
		player.jumpHeight = -25;
	}
	if(two)
	{
		player.color = 'purple';
		shape = 1;
		player.ax = 1;
		player.jumpHeight = -35;
	}
	if(three)
	{
		player.color = 'purple';
		shape = 2;
		player.ax= 10;
		player.jumpHeight = -25;
	}
	

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	platform1.x += platform1.vx;

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
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
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

	
	//---------Objective: Let Me Out!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get the pearl to open the door--------------------------------------------------------------------------------------------
	//---------Hint: you'll need a new variable to keep track of the key-----------------------------------------------------------------
	
	if(player.hitTestObject(goal) && shape == 0)
	{
		goal.y = 10000;
	}
	
	
	



	

	
	
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	//player.drawRect();
	/*if(shape ==1)
	{
		
		player.drawRect()
	}
	if(shape == 2)
	{
		
		player.drawCircle()
	}*/

	state[shape]()
	
	//Show hit points
	player.drawDebug();
	goal.drawCircle();
	
}

