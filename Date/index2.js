const dt = new Date();
// These are the various date methods 
// use these to get the values
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay());

// These are the values
let dt2 = new Date();
console.log(dt2);
dt2.setFullYear(2021);
console.log(dt2)
dt2.setMonth(7);
console.log(dt2)
dt2.setDate(13)
console.log(dt2)
// Date.parse() it parses a string of date and returns milliseconds

let date = Date.parse("2020-07-24");
console.log(date)

// Find date before a given number of days

let dt5 = new Date();
dt5.setDate(dt5.getDate()-100);
console.log(dt5);

// what will happen if you add 35 as date in Date() constructor
let dt6= new Date(2020,07,35);
console.log(dt6);


