////ES6 modules in JavaScript

// Module import file

//default import
//The default export is imported without curly braces
//You can name it anything you want (though here we kept the original name multiply)
import multiply from "./mathOperationsM.js";


//named import
//The named exports are imported using curly braces { }
//The names must exactly match the exported names (add and subtract in this case)
import { add, subtract } from "./mathOperationsM.js";

console.log(multiply(2, 2));
console.log(add(2, 2));


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


