const audioEl = document.querySelector("#song");
const buttonEl = document.querySelector("#playBtn");
const pauseBtnEl = document.querySelector("#pauseBtn");

const ctx = new AudioContext();
const sourceNode = ctx.createMediaElementSource(audioEl);

const delayNode = ctx.createDelay();
delayNode.delayTime.value = 1000;

sourceNode.connect(delayNode);
sourceNode.connect(ctx.destination);
delayNode.connect(ctx.destination);

// const filterNode = ctx.createBiquadFilter();

// filterNode.type = "lowpass";
// filterNode.frequency.value = 100;

// sourceNode.connect(filterNode);
// filterNode.connect(ctx.destination);

buttonEl.addEventListener("click", () => {
  ctx.resume();
  audioEl.play();
});

pauseBtnEl.addEventListener("click", () => {
  audioEl.pause();
});
