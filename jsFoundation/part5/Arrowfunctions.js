// Squared Numbers using Arrow Function
const squareNumbers = (arr) => arr.map(num => num * num);
let number1 = [1,2,3,4,5,6,7];
let sqaurednumbers = squareNumbers(number1)
console.log(sqaurednumbers)
 

// filtering even Numbers using Arrow Function
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
let number2 = [1,2,3,4,5,6,7];
let even_numbers = filterEvenNumbers(number2)
console.log(even_numbers)

 
const sumPositiveNumbers = (arr) => 
  arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
let mixed_array = [-1,2,-3,4,-5,6,0,7];
  let positive_array = sumPositiveNumbers(mixed_array);
  console.log(positive_array)//2+4+6+7=19



  const getNames = (arr) => arr.map(obj => obj.name);
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const names = getNames(people);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
 


const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
const words = ["apple", "banana", "kiwi", "strawberry"];
const longest = findLongestWord(words);
console.log(longest); // Output: "strawberry"