let count = 0;
let result = count || 100;
console.log(result);

let result2 = count ?? 100;
console.log(result2);

let count2 = null;
let result3 = count2 || 100;
console.log(result3);

let result4 = count2 ?? 100;
console.log(result4);