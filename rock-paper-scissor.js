
document.addEventListener('DOMContentLoaded', function(){

let playerScore = 0;
let computerScore = 0;

    function getComputerChoice(){
let choice = Math .floor(Math.random() *3);
if (choice === 0){
    return "rock"
}else if(choice === 1){
    return "paper"
}else{
    return "scissor"
}


}
getComputerChoice();

function play(playerSelection,computerSelection){
  
    playerSelection=playerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "paper"){
        return "you lost! paper beat rock"
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "you win! paper beat rock"
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "you win! rock beat scissor"
    }else if(playerSelection=== "scissor" && computerSelection === "rock"){
        return "you lost! rock beat scissor"
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "you lost! scissor beat paper"
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "you win! scissor beat paper"
    }else {
        return "tie! try again"
    }
}

function updScore(resultText){
    if (resultText.includes("you win")){
        playerScore++
    }
    else if(resultText.includes("you lost")){
        computerScore++
    }
}

function winner(){
    if(playerScore == 5){
        return "Congratulation, you are the winner!"
    }
    if(computerScore == 5){
        return "sorry, you lost"
    }
}

function updateDisplay(){
    const score = document.querySelector('.score')
    const scoreUpd = document.querySelector('.scoreUpd')

    updScore(resultText);

    const winnerMessage= winner();
    if(winnerMessage){
        score.textContent = winnerMessage
        playerScore = 0;
        computerScore = 0;
    } else {
        score.textContent = ` player: ${playerScore} - computer: ${computerScore}`
    }
    scoreUpd.textContent = resultText

      
}



function game(){

    const button = document.querySelectorAll("#button button");
    
    
    button.forEach((button) => {
        button.addEventListener('click' , () => {
                const playerSelection = button.id
                const computerSelection = getComputerChoice()
                resultText = (play(playerSelection, computerSelection)) 
                updateDisplay()                 
    });
    })
} 
game()
})


