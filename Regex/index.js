
let msg = "This is case sensitive";
let ptrn = RegExp("Case","i");
let pos = msg.search(ptrn);
console.log(pos);
// flag           vs     // description
// i - performs case-insensitive search
// g - Performs global match that is - it does not stop the search after first occurence
// m - performs multiline search
// s - Allows(.) to match new line characters. [ES2018 onwards]
// u - Switches on unicode pattern matching
// y - swicthes on "sticky" mode.

// using global and case insensitive serach at the same time
let msg1 = "This is case sensitive Case";
let str = msg1.match(/case/gi); // global and insensitive search
console.log(str)