// automatically executes
let prm = new Promise( () => {
    console.log("Execution function...");
} );

console.log(prm);

let promise1 = new Promise(
    (resolve)=> {
        console.log("Promise 1");
        resolve("The State is changed to fulfilled");
    }
);

promise1.then((result)=>{
    console.log(result);
});

let pro2 = new Promise(
    (resolve, reject) => {
        console.log("Reject");
        reject("The state is changed to reject");
    }
);
pro2.catch((res) => {
    console.log(res);
});


let pro3 = new Promise(
    (resolve, reject) => {
        console.log("The execution begins");
        resolve({id:90, name:"Sarika"});
    }
);

pro3
.then( (res) => {
    console.log(res);
})
.catch(
    (res) => {
        console.log(res);
    }
);