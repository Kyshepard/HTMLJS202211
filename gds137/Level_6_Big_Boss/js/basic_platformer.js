//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
//var enemy;


	var shape = 1;

	var sound = document.querySelector("#sound");

	//functions tell what game state we are in and calls them
	var currentState = 0;
	var gameStates  = [];

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	

	player = new GameObject({x:100, y:canvas.height/2+200});
	enemy = new GameObject({x:canvas.width/2, y:canvas.height/2});
	bullet = new GameObject({x:-200, y:-200, width:25, color:"red"});
	var canvasTrigger = new GameObject({width:canvas.width, height:canvas.height, y:canvas.height/2 , color:"blue"});

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
	
	goal0 = new GameObject({width:24, height:50, x:canvas.width - 80, y:platform0.y-80, color:"#00ffff"});
	//add more goals
	goal1 = new GameObject({width:24, height:50, x:canvas.width - 80, y:platform0.y/2 +40, color:"#00ffff"});
	//goal 2 gives the power up
	goal2 = new GameObject({width:24, height:50, x:canvas.width/5 - 150, y:platform0.y/2 - 150, color:"#00ffff"});
	
	//goal 3 is the finial one that you need to win
	goal3 = new GameObject({width:24, height:50, x:canvas.width - 80, y:platform0.y/5 - 100, color:"#00ffff"});
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var frictionX = 1;
	var frictionY = 1;


	interval = 1000/60;
	timer = setInterval(animate, interval);

	var state = [
		function(){player.drawRect()},
		function(){player.drawCircle()},
		function(){player.drawTriangle()},
		function(){player.drawStar()}

	]

	console.log(state)

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	gameStates[currentState]();
}
	gameStates[0] = function()
	{
		
		var dx = player.x - enemy.x;
		var dy = player.y - enemy.y;
		
		var dist = Math.sqrt(dx * dx + dy * dy);
		
		var radians = Math.atan2(dy, dx);
		
		enemy.angle = radians * 180/Math.PI

		if(bullet.hitTestObject(canvasTrigger) == false)
		{
		bullet.x = enemy.x;
		bullet.y = enemy.y;
		}
		if(bullet.x == enemy.x && bullet.y == enemy.y)
		{
			bullet.vx = Math.cos(enemy.angle * Math.PI/180) * 5;
			bullet.vy = Math.sin(enemy.angle * Math.PI/180) * 5;
		}
		

		//buttons that move the player
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

		//buttons that change the players shape
		if(one)
		{
			player.color = 'pink';
			shape = 0;
			player.ax = 1;
			player.jumpHeight = -25;
		}
		if(two)
		{
			player.color = 'blue';
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

		


		//set the boundaries for the canvas
		if (player.y > canvas.height - player.height / 2) {
			player.y = canvas.height - player.height / 2;
			player.vy = -player.vy;
		}

		//adding colliders to keep the player within the game
		//top boundary
		if (player.y < player.height / 2) {
			player.y = player.height / 2;
			player.vy = -player.vy;
		}
		//right boundary
		if (player.x > canvas.width - player.width / 2) {
			player.x = canvas.width - player.width / 2;
			player.vx = -player.vx;
		}
		//left boundary
		if (player.x < player.width / 2) {
			player.x = player.width / 2;
			player.vx = -player.vx;
		}
		

		player.vx *= fX;
		player.vy *= fY;
		
		player.vy += gravity;
		player.force = 1;
		
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
		while(platform2.hitTestPoint(player.top()) && player.vy <=0)
		{
			player.y++;
			player.vy = 0;
		}
		while(platform2.hitTestPoint(player.left()) && player.vx <=0)
		{
			player.x++;
			player.vx = 0;
		}
		while(platform2.hitTestPoint(player.right()) && player.vx >=0)
		{
			player.x--;
			player.vx = 0;
		}
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
		if(player.hitTestObject(goal0) && shape == 0)
		{
			goal0.y = 10000;
		}
		if(player.hitTestObject(goal1) && shape == 0)
		{
			goal1.y = 10001;
		}
		if(player.hitTestObject(goal2) && shape == 0)
		{
			goal2.y = 10002;
			
		}
		if(player.hitTestObject(goal3) && shape == 3)
		{
			goal3.y = 10003;
			
		}

		//player loses if bullet or enemy touches player
		if(player.hitTestObject(bullet) && shape != 3)
		{
			currentState = 2;
			//player.ax = 0
		// context.textAlign = "center";
		// context.font = " bold 56px Arial";
		// context.fontColor = "black";
		// context.fillText("YOU LOSE!!", canvas.width/2, canvas.height/2 - 100);
		// return;
		}
		if(player.hitTestObject(enemy) && shape != 3)
		{
			currentState = 2;
			//player.ax = 0
		// 	context.textAlign = "center";
		// context.font = " bold 56px Arial";
		// context.fontColor = "black";
		// context.fillText("YOU LOSE!!", canvas.width/2, canvas.height/2 - 100);
		// return;
		 }

		
		//turns player into star if the collect the first 3 goals
		if(goal0.y == 10000 && goal1.y == 10001 && goal2.y == 10002)
		{
			shape = 3;
			player.color = "gold";
			gravity = 0;
			frictionX = .5;
			frictionY = .5;

			if(d)
			{	
				player.vx += player.ax * player.force;
			}
			if(a)
			{
				player.vx += player.ax * -player.force;
			}
			if(w)
			{	
				player.vy += player.ay * -player.force;
			}
			if(s)
			{
				player.vy += player.ay * player.force;
			}
			sound.play();
			player.canJump = false;
			
		}

		if(goal3.y == 10003)
		{
			currentState = 1;
		// context.textAlign = "center";
		// context.font = " bold 56px Arial";
		// context.fontColor = "black";
		// context.fillText("YOU WIN!!", canvas.width/2, canvas.height/2 - 100);
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
		//canvasTrigger.drawRect();
		bullet.move();
		bullet.drawCircle();
		player.drawDebug();
		goal0.drawCircle();
		goal1.drawCircle();
		goal2.drawCircle();
		goal3.drawCircle();
		enemy.drawEnemy();
	}

gameStates[1] = function()// the win screen
	{
	
	
		canvas.clearRect;
		context.textAlign = "center";
		context.font = " bold 56px Arial";
		context.fontColor = "black";
		context.fillText("YOU WIN!!", canvas.width/2, canvas.height/2 - 100);
		context.fillText("Press the Space Bar to Restart", canvas.width/2, canvas.height/2);
		if (space == true)
		{
			currentState = 0;
			location.reload();
		}
	}
gameStates[2] = function() //the lose screen
	{
		canvas.clearRect;
		context.textAlign = "center";
		context.font = " bold 56px Arial";
		context.fontColor = "black";
		context.fillText("YOU LOSE!!", canvas.width/2, canvas.height/2 - 100);
		context.fillText("Press the Space Bar to Restart", canvas.width/2, canvas.height/2);
		if (space == true)
		{
			currentState = 0;
			location.reload();
		}
		return;
	}

/*gameStates[3] = function() //the start screen
	{
		canvas.clearRect;
		context.textAlign = "center";
		context.font = " bold 56px Arial";
		context.fontColor = "black";
		context.fillText("Press the Space Bar to Start!!", canvas.width/2, canvas.height/2 - 100);	
		if (space == true)
		{
			currentState = 0;
		}
		return;
	}
*/

/*function BeginGame()
{
	currentState = 3
}*/
function theGame()
{
	currentState = 0;
}
function youWin()
{
	currentState = 1
}
function youLose()
{
	currentState = 2
}
