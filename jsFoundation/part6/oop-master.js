let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

//ek custom method bana rahe ho jo har array mein availabe hoga 
Array.prototype.hitesh = function () {
  return `Custom method ${this}` // jab ${this} likhte ho to array toString() use karta hai jo 1,2,3 return karta hai;
};


let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());


//class
class Vehicle {
  constructor(make, model) {
    
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

const p1 = new Vehicle("tata","punch")
console.log(p1) // Output : Vehicle { make: 'tata', model: 'punch' }
console.log(p1.start()) // Output : punch is a car from tata


// Car class extended Vehicle kiya matlab Car class inherit karti hai Vehicle class ki properties aur methods ko
class Car extends Vehicle {

  // Car class ka khudka method
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla"); 
console.log(myCar) // Output : Car { make: 'Toyota', model: 'Corolla' }
console.log(myCar.start()); // Output : Corolla is a car from Toyota
console.log(myCar.drive()); // Output : Toyota : This is an inheritance example

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make); // Output : Toyota 
console.log(vehOne.model) // Output : Corolla


let vehTwo = new Car("Tata","Nano")
console.log(vehTwo.make) // Output : Tata
console.log(vehTwo.model) // Output : Nano



// Encapsulation
// ka matlab data ko hide karna aur sirf allowed methods se access dena.
class BankAccount {

  #balance = 0; // private property sirf class ke ander access ho sakta hai and # use karke app private bana sakte hai


  // method to add money
  // yeh method us amount ko #balance mai add karta hai and updated balance return karta hai
  deposit(amount) {
    this.#balance += amount;
    return `Desposited Amount = $${this.#balance}`;
  }

// method to withdraw the money
 withdraw(amount) {
 if (amount > this.#balance) {
 return "❌ Insufficient balance!";
 } else {
 this.#balance -= amount;
 return `✅ Withdrawn: $${amount}, Remaining balance: $${this.#balance}`;
   }
 }


  // method to check balance  
  // ye method balance ko formatted string mein return karta hai 
  getBalance() {
    return `Current Balance : $${this.#balance}`;
  }
} 

let account = new BankAccount();  
// console.log(account.getBalance()); // Output : Current Balance : $0
// // console.log(account.#balance) // class ke bahar #balance access nahi kar sakte
// console.log(account.deposit(1000)); // Output : Desposited Amount = $1000
// console.log(account.getBalance()); // Output : Current Balance : $1000
// console.log(account.withdraw(200)); // Output : ✅ Withdrawn: $200, Remaining balance: $800
// console.log(account.withdraw(12000)); // Output : ❌ Insufficient balance!
// console.log(account.getBalance()); // Output : Current Balance : $800




// Abstraction
// means hiding complex details and showing only what’s necessary.
class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start()); // Output : Starting the machine...
// console.log(myMachine.brewCoffee()); // Output : Brewing coffee
// console.log(myMachine.pressStartButton()); // Output : Starting the machine... + Brewing coffee



// Polymorphism
// ek method fly() ka different behavior 
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird(); // ye object Bird class ka hai isliye Bird class ka fly() method use karega
let penguin = new Penguin(); // ye object Penguin class ka hai isliye Penguin class ka fly() method use karega
console.log(bird.fly()); // Output : Flying....
console.log(penguin.fly()); // Output : Penguins can't fly



//static method
// static keyword ke banaya gaya method class ke object se nahi class khud se call hota hai matlab aapko new karke object banane ki zarurat nahi 
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // add() ek static method hai and object ke through access nahi ho sakta 
// console.log(Calculator.add(2, 3)); // yahan add() ko class Calculator se direct call kiya gaya hai and Output : 5


// Getters and setters
// Getters and setters are special methods that control how you read (get) and modify (set) properties of an object. They act as gatekeepers for your data.
class Employee {
  #salary; //Private field (denoted by #), only accessible within the class.
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary; // Assign to private field
  }



// Purpose: Control access to #salary or Retrieves a value when you access a property.
// Behavior: Always returns a fixed message (hides actual salary value).
// Usage: console.log(emp.salary) → Outputs the message.
  get salary() {
    return `You are not allowed to see salary`;
  }


// Purpose: Validate new salary values or Updates a value when you assign to a property.
// Behavior: Rejects negative values (logs error) and Accepts non-negative values but assigns to this._salary (not the private #salary).
// Bug: The setter modifies _salary, but the getter doesn't read it (disconnect between getter/setter).
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value; // Update the private field

    }
}
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary); //
emp.salary = 60000; // salary is setter method to woh set salary(60000) call karti hai and #salary ko update karti hai 
