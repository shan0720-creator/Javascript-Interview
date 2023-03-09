// Array starts from here

let arr = [4,7,9];
let arr1 = ["Hi",true,900] // 0 1 2 indexes 
console.log(arr);
console.log(arr1);
console.log(arr1.length);
console.log(arr[arr.length-1])


// aLSO 

let arr3 = [
    
      {pCode:1,pName:'Apple'},
      {pCode:2,pName:'bpple'},
      {pCode:3,pName:'cpple'},

    
];

console.log(arr3[0].pName); //Assigning arrays like this also

// Traversal loop
let arr4 = ["ES5","ES6","ES7","ES8"]
for(let i=0; i<arr.length; i++){
    console.log(arr4[i]);
}

// After the introduction of es6 we have for in loop which gives out the index number only
for( let elem in arr){
    console.log(elem)
}
// use the for of loop to display the values

for(let elem of arr4){
    console.log(elem)
}

// aNOTHER way 

arr4.forEach((element,index) => {
    console.log(element,index)   //foreach loop cannot be stopped in between like you break the loop
});