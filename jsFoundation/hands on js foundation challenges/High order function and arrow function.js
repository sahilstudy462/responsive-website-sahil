const lol = [1,2,3,4,5]
const object1 = [{name : "a"}, {name : 1234}, {name : "b"} ]
const words = ["apple", "banana", "kiwi", "strawberry"];

// squared numbers using array method
const squareNumbers = (arr) => arr.map(num => num * num);


// filtering even numbers
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);


// sum of positive numbers
const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);


//transform Array of objects
const getNames = (arr) => arr.map(item => item.name);


//find the longest word
const findLongestWord = (arr) => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");



// console.log(squareNumbers(lol))
// console.log(filterEvenNumbers(lol))
// console.log(sumPositiveNumbers(lol))
// console.log(getNames(object1))
// console.log(findLongestWord(words))

