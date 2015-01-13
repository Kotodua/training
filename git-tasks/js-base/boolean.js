/** Created by k.allakhvierdov on 1/13/2015.
 * What are the ways to bring the other data types to boolean? Write examples.
 * */

//String to boolean
console.log('Boolean("false") is ' + typeof Boolean("false")); //boolean true
console.log('!!"false" is ' + typeof !!"false"); //boolean true
console.log('JSON.parse("true")' +  typeof JSON.parse('true')); //boolean true
console.log('JSON.parse("false")' + typeof JSON.parse('false'));//boolean false

//Number to boolean
console.log('Boolean(100) is ' + typeof Boolean(100)); //boolean (true - non-zero number)
console.log('Boolean(0) is ' + typeof Boolean(0)); //boolean (false - zero number)
console.log('Boolean(-100) is ' + typeof Boolean(-100)); //boolean (true - non-zero number)

//null to boolean
console.log('Boolean(null) is ' + typeof Boolean(null)); //boolean (false - null)

//undefined to boolean
console.log('Boolean(undefined) is ' +typeof Boolean(undefined)); //boolean (false - undefined)

//object to boolean
console.log('Boolean(new Object()) is ' +typeof Boolean(new Object())); //boolean (true - object)




