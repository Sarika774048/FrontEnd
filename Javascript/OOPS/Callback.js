// callback

function triple(num){
    return num *3;
}

function isPositive(num){
    return num > 0;
}

function processNumber(num, callback){
    return callback(num);
}


console.log(processNumber(90, triple));
console.log(processNumber(-1, isPositive));
console.log(processNumber(10, isPositive));


console.log("The Age Guard:  ");

function canRide(age){
    return age >= 12;
}

function entryGate(age, callback){
    if(callback(age)){
        console.log("Welcome aboard!, Enjoy the ride.");
    }else{
        console.log("Sorry, you must be at least 12 years old.");
    }
}

entryGate(13, canRide);
entryGate(11, canRide);

console.log("The Custom Math Switcher: ");

function square(num){
    return num * num;
}

function half(num){
    return num/2;
}

function executeMath(num1, num2, callback){
    console.log(callback(num1) + num2);
}

executeMath(10, 20, square);
executeMath(2, 10, square);
executeMath(10, 5, half);
