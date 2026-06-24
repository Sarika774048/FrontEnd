class Demo{
    constructor(name){
        if(this.constructor === Demo){
            throw new Error("Abstract class cannot be instatiated!");
        }
        this.name = name;
    };

    method1() {
        throw new Error("Override the abstract method");
    }
}

class child extends Demo{
  
    constructor(name){
        super(name);
    }

    method1(){
        console.log(`${this.name} is coding now!`);
    };
}


new child("sarika").method1();



