const car = {
    name : "BMW",
    cost : 34,
    "car top" : "open"
}

console.log(car);
// adding properties into the object
car.color = "blk";
console.log(car);

console.log(car["car top"]);

car["noOfTyres"] = 4;
console.log(car["noOfTyres"]);
console.log(car.noOfTyres);

car["money"] = car.cost;
console.log(car.money);

delete car.name;
console.log(car);


// ways to check whether the property exists or not
console.log(car.cost);
console.log("cost" in car);
console.log(car.hasOwnProperty("cost"));
console.log("Color exists in car or not: ");
console.log("color" in car); 
console.log(car.hasOwnProperty("color"));
console.log(car.hasOwnProperty("noOfTyres"));