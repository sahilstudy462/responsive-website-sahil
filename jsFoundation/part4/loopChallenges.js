//********** in while loop condition is first checked then code will be executed ***************

//********** in do while loop condition first code will be executed then condition is checked***************

//********** in for loop first statement is executed which is intialization then condition is checked then increment/decrement then the code is ready to be executed ***************


/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum += i; // sum = sum + i
//   i++;
//   console.log(sum);
// }
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

// let countdown = [];
// let j = 5;
// while (j > 0) {
//   countdown.push(j);
//   j--;
// }
// console.log(("Countdown = ") + (countdown));
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop"); 

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/


// let total = 0;
// let k = 0;
// do {
//   total += k;
//   k++;
//   console.log(total);
//   console.log("hello");
// } while (k <= 3);



// let total = 0;
// let k = 0;
// do {
//   total += k;
//   k++;
//   console.log(total);
//   console.log("hello");
// } while (k <= -1);



// let sum = 0;
// let q = 0;

// while (q <= -1) {
//   sum += q;
//   q++;
//   console.log(sum);
//   console.log("hello");
// }




/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

// let multipliedNumbers = [];
// let numbers = [2, 4, 6];

// for (let l = 0; l < numbers.length; l++) {
//     takeNumber = numbers[l] * 2;
//     multipliedNumbers.push(takeNumber);

// //   multipliedNumbers.push(numbers[l] * 2);
// }
// console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

// let cities = ["Paris", "New York", "Tokyo", "London"];
// let cityList = [];

// for (let c = 0; c < cities.length; c++) {
//   const myCity = cities[c];
//   cityList.push(myCity);
// }
// console.log(cityList);


// let n = 5
// let i = 0;
// while(i<n) {
//   console.log(i)
//   i++;
// }