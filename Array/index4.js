// How do you perform search in an array

// There are three methods indexof lastindexof includes()

let arr = ["one","Two","one","Three","Four","One","Five"]

console.log(arr.indexOf("one",3))

console.log(arr.lastIndexOf("One",3)) // Backward search is followed here so before three is searched

console.log(arr.includes("One")) // returns true


//find and findIndex method


let arr2 = [2300,4500,5600,7800,1200];
const rVal = arr2.findIndex((element)=>{
    return element>3000;          // These two methods find only one result at a time
});
const rVal2 = arr2.find((element)=>{
    return element>3000;
});

console.log(rVal)
console.log(rVal2)

// Filter method returns a new array rather than a single value

const rval3 = arr2.filter((element)=>{
   return element>3200;
})

console.log(rval3)

