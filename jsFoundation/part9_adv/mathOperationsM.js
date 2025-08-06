//ES6 modules in JavaScript

//Named Exports:
//add and subtract functions are exported as named exports using the export keyword
//These must be imported using the exact same name in curly braces
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}


//Default Export:
//multiply is exported as the default export using export default
//A module can have only one default export
//When importing, you can choose any name for the default import
export default function multiply(a, b) {
  return a * b;
}
