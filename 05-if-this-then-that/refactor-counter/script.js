const counter = document.querySelector("#counter");
let counterValue = 0;

const renderCounterValue = (counterValue) => {
  counter.innerHTML = counterValue;
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

document.querySelector("#reset").addEventListener("click", function () {
  handleAction("reset");
});

document.getElementById("increment").addEventListener("click", function () {
  handleAction("increment");
});

document.getElementById("decrement").addEventListener("click", function () {
  handleAction("decrement");
});
