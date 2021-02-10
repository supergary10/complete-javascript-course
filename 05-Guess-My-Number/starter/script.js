'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No number!⛔';
    
      //when player wins
    } else if (guess != secretNumber) {
        if ( score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            
            //when guess is too high
            if ( guess > secretNumber) {
                document.querySelector('.message').textContent = 'Too high';
            //when guess is too low
            } else if (guess < secretNumber) {
                document.querySelector('.message').textContent = 'Too low';
            }
        } else {
            document.querySelector('.message').textContent = '🎆You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if (score > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent = 20;
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem';
});
