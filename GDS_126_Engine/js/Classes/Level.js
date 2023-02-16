function Level()
{
  /*-----------------------------------The Level Object-------------------------------------------------------
  This is a constructor function that creates a Level Object. to use it you must instantiate it in your game.
  
  The level is used to move the level and really only needs an x and a y property to function. Basically you move this object and set other object's world properties to it. When this moves the objects will also move based on its location.
  
  To make this work, each GameObject will have a world property that consists of an x and y coordinate. Things are moved and drawn based on their world coordinates. 
  
  To use the world property you add the world's coordinates to the GameObject's. The new GameObject file has been updated to include this feature. All collision, points and drawing functions have been modified to include the addition of the world's coordinates. 
  
  If you want something to move with the level, you must set the GameObject's world property to equal the a level object.
  ------------------------------------------------------------------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------
    This is a level. It is a 2D array. You can make as many of these as you would like. You will need to pass them to the generate function when you call it in your game.
	Currently:
	0 = empty space
	1 = the player
	2 = a tile
	You can also add other numbers and use them in the generate function to create different types of objects. You will need to add cases for each in the generate method below.
	---------------------------------------------------------------------------------------------------------*/
	this.l1 = [
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,2,0,2,2,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2],
				[2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,2,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,2],
				[2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,2,0,0,2,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				[2,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,2,2,2,2,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2],
				[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
				
			];
	
	// stores the platforms and walls
	this.grid = [];
	
	//The coordinates of the level object
	this.x = 0;
	this.y = 0;
	
	
	/*In the game call this after you have instantiated the player, in order to draw a grid based level. 
	When you call it you must pass it a 2D array, and optionally you can pass a specific width and height that you would like the tiles to be drawn with.
	
	If you omit the width and height when you call the function, it will automatically size the array of tiles to fit the canvas.*/
	
	this.generate = function(level, width, height)
	{
		var tileWidth; 
		var tileHeight;
		
		//If the width and height variables are passed in, it will create blocks using those sizes. 
		//If not the program will resize everything to fit the screen.
		
		if(width != undefined)
		{
			tileWidth = width;
		}
		else
		{
			tileWidth = canvas.width/level[0].length;
		}
		
		if(height != undefined)
		{
			tileHeight = height;
		}
		else
		{
			tileHeight = canvas.height/level.length;
		}
	
		//The index number of the grid array. Platforms are stored in here
		var g = 0;
		//Used to place each tile.
		var x = tileWidth/2;
		var y = tileHeight/2;
		
		//Loops throught the 2d array that is passed to this function and creates the objects.
		for(var r = 0; r < level.length; r++)
		{
			for(var c = 0; c < level[r].length; c++)
			{
				//Add more cases to place other types of objects
				switch(level[r][c])
				{
					case 0:
					break;
					
					case 1:
						//places the player at this grid point
						player.x = x;
						player.y = y;
					break;
					
					case 2:
						//creates the grid of objects
						this.grid[g] = new GameObject({width:tileWidth, height:tileHeight, world:this});
						this.grid[g].x = x;
						this.grid[g].y = y;
						this.grid[g].color = "#335577";
						//increments the grid index
						g++;
					break;
				}
				// moves the x coordinate for the next tile
				x+=tileWidth;
			}
			//moves the next row down and to the left
			y+=tileHeight;
			x=tileWidth/2;
		}
	
	}			
}
			