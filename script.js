function rockPaperScissor (playerChoice, computerChoice){

    let playerScore = parseInt(playerScoreElement.textContent);
    let computerScore = parseInt(computerScoreElement.textContent);
    let roundNum = parseInt(roundNumElement.textContent);
    playerChoiceElement.textContent = `${playerChoice}`;
    computerChoiceElement.textContent = `${computerChoice}`;


    if (playerChoice === computerChoice) {
        resultElement.textContent = '❌ Tie!';
    } 
    else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
        
        playerScore++;
        resultElement.textContent = '👨 Player wins!';
        playerScoreElement.textContent = `${playerScore}`;
    } 
    else {
        computerScore++;
        resultElement.textContent = '🤖 Computer wins!';
        computerScoreElement.textContent = `${computerScore}`;
    }


    if (playerScore >= 5) {
        finalResultElement.textContent = '👑 Player Won the Game';
        gameOngoing = false;
        return;
    }
    else if (computerScore >= 5) {
        finalResultElement.textContent = '👑 Computer Won the Game';
        gameOngoing = false;
        return;
    }

    roundNum++;
    roundNumElement.textContent = `${roundNum}`;
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
     if (randomNum === 0) {
        return 'rock';
     }
     else if (randomNum === 1) {
        return 'paper';
     }
     
     return 'scissors';
}

function resetGame() {
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    playerChoiceElement.textContent = '';
    computerChoiceElement.textContent = '';
    resultElement.textContent = '';
    finalResultElement.textContent = '';
    roundNumElement.textContent = '0';
    gameOngoing = true;
}

const playerOptions = document.querySelectorAll('.option');
const playerScoreElement = document.querySelector('#human .score span');
const computerScoreElement = document.querySelector('#computer .score span');
const playerChoiceElement = document.querySelector('#human .choice');
const computerChoiceElement = document.querySelector('#computer .choice');
const roundNumElement = document.querySelector('#round span');
const resultElement = document.querySelector('#result');
const finalResultElement = document.querySelector('#final-result');
const resetButton = document.querySelector('#reset-button');
let gameOngoing = true;

playerOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (gameOngoing) {
            rockPaperScissor(option.id, getComputerChoice());
        }
    });

    resetButton.addEventListener('click', () => {
        resetGame();
    });
});