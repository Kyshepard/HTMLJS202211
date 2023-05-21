var gravity

function showGravity()
{
	
	if(d)
	{	
		ball.vx += ball.ax * ball.force;
	}
	if(a)
	{
		ball.vx += ball.ax * -ball.force;
	}
	if(w)
	{	
		ball.vy += ball.ay * -ball.force;
	}
	if(s)
	{
		ball.vy += ball.ay * ball.force;
	}
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	ball.vy += gravity;
	ball.y += ball.vy;
	//---------------------------------------------------------------------------------------
	
	ball.vx *= frictionX;
	ball.x += ball.vx;
}
