const secretNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10;
const attempts = 1;

console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.");

let userGuess = parseInt(prompt("Enter your guess between 1 and 100:"));

while (userGuess !== secretNumber) {
    if (userGuess < secretNumber) {
        guess = parseInt(prompt("Too low! Try again:"))
    } else {
        guess = parseInt(prompt("Too high! Try again:"))
    }
    attempts++;
    if (attempts === maxAttempts) {
        alert(`Sorry, you've reached the maximum number of attempts. The number was ${secretNumber}.`);
        break;
    }
}

alert(`Congratulations! You guessed the number ${secretNumber} correctly!`);