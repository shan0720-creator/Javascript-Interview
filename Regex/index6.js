// Modifier "/u" is used with unicode values
// Unicode is universal set of characters used by all programming languages, across various platforms and software applications
// Codepoint : - code point is the hexadecimal number assigned to each character
// A - u0041 - this is code point
// A plane in unicode standards is a group of 64,536 code points
// 17 planes in total

console.log('e');
console.log('e\u0301');
let str = "This is my face. Tell me how do I look";
console.log(str.match(/\p{S}/gu)); // S for all string search // L for letter search


