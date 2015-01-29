/**
 * Created by k.allakhvierdov on 1/18/2015.
 *
 *
 * What are the good and bad ways to create object? Write examples.
 * How we can get accessing the property of an object?
 * What are the methods and properties of the Object? How to use them? Write examples.
 *
 */

//----------------------------------------- Good ways to define OBJECTs
var obj = {};
var obj2 = new Object();

//---
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getModel = function(){
    return this.model;
}

var mycar = new Car("Toyota", "Rav4", 2001);

//---

var person = {
    "age": 30,
    "name": "Konstantin"
}


//----------------------------------------- How to get OBJECT's Properties
console.log("mycar make property value is " + mycar.make);
console.log(mycar.getModel());
console.log(person.age);
console.log(person["name"]);

for(var i in mycar) {
    if (mycar.hasOwnProperty(i)) {
        console.log(i, '' + mycar[i]);
    }
}

//----------------------------------------- OBJECT Properties
console.log(Car.prototype);



//----------------------------------------- OBJECT Methods
//obj.__defineGetter__() //deprecated
//obj.__defineSetter__() //deprecated
//obj.__lookupGetter__() //deprecated
//obj.__lookupSetter__() //deprecated

// defineProperty()
Object.defineProperty(mycar, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(mycar.a);

//obj.__proto__() // Provide access to object's prototype.
// Can be used to set one object as a [[prototype]] of another.
// It can only read properties from [[prototype]] object in case property not found in original object.
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log( rabbit.jumps ); // true
delete rabbit.jumps;
console.log( rabbit.jumps ); // null
delete animal.jumps;
console.log( rabbit.jumps);  // undefined



//obj.constructor; contain name of the function that created an object.
function Rabbit() {}
var rabbit = new Rabbit();
console.log( rabbit.constructor == Rabbit ); // true

console.log(rabbit.hasOwnProperty('constructor') ); //false, not in object! constructor is not an object property but object.protorype
console.log(Rabbit.prototype.hasOwnProperty('constructor') ); // true

var rabbit2 = new rabbit.constructor(); // So we can use constructor for the new objects if we want to use the same constructor.


//obj.hasOwnProperty() //Check if object has property or not. Especially good for Strings because IN doesn't work for Strings
var stringValue = "";
var objectValue = {};
var arrayValue = [];
var dateValue = new Date();
var numberValue = new Number(1);
var boolValue = true;

console.log( "Object", objectValue.hasOwnProperty( "length" ) );
console.log( "Array", arrayValue.hasOwnProperty( "length" ) );
console.log( "Date", dateValue.hasOwnProperty( "length" ) );
console.log( "Number", numberValue.hasOwnProperty( "length" ) );
console.log( "Boolean", boolValue.hasOwnProperty( "length" ) );
console.log( "String", stringValue.hasOwnProperty( "length" ) );


//obj.isPrototypeOf()
var animal = { jumps: null };
var rabbit = { jumps: true };
var rabbit2 = new rabbit.constructor();

rabbit.__proto__ = animal;

console.log('rabbit is prototype of rabbit2 is ' + rabbit.isPrototypeOf(rabbit2)) // false - it used rabbit's constructor but it is not a prototype
console.log('animal is prototype of rabbit is ' + animal.isPrototypeOf(rabbit)) // true
console.log('animal is prototype of rabbit2 is ' + animal.isPrototypeOf(rabbit2)) // false !!!!!!!! not sure why

//instanceof - check if object is instance of Constructor\Type
console.log('rabbit2 instance of rabbit is ' +  rabbit2 instanceof Rabbit);


//obj.propertyIsEnumerable() verify if type is enum or not
var o = {};
var a = [];
o.prop = 'enum';
a[0] = 'enum';
console.log(o.propertyIsEnumerable('prop'));   // true
console.log(a.propertyIsEnumerable(0));        //  true
console.log(a.propertyIsEnumerable('length'));   //  false

//obj.toLocaleString() return String with date in a long format (Date method)
var d = new Date();
console.log(d.toLocaleString()); //Fri Jan 30 2015 00:10:51 GMT+0200 (FLE Standard Time)

//obj.toSource() FireFox method - return object source code

//obj.toString() transform to String
console.log(d.toString()); //Fri Jan 30 2015 00:10:51 GMT+0200 (FLE Standard Time)

//obj.valueOf() String method. like toString for Strings


//obj.watch() //obj.unwatch() GECKO Browsers only. Launch function when the property of the object we are watching for is changed.
//Warning: Generally you should avoid using watch() and unwatch() when possible.
// These two methods are implemented only in Gecko, and they're intended primarily for debugging use.
// In addition, using watchpoints has a serious negative impact on performance,
// which is especially true when used on global objects, such as window.
// You can usually use setters and getters or proxies instead. See Browser compatibility for details.
// Also, do not confuse Object.watch with Object.observe.
var doSomething = function(){
    console.log(animal.jumps);
}

animal.watch("jumps", doSomething);

animal.jumps = "JUMP";
