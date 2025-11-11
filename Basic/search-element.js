//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [5, 7, 9, 0, 3, 8, 1];

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement(arr, 0));
