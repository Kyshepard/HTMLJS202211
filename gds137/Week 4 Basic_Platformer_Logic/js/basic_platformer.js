//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject(
		{
			height: 100,
			color:`blue`,
		}
		);

	//Instantiate platforms
		platform0 = new GameObject();
		platform0.width = 500;
		platform0.y = player.y +player.height/2 +platform0.height/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.width = 50;
		platform1.height = 300;
		platform1.y = platform0.y - platform0.height/2 - platform1.height/2;
		platform1.x = platform0.x-platform0.width/2;
		platform1.color = "#00ffff";
		
	platform2 = new GameObject();
		platform2.width = 50;
		platform2.height = 300;
		platform2.y = platform0.y - platform0.height/2 - platform2.height/2;
		platform2.x = platform0.x + platform0.width/2;
		platform2.color = "#00ffff";
		
	platform3 = new GameObject();
		platform3.width = 300;
		platform3.height = 50;
		platform3.y = platform2.y;
		platform3.x = platform2.x ;
		platform3.color = "#ff00ff";
	
	//This platform uses an object literal to define the properties
	platform4 = new GameObject({width:300, height:50, x:platform1.x, y:platform3.y, color:"#ffff00"});
	
	//Global Physics Variables
	var fX = .97;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	//Jump with the w key
	if(w && player.canJump)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}
	
	//Apply acceleration to velocity.
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
	
	//Hit the ground
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	while(platform1.hitTestPoint(player.left()))
	{
		player.x++;
		player.vx = 0;
	}
	
	//stand on left blue platform
	while(platform1.hitTestPoint(player.bottom()))
	{
		player.vy = 0;
		player.y--;
		player.canJump = true;
	}

	while(platform1.hitTestPoint(player.bottomLeft()))
	{
		player.vy = 0;
		player.y--;
		player.canJump = true;
	}

	while(platform2.hitTestPoint(player.right()))
	{
		player.x--;
		player.vx = 0;
	}
	
	while(platform3.hitTestPoint(player.top()))
	{
		player.y++;
		player.vy = 0;
	}
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
			player.y--;
			player.vy = 0;
			player.canJump = true;
	
	}
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	player.drawRect();
	
	//Show hit points
	player.drawDebug();
}

