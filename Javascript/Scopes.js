// global scope + Hoisting


let a = 100;
console.log(a);

call();
function call(){
    console.log(a);
}

// function scope

function scope(){
    let n = 100;
    console.log(n)
}
scope();
// console.log(n); n is restricted to the function scope


// BLOCK SCOPE

let temp = 2;

if(temp > 25){
    let coolingTemp = temp - 25;
    console.log("Server room needs to be cooled by: ", coolingTemp); 
}else{
    let heatingTemp = 25 - temp;
    console.log("Server room needs to be heated by: ", heatingTemp);
}
// console.log(heatingTemp); block scope can be accessed inside only if and else block

function printTillN(num){
    let result = "";
    for(let i = 1; i<=num; i++){
       result += i +" ";
    }
    console.log(result.trim());
}

printTillN(5);