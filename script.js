function guessTheNumber() {
    var numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    var attempts = 0;
    var guessed = false;

    while (!guessed) {
        var  userGuess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
        attempts++;

        if (userGuess === numberToGuess) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            guessed = true;
        } else if (userGuess < numberToGuess) {
            alert("Too low! Try again.");
        } else if (userGuess > numberToGuess) {
            alert("Too high! Try again.");
        }
    }
}

// Start the game OR Call the function 
guessTheNumber();