const choiceBtn = document.querySelectorAll(".choice-user");
const choiceCom = document.querySelectorAll(".choice-com")
const resultText = document.querySelector("#resultText");
let player; //untuk menampung text pilihan user
let computer; //untuk menampung pilihan computer
let result; //untuk menampung hasil

let current;
let currentCom;

choiceBtn.forEach((button, i) => button.addEventListener("click", () => {
    player = button.getAttribute('data-choice')
    if (player == button.getAttribute('data-choice')) {
        if (!current) {
            current = choiceBtn[i]
            current.style.backgroundColor = "red";
        } else {
            current.style.backgroundColor = "white"
            current = choiceBtn[i]
            current.style.backgroundColor = "red";
        }

    }
    computerTurn();
    choiceCom.forEach((button, i) => {
        computerChoice = button.getAttribute('data-choice');
        if (computerChoice == computer) {
            if (!currentCom) {
                currentCom = choiceCom[i]
                currentCom.style.backgroundColor = "red";
            } else {
                currentCom.style.backgroundColor = "white"
                currentCom = choiceCom[i]
                currentCom.style.backgroundColor = "red";
            }
        }
    })
    resultText.textContent = checkWinner(player, computer);
    style(resultText.textContent)
}));

function computerTurn() {
    const num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}

function checkWinner(player, computer) {
    if (player == computer) {

        return "Draw";
    } else if (computer == "rock") {
        return (player == "paper") ? "Player Win" : "Player Lose"
    } else if (computer == "paper") {
        return (player == "scissors") ? "Player Win" : "Player Lose";
    } else if (computer == "scissors") {
        return (player == "rock") ? "Player Win" : "Player Lose";
    }
}
function style(resultText) {
    var result = document.getElementById("resultText")
    if (resultText == "Draw") {
        result.style.color = "yellow"
    } else if (resultText == "Player Win") {
        result.style.color = "green"
    } else if (resultText == "Player Lose") {
        result.style.color = "red"
    }
}

