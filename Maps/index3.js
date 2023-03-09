//WeakMaP and wEAK sET
// Map and keys hold the keys in a strong way
// where as weak map and weak set hold the keys weakly
// keys in the weak maps are only objects, you can not have primitive keys like string , number;
// keys are weak or weakly held and it means if the keys are garbage collected so do the values
// because of weak keys - weakmap collection  does not have iterable methods like keys(),values(),or enteries()
// weak collections do not hold values when the garbage is collected this is very handy with the Dom , where dom nodes are removed the garbage collected locations will be as they are not strongly held
let product = new WeakMap();
let obj = {};
product.set(obj,1001);
console.log(product.get(obj));

// weakset is also a weakly held collection of objects and too unique ones
// The behavior is the same as weakmap values are removed on garbage collection if there is no direct reference of the object
let product2 = new WeakSet();
let obj5={};
let obj2 = {};
let obj3 = {};
product2.add(obj,1001);
product2.add(obj2,2002)
console.log(product2.has(obj))
// weak collections are also used , when you want to make sure that there are no memory leakages