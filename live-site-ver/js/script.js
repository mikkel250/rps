var win = `You win this round!`;
var draw = `This round was a draw!`;
var loss = `You lose this round!`;
var computerSelection = "";
var selection;
var playerSelection = "";
var computerScore = 0;
var playerScore = 0;
var roundCounter = 0;
const buttons = document.querySelectorAll('button');

window.onload = function () { alert(`Welcome to the Rock, Paper, Scissors game! \n First player to reach 5 points wins the game. \n \n Click OK to close this window and begin!`); }

function assignPlayerSelection(id) {
  playerSelection = id;
}

buttons.forEach((button) => {
    button.addEventListener('click', function() {
      assignPlayerSelection(this.id);
      playerChoiceTextArea.textContent = playerSelection;
      computerPlay();
      play(playerSelection, computerSelection);
      checkScore(playerScore, computerScore);
    });
});


 	function computerPlay() {
 		// debugger;
		let computerChoice = Math.floor(Math.random() * 3 );
		if (computerChoice == 1) {
		computerSelection = "rock";
		} else if (computerChoice == 2) {
		computerSelection = "paper";
		} else {
		computerSelection = "scissors";
		}
		computerChoiceTextArea.textContent = computerSelection;
	}	


	function play(playerSelection, computerSelection) {
		if (
			(playerSelection == "rock" && computerSelection == "scissors") || 
			(playerSelection == "paper" && computerSelection == "rock") ||
			(playerSelection == "scissors" && computerSelection == "paper")
			) {
			playerScore++;			
		roundNum.textContent = win;	
		} else if (playerSelection === computerSelection) {			
			roundNum.textContent = draw;
		} else {
			computerScore++;
			roundNum.textContent = loss;
		}
		playerScoreTextArea.textContent = playerScore;
		computerScoreTextArea.textContent = computerScore;

	}

function checkScore (playerScore, computerScore) {
			if (playerScore == 5 && playerScore > computerScore) {
				if (confirm(`You win! You've reached ${playerScore} points! Click OK to begin a new game, or cancel to keep playing this one.`)) {
					window.location.reload();
				}
			} else if (computerScore == 5 && computerScore > playerScore) {
				if (confirm(`You Lose! The computer has reached ${computerScore} points! Click OK to begin a new game, or cancel to keep playing this one.`)) {
					window.location.reload();
				}			
			} else {
				return;
			}

}
