var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

//use lightsabers instead of rock, paper, scissors
//red beats blue, blue beats green, and green beats red
//red=rock green=paper blue=scissors

var red = new Image();
var green = new Image();
var blue = new Image();
var hred = new Image();
var hgreen = new Image();
var hblue = new Image();

red.src = "images/Red.png";
green.src = "images/Green.png";
blue.src = "images/Blue.png";


hred.src = "images/Red2.png";
hgreen.src = "images/Green2.png";
hblue.src = "images/Blue2.png";

//check to see if i need to add what is below
hblue.onload = function(){
    draw()
}


document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "select red, green, blue above."

function onKeyDown(e){
    console.log(e.keyCode);
}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("You pressed the spacebar");
        gameOver= false
        draw(red,green,blue,red,green,blue);
    }
}

function draw(red,green,blue, cred, cgreen, cblue){
    if(gameOver == true){   
//drawing the fonts
ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle= "grey";
ctx.textAlign = "center";
ctx.fillText("Welcome to the RPS Game!", canvas.width/2, 80);
ctx.fillText("")
ctx.fillText("Press Space to Start", canvas.width/2, 520);
ctx.strokeText("Welcome to the RPS Game!", canvas.width/2, 80);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px Ariel"
        ctx.textAlign = "center"
        ctx.fillStyle = "pink";
        //player choice
        ctx.fillText("Player Choice", canvas.width/2.1,100);
        ctx.drawImage(red, canvas.width/2 - red.width/2 - 100, 150 , 10, 150);
        ctx.drawImage(green, canvas.width/2 - green.width/2, 150, 10, 150 );
        ctx.drawImage(blue, canvas.width/2 - blue.width/2 + 100, 150 , 10, 150);
        //computer choices
        ctx.fillText("Computer Choice", canvas.width/2.1,340);
        ctx.drawImage(cred, canvas.width/2 - red.width/2 - 100, 375, 10, 150);
        ctx.drawImage(cgreen, canvas.width/2 - green.width/2, 375, 10, 150);
        ctx.drawImage(cblue, canvas.width/2 -blue.width/2 + 100, 375 , 10, 150);

        ctx.fillText(results, canvas.width/2.1, 565);
        ctx.restore();
    }
}

//alert("select red, green, or blue!");
var rps = ["red", "green", "blue"];
//alert("select red, green, or blue!");
console.log(rps[2]);

document.getElementById("red").addEventListener('click', function (e) {
    alert("you picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("green").addEventListener('click', function (e) {
    alert("you picked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("blue").addEventListener('click', function (e) {
    alert("you picked " + rps[2]);
    playGame(rps[2]);
}); 

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }
    else{
                var cpuChoice = Math.floor(Math.random() * 2.99);
        console.log(cpuChoice, playerChoice);

        switch (playerChoice) {
        case "red":
            if (cpuChoice == 0) {
                //red
                //alert("CPU chose red. It's a tie!")
                results = "CPU chose Red. It's a tie!"
                draw(hred,green,blue,hred,green,blue)
                
            }
            else if (cpuChoice == 1) {
                //green
                //alert("CPU chose Green. You lose!")
                results = "CPU chose Green. You lose!"
                draw(hred,green,blue,red,hgreen,blue)
            }
            else {
                //alert("CPU chose Blue. You win!")
                results = "CPU chose Blue. You win!"
                draw(hred,green,blue,red,green,hblue)
            }
            break;

        case "green":
            if (cpuChoice == 0) {
                //green
                //alert("CPU chose green. You win!")
                results = "CPU chose Red. You win!"
                draw(red,hgreen,blue,hred,green,blue)
            }
            else if (cpuChoice == 1) {
                //green
                //alert("CPU chose green. It's a tie!")
                results = "CPU chose Green. It's a tie!"
                draw(red,hgreen,blue,red,hgreen,blue)
            }
            else {
                //alert("CPU chose Blue. You lose!")
                results = "CPU chose Blue. You lose!"
                draw(red,hgreen,blue,red,green,hblue)
            }
            break;

        case "blue":
            if (cpuChoice == 0) {
                //red
                //alert("CPU chose rock. You lose!")
                results = "CPU chose rock. You lose!"
                draw(red,green,hblue,hred,green,blue)
            }
            else if (cpuChoice == 1) {
                //green
                //alert("CPU chose Green. You win!")
                results = "CPU chose Green. You win!"
                draw(red,green,hblue,red,hgreen,blue)
            }
            else {
                //alert("CPU chose blue. It's a tie!")
                results = "CPU chose Blue. It's a tie!"
                draw(red,green,hblue,red,green,hblue)
            }
     
            break;
         }
    }     
}