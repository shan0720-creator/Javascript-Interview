// set
// set collection or data structures does not have keys , it has only values and that too unique values 
// so if you add the same or duplicate value it is ignored
// it means you will have unique or non repeating values only
let names = new Set(['first','second','Third']);
//names.add('first');
//names.add('second');
//names.add('third');
//names.add('first');
console.log(names);
console.log(names.size);
// set is also iterable , so you can put a for of... directly on the set collection
// forEach() can also be used to loop through collection
for( let v of names){   // even if you use let v of names.entries() both are values
    console.log(v);
}
names.forEach((v1,v2,s)=>{ 
    console.log(v1,v2);
})
names.delete("first") // or use .clear() method to delete all
console.log(names)
// the methods like values(), keys(), entries() methods are not needed , but just to make it compatible with map() method you see these methods applied with set() as well
//map() method has key and value and set() method has only values which has unique collection , that means values will not repeat
