let a = 10;
b = 20;
console.log(a, b);

this.c = 100;
console.log(this);
this.d = 200;
this.e = 300;
console.log(this);

function fun(){
    console.log(this);
}
fun();


// object method will point to that particular object
const greet = {
    name : "Sarika",
    fun : function(){
        console.log(this);
    }
}

greet.fun();


console.log("this inside arrow funciton will check for scope that is global scope");

const obj = {
   
    func : () =>{
        this.name = "pinky",
        console.log(this.name);
    }
}
obj.func();