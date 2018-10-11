window.onload = function () {
    var winsCounter = 0;
    var lossesCounter = 0;
    var guessesLeft = 9;
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text")
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var guessesSoFar = document.getElementById("gueesesSoFar-text");
    winsText.textContent = winsCounter;
    lossesText.textContent = lossesCounter;
    guessesLeftText.textContent = guessesLeft;

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var randomLetter = getRandomLetter();
    
    function getRandomLetter() {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function win() {
        winsCounter += 1;
        winsText.textContent = winsCounter;
    }
    function lose() {
        lossesCounter += 1;
        lossesText.textContent = lossesCounter;
    }

    function reset() {
        guessesLeft = 9;
        guessesLeftText.textContent = guessesLeft;
        randomLetter = getRandomLetter();
        guessesSoFar.textContent = "";
    }

    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        if (userGuess === randomLetter) {
            win();
            reset();
        }
        else {
            guessesLeft -= 1;
            guessesLeftText.textContent = guessesLeft;
            guessesSoFar.append(userGuess + ",");
        }
        if (guessesLeft == 0) {
            lose();
            reset();
        }
    }
}