// && -> and
// || -> or
// ! -> reverse

let isLoggedin = true;
let ispaid = true;
let isGoogleuser = false;


console.log(isLoggedin || ispaid); //true
console.log(isLoggedin && ispaid); //true
console.log(isLoggedin || isGoogleuser); //true
console.log(isLoggedin && isGoogleuser); //false
console.log(!isLoggedin); //false
console.log(!isGoogleuser); //true
console.log((isLoggedin && ispaid) || isGoogleuser); //true
console.log((isLoggedin || ispaid) && isGoogleuser); //false

// Example 2
let highscore = 100;
let userScore = 90;

console.log(userScore > highscore); //false
console.log(userScore < highscore); //true
console.log(userScore >= highscore); //false
console.log(userScore <= highscore); //true
console.log(userScore == highscore); //false
console.log(userScore != highscore); //true

// Example 3
let username = "hitesh";
let password = "12345";

console.log(username === "hitesh" && password === "12345"); //true
console.log(username === "hitesh" || password === "1234"); //true
console.log(!(username === "hitesh")); //false
console.log(!(password === "12345")); //false
console.log(username === "hitesh" && !(password === "12345")); //false
console.log(username === "hitesh" || !(password === "12345")); //true


// Example 4
let user = "admin";
let pass = "admin123";

console.log(user === "admin" && pass === "admin123"); //true
console.log(user === "admin" || pass === "admin"); //true
console.log(!(user === "admin")); //false
console.log(!(pass === "admin123")); //false
