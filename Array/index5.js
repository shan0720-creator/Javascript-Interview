//Lets talk about map method

let arr=[2,3,6,4,5];

let narr = arr.map(function(elem){
      

                                  //Returns the square of the integers
      return elem*elem;
})


console.log(narr);


let arr2 = ["Apple","Banana","Oranges"];

let lArr = arr2.map(elem=>elem.length); // display the length of each word
console.log(lArr);


// find out the square root of 

let arr3 = [25,16,144,36];

let lArr2 = arr3.map(elem=>Math.sqrt(elem));
console.log(lArr2)


// Fetch the pnames

let products=[
    {pCode:1,pName:"Apple"},
    {pCode:2,pName:"Banana"},
    {pCode:3,pName:"Grapes"},
    {pCode:4,pName:"Oranges"},

]

let pNames = products.map(elem=>elem.pName);
console.log(pNames)

//Map method is very useful method and used in most of the real world applications to loop through the array to display the data on page or to draw the dom



