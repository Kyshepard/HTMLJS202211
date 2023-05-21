function Level()
{
	this.l1 = [
				[2,2,2,2,2,2,2,2,2,2],
				[2,2,2,0,0,0,0,0,3,2],
				[2,2,2,0,2,2,2,2,2,2],
				[2,0,0,0,2,2,0,0,0,2],
				[2,0,2,2,2,2,0,2,0,2],
				[2,0,0,0,0,0,0,2,0,2],
				[2,2,2,2,2,2,2,2,0,2],
				[2,0,0,0,0,0,0,0,0,2],
				[2,0,2,2,2,2,2,2,2,2],
				[2,0,0,0,0,2,0,0,0,2],
				[2,2,2,2,0,2,0,2,0,2],
				[2,0,0,0,0,2,0,2,0,2],
				[2,0,2,2,2,2,0,2,0,2],
				[2,0,0,0,0,0,0,2,0,2],
				[2,2,2,2,2,2,2,2,0,2],
				[2,1,0,0,4,0,0,0,0,2],
				[2,2,2,2,2,2,2,2,2,2]
			];
	
	this.grid = [];
	
	this.generate = function(level)
	{
		var tileWidth = canvas.width/level[0].length;
		var tileHeight = canvas.height/level.length;
		var g = 0;
		var x = tileWidth/2;
		var y = tileHeight/2;
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
						this.grid[g] = new GameObject({width:tileWidth, height:tileHeight});
						this.grid[g].x = x;
						this.grid[g].y = y;
						/*if(c%2==0)
						{
							this.grid[g].color = "#99aacc";
						}
						else
						{*/
							this.grid[g].color = "#335577";
						//}
						g++;
					break;
					
					case 3:
						goal.x = x;
						goal.y = y;
					break;
					
					case 4:
						dot.x = x;
						dot.y = y;
					break;
				}
				
				x+=tileWidth;
			}
			y+=tileHeight;
			x=tileWidth/2;
		}
	
	}			
}
			