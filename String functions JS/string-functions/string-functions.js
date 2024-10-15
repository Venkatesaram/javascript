let students = ' Javascript learning students mass';
var hello =" Hello everyone (**) ";


//Find the length of the string:

let stringLength = students.length;
console.log(stringLength);

//Substring of the string :

let substringWithEnd = students.substring(1,11);
let substringWithEnd1 = students.substring(12,20);
let substringWithEnd2 = students.substring(21,30);
let substringWithEnd3 = students.substring(21);
console.log(substringWithEnd);
console.log(substringWithEnd1);
console.log(substringWithEnd2);
console.log(substringWithEnd3);

//Trim the whitespace :
let trimmedString = students.trim();
console.log(trimmedString);

//Find a word in the string :
let searchTheWord = students.includes('learning');
console.log(searchTheWord);

let searchTheWordposition = students.includes('learning',25);
console.log(searchTheWordposition);

//Find the index of the string 
let indexofSearchKeyWithoutposition = students.indexOf("learning");
console.log(indexofSearchKeyWithoutposition);

let indexofSearchKeyWithposition = students.indexOf('Javascript',15);
console.log(indexofSearchKeyWithposition);


//Replace the existing string:
let replacedstring = students.replace('students','students page');
console.log(replacedstring);

let replaceOfmatchingstring = students.replaceAll('students','freshers (Front-end-developers) stars');
console.log(replaceOfmatchingstring);

// Split the string into the array:

let fruits ='Apple,mango,orange,kiwi,Banana';

let arrayOffruitsAftersplit = fruits.split(',');
console.log(arrayOffruitsAftersplit);

let arrayOffruitsAftersplitwithlimit = fruits.split(',',2);
console.log(arrayOffruitsAftersplitwithlimit);

//String concat:

let concatenedString = students.concat(' Arrays fruits ',fruits);
console.log(concatenedString);

//Find a string at the beginning and end:

let stringStartwith = students.startsWith(" Javascript");
console.log(stringStartwith);

let substringshEndwith = students.endsWith("mass");
console.log(substringshEndwith);

//Basic functions:

let uppercaseString = students.toUpperCase();
console.log(uppercaseString);

let LowercaseString = students.toLowerCase();
console.log(LowercaseString);

let Prints = hello.repeat(3);
console.log(Prints);


let FindcharacterBasedOnposition = students.charAt(1);
console.log(FindcharacterBasedOnposition);

let FindAsciicode = students.charCodeAt(25);
console.log(FindAsciicode);