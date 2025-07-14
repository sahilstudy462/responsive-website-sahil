function Animal() {

}
 

// Constructor functions (Animal) and prototype objects (Animal.prototype) are different
// Methods should be added to the prototype (not inside constructor using incorrect syntax)
Animal.prototype.speak = function() {
  return 'Animal speaking';
};
 
function Dog() {
}
 

// Dog prototype have access of Animal prototype
// Inherit from Animal.prototype not Animal
Dog.prototype = Object.create(Animal.prototype); // The prototype chain should connect prototype objects, not constructor functions
/* behind the scene 
{
  __proto__: Animal.prototype, // Inherits from Animal
  constructor: Animal // Wrong! Inherited from Animal.prototype
}
 */
 

Dog.prototype.bark = function() {
  return 'Woof!';
};
 
Dog.prototype.constructor = Dog;
/* behind the scene 
{
  __proto__: Animal.prototype, // Still inherits from Animal
  constructor: Dog // Corrected!
}
 */



const A1 = new Animal()
const A2 = new Dog()
console.log(A1.speak()) // Output : Animal speaking
console.log(A2.bark()) // Output : Woof!
console.log(A2.speak()) // Output : Animal speaking
console.log(A2.constructor) // output will be [Function: Animal] beacauese constructor property pointing to Animal (from Animal.prototype), which is incorrect.

console.log(A2.constructor === Dog); // true (correct)
console.log(A2 instanceof Dog); // true
console.log(A2 instanceof Animal); // true (inheritance still works)

// Instanceof is an operator that checks whether an object is an instance of a particular constructor function or class, including checking its entire prototype chain.