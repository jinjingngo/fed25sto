'use strict';

(() => {
  const context = {
    lower: 0,       // lower limit for generating the guessing number `x`
    upper: 100,     // upper limit for generating the guessing number `x`
    x: undefined,        // the guessing number itself
    count: undefined,    // how many counts maximum
    left: undefined,     // how many counts left
  }

  const setBoundary = (lower, upper) => {
    context.lower = lower;
    context.upper = upper;
  }

  const generateRandomX = (lower, upper) => {
    context.x = Math.floor(Math.random() * (upper - lower + 1) + lower);
  }

  const generateMaxGuesses = (lower, upper) => {
    context.count = Math.round(Math.log(upper - lower + 1));
  }

  const setLeftGuesses = (times = context.count) => {
    context.left = times;
  }

  const renderMaxTimes = (times) => {
    const maxEle = document.querySelector('#guess__max-times-number');
    maxEle.innerText = times;
  }

  const renderLeftTimes = (times = context.count) => {
    const leftEle = document.querySelector('#guess__left-times-number');
    leftEle.innerText = times;
  }

  const form = document.querySelector('#boundary--form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const boundary = Object.fromEntries(new FormData(e.target));
    const lower = Number(boundary.lower);
    const upper = Number(boundary.upper);

    setBoundary(lower, upper);
    generateRandomX(lower, upper);
    generateMaxGuesses(lower, upper);
    setLeftGuesses(context.count);

    renderMaxTimes(context.count);
    renderLeftTimes(context.count);

    console.log(context);
  });

  const renderGuessResult = (result, modifierClass) => {
    const resultEle = document.querySelector('#guess__result');
    const animationClass = 'animate__rubberBand';
    const showClass = 'guess__result_show';
    const hideClass = 'guess__result_hide';

    resultEle.innerText = result;
    resultEle.classList.remove(hideClass);
    resultEle.classList.add(animationClass, showClass);
    modifierClass && resultEle.classList.add(modifierClass);

    resultEle.addEventListener('animationend', (e) => {
      resultEle.classList.add(hideClass);
      e.target.classList.remove(animationClass, showClass);
      modifierClass && resultEle.classList.remove(modifierClass);
    }, {once: true})
  }

  const guessBtn = document.querySelector('#guess__number-btn');
  const guessNumber = document.querySelector('#guess__number');

  guessBtn.addEventListener('click', (e) => {
    const {x, left = 0} = context;
    const guessed = Number(guessNumber.value);

    if (left === 0) {
      renderGuessResult('What are you trying to do? OUT!', 'guess__result_success');
      return;
    }

    context.left -= 1;
    renderLeftTimes(context.left);

    if (guessNumber.value === "") {
      renderGuessResult(
        'Guess due, why do you feed me with nothing, Haya!!!',
        'guess__result_angry'
      );
      return;
    }

    if (x === guessed) {
      renderGuessResult(`Congratulations, You did it!`, 'guess__result_success');
    } else if (guessed > x) {
      renderGuessResult("NO! TOO BIG!", 'guess__result_failed');
    } else if (guessed < x) {
      renderGuessResult("no. too small.", 'guess__result_failed');
    } else {
      renderGuessResult("WHAT HAVE YOU DONE!!!!!!", 'guess__result_angry');
    }
  });

  const toggle = document.querySelector('#boundary__toggle');
  toggle.addEventListener('click', () => {
    const boundary = document.querySelector('#boundary');
    boundary.classList.toggle('hide');
  });

})();
