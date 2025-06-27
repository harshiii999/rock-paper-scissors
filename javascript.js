let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice =["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}



function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playGame(){
    function playRound(humanChoice, computerChoice) {
        console.log(computerChoice, humanChoice);
        if (humanChoice === computerChoice) {
            console.log("Its a tie");
        } else if ((humanChoice === "paper" && computerChoice === "rock") || 
                 (humanChoice === "rock" && computerChoice === "scissors") ||
                 (humanChoice === "scissors" && computerChoice === "paper") ) {
                    humanScore++
                    console.log("You win!! " + humanChoice + " beats " + computerChoice + "!");
        } else {
                computerScore++
                console.log("You Lose!! " + computerChoice + " beats " + humanChoice + "!");
        }
    
        console.log("Human: " + humanScore + " | Computer: " + computerScore)
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);    
}

playGame();
playGame();
playGame();
playGame();
playGame();


