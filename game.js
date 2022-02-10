let opts = ["Rock", "Paper", "Scissors"];
let rounds = 0;
let round = 1;

function computerPlay() {
    let comPick = Math.floor(Math.random() * 3);
    return opts[comPick];
};

function start() {
    rounds = parseInt(document.getElementById("input").value);
    if (rounds > 0) {
        removeForm();
    } else {
        alert("In order to play, State how many rounds you want to play.")
        document.getElementById('input').focus;
    };
};
function playRound(humanSelection, computerSelection) {
    if (computerSelection == humanSelection) {
        return "None";
    } else if (computerSelection == 'Rock' && humanSelection == 'Scissors') {
        return "comp";
    } else if (computerSelection == 'Scissors' && humanSelection == 'Rock') {
        return "hum";
    } else if (computerSelection == 'Paper' && humanSelection == 'Scissors') {
        return "hum";
    } else if (computerSelection == 'Scissors' && humanSelection == 'Paper') {
        return "comp";
    } else if (computerSelection == 'Rock' && humanSelection == 'Paper') {
        return "hum";
    } else {
        return "comp";
    };
};
function endGame() {
    if (round > rounds) {
        const form = document.getElementById("form");
        const h3 = document.getElementById("round");
        form.removeChild(h3);
        const title = document.getElementById("title");
        form.removeChild(title);
        const reset = document.createElement("form");
        form.appendChild(reset);
        const newButton = document.createElement("button");
        reset.appendChild(newButton);
        newButton.id = ("Button");
        newButton.className = ("Button");
        newButton.setAttribute('type', 'submit');
        newButton.style.minWidth = "300px";
        newButton.innerText = "Play again";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        const h = document.createElement("h3");
        h.style.textAlign = "center";
        h.style.padding = "8px";
        form.appendChild(h);
        if ((parseInt(document.getElementById("compResult").innerText)) > (parseInt(document.getElementById("humResult").innerText))) {
            h.style.backgroundColor = "darkred";
            h.innerText = "You Lost!! :("
            h.style.minWidth = "900px";
            h.style.color = "white"
        } else if ((parseInt(document.getElementById("compResult").innerText)) < (parseInt(document.getElementById("humResult").innerText))) {
            h.style.backgroundColor = "green";
            h.innerText = "You Won!! ;)"
            h.style.minWidth = "900px";
            h.style.color = "white"
        } else {
            h.style.backgroundColor = "darkgrey";
            h.innerText = " It's a Draw :|"
            h.style.minWidth = "900px";
            h.style.color = "white"
        };
        out("Scissors");
        out("Rock");
        out("Paper");
    };
};

function removeForm() {
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const form = document.getElementById("form");
    form.removeChild(input);
    const h3 = document.createElement("h3");
    form.appendChild(h3);
    document.getElementById("title").innerText = "Round";
    h3.id = "round";
    form.removeChild(button);
    document.getElementById("round").textContent = 1 + " of " + rounds;
    form.style.flexDirection = "column";
};

function game(humpick) {
    let hum = 0;
    let comp = 0;
    let result = playRound(humpick, computerPlay());
    if (result == "comp") {
        document.getElementById("compResult").innerText++;
        comp++;
        round++;
    } else if (result == "hum") {
        document.getElementById("humResult").innerText++;
        hum++;
        round++;
    };
    if (round <= rounds && result !== "None") {
        document.getElementById("round").innerText = round + " of " + rounds;
    };
    endGame();
};

function hover(chosen) {
    if ((chosen === "Scissors" || chosen === "Rock" || chosen === "Paper") && (round <= rounds)) {
        const input = document.getElementById("input");
        if (input == null) {
            let item = document.getElementById(chosen);
            item.classList.add("hover");
        };
    };
};

function out(chosen) {
    if (chosen === "Scissors" || chosen === "Rock" || chosen === "Paper") {
        let item = document.getElementById(chosen);
        item.classList.remove("hover");
    };
};

function choice(chosen) {
    if ((chosen === "Scissors" || chosen === "Rock" || chosen === "Paper") && round <= rounds) {
        const input = document.getElementById("input");
        if (input == null) {
            let item = document.getElementById(chosen);
            item.classList.add("click");
            return game(chosen);
        };
    };
};
function clickup(chosen) {
    if (chosen === "Scissors" || chosen === "Rock" || chosen === "Paper") {
        let item = document.getElementById(chosen);
        item.classList.remove("click");
        console.log(item.className);
    };
};