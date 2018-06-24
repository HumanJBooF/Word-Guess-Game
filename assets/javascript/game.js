
    //Global Variables
    //Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks
    var peakWords = 
        [
            'woodsman',
            'agent dale cooper',
            'log lady',
            'laura palmer',
            'evil coop',
            'dougie jones',
            'albert',
            'gordon cole',
            'major briggs',
            'audrey horne',
            'james hurley',
            'one armed man',
            'diane',
            'norma jennings',
            'big ed',
        ];
        //Empty to store the random gen word
        var currentWord = "";
        //holds letters of currentWord
        var currentLetters = [];
        //holds number of "blanks"
        var numBlanks = 0;
        //empty to store answer
        var answer = [];    
        //empty to hold all wrong guesses, and show user guess
        var wrongLtrs = [];    

        //Stats
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 10;
        

 window.onload = function() {
    document.getElementById("underscore").innerHTML = answer.join(" ");
    document.getElementById("remaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = "Wins " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses " + " " + losses;


 }


        
     function startGame() {
		//Computer selects a word from the array
		currentWord = peakWords[Math.floor(Math.random() * peakWords.length)];
			console.log(currentWord);

		//Grab the current word and break it apart into each individual letter
		currentLetters = currentWord.split("");
			console.log(currentLetters);

		//Grab the current word and get the number of letters in it
		numBlanks = currentLetters.length;
            console.log(numBlanks);
            
            guessesRemaining = 10;
            wrongLtrs = [];
            answer = [];

            for(i = 0; i < numBlanks; i++) {
                answer.push("_");
                
            }
    

    

        }

        


        
        
        
        
        
        
        
        function compare(letter) {
             //check it pressed key is a letter
             if(event.keyCode >= 65 && event.keyCode <= 90) { //if its part of the alphabet 

                //check if the letter is in the word
                    var correctLetter = false; 
    
                    for(var i = 0; i < numBlanks; i++) { 
                        if(currentWord[i] == letter) {
                            correctLetter = true;
                        }
                    }
                   //check where letter is in word
                    if(correctLetter) {
                        for( var i = 0; i < numBlanks; i++ ) {
                            if(currentWord[i] == letter) {
                                answer[i] = letter;
                            }
                        }
                    }
                    //if it is not in the word
                    else {
                        wrongLtrs.push(letter);
                        guessesRemaining--
                    }
                }
                console.log(answer);
            
               }
      

               function rounds() {
                   
                
                document.getElementById("remaining").innerHTML = "Guesses remaining " + " " + guessesRemaining;
                document.getElementById("underscore").innerHTML = answer.join(" ");
                document.getElementById("guessed").innerHTML = "Already used: " + " " + wrongLtrs.join(" ");
    
                if(currentLetters.toString() == answer.toString()) {
                    wins++;
                    alert("Have a nice warm slice of cherry pie and hot cup of black coffee!");
                    
                    //update wins
                    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
                    
                    startGame();
                    
                }
                else if (guessesRemaining == 0) {
                    losses++;
    
                    
                // Update the wins in the HTML doc
                document.getElementById("losses").innerHTML = "Losses: " + " " + losses;
    
                
                startGame();
                document.getElementById("guessed").innerHTML = "Letters Already Guessed:" + " " + " ";
    
                }
           } 
        
            



    startGame(); 
            
       //get input on what keys are being pressed
       document.onkeyup = function(event) {
   
        var ltrsGuess = String.fromCharCode(event.keyCode).toLowerCase();
            
            compare(ltrsGuess);
            rounds();
            
       }
    
