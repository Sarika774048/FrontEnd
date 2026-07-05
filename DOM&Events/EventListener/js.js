
const box = document.getElementById("box");

const h1 = document.createElement("h1");
let x = "HTML code written using JS";
const h2 = document.createElement("h2");
h2.textContent = "This is a heading 2";
h1.textContent = x;
box.appendChild(h1);
box.prepend(h2);