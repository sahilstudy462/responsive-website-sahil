// Task 1: Async-Await with Promise.all
// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.
// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

//fetchUser() ek function hai jo Promise return karta hai.
//new Promise(...) ke andar setTimeout laga hai, matlab 1000 ms (1 second) ke baad resolve('User data') chalega.
//toh jab fetchUser() call karoge, toh 1 second ke baad 'User data' milega.
function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve('User data'), 1000));
}
 

//fetchPosts() bhi ek function hai jo Promise return karta hai.
//isme bhi setTimeout laga hai, matlab 1000 ms (1 second) ke baad resolve('Posts data') chalega.
//toh jab fetchPosts() call karoge, toh 1 second ke baad 'Posts data' milega.
function fetchPosts() {
  return new Promise(resolve => setTimeout(() => resolve('Posts data'), 1000));
}
 
//fetchAllData() ek async function hai.
//async function ke andar hum await use kar sakte hain.
//fetchAllData() khud bhi ek Promise return karta hai.
//Promise.all(...) ke andar hum fetchUser() aur fetchPosts() ko array mein pass kar rahe hain.
//fetchUser() aur fetchPosts() ek hi line mein Promise.all([...]) ke andar call ho rahe hain — dono promises saath-saath start ho jaate hain (parallel).
//Promise.all([...]) tab resolve hota hai jab saare promises resolve ho jaate hain. Fir woh array of results dega in the same order as inputs.
//await us array ka result return karta hai; destructuring [user, posts] se user = 'User data' aur posts = 'Posts data' mil jaate hain.
//Fir console.log(user) aur console.log(posts) print kar dete hain.
//Timing ka point: dono functions parallel chal rahe hain, dono ~1 second mein complete honge — isliye total wait ~1 second, na ki 2 seconds.
async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user);
  console.log(posts);
}
 


// Task 2: Error Handling in Async/Await with Promise.all
//Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.
//Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.

//fetchSuccess() ek function hai jo Promise return karta hai.
//new Promise(...) ke andar setTimeout laga hai, matlab 1000 ms (1 second) ke baad resolve('Success') chalega.
//toh jab fetchSuccess() call karoge, toh 1 second ke baad 'Success' milega.
function fetchSuccess() {
  return new Promise(resolve => setTimeout(() => resolve('Success'), 1000));
}
 
//fetchFailure() ek function hai jo Promise return karta hai.
//new Promise(...) ke andar setTimeout laga hai, matlab 1000 ms (1 second) ke baad reject('Error occurred') chalega.
//toh jab fetchFailure() call karoge, toh 1 second ke baad 'Error occurred' milega.
function fetchFailure() {
  return new Promise((_, reject) => setTimeout(() => reject('Error occurred'), 1000));
}
 
//handlePromises() ek async function hai.
//async function ke andar hum await use kar sakte hain.
//handlePromises() khud bhi ek Promise return karta hai.
//try-catch block use karke hum error handle kar rahe hain.
//Promise.all([...]) ke andar hum fetchSuccess() aur fetchFailure() ko array mein pass kar rahe hain.
//fetchSuccess() aur fetchFailure() ek hi line mein Promise.all([...]) ke andar call ho rahe hain — dono promises saath-saath start ho jaate hain (parallel).
//Promise.all([...]) tab resolve hota hai jab saare promises resolve ho jaate hain. Agar koi bhi promise reject hota hai, toh woh turant reject ho jaata hai.
//await us array ka result return karta hai; destructuring [success, failure] se success = 'Success' aur failure = 'Error occurred' mil jaate hain.
//Lekin kyunki fetchFailure() reject ho jaata hai, toh catch block mein jaayenge.
//catch block mein console.log(error) print kar deta hai, jisme error = 'Error occurred' hoga.
async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}
 
// Task 3: Timeout with Async/Await and Promise.race
//Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".

//Ye ek helper function hai jo kisi bhi promise ko timeout ke sath wrap karta hai.
//Matlab: agar promise time pe resolve/reject nahi hua, to "Timeout exceeded" error return karega.
//fetchWithTimeout() ek function hai jo do parameters leta hai: promise aur timeout.
//timeoutPromise ek naya Promise hai jo setTimeout ke through timeout ms ke baad reject ho jaata hai with message 'Timeout exceeded'.
function fetchWithTimeout(promise, timeout) {

//Yaha ek dummy promise banaya gaya hai jo sirf reject karega "Timeout exceeded" message ke sath.
//Ye setTimeout ke baad chalta hai — jitna timeout diya hai utne ms ke baad.
//Example: agar timeout = 2000, to 2 second ke baad ye promise reject ho jaayega.
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject('Timeout exceeded'), timeout)
  );
  

  //Promise.race ek aisa function hai jo jo bhi pehle settle ho (resolve ya reject) uska result return karta hai.
  //Matlab do promises ko ek race track pe daal diya:
  //Agar original promise pehle resolve ho gaya → uska result return hoga.
  //Agar timeoutPromise pehle reject ho gaya → "Timeout exceeded" error throw hoga.
  return Promise.race([promise, timeoutPromise]);
}
 

//Ye ek demo function hai jo 3 second ke baad "Data fetched" return karta hai.
//Basically ek normal API call jaisa behave karta hai (jo thoda time lagata hai).
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}

// test function jo fetchWithTimeout ko use karta hai.
//Yaha hum fetchData() ko 2 second ke timeout ke sath call kar rahe hain.
//fetchData() 3 second leta hai, lekin timeout sirf 2 second ka hai — isliye "Timeout exceeded" error milega.
//fetchData() turant call hua (ek promise return hua jo 3s lega).
//fetchWithTimeout me second argument 2000 (2s) diya.
//Race:
//timeoutPromise → 2s par reject('Timeout exceeded')
//fetchData() → 3s par resolve('Data fetched')
//Jo pehle hua = timeout (2s). Isliye Promise.race reject ho gaya with 'Timeout exceeded'.
//wait ne us rejection ko throw kiya → control catch (error) me gaya → console.log(error) ne "Timeout exceeded" print kiya.
//(console.log(result) kabhi run nahi hua kyunki await ne throw kiya.)
/*
t = 0ms → fetchData() start (3s), timeout timer start (2s)
t = 2000ms → timeout fires → Timeout exceeded reject → Promise.race rejects → catch runs
t = 3000ms → fetchData() resolve ho jayega, lekin race already settle ho chuka — koi effect nahi
*/
//Agar fetchWithTimeout(fetchData(), 4000) → fetchData (3s) pehle finish karega → output: "Data fetched"
async function test() {
  try {
    // original promise 3s lega, timeout 2s ka hai
    const result = await fetchWithTimeout(fetchData(), 2000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

test();