

let a = 100;
console.log("a : ", a);

let b;
console.log("b : ", b);

b = a;
console.log("b value after passing a: ", a);

b = 200;
console.log("a value after reassigning: ", a);
console.log("b value after reassigning: ", b);

// pass by reference

let bankAccount = {
    accountHolder : "Mia",
    accountType : "Savings",
    balance : 90000
};

console.log(bankAccount.accountHolder);
console.log(bankAccount.accountType);
console.log(bankAccount.balance);

// pass by reference
let bAcc = bankAccount;
console.log(bAcc.accountHolder);

bAcc.accountHolder= "aila";
console.log(bAcc.accountHolder);
console.log(bankAccount.accountHolder);
