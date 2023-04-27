//Define Booleans for each key
var a = false;
var d = false;
//make more for keypressing and movement

//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	console.log("Pressed" + e.keyCode);
	
	if(e.keyCode ==65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	//add more if e.keycode == their js button to make movement happen
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
}