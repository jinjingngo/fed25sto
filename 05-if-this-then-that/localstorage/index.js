"use strict";

const renderCounterValue = (count) => {
  const counterValue = document.querySelector("#counterValue");
  counterValue.innerText = count;
};

const addBtn = document.querySelector("#addBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");

let count = JSON.parse(localStorage.getItem("count")) ?? 0;

const initial = () => {
  renderCounterValue(count);
};

initial();

const saveCount = (count) => {
  localStorage.setItem("count", JSON.stringify(count));
};

addBtn.addEventListener("click", () => {
  count += 1;
  renderCounterValue(count);
  saveCount(count);
});

decreaseBtn.addEventListener("click", () => {
  if (count <= 0) return;
  count -= 1;
  renderCounterValue(count);
  saveCount(count);
});
