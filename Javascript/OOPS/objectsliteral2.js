
let student;
student = {
    // has part
    name : "Sarika",
    grade : "A+",
    age : 21,
    
    // does part
    coding: function(){
        console.log("Sarika is coding...!");
    },

    singing : function(){
        console.log("Sarika don't sing......!");
    },

    dancing : function() {
        console.log("Sarika likes dancing.....!");
    }
};

console.log(student.name);
console.log(student.grade);
console.log(student.age);

student.coding();
student.singing();
student.dancing();
