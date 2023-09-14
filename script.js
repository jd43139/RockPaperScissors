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


function playerWinsround(computerSelection, playerSelection){
    if((computerSelection=="rock" && playerSelection=="scissors" ||
    (computerSelection=="scissors" && playerSelection=="paper")) ||
     (computerSelection=="paper" && playerSelection=="rock")){
        return false
    }else{
        return true
    }

}

let computerScore=0
let playerScore=0

function playRound(computerSelection, playerSelection){
    
    if(computerSelection==playerSelection){
        return `Tied!\nComputer selected: ${computerSelection} You selected: ${playerSelection}\nComputer current Score: ${computerScore} | Your Current Score: ${playerScore}`
    }else{
        if(playerWinsround(computerSelection, playerSelection)){
            playerScore+=1
            return `You Win\nComputer selected: ${computerSelection} You selected: ${playerSelection}\nComputer current Score: ${computerScore} | Your Current Score: ${playerScore}`
            
        }else{
            computerScore+=1
            return `You Lose\nComputer selected: ${computerSelection} You selected: ${playerSelection}\nComputer current Score: ${computerScore} | Your Current Score: ${playerScore}`
        }
        
        
    }
}
function finalResult(){
    if(playerScore==computerScore){
        return `DRAW\nComputer Total Score: ${computerScore} | Your Total Score: ${playerScore}`
    }else{
        if(playerScore<computerScore){
            return `You LOST\nComputer Total Score: ${computerScore} | Your Total Score: ${playerScore}`
        }else{
            return `YOU WON\nComputer Total Score: ${computerScore} | Your  Total Score: ${playerScore}`
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
        if(playerScore>=5 || computerScore>=5){
            console.log(finalResult())
            return;
        }
        const computerChoice=getComputerChoice()
        if(isValidAnswer()){
            console.log(playRound(computerChoice,playerChoice))
           
        }else{
            alert("Type a valid choice")
        }
        
    
    
}
game()