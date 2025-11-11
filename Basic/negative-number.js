//Write a function that returns the number of negative numbers in an array

let arr = [1, 2, 3, 9, -4, -7, 8, 3, 5, 6];

function negativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count += 1;
    }
  }
  return count;
}

console.log(negativeNumbers(arr));
