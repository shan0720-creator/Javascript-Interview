// Introduction to Assertions
// 'Assertions' are provision of forcing a regular expression pattern
// We can decide may be a line or word boundaries or end and beginning with a specific word or a character
// ^ Carat : - To check whether something begins with a given value or not
console.log(/^This./.test("This is a string"))
// The string "This is a string begins with "This" hence True
// $ -  denotes the end of the string
console.log(/hello$/.test("Does hello"))