//How to flatten a 2d array
// Flattening an array is means converting multidimensional array i.e, 2D,3D array into a single dimensional array

// to flatten an array you have to use reduce() method

// lets say that if we want to sum of all elements from an array , then  its kind of an aggregate or accumulative function . The result is combined.
let arr = [2,4,6,8]
let result = arr.reduce((accumulator,current)=>{
    return accumulator+current; // to get the product you can write accumulator*current
})

console.log(result);


// How to initialize the accumuluator value 
//let result = arr.reduce((accumulator,current)=>{
   // return accumulator+current;
//}10)

// sum is 30 in above case


let arr2 = [2,4,5,6,8]

let result2 = arr2.reduce((accumulator,current,index)=>{
    accumulator+=current;
    if(index===arr2.length-1){
        return accumulator/arr2.length                    ///This is how to calculate the avg of numbers
    }
    return accumulator
});

console.log(result2);


// A reduceRight loops array from array.length-1 till 0th index
// hOW dO you flatten an array 
// for example

let arr3=[
   [45,90],
   [5,6],
   [2,4]
];

let fArr = arr3.reduce((accumulator,current)=>{
    return accumulator.concat(current)
},[]) //  making sure that an empty array is here

console.log(fArr)


// Get the sum of salary

const employees  = [
    {eNo:1001,salary:3000},
    {eNo:1002,salary:2200},
    {eNo:1003,salary:3400},
    {eNo:1004,salary:6000}
]

const sumSal = employees.reduce((accumulator,current)=>{
     return accumulator+current.salary;
},0)

console.log(sumSal);