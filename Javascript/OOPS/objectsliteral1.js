// objects in javascript
// first way is to create using the object literal notation

let car = {
    // key- value pair

    // has part
    name : "BMW",
    cost : 45.5,
    mileage : 12,
    noOfSeats : 4,

    // does part
    start : function() {
        console.log("Car is started.....!");
    },

    stop : function(){
        console.log("Car stopped.....!");
    },

    accelerate : function() {
        console.log("Car is accelerating.....!");
    }
};

console.log(car.name);
console.log(car.cost);
console.log(car.mileage);
console.log(car.noOfSeats);

car.start();
car.stop();
car.accelerate();
