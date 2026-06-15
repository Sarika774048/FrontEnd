let numArr = [10, 20, 30, 40, 50, 60];
console.log(numArr);
console.log(numArr[0]);
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]);
console.log(numArr[4]);
console.log(numArr[5]);

console.log("using for loop");

for(let i=0; i<numArr.length; i++){
    console.log(numArr[i]);
}

console.log("Printing in a horizontal line: ");
let result = "";
for(let i=0; i<numArr.length; i++){
    result += numArr[i] +" ";
}
console.log(result);

console.log("backward traversal: ");
for(let i= numArr.length-1; i>=0; i--){
    console.log(numArr[i]);
}
console.log("some extra experiments: ");
for(let i=0; i<numArr.length; i+=2){
    console.log(numArr[i]);
}

console.log("For of loop: ");
for(let num of numArr){
    console.log(num);
}

let realNumArr = [1.3, 8.0, 9.4, 7.9, 10.9];

for(let num of realNumArr){
    console.log(num);
}

let names= ["Sarika", "Emily", "Emma", "Rithik", "laila"];
for(let name of names){
    console.log(name);
}

console.log("The Array Transformation: ");
let values = [5, 12, 18, 7, 21, 30];

for(let val of values){
    if(val > 15){
        console.log(`${val} is a large number!`);
    }
}

let arr = new Array(5);
console.log(arr.length);
