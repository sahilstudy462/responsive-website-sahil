//These functions simulate API calls that return Promises
//fetchPostData() resolves after 2 seconds with post data
function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

//fetchCommentData() resolves after 3 seconds with comment data
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });
}

//The async function allows using await for asynchronous operations
//It uses Promise.all() to fetch both post and comment data concurrently
async function getBlogData() {
  try {
    console.log("Fetching blog data");

    // //The commented lines show an alternative sequential approach (slower)   
    // const postData = await fetchPostData();
    // // console.log(postData)
    // const commentData = await fetchCommentData();
    // // console.log(commentData);

    
    //Both fetchPostData() and fetchCommentData() start immediately
    //They run concurrently (in parallel)
    //Total time: ~3 seconds (time of the slowest operation)
    //Use case: When the operations are independent and can run simultaneously
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    
    //For Sequential Execution
    //JavaScript is single-threaded
    //await pauses execution
    //Console logs only show when the thread is free to execute them


    //For Parallel Execution
    //Both functions start at the same time (0s)
    //No waiting! They run in parallel.
    //fetchPostData() finishes at 2s
    //But Promise.all holds its result until all promises finish.
    //fetchCommentData() finishes at 3s
    //Now Promise.all releases both results together.
    //Total time = 3s (not 5s!)
    //Because the slowest task (fetchCommentData) took 3s.

    console.log(postData)
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }
}
getBlogData();


//Execution Flow
//getBlogData() is called
//"Fetching blog data" is logged immediately
//Both fetch functions start executing simultaneously
//After ~3 seconds (the longer operation):
//Both promises have resolved
//The results are logged
//"fetch complete" is logged


//Key Concepts Demonstrated
//Promises: Handle asynchronous operations
//async/await: Write asynchronous code that looks synchronous
//Promise.all: Run promises in parallel and wait for all to complete
//Error handling: Using try/catch with async functions
//Concurrent vs sequential: The commented code shows sequential fetching (would take 5 seconds total)
