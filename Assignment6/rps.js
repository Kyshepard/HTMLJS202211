//canvas drawubg stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");


ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle= "yellow";
ctx.fillText("Welcome to the RPS Game!", 125, 280);
ctx.strokeText("Welcome to the RPS Game!", 125, 280);

//alert("select rock, paper, or scissors!");
var rps = ["rock", "paper", "scissors"];
ctx.fillText("select rock, paper, or scissors!", 125, 360);
//console.log(rps[2]);

document.getElementById("rock").addEventListener('click', function (e) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillText("you picked " + rps[0],125, 220);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function (e) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillText("you picked " + rps[1], 125, 220);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function (e) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillText("you picked " + rps[2], 125, 220);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("CPU chose rock. It's a tie!", 125, 400)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("CPU chose Paper. You lose!", 125, 400)
            }
            else {
                ctx.fillText("CPU chose Scissors. You win!", 125, 400)
            }
            break;

        case "paper":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("CPU chose rock. You win!", 125, 400)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("CPU chose Paper. It's a tie!", 125, 400)
            }
            else {
                ctx.fillText("CPU chose Scissors. You lose!", 125, 400)
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("CPU chose rock. You lose!", 125, 400)
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("CPU chose Paper. You win!", 125, 400)
            }
            else {
                ctx.fillText("CPU chose Scissors. It's a tie!", 125, 400)
            }
            break;
    }
}
