
function showNotification(){
    console.log("New Message: Hey! Are we still studying today?");
}
console.log("Starting the app...");

setTimeout(showNotification, 3000);

console.log("App is running smoothly while waiting for notifications....");

console.log("Food Delivery Application: ");

function placeOrder(item, nextStepCallback){
    setTimeout(() => {
        console.log(`Order placed for item : ${item}`);
        nextStepCallback();
    }, 2000);
    
}


function prepareFood(nextStepCallback){
    setTimeout(() => {
        console.log("Food preparation complete. Delicious!");
        nextStepCallback();
    }, 3000);
}

function assignDriver(){
    setTimeout(()=> console.log("Driver assigned! Your food is on the way!"), 1000);
}

placeOrder("Pizza", ()=> {
    prepareFood(()=>{
        assignDriver();
    } );
});