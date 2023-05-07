const container = document.querySelector("#gameDiv");

let scorePlayer = 0;
let scoreComputer = 0;

const result2 = document.createElement("p");
result2.classList.add("outcome");

const playerDiv = document.querySelector("#player");
const playerText = document.createElement("p");
playerText.classList.add("playerScore");
const computerDiv = document.querySelector("#computer");
const computerText = document.createElement("p");
computerText.classList.add("computerScore");

const options = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice();
//                  
const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  
});
//////////////////////////////////////////////////////////////////////////
//                  paper button
/////////////////////////////////////////////////////////////////////////
const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  
});
//                   scissors button
const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  
});

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
   
   
   
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       return "Tie";
    }
    else if(
       (playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "paper" && computerSelection == "rock") ||
       (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
       return "Player";
    }
    else {
       return "Computer";
   }
   
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        
       result2.textContent = "It's a tie";
        gameDiv.appendChild(result2);
    }
    else if (result == "Player"){
        scorePlayer++;
        playerText.textContent = "Player wins! Player score is " + scorePlayer;
        playerDiv.appendChild(playerText);
         result2.textContent = " Player wins! Player score is " + scorePlayer;
         gameDiv.appendChild(result2);
         result2.textContent = " Player wins! Player score is " + scorePlayer;
         gameDiv.appendChild(result2);
    }
    else {
        scoreComputer++;
         result2.textContent = " Player loses! Computer score is " + scoreComputer;
         gameDiv.appendChild(result2);
         computerText.textContent = " Player loses! Computer score is " + scoreComputer;
        computerDiv.appendChild(computerText);
    }
    

}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("rock, paper, or scissors?");
        if (choice == null) {
            continue;
        }
        const choiceLowercase = choice.toLowerCase();
        if (options.includes(choiceLowercase)){
            validatedInput = true;
            return choiceLowercase;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    while (scorePlayer < 5 && scoreComputer < 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
            console.log(scorePlayer); 
        }
        else if ((checkWinner(playerSelection, computerSelection) == "Computer")) {
            scoreComputer++;
            console.log(scoreComputer);
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer) {
        console.log("Player wins!");
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer wins!");
    }
    else {
        console.log("Tie!");
    }

}