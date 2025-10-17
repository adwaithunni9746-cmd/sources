let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 10;
const message = document.getElementById('message');
const guessesLeftDisplay = document.getElementById('guessesLeft');
const guessInput = document.getElementById('guessInput');
const submitButton = document.querySelector('button');
const resetButton = document.getElementById('resetButton');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    // Basic input validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guesses--;
    guessesLeftDisplay.textContent = guesses;

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed the number ${randomNumber}!`;
        message.style.color = 'green';
        endGame(true);
    } else if (guesses === 0) {
        message.textContent = `❌ Game Over! The number was ${randomNumber}.`;
        message.style.color = 'red';
        endGame(false);
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Too high! Try a lower number.';
        message.style.color = 'orange';
    }
    
    // Clear input for next guess
    guessInput.value = '';
}

function endGame(isWin) {
    guessInput.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = 'block';
}

function resetGame() {
    // Reset variables
    guesses = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset UI elements
    message.textContent = '';
    message.style.color = '#333';
    guessesLeftDisplay.textContent = guesses;
    guessInput.value = '';
    
    // Re-enable and hide button
    guessInput.disabled = false;
    submitButton.disabled = false;
    resetButton.style.display = 'none';
}