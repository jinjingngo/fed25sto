const counterEl = document.querySelector("#counter");
const resetEl = document.querySelector("#reset");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");
let counterValue = 0;

const renderCounterValue = (counterValue) => {
  counterEl.innerHTML = counterValue;
};

renderCounterValue(counterValue);

const handleAction = (action) => {
  switch (action) {
    case "reset":
      counterValue = 0;
      break;
    case "increment":
      if (counterValue < 10) {
        counterValue = counterValue + 1;
      }
      break;
    case "decrement":
      if (counterValue > 0) {
        counterValue = counterValue - 1;
      }
      break;
    default:
      break;
  }
  renderCounterValue(counterValue);
};

resetEl.addEventListener("click", function () {
  handleAction("reset");
});

incrementEl.addEventListener("click", function () {
  handleAction("increment");
});

decrementEl.addEventListener("click", function () {
  handleAction("decrement");
});
