console.log("The Private ID Generator: ");

function createIdGenerator(){
    let lastId = 1000;

    function generate(){
        lastId++;
        console.log(lastId);
    }
    return generate;
}

let fun = createIdGenerator();
fun();
fun();
fun();

console.log("Multi-Function Closure: ");
