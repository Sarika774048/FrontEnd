let global = "Global variables";
function outerFunction(){
    let outerVariable = "Outer variable";

    function innerFunction(){
        let innerVariable = "Inner variable";
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(global);
    }
    innerFunction();
}
outerFunction();


console.log("Shadowing challenge: Variable shadowing");

let username = "Global user";

function dashboard(){
    let username = "outer manager";

    function profile(){
        console.log(username);
    }
    profile();
    console.log(username);
}


dashboard();
console.log(username);

console.log("Scope Boundary wall: ");
function country(){
    let capital = "New Delhi";

    function state(){
        let localLanguage = "kannada";
        console.log(capital);
        console.log(localLanguage);
    }
    state();
}
country();

console.log("Multi - Level Chain: ");

let gold = "100gms";

function grandParent(){
    let silver = "50gms";

    function parent(){
        let bronze = "10gms";
        
        function child(){
            console.log(gold);
            console.log(silver);
            console.log(bronze);
        }
        child();
    }
    parent();
}
grandParent();
