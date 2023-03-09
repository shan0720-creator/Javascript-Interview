// Word boundaries using "\b"
// \b is used like anchors i.e: -  the caret(^) and the dollar ($) signs
let str = "testing a test to testify";
let ptrn = /\btest\b/g;
console.log(str.match(ptrn));

let str2 = "126 40677 8933 45 653";
let ptrn2 = /\b45/g;
console.log(str2.match(ptrn2));
// The above search finds 45 in the string , its not a numeric value

let str3 = "126 40677 8933 45 633";
let ptrn3 = /\b\d\d\d\b/g;
console.log(str3.match(ptrn3));
// one slash for each digit so finds all three digit numbers


