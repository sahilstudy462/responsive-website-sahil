//Person is a constructor function that creates object instances
//When called with new, it:
//Creates a new empty object
//Sets this to point to that new object
//Executes the function body (assigning name property)
//Returns the new object (implicitly)
function Person(name) {
  this.name = name;
}

//Adds a greet method to the Person.prototype object
//All instances of Person will inherit this method through the prototype chain
//Using prototype is memory-efficient since all instances share the same method
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};


//Creates a new Person instance with:
//name property set to "hitesh"
//Access to all methods in Person.prototype
//The new keyword is crucial - without it, this would point to the global object
let hitesh = new Person("hitesh");


//Calls the greet method on the hitesh instance
//Outputs: "Hello, my name is hitesh"
//this.name inside the method refers to the instance's name property
hitesh.greet();


//Key Concepts Illustrated:
//Constructor Functions: Used to create multiple objects with similar properties/methods
//Prototype Inheritance: Methods are shared via the prototype chain
//this Keyword: Refers to the current object instance
//new Operator: Creates new instances and sets up the prototype chain
