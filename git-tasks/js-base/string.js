/**
 * Created by k.allakhvierdov on 1/13/2015.
 *
 *
 * What are the good and bad ways to create string? Write examples.
 * What are the methods and properties in the String? How to use them? Write examples.
 *
 */

var str = "This is some text";
//------------------------------------------------------STRING Properties
//constructor	Returns the string's constructor function
var str = "Hello World!";
console.log(str.constructor); // [Function: String]

//length	Returns the length of a string
var str = "Hello World!";
console.log(str.length); // 12

//prototype	Allows you to add properties and methods to an object
function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log(fred.salary); // 2000


//------------------------------------------------------STRING METHODS
//charAt() - get char by the index in the string
console.log("the char with index 0 is " + str.charAt(0)); // T

//charCodeAt() - Return the Unicode of the character in a string
console.log("the char with index 0 unicode is " + str.charCodeAt(0)); // 84

//concat() - Joins two or more strings, and returns a new joined strings
var str1 = "Hello ";
var str2 = "World!";
console.log(str1.concat(str2)); // "Hello World!"

//fromCharCode()	Converts Unicode values to characters
console.log(String.fromCharCode(84)); // "T"

//indexOf()	Returns the position of the first found occurrence of a specified value in a string
var str = "Hello world, welcome to the universe.";
console.log(str.indexOf("welcome")); // 13

//lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
var str = "Hello planet earth, you are a great planet.";
console.log(str.lastIndexOf("planet")); //36

//localeCompare()	Compares two strings in the current locale
var str1 = "ab";
var str2 = "cd";
console.log(str1.localeCompare(str2));  // -2 str1 is sorted before str2

//match()	Searches a string for a match against a regular expression, and returns the matches
var str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); // ["ain", "ain", "ain"]

//replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
var str = "Mr Blue has a blue house and a blue car";
console.log(str.replace(/blue/gi, "red")); //Mr red has a red house and a red car

//search()	Searches a string for a specified value, or regular expression, and returns the position of the match
var str = "Mr. Blue has a blue house";
console.log(str.search(/blue/i)); //4

//slice()	Extracts a part of a string and returns a new string
var str = "Hello world!";
console.log(str.slice(3, 8)); // "lo wo"

//split()	Splits a string into an array of substrings
var str = "How are you doing today?";
console.log(str.split(" ",3)); //[how,are,you]

//substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
var str = "Hello world!";
console.log(str.substr(2)); // "llo world!"

//substring()	Extracts the characters from a string, between two specified indices
var str = "Hello world!";
console.log(str.substring(4, 1)); // "ell" (If "start" is greater than "end", it will swap the two arguments)

//toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
var str = "Hello World!";
console.log(str.toLocaleLowerCase()); // "hello world!"

//toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
var str = "Hello World!";
console.log(str.toLocaleUpperCase()); // "HELLO WORLD!"

//toLowerCase()	Converts a string to lowercase letters
var str = "Hello World!";
console.log(str.toLowerCase()); //"hello world!"

//toString()	Returns the value of a String object
console.log((2).toString());
console.log(2..toString());
console.log(2 .toString());

//toUpperCase()	Converts a string to uppercase letters
var str = "Hello World!";
console.log(str.toUpperCase()); // "HELLO WORLD!"

//trim()	Removes whitespace from both ends of a string
var str = "       Hello World!        ";
console.log(str.trim()); // "Hello World!"

//valueOf()	Returns the primitive value of a String object
var str = "Hello World!";
console.log(str.valueOf()); // "Hello World!"


//------------------------------------------------------String HTML Wrapper Methods
// Create an html anchor from a string
str.anchor('anchor1');
console.log(str.anchor('anchor1'));

// Other
var txt = "Hello World!";
console.log("The original string: " + txt);
console.log("<p>Big: " + txt.big() + "</p>");
console.log("<p>Small: " + txt.small() + "</p>");
console.log("<p>Bold: " + txt.bold() + "</p>");
console.log("<p>Italic: " + txt.italics() + "</p>");
console.log("<p>Fixed: " + txt.fixed() + "</p>");
console.log("<p>Strike: " + txt.strike() + "</p>");
console.log("<p>Fontcolor: " + txt.fontcolor("green") + "</p>");
console.log("<p>Fontsize: " + txt.fontsize(6) + "</p>");
console.log("<p>Subscript: " + txt.sub() + "</p>");
console.log("<p>Superscript: " + txt.sup() + "</p>");
console.log("<p>Link: " + txt.link("http://www.w3schools.com") + "</p>");
console.log("<p>Blink: " + txt.blink() + " (works only in Opera)</p>");
