// //The function* syntax defines a generator function.
// //Generator functions can pause and resume their execution using the yield keyword.
// //This generator yields three values: 1, 2, and 3 in sequence.
// function* numberGenerator() {
//   yield 1;
//   yield 5;
//   yield 2;
//   yield 3;
// }


// //Each call to numberGenerator() creates a new generator object.
// //gen and genTwo are separate instances that maintain their own execution state.
// let gen = numberGenerator();
// let genTwo = numberGenerator();


// //First .next() starts execution and returns the first yielded value: 1
// console.log(gen.next().value); // output : 1

// //Second .next() resumes execution and returns the second yielded value: 2
// console.log(gen.next().value); // output : 2

// //Third .next() resumes execution and returns the third yielded value: 3
// console.log(gen.next().value); // output : 3

// //Fourth .next() finds no more yields, so returns undefined for the value (and done: true)
// console.log(gen.next().value); // output : undefined


// //genTwo is a separate instance, so it starts fresh:
// //First .next() returns 1
// //Second .next() returns 2
// console.log(genTwo.next().value);
// console.log(genTwo.next().value);





//Generator Function Example: Countdown Timer
//function* countdownTimer(start) creates a generator that counts down from start
//The while loop continues as long as start >= 0
//Each iteration yields the current value before decrementing
function* countdownTimer(start) {
  while (start >= 0) {
    yield start;
    start--;
  }
}

// Create two separate countdowns
//Creating Instances:
//missionCountdown starts from 5
//launchCountdown starts from 3
//Each maintains its own separate state
const missionCountdown = countdownTimer(5);
const launchCountdown = countdownTimer(3);



console.log("Mission Countdown:");

//First .next() call starts execution
//Enters while loop (5 >= 0 is true)
//Executes yield 5 - pauses and returns {value: 5, done: false}
//We access the .value property (5)
//Function pauses here (before start--)
console.log(missionCountdown.next().value); // 5



//Execution resumes where it paused
//Completes the paused iteration: runs start-- (now start = 4)
//Loops back: while (4 >= 0) is true
//yield 4 - pauses and returns {value: 4, done: false}
console.log(missionCountdown.next().value); // 4


//Resumes execution
//Completes iteration: start-- (now start = 3)
//Loops: while (3 >= 0) true
//yield 3 - pauses and returns {value: 3, done: false}
console.log(missionCountdown.next().value); // 3


console.log("\nLaunch Countdown:");
//New generator instance, fresh execution
//while (3 >= 0) true
//yield 3 - returns {value: 3, done: false}
console.log(launchCountdown.next().value); // 3


//Resumes
//start-- (now start = 2)
//while (2 >= 0) true
//yield 2
console.log(launchCountdown.next().value); // 2

//Resumes
//start-- (now start = 1)
//while (1 >= 0) true
//yield 1
console.log(launchCountdown.next().value); // 1

//Resumes
//start-- (now start = 0)
//while (0 >= 0) true
//yield 0
console.log(launchCountdown.next().value); // 0


//Resumes
//start-- (now start = -1)
//while (-1 >= 0) false - exits loop
//Generator ends - returns {value: undefined, done: true}
console.log(launchCountdown.next().value); // undefined (done)


//Key Points to Remember:
//Each generator instance maintains its own separate state
//The function pauses at each yield statement
//Execution resumes from the exact point it paused
//After the last yield, subsequent calls return {done: true}
//The generator's internal variables (like start) are preserved between calls
