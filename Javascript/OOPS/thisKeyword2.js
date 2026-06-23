const Student = {
    name : "Sarika",
    age : 21,
    skill : ["JavaScript", "Java", "MySQL"],
    noOfClass : 13,
    address : {
        street : "Roopena agrahara",
        city : "blr",
        state : "karnataka"
    },

    introduce : function(){
        console.log(`Hi I am ${this.name}`);
        console.log(`i am ${this.age} years old`);
        console.log(`I have a Skill of ${this.skill}`);
    },
    
    celebrateBirthday : function(){
        this.age++;
        console.log(`i am celebrating my bday am now turned ${this.age}`);
    }
};

Student.introduce();
Student.celebrateBirthday();
console.log(Student.address.city);
console.log(Student.address.street);
console.log(Student.address.state);