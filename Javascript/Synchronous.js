function task1(){
    console.log("Task1 started...");

    let start = Date.now();
    let delay = 2000;
    let end = start + delay;
    console.log("Task1 executing...")
    while(Date.now() <= end){
    }

    console.log("Task1 completed!");
}

function task2(){
    console.log("Task2 started...");

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;
    console.log("Task2 executing...")
    while(Date.now() <= end){
    }

    console.log("Task2 completed!");
}


function task3(){
    console.log("Task3 started...");

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;
    console.log("Task3 executing...")
    while(Date.now() <= end){
    }

    console.log("Task3 completed!");
}

task1();
task2();
task3();