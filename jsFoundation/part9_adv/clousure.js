/*outer() returns an anonymous inner function that:
Increments the counter variable
Returns the new value of counter */
function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}


/* outer() is called, and its returned function is assigned to increment
The magic happens here: even though outer() has finished executing, the inner function maintains access to counter through a closure */
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
/* Accesses the counter variable from the closure
Increments it
Returns the new value */

// Closure: The inner function "closes over" (remembers) the counter variable from its parent scope, even after the parent function has completed execution.

//Private State: The counter variable is effectively private - it can only be modified through the increment function.
