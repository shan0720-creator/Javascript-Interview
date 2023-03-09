// callback functions are used when there is an Asynchronous process
// A process which takes some time to execute is an asynchronous process, i.e: - it wont execute immediately

function fetchData(cb){   // cb passed as a callback function in this case.
    let data;                      
    setTimeout(()=>{
        data={pCode:1001,pName:'Orange'}
        cb(data);
    },2000)
}


console.log("Starts");              //logged ouput is starts undefined ends - as because fetchdata function is taking time, 
fetchData(function(data){
    console.log(data);               // callback function is a function as a parameter in another function 
    console.log("Ends")
});         

function cSqr(n,cb){
     setTimeout(()=>{
         cb(n*n);
    },2000)
}


cSqr(2,function(res){                            //callback Hell or pyramid of doom
    console.log(res);                           // to write callback functions in better way we have promises in javascript                                            
    cSqr(res,function(res1){                    // it is difficult to handle as there are multiple API calls and callbacks functions
        console.log(res1);                      
    })
});


