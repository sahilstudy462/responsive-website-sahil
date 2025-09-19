let score = 102;
let bonus = 25;
let totalScore = score + bonus;
console.log(totalScore) // output will be : 127

let addition = 4 + 5;
console.log(addition) // output will be : 9

let subtract = 9 - 3;
console.log(subtract) // output will be : 6

let mult = 3 * 5;
console.log(mult) // output will be : 15

let divi = 8 / 2;
console.log(divi) // output will be : 4


//% ko modulus operator kehte hain.
//Yeh operator division ke baad bacha hua remainder (shesh) return karta hai.
//9 ko 2 se divide karo, aur jo remainder bache, woh return karo.
//Divide 9 by 2:
//2 * 4 = 8
//9 - 8 = 1 (yeh remainder hai)
let reminder = 9 % 2;
console.log(reminder) // output will be : 1


//Exponentiation operator (**)
//Yeh operator base ko exponent ke power se multiply karta hai.
//2 ** 3 means 2 * 2 * 2 = 8
let expo = 2 ** 3;
console.log(expo) // output will be : 8

// Increment operator
let myscore = 110; // yeh 110 hai
myscore++; // ab yeh 111 ho gaya hai
console.log(myscore) // output will be : 111

let credits = 56; // yeh 56 hai
credits--; // ab yeh 55 ho gaya hai
console.log(credits) // output will be : 55


// Comparion operation
let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2); //true
console.log(num1 != num3); // true
console.log(num1 > num3); // false
console.log(num1 < num3); // true
