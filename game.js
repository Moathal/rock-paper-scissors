let opts = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let comPick = Math.floor(Math.random() * 3);
    return opts[comPick];
};

function humanPlay() {
    let humPick = "x";
    while (humPick !== opts[0] && humPick !== opts[1] && humPick !== opts[2]) {
        humPick = prompt("Pick either Rock, Paper or Scissors");
        humPick = humPick.trim();
        humPick = humPick.toLowerCase();
        humPick = humPick.replace(humPick.substring(0, 1), humPick.substring(0, 1).toUpperCase());
    };
    return humPick;
};
function playRound(humanSelection, computerSelection) {
    if (computerSelection == humanSelection) {
        console.log("It's a draw. Both chose " + computerSelection);
        return "None";
    } else if (computerSelection == 'Rock' && humanSelection == 'Scissors') {
        console.log("Computer Wins!! " + computerSelection + " beats " + humanSelection + ".");
        return "comp";
    } else if (computerSelection == 'Scissors' && humanSelection == 'Rock') {
        console.log("You Win!! " + humanSelection + " beats " + computerSelection + ".");
        return "hum";
    } else if (computerSelection == 'Paper' && humanSelection == 'Scissors') {
        console.log("You Win!! " + humanSelection + " beats " + computerSelection + ".");
        return "hum";
    } else if (computerSelection == 'Scissors' && humanSelection == 'Paper') {
        console.log("Computer Wins!! " + computerSelection + " beats " + humanSelection + ".");
        return "comp";
    } else if (computerSelection == 'Rock' && humanSelection == 'Paper') {
        console.log("You Win!! " + humanSelection + " beats " + computerSelection + ".");
        return "hum";
    } else {
        console.log("Computer Wins!! " + computerSelection + " beats " + humanSelection + ".");
        return "comp";
    };
};
function game() {
    let hum = 0;
    let comp = 0;
    while (comp !== 5 && hum !== 5) {
        let result = playRound(humanPlay(), computerPlay());
        if (result == "comp") {
            comp++;
        } else if (result == "hum") {
            hum++;
        };
    };
    console.log("Your Result: " + hum + " Computer Result: " + comp + ".")
};
