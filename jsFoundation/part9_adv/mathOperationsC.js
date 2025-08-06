//CommonJS module system

//named export
//Three functions are defined normally (add, subtract, multiply)
//At this point, they're only available within the module file
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}


//module.exports is used to expose these functions to other files
//We're exporting an object containing all three functions
//This is similar to named exports in ES6 modules, but with different syntax
module.exports = {
  add,
  subtract,
  multiply,
};
