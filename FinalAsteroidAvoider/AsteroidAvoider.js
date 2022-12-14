var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore = 0;
var currentState = 0;
var gameState = [];

//asteroid variables
var numAsteroid = 20;
var asteroids = [];


//player ship variables
var ship = new PlayerShip();

//ship image
var pixelShip = new Image();
pixelShip.src = "Images/Shipwoboost.png"

//ship image with boost
var pixelShipB = new Image();
pixelShipB.src = "Images/Shipwboost.png"

//asteroid image
var pixelAsteroid = new Image();
pixelAsteroid.src = "Images/GoldenAsteroid.png"


//start and end menu
var startMenu = new Image();
startMenu.src = "Images/startmenu.png"

var endMenu = new Image();
endMenu.src = "Images/endmenu.png"


startMenu.onload = function(){
    main();
}
//power up
/*var powerUpStar = new Image();
powerUpStar.src = "Images/powerup.png"
numPowerUp = 5
var powerUps = []*/

//create keyboard event handlers
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code  for up w
            ship.up = true;
        }
        if (e.keyCode == 65) {
            //code  for left A
            ship.left = true;
        }
        if (e.keyCode == 68) {
            //code  for right d
            ship.right = true;
        }
        if (e.keyCode == 83) {
            //code  for down s
            ship.down = true;
        }
        //arrow keys
        if (e.keyCode == 38) {
            //code  for up w
            ship.up = true;
        }
        if (e.keyCode == 37) {
            //code  for left A
            ship.left = true;
        }
        if (e.keyCode == 39) {
            //code  for right d
            ship.right = true;
        }
        if (e.keyCode == 40) {
            //code  for down s
            ship.down = true;
        }
    }
    //menu inputs uses space bar
    if(gameOver){
        if(e.keyCode ==32){
            if(currentState == 2){
                //game over inputs
                currentState = 0;
                numAsteroid = 20;
                asteroids = [];
                score = 0;
                //new game starts here
                gameStart();
                main();
            }else{
                //main menu inputs
                gameStart();
                currentState = 1;
            gameOver = false;
            main();
            scoreTimer();
            }

            
        }
    }
}
function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //code  for up w
            ship.up = false;
        }
        if (e.keyCode == 65) {
            //code  for left A
            ship.left = false;
        }
        if (e.keyCode == 68) {
            //code  for right d
            ship.right = false;
        }
        if (e.keyCode == 83) {
            //code  for down s
            ship.down = false;
        }
        //arrow keys
        if (e.keyCode == 38) {
            //code  for up w
            ship.up = false;
        }
        if (e.keyCode == 37) {
            //code  for left A
            ship.left = false;
        }
        if (e.keyCode == 39) {
            //code  for right d
            ship.right = false;
        }
        if (e.keyCode == 40) {
            //code  for down s
            ship.down = false;
        }
    }
}

//Asteroid  Class
function Asteroid() {
    //properties to draw the asteroid
    this.radius = randomRange(15, 5);
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width;
    this.y = randomRange(canvas.height - this.radius, this.radius);// - canvas.height;
    this.vy = randomRange(10, 5);
    this.color = "white";

    //methods (functons) to draw asteroids
    this.drawAsteroid = function () {
        ctx.save();
        ctx.beginPath();
        
        //ctx.fillStyle = this.color;
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        //ctx.closePath();
        
        //ctx.fill();
        ctx.drawImage(pixelAsteroid,this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2)
        ctx.restore();
    }
}

