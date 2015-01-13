/**
 * Created by k.allakhvierdov on 1/8/2015.
 */
/*
 Create file: js-base/expressions-operators.js in your “training” directory
 What are the expressions and operators in JavaScript? Write examples.
 What are the good and bad cases of using these expressions and operators? Write examples of usage.
*/

// 1. Arithmetic operators (+, -, *, /, %)
console.log('Addition: 1 + 1 = ' + (1 + 1));  //2
console.log('Subtraction: 2 - 1 = ' + (2 - 1));  //1
console.log('Multiplication: 2 * 2 = ' + (2 * 2));  //4
console.log('Division: 4 / 2 = ' + (4 / 2));  //2
console.log('Remainder: 14 % 5 = ' + (14 % 5));  //4

// 2. Equality operators (==, ===, !=, !==)
 console.log('Equality of 2 and 2..toString() is ' + (2 == 2..toString()));  //true
 console.log('Identity of 2 and 2..toString() is ' + (2 === 2..toString())); //false
 console.log('Inequality  of 2 and 3 is ' + (2 != 3)); //true
 console.log('Nonidentity of 2 and 2..toString() is ' + (2 !== 2..toString())); //true

// 3. Relational operators (<, >, <=, >=)
console.log('3 greater than 2 is ' + (3 > 2));  //true
console.log('3 less than 5 is ' + (3 < 5)); //true
console.log('3 greater or equal than 3 is ' + (3 >= 3));  //true
console.log('3 less or equal than 4 is ' + (3 <= 4)); //true

// 4. Binary logical operators (&&, ||)
console.log('3 greater or equal than 3(true) AND 2 less than 5(true) is ' + (3 >= 3 && 2 < 5) );  //true AND true = true
console.log('2 greater or equal than 3(false) OR 2 less than 5(true) is ' + (2 >= 3 || 2 < 5) );  //false OR true = true

// 5. Assignment operators (=, +=, -=, *=, /=, %= )
var a;
var b = 2;
console.log('Assignment operator (a(undefined) = 3) so a = ' + (a = 3));  //3
console.log('Multiplication assignment (b(2) *= a(3)) so b = ' + (b *= a));  //2 * 3 = 6
console.log('Subtraction assignment (a(3) -= 1) so a = ' + (a -= 1)); //2
console.log('Division assignment (b(6) /= 2) so b = ' + (b /= 2)); //3
console.log('Assignment operator (a(2) += 3) so a = ' + (a += 3));  //5
console.log('Remainder assignment (b(3) %= 2) so b = ' + (b %= 2));  //(3 %= 2) = 1

// 6. Increment and decrement (i++, i--, ++i, --i)
a = 2;
console.log('Postfix increment operator: a++ so a was ' + (a++));  //2
console.log('and now(on the next row) a = ' + a); //3
console.log('Postfix decrement operator: a-- so a was ' + (a--));  //3
console.log('and now(on the next row) a = ' + a); //2
console.log('Prefix increment operator: ++a so at the same row a = ' + (++a));  //3
console.log('Prefix decrement operator: --a so at the same row a = ' + (--a));  //2

// 7. Conditional (ternary) operator
a = 10;
a <= 10 ? console.log('a <= 10') : console.log('a > 10')


