/*----------------------------------
This file enables Mouse Controls
----------------------------------*/
/*------------------
The mouse object
Properties:
   Number: x | The horizontal coordinate of the mouse within it's world
   Number: y | The vertical coordinate of the mouse within it's world
   Object: world | The starting point (point of origin) for the mouse's coordinate measurements. Used for collision detection purposes
   Number: world.x | The horizontal offset for measuring the mouse's position 
   Number: world.y | The vertical offset for measuring the mouse's position 
   Boolean: pressed | Whether or not the right mouse button is being pressed
-------------------*/
var mouse={x:0,y:0, world:{x:0,y:0},pressed:false}

//Tracks the mouse's position
canvas.addEventListener(`mousemove`, (e)=>{
   var rect = canvas.getBoundingClientRect()
   mouse.x= e.clientX - rect.left
   mouse.y= e.clientY - rect.top
   //console.log(mouse.x)
  
})

//Activates and deactivates the mouse pressed property
canvas.addEventListener(`mousedown`, (e)=>{mouse.pressed=true;})
canvas.addEventListener(`mouseup`, (e)=>{mouse.pressed=false;})