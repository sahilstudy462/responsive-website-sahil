let arr1 = [1,"a",3,"b",5];
let arr2 = [10,20,30,40,50]
let arr3 = [11,12,12,13,14,14,15]
let arr4 = [1,[2,3],4,5,[6,7,8,9,10],11,12]


// Array filtering
function filterNumbers(arr) {
  return arr.filter(item => typeof item === 'number');
}


// Array Reversal
function reverseArray(arr) {
  return arr.reverse();
}


// Find Maximum in an Array
function findMax(arr) {
  return Math.max(...arr);
}
 

// Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// Flatten a Nested Array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// console.log(filterNumbers(arr1));
// console.log(reverseArray(arr1));
// console.log(findMax(arr2));
// console.log(removeDuplicates(arr3));
// console.log(flattenArray(arr4));

