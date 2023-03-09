// search() Method
// search() method helps to check whether a pattern is existing in a string or not and if exists then it returns the index number
let str = "this is how it is!";
let ptrn = /is/g;
console.log(str.search(ptrn));

//split() method
// split() converts string into an array with a given delimiter
// string.split(regexPattern/separator character)

let str1 = "this is how it is";
console.log(str.split(' ')); // the seperator is space given or you can add anything like 'is'
// or /\d/
// then digits as seperator
// if you want to include seperator as well in the output the  use () brackets 
// (/(\d)/) // (/(\d),3)); delimiter

//replace() method
// Find and replace 
//replace() returns a new string


let str2 = "this method is working";
let newStr = str2.replace(/is/g,"at");
console.log(newStr);

//test
let str3 = "this is how it is";
let ptrn3 = /is/;
console.log(ptrn3.test(str3))

// Group Capturing
let strx = "123-4567 is to test";
let ptrnx = /(\d+)-(\d+)/g;
let newStrx = str.replace(ptrnx,'$2-$1');
console.log(newStrx)



//There are two groups group 1st is 123 and group 2nd is 4567
// In the above group we have exchanged the groups first , we have put 2nd group first and 1st group 2nd
let str5 = "Firstname, Surname";
let ptrn5 = /(\w+), (\w+)/g; // (?:\w+)/; - This group will not be captured ... if we put up a ? signature
let newStr5 = str5.replace(ptrn5, '$2 $1');
console.log(newStr5);

//Named Groups
let str6 = "Firstname, Surname";
let ptrn6 = /(?<fname>\w+), (?<sname>\w+)/g;
let newStr6 = str6.replace(ptrn6, '$<sname> $<fname>');
console.log(newStr6);

// let grpVal = str.match(ptrn).groups;
// console.log(grpVal);
// console.log(grpVal.fname);
// Non Capturing Group



//Previous Section
// Back Reference

let str7 = "Code is 123-5678 and 456-456";
let ptrn7 = /(\d+)-\1/g; //(?<zipcode>\d+)-\k<zipcode>/g;
console.log(str7.match(ptrn7));


// If a string starts with the Capital letter
let str8 = "Hello world";
let ptrn8 = /^[A-Z]/;
console.log(ptrn.test(str8));


// Assignment : - Validate that a string should begin with a digit
let str9 = "88 New Street";
let ptrn9 = /^[0-9]/;  // /^\d/;
console.log(ptrn9.test(str9))

//Assignment: - Validate that a string should have a word containing only digits
let str10  ="987789";
let ptrn10 = /^[0-9]+$/;
console.log(ptrn10.test(str10));

//Assignment: -
// Validate that a word should contains only letters
// str = "abcdefg"
let str11 = "kshdasd";
let ptrn11 = /^[A-Za-z]+$/;
console.log(ptrn11.test(str11));



// Validate for uppercase characters in string
// str = "This_is_a_test_string"
// program should check all the letters are in uppercase
let str12 = "THIS IS A TEST STRING";
let ptrn12 = /^[A-Z\s]+$/;
console.log(ptrn12.test(str12));
// For all digits and lowercase validation /^[0-9\s]+$/
// /^[a-z\s]+$/


//Count Vowels and consonants in a string

let str13 = "This is A test string";
let ptrn13 = /[aeiou]/gi; // i to ignore the uppercase or lowercase
console.log(str13.match(ptrn13).length)


// Practical Assignment 
// Find all the double words in a string
// str = "This is a a string test test"

let str14 = "This is a a string test test";
let ptrn14 = /\b(\w+)\s\1\b/g;
console.log(str14.match(ptrn14))


//Assignment
// Finding a word of a specific number of letters
let str15 = "You and I flying in the sky";
let ptrn15 = /\b\w{1}\b/g;
console.log(str15.match(ptrn15));


//Assignment
//Validate a date 
let str16 = "02/03/2020"
let ptrn16 = /^\d{1,2}\/\d{1,2}\/\d{4}$/g; // For dash or slash /^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}$/g;
console.log(ptrn16.test(str16));

//Assignment
//Validate an email
let str17  = "abcd.108@gmail.com";
let ptrn17 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
console.log(ptrn17.test(str17))

//Given Ip Address is valid or not
//Check from Net

//Validate credit card

//Check from net

// Check Palindrome

function isPalindrome(str){
  let ptrn = /[\w_]/g;
  let nStr = str.toLowerCase().replace(ptrn,'');
  console.log(nStr);
  let rStr = nStr.split('').reverse().join('');
  if(nStr===rStr){
    return true;
  }
  else{
    return false;
  }
}

console.log(isPalindrome("Madam"));
















