// const username = {
//   "first name": "hitesh", // property with space in name, must use square brackets
//   isLoggedin: true, // regular property
// };


// // Adding new properties to the object
// username.firstname = "Mr. H";  // creates new property 'firstname' (different from "first name")
// username.lastname = "choudhary"; // creates new property 'lastname'


// console.log(username["first name"]); // Output: "hitesh" (accessing original property)
// console.log(username.lastname);  // Output: "choudhary" (accessing new property)
// console.log(username); // Output: the entire object
// console.log(typeof username);  // Output: "object" (type of username)


// username.firstname = "1";
// username.lastname = "2";

// console.log(username);
// console.log(username["first name"]); // Square bracket notation (username["first name"]) is required for property names with spaces.


// console.log(typeof firstname); /* typeof firstname → Throws a ReferenceError because:
// firstname is a property of username, not a standalone variable.
// To check the type of the property, you should use:
// console.log(typeof username.firstname); */

// console.log(typeof username.firstname) // output is string 








// let today = new Date(); // date is also an object 
// console.log(today.getDate()); // output will give current date number


// Array is collection of things
// let anotherUser = ["hitesh", true];
// console.log(anotherUser[0]); // to access values from array 
// console.log(anotherUser[1]); 


// console.log(1 + '1');  // JavaScript performs string concatenation (not addition).
// console.log('1' + 1); // JavaScript performs string concatenation (not addition).
/* 
'1' is a string.
1 is a number.
Again, + with a string and a number triggers string concatenation.
The number 1 is converted to "1".
Result: "1" + "1" = "11". 
Output:
"11" (still a string)
*/
// console.log(typeof ('1' + 1)) //string

/*JavaScript prioritizes string concatenation when one operand is a string (+ becomes a concatenation operator).
This is called type coercion (automatic type conversion).*/
/* + is special because it can mean addition or concatenation depending on the types. */

// console.log(1 - '1'); // 0 (number)
// console.log(2 * '3'); // 6 (number)
// console.log(typeof (1 - '1')); //(number)
// console.log(typeof (2 * '3')); //(number)

// If you want to add numbers (not concatenate strings), convert strings to numbers first:
// console.log(1 + Number('1')); // 2 (number)
// console.log(typeof (1 + Number('1'))); //(number)


// true and false value 
// let isValue = true;
// let noValue = false;
// console.log(isValue);
// console.log(isValue + 0); // value of true is 1 
// console.log(noValue + 0); // value of false is 0


// let isValue = "2abc";
// console.log(Number(isValue)); // output will be NaN = not a number 
// console.log(typeof Number(isValue)); // output will be show data type is a number 

// console.log(Number(null));// output will be 0
// console.log(typeof Number(null));// output will be show data type is a number

// console.log(Number(undefined)); // output will be NaN = not a number 
// console.log(typeof Number(undefined));// output will be show data type is a number 


console.log((null));// output will be 0
console.log(typeof (null));// output will be show data type is a object 
/*
typeof null returns "object" because:
it was a mistake in the original JavaScript implementation (1995)
Fixing it would break existing websites, so it was never corrected
*/


