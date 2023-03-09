// To save ourselves from callback hell , we have promises in javascript
// Promise object is a better way to write callback processes and the best way to know this is by converting or rather refactoring code of callback function with a promise
let pr = new Promise((resolve,reject)=>{

    //statements
    resolve("Data is processed"); 
    // instead of resolve you can also say reject
                        // suppose there are a bunch of statements we execute, after that resolve is called meaning that everything is resolved !
                        reject("Rejected")
})

console.log(pr);

// when  we create a promise , by default there is a pending state/pending status
//  

let pr1 = new Promise((resolve,reject)=>{
    reject("Error")
})
pr1.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log("err-"+err)
}).finally(()=>{
    console.log("Finishing the process")
})


const cSqr = (a)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a*a)
        })
    })
}

cSqr(3).then((res)=>{
    console.log(res)  
    return  cSqr(res)         // You can include multiple nested functions inside of it like for callback nested hell
}).then((res1)=>{
    console.log(res1)           // You can include multiple nested functions inside of it like for callback nested hell
}).catch((err)=>{
    console.log("err-"+err)             // promise chaining - for using .then  multiple times you have to return the result from previous .then you can just return cSqr(res)
}).finally(()=>{
    console.log("Square hogya bey")        // Every then should return a promise when you are chaining the promise with multiple processes
                                          // .finally() - this block is execute a process which should be executed at the end
                                          //
})

// once you execute resolve statement it doesnt see further , ek baar resolve ke andar kuch bhi daal diye wahi value print hogi chahe kuch bhi ho jaae
// what will be the status of promise when resolved or rejected 
// it will have status "resolve(fulfill)" or "rejected"
