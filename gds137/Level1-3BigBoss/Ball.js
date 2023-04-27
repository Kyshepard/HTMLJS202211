function Ball()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 80;
	this.height = this.width;
	//this.radius = 50;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "#0000FF";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.beginPath();
			context.arc(0, 0, this.width/2, 0, 360*Math.PI/180, true)
			context.closePath();
			context.fill();
			//context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}	
	
	//This changes the player's position
	//this.move = function()
	//{
	//	this.x += this.vx;
	//	this.y += this.vy;
	//}
}