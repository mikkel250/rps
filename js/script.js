var computerSelection;
var selection;
var playerSelection //= selection;
var computerScore = 0;
var playerScore = 0;
var valid = false;
/*
function getPlayerSelection() {
	var selection = window.prompt("Choose what to play: \nRock, Paper, or Scissors.\nIncorrect or invalid entries will result in a loss.").toLowerCase();
	alert(`You chose: ${selection}\n`)
	playerSelection = selection;	
}


/* removing vuser alidation due to time spent attempting to get it working.
	Will probably add later when I have a bit more experience.
	comments/critique/suggestions welcome

	do {	 
	 if (playerSelection != "rock"&& "paper" && "scissors") {
	 	alert(`Invalid Choice! Please Enter only one of the following: Rock, paper, scissors`);	 	
	 } else {
		valid = true;
		alert(`You chose: ${playerSelection}`);
	 }	 
		}
	while (!valid); 
	*/	
	/*
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
		alert(`Computer chose: ${computerSelection}`);
		return computerSelection;		
	}	

getPlayerSelection();
computerPlay();

	function play(playerSelection, computerSelection) {
		if (
			(playerSelection == "rock" && computerSelection == "scissors") || 
			(playerSelection == "paper" && computerSelection == "rock") ||
			(playerSelection == "scissors" && computerSelection == "paper")
			) {
			playerScore++;
		alert(`You win! \n ${playerSelection} beats ${computerSelection}!`)
	//	debugger;
		} else if (playerSelection === computerSelection) {
			alert(`This round was a draw!`);
		} else {
			computerScore++;
			alert(`You lose! \n ${playerSelection} loses to ${computerSelection}`)
		}
		alert(`The score so far is: \n Player    Computer \n ------------------- \n     ${playerScore}      ${computerScore}`);	
	}

play(playerSelection, computerSelection);
// console.log(play(playerSelection, computerSelection));
// Play five rounds if user answers yes to prompt
function playFive() {	
	 if (confirm(`Do you want to play 5 rounds?`)) { //prompt user, yes will execute the for loop 5x
		for (let i = 0; i <= 5; i++) { 
		getPlayerSelection();
		computerPlay();
		play(playerSelection, computerSelection);
		}
	} else { // A "no" answer to the confirm prompt will return the alert (a retrun also exits the function)
		return alert("End Game.")
		
	}
}
playFive();
*/
