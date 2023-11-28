const counter = document.querySelector("#counter");

document.querySelector("#reset").addEventListener("click", function () {
  counterValue = 0;
  counter.innerHTML = counterValue;
});

document.getElementById("increment").addEventListener("click", function () {
  if (counterValue < 10) {
    counterValue = counterValue + 1;
    counter.innerHTML = counterValue;
  }
});

let counterValue = 0;
counter.innerHTML = counterValue;

document.getElementById("decrement").addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue = counterValue - 1;
    counter.innerHTML = counterValue;
  }
});
