// To lower case and to uppercase
let str = "Test23";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toLowerCase()==="test");


// There is one more method - replace() method replace()- which is used to replace the character or substring, but it also returns the new string also

console.log(str.replace("23","!"))

// Get a character from the user and check whether the character is vowel or not
let ch;
function getVal(){
    ch=prompt("Enter a character");
    ch=ch.toLowerCase();
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        console.log("Is vowel");
    }else{
        console.log("Is consonant");
    }
}

getVal();