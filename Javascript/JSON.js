const serverResponse = '{"customerName": "Sarika", "isPremium": true, "cartItems": [{"name": "Laptop", "price": 80000}, {"name": "Mouse", "price": 1500}]}';

const data = JSON.parse(serverResponse);
console.log(data);

console.log(data.customerName);
console.log(data.isPremium);

console.log(data.cartItems[0].name);
console.log(data.cartItems[0].price);
console.log(data.cartItems[1].name);
console.log(data.cartItems[1].price);

const response = {
    id : 12,
    message  : "data received"
};

console.log(response);

const stringifyData = JSON.stringify(response);
console.log(stringifyData);
