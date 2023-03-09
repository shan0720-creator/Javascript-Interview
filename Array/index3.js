// Add remove insert replacing element in an array

//There are 4 most known methods one can use to add or remove elements:


// - push() -pop() -shift() -unshift()

// push and unshift are used to add elements Syntax of push(): - 

// push method adds 1 or more element at the end of an array and it returns the new length i.e: - count of elements after adding elements
//unshift() method adds 1 or more element at the beginning of an array and it returns the new length count of elements after adding elements

//pop methods and shift methods are used to remove the elements

// pop method removes the last element from an array and it returns that removed element 

//shift() method removes the first element of an array and it returns that removed element

let arr = ["One","Two","Three","Four","Five"];
console.log(arr.push("Test")); // adds at last and returns count
console.log(arr);

console.log(arr.unshift("Test2")); // adds in the beginning
console.log(arr);

console.log(arr.pop()); // deletes the last element and returns it as well
console.log(arr);

console.log(arr.shift()); // deletes the first element and returns it as well
console.log(arr); 


// splice method can add, insert, replace, or even remove one or more elements

console.log(arr.splice(2)); // deletes the  element after index 2 all of them and returns it as well
console.log(arr);   // or (2,1) then three will be deleted 
                    //arr.splice(2,1,"new") this new will be added
                    // arr.splice(arr.length,0,new) // new will be added in the last // or for inserting in the first index (0,0,new)

// What does splice method return
// it returns the deleted items , if there is nothing to delete then it will return an empty array













