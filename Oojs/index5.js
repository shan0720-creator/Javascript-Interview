//inheritance , subclassing and extending built in class
// inheritance or subclassing is very important concept and often used with object oriented patterns
// with es5 there were different ways for inheritance , but in ES6 extends is the keyword to inherit a class

// suppose we have a String class,  here the child class is inheriting properties from the String class as it is parent
class Child extends String{
   noc(str){
    console.log(str.length) // the child can have its own property
   }
}

const obj = new Child("Test string");
console.log(obj.toLocaleLowerCase());
obj.noc("new string here")


class Parent{
    constructor(a){
        this.a = a;
        console.log("Parent")
    }
    pMethod(){
        console.log("I am Father",this.a)
    }
}

class Child2 extends Parent{
   constructor(a){
    super(a);   /// the super key word is used here to call the parent constructor //and it must be called explicity then only the child class constructor is called
   }
   cMethod(){
    super.pMethod();
   }               // super keyword allows you to acces the parent class members

}

const obj1 = new Child2(32);
obj1.pMethod();
obj1.cMethod();

// To override a method in javascript we use the super keyword