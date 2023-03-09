// Sets and range
let str = "I wonder why it's windy";
let ptrn = /[wio]/g; // searched and displayed array of characters w , i , and o, if want to return a word like won, win w[io]n, or /[i-o]/g; 
console.log(str.match(ptrn));

// [] is used to specify range
let str2 = "12 456 9878 4";
let ptrn2 = /[1-5]/g; // or for finding in the range of [A-Z] we use []
console.log(str2.match(ptrn2));





