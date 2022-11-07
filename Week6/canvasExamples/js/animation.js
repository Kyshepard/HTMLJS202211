var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;
var y = 300
var speedX = 3;
var speedY = 3;

var mario = new Image();
mario.src = "images/mario.png";
mario.onload = function(){
    main();
}

var bg = new Image();
bg.src = "images/galaxy.png"
bg.onload = function(){
    main()
}

function main(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(x,300,20,0,2*Math.PI, true);
    // ctx.fill();

    //draw sprite image
    ctx.drawImage(mario, x, y, 100, 110)

    x += speedX;
    y += speedY;
    if(x > canvas.width - 90 || x < - 30){
        speedX *= -1;
    }

    if(y > canvas.height - 110 || y < 0){
        speedY *= -1;
    }
    console.log(speedX);
    timer = requestAnimationFrame(main);
}

