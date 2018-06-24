
    //Global Variables
    //Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks
    var peakWords = 
        [
            'woodsman',
            'agent dale cooper',
            'Log Lady',
            'Laura Palmer',
            'Evil Coop',
            'Dougie Jones',
            'Albert',
            'Gordon Cole',
            'Major Briggs',
            'Audrey Horne',
            'James Hurley',
            'One Armed Man',
            'Diane',
            'Norma Jennings',
            'Big Ed',
        ];
        //Empty to store the random gen word
        var currentWord = "";
        //holds letters of currentWord
        var currentLetters = [];
        //holds number of "blanks"
        var numBlanks = [];
        //empty to store answer
        var answer = [];        

        //Stats
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 10;
        

        function gameStart() {

		//Computer selects a word from the array
		currentWord = peakWords[Math.floor(Math.random() * peakWords.length)];
			console.log(currentWord);

		//Grab the current word and break it apart into each individual letter
		currentLetters = currentWord.split("");
			console.log(currentLetters);

		//Grab the current word and get the number of letters in it
		numBlanks = currentLetters.length;
            console.log(numBlanks);
            
            wins = 0;
            wrongLtrs = [];
            answer = [];

            for(i = 0; i < numBlanks; i++) {
                answer.push("_");
                console.log(answer);
            }
    
            document.getElementsByClassName("underscore").innerHTML = answer.join(" ");
    
}
    gameStart();

       document.onkeyup = function(event) {

        var ltrsGuess = String.fromCharCode(event.keyCode).toLowerCase();
            console.log(ltrsGuess);
       }
           
