var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);

//random number function
function randomRange(high, low){
    return Math.random() * (high - low) + low;
}


function GameObject(){
    //example of properties of a class
    this.width = 100;
    this.height = 100;
    this.radius = randomRange(50,2);
    this.x = randomRange(canvas.width, 0);
    this.y = randomRange(canvas.height, 0);
this.vx = randomRange(30, -30);
this.vy = randomRange(30, -30);

    this.color = `rgb(${randomRange(255, 0)}, ${randomRange(255,0)}, ${randomRange(255,0)})`;
    //this.color = "rgb("+randomRange(255,0) + "," + randomRange(255,0) + ")";

    //this is an example of a method or function
    this.drawSquare = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //bottom of canvas
        if(this.y > canvas.height - this.radius){
            //make sure it doesn't leave the screen
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;

        }

        if(this.y < 0 + this.radius){
            this.y = this.radius;
            this.vy = this.vy;
        }
        //right side of canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx = -this.vx;
        }
        //left side of canvas
        if(this.x < this.radius){
            this.x = this.radius;
            this.vx = -this.vx * -1;
    }
}
//make a new instance of the square
// var square = new GameObject();

// //use dot syntax to draw the square
// square.drawSquare();

// var square2 = new GameObject();
// square2.drawSquare();

var squares = [];

// squares[0] = new GameObject
// squares[1] = new GameObject
// squares[2] = new GameObject
// squares[3] = new GameObject
// squares[4] = new GameObject
// squares[5] = new GameObject

// squares[0].drawSquare()
// squares[1].drawSquare()
// squares[2].drawSquare()
// squares[3].drawSquare()
// squares[4].drawSquare()
// squares[5].drawSquare()

// var numSquares = 1000;

// for(var i = 0; i<numSquares; i++){
//     squares[i] = new GameObject();
//     squares[i].drawSquare()
// }

var circles = [];
var numCircles = 100;

for(var i = 0; i<numCircles;i++){
    circles[i] = new GameObject();
    circles[i].drawCircle();
}

function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //loop through all objects in the array
    for(var i = 0; i<circles.length; i++){
        circles[i].move();
        //draw he circles to the screen
        circles[i].drawCircle();
    }
    //request the animation frame
    timer = requestAnimationFrame(main);

}
main();