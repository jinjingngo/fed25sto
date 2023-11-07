const ballEl = document.querySelector("#ball");

const ballClient = ballEl.getBoundingClientRect();
const width = ballClient.width;
const height = ballClient.height;

document.addEventListener('click', function(e) {
  const x = e.clientX;
  const y = e.clientY;

  ballEl.style.translate = `${x - width / 2}px ${y - height / 2}px`;
})

