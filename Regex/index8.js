//  Quantifiers
// As the name speaks, it is about quantity
// *(It means 0 or more times)
/s*/ // it returns all characters in string with 0 or more matches
let str = "This isss a trial string";
let ptrn = /is*/g;
console.log(str.match(ptrn));

"+" // sign searches for 1 or more occurences of the given criteria 

let str2 = "This isss a trial string";
let ptrn2 = /is+/g;
console.log(str2.match(ptrn2)); //  here s+ means atleast one or more occurences
                                // ? will show one or more occurences or 0 even

let str3 = "hello helo";
let ptrn3 = /hel{2}o/g;

console.log(str3.match(ptrn3));
// l should be 2 times then only return the word;


let str4= "hello helo he helllo hellllooo"
let ptrn4 = /hel{2,4}o/g;
console.log(str4.match(ptrn));
// return  hellos where the number of l is between 2 and 4





