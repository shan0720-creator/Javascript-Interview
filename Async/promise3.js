//Explain functionality of async/await
// async/await is an easier way to deal with promises
//promise was an easier way to callback, but async/await is even easy to deal with asynchronous process
// By default any function without return statement returns undefined in Javascript
async function test(){

   //throw new Error("Err Found"); // Always in a state of return  // yOU DONT need to write a "return" statement for asynchronous function
}                           // to return a rejected state , throw statement is written to reject a Promise
                             //

const fn=test();
//console.log(fn);


const test2 = async()=>{
    return 0;
}

const fn2 = test();
console.log(fn2);


// await makes sure to wait till a "Promise" is settled, be it resolved or rejected
// The way we write then() for handling the promise for far,now we have "await"; we can remove then() and replace it with await

const cSqr = (a)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a*a)
        },2000)
    })
}

(async function (){
    let res = await cSqr(2);
    console.log(res);
    let res1 = await cSqr(res);              //You can use try and catch block
    console.log(res1)
    let res2 = await cSqr(res1);
    console.log(res2)

})();

//await is used with asynchronous function only 
// Asynchronous written before a function, that means the function is returning Promise only
// When a function is asynchronous i.e: async that means it is returning a promise and also that function becomes thenable

async function test(){

}

test().then(()=>{

}).catch(()=>{

})
   
