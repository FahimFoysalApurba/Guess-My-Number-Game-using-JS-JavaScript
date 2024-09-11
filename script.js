'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value); 
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //document.querySelector('.message').textContent = 'Correct Number';
  console.log(typeof guess, '  ', guess);

  if (!guess) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'No Number!.';
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
    }
  } else if (SecretNumber > guess) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
    }
  } else if (SecretNumber < guess) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
    }
  } else if (SecretNumber === guess) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Correct';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = SecretNumber;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  //document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
