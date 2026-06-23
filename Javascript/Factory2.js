
function Dog(name, breed, age){
    const dog = new Object();
    dog.name = name;
    dog.breed = breed;
    dog.age = age;
    return dog;
}

const d1 = Dog("maxy", "husky", 10);
const d2 = Dog("Milky", "bull", 4);

console.log(d1.name);
console.log(d1.breed);
console.log(d1.age);

console.log(d2.name);
console.log(d2.breed);
console.log(d2.age);
