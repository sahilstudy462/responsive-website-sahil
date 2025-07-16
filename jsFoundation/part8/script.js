//example 1

document
  .getElementById("changeTextButton") /* document.getElementById() → Finds an HTML element with the specified ID ("changeTextButton"). This targets a button in your HTML with id="changeTextButton". */

 /* .addEventListener() → Listens for a specific event (here, "click") on the button.
When the button is clicked, the function inside runs. */
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph"); // Gets another HTML element (a paragraph) with id="myParagraph" and stores it in the variable paragraph.

    paragraph.textContent = "the paragraph is changed"; // textContent → Changes the text inside the paragraph to "the paragraph is changed".
  }); 



//example 2

document
  .getElementById("highlightFirstCity") // Finds and selects the HTML element with the ID "highlightFirstCity" (presumably a button) Uses document.getElementById() which is a DOM method to select elements by their ID


  /* Attaches a click event handler to the button The anonymous function will execute whenever the button is clicked */
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList"); // Selects an element with ID "citiesList" (likely a <ul> or <ol> list) Stores this DOM element in the citiesList variable

   citiesList.firstElementChild.classList.add("highlight"); // firstElementChild again gets the first list item classList.add("highlight") adds the "highlight" class to this element This would typically apply some visual styling (like a background color) defined in CSS
  });


//example 3

document.getElementById("changeOrder") // getElementById("changeOrder") finds the button

// addEventListener("click", function() {...}) makes the button respond to clicks
.addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType"); // Selects an Span element with ID "coffeeType" and Stores this DOM element in the coffeeType variable

  coffeeType.textContent = "Espresso"; // Changes its text from "Latte" to "Espresso"
  coffeeType.style.backgroundColor = "brown"; // Changes its background color to brown
  coffeeType.style.padding = "5px"; // Adds 5px padding around the text
});



//example 4


document.getElementById("addNewItem") // getElementById("addNewItem") finds the button
// addEventListener("click", function() {...}) makes the button respond to clicks
.addEventListener("click", function () {
  let newItem = document.createElement("li"); // document.createElement("li") creates a brand new <li> element
  newItem.textContent = "Eggs"; // newItem.textContent = "Eggs" sets the text content of the new list item 
  document.getElementById("shoppingList") // getElementById("shoppingList") finds the unordered list
  .appendChild(newItem); // appendChild(newItem) adds the new list item to the end of the shopping list
});



//example 5

document

  .getElementById("removeLastTask") // getElementById("removeLastTask") finds the button
  //addEventListener("click", function() {...}) makes the button respond to clicks
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList"); // getElementById("taskList") gets the unordered list element
    taskList.lastElementChild // lastElementChild property accesses the last <li> element in the list
    .remove(); // remove() method deletes that element from the DOM
  });


// example 6

document
  .getElementById("clickMeButton") // getElementById("clickMeButton") finds the button

  // Uses addEventListener() to watch for interactions with the button
  // The first parameter "dblclick" specifies we want to respond to double-clicks (not single clicks)
  .addEventListener("dblclick", function () {
    alert("chaicode"); // The function shows an alert box with the text "chaicode"
  });

// example 7


document.getElementById("teaList") // getElementById("teaList") finds the unordered list 

//addEventListener("click", function() {...}) makes the unordered list respond to clicks
/* Instead of attaching listeners to each <li>, we attach one to the parent <ul> This is more efficient, especially for long lists */
.addEventListener("click", function (event) {

  // event.target identifies which specific element was clicked
  // matches(".teaItem") verifies it's one of our tea items
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent); // Only shows the alert if the clicked element matches our selector Displays the selected tea's name using textContent
  }
});

//example 8

document

// Step 1: Find the form and listen for submission
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {

    // Step 2: Stop the form from refreshing the page
    event.preventDefault();

    // Step 3: Get what the user typed
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    // Step 4: Show the feedback on the page
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });



//example 9

// Listens for when the page is ready (DOMContentLoaded). Think of this like waiting for a pizza to finish baking before taking it out.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded"; // When ready, it changes the message inside the <p> tag. It finds the message using getElementById("domStatus"). Then updates the text with textContent = "DOM fully loaded".
});

/* example 


Imagine a newspaper printing press:
"Waiting for DOM to load" = The newspaper is still being printed.
"DOM fully loaded" = The newspaper is ready to read!

*/



//example 10
document
  .getElementById("toggleHighlight") // Finds the button ("toggleHighlight")

  // Listens for clicks on that button
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText"); //Finds the paragraph ("descriptionText") and store in variable name descriptionText

    descriptionText.classList.toggle("highlight"); // Toggles (switches on/off) the "highlight" class
  });
