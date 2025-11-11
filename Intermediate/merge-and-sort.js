// Merge two arrays and sort them

let arr1 = [1, 6, 9, 4, 7, 10];
let arr2 = [5, 8, 3, 2, 14, 7, 0];

// 1. Merge the arrays
let mergeAndSortArray = [...arr1, ...arr2];
// 2. Sort using a compare function for numbers
console.log(mergeAndSortArray.sort((a, b) => b - a));
