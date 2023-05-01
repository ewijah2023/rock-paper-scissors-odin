

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
 const choice = options[Math.floor(Math.random() * options.length)];
 return choice;
}



function checkWinner(playerSelection, computerSelection) {
 if (playerSelection == computerSelection) {
    return "Tie"
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
        return "It's a tie!"
    }
    else if (result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
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
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player")
        scorePlayer++;
        else if ((checkWinner(playerSelection, computerSelection) == "Computer")) {
            scoreComputer++;
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

game()