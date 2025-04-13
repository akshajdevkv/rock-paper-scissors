 

function playRound(playerSelection) {
    console.log("input");
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    let resultText = '';
    if (playerSelection === computerSelection) {
      resultText = "It's a draw!";
        updateScore('draw')
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      resultText = `You win! ${playerSelection} beats ${computerSelection}`;
        updateScore('player');displayRoundWinner('win')
    } 
    else {
        updateScore('computer');
        displayRoundWinner('lose');
      resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if(playerScore === 5 || computerScore === 5){
     
        endGame(playerScore===5);
    }
  
     
  }
const buttons = document.querySelectorAll('button[data-choice]');
buttons.forEach(button => {
button.addEventListener('click', () => {
 
    const userChoice = button.dataset.choice;
     playRound(userChoice);
  
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
 function endGame(winner){
    const container = document.querySelector(".container");
    container.innerHTML = '';
    const title = document.createElement('h1');
    title.textContent = winner? "You are the winner🎉 ":"Computer is the winner 💀";
    container.appendChild(title);

 }
 function displayRoundWinner(result){
    const para = document.querySelector("#result");
    console.log(result);
    switch(result){
        case 'win':
            para.textContent = "You Win 🎉";
            break;
        case 'lose':
            para.textContent = "You Lose 💀";
            break;
        default:
            para.textContent = "It's a draw 🤝";
            break;
    }
     
     
 }