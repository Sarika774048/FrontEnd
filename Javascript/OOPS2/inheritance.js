class Employee{
    name;
    department;
    #salary;

    constructor(name, department, salary){
        this.name = name;
        this.department = department;
        this.#salary = salary;
    };

    set salary(salary){
        this.#salary = salary;
    };
    get salary(){
        return this.#salary;
    };

    getDetails(){
        console.log(`${this.name} || ${this.department} || ${this.#salary}`);
    };

    work(){
        console.log(`${this.name} is working hard`);
    };

    calulateBonus()
    {
        return this.#salary * 0.1;
    }
}

const e1 = new Employee("sarika", "dev", 50000);

console.log(e1.name);
console.log(e1.department);
console.log(e1.salary);
e1.work();

const bonus =  e1.calulateBonus();
console.log(e1.salary+bonus);

e1.salary = 70000;
console.log(e1.salary);

class Developer extends Employee{
    constructor(name, salary, language){
        super(name, "Engineer", salary);
        this.language = language;
    };

    coding(){
        console.log(`${this.name} is coding in ${this.language}`);
    }

    // overriden method
    work(){
        console.log(`${this.name} is writing ${this.language} code`);
    }

    // overriden method
    calulateBonus(){
        return this.salary * 0.2;
    }
}

const d1 = new Developer("Yogi", 80000, "Java");
d1.getDetails();
console.log(d1.language);
d1.work();
const bonusDev = d1.calulateBonus();
console.log("Bpnus: ", bonusDev);
