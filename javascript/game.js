let wins = 0;
let losses = 0;
let score = 0;
let won = false;
let lose = false;
let winningNumber = 0;
let redCrystalValue = 0;
let blueCrystalValue = 0;
let yellowCrystalValue = 0;
let greenCrystalValue = 0;
let crystalValuesArray = [];

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const reset = () => {
    lose = false;
    won = false;
    score = 0;
    crystalValuesArray = [];

    winningNumber = getRandomNumber(120);

    while (winningNumber < 19) {
        winningNumber = getRandomNumber(120);
    }

    $('#random-number').html(winningNumber);
    assignCrystalValues();
    updateTotalScore(0);

};



const assignCrystalValues = () => {

    for (let index = 0; index < 4; index++) {
        let randomNumber = getRandomNumber(11) + 1;
        randomNumber += 1;

        while (crystalValuesArray.includes(randomNumber)) {
            randomNumber = getRandomNumber(11) + 1;
        }

        crystalValuesArray.push(randomNumber);
    }


    redCrystalValue = crystalValuesArray[0];
    blueCrystalValue = crystalValuesArray[1];
    yellowCrystalValue = crystalValuesArray[2];
    greenCrystalValue = crystalValuesArray[3];
};





$('.crystals').on('click', () => {
    $('#winLoseText').attr('hidden', 'true');
    if (!won && !lose) {
        switch (event.path[1].id) {
            case 'redCrystal':
                score += redCrystalValue;
                break;
            case 'blueCrystal':
                score += blueCrystalValue;
                break;
            case 'yellowCrystal':
                score += yellowCrystalValue;
                break;
            case 'greenCrystal':
                score += greenCrystalValue;
                break;
            default:
                break;
        }
        console.log(score);
        updateTotalScore(score);

        if (score === winningNumber) {
            won = true;
            wins++;
            setWinLoseMessage(won);
            increaseWins();
        } else if (score > winningNumber) {
            lose = true;
            losses++;
            setWinLoseMessage(!lose);
            increaseLosses();
        }
    }

});

const updateTotalScore = score => {
    $('#score').html(score);
};

const setWinLoseMessage = (didWin) => {
    $('#winLoseText').attr('hidden', false);
    if (didWin) {
        $('#winLoseText').html('You won!');
    } else {
        $('#winLoseText').html('You lost.');
    }
    reset();

};

const increaseWins = () => {
    $('#wins').html(wins);
};
const increaseLosses = () => {
    $('#losses').html(losses);
};

reset();