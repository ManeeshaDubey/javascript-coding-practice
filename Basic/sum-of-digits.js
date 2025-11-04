//Find sum of digits of number

// The String conversion method
function sumOfDigits(n) {
  let temp = n.toString();
  let sum = 0;
  for (let i = 0; i < temp.length; i++) {
    let num = Number(temp[i]);
    sum += num;
  }
  return sum;
}

console.log(sumOfDigits(1234));


// The modulo method

function sumOfDigitsMath(n) {
  let sum = 0;
  // use Math.abs() to handle negative numbers gracefully, negative becomes positive and strings are converted into number.
  let num = Math.abs(n);

  while (num > 0) {
    //Get last digit
    let lastDigit = num % 10;

    //Add it to the sum
    sum += lastDigit;

    //Remove the last digit by integer division
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigitsMath("-4567"));
