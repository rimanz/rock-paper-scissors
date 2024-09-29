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





// Testing:
console.log(getHumanChoice());