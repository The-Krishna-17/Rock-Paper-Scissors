// Variables
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playAgainBtn = document.querySelector('.play-again');

// Score management
let playerScoreValue = 0;
let computerScoreValue = 0;

// Function to get the computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice; // Return the random choice
}

// Rock button click event
rock.addEventListener('click', function () {
    playRound('rock');
});

// Paper button click event
paper.addEventListener('click', function () {
    playRound('paper');
});

// Scissors button click event
scissors.addEventListener('click', function () {
    playRound('scissors');
});

// Function to play a round
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    
    // Check for tie
    if (userChoice === computerChoice) {
        alert('It\'s a tie! You both chose ' + userChoice);
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScoreValue++;
        playerScore.innerHTML = `Player: ${playerScoreValue}`;
        alert(`You win! ${userChoice} beats ${computerChoice}`);
    } else {
        computerScoreValue++;
        computerScore.innerHTML = `Computer: ${computerScoreValue}`;
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
    }
}

playAgainBtn.addEventListener('click', function() {
    playerScoreValue = 0;
    computerScoreValue = 0;
    playerScore.innerHTML = 'Player: 0';
    computerScore.innerHTML = 'Computer: 0';
    alert('Scores have been reset! Play again.');
});
