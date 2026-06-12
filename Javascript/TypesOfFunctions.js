
// FUNCTION DECLARATION
function movieTicketPrice(age){
    let price;
    if(age <=0 || age>= 100){
        return "Enter the valid age: "
    }
    if(age >=1 && age <= 18){
        price = 100;
    }else if(age >= 18){
        price = 150;
    }
    return price;
}

console.log(movieTicketPrice(12));
console.log(movieTicketPrice(19));
console.log(movieTicketPrice(54));
console.log(movieTicketPrice(101));


// FUNCTION EXPRESSION

let isPasswordStrong = function(password){
    if(password.length >= 8){
        return "Password is Strong";
    }else{
        return "Password is week";
    }
}
console.log(isPasswordStrong("78932njk"));
console.log(isPasswordStrong("saie0"));

// ARROW FUNCTION
let convertMinuteToHours  = (min) => (min / 60);
let convertHoursToMinutes = (hours) => (hours * 60);


console.log(convertMinuteToHours(240));
console.log(convertHoursToMinutes(6));

let square = (x) =>x*x;

console.log(square(3));

// IMMEDIATELY INVOKED FUNCTION EXPRESSION

(
    function() {
        console.log("IMMEDIATELY INVOKED FUNCTION EXPRESSION");
    }
)();