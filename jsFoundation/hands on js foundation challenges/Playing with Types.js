// String to Numbers 
function stringToNumber(input) {
    let num = Number(input)
    if(isNaN(num)){
        return 'Not a number'
    }
   return num;
}
console.log(stringToNumber("123abc"))


// flip boolean
function flipBoolean(input) {
    let value = !Boolean(input);
    return value;
}
console.log(flipBoolean(input));


// what am I
function whatAmI(input) {
if (typeof input === 'string'){
    return "I'm a string!"
}
else if(typeof input === 'number'){
    return "I'm a number!";
}
}
console.log(whatAmI("abc"));



// Is it truthy
function isItTruthy(input) {
    if(input) {
        return "It's truthy!"
    }
        return "It's falsey!"
}
console.log(isItTruthy("lala"))
