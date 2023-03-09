// How to sort an array in javascript

// In sorting one may expect the arrangement of values in ascending or descending order
// sort is the method used to sort the arrays


let products = [10,4,19,5];
products.sort(function(a,b){
    if(a<b){
       return -1;
    }
    if(a>b){
       return 1;
    }
    if(a==b){
       return 0;
    }
});
console.log(products);

//To sort an array in descending order there is a callback function passed to sort() method which we refer to as compare function

products.sort(function(a,b){
     if(a<b){
        return 1;
     }
     if(a>b){
        return -1;
     }
     if(a==b){
        return 0;
     }
});
console.log(products)
const employees = [
    {eNo:1001,salary:3000},
    {eNo:1002,salary:2200},
    {eNo:1003,salary:3400},
    {eNo:1004,salary:6000}
]

employees.sort(function(a,b){
    if(a.salary<b.salary){
        return -1;
    }
    if(a.salary>b.salary){
        return +1;
    }
    if(a.salary===b.salary){
        return 0;
    }
})
console.log(employees)

