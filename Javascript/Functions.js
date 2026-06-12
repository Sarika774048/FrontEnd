// No input and No output

let a = 100;
let b = 200;

function add(){
    let c = a + b;
    console.log(c);
}

add();

// No input and Output

let a1 = 400;
let b1 = 300;

function subtract(){
    return a1-b1;
}

let res = subtract();
console.log(res);

// Input and No output

function addition(num1, num2){
    console.log(num1 + num2);
}
addition(10, 20);

// Input and Output

function multiplication(num1, num2){
    return num1* num2;
}
let ans = multiplication(20, 20);
console.log(ans);