// Global Variables:
let humanScore = 0;
let computerScore = 0;

// UI components:
const scores = document.querySelectorAll('.score');
const choices = document.querySelectorAll('.choice');
const message = document.querySelector('.message');
const buttons = document.querySelector('.controls');
buttons.addEventListener('click', playGame);

// Functions:
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function playRound(humanChoice, computerChoice) {
    choices[0].textContent = humanChoice;
    choices[1].textContent = computerChoice;

    if (humanChoice == computerChoice) {
        message.textContent = "Oh-ohh! It's a tie";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        message.textContent = "You lose! Paper covers Rock";
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        message.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        message.textContent = "You win! Paper covers Rock";
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {    
        message.textContent = "You lose! Scissors cut Paper";
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        message.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        message.textContent = "You win! Scissors cut Paper";
        humanScore++;
    }
    scores[0].textContent = humanScore;
    scores[1].textContent = computerScore;
}

function showFinalMessage (text) {
    message.textContent = "";
    message.classList.add('final-message');
    const textNode = document.createTextNode(text + '\n');
    const playButton = document.createElement('button');
    playButton.textContent = 'Play Again';
    playButton.classList.add('play-again');
    playButton.addEventListener('click', resetGame);
    message.appendChild(textNode);
    message.appendChild(playButton);
}

function playGame(event) {
    const humanChoice = event.target.textContent;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);     // Play a round.

    if ((humanScore >= 5) || (computerScore >= 5)) {    // If one wins  
        buttons.removeEventListener('click', playGame);
        if (humanScore > computerScore) {
            setTimeout(() => {
                showFinalMessage("You won the game!!");
            }, 1000);;
        } else if (humanScore < computerScore) {
            setTimeout(() => {
                showFinalMessage("You lost the game!!");
            }, 1000);
        }
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scores.forEach(score => score.textContent = 0);
    choices.forEach(choice => choice.textContent = "");
    message.classList.remove('final-message');
    message.textContent = "LET'S SEE WHO IS FIRST TO GET 5 !!";
    buttons.addEventListener('click', playGame);
}