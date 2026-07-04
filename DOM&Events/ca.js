
const name = document.getElementById("name");
name.setAttribute("maxLength", "10");
name.setAttribute("placeholder", "Enter your name");
console.log(name.getAttribute("maxLength"));
name.removeAttribute("value");
const email = document.getElementById("email");
email.setAttribute("placeholder", "Enter your email");
