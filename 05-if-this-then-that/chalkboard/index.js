

(()=> {
  const writeButton = document.querySelector('#writeButton');
  const chalkboard = document.querySelector('#chalkboard');

  const write = (container) => () => {
    const el = document.createElement('li');
    el.classList.add('chalkboard--item')
    el.innerText="I WILL DEFINITELY USE CHATGPT!";
    container?.append(el);
  }

  writeButton.addEventListener('click', write(chalkboard));

  const start = (counter) => {
    if(counter < 1000){
      setTimeout(() => {
        counter++;
        console.log(counter);
        writeButton.click();
        start(counter);
      }, 500);
    }
  }

  start(0);
})();
