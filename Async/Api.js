//The fetch Api
// In the newer version of javascript there is a better way to deal with the network requests i.e: fetch API
// The fetch API is a better, faster, and more efficient way to deal with HTTP or network requests
const comments = document.getElementsByClassName(".comments");
async function fetchData(){
    let data;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if(response.ok){
        data = await response.json(); // or response.text() to return the text data
        
        console.log(data); // get the header type console.log(response.headers) and console.log(response.headers.get('Content-Type))
    }
    console.log(response.status);
}

fetchData();

// or fetch('https://jsonplaceholder.typicode.com/users).then(response=>response.json()).then(data=>console.log(data))

// The fetch API by default makes a GET request In case if you want to make a POST request then the optional object parameter can be used

const todo={
    userId: 1001,
    id: 1,
    title: 'New title',
    completed: false,
}


fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers:{
       'Content-Type':'application/json; charset=utf-8'
    },
    body:JSON.stringify(todo)
}).then(response=>console.log(response))


//fetch API can also work with images will be taken up in upcoming fetch/image/bob lectures
// fetch API is better option to make AJAX or HTTP call and is a newer way introduced after ES6
// Explain the fetch API  - fetch API helps in making an AJAX call
// Add data - perform CRUD operations 
//Downlaoding/Upoading files- dealing with images.
