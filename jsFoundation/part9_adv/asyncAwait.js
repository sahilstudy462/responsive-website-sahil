/* Creates and returns a new Promise
The Promise executor function contains a setTimeout that will execute after 3000ms (3 seconds)
After 3 seconds, it rejects the Promise with an error object containing user data
Note: Normally you'd resolve with success data and reject with errors, but this example shows rejection */
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}


/* Marked as async which allows using await inside it
try/catch block handles both success and error cases
await pauses execution until the Promise settles (resolves or rejects) */
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();


/* 
getUserData() is called
Immediately logs "Fetching user data..."
await fetchUserData() is called:
The Promise is created and starts its 3-second timer
Function execution pauses here
After 3 seconds:
The setTimeout callback executes
The Promise rejects with the error object
Since the Promise rejected:
The await throws the rejection value
Execution jumps to the catch block
The catch block logs:
"Error fetching data"
The error object { name: "chaicode", url: "https://chaicode.com" } 
*/


//Key Concepts:
//Promises: Represent eventual completion of async operations
//Async/Await: Syntactic sugar for working with Promise
//Error Handling: try/catch works with Promise rejections when using await
//Asynchronous Timing: The "User data fetched successfully" message never appears because the Promise rejects


//Important Notes:
/* 
The code intentionally rejects to demonstrate error handling
In real applications, you'd typically:
resolve() with successful data
reject() with actual error objects/messages
The 3-second delay simulates network latency 
*/
