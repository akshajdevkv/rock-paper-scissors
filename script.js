function getComputerChoice(){
    let  choice =  Math.floor(Math.random()*3);
    if (!choice){
        return "rock";
    }else if (choice ==1){
        return "paper";
    }else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("enter your value");
    choice = choice.toLowerCase();
    return choice;
    
}
function playRound(humanChoice,computerChoice){
        if(humanChoice == "rock"){
            if(computerChoice =="rock"){
                console.log("It's a draw");
            }
            else if(computerChoice =="paper"){
                console.log("You lose! Paper beats rock");
                computerScore +=1;
            }
            else{
                console.log("You win! Rock beats scissors");
                humanScore +=1;    
            }
        }
        else if(humanChoice == "paper"){
            if(computerChoice =="rock"){
                console.log("You win! Paper beats rock");
                humanScore +=1; 
            }
            else if(computerChoice =="paper"){
                console.log("It's a draw");
              
            }
            else{
                console.log("You lose! scissors beats paper");
                computerScore +=1;    
            }
        }
        else if(humanChoice == "scissors"){
            if(computerChoice =="rock"){
                console.log("You lose! rock beats scissors");
                computerScore +=1; 
            }
            else if(computerChoice =="paper"){
                console.log("You win! Paper beats scissors");
                humanScore +=1;
                
              
            }
            else{
                console.log("It's a draw");
                    
            }
        }
        

}
let humanScore=0;
let computerScore = 0;
function playGame(){
    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Human Score is ${humanScore} and Computer Score is ${computerScore}`);
 
}
playGame();
playGame();
playGame();
playGame();
playGame();