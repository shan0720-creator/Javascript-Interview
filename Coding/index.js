let arr=[4,5,7]
console.log(toString.call(arr)) 

// toString.call() is very useful when you have to deal with more detailed type of values
// Removing duplicate values from an array

// we will be using two methods to remove the duplicates values from array

// 1.) filter() and indexOf()
// 2.) set and [...] (Spread operator)

let arr2 = [1,2,3,4,5,3,5]

const result = arr2.filter((v,i)=>{
    console.log(v+"-"+arr2.indexOf(v)+"-"+i)
})

console.log(result)
// check the unique elements in array

let uArr = [...new Set(arr)];
console.log(uArr);

// filter out duplicates in an array

let ur2 = arr2.filter((v,i)=>{
    return arr2.indexOf(v)!==i;
})
console.log(ur2)

// filter out truthy values from truthy and falsy values
let arr3 = [false,0,NaN,6,undefined,90,'','Hi'];


let nArr = arr3.filter((v,i)=>{
    return v;
})

console.log(nArr);


// There are falsy values like : - false, NaN, 0 etc from an array , you can use the truthy and falsy technique

// Solve the factorial Problem
n = parseInt(prompt("Enter a number:"));
factorial=1;

for(;n>=1;n--){
    factorial = factorial * n;
}
console.log("Factorial="+factorial)


// Prime Number
var n = parseInt(prompt("Enter a number:"))
isPrime = true;
for(let cnt=2; cnt<n; cnt++){
    if(n%cnt===0){
        isPrime = false;
        break;
    }else{
        console.log("Prime")
    }
   
}

if(isPrime==true){
    console.log(n + " is a prime number")
}else{
    console.log(n + " is not a prime number");
}


// check whether a character is a vowel or consonant
let ch;
function getVal(){
    ch = prompt("Enter character :");
    ch = ch.toLowerCase();
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        console.log("Is Vowel")
    }else{
        console.log("Is consonant")
    }

    
}
getVal();


// Array Intersection and Union - The ES6 Way
// Intersection : - values which are present in both the arrays
// Union: - It is the combination of all the array elements

//Intersection
let arrOne = [1,3,5,7,8,9,2];
let arrTwo = [2,4,6,8,10];
let arrInt = arrOne.filter((v)=>{
    return arrTwo.includes(v);
})

//Union
console.log(arrInt);
let arrU = [...new Set([...arrOne,...arrTwo])];
console.log(arrU)

//Fibonacci Series
let limit = parseInt(prompt("Enter a number:"));
let a = 0;
let b = 1;
let fn = a+b;
console.log(a);
do{
    console.log(fn);
    fn=a+b;
    a=b;
    b=fn;
}while(fn<limit)


//Reverse a number and Palindrome Number
let num = parseInt(prompt("Enter a number: "));
let rev = 0;
let rem = 0;
while(num>0){
    rem = num%10;
    rev = (rev*10)+rem;
    num = parseInt(num/10)
}

console.log(rev);



