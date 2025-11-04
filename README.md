# javascript-coding-practice

The Set Data Structure
A Set is a built-in JavaScript object that lets you store a collection of unique values of any type.

The most important rule of a Set is: it automatically ignores duplicates.

// Create a new Set
let mySet = new Set();

// Add some values
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // <-- This one is ignored!

console.log(mySet);
// Output: Set(2) { 'apple', 'banana' }

// You can also create a Set from an array to remove duplicates
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);
// Output: Set(5) { 1, 2, 3, 4, 5 }