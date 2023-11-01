'use strict'

const context = {
  lower: 0,       // lower limit for generating the guessing number `x`
  upper: 100,     // upper limit for generating the guessing number `x`
  x: null,        // the guessing number itself
  count: null,    // how many counts required
}

const setBoundary = () => {
  context.lower = Number(prompt("Enter the Lower bound"));
  context.upper = Number(prompt("Enter the Upper bound"));
}

const generateRandomX = (lower, upper) => {
  context.x = Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const generateRequiredGuesses = (lower, upper) => {
  context.count = Math.round(Math.log(upper - lower + 1));
}

const guessing = () => {
  const {count, x} = context;
  let tries = 0;
  while (tries < count) {
    tries += 1;
    const guess = Number(prompt("Guess a number"))
    if (guess === x) {
      alert(`Congratulations you did it in ${tries} try`);
      break;
    } else if (guess > x) {
      alert("You guessed too big!");
    } else if (guess < x) {
      alert("You guessed too small!");
    } else {
      alert("What have you done!!!!!!");
    }
  }

  if (tries >= count) {
    alert(`You have had your ${tries} tries!\n\nThe number is ${context.x}\n\nBetter Luck Next time!`);
  }
}

(() => {
  setBoundary();
  const {lower, upper} = context;
  generateRandomX(lower, upper);
  generateRequiredGuesses(lower, upper);
  console.log(context);
  guessing();
})();
