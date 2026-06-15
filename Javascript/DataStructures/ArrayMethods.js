let arr = [10, 20, 30, 40, 50];

console.log(arr);

console.log("Methods in Array");

arr.push(60); // add at end
console.log(arr);

arr.unshift(70); // add at start
arr.unshift(80);
arr.unshift(90);
arr.unshift(100);
console.log(arr);

console.log("Removing elements: ");
let x = arr.shift();
console.log(x);
let y = arr.pop();
console.log(y);
console.log(arr);

console.log(arr.includes(30));

console.log("Splice method");

let remove = arr.splice(2, 2);
console.log(remove);
console.log(arr);

arr.splice(2, 0, 600, 500);
console.log(arr);

arr.splice(6, 2, 300, 400);
console.log(arr);

let ar = [1, 2, 1, 3, 1, 3, 4];
console.log(ar.indexOf(1));
console.log(ar.lastIndexOf(1));

console.log("Map method: ");

let a = [1, 4, 9, 16, 25, 36, 49, 64];

let b = a.map(callback);
function callback(x){
    return Math.sqrt(x);
}
console.log(b);

console.log("Another way: ");

let c = [1, 4, 9, 16, 25, 36, 49, 64];

let d = a.map(
    function(x){
    return Math.sqrt(x);
}
);

console.log(b);

console.log("One more way: ");

let e = [1, 4, 9, 16, 25, 36, 49, 64];

let f = a.map( x =>  Math.sqrt(x) );

console.log(f);

console.log("Filter methods: ");

let ages = [12, 34, 78, 10, 52];

let result = ages.filter( x => x > 18);
console.log(ages);
console.log(result);
let result2 = ages.filter( x => x < 18 );
console.log(result2);

let numbers = [1, 2, 3, 4, 5, 6];
let res = numbers.filter(x => x*x > 20);
console.log(numbers);
console.log("The result : ",  res);

let sumArr = [10, 20, 30, 40, 50];
let sum = sumArr.reduce((total, x) => total + x, 0);
console.log("Sum: ",  sum);

console.log("Some and every method: ");

let nums = [23, 56, 34, 90, 77, 65];
let r1 = nums.some( x => x <25 );
console.log(r1);

let r2 = nums.every( x => x >20);
console.log(r2);

let r3 = nums.find( x => x>30 );
console.log(r3);

let r4 = nums.findIndex(x => x >30);
console.log(r4);

let r5 = nums.findLast(x => x > 30);
console.log(r5);

let r6 = nums.findLastIndex( x => x > 30);
console.log(r6);

nums.sort();
console.log(nums);