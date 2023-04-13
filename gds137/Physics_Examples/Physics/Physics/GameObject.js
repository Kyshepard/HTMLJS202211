// JavaScript Document
function GameObject(x,y,w,h,color)
{
	
	//Default Values
	if(x == undefined)
		this.x = canvas.width/2;
	else 
		this.x = x;
	if(y == undefined)
		this.y = canvas.height/2;
	else 
		this.y = y;
	
	if(w == undefined)
		this.width = 100;
	else 
		this.width = w;
	if(h == undefined)
		this.height = 100;
	else 
		this.height = h;
	
		//player's color
	if(color == undefined)
		this.color = "#ff0000";
	else 
		this.color = color;
	
	//player's velocity or speed on each axis
	
	this.force = 1;
	
	this.ax = 1;
	this.ay = 1;
	
	this.vx = 0;
	this.vy = 0;
	

	
	//This draws the player to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}	
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}
	
}
