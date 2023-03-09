// class, class expression, and static members
// The whole concept of the class is to create a blueprint or design or commonly referred to as prototype
// object is a variable or instance of the class
// In ES6 we have a class keyword to create a class whereas , in es5 we were using a constructor function

let getData = "showData"
class House{
    constructor(Doors,Windows){
        console.log("Constructor Invoked");
        this.Doors = Doors;
        this.Windows = Windows;
    }
    showData(){  // can be written in dynamic binding as [getData]
        console.log(this.Doors,this.Windows)
    }
}

const obj1 = new House(5,6);
obj1.showData()
// constructor is a method which is executed immediately you create the instance of a class
// use of static keyword to get the values instead of  using "this" instance

class House2{
    static test2(){
        console.log("Hey bRO i AM sTATic")
        this.testing();
    }
    static appversion  = 2.1
    static testing(){
        console.log("Godl")
    }
}

House2.test2();
console.log(House2.appversion)

// What is a class expression ======>
const HouseBig = class{
    constructor(){
        console.log("Called House Big")
    }
}

const obj = new HouseBig();


// Why static members ===> for creating a module where we do not need to instantiate the class - so we create a class and create those members as static members

