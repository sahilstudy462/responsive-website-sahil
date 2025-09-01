//Task 1: Create Inheritance Using Prototypes
/*
Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()
*/
function Animal() //Creates a constructor function called Animal
 {}
 
Animal.prototype.makeSound = function() {
  return 'Animal sound';
}; //Adds a method makeSound to the Animal prototype
//All instances created with new Animal() will inherit this method
 
function Dog()//Creates a constructor function called Dog
 {}
 
Dog.prototype = Object.create(Animal.prototype); //Sets the prototype of Dog to be an object created from Animal.prototype
//This establishes the inheritance relationship between Dog and Animal  
//SIDE EFFECT: The new prototype object's constructor property now points to Animal (not Dog)
 
Dog.prototype.bark = function() //Adds a method bark to the Dog prototype (which now inherits from Animal.prototype)
//This method is only available to Dog instances, not general Animal instances

 {
  return 'Woof!';
};

ab = new Dog() //Creates a new Dog instance called ab
//ab.__proto__ points to Dog.prototype
//Dog.prototype.__proto__ points to Animal.prototype

console.log(ab.constructor.name)//Output: "Animal" ← This might be surprising!
//Why? Because Dog.prototype.constructor still points to Animal from the inheritance setup
//JavaScript looks up the chain: ab.constructor → Dog.prototype.constructor → Animal


Dog.prototype.constructor = Dog; //FIXES THE CONSTRUCTOR REFERENCE: Now Dog.prototype.constructor points back to Dog
//This is the proper way to set up inheritance in JavaScript


cd = new Dog() //Creates another Dog instance called cd
//This instance is created after we fixed the constructor reference

console.log(cd.constructor.name) //Output: "Dog" ✅ ← Now it correctly identifies as a Dog
//cd.constructor → Dog.prototype.constructor → Dog

console.log(cd.bark()) //Output: "Woof!" ✅
//JavaScript finds bark() method on Dog.prototype

console.log(cd.makeSound()) // Output: "Animal sound" ✅
//JavaScript looks for makeSound() on:
//cd object (not found)
//Dog.prototype (not found)
//Animal.prototype (found!) ← Through the prototype chain

 

//Task 2: Shape and Rectangle Inheritance
/*
Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.

*/
function Shape(color)//Creates a Shape constructor that takes a color parameter
//When called with new, it creates objects with a color property

{
  this.color = color; //Assigns the color parameter to the color property of the instance
}
Shape.prototype.getColor = function() //Adds a method getColor to the Shape prototype
{
  return this.color; //Returns the color property of the instance
};
 
function Rectangle(width, height, color) //Creates a Rectangle constructor that takes width, height, and color parameters
//When called with new, it creates objects with width, height, and color properties

 {
  Shape.call(this, color); //Calls the Shape constructor in the context of the new Rectangle instance
  //This sets the color property on the Rectangle instance

  this.width = width;//Assigns the width parameter to the width property of the instance
  this.height = height;//Assigns the height parameter to the height property of the instance
}
Rectangle.prototype = Object.create(Shape.prototype); //Sets the prototype of Rectangle to be an object created from Shape.prototype
//This establishes the inheritance relationship between Rectangle and Shape
//SIDE EFFECT: The new prototype object's constructor property now points to Shape (not Rectangle)

Rectangle.prototype.constructor = Rectangle;//FIXES THE CONSTRUCTOR REFERENCE: Now Rectangle.prototype.constructor points back to Rectangle
//This is the proper way to set up inheritance in JavaScript
 
Rectangle.prototype.getArea = function() //Adds a method getArea to the Rectangle prototype (which now inherits from Shape.prototype)
{
  return this.width * this.height; //Returns the area of the rectangle (width * height)
};


const rect = new Rectangle(10, 5, 'blue');//Creates a new Rectangle instance called rect with width 10, height 5, and color 'blue'
//rect.__proto__ points to Rectangle.prototype

console.log(rect.getArea()); // 50 (from Rectangle.prototype) //Calculates area: 10 * 5

console.log(rect.getColor());   // 'blue' (from Shape.prototype) //Inherits getColor from Shape.prototype 
//Returns the color property set in the constructor
//Demonstrates prototypal inheritance

console.log(rect.color);        // 'blue' (from Shape constructor)
//Direct property on the instance
//Shows that the constructor properly assigned the color property

console.log(rect.width);        // 10 (from Rectangle constructor)
console.log(rect.height);       // 5 (from Rectangle constructor)

console.log(rect instanceof Rectangle); // true //Checks if rect is an instance of Rectangle

console.log(rect instanceof Shape);     // true //Checks if rect is also an instance of Shape due to inheritance