function Person (name,age) {
    
    if(age<0){
        throw new Error("Age must be a positive number")
    }
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`
}

const a = new Person("Alice",20)
console.log(a)
console.log(a.greet())
