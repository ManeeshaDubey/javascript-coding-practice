let arr = [2, 7, 9, -2, -8, -90, 62];

function smallestNumber(arr) {
  let minNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}

console.log(smallestNumber(arr));
