

function createCar(name, cost, mileage){
    return {
        name : name,
        cost : cost,
        mileage : mileage
    };
}

const car1 = createCar("BMW", 55, 12.4);
console.log(car1.name);
console.log(car1.cost);
console.log(car1.mileage);

const car2 = createCar("Camry", 55, 10);
console.log(car2.name);
console.log(car2.cost);
console.log(car2.mileage);
