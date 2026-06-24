function Student(name, age, skills){
    this.name = name;
    this.age = age;
    this.skills = skills;

    Student.prototype.introduce = function(){
        console.log(`I am ${this.name} and i am ${this.age} years old. I have proficiency in ${this.skills}`);
    }

}

const s1 = new Student("siri", 20, "java");
console.log(s1);
s1.introduce();

const s2 = new Student("piko", 21, "javascript");
console.log(s2);
s2.introduce();