/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
}
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("yoghurt");
// console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499,100);
// console.log(totalCost)


function sum(a,b) {
  return a + b;
}
let z = sum(10,20)
// console.log(z)

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");  
}

let order = processTeaOrder(makeTea);
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(name) {
    let score = 100
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("green tea");
// console.log(result);
 


/*
6. Perform the following mathematical operations
on the provided variables a and b
*/



const a = 18;
const b = 24;

// A/ddition of two values
function add() {
    const result = a + b;
   return result ;
}
let result_1 = add(a,b);
console.log(`Addition of 18 and 24 is ${result_1}`)

// Subtract small value from larger one
function subtract() {
    const result = b - a;
    return result;
}
let result_2 = subtract(a,b);
console.log(`subtraction of 24 and 18 is ${result_2}`)

function multiply() {
    const result = a * b;
    return result;
}
let result_3 = multiply(a,b);
console.log(`multiplication of 18 and 24 is ${result_3}`)

// Divide larger value by small
function divide() {
    const result = b/a;
    return result;
}
let result_4 = divide(a,b);
console.log(`division of 24 and 18 is ${result_4}`)

// Increase value of a by 1
function increment() {
    const result = a + 1;
    return result;
}
let result_5 = increment(a);
console.log(`incrementation of 18 is ${result_5}`)


// Decrease value of b by 1
function decrement() {
    const result = b - 1;
    return result;
}
let result_6 = decrement(b);
console.log(`decrementation of 18 is ${result_6}`)

// Divide larger value by small to find the reminder
function reminder() {
    const result= b % a;
    return result;
}
let result_7 = reminder(a,b);
console.log(`reminder of 18 is ${result_7}`)





/*
7.Playing with types
 */

function stringToNumber(input) {
  const number = Number(input);
return isNaN(number) ? "Not a number" : number;
}


function flipBoolean(input) {
return !Boolean(input);
}

function whatAmI(input) {
  if (typeof input === 'number' && !isNaN(input)) {
 return "I'm a number!";
} else if (typeof input === 'string') {
 return "I'm a string!";
} else {
 return "I'm something else!";
}
}
let WHAT_AM_I_part1 = whatAmI(123)
console.log(WHAT_AM_I_part1)
let WHAT_AM_I_part2 = whatAmI("abc")
console.log(WHAT_AM_I_part2)



function isItTruthy(input) {
return input ? "It's truthy!" : "It's falsey!";
}
let checking_boolean = isItTruthy(1);
console.log(checking_boolean)
let checking_boolean1 = isItTruthy(0);
console.log(checking_boolean1)


// filter function using filter array method 
const mixedarray = [1,"a",2,"b",3];
const result1 = mixedarray.filter(filterNumbers)
function filterNumbers(numbfn) {
return typeof numbfn === "number";
}
// console.log(result1)
        


// reverse function using reverse array method 
const mixedarray2 = [1,"a",2,"b",3];
const result2 = reverseArray(mixedarray2);
function reverseArray(arr) {
 return arr.reverse();
}
// console.log(result2);



// function using math max method 
function findMax(arr) {
  return Math.max(...arr);
}
const mixedarray3 = [1,2,3,4,5];
const result3 = findMax(mixedarray3);
// console.log(result3);



// function removing duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const mixedarray4 = [2,2,4,4];
const result4 = removeDuplicates(mixedarray4);
// console.log(result4);





// Flatten Nested Array Function in JavaScript
function flattenArray(arr) {
  let result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
const flatArray = flattenArray(nestedArray);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]




// Sum of First N Natural Numbers
function sumOfN(n) {
  let sum=0;
   for (let i = 1; i <= n; i++) {
      sum += i
  }
   return sum;
 }
 let total = sumOfN(5);
//  console.log(total)




// Multiplication Table
 function printMultiplicationTable(n) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
      arr.push(`${n} * ${i} = ${n*i}`)
  }
return arr;
}
bottle = printMultiplicationTable(5);
// console.log(bottle);





// count vowels function
function countVowels(str) {
  let vowels = new Set("aeiouAEIOU");
  let numOfVowels=0
  for (let i = 0; i < str.length; i++) {
      if (vowels.has(str[i])) {
                numOfVowels += 1
      }
  }
return numOfVowels;
}
console.log(countVowels("Hello World"));
console.log(countVowels("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat porro sit cupiditate quaerat ipsa veniam laborum doloribus fugit ipsum nisi, a, quae pariatur quod, quisquam nam eaque! Totam, delectus!"));