/* DO NOT CHANGE the values */
const a = 18;
const b = 24;

// Addition of two values
function add() {
    const result = a + b;
   return result ;
}



// Subtract small value from larger one
function subtract() {
    const result = b - a;
    return result;
}



// multplication of two values
function multiply() {
    const result = a * b;
    return result;
}



// Divide larger value by small
function divide() {
    const result = b/a;
    return result;
}



// Increase value of a by 1
function increment() {
    const result = a + 1;
    return result;
}



// Decrease value of b by 1
function decrement() {
    const result = b - 1;
    return result;
}



// Divide larger value by small to find the reminder
function reminder() {
    const result= b % a;
    return result;
}
console.log(subtract())