// shallow copy

let ar1 = [
    [10, 20, 30],
    [11, 21, 31]
];

// method 1
let ar2 = [...ar1];
console.log("Array 1: ", ar1);
console.log("Array 2: ", ar2);

ar1[0].push(100);
console.log(ar1);
console.log(ar2);

// method 2 

let ar3 = ar1.slice();
console.log("A1: ", ar1);
console.log("A3: ", ar3);
ar1[0].unshift(200);
console.log("A1: ", ar1);
console.log("A3: ", ar3);


// deep copy
console.log("Deep Copy: ");
let a1 = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(a1);

let a2 = structuredClone(a1);
console.log(a2);
a1[0].unshift(100);
console.log(a1);
console.log(a2);