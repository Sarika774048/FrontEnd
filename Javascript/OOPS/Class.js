class Employee {
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    };

    details(){
        console.log(`My name is ${this.name}`);
        console.log(`My Email : ${this.email}`);
        console.log(`My password: ${this.password}`);
    };
}

const e1 = new Employee("Oil", "oil@gmail.com", 'oil9$');
console.log(e1);
e1.details();

const e2 = new Employee("ily", "ily@gmail.com", "ily69");
console.log(e2);
e2.details();