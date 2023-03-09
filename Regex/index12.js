// Code
// str = "Hi, Is it you, or not";
// pattern: /\w+(?=,)/
// For searching of all those words which have comma(,)
// look Ahead insertion
let str = "Hi, Is it you, or not";
let ptrn = /\w+(?=,)/g;
console.log(str.match(ptrn))

// Negative LookAhead Assertion
let str1 = "Hi, Is it you, or not";
let ptrn1 = /\b\w+(?!,)\b/g;
console.log(str.match(ptrn1))