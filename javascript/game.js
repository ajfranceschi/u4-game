let wins = 0;
let losses = 0;
let score = 0;
let won = false;
let redCrystalValue = 0;
let blueCrystalValue = 0;
let yellowCrystalValue = 0;
let greenCrystalValue = 0;
let crystalValuesArray = [];

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const initialize = () => {
    let randomNumber = 0;

    while (randomNumber < 19) {
        randomNumber = getRandomNumber(120);
    }

    $('#random-number').html(randomNumber);
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

});

const updateTotalScore = score => {
    $('#total-score').textContent = (score);
};

initialize();