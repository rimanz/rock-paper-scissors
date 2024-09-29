const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice(warning="") {
    let promptMsg = `
        Please make choice:
            1. Rock
            2. Paper
            3. Scissors

        Please enter the respective number of your choice (without the ".")!
        `
    let choice = prompt(warning + promptMsg);
    let index = choice - 1;

    if ((index >= 0) && (index <= 2)) {
        return choices[index];
    } else {
        let warningMsg = `
        Invalid Input!
        Please make sure that the number you're entering is between 1 to 3 and remember to exclude the dot(.)
        `;
        return getHumanChoice(warningMsg);
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Oh-ohh! It's a tie");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper covers Rock");
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper covers Rock");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {    
        console.log("You lose! Scissors cut Paper");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors cut Paper");
        humanScore++;
    }
}




// Testing:
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);