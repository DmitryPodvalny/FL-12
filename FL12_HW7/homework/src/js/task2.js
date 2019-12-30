let currentPrize = 0;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let mathNumber = 9;
let attemps = 3;

let playGame = confirm('Do you want to play a game');
if (playGame) {
    newGame: for (;;) {
        let randomNumber = Math.floor(Math.random() * mathNumber);
        for (let i = 0; i < 3; i++) {
            let possiblePrize;
            if (i === 0) {
                possiblePrize = firstPrize;
            } else if (i === 1) {
                possiblePrize = secondPrize;
            } else if (i === 2) {
                possiblePrize = thirdPrize;
            }
            // eslint-disable-next-line max-len
            let answer = +prompt(`Choose a roulette pocket number from 0 to ${mathNumber - 1}, Attemps left: ${attemps}, Total prize: ${currentPrize}$, Possible prize on current attemp: ${possiblePrize}$`);
            attemps = attemps - 1;
            if (answer === randomNumber) {
                if (i === 0) {
                    currentPrize += firstPrize;
                } else if (i === 1) {
                    currentPrize += secondPrize;
                } else if (i === 2) {
                    currentPrize += thirdPrize;
                }
                alert(`Congratulation, you won! Your prize is ${currentPrize}$`)
                let didGuess = confirm('Do you want to continue?');
                if (!didGuess) {
                    attemps = 3;
                    mathNumber = 9;
                    firstPrize = 100;
                    secondPrize = 50;
                    thirdPrize = 25;
                    alert(`Thank you for your participation. Your prize is ${currentPrize}$`)
                    let playAgain = confirm('do you want to play again?');
                    if (playAgain) {
                        continue newGame;
                    } else {
                        break newGame;
                    }
                } else {
                    attemps = 3;
                    mathNumber += 4;
                    firstPrize *= 2;
                    secondPrize *= 2;
                    thirdPrize *= 2;
                    continue newGame;
                }
            }
        }
        attemps = 3;
        mathNumber = 9;
        firstPrize = 100;
        secondPrize = 50;
        thirdPrize = 25;
        alert(`Thank you for your participation. Your prize is ${currentPrize}$`)
        let againPlay = confirm('Do you wanna play again?');
        if (againPlay) {
            continue newGame;
        } else {
            break newGame;
        }
    }
} else {
    alert('You did not become a billionaire, but can.')
}