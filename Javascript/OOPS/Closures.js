// closures in javascript

function outerFun(){
    let variable = 10;
    function innerFun(){
        console.log(variable);
    }
    return innerFun;
};

let holder = outerFun();
holder();

function createCounter(){
    let count = 0;
    
    return function(){
        count++;
        console.log(count);
    }; 
    
}

let countA = createCounter();
countA();
countA();
countA();
countA();
countA();
countA();
countA();