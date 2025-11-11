//Find the second largest number in an array

let numbers = [2, 5, 39];

function secondLargestNumber(arr) {
  let firstLargest = 0,
    secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    currentNumber = arr[i];
    if (firstLargest < currentNumber) {
      secondLargest = firstLargest;
      firstLargest = currentNumber;
    } else if (currentNumber > secondLargest && firstLargest != currentNumber) {
      secondLargest = currentNumber;
    }
  }
  return secondLargest;
}

console.log(secondLargestNumber(numbers));
