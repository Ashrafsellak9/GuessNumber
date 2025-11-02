const secretNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10;
const attempts = 1;

const guessNumber = () => {
    const userGuess = parseInt(document.getElementById("guess").value);
    if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML = "Congratulations! You guessed the number correctly!";
        document.getElementById("guess").disabled = true;
    } else if (userGuess < secretNumber) {
        document.getElementById("result").innerHTML = "Too low! Try again.";
        document.getElementById("guess").value = "";
    } else {
        document.getElementById("result").innerHTML = "Too high! Try again.";
        document.getElementById("guess").value = "";
    }
    attempts++;
    if (attempts === maxAttempts) {
        document.getElementById("result").innerHTML = `Sorry, you've reached the maximum number of attempts. The number was ${secretNumber}.`;
        document.getElementById("guess").disabled = true;
    }
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}
