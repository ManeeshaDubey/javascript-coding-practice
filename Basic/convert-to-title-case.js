/*
Convert String to Title Case

Title case is a way of writing in which the first letter of most words is capitalized, similar to how titles of books, articles, or movies are written.

✅ Example:
Sentence case: how to learn javascript quickly
Title case: How to Learn JavaScript Quickly

🧩 Rules (common convention):
Capitalize the first and last words.
Capitalize all major words — nouns, verbs, adjectives, adverbs, and pronouns.
Do not capitalize short articles, prepositions, or conjunctions (like a, an, the, and, but, or, for, nor, on, in, at, to, with), unless they are the first or last word.

📘 Examples:
The Lord of the Rings
A Brief History of Time
Learning React: A Beginner’s Guide
*/

function toTitleCase(str) {
  let words = str.split(" ");
  let capitalizedWords = words.map((word) => {
    //for empty strings
    if (word.length == 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

console.log(toTitleCase("A Brief History of Time"));

// Advanced TitleCase approach

function toTitleCaseAdvanced(str) {
  // 1. Create our list of minor words.
  // Using a Set is super-fast for lookups!
  let minorWords = new Set([
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "on",
    "in",
    "at",
    "to",
    "with",
    "of",
  ]);

  const capitalize = (word) => {
    if (word.length == 0) {
      return "";
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  let words = str.split(" ");

  let titleCased = words.map((word, index) => {
    let lowerWord = word.toLowerCase(); // For checking against our list

    // 3. The Rules!

    // Rule: Capitalize first and last words
    if (index == 0 || index == words.length - 1) {
      return capitalize(word);
    }
    // Rule: Do not capitalize minor words (unless first/last)
    if (minorWords.has(lowerWord)) {
      return lowerWord;
    }
    // Rule: Capitalize all other major words
    return capitalize(word);
  });
  return titleCased.join(" ");
}

console.log(toTitleCaseAdvanced("the lord of the riNgs"));
