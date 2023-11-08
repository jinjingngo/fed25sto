"use strict";

(() => {
  const item = document.createElement("li");
  item.innerHTML = "No Caller ID";

  const list = document.querySelector("#list");
  // list.append(item);
  // list.prepend(item);
  // list.before(item);
  list.after(item);
})();
