/*-------------------------------------------------
Used for color based collision detection. 
Only works on a server and is not used by default.
Checks and rgb value color against the context color at a specified point.
-------------------------------------------------*/
function comparePixelColor(_point, _color)
	{
		let pix = context.getImageData(_point.x, _point.y, 1, 1)
		//console.log(_color,":", `rgb(${pix.data[0]},${pix.data[1]},${pix.data[2]})`)
		//alert(pix.data[3])
		if(_color === `rgb(${pix.data[0]},${pix.data[1]},${pix.data[2]})`)
		{
			return true;
		}
		
		return false;
	}