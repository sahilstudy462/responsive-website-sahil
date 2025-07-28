function sayHello() {
  console.log("I would like to say Hello");
}


/*The setTimeout function is called with two arguments: An arrow function callback () => { sayHello(); }
A delay of 4000 milliseconds (4 seconds) */
setTimeout(() => {
  sayHello();
}, 4000); // his schedules the callback function to run after 4 seconds, but the code continues executing immediately without waiting.

console.log("chaicode"); //This executes immediately, printing "chaicode" to the console.

for (let index = 0; index < 10; index++) {
  console.log(index);
} // The loop runs 10 times (from 0 to 9), printing each number to the console immediately.


/* setTimeout is non-blocking - it schedules code for later but doesn't pause execution
The synchronous code (console.log and for loop) runs to completion first
The callback runs after the specified delay, but only when the JavaScript runtime is free to process it (after the synchronous code finishes) */
