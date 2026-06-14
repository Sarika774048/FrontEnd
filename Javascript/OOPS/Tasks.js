console.log("Inventory Management System!");

let storeInventory = {
    storeName : "TechZone",
    itemPrice : 500,
    stockQuantity : 300,

    restock : function (quantity){
        if(quantity > 0){
        this.stockQuantity += quantity;
        console.log("Stocks are added, Total Stocks: ", this.stockQuantity);
        }
    },
    sellItem : function (quantity){
        if(quantity <= this.stockQuantity && quantity > 0){
        this.stockQuantity -= quantity;
        console.log("Stocks sold, Leftover stock: ", this.stockQuantity);
        }
    }
}

console.log(storeInventory.stockQuantity);
storeInventory.restock(50);
storeInventory.sellItem(10);
console.log(storeInventory.stockQuantity);

console.log("The Secret Value: (Scope & Closures): ");

function bankVault(pin){
    let secretPin = 4321;

    function accessVault (pin){
        if(secretPin === pin){
            console.log("Access Granted!");
        }else{
            console.log("Wrong PIN. Alarm triggered!");
        }
    }
    accessVault(pin);
}

bankVault(43210);

