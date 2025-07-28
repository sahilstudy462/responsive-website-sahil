//Promise is a constructor (a function that creates objects), it must inherit from Function.prototype.
/* ✅ resolve() → Fulfills the Promise (success case)
❌ reject() → Rejects the Promise (error case) */

let promise1 = function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully"); // Fulfills the Promise (success case)
      } else {
        reject("Error fetching data"); // Rejects the Promise (error case)
      }
    }, 2000);
  });
}



//Promise Chaining
promise1()

//In this case, since success is true, it will call
  .then((data) => {
    console.log(data); // Receives the resolved value ("Data fetched successfully") and Logs it to console
    return data.toLowerCase(); // Returns the value converted to lowercase
  })
  .then((value) => {
    console.log(value);// Receives the lowercase string from the previous then and Logs it to console
  })
  //In this case, since success is true, it won't be called if succed is false then it will call
  .catch((error) => console.error(error))// Receives the rejected value ("Error fetching data") and Logs it to console
  .finally(() => {
    console.log("Operation completed (success or failure)"); // Always runs even after success is true or false
  });
  
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "First")  
/*Syntax: setTimeout(callback, delay, arg1, arg2, ...) callbackFunction: The function to execute after the delay (resolve in this case)

delayInMilliseconds: How long to wait before calling the function (2000ms = 2 seconds)

arg1, arg2, ...: Arguments to pass to the callback function (""First" is passed as an argument to resolve after the delay)*/
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Second")
})

let promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Third")
})

/*
let promise5 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "four")
}) // will log only this error
*/ 

Promise.all([promise2,promise3,promise4])
.then((values) => {
console.log(values) // [ 'First', 'Second', 'Third' ]
})
.catch((error) => {
  console.log(error) // four
})  
