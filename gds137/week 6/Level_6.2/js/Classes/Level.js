function Level()
{
	this.l1 = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,2,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,2,2,0,0,0,0,0,0],
				[0,0,0,0,1,0,2,2,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[2,2,2,2,2,2,2,2,2,2]
			];
	
	this.grid = [];

	this.generate = function(level)
	{
		var g = 0;
		var x = 50;
		var y = 50;
		for(var r = 0; r < level.length; r++)
		{
			for(var c = 0; c < level[r].length; c++)
			{
				switch(level[r][c])
				{
					case 0:
					break;
					
					case 1:
						player.x = x;
						player.y = y;
					break;
					
					case 2:
						this.grid[g] = new GameObject();
						this.grid[g].x = x;
						this.grid[g].y = y;
						this.grid[g].color = "#00aa00";
						g++;
					break;
				}
				x+=100;
			}
			y+=100;
			x=50;
		}
	
	}			
}
			