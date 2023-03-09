// Greedy and lazy Behavior

let str = "Javascript 'ES6' and 'ES7' ";
let ptrn = /'.+'/g; // This syntax will return ["'ES6' and 'ES7'"], thats why greedy quantifier inorder to return just /'.+?'/
console.log(str.match(ptrn)); 
 // the use ? makes quantifier lazy: - it will only search for things included between quotes ' '
 