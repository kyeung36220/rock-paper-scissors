let humanScore = 0;
let computerScore = 0;
let win_amount = 5

function getComputerChoice() {
    let i = Math.random();
    if (i < (1/3)) {
        return "rock";
    }

    else if (i < (2/3)) {
        return "paper";
    }

    else {
        return "scissors";
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playRound(humanChoice, computerChoice) {
    
    playerResult = ""

    if (humanChoice === computerChoice) {
        playerResult = "tie";
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        playerResult = "win";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        playerResult = "win";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        playerResult = "win";
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        playerResult = "lose";
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        playerResult = "lose";
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        playerResult = "lose";
    }

    if (playerResult === "tie") {
        gameText.textContent = `Tie! Both players picked ${capitalizeFirstLetter(humanChoice)}`;
    }

    else if (playerResult === "lose") {
        gameText.textContent = `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`;
        computerScore++;
    }

    else if (playerResult === "win") {
        gameText.textContent = `You Win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
        humanScore++;
    }

    if (humanScore == win_amount) {
        gameText.textContent = `Winner is Player!`
        humanScore = 0
        computerScore = 0
    }

    else if (computerScore == win_amount) {
        gameText.textContent = `Winner is Computer!`
        humanScore = 0
        computerScore = 0
    }

    playerScoreText.textContent = `Player Score: ${humanScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
}

const buttons = document.querySelectorAll("button");

function buttonClicked(e) {
    const humanChoice = e.target.className
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}

buttons.forEach((button) => {
    button.addEventListener("click", buttonClicked);
});

const gameText = document.querySelector(".gameText")
const playerScoreText = document.querySelector(".playerScoreText")
const computerScoreText = document.querySelector(".computerScoreText")