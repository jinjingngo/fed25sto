"use strict";

console.log("check im alive");

let countEl = document.querySelector("#counter__number");
let buttonEl = document.querySelector("#increase");

let count = 0;

buttonEl.addEventListener("click", function (e) {
  count += 1;
  countEl.textContent = count;
});

let decreaseEl = document.querySelector("#decrease");
decreaseEl.addEventListener("click", function () {
  count -= 1;
  countEl.textContent = count;
});
