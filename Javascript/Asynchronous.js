
function fun1(){
    console.log("Function 1 started executing...");
    console.log("Function 1 completed executing...");
}

function fun2(){
    console.log("Function 2 started executing...");
    let start = Date.now();
    let delay = 2000;
    let end = start+ delay;

    while(Date.now() <= end){
    }
    console.log("Function 2 completed executing...");
}


function fun3(){
    console.log("Function 3 started executing...");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    while(Date.now() <= end){
    }
    console.log("Function 3 completed executing...");
}

function fun4(){
    console.log("Function 4 started executing...");
    console.log("Function 4 completed executing...");
}


fun1();
setTimeout(fun2, 2000);
setTimeout(fun3, 4000);
fun4();


function fun5(){
    console.log("Function 5 started executing....");
    let start = Date.now();
    let delay = 4000;
    let end = start + delay;

    while(Date.now() <= end){
    }

    console.log("Function 5 ended");
}

let intervalId = setInterval(fun5, 2000);
setTimeout( () => clearInterval(intervalId), 10000);