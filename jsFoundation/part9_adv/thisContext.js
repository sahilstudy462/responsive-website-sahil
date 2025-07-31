//We create an object person with:
//A property name set to "Hitesh".
//A method greet() that logs "Hi, I am [this.name]".
const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};


//When we call person.greet(), this refers to the person object.
//So, this.name correctly resolves to "Hitesh".
person.greet();


//greetFunction now holds just the function, detached from person.
//When called as greetFunction(), this is:
//undefined (in strict mode, which is default in ES6 modules and classes).
//The global object (window in browsers, global in Node.js) in non-strict mode.
//Since this is not person, this.name is undefined.
const greetFunction = person.greet;
greetFunction();


//bind() creates a new function where this is permanently set to the given object ({ name: "John" }).
//Now, when boundGreet() is called, this is always { name: "John" }.
const boundGreet = person.greet.bind({ name: "John" });
boundGreet();


//bind() creates a new function where this is permanently set:
//LoudGreet is a new function where this is always person.
const LoudGreet = person.greet.bind(person);

//When we call LoudGreet(), it executes person.greet with this = person.
//So, this.name correctly refers to "Hitesh".
LoudGreet();

//bind, call and apply


//These methods immediately call the function with a specified this value.
//Calls greet() immediately with this = { name: "Alice" }.
person.greet.call({ name: "Alice" }); // Output: "Hi, I am Alice"


//Works like call(), but arguments (if any) are passed as an array.
person.greet.apply({ name: "Bob" }); // Output: "Hi, I am Bob"

