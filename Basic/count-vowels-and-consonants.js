//Count vowels and consonants in string

/*
Computers see letters as numbers in a specific order (this is called ASCII). 'a' is 97, 'b' is 98, all the way to 'z' which is 122.
The code char >= 'a' && char <= 'z' simply asks: "Is this character's number value between 97 and 122?" If it is, it must be a lowercase letter.
In your function, this logic is used to find consonants:
First: The if statement checks if the character is a vowel.
Then: If it's not a vowel, the else if checks if it's any lowercase letter.
Result: If a character is a lowercase letter but not a vowel, it must be a consonant. This also cleverly skips spaces and punctuation.
*/

function countVowelsAndConsonants(str) {
  let vowels = "aeiou";
  let vowelsCount = 0;
  let consonantsCount = 0;
  let lowerString = str.toLowerCase();

  for (let i = 0; i <= str.length - 1; i++) {
    let char = lowerString[i];
    if (vowels.includes(char)) {
      vowelsCount += 1;
    } else if (char >= "a" && char <= "z") {
      consonantsCount += 1;
    }
  }
  return { Vowels: vowelsCount, Consonants: consonantsCount };
}

console.log(countVowelsAndConsonants("Maneesha Dubey"));
