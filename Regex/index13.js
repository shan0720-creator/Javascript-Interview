// Look Behind Assertions
let str = "Dr.Java and Mr.Script are here!"
let ptrn = /(?<=Dr.)\w+/g;
console.log(str.match(ptrn));

// Again 
let str1 = "Told 10 times to pay $30";
let ptrn1 = /(?<=\$)\d+/g;
console.log(str.match(ptrn1));

// used to check since $ is behind 30 so look behind Assertions

let str2 = "Told 10 times to pay $30";
let ptrn2 = /\(?<=\$)\d+/g; // /\b(?<=\$)\d+\b/g;
console.log(str.match(ptrn1));

