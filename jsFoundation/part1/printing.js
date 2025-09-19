console.log("Hello");
console.log("chai"); 

//process.stdout.write() Node.js ka method hai jo output ko same line par print karta hai, bina newline (\n) ke.
process.stdout.write("chai"); 
process.stdout.write("chai");
//Dono "chai" ek hi line me chipak kar print honge.)

/*

Difference with console.log:

console.log() har print ke baad naya line (newline) add karta hai.
process.stdout.write() sirf diya hua text print karta hai, bina newline ke.


Use:
Jab aapko output ek hi line me ya custom formatting chahiye ho, tab process.stdout.write() use karte hain.

*/

console.table({ city: "Jaipur" }); //Yeh ek object ko table format me print karta hai.

console.warn({ city: "Jaipur" }); //Yeh ek warning message print karta hai, jo console me alag color ya style me dikh sakta hai.
