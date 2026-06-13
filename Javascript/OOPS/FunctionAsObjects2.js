
function vipDiscount(price){
    price = price - price * 0.2;
    return price;
}

function flatDiscount(price){
    price = price - price * 0.05;
    return price;
}

function checkout(price, applyDiscount){
    let finalPrice = applyDiscount(price);
    console.log("Total price: ", finalPrice);
}

checkout(1000, vipDiscount);
checkout(1000, flatDiscount);

console.log("Notification Sender: ");

function sendSMS(msg){
    console.log("SMS sent: ", msg);
}
function sendEmail(msg){
    console.log("Email sent: ", msg);
}

function alertUser(message, deliveryMethod){
    deliveryMethod(message);
}

alertUser("Your OTP is 7897", sendSMS);
alertUser("Your invoice is ready!", sendEmail);


console.log("The Movie Critic: ");

function isGoodRating(rating){
    if(rating > 7){
        return true;
    }
    return false;
}

function isRecent(year){
    if(year > 2024){
        return true;
    }
    return false;
}

function recommendMovie(value, criteria){
    if(criteria(value) == true){
        return "Yes";
    } 
    return "No";
}

console.log(recommendMovie(8, isGoodRating));
console.log(recommendMovie(2025, isRecent));