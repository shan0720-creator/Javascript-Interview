// Modifier "/y"
// Sticky Modifier Or Sticky Flag
// There are few important points to discuss before we move ahead..
// exec method is used to check indexes of beginning word
let str = "not easy otherwise to touch hot";
let ptrn = /ot/g;

console.log(ptrn.lastIndex); // change the index of search :- ptrn.lastIndex = 3;
console.log(ptrn.exec(str));
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str));
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str));
console.log(ptrn.lastIndex)
console.log(ptrn.exec(str));

// lastIndex Property

// When we added "/g" i.e, global-search - everything we run exec(), it will search from the next position

// y modifier is used to search from the exact position
let str2 = "not easy otherwise to touch hot";
let ptrn2 = /\w+/gy;
ptrn.lastIndex = 4;
console.log(ptrn.exec(str));
// It does not skip the space , it checks at the exact spot


