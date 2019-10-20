$(document).ready(function () {
// assign var for wins, losses, users current score, and cpu random pick
var userWins = 0;
var userLosses = 0;
var userCurrentScore = 0;
var cpuRandomNumber = null;
var gameOver = false;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;


function startGame() {
    userCurrentScore=0;
    $("#currentScore").text(userCurrentScore);
    cpuRandomNumber = Math.floor((Math.random() * 120) + 18);
    $("#computerNumber").text(cpuRandomNumber);
    console.log("our random number to guess is " + cpuRandomNumber);
    // display random number
    $("#computerNumber").text(cpuRandomNumber);
    // each crystal displays random number 1- 12 every time game is reset // genarate random number and = to cpurandomscore from 19 to 120
    crystalOne = Math.floor((Math.random() * 12) + 1);
    crystalTwo = Math.floor((Math.random() * 12) + 1);
    crystalThree = Math.floor((Math.random() * 12) + 1);
    crystalFour = Math.floor((Math.random() * 12) + 1);
}
startGame();

    // create button to reset game
    // $("#reset").on("click", function () {
    //     startGame();
    // });

// every time crystal is clicked add random values together = userCurrentScore
$("#crystal-one").on("click", function () {
    userCurrentScore += crystalOne;
    calculateScore();
    console.log("this is the new current score " + userCurrentScore);
});
$("#crystal-two").on("click", function () {
    userCurrentScore += crystalTwo;
    calculateScore();
    console.log("this is the new current score " + userCurrentScore);
});
$("#crystal-three").on("click", function () {
    userCurrentScore += crystalThree;
    calculateScore();
    console.log("this is the new current score " + userCurrentScore);
});
$("#crystal-four").on("click", function () {
    //    crystalFour += userCurrentScore;
    userCurrentScore += crystalFour;
    calculateScore();
    console.log("this is the new current score " + userCurrentScore);
});



// display on html userCurrentScore
function calculateScore() {
    // if userCurrentScore is more than cpuRandomScore then you lose then, losses++ and reset game
    if (userCurrentScore == cpuRandomNumber) {
        console.log("you win!!!!");
        alert("you win!");
        userWins++;
        $("#wins").text(userWins);
        startGame();
    } else if (userCurrentScore > cpuRandomNumber) {
        console.log("you lose");
        alert("you lose!");
        userLosses++;
        $("#losses").text(userLosses);
        startGame();
    } else {
        console.log("keep playing");
        $("#currentScore").text(userCurrentScore);
    }
}






    
});