const ta = document.querySelector("#ta");
const content = document.querySelector("#content");
const amazon = document.querySelector("#amazon");

ta.addEventListener("onchange", function(e){
    console.log(e.target.value);
    content.textContent = e.target.value;
});
ta.addEventListener("keydown", function(e){
    console.log(e.target.value);
    content.textContent = e.target.value;
    console.log("e.key", e.key);
    console.log("e.code", e.code);
    console.log("Shift key", e.shiftKey);
    console.log("ctrl key", e.ctrlKey);
    console.log("alt key", e.altKey);
});

amazon.addEventListener("click", (e) => {
    e.preventDefault();
});

