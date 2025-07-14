// Encapsulation Using Getters and Setters 
/*

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

*/

class BankAccount{
    #balance = 100;


    get balance() {
        return this.#balance;
    }


    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.#balance = amount;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        return `Deposited: $${amount}. New balance: $${this.#balance}`;
    }


    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        return `Withdrawn: $${amount}. Remaining balance: $${this.#balance}`;
    }



getBalance() {
    return `Current Balance : $${this.#balance}`;
  }


}

let account = new BankAccount();  
console.log(account.getBalance()); // Output : Current Balance : $100
// // console.log(account.#balance) // class ke bahar #balance access nahi kar sakte
console.log(account.deposit(50)); // Output :  Deposited: $50. New balance: $150
console.log(account.withdraw(20)); // Output : Withdrawn: $20. Remaining balance: $130
console.log(account.getBalance()); // Output : Current Balance : $130



// Polymorphism with Method Overriding
/*
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

// Usage
const shape = new Shape();
console.log(shape.area()); // 0

const circle = new Circle(5); // Radius of 5
console.log(circle.area()); // ~78.5398 (π * 5²)

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area()); // 200 (10 * 20)
