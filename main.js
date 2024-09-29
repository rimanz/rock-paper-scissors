function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = prompt(`
        Please make choice:
            1. Rock
            2. Paper
            3. Scissors

        Please enter the respective number of your choice (without the ".")!
        `);
    let index = choice - 1;
    return choices[index];
}




// Testing:
console.log(getHumanChoice());