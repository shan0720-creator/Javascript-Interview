// Ajax or also called as AJAX call, you can fetch the form from the server and display without refreshing the entire page without refreshing the entire page
// Ajax is about making an HTTP call to the webservice, API or REST API and that too without refreshing the entire page
//Javascript gives the fetch API nowadays to make an AJAX call.
//AJAX - Asynchronous Javascript and XML
// Last word XML in AJAX is not related to XML data format , but it is the reference of XMLHttpRequest object only
// syntax: - XMLHttpRequest.open(method,URL,[async,user,password]) //async is a boolean parameter and by default it is true
// "method" arguement is any HTTP request method like: - "GET" to get or fetch the data
// "POST" to add or insert data
// "PUT" to edit the data
// "DELETE" to delete the data
let request  = new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/comments");

request.responseType='json';
request.timeout=200; // given the fetch request time a max of 200 milliseconds
request.send();
request.onload = function(){
   if(request.status===200){
    console.log(request.response);
   }else{
    console.log("Invalid Request")
   }
}
request.ontimeout = function(){
    console.log("Timed out...") //if exceeded timeout = 200 , display the 'Time out...'
}
 //it passes null value
               //load(): - is fired when the XHR transaction completes successfully

// response property contains the body content of the response which is recieved
// XHR objects methods like: - open() and send() 
// XHR Objects event like: - load
// XHR objects property like: - response
// The values for responseType other than "JSON" are:-
// XMLHttpRequest.responseType = " ";
// XMLHttpRequest.responseType = 'text'
// Both describes the same meaning i.e: - "Data is text only"
// The values for responseType other than "JSON" are:-
// XMLHttpRequest.responseType='blob' // binary data or // 'text'
// XMLHttpRequest.responseType='document' //document
//"Onprogress- is fired continuosly when a request recieves data"
//"onerror"- is fired when there is an error encountered while requesting
// request.onprogress = function(){
   //statement
//}
// request.onerror = function(){

//}

// Important and commonly used event called "onreadystatechange" "onreadystatechange" is fired when  a property called "readyState" changes
// 0 - unsent - Client has been created, opne() not called yet
// 1 - open - open() has been called
// 2 - Headers_Recieved - send() has been called and headers and status are available
// 3 - loading - downloading responseText holds partial data
// 4 - Done - The operation is complete

let request  = new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/comments");

request.responseType='json';
request.send();
request.onreadystatechange = function(){
   if(request.readyState===4 && request.status===200){
    console.log(request.getAllResponseHeaders());
    console.log(request.getResponseHeader('content-type'));// get the content-type header
    console.log(request.response);
   }             /// request.abort() to abort the request forces the xhr request to stop the execution

}
// XMLHttpRequest.setRequestHeader(header,value) // after the open() and before send() to set the headers 
// request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// XMLHttpRequest.setRequestHeader(header,value)
// request.send()
// AJAX is all about making a call to the server to fetch , delete, retrieve, or edit the data
// Http call for files - download/upload the data
// We make HTTP calls to the server with AJAX and with its help the browser does not refresh