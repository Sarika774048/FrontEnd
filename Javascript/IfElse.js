// if statement

let cartTotal = 20000;
if(cartTotal >= 10000){
    console.log("You are eligible for free shipping!")
}

let isVIP = true;
if(isVIP){
    console.log("Welcome to the VIP Lounge!");
}else{
    console.log("Welcome to the Regular Lounge!");
}

// Switch statement is always strict equality check

let userRole = "edito";

switch(userRole){
    case "admin":
        console.log("Admin access granted");
        break;
    case "editor":
        console.log("Editor access granted!");
        break;
    case "student":
        console.log("Student access granted!");
        break;
    case "viewer":
        console.log("Viewer access granted!");
        break
    default:
        console.log("Access Denied");
}

let day = 3;

switch(day){
    case 0:
    case 6:
        console.log("Weekend!");
        break;
    case 1:
        console.log("Happy Monday!");
        break;
    case 5:
        console.log("Thank God it is Friday!");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Mid week");
        break;
    default:
        console.log("Invalid day!");
}


// ternary operator

let age = 50;
console.log( age >= 18? "Can Vote" : "Not eligible to vote");