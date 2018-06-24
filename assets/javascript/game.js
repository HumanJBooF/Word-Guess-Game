//Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks
var peakWords = 
    [
        'Woodsman',
        'Agent Dale Cooper',
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
 
    //creates randomly word from peaksWords
    var currentWord = peakWords[Math.floor(Math.random() * peakWords.length)].toUpperCase();
    console.log(currentWord);

    //Holds number of guesses left
    var geussesLeft = 10;
    document.getElementsByClassName('remaining').innerHTML = geussesLeft;
    //This will count the number of wins.
    var wins = 0;
    document.getElementById("wins").innerHTML = wins;

    var resetLettersGuessed = ""

    //empty array to hold blanks
    var blanks = [];


