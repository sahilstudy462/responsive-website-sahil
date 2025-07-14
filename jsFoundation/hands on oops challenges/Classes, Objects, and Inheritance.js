// Class Inheritance
/* 
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  static isVehicle(obj) {
       return obj instanceof Vehicle; //Checks if obj was created by the Vehicle constructor or its subclasses
    }

}

Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}`
}

class Car extends Vehicle {
    
}

  Car.prototype.startEngine = function() {
    return `Engine started`
}

let a1 = new Vehicle("Tata","Safari")

let a2 = new Car("Toyota","Corolla")

// console.log(a1.getDetails())
// console.log(a2.getDetails())
// console.log(a2.startEngine())



// Method Overriding in Inheritance
/* 
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
*/


Vehicle.prototype.move = function() {
    return "The vehicle is moving"
}

Car.prototype.move = function() {
    return "The car is driving"
}

// console.log(a2.move())


// Static Methods in Classes
/*
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/


const a3 = {make: 'Honda', model: 'Civic'}

console.log(Vehicle.isVehicle(a1)) // Output : true
console.log(Vehicle.isVehicle(a2)) // Output : true
console.log(Vehicle.isVehicle(a3)) // Output : false