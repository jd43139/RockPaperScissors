function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random()*3)
    return options[random];
}
let divResult = document.querySelector("#result")
let playerChoice=""
let computerChoice = ""
let computerResults = document.querySelector("#computer-score")
let playerResult = document.querySelector("#player-score")
let roundResults = document.querySelector("#round-result")
let computerChoiceDiv = document.querySelector("#computer-choice")
let playerChoiceDiv = document.querySelector("#player-choice")
const buttons = document.querySelectorAll("#choice")


buttons.forEach(button => button.addEventListener("click", function(){
    console.log("active")
    playerChoice = button.classList[0]
    computerChoice = getComputerChoice()
    let round = playRound(playerChoice,computerChoice)
    console.log(`ROUND: ${round}`)
   
    if(!round)return ;/*LOOK AT LINE 63*/
    computerResults.textContent=computerScore
    playerResult.textContent=playerScore
    roundResults.textContent=round
    playerChoiceDiv.textContent = playerChoice
    
    computerChoiceDiv.textContent = computerChoice 

    console.log(` player:${playerChoice}`)
    console.log(`Computer : ${computerChoice}`)
    


   
    
   
    
    
    
}))


function playerWinsround(playerChoice, computerChoice){
    if((computerChoice=="rock" && playerChoice=="scissors" ||
    (computerChoice=="scissors" && playerChoice=="paper")) ||
     (computerChoice=="paper" && playerChoice=="rock")){
        return false
    }else{
        return true
    }

}

let computerScore=0
let playerScore=0

function playRound(playerChoice, computerChoice){
    let check = playerWinsround(playerChoice, computerChoice)
    let statment = ""
    console.log(`SCORE TOP ${playerScore} ${computerScore}`)
    if(playerScore>=5 || computerScore>=5)return;/* This condition Will be fired when score top become 5*/
    if(computerChoice==playerChoice){
        statment =  `Tied! `
    }else{
        if(check){
            playerScore+=1
            statment = `You Win!`
            
        }else{
            computerScore+=1
            statment = `You Lose!`
        }
        
        
    }
    console.log(`SCORE BOTTOM ${playerScore} ${computerScore}`)
    if(playerScore>=5 || computerScore>=5){/**Final result will be displyed once either player score five */
        resetButton.style.display="block"
        return finalResult()
    }
        
    return statment
        
    
}
function finalResult(){
    if(playerScore==computerScore){
        return `DRAW!`
    }else{
        if(playerScore<computerScore){
            return `You LOST!`
        }else{
            return `YOU WON!`
        }
    }

}
let resetButton = document.querySelector("#resetButton")
resetButton.style.display = "none"
function resetButtonf(){
    playerScore = 0
    computerScore = 0
    computerResults.textContent= computerScore
    playerResult.textContent=playerScore
    roundResults.textContent=""
    playerChoiceDiv.textContent = ""
    
    computerChoiceDiv.textContent = ""
    resetButton.style.display = "none"


}
resetButton.addEventListener("click", resetButtonf)
/*function isValidAnswer(){
    playerChoice=getPlayerChoice()
    if(playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors"){
        return true
    }else{
        return false
    }

}*/


//buttons.forEach(button => button.addEventListener("click", () => console.log(test())))