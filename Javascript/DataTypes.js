let a = 123;
let b = 123n;
let c = 'A';
let d = 45.90;
let e = true;
let f = "Sarika";
let g = null;
let h;
let i = Symbol('id');

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);
console.log(d);
console.log(typeof d);  
console.log(e);
console.log(typeof e);
console.log(f);
console.log(typeof f);
console.log(g);
console.log(typeof g);
console.log(h);
console.log(typeof h);
console.log(i);
console.log(typeof i);

// Type Conversions

//String - number and boolean 
console.log("Type Conversion: ");
let str = "123";
let str2 = "Tap123";
let str3 =" 123";
let str4 = " 1 2 3";

let num1 = Number(str);
console.log(num1 + "  "+typeof num1);
let num2 = Number(str2);
console.log(num2 + " "+ typeof num2);
let num3 = Number(str3);
console.log(num3 + " " + typeof num3);
let num4 = Number(str4);
console.log(num4 + " " + typeof num4);

// if the string is empty then it is false in boolean conversion
// if the string contain any value then it is true in boolean conversion
console.log("Conversion from bool to string")
let boolString1 ="";
let bool1 = Boolean(boolString1);
console.log(bool1 + " " + typeof bool1);
let boolString2 = " Sarika";
let bool2 = Boolean(boolString2);
console.log(bool2 + " " + typeof bool2);

// number - string and boolean
let numString1 = 123;
let numString2 = 45.90;
let numString3 = 0;
let numString4 = -123;
let numString5 = NaN;
let strNum1 = String(numString1);
console.log(strNum1 + " " + typeof strNum1);
let strNum2 = String(numString2);
console.log(strNum2 + " " + typeof strNum2);
let strNum3 = String(numString3);
console.log(strNum3 + " " + typeof strNum3);
let strNum4 = String(numString4);
console.log(strNum4 + " " + typeof strNum4);
let strNum5 = String(numString5);
console.log(strNum5 + " " + typeof strNum5);

//anything apart from 0 is true in boolean conversion
let boolNum1 = 123;
let boolNum2 = 0;

let numBool1 = Boolean(boolNum1);
console.log(numBool1 + " " + typeof numBool1);
let numBool2 = Boolean(boolNum2);
console.log(numBool2 + " " + typeof numBool2);

// boolean - string and number

console.log(
"Conversion from boolean to string: "
);

let boolStr1 = true;
let boolStr2 = false;
console.log(String(boolStr1) + " " + typeof String(boolStr1));
console.log(String(boolStr2) + " " + typeof String(boolStr2));


console.log("Conversion from boolean to number: ")

let boolNum = true;
let boolToNum = Number(boolNum);
console.log(boolToNum + " " + typeof boolToNum);

let boolNumFalse = false;
let boolToNumFalse = Number(boolNumFalse);
console.log(boolToNumFalse + " " + typeof boolToNumFalse);