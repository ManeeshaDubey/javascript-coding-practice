//function to reverse an array

let arr = [1, 2, 3, 4, 5];

function reverseArray(array) {
  let temp = [];
  for (let i = array.length - 1; i >= 0; i--) {
    temp.push(array[i]);
  }
  return temp;
}

console.log(reverseArray(arr));

//function to reverse a string

function reverseString(str) {
  let tempString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempString += str[i];
  }
  return tempString;
}

console.log(reverseString("Maneesha Dubey"));
