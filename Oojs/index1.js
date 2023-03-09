//  What is an object literal in javascript
// There are many ways to create an object in javascript

//There is also a class "Object" which can allow you to create an object

// In any case of object creation the basic idea is that we are creating a container to bundle data pieces
// Different data pieces which you may want to pass to a function or may be to a server , then you bundle the data pieces in an object and pass it


// suppose
// obj = {
    //pcode,
    //pname,
    //price...
//}

// function product (obj){

//}


// What is a Object literal 
// It is simply a key:value pair data structure

let obj={};
obj.pCode = 1001;
obj.pName="Apple";   // These two are called as properties
obj.getData = function(){  //This is called method
    console.log(obj.pCode,obj.pName)
}

console.log(obj);

let obj2={
    pCode1:1001, // {id:1,sp:"ABC"} // you can add many values in this way
    pName:"Apple",
    getData(){
        console.log(obj2.pCode1,obj2.pName)
    }
}
obj.getData();
console.log(obj2);


let tV="pCode"
let obj3={
    [tV]:15650, // Dynamic keys as object literal
    pName:"orange",
    getData(){ //['get' + 'Data']
        console.log(obj3.pCode,obj3.pName);
    }
}

console.log(obj3)


// How can you add read only properties to an object
const proto = Object.defineProperty({},'pCode',{
    writable:false, //true or false , you can make the value of object writable or not
    configurable:true,
    value:2001
});

const obj5 = Object.create(proto)
obj5.pCode = 3001;
console.log(obj5.pCode)


// change the value via second
let obx = {a:'First'};
let obj1 = obx;
obj1.a = 'Second';
console.log(obx);

// How can we create a clone or seperate copy of an object literal
let obx2 = {a:'First'};
let obj4 = Object.assign({},obx2);
obj1.a = 'Second';
console.log(obx2);