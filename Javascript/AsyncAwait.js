function exmp(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Function executed!");
            resolve();
        }, 3000);
    });
}

async function run(){
   await exmp();
   console.log("The Second function executed!");
}
run();


