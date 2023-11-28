const counter = document.querySelector("#counter");
let counterValue = 0;

const renderCounterValue = (counterValue) => {
  counter.innerHTML = counterValue;
};
renderCounterValue(counterValue);

document.querySelector("#reset").addEventListener("click", function () {
  counterValue = 0;
  renderCounterValue(counterValue);
});

document.getElementById("increment").addEventListener("click", function () {
  if (counterValue < 10) {
    counterValue = counterValue + 1;
    renderCounterValue(counterValue);
  }
});

document.getElementById("decrement").addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue = counterValue - 1;
    renderCounterValue(counterValue);
  }
});
