/**
 * Created by k.allakhvierdov on 1/14/2015.
 *
 What are the good and bad ways to create number? Write examples.
 Which MIN and MAX values of numbers in JavaScript?
 What are the methods and properties of the Number? How to use them? Write examples.
 *
 */


// good and bad ways to create number
    //GOOD
var x = 3.14;     // A number with decimals
var y = 34;       // A number without decimals
var q = 123e5;    // 12300000
var z = 123e-5;   // 0.00123


// MIN and MAX values of numbers in JavaScript
var maxNumberValue = 1.7976931348623157e+308; // +1 = Infinity
var minNumberValue = 5e-324; // -1 = -Infinity

// ---------------------------------- Number Properties
// constructor	Returns the function that created JavaScript's Number prototype

// MAX_VALUE	Returns the largest number possible in JavaScript
console.log(Number.MAX_VALUE);

// MIN_VALUE	Returns the smallest number possible in JavaScript
console.log(Number.MIN_VALUE);

// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
console.log(Number.NEGATIVE_INFINITY); //-Infinity (Works only for Number)

// NaN	Represents a "Not-a-Number" value
console.log(Number.NaN);

// POSITIVE_INFINITY	Represents infinity (returned on overflow)
console.log(Number.POSITIVE_INFINITY);

// prototype	Allows you to add properties and methods to an object


var number = 100;
// ---------------------------------- Number Methods
// toExponential(x)	Converts a number into an exponential notation
console.log(number.toExponential()); //1e+2

// toFixed(x)	Formats a number with x numbers of digits after the decimal point
var numberWithDot = 123.1234567;
console.log(numberWithDot.toFixed(3)); //123.123
console.log(numberWithDot.toFixed()); //123
console.log(numberWithDot.toFixed(10));//123.1234567000

// toPrecision(x)	Formats a number to x length
console.log(numberWithDot.toPrecision(3)); //123

// toString()	Converts a number to a string
console.log(numberWithDot.toString()); // '123.1234567'

// valueOf()	Returns the primitive value of a number
console.log(numberWithDot.valueOf()); // 123.1234567