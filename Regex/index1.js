//character classes
// "." (Dot)

// "." represents any character in a search pattern except a new line i.e:-
// "\n" or \u2028
// "\r" or  \u2029
// let str = "...";
// search all words beginning with w [any character] n

let str = "I wonder why its windy";         // w\nnder
let ptrn = /w.n/g;  // if you want the complete word - then /w.n\w+/g
console.log(str.match(ptrn)) 
// Remember! (.) Dot searches all the characters except for the new line
// \n is considered as any character by "." only if\s modifier is given
// -1st character can be any character 
// -2nd character should be "h" and then rest of letters
let str2 = "this is what that is";
let ptrn2 = /.h\w+/g;  // . is any character , h is h and w+ is complete word : - so example: - "that", "what"
console.log(str2.match(ptrn2));
// "\d" searches for digits in the string

let str3 = "I teach HTML5, CSS3, React 16.8, Angular 8+";
let ptrn3 = /\d/g; //  g for global serach and so the numbers 5,3,1,6,8,8
console.log(str3.match(ptrn3));
// "\D" is used to search the non-digit values

let str4 = "I teach HTML5, CSS3, React 16.8, Angular 8+";
let ptrn4 = /\D/g; //  g for global serach and so all the digits are returned
console.log(str4.match(ptrn4));


// character class
// "\w"
// It searches for word characters
// \w returns all the characters between [A-Z], [a-z], [0-9] and [_]
// #Example string = "! ." these characters are ignored
let str5= "Yes! I do know & 10 times I_say";
let ptrn5 = /\w/g;// for the total word : - add w+ instead of w
console.log(str5.match(ptrn5));


// \W is the absolute reverse of "\w"
// The way "\w" finds word characters,
// "\W" finds the other characters instead of words
let str6= "Yes! I do know & 10 times I_say";
let ptrn6 = /\w/g;// for the total word : - add w+ instead of w
console.log(str6.match(ptrn6));

// Character Class "\s" which searches for white spaces characters
// The list of space characters
// A space character- " "
// A tab character - "\t"
// A carriage return character - "\r"
// A new line character - "\n"
// A vertical tab character - "\v"
// A form feed character - "\f"

let str7 = "Yes! I do\t know & 10\n times I_say";
let ptrn7 = /\s/g;
console.log(str7.match(ptrn7))


// "\S" does exactly opposite "\s" i.e: - it searches for non-white space characters
// A non white space does not include: - 
// 1. A space character - " "
// 2. A tab character - "\t"
// 3. A carriage return character - "\r"
// 4. A new line character - "\n"
// 5. A vertical tab character -"\v"
// 6. A form feed character - "\f"

let str8 = "Hey I\n bought p e \vn";
let ptrn8 = /\S/g;
console.log(str8.match(ptrn8));

// \n, \t etc . can also be treated as character class
// search for a new line
// let ptrn = /\n/;
//search for only a tab
// let ptrn = /\t/;
// search for carriage return 
// let ptrn = /\r/;
// #Example : - search all the new lines in a string
// search all the tabs and new lines in a string
// let ptrn = /[\n\t]/g;
