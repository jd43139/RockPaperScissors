function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return options[random];
}
function playerSelection(){
    let playerChoice=prompt("Please type Rock, Paper, or Scissors","Rock")
    return playerChoice.toLowerCase()
}

function playRound()
