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

$(document).ready(() => {
    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    };

    const reset = () => {
        lose = false;
        won = false;
        score = 0;
        crystalValuesArray = [];

        winningNumber = getRandomNumber(101) + 19;

        $('#random-number').text(winningNumber);
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

    $('.crystals').on('click', (event) => {
        $('#winLoseText').attr('hidden', 'true');
        if (!won && !lose) {
            switch (event.currentTarget.id) {
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
            $('#winLoseText').text('You won!');
        } else {
            $('#winLoseText').text('You lost.');
        }
        reset();

    };

    const increaseWins = () => {
        $('#wins').text(wins);
    };
    const increaseLosses = () => {
        $('#losses').text(losses);
    };

    reset();
});