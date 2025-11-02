//Generate fibonacci sequence upto n terms

/*
The Fibonacci series (or Fibonacci sequence) is a special sequence of numbers where each new number is found by adding up the two numbers immediately before it.
example:
1. start with 0,1
2. Add last two numbers (0+1) to get the next number: 1
 sequence is now: 0,1,1
3. Add last two numbers (1+1) to get the next number: 2
 sequence is now: 0,1,1,2
 .. so on
*/

//Done by me

function fibonacciSeries(n) {
  let temp = 0,
    a = 0,
    b = 1;
  for (let i = 1; i <= n; i++) {
    console.log(temp);
    let temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

console.log(fibonacciSeries(0));

//More optimal approach to return in Strings

function fibonacciSeriesOptimal(n) {
  if (n == 0) return "";
  if (n == 1) return "0";

  let a = 0,
    b = 1;
  resultString = "0, 1";
  for (let i = 2; i < n; i++) {
    temp = a + b;
    resultString += ", " + temp;
    a = b;
    b = temp;
  }
  return resultString;
}

console.log(fibonacciSeriesOptimal(4));

//More optimal approach to return in arrays

function getFibonacciSeries(n) {
  // Handle edge cases for 0 or 1
  if (n <= 0) return "";
  if (n === 1) return "0";

  let series = [0, 1]; // Start with the first two numbers
  let a = 0;
  let b = 1;

  // We already have 2 numbers, so loop n-2 times
  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    series.push(temp); // Add the new number to our array
  }

  // Use .join() to turn the array into a comma-separated string
  return series.join(", ");
}

console.log(getFibonacciSeries(7)); // Prints: "0, 1, 1, 2, 3, 5, 8"
console.log(getFibonacciSeries(4)); // Prints: "0, 1, 1, 2"
