//Array Destructuring
// Destructuring is a concept of breaking data structure , like array or object literal into data pieces or in other words individual varibles

//let arr = [80,90,93,26];
//let [a,b,c,d] = arr;
//console.log(a,b,c,d)


//or 
function test(){
    return [80,90,93,26];
}

let [a,b,c,d] = test()
console.log(a,b,c,d)

// use to swap

let x1=4;
let y1=5;
[x1,y1]=[y1,x1]
console.log(a,b);

//rest operator

let arr=[4,5,6]
let[x2,...y2] = arr;
console.log(x2,y2)

// undefined 

let [x3,y3=7,z3] = [5,,7]; // for setting the default value set y3 = 0
console.log(x3,y3,z3);
