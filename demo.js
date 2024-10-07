// async js
/* in order to overcome the blocking behavior, we need to use
asynchronous executing - that sets some code outside of the main thread.
*/

// the setTimeout comes from web API
const box = document.querySelector("#box");

setTimeout(() => {
  box.style.backgroundColor = "red";
  setTimeout(() => {
    box.style.fontSize = "3rem";
  }, 5000);
}, 5000);
