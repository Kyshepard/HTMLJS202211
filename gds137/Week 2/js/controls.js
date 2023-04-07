//Define Booleans for each key
var w = false;
var s = false;
//make more for keypressing and movement

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	console.log("Pressed" + e.keyCode);
	
	if(e.keyCode ==87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	//add more if e.keycode == their js button to make movement happen
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
}
