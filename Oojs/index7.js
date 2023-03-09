// class Accessor getter and setter
// the accessor also known as a getter or setter methods, is an approach to create a property to a class
//The get and set keywords are used to create a method which acts as a property
// The getter method is executed when you read/get the value
// The setter method is executed when you assign to that property


class Vehicle{
    get Model(){
        console.log("Getter executed ")
        return '';
    }

    set Model(v){
        console.log("Setter executed")
    }
}

/// implying read only property as get method // getter method

class Vehicle2{
    #_model=''
    get Model(){
        
        return this.#_model;
    }

    set Model(v){
       if(v.length < 3){
        this.#_model = 'M' + v;
       }else{
        this.#_model = v;
       }
    }
}
const obj = new Vehicle2();
obj.Model = 'SU';
console.log(obj.Model) 