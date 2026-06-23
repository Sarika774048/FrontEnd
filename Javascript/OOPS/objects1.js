// object literal notation 

const airline = {
    reservationId : 123,
    passengerName : "sarika",
    flightNumber : "RT50",
    seatNumber : 12,
    reservationStatus : "boarded",
    100 : "century",

    bookReservation : () => {
        console.log("Reservation is done...");
    },

    cancelReservation : () => {
        console.log("Reservation cancelled!");
    },
    checkIn: () =>{
        console.log("Check in is done!");
    }
}

for(key in airline){
    console.log( key +" : " + airline[key]);
}

console.log(airline[100]);
const keys = Object.keys(airline);

for(let i = 0; i<keys.length; i++){
    console.log(keys[i] + " : " + airline[keys[i]]);
}

const values = Object.values(airline);
console.log("values: " + values);

console.log(Object.entries(airline));
const entries = Object.entries(airline);

for(let i=0; i<entries.length; i++){
    for(let j=0; j<entries[i].length; j++){
        console.log(entries[i][j]);
    }
}

for(let i=0; i<entries.length; i++){
    console.log("Entry : "+entries[i][0] + " : " + entries[i][1]);
}
