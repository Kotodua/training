/**
 * Created by k.allakhvierdov on 1/13/2015.
 *
 *
 * What are the good and bad ways to create string? Write examples.
 * What are the methods and properties in the String? How to use them? Write examples.
 *
 */

var str = "This is some text";

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

//match()	Searches a string for a match against a regular expression, and returns the matches

//replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

//search()	Searches a string for a specified value, or regular expression, and returns the position of the match

//slice()	Extracts a part of a string and returns a new string

//split()	Splits a string into an array of substrings

//substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

//substring()	Extracts the characters from a string, between two specified indices

//toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale

//toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale

//toLowerCase()	Converts a string to lowercase letters

//toString()	Returns the value of a String object

//toUpperCase()	Converts a string to uppercase letters

//trim()	Removes whitespace from both ends of a string

//valueOf()	Returns the primitive value of a String object







// Create an html anchor from a string
str.anchor('anchor1');
console.log(str.anchor('anchor1'));

//

