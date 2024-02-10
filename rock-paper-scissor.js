

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
   
    
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "you lost! paper beat rock"
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "you win! paper beat rock"
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "you win! rock beat scissor"
    }else if(playerSelection==="scissor" && computerSelection === "rock"){
        return "you lost! rock beat scissor"
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "you lost! scissor beat paper"
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "you win! scissor beat paper"
    }else {
        return "tie! try again"
    }
}


function game(){
   
    for(let i =1 ; i<=5; i++){
    playerSelection = prompt("Please choose either one (rock,paper or scissor)","rock").toLowerCase()
    computerSelection = getComputerChoice()
    console .log (play(playerSelection, computerSelection))
    
    }
} 
game()
