function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice(warning="") {
    let choices = ["Rock", "Paper", "Scissors"];
    let promptMsg = `
    Please Make a choice:

        1. Rock
        2. Paper
        3. Scissors
        
    Enter the respective number of your choice.
    `
    let choice = Number(prompt(warning + promptMsg));

    if ((choice >= 1) && (choice <= 3)) {
        return choices[choice -1];
    } else {
        return getHumanChoice(`
        Sorry, couldn't get you! Please enter a valid choice.
        Your choice should be a number between 1 to 3 (without the ".")
        `);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice, "\t", computerChoice);
        if (humanChoice === computerChoice) {
            console.log("Hey, it's a tie!");
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock!");   
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("You lose! Scissors cut Paper!");
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You win! Scissors cut Paper!");
            humanScore++;
        }
        console.log(humanScore, "\t", computerScore);
    }

    for (let i = 1; i <= 5; i++){
        console.log(`
        Round #${i}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`
----- You've won the round! -----
`);
    } else if (humanScore < computerScore) {
        console.log(`
----- You've lost the round! -----
`);
    } else {
        console.log(`
----- It's a tie! -----
`);
    }
}

playGame();