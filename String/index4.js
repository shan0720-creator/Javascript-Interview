// Extraction methods 

// We can divide the extract methods in 2 main categories

// 1. String Extraction methods
// 2. Character Extraction methods

// There are three methods which help to extract strings:

// slice substr substring

// The slice method returns 'the extracted part as a new String i.e: without changing the original string'
let str = "First second third fourth";
console.log(str.slice(10,16));


// substr method

let str2 = "I am the lord Asmodeus";
console.log(str2.substr(10,3));

// slice and substr are more or less similar methods but substr takes no of characters instead of endindex

// for -10 it will start from the last
// The substring method does not take in negative values

let str3 = "I am ugly but you";
console.log(str3.substring(10,15))


//charAt() and charCodeAt() ,  charAt() - returns character charCodeAt() - returns integer unicode value between 0 and 65535

let val = "First second";

console.log(str.charAt(3));
console.log(str.charAt());
console.log(str.charCodeAt(3)); // the value of s at 3rd index in unicode is 115 and if you dont provide any index it is assumed to be 0 and returns the value of first character
console.log(str.charCodeAt());





