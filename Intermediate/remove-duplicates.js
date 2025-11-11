//Remove duplicates from an array
let arr = [2, 6, 7, 9, 32, 9, 5, 7];

//SOLUTION 1

let removeDuplicates = new Set(arr);
//The spread operator (...) is a powerful JavaScript syntax that "unpacks" the elements from an array or the properties from an object.
let uniqueArray = [...removeDuplicates];
console.log(uniqueArray);

//SOLUTION 2

function removeDuplicates(a) {
  let uniqueArray = [];
  for (let i = 0; i < a.length; i++) {
    //It only pushes an item into uniqueArray if that item isn't includes() in it already.
    if (!uniqueArray.includes(a[i])) {
      uniqueArray.push(a[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates(arr));

//SOLUTION 3

// The filter callback gets both the 'item' and its 'index'
let removeDuplicates = arr.filter((item, index) => {
  // Only keep the item if its first found index MATCHES its current index
  return arr.indexOf(item) === index;
});
console.log(removeDuplicates);
