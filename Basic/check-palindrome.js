//A palindrome is a word, number, phrase, or any other sequence of characters that reads the same backward as it does forward.
//example - madam, racecar, 1881, 2002, "Step on no pets"

//function to check if a string is a palindrome

function palindrome(str) {
  var temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  if (temp == str) {
    console.log(`Given string is palindrome ` + "-" + ` ${str}`);
  } else {
    console.log(`Given string is not a palindrome` + "-" + ` ${str}`);
  }
}

palindrome("I love dogs");
