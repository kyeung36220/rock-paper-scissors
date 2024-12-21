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

function getHumanChoice() {
    while (true) {
        s = prompt("Rock, Paper, or Scissors?");
        choice = s.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "rock") {
            break;
        }
    }
    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round_number = 1;
    function playRound(humanChoice, computerChoice) {
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
            console.log(`Tie! Both players picked ${capitalizeFirstLetter(humanChoice)}`);
        }
    
        else if (playerResult === "lose") {
            console.log(`You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`);
            computerScore++;
        }
    
        else if (playerResult === "win") {
            console.log(`You Win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`);
            humanScore++;
        }
    
    }

    while (round_number <= 5) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
        round_number++;
    }
    
    if (humanScore === computerScore) {
        console.log(`Game is a Tie!`)
    }

    else if (humanScore > computerScore) {
        console.log(`Winner is Player!`)
    }

    else if (computerScore > humanScore) {
        console.log(`Winner is Computer!`)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

playGame()

