
//Task 1: Simulating Asynchronous Behavior
/* 
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
Use setTimeout to simulate this behaviour. 
*/
function simulateAsyncTask() {
    console.log("Task started")
    setTimeout(() => {
        console.log("first Task finished")
    }, 1000);
}
simulateAsyncTask();


//Simulate Multiple Async Tasks with Different Delays
/*
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
*/
function simulateMultipleTasks() {
    setTimeout(() => {
        console.log("Task 1 finished")
    }, 2000);
    
     setTimeout(() => {
        console.log("Task 2 finished")
    }, 3000);
    
     setTimeout(() => {
        console.log("Task 3 finished")
    }, 4000);
}
simulateMultipleTasks();


//Async Task with Callback Function
/*
Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/
//Defines a function named fetchDataWithCallback that takes one parameter, callback. This parameter should be a function.
function fetchDataWithCallback(callback) {

  //Starts a timer that will run the code inside after 5 seconds (5000 milliseconds).
  setTimeout(() => {

    //Creates a variable called data and sets its value to the string 'Fetched data'.
    const data = 'Fetched data';

    //Calls the callback function, passing the value of data to it.
    callback(data);
  }, 5000);
}

//Calls the fetchDataWithCallback function, passing an arrow function as the callback parameter. This arrow function takes one parameter, tata.
fetchDataWithCallback((tata) => {

  //Inside the callback, logs the string "Data:" and the value of tata to the console. tata will be 'Fetched data'.
  console.log("Data:", tata);
});

//This code waits 5 seconds, then calls your callback function with the string 'Fetched data', which is printed to the console.
