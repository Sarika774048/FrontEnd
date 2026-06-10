// implicit type casting or type coercion
console.log(1 == '1'); // converts string number
console.log(1 === '1'); // does not convert string number 

console.log(20 == Number('20')); // explicit type conversion

// boolean and number comparison
// it converts boolean tp number and then compares
console.log(true == 1);
console.log(Number(true) == 1);
console.log(true === 1); // does not convert boolean to number

console.log("2 steps when we are comparing between boolean and string");
console.log(Number(true) == Number('1'));
console.log(false == "0");


console.log("Code snippent: ");
console.log(typeof (10 + '5' * 2));
console.log('10'/'2' + 3);

console.log(null == undefined);
console.log(null == 0);
console.log(undefined == 0);
console.log(null == NaN);
console.log(undefined == NaN);
