/**
 * Created by k.allakhvierdov on 1/18/2015.
 *
 * What are the good and bad ways to create array? Write examples.
 * What are the methods and properties of the Array? How to use them? Write examples.
 *
 */

//--------------------------------- GOOD Ways to Define ARRAYs
var arr1 = [1, 3, 7, 9];
var arr2 = new Array([123, 1234, 421], ['first', 'second', 'third']);

//--------------------------------- ARRAY Properties
//constructor	Returns the function that created the Array object's prototype

//length	Sets or returns the number of elements in an array
console.log(arr2.length); //2
console.log(arr2[0].length); //3

//prototype	Allows you to add properties and methods to an Array object


//--------------------------------- ARRAY Methods
//concat()	Joins two or more arrays, and returns a copy of the joined arrays
var arr1and2 = arr1.concat(arr2);
console.log(arr1and2); //[ 1, 3, 7, 9, [ 123, 1234, 421 ], [ 'first', 'second', 'third' ] ]

//indexOf()	Search the array for an element and returns its position
console.log(arr1and2[4].indexOf(123)); //0

//join()	Joins all elements of an array into a string
console.log(arr1and2.join());
console.log(arr1and2.join(" and "));

//lastIndexOf()	Search the array for an element, starting at the end, and returns its position
var arr3 = [1, 2, 3, 3, 3, 3, 1, 2, 1];
console.log(arr3.lastIndexOf(1)); // 8

//pop()	Removes the last element of an array, and returns that element
console.log(arr3.pop()); // 1
console.log(arr3); // [1, 2, 3, 3, 3, 3, 1, 2]

//push()	Adds new elements to the end of an array, and returns the new length
console.log(arr3.push(10)); // 9

//reverse()	Reverses the order of the elements in an array
console.log(arr3.reverse()); // [ 10, 2, 1, 3, 3, 3, 3, 2, 1 ]

//shift()	Removes the first element of an array, and returns that element
console.log(arr3.shift()); // 10

//slice()	Selects a part of an array, and returns the new array
console.log(arr3.slice(2,6)); // 3,3,3,3

//sort()	Sorts the elements of an array
console.log(arr3.sort()); // [ 1, 1, 2, 2, 3, 3, 3, 3 ]

//splice()	Adds/Removes elements from an array
console.log(arr3.splice(2, 2, 20, 20)); // 2,2
console.log(arr3); // [ 1, 1, 20, 20, 3, 3, 3, 3 ]

//toString()	Converts an array to a string, and returns the result
console.log(arr3.toString()); //1,1,20,20,3,3,3,3

//unshift()	Adds new elements to the beginning of an array, and returns the new length
console.log(arr3.unshift(0,0,0,0)); // 12

//valueOf()	Returns the primitive value of an array
console.log(arr3.valueOf()); // [ 0, 0, 0, 0, 1, 1, 20, 20, 3, 3, 3, 3 ]
