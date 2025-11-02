# 🎲 Guess the Number Game

A modern, interactive number guessing game built with HTML, CSS (Bootstrap 5), and JavaScript. Try to guess the secret number between 1 and 100 with visual feedback and progress tracking!

## Features

- **Modern UI/UX**: Beautiful Bootstrap 5 design with responsive layout
- **Visual Feedback**: Color-coded alerts for different game states
- **Progress Tracking**: Real-time progress bar and attempts counter
- **Smart Hints**: Get helpful feedback (too high/too low) after each guess
- **Input Validation**: Ensures valid number entries between 1-100
- **Keyboard Support**: Press Enter to submit your guess
- **Attempts Limit**: Challenge yourself with 10 attempts to guess correctly
- **Auto-focus**: Input field automatically focused for better UX

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server) OR Node.js (optional alternative)

### Installation

1. Clone or download this repository
2. Navigate to the project directory

### Running the Project

#### Method 1: Using Python (Recommended)

```bash
# Navigate to project directory
cd GuessNumber

# Start local server
python -m http.server 8000

# Or if using Python 3 specifically
python3 -m http.server 8000
```

Then open your browser and visit: **http://localhost:8000**

#### Method 2: Using Node.js

```bash
# Install http-server globally (first time only)
npm install -g http-server

# Start server
http-server -p 8000
```

#### Method 3: Direct File Opening

Simply double-click `index.html` to open it directly in your browser.

## 🎮 How to Play

1. The game generates a random number between 1 and 100
2. Enter your guess in the input field
3. Click "Guess" or press Enter
4. You'll receive feedback:
   - **Too high**: The secret number is lower
   - **Too low**: The secret number is higher
   - **Correct**: Congratulations! You win!
5. You have **10 attempts** to guess the correct number
6. Watch the progress bar - it changes color as attempts decrease:
   - 🔵 Blue: Plenty of attempts remaining (51-100%)
   - 🟡 Yellow: Getting close to limit (21-50%)
   - 🔴 Red: Running low on attempts (1-20%)

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **Bootstrap 5.3.2**: Modern, responsive CSS framework
- **Bootstrap Icons**: Beautiful icon set for visual elements
- **Vanilla JavaScript**: Game logic and interactivity
- **CSS3**: Custom styling (via Bootstrap classes)

## 📁 Project Structure

```
GuessNumber/
│
├── index.html      # Main HTML file with Bootstrap UI
├── script.js       # Game logic and interactivity
└── README.md       # Project documentation
```

## Game Logic

- **Random Number**: Generated once when the page loads (1-100)
- **Maximum Attempts**: 10 guesses allowed
- **Win Condition**: Correct guess within 10 attempts
- **Lose Condition**: 10 incorrect guesses
- **Input Validation**: Only accepts numbers between 1 and 100

## UI Features

- **Card-based Layout**: Clean, centered card design
- **Color-coded Alerts**:
  - 🟢 Green (Success): Correct guess
  - 🔵 Blue (Info): Hint feedback
  - 🟡 Yellow (Warning): Invalid input
  - 🔴 Red (Danger): Game over
- **Progress Bar**: Visual representation of remaining attempts
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🔧 Customization

You can easily customize the game by modifying `script.js`:

- **Change difficulty**: Modify `maxAttempts` value (line 2)
- **Change number range**: Adjust the random number generation (line 1)
- **Change colors**: Update Bootstrap alert classes in `showResult()` function

## 🐛 Known Issues

None at the moment. If you find any bugs, please report them!
---

**Enjoy playing! Good luck guessing! **

