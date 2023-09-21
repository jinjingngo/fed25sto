const CLOCK_HOUR = document.querySelector(".hour");
const CLOCK_COLON = document.querySelector(".colon");
const CLOCK_MINUTE = document.querySelector(".minute");
const CLOCK_MIDNIGHT = document.querySelector(".midnight");

const tock = () => {
  const now = new Date();
  const hours = now.getHours() % 12;
  const hour = hours ? hours : 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const amPm = now.getHours() >= 12 ? 'pm' : 'am';

  CLOCK_HOUR.textContent = hour;
  CLOCK_MINUTE.textContent = minutes;
  CLOCK_MIDNIGHT.textContent = amPm;
}

(() => {
  setInterval(tock, 1000);
})();
