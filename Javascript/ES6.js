let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// default parameters

let scan = require('prompt-sync')();
let name = scan("Enter your name: ");
let age = Number(scan("Enter your age: "));
function greet(name = "Guest User", age=20){
    console.log("Hello " + name + " you are " + age + " years old");
}

greet(name);

// Rest parameter
function summation(...num){
    let sum =0;
    for(a of num){
        sum += a;
    }
    return sum;
}

console.log(summation(10, 20, 30, 40, 50));

