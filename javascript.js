let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice =["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultDiv = document.querySelector("#results");
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie! you both chose " + playerSelection;
    } else if ((playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "paper") ) {
                humanScore++
                result = "You win!! " + playerSelection + " beats " + computerSelection + "!";
    } else {
            computerScore++
            result = "You Lose!! " + computerSelection + " beats " + playerSelection + "!";
    }

    result += " \n Player: " + humanScore + " | Computer: " + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win!" : "Computer wins the game.";
        result += '\n' + winner;
    }
    resultDiv.textContent = result;
};


 const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
}) 



