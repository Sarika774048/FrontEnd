const scan = require("prompt-sync")();

const n1 = Number(scan("Enter a number: "));
const n2 = Number(scan("Enter 2nd number:"));

function divide(n1, n2){
    let res; 
    if(n2 !== 0){
    res = n1/n2;
    }else{
        throw new Error("Cannot divide by zero Error");
    }
    return res;
}


try{
    console.log(divide(n1, n2));
}catch(error){
    console.log(error.stack);
}
console.log("Code finished!");


class InvalidPinError extends Error{
    constructor(message){
        super();
        super.message = message;
    }
}

class ATM{
    atmPin = 7845;
    
    input(){
        const enteredPin = Number(scan("Enter you pin: "));
        return enteredPin;
    }
    
    validate(){
        if(this.enteredPin === this.atmPin){
            console.log("Collect your money!");
        }else {
            let count = 0;
            while(this.enteredPin !== this.atmPin && count <2){
                count++;
                this.enteredPin = Number(scan("Enter the valid pin: "));
                if(this.enteredPin === this.atmPin){
                    console.log("Collect your money!");
                    return;
                }
            }
            throw new InvalidPinError("Invalid Pin Error");
        }
    }
}

const atm = new ATM();
atm.enteredPin = atm.input();
try{
    atm.validate();
}catch(error){
    console.log(error.message);
}


