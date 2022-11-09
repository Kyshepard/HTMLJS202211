var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//pentagram
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(555,307)
ctx.lineTo(667,283)
ctx.lineTo(726,380)
ctx.lineTo(652,466)
ctx.lineTo(548,421)
ctx.closePath();
ctx.fill();
ctx.stroke();

//square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.fillRect(85,302,100,100)
ctx.strokeRect(85,302,100,100)

//circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385, 441, 67, 0, (3 * Math.PI),false);
ctx.closePath();
ctx.fill();
ctx.stroke();

//line
ctx.fillStyle = "none"
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(85,682)
ctx.lineTo(278, 549)
ctx.closePath()
ctx.fill()
ctx.stroke()

//star
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(635,496)
ctx.lineTo(668,554)
ctx.lineTo(733,566)
ctx.lineTo(688,615)
ctx.lineTo(696,681)
ctx.lineTo(635,653)
ctx.lineTo(575,681)
ctx.lineTo(583,615)
ctx.lineTo(538,567)
ctx.lineTo(602,553)
ctx.closePath()
ctx.fill()
ctx.stroke()