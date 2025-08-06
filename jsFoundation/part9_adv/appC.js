//CommonJS module system

//The require() function is used to import the module
//The entire exported object is assigned to mathOperations
const mathOperations = require("./mathOperationsC.js");


//To use the functions, you access them as properties of the imported object
//mathOperations.add(2, 2) calls the add function and returns 4
console.log(mathOperations.add(2, 2));


//Key Differences from ES6 Modules:
//Syntax:
//CommonJS uses module.exports and require()
//ES6 uses export/import syntax
//Import Behavior:
//CommonJS imports the entire exported object
//ES6 allows selective imports of specific exports
//Runtime:
//CommonJS modules are loaded synchronously at runtime
//ES6 modules are static (imports/exports are resolved at compile time)
//This CommonJS pattern is still widely used in Node.js applications, though ES6 modules are becoming more common, especially in frontend code and newer Node.js projects.
