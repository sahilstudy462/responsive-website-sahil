// Checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;

if (num1 > num2) // greater than operator
   {
  console.log(" num 1 is greater than num2"); // yeh tab chalega jab num1, num2 se bada hoga
} else {
  console.log("Nope, num1 is NOT greater"); // yeh tab chalega jab num1, num2 se bada nahi hoga
}




// Checking if a string is equal to another string:
let username1 = "chai";
let anotherUsername1 = "chai";

if (username1 == anotherUsername1) // equality operator
   {
    console.log("Pick another username"); // yeh tab chalega jab dono strings barabar hongi
} else {
  console.log("You can pick this username"); // yeh tab chalega jab dono strings barabar nahi hongi
}



// // Checking if a variable is a number or not:
let score = 44; // number 
if (typeof score === "number") // typeof score JavaScript ka operator hai jo score variable ka type return karta hai (jaise "number", "string", "boolean", etc).
//=== "number" check karta hai ki kya score ka type exactly "number" hai ya nahi (strict equality).

{
  console.log("Yep, this is a number"); // yeh tab chalega jab score ka type number hoga
} else {
  console.log("No that is not a number"); // yeh tab chalega jab score ka type number nahi hoga
}


// Example with a string
let underscore = "44"; // string 
if (typeof underscore === "number")// typeof underscore JavaScript ka operator hai jo underscore variable ka type return karta hai (jaise "number", "string", "boolean", etc).
//=== "number" check karta hai ki kya underscore ka type exactly "number" hai ya nahi (strict equality).
// yeh condition false hogi kyunki underscore ek string hai, number nahi.

   {
  console.log("Yep, this is a number"); // yeh tab chalega jab underscore ka type number hoga
} else {
  console.log("No that is not a number"); // yeh tab chalega jab underscore ka type number nahi hoga
}


// Checking if a boolean value is true or false:
let isTeaReady = false; // false
if (isTeaReady) // yeh condition check karti hai ki isTeaReady true hai ya false. Agar true hoga toh if block chalega, agar false hoga toh else block chalega.
   {
  console.log("Tea is Ready"); // yeh tab chalega jab isTeaReady true hoga
} else {
    console.log("Tea is NOT ready"); // yeh tab chalega jab isTeaReady false hoga
}

let wasTeaReady = true; // true 
if (wasTeaReady) // yeh condition check karti hai ki wasTeaReady true hai ya false. Agar true hoga toh if block chalega, agar false hoga toh else block chalega.
   {
  console.log("Tea is Ready"); // yeh tab chalega jab wasTeaReady true hoga
} else {
    console.log("Tea is NOT ready"); // yeh tab chalega jab wasTeaReady false hoga
}


// Checking if an array is empty or not:
let items = ["item1"]; // not empty
console.log(items.length); // output will be : 1

if (items.length === 0) // yeh condition check karti hai ki array ka length 0 hai ya nahi. Agar length 0 hoga toh if block chalega, agar length 0 nahi hoga toh else block chalega.
   {
  console.log("Array is empty"); // yeh tab chalega jab array ka length 0 hoga
} else {
  console.log("Array is NOT empty"); // yeh tab chalega jab array ka length 0 nahi hoga
}

let items1 = []; // empty array
console.log(items1.length); // output will be : 0
if (items1.length === 0) // yeh condition check karti hai ki array ka length 0 hai ya nahi. Agar length 0 hoga toh if block chalega, agar length 0 nahi hoga toh else block chalega.
   {
  console.log("Array is empty"); // yeh tab chalega jab array ka length 0 hoga
} else {
  console.log("Array is NOT empty"); // yeh tab chalega jab array ka length 0 nahi hoga
}


// Challenge time
let num100 = 10; 
let num101 = 11;

if(num100 > num101) {
    console.log("number 1 is greater than number 2");
}
else {
    console.log("number 2 is greater than number 1");
} 


if(num1 % 2 == 0) {
    console.log("number 1 is even");
}
else {
    console.log("number 1 is odd");
}

if(num2 % 2 == 0) {
    console.log("number 2 is even");
}
else {
    console.log("number 2 is odd");
}

let username = "sahil";
let mysurname = "sahil";
if(username == mysurname) {
    console.log("username and mysurname are same");
}
else { 
    console.log("username and mysurname are not same");
}

if(username != mysurname) {
    console.log("username and mysurname are not same");
}
else {
    console.log("username and mysurname are same");
}


let a = 1;
let b = "1";
if(a==b) {
    console.log("a and b are equal");
}
else {
    console.log("a and b are not equal");
}


if(a!=b) {
    console.log("a and b are not equal");
}       
else {
    console.log("a and b are equal");
}


if(a===b) {
    console.log("a and b are equal");
}
else {
    console.log("a and b are not equal");
}

if(a!==b) {
    console.log("a and b are not equal");
}   
else {
    console.log("a and b are equal");
}



