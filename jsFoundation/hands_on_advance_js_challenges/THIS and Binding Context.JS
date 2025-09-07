// Task 1: Bind the Correct Context
// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.

//person is an object with a property name: 'Alice'.
//introduce() is a method on that object. When called as person.introduce(), this inside the method refers to person, so it returns "Hi, my name is Alice".
const person = {
  name: 'Alice',
  introduce() {
    return `Hi, my name is ${this.name}`;
  }
};

//without bind()
//intro is a reference to the function introduce — but not bound to person.
//When you call intro() the function is invoked as a plain function, so its this is not person.
//In strict mode ("use strict" or ES modules): this is undefined. Accessing this.name
//So intro() does run the function, but it loses the person context, causing wrong/erroneous output.
const intro = person.introduce;
console.log(intro());

//with bind() object person is bind
//.bind() with no argument is effectively .bind(undefined).
//Strict mode: this remains undefined → accessing this.name throws the same TypeError as above.
const roundIntroduce = person.introduce.bind();
console.log(roundIntroduce());

// with bind() object person is bind
//.bind(person) creates a new function whose this is permanently set to the person object.
//Calling boundIntroduce() will always use person for this, so it reliably returns:
//The original person.introduce is unchanged; bind returns a new function.
const boundIntroduce = person.introduce.bind(person);
console.log(boundIntroduce());// Output: "Hi, my name is Alice"
 



//Task 2: Using call() to Invoke a Function with Different Contexts
//Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.

//Declares a regular function named introduce
//Inside it uses a template literal: `Hi, my name is ${this.name}`. this.name reads the name property from whatever object this points to when the function runs. The function returns that string.
function introduce() {
  return `Hi, my name is ${this.name}`;
}

//Two plain objects are created. Each has an own property name with values 'Alice' and 'Bob'.
const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
 

//introduce.call(person1) calls the introduce function with this set to person1. Inside introduce, this.name becomes person1.name, which is 'Alice'. So it returns "Hi, my name is Alice".
//introduce.call(person2) does the same but with person2, returning "Hi, my name is Bob".
introduce.call(person1);
introduce.call(person2);
 
//Task 3: Using apply() to Pass Arguments with Context
//Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.

//sum is a function that takes two parameters, a and b.
//It returns the sum of a and b, multiplied by this.multiplier. The value of this is determined by how the function is called.
function sum(a, b) {
  return (a + b) * this.multiplier; //Returns the sum of a and b, multiplied by this.multiplier
}
 
const context1 = { multiplier: 2 }; //An object with a property multiplier set to 2
const context2 = { multiplier: 3 }; //An object with a property multiplier set to 3

//sum.apply(context1, [5, 10]) calls sum with this set to context1 and arguments 5 and 10.
//Inside sum, this.multiplier is context1.multiplier (2), so it computes (5 + 10) * 2 = 30.
//sum.apply(context2, [5, 10]) does the same but with context2, resulting in (5 + 10) * 3 = 45.
 
sum.apply(context1, [5, 10]); //Output: 30
sum.apply(context2, [5, 10]); //Output: 45