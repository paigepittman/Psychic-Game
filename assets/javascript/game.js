var pastGuesses = [];

var wins = 0;

var losses = 0;

var guess = "";

var	choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var comp = "";

var guessesLeft = 5;

var random = "";

//Game Start: comp chooses random letter, wins, guesses, losses displayed
function start() {
comp = choice[Math.floor(Math.random() * choice.length)];






}
start();

//key is pressed

document.onkeyup = function() {
	guess = event.key;
	//if key is new, key is put into array of guesses 
	if (pastGuesses.indexOf(guess) === -1) {
		
		pastGuesses.push(guess);

		document.getElementById("guesses").innerHTML = pastGuesses;
		//if key is correct, wins go up, game resets
		if (guess === comp) {

			wins++;

			document.getElementById("wins").innerHTML = wins;
			
			document.getElementById("message").innerHTML = "I see a bright future for you!";


			document.getElementById("image").innerHTML = comp;

			reset();
		}
		//if key is incorrect and user still has guesses, guesses goes down
		else if (guessesLeft > 1) {

			guessesLeft--;

			document.getElementById("guessesLeft").innerHTML = guessesLeft;

		}

		//if no guesses remain, losses goes up and game resets
		else {

			losses++;



			document.getElementById("losses").innerHTML = losses;

			
			document.getElementById("message").innerHTML = "Looks like you don't have the Seeing Eye";


			document.getElementById("image").innerHTML = comp;


			reset();
			
		}


	} 
console.log(comp);
console.log("guess: ", guess);
console.log("wins:", wins);
console.log("losses: ",losses);
console.log("guesses left: ", guessesLeft);
		
}



	function reset() {
	guessesLeft = 5;
	pastGuesses = [];
	document.getElementById("guesses").innerHTML = "";
	//document.getElementById("message").innerHTML = "";
	//document.getElementById("message").style.visibility = "hidden";
	start();

}

document.getElementById("reset").onclick(reset);




