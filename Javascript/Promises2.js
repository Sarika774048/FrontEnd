
let promise = new Promise(
     function executeFunction(resolve, reject){
            console.log("Water started to boil");
            setTimeout( () => {
                console.log("Water boiled");
                resolve();
            }, 3000)
    }
);

promise
.then(() => {
    console.log("Promise fulfilled!");
})
.catch( () => {
    console.log("Promise unfulfilled!");

} );


let promise2 = new Promise(
    function execute(resolve, reject){
        console.log("Execution started!");
        setTimeout(
            function execute(){
                let num = 20;
                if(num > 30){
                    resolve();
                }else{
                    reject();
                }
            }
            , 4000);
    }
);

promise2
.then(
    () => {
        console.log("Number is greater than 30");
    }
)
.catch(
    () => {
        console.log("Number is less than 30");
    }
);