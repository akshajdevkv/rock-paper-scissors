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

function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    let resultText = '';
    if (playerSelection === computerSelection) {
      resultText = "It's a draw!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      resultText = `You win! ${playerSelection} beats ${computerSelection}`;
        updateScore('player');
    } 
    else {
        updateScore('computer');
      resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  
    document.getElementById('result').textContent = resultText;
  }
const buttons = document.querySelectorAll('button[data-choice]');
buttons.forEach(button => {
button.addEventListener('click', () => {
    console.log("Hello");
    const userChoice = button.dataset.choice;
    //  playRound(userChoice);
    console.log(userChoice);
    });
}); 
 
 

  let playerScore = 0;
  let computerScore = 0;
  
  function updateScore(winner) {
    if (winner === 'player') playerScore++;
    if (winner === 'computer') computerScore++;
  
    document.querySelector('#score').textContent =
      `Player: ${playerScore} | Computer: ${computerScore}`;
  }  
 
 