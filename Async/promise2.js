// Promise.all() Vs. Promise.allSettled() vs. Promise.race()
// Nowadays we go with async/await rather than resolve() and reject()

// Promise.all()
// Promise.allSettled()
// Promise.race()

// when you have multiple promises as input it should return a single promise after all promises are resolved, then you can use the all()

// Promise.all([p1,p2,p3,....,pn]).then(values)=>{
    // statements

//}

// There can be any iterable object, but most of the time there is always an array which contains each promise reference
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve("Promise1")
    },2000)
})


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve("Promise2")
    },2000)
})


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve("Promise3")
    },12000)
})

Promise.all([p3,p2,p1]).then((prMsgs)=>{ // sequence of the messages will be followed as by you , it can be p3,p1,p2 or p3,p2,p1 or any combination irrespective of time taken
     console.log(prMsgs);
}).catch((err)=>{
  console.log(err)  
})




//all() method is settled with only resolved promises, so if any promise returns error then it wont work

//allsettled() method waits for all promises regardless of thier state and returns promise at the end
//race() method returns a promise as soon as any of the promise returns the state from the iterable list is provided
// sabse pehle jo promise execute hua wahi return hoga
// even if the p2 is a string => it will be returned with all the promises , say that const p2 = "String"

const obj = Promise.race([]); //it is assigned empty array and its state is pending by default()
console.log(obj);


setTimeout(()=>{
    console.log(obj);
},2000)