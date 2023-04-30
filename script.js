function getComputerChoice() {
    let arrChoices = ["rock", "paper", "scissors"]

     let randomize = arrChoices[Math.floor(Math.random() * 3)];
     return randomize;
}
function playRound(playerSelection, computerSelection){
   playerSelection

    if (playerSelection == computerSelection){
        return  "draw!";
}
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "you lose, paper beats rock!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "you win, rock beats scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "you lose, scissors beats paper!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        return "you lose, rock beats paper!";
        }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "you win, scissors beats paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "you lose, rock beats scissors!";
    }


}


const playerSelection = prompt("rps?")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));