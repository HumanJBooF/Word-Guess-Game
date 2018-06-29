////////////////////////////////////////////////////////////////////
//Global Variable//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks/////////////////////////
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
window.onload = function () {
    document.getElementById("underscore").innerHTML = answer.join(" ");
    underscore.style.fontSize = '30px';
    document.getElementById("remaining").innerHTML = "guesses remaining " + guessesRemaining;
    document.getElementById("wins").innerHTML = "Wins " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses " + " " + losses;
    document.getElementById("press").innerHTML = "Press any key to get started!";
   



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
        document.getElementById("losing-image").setAttribute("src", "");
        
        for (i = 0; i < numBlanks; i++) {  //pushing out underscores the lenght of the currentWord
            answer.push("_");
        }

    }


    //function to compare user guess to currentWord
    function compare(letter) {
        //check if  pressed key is a letter
        if (event.keyCode >= 65 && event.keyCode <= 90) { //in the alphabet 


            var correctLetter = false;

            for (var i = 0; i < numBlanks; i++) {   //check if the key pressed is in the currentWord
                if (currentWord[i] == letter) {
                    correctLetter = true;
                }
            }

            if (correctLetter) {
                for (var i = 0; i < numBlanks; i++) {  //check where letter is in word
                    if (currentWord[i] == letter) {
                        answer[i] = letter;
                    }
                }
            }


            else {
                wrongLtrs.push(letter);     //if it is not in the word push to wrongLtrs
                guessesRemaining--
            }
        }
        console.log(answer); //test

    }

    //function to update wins and losses
    function rounds() {

        //send number of guesses, underscores and the wrong letters to HTML
        document.getElementById("remaining").innerHTML = "Guesses remaining " + " " + guessesRemaining;
        document.getElementById("underscore").innerHTML = answer.join(" ");
        document.getElementById("guessed").innerHTML = "Letters already guessed: " + " " + wrongLtrs.join(" ");

        //Check if you won!
        if (currentLetters.toString() == answer.toString()) {
            wins++;
            document.getElementById("coffee").play();
           
            imageDisplay(); 

            //update wins
            document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
            //hacky way to make picture go away? not sure if actually hacky but was told its "kind of hacky"
            setTimeout(function () {
                startGame();
            }, 2500);
        }
        //if you run out of guesses you lose
        else if (guessesRemaining == 0) {
            losses++;
            document.getElementById("amateur").play();

            imageDisplay();
            
            setTimeout(function () {
                startGame();
            }, 2500);



            // Update the losses,letters guessed in the HTML doc
            document.getElementById("losses").innerHTML = "Losses: " + " " + losses;
            document.getElementById("guessed").innerHTML = "Letters Already Guessed:" + " " + " ";

        }
    }
    //adds an function to display an image on win or lose :) 
    function imageDisplay() {
        var images = {
            woodsman: './assets/images/GottaLight.png',
            agentdalecooper: './assets/images/dale-cooper.jpg',
            loglady: './assets/images/log-lady.png',
            laurapalmer: './assets/images/Meanwhile.jpg',
            evilcoop: './assets/images/evil-coop.jpg',
            dougiejones: './assets/images/dougiejones.jpg',
            albert: './assets/images/albert.jpg',
            gordoncole: './assets/images/davidlynch2.jpg',
            majorbriggs: './assets/images/Major_Garland_Briggs.jpg',
            audreyhorne: './assets/images/AudreyHorne.jpg',
            jameshurley: './assets/images/hurley.jpg',
            onearmedman: './assets/images/MIKE.jpg',
            diane: './assets/images/diane.jpg',
            normajennings: './assets/images/norma.jpg',
            biged: './assets/images/biged.jpg',

        }
        //sends image to losing-image div
        document.getElementById("losing-image").setAttribute("src", images[currentWord]);

        //testing
        // console.log('new new',currentWord);
        // console.log('imageDisplay',images);
        // console.log('what is this',answer);

    }





    startGame();
    
    //get input on what keys are being pressed
    document.onkeyup = function (event) {
        //put the key pressed into ltrsGuess
        var ltrsGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //send the letter to the compare loop
        compare(ltrsGuess);
        rounds();

    }

}    