/*function PowerUps(){
    //properties to draw Power Up Star
    this.radius = randomRange(15,2)
    this.vy = randomRange(10,5)
    ctx.save();
    ctx.drawImage(powerUpStar);
    ctx.restore();
}*/

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 40;
    this.height = 40;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    this.flameLength = 30;

    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x, this.y);

        //draw the thruster
        if(this.up || this.right || this.down){
           // ctx.save();
            // if(this.flameLength == 30){
            //     this.flameLength = 20;
            //     ctx.fillStyle = "yellow";
            // }else{
            //     this.flameLenght = 30;
            //     ctx.fillStyle = "orange";
            // }
            //draw flame
            // ctx.beginPath();
            ctx.drawImage(pixelShipB,-this.width/2,-this.height/2, this.width, this.height)
            // ctx.moveTo(0, this.flameLength);
            // ctx.lineTo(5, 5);
            // ctx.lineTo(-5, 5);
            // ctx.lineTo(0, this.flameLength);
            // ctx.closePath();
            // ctx.fill();
           // ctx.restore();
        
        }else{

        //draw the ship
       
       
        //ctx.fillStyle = "red";
      //  ctx.beginPath();
        ctx.drawImage(pixelShip, -this.width/2, -this.height/2, this.width, this.height)
       /* ctx.moveTo(0, -10);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, -10);*/
      //  ctx.closePath();
       // ctx.fill();
    }
        ctx.restore();

    }

    this.moveShip = function(){
        this.x += this.vx
        this.y += this.vy

        //adding boundaries for the screen
        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }
        //right boundary
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vx = 0;
        }
        //left boundary
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }

    }

}



function main() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameState[currentState]();
    if (!gameOver) {
        //refresh the screen
        timer = requestAnimationFrame(main);
    }

}

//game state machine

//main menu state
gameState[0] = function(){
    //code for menu
    ctx.save();
    ctx.drawImage(startMenu,0,0,canvas.width,canvas.height)
    //ctx.font = "30px Arial";
    //ctx.fillStyle = "white";
    //ctx.textAlign = "center"
   // ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 - 30);
    //ctx.font = "15px Arial";
    //ctx.fillText("Press Space to start", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
}

//play game state
gameState[1] = function(){
    //code for the asteroid game
     //draw score to screen
    ctx.save();
    ctx.font = "15px Arial"
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore();

    //vertical movement
    if (ship.up) {
        ship.vy = -7;
    } else if (ship.down){
        ship.vy = 7
    } 
    else {
        ship.vy = 0;
    }


    //horizontal movement
    if (ship.left) {
        ship.vx = -7;
    } else if (ship.right) {
        ship.vx = 7;
    } else {
        ship.vx = 0;
    }

    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));

        //collision detection happens here
        if (detectCollision(distance/ .6, (pixelShip.height/2 + asteroids[i].radius))) {
            //console.log("Hit Asteroid");
            //alert
            gameOver = true;
            currentState = 2;
            main();
            return;
        }
        if (detectCollision(distance/ .6, (pixelShipB.height/2 + asteroids[i].radius))) {
            //console.log("Hit Asteroid");
            //alert
            gameOver = true;
            currentState = 2;
            main();
            return;
        }

        if (asteroids[i].x < asteroids[i].radius) {
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius);
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width;
        }
        asteroids[i].x -= asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }

    /*for (var i = 0; i < PowerUps.length; i++){
        var dX = ship.x - powerUp[i].x;
        var dY = ship.y - powerUp[i].y;
        var distance = Math.sqrt((dX*dX) + (dY * dY));

        //detecting power up collision
        if (detectCollision(distance/ .6, (pixelShip.height/2 + powerUp[i].radius))){

        }*/
    




    //draw the ship
    ship.moveShip()
    ship.drawShip()

    //make asteroid
    while(asteroids.length < numAsteroid){
        asteroids.push(new Asteroid());
    }

    //make power up star
    /*while(powerUps.length < numPowerUp){
        powerUp.push(new PowerUps());
    }*/

}

//game over state
gameState[2] =  function(){
    ctx.drawImage(endMenu,0,0,canvas.width,canvas.height)
    if (score > highScore){
        highScore = score;
        ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
    ctx.fillText("You New High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
    ctx.fillText("You New record!", canvas.width/2, canvas.height/2);
    ctx.font = "15px Arial";
    ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
    }else{
    //code for game over menu
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
    ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
    ctx.font = "15px Arial";
    ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
    //code for background image
    ctx.drawImage(endMenu);
}
}

//utillity  function

function gameStart(){
    //for loop to instantiate asteroids for game
for (var i = 0; i < numAsteroid; i++) {
    asteroids[i] = new Asteroid();
}

    ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calDistance) {
    return distance < calDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;

        if(score % 5 == 0){
            numAsteroid += 5;
            console.log(numAsteroid);
        }
        //calls score timer every second
        setTimeout(scoreTimer, 1000)
    }
}

//temp call score function
//scoreTimer()