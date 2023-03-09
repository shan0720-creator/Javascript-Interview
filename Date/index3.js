// For time, Javascript gives the very same
let dt = new Date();
console.log(dt.getTime());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());
dt.setTime(0);
console.log(dt);

// calculate the difference 

let date1 = new Date(2020,07,25);
let date2 = new Date(2020,07,23);

let n = date1.getTime() - date2.getTime();

n = (n/1000)/3600;

console.log(n);