console.log("hello");
// console.log("chai");
/*

String
Number
Boolean
Bigint

Undefined
null

Object

Symbol

*/

// var score = 102

let score = 102; //number
let name = "chaicode.com"; //string
let isLoggedin = false; //boolean

//object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]; //array is a type of object
let user = { firstname: "hitesh", lastname: "choudhary" }; //object

getScore = score; //implicit type conversion
console.log(getScore); //102
console.log(typeof getScore); //number

console.log(typeof name); //string
console.log(typeof isLoggedin); //boolean
console.log(typeof teaTypes); //object
console.log(typeof user); //object

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber) // bigint

let mySymbol = Symbol("this is my symbol");
console.log(typeof mySymbol); // symbol

let firstName; // undefined
console.log(typeof firstName); // undefined

let lastName = null;
console.log(typeof lastName); // object (this is a known bug in JavaScript)

// Note: In JavaScript, variables declared with var are function-scoped and can be re-declared and updated. Variables declared with let are block-scoped and can be updated but not re-declared within the same scope. Variables declared with const are block-scoped and cannot be updated or re-declared; they must be initialized at the time of declaration.

// Changes in let and const
// Example 1
let gameName = "spiderman"; // Declaration and Initialization
gameName = "batman"; // Re-assignment
console.log(gameName); // batman


let abc = ["lemon",1,true,undefined,null] // array is a type of object
console.log(abc) // output: (5) ['lemon', 1, true, undefined, null]
console.log(typeof abc) // object
console.log(typeof abc[0]) // string
console.log(typeof abc[1]) // number
console.log(typeof abc[2]) // boolean
console.log(typeof abc[3]) // undefined
console.log(typeof abc[4]) // object


// Example 2
let efg = {name:"sahil", "Number":123, value:true } // object
console.log(efg) // output: {name: 'sahil', Number: 123, value: true}
console.log(typeof efg) // object
console.log(typeof efg.name) // string
console.log(typeof efg.Number) // number
console.log(typeof efg.value) // boolean
