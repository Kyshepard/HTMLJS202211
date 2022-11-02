//single line JavaScript comment
/*
multiline JavaScript
*/

//defines variable to access properties of Canvas by ID
var canvas = document.getElementById("canvas");
//define the drawing context of the Canvas Element
var ctx = canvas.getContext('2d');

//draw stuff
//sets up color and outline styles
ctx.fillStyle = "rgb(0,0,255)";
ctx.strokeStyle = "green";
ctx.lineWidth = "5";

//Draws a Rectangle fillRect(x,y,width,height)
ctx.strokeRect(100,30,200,100);
ctx.fillRect(30,30,200,100);

//draw lines
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(800,0);
ctx.stroke();
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//Draw a circle
ctx.beginPath();
ctx.arc(400,300,50,0,( 3 * Math.PI)/2, false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//some ranom shape
ctx.fillstyle = "#55ddef";
ctx.strokeStyle = "yellow";
ctx.lineWidth = "2"

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();

//draw an image to the Canvas
var mario = new Image();
mario.src = "images/mario.png"
ctx.drawImage(mario, 470,200, 80,80)