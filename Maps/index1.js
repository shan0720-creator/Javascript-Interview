// Maps and Set

// Any programming language has various data structures
// In Javascript we have Arrays and Object Literals which are very Powerful data structures
// In ES6 We have Map WeakMap Set weakset
// Map is also similar but incase of map the keys can also have types like string ,number, boolean
// In fact this is the collection or data structure where you are mapping value to value
// values inserted in map collection are retrieved in the same order.


let product = new Map();
product.set('pCode','1001').set(1,'Apple').set(true,'Available');
console.log(product.get(1))
console.log(product.size) // To Get The Size of the Map
 /// product.set() returns a map
 console.log(product)


//  Map is iterable
// We can loop through map collection
// Methods to be used
// values(), keys(), and enteries()
for( let v of product.values()){
    console.log(v);
}

for(let k of product.keys()){
    console.log(k)
}

// enteries return both key and value
for(let e of product.entries()){
    console.log(e)
}

// use of template literals
for( let [k,v] of product.entries()){
    console.log(`${k}-${v}`)
}



let obj={
    pCode:1001,
    pName:'Orange',
    price: 56
}
console.log(Object.entries(obj)) // object converted into single array
console.log(product)

//convert the map into object

let product1=new Map();
product1.set('pCode',1001)
        .set('pName','Orange')
        .set('price',56)
let obj1 = Object.fromEntries(product1.entries());
console.log(obj1);

// map to simple object or simple object map
// Map.has(key) checks whether the given key is existing in the map or not
console.log(product.has('pCode'))
product.forEach((v,k,m)=>{
    console.log(`${v}-${k}`) // foreach cannot be broken in between it has to finish

})

// delete() method removes values by key and clear method wipes out everything from the map
product1.delete('pName');
product.clear()
console.log(product1)


// Advantages of using map over object literal
// Map keys can also be values they can be of any data type
// objects have keys as strings value to value mapping is possible
// In  map keys are ordered the insertion and retrival is always in the same order
// Keys are not ordered in objects
// Map has size property which returns number of key/values pairs
// object doesnt have any direct way you need to code to get the count
// Maps are iterable , objects are not iterable
// maps are quite optimised for data manipulation where as object is not optimised for data manipulation

// how to covert simple objects to map

let objx = {
    pcode:1001,
    pName: 'Orange',
    price:56
}

let m = new Map(Object.entries(objx));
console.log(m)