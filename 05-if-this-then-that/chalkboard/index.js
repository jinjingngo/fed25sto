"use strict";

const writeButton = document.querySelector('#writeButton');
const chalkboard = document.querySelector('#chalkboard');

const write = () => {
  const el = document.createElement('li');
  el.classList.add('chalkboard--item')
  el.innerText="I WILL DEFINITELY USE CHATGPT!";
  chalkboard?.append(el);
}

writeButton.addEventListener('click', write);

document.addEventListener('keydown', function(e) {
  console.log({code: e.code})
  if (e.code !== 'Space') return false;
  write();
});
