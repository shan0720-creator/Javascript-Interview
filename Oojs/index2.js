// What is this object
// This object is a common object used at many places in day to day programming
// the definition of this object is that it contains the current context

// This object can have different values depending on where it is placed


console.log(this)

/*

 function test(){
    console.log(this.a)
 }

 const obj = {
    test:function(){        //()=> it refers to window
        console.log(this);
    }
 }

 obj.test(); // this object is not inside any function or wrapper or an object literal or a class, this doesnt work with arrow function in current context

 */