var w = false;
var a = false;
var s = false;
var d = false;

//the buttons for the new mechanics
var one = false;
var two = false;
var three = false;


document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}

	if(e.keyCode == 49)
	{
		one = true; //for square
		player.drawDebug();
	}
	if(e.keyCode == 50)
	{
		two = true;//for circle
		player.drawDebug();
	}
	if(e.keyCode == 51)
	{
		three = true; //for triangle

	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}

	if(e.keyCode == 49)
	{
		one = false; //for square
		//player.drawDebug();
		//two = false
	}
	if(e.keyCode == 50)
	{
		two = false;//for circle
		//player.drawDebug();
		//one = false
	}
	if(e.keyCode == 51)
	{
		three = false; //for triangle
		

	}
}
