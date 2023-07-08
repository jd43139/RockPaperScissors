function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return options[random];
}
function getPlayerChoice(){
    let playerChoice=prompt("Please type Rock, Paper, or Scissors","Rock")
    return playerChoice.toLowerCase()
}
let computerScore=0
let playerScore=0
function playRound(computerSelection, playerSelection){
    
    if(computerSelection==playerSelection){
        console.log("Tied!")
    }else{
        if(computerSelection=="rock" && playerSelection=="scissors"){
            computerScore+=1
            console.log("You Lose")
        }else if(computerSelection=="rock" && playerSelection=="paper"){
            playerScore+=1
            console.log("You Win")
        }else if(computerSelection=="scissors" && playerSelection=="paper"){
            computerScore+=1
            console.log("You Lose")
        }else if(computerSelection=="scissors" && playerSelection=="rock"){
            playerScore+=1
            console.log("You Win")
        }else if(computerSelection=="paper" && playerSelection=="rock"){
            computerScore+=1
            console.log("You Lose")
        }else{
            playerScore+=1
            console.log("You Win")
        }
    }
}

function game(){
    let rounds=5
    while(rounds>0){
        console.log(playRound(getComputerChoice(),getPlayerChoice()))
        rounds-=1
    }
    console.log(playerScore, computerScore)
}
game()
