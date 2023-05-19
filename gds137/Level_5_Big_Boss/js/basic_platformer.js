//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;

var shape = 1;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2+200});

	//platform on the ground
	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.height = 50;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
	
	//the platform on the left side of the map
	platform1 = new GameObject();
	platform1.width = canvas.width/4;
	platform1.height = 50
	platform1.y = canvas.height/2 + 30;
	platform1.x = canvas.width/2 - 375
	platform1.color = "#66ff33";

	//the platform on the right side of the map
	platform2 = new GameObject();
	platform2.width = canvas.width/4;
	platform2.height = 50
	platform2.y = canvas.height/2 + 120;
	platform2.x = canvas.width - platform2.width/2
	platform2.color = "#66ff33";

	//the platform on the top right side of the map otherwise the endpoint
	platform3 = new GameObject();
	platform3.width = canvas.width/3 + 100;
	platform3.height = 50
	platform3.y = canvas.height/4 - 65;
	platform3.x = canvas.width - platform2.width/2;
	platform3.color = "#66ff33";
	
	goal = new GameObject({width:24, height:50, x:canvas.width - 80, y:platform0.y-80, color:"#00ffff"});
	//add more goals
	//goal1 = new GameObject({width:24, height:50, x:canvas.width - 80, y:platform0.y-80, color:"#00ffff"})

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
		player.jumpHeight = -31;
	}
	if(three)
	{
		player.color = 'purple';
		shape = 2;
		player.ax= 5;
		player.jumpHeight = -25;
		//add a way to change directions
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
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//----------------------------------
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
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//--------------------------
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	//while(platform2.hitTestPoint(player.right()) && player.vx <=0)
	//{
		//player.x--;
		//player.vx = 0;
	//}
	//--------------------------
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	//--------------------------
	
	//after the goals are touched they are moved off the canvas
	if(player.hitTestObject(goal) && shape == 0)
	{
		goal.y = 10000;
	}
	
	
	



	

	
	
	
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	//player.drawRect();
	/*if(shape == 1)
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

