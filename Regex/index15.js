// match() method returns an 'array' containing matched value
// Returns 'all' matching values in an array if the '/g' modifier is given
// Returns 'null' if there is no match
// Syntax of match() method

//string.match(regexPattern)
// Parameter/Arguement

let str = "this is how it is";
let ptrn = /is/g;
console.log(str.match(ptrn));


let str1 = "this is how it is";
let ptrn1 = /is/g;
const iObj = str1.matchAll(ptrn1)
for(let item of iObj){
    console.log(item[0] + "found at "+ item.index)
}

// matchAll() is a newer and improved way of match()
