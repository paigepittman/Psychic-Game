var pastGuesses = [];
var wins = 0;
var losses = 0;
var guess = "";
var	choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var comp = "";
var guessesLeft = 5;

//computer chooses random letter
function start() {
comp = choice[Math.floor(Math.random() * choice.length)];


}

//key is pressed

document.onkeyup = function() {
	guess = event.key;
	//if key is new, key is put into array of guesses 
	if (pastGuesses.indexOf(guess) === -1) {
		
		pastGuesses.push(guess);
		//if key is correct, wins go up, game resets
		if (guess === comp) {
			wins++;
			reset();
		}
		//if key is incorrect and user still has guesses, guesses goes down
		else if (guessesLeft > 1) {
			guessesLeft--;
		}

		//if no guesses remain, losses goes up and game resets
		else {
			losses++;
			reset();
		}


	} 
console.log("comp: ",comp);
console.log("guess: ", guess);
console.log("wins:", wins);
console.log("losses: ",losses);
console.log("guesses left: ", guessesLeft);
		
}



function reset() {
	guessesLeft = 5;
	pastGuesses = [];
	start();

}

