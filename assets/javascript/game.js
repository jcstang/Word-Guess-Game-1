// start the game with a score of zero
var wins = 0;
var losses = 0;
// words to guess will be selected from here
var wordSelectionArray = [
    "adventure", "bandit", "battleaxe", "battlefield", "beholder", "bugbear", "castle", "catapult", "cleric", "dragon", "dungeon",
    "fairy", "fireball", "giant", "goblin", "knight", "magic", "monster", "necromancer", "owlbear", "paladin", "potion", "quarterstaff",
    "sorcerer", "spells", "sword", "vampire", "warlock", "wizard", "zombie"]
//variable to hold number of guesses remaining
var guessesRemaining = 12;
//variable to hold the randomly selected word
var selectedWord;
//variable to store number of blanks
var blanks = 0;
//var to store blanks with the correct word
var blankAndCorrect = [];
//var to hold the split out array of the randomly selected word. 
var letters = [];
//var to hold the incorrect letter guesses when input by the user.
var wrongGuess = [];


function game() {
    getWord();
    wordSplit();
    makeBlanks();
    guessesLeft();
    totalWins();
    console.log(selectedWord);
    console.log(letters);
    console.log(blanks);
    console.log(blankAndCorrect);
    console.log(guessesRemaining);

};



//function to choose a word from the array
function getWord() {
    wordInt = Math.floor((Math.random)() * wordSelectionArray.length);
    selectedWord = wordSelectionArray[wordInt];
}
//funciton to split the random word into an array of letters
function wordSplit() {
    letters = selectedWord.split("");
};

function makeBlanks() {
    blanks = selectedWord.length;
    for (var i = 0; i < blanks; i++) {
        blankAndCorrect.push("_");
    } document.getElementById("current-word").innerHTML = " " + blankAndCorrect.join(" ");
};
//function to display the guesses remaining
function guessesLeft() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
};

//function to display the current score
function totalWins() {
    document.getElementById("wins").innerHTML = wins;
};

//check and compare function
function checkInput(letters) {
    letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] == letterInWord) {
            letterInWord = true;
        }
    } if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] == letterInWord) {
                blankAndCorrect[i] = letterInWord;
            }
        }
    } else {
        wrongGuess.push(letterInWord);
        guessesRemaining--;
    }
};

//function to start the game over
function reset() {
    guessesRemaining = 12;
    blanksAndCorrect = [];
    wrongGuess = [];
    game();
};

//function to check wins/losses
function completeGame () {
    if (letters.toString() == blankAndCorrect.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
    } else if (guessesRemaining === 0) {

    }
}



game();

document.onkeyup = function (event) {
    guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkInput(guesses);
    // winLossCompare();
    console.log(guesses);
    document.getElementById("letters-guessed").innerHTML = " " + wrongGuess.join(" ");
}