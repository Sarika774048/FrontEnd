
// Functions are first class citizens in javascript

function func(mobile){
    console.log(mobile);
}

let m1 = {
    name : "Samsung",
    cost : 90,
    version : "latest"
};

console.log(m1);

func(m1);

function func2(){
    let m1 = {
    name : "Samsung",
    cost : 90,
    version : "latest"
};
return m1;
}

console.log(func2());

console.log("Functions are objects in javascript: ");

function add(a, b){
    console.log(a + b);
    console.log("I am being called!");
}

console.log(add.name);
console.log(add.length);

add.call();



console.log("Passing an function inside another function: call back and higher order function");

function higher(fun){
    fun();
}

function hello(){
    console.log("Hello Sarika");
}
higher(hello);