function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return options[random];
}
let playerChoice=""
function getPlayerChoice(){
    playerChoice=prompt("Please type Rock, Paper, or Scissors","Rock")
    return playerChoice.toLowerCase()
}
let computerScore=0
let playerScore=0
function playRound(computerSelection, playerSelection){
    
    if(computerSelection==playerSelection){
        return `Tied!\n Computer: ${computerSelection} Player: ${playerSelection}\nComputer Score: ${computerScore} Player Score: ${playerScore}`
    }else{
        if(computerSelection=="rock" && playerSelection=="scissors"){
            computerScore+=1
            return `You Lose\n Computer: ${computerSelection} Player: ${playerSelection}\n
        Computer Score: ${computerScore} Player Score: ${playerScore}`
        }else if(computerSelection=="rock" && playerSelection=="paper"){
            playerScore+=1
            return `You Win\nComputer: ${computerSelection} Player: ${playerSelection}\n
        Computer Score: ${computerScore} Player Score: ${playerScore}`
        }else if(computerSelection=="scissors" && playerSelection=="paper"){
            computerScore+=1
            return `You Lose\nComputer: ${computerSelection} Player: ${playerSelection}\n
        Computer Score: ${computerScore} Player Score: ${playerScore}`
        }else if(computerSelection=="scissors" && playerSelection=="rock"){
            playerScore+=1
            return `You Win\n Computer: ${computerSelection} Player: ${playerSelection}\n
        Computer Score: ${computerScore} Player Score: ${playerScore}`
        }else if(computerSelection=="paper" && playerSelection=="rock"){
            computerScore+=1
            return `You Lose\nComputer: ${computerSelection} Player: ${playerSelection}\nComputer Score: ${computerScore} Player Score: ${playerScore}`
        }else{
            playerScore+=1
            return `You Win\n Computer: ${computerSelection} Player: ${playerSelection}\n
        Computer Score: ${computerScore} Player Score: ${playerScore}`
        }
    }
}
function finalResult(){
    if(playerScore==computerScore){
        return `DRAW\nComputer Score: ${computerScore} | Player Score: ${playerScore}`
    }else{
        if(playerScore<computerScore){
            return `You LOST\nComputer Score: ${computerScore} | Player Score: ${playerScore}`
        }else{
            return `YOU WON\nComputer Score: ${computerScore} | Player Score: ${playerScore}`
        }
    }

}
function isValidAnswer(){
    playerChoice=getPlayerChoice()
    if(playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors"){
        return true
    }else{
        return false
    }

}
function game(){
    let rounds=5
    while(rounds>0){
        const computerChoice=getComputerChoice()
        if(isValidAnswer()){
            console.log(playRound(computerChoice,playerChoice))
            rounds-=1
        }else{
            alert("Type a valid choice")
        }
        
    }
    console.log(finalResult())
}
game()