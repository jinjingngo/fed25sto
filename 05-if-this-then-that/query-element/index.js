"use strict";

(() => {
  const headerSecondary = document.querySelector('.my-class h2');
  console.log({headerSecondary});
  console.log({innerHTML: headerSecondary.innerHTML});
  console.log({style: headerSecondary.style});
  console.log({computedStyleMap: headerSecondary.computedStyleMap()});
  console.log({classList: headerSecondary.classList});
  console.log({getBoundingClientRect: headerSecondary.getBoundingClientRect()});
})();
