
const box = document.querySelector("#box");

const high = document.querySelector("#highlight");

high.onclick = function(){
    box.classList.toggle("highlight");
}

document.querySelector("#rounded").onclick = function(){
    box.classList.toggle("rounded");
}
document.querySelector("#shadow").onclick = function(){
    box.classList.toggle("shadow");
}

document.querySelector("#reset").onclick = function(){
    box.classList.remove("highlight", "rounded", "shadow");
}