const secretNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 10;
let attempts = 0;

const updateProgress = () => {
    const remaining = maxAttempts - attempts;
    const percentage = (remaining / maxAttempts) * 100;
    document.getElementById("attemptsLeft").textContent = remaining;
    document.getElementById("progressBar").style.width = `${percentage}%`;
    
    const progressBar = document.getElementById("progressBar");
    if (percentage <= 20) {
        progressBar.className = "progress-bar bg-danger";
    } else if (percentage <= 50) {
        progressBar.className = "progress-bar bg-warning";
    } else {
        progressBar.className = "progress-bar bg-info";
    }
};

const showResult = (message, type) => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'danger' ? 'exclamation-triangle' : 'info-circle'}"></i>
            ${message}
        </div>
    `;
};

const guessNumber = () => {
    const userGuess = parseInt(document.getElementById("guess").value);
    const guessInput = document.getElementById("guess");
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showResult("Please enter a valid number between 1 and 100!", "warning");
        guessInput.value = "";
        guessInput.focus();
        return;
    }
    
    attempts++;
    updateProgress();
    
    if (userGuess === secretNumber) {
        showResult(`Congratulations! You guessed the number correctly in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}!`, "success");
        guessInput.disabled = true;
        document.querySelector('button').disabled = true;
    } else if (userGuess < secretNumber) {
        showResult(`Too low! Try a higher number.`, "info");
        guessInput.value = "";
        guessInput.focus();
    } else {
        showResult(`Too high! Try a lower number.`, "info");
        guessInput.value = "";
        guessInput.focus();
    }
    
    if (attempts >= maxAttempts && userGuess !== secretNumber) {
        showResult(`Sorry, you've reached the maximum number of attempts. The number was <strong>${secretNumber}</strong>.`, "danger");
        guessInput.disabled = true;
        document.querySelector('button').disabled = true;
    }
};

// Allow Enter key to submit gues
document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById("guess");
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            guessNumber();
        }
    });
    guessInput.focus();
});
