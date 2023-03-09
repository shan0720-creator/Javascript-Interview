// What is the purpose of call(), apply(), and blind()?
// call method is used to change the reference or context or value of "this object"
// call apply bind methods are used to change the reference of this keyword so that it doesnt point to the global window object

function test(a,b){
    console.log(this);
    console.log(a,b)
}

let obj={
  a:5
}
test.call(obj,5,6); // if you pass 5 and 6 only then 5=this and 6=a and b is undefined
//  Apply method takes only two parameters first one is for the this object and secondone is the an array of elements whatever the values are assigned to all of them respectively

function test2(a,b,c){
    console.log(this);
    console.log(a,b,c)
}

let obj2={
    a:5
}

test2.apply(obj2,[5,6,7])

// bind returns the reference of the function and whenever you need to use the function , it returns another function and it acts like function expression
const fe = test.bind(obj,4,6);
fe();

