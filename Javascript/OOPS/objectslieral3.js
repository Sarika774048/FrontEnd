
const mobile = {
    brand : "Apple",
    model : "iPhone14",
    batteryLevel : 100,

    useApp : function () {
        this.batteryLevel -= 10;
        console.log("Battery level: ", this.batteryLevel);
    },

    charge : function () {
        this.batteryLevel += 10;
        console.log("Battery level: ", this.batteryLevel);
    }
};

console.log(mobile.brand);
console.log(mobile.model);
console.log(mobile.batteryLevel);

mobile.useApp();
mobile.useApp();
mobile.useApp();
mobile.useApp();

mobile.charge();
mobile.charge();

