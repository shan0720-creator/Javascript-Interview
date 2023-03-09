// Modifier "m" allows multi-line matching
// # Example: - Hello line one
            //  Hello line two
            //  Hello line three
// If you want to search for the multi-line beginning with the Hello , you will use
//m modifier
let msg = "Hello line one\nHello line two\nHello line three";
console.log(msg.match(/^Hello/gm));
// you can also use back ticks  `alkkdjkajdadjka` like template literals and check the result
let msg2 = `Hello line one 1
Hello line two 2
Hello line three 3`;
console.log(msg2.match(/\d$/gm))
