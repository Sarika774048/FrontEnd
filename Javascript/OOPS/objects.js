
const car = new Object();

car.name = "BMW";
car.model = "2027";
car.cost = 45.5;
car.colour = "Black";

car.start = function() {
    console.log("Car is startrd....");
}

car.stop = function()
{
    console.log("Car stopped");
}

car.racing = function (){
    console.log("Car is ready to race!");
}

console.log("Car Details: ");
console.log(car.name);
console.log(car.model);
console.log(car.cost);
console.log(car.colour);
car.start();
car.racing();
car.stop();
