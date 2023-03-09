// Destructuring Object Literal

// Destructuring says that something is getting destructured
// Destructuring is a concept of breaking data structure like array or object literal into data pieces or in other words individual variables
function test(){
const obj = {
    pcode:1003,
    pName:'Apple',

}
return obj
}


let {pcode=0,pName} = test(); // assign default value as pcode = 0 if pcode doesnt exist
console.log(pcode,pName);


// Object literal destructuring is often used in all programs , because you get the data from the server in a JSON format which is assigned to a javascript object literal
