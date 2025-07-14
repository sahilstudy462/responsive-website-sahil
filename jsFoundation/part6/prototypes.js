let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",

// oldway
  __proto__: computer,
};
let tomHardware = {};

// console.log(`lenovo `, lenovo.__proto__ , lenovo.screen);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

// modernway
Object.setPrototypeOf(tesla, genericCar); // sets genericCar as the prototype of tesla This means tesla now inherits properties from genericCar

// console.log(`tesla `, Object.getPrototypeOf(tesla)); // only returns the prototype object, not the object itself
// console.log(`tesla `, Object.getPrototypeOf(genericCar)); // Object.getPrototypeOf(genericCar) returns Object.prototype Object.prototype is usually displayed as [Object: null prototype] {} in Node.js/Chrome console The console shows [Object: null prototype] {} to indicate: This is the fundamental Object.prototype It has no own enumerable properties (that's why {} appears) Its prototype is null (shown in the label)



// new modernway
let phone = { version: 4,
  walk() {console.log("hello world")}
 };

const andriod = Object.create(phone);

andriod.update = 20; 

// console.log(andriod.version);
// console.log(andriod.update);
// andriod.walk();
// console.log(andriod)

