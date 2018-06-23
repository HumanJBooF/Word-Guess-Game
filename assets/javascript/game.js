//Twin Peaks Theme peaksWords will hold all words have to do with Twin Peaks
const peakWords = 
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

    
    //have word be randomly choose
    let randnum = Math.floor(Math.random() * peakWords.length);
    let choosen = peakWords[randnum];
    let under = [];
    console.log(choosen);
    //Make underscores appear based on lenght of word choosen
    
    let createunderScore = () => {
        for(let i = 0; i < choosen.length; i++) {
            under.push('_');
        }
        return under;
    }
    
    console.log(createunderScore());