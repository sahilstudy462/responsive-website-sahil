//sum of first n natural numbers 
function sumOfN(n) {
    let sum=0;
  for (let i = 1; i <= n; i++) {
     sum += i
  }
  return sum;
}
let total = sumOfN(5);
// console.log(total)



// Multiplication table
function printMultiplicationTable(n) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(`${n} * ${i} = ${n*i}`)
    }
  return arr;
}
// console.log(printMultiplicationTable(2))




// couting vowels
function countVowels(str) {
    let vowels = new Set("aeiouAEIOU");
    let numOfVowels=0
    for (let i = 0; i < str.length; i++) {
        if (vowels.has(str[i])) {
            numOfVowels += 1
        }
    }
  return numOfVowels;
}
// console.log(countVowels("Hello World"));

