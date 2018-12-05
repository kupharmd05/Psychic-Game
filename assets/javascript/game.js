var wins = 0;
var losses = 0;
var guesses = 9;
var userGuesses = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function reset() {
    guesses = 9
    userGuesses = []
}


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var winsText = document.getElementById("wins-Text");
    var lossesText = document.getElementById("losses-Text");
    var guessText = document.getElementById("guess-Text");
    var userGuessesText = document.getElementById("userGuesses-Text");

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length - 1)];

    userGuesses.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        reset()
    }
    else {
        guesses--;
    }
    if (guesses === 0) {
        losses++;
        reset();
    }
    //checks important variables are captured correctly
    // console.log(userGuess);
    // console.log(computerGuess);
    // console.log(userGuesses);


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Loses: " + losses;
    guessText.textContent = "Guesses Left: " + guesses;
    userGuessesText.textContent = "Your Guesses so far: " + userGuesses;
}

