const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");


 const btnClick = () =>{
    sessionStorage.setItem("key1",input.value) // localstorage.setItem("key1",input.value)
 }

 btn.addEventListener("click",btnClick);


 alert(sessionStorage.getItem("key1"))

// in session storage the data is availaible for only that session , if you switch tabs then data is not availaible 

//removeitem lengths etc are the methods avail ....
// removeItem("key1")


// for localstorage the data is stored permanently unless removed manually .
// But why localstorage as due the use of various apis , which takes much time to send the data , via local storage we can actually save the data as
//cache and save our loading time through api , even if you switch the tabs the localstorage displays the same data. //shopping carts data in ecommerce websites.

const btnClick1 = ()=>{
    localStorage.setItem(
      "key1",
      JSON.stringify({name:"Abhi",surname:"Singh"}) // in order to save the data in object format , convert it to the string format
    );
}

if(localStorage.getItem("key1")){
   console.log(JSON.parse(localStorage.getItem("key1")))
}
// session storage we can save about 5 mb of data

// for local storage it can be about 5 to 10 mb depending upon the browser.



