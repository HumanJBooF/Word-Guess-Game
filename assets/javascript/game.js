
    //Global Variables
    //Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks
    var peakWords = 
        [
            'woodsman',
            'agentdalecooper',
            'loglady',
            'laurapalmer',
            'evilcoop',
            'dougiejones',
            'albert',
            'gordoncole',
            'majorbriggs',
            'audreyhorne',
            'jameshurley',
            'onearmedman',
            'diane',
            'normajennings',
            'biged',
        ];

        //Empty to store the random  peaksword
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
        var guessesRemaining = 12;
        
//load with webpage
 window.onload = function() {
    document.getElementById("underscore").innerHTML = answer.join(" ");
    document.getElementById("remaining").innerHTML ="guesses remaing " + guessesRemaining;
    document.getElementById("wins").innerHTML = "Wins " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses " + " " + losses;
    document.getElementById("press").innerHTML = "Press any key to get started!";
    
}


    //function for game start and reset
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
            
            guessesRemaining = 12; //sets the number to 12
            wrongLtrs = [];        //empty array for the wrong guesse
            answer = [];           //empty array for the underscores

            for(i = 0; i < numBlanks; i++) {
                answer.push("_");
                }

           }

           
            //function to compare user guess to word
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
                   
                    //if it is not in the word push to wrongLtrs
                    else {
                        wrongLtrs.push(letter);
                        guessesRemaining--
                    }
                }
                console.log(answer);
            
               }
      
               //function to update wins and losses
               function rounds() {
                   
                
                document.getElementById("remaining").innerHTML = "Guesses remaining " + " " + guessesRemaining;
                document.getElementById("underscore").innerHTML = answer.join(" ");
                document.getElementById("guessed").innerHTML = "Already used: " + " " + wrongLtrs.join(" ");
    
                
                if(currentLetters.toString() == answer.toString()) {
                    wins++;
                    document.getElementById("coffee").play();
                    alert("Have a nice warm slice of cherry pie and hot cup of black coffee!");
                    
                    //update wins
                    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
                    
                    startGame();
                    
                }
                else if (guessesRemaining == 0) {
                    losses++;
                    document.getElementById("amateur").play();
                    alert("The evil spirit Bob took over your soul... you lose!");
                    
                    startGame();


                // Update the losses in the HTML doc
                document.getElementById("losses").innerHTML = "Losses: " + " " + losses;
                    
                
                
                document.getElementById("guessed").innerHTML = "Letters Already Guessed:" + " " + " ";
                
                }
           } 
        


    startGame(); 
    
       //get input on what keys are being pressed
       document.onkeyup = function(event) {
        //put the key pressed into ltrsGuess
        var ltrsGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //send the letter to the compare loop
        compare(ltrsGuess);
        rounds(); 
            
       }
    
