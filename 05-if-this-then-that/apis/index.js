"use strict";

const url = "https://randomfox.ca/floof/";

const toFox = document.querySelector('#to-fox');
const randomFox = document.querySelector('#random-fox');

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const {image, link} = data;
  toFox.href = link;
  randomFox.src = image;
}

getData();
