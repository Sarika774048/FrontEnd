
// hoisting

console.log(a); // var keyword stores undefined
var a = 100;
console.log(a);

// console.log(b); // in Hoisting if we use let keyword, the variables will not be assigned with default values as we have var keyword which stores undefined
let b = 200;
console.log(b);

//even in functions also the hoisting will be there

greet();
// declaration will be moved above due to the Hoisting behavior in JavaScript
function greet(){
    console.log("Hello!");
}
