let player1Score = 0;
let player2Score = 0;
let currentTurn = 1;

// Elements
const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2");
const result = document.querySelector("#result");
const turn = document.querySelector("#turn");
const scoreDisplay = document.querySelector("#score");
const rollButton = document.querySelector("#rollButton");
const newGameButton = document.querySelector("#newGameButton");

// Function to roll dice
function rollDice() {
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    firstDice.setAttribute("src", `images/dice${player1Roll}.png`);
    secondDice.setAttribute("src", `images/dice${player2Roll}.png`);

    if (player1Roll > player2Roll) {
        result.textContent = "Player 1 Wins!";
        player1Score++;
    } else if (player2Roll > player1Roll) {
        result.textContent = "Player 2 Wins!";
        player2Score++;
    } else {
        result.textContent = "It's a draw...";
    }

    // Update scores
    scoreDisplay.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;

    // Switch turn
    currentTurn = currentTurn === 1 ? 2 : 1;
    turn.textContent = `Player ${currentTurn}'s Turn`;
}

// Function to start a new game
function newGame() {
    player1Score = 0;
    player2Score = 0;
    currentTurn = 1;

    firstDice.setAttribute("src", "images/dice6.png");
    secondDice.setAttribute("src", "images/dice6.png");

    result.textContent = "Welcome to Dice Game";
    scoreDisplay.textContent = "Player 1 Score: 0 | Player 2 Score: 0";
    turn.textContent = "Player 1's Turn";
}

// Event listeners
rollButton.addEventListener("click", rollDice);
newGameButton.addEventListener("click", newGame);

// Initialize game
newGame();
