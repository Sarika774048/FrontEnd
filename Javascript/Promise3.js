
function checkInventory(itemId){
    return new Promise((resolve, reject) => {
        console.log(`Checking inventory database for item: ${itemId}`);

        setTimeout( () => {
            let inStock = true;

            if(inStock){
                resolve({id : itemId,
                        status: "Available",
                        quantity: 10
                });
            }else{
                reject(`Item ${itemId} is out of stock.`);
            }
        }, 2000);

    });

}


checkInventory(101)
.then(
    (item)=>{
        console.log(`
             ID: ${item.id},
             STATUS: ${item.status},
             QUANTITY : ${item.quantity},`
        );

    }
)
.catch(
    () => {
        console.log("Item not found!");
    }
);