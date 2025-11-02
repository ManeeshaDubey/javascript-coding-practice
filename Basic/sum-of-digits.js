//Find sum of digits of number

function sumOfDigits(n) {
  temp = 0;
  for (let i = 0; i <= n.length; i++) {
    temp += i;
  }
  return temp;
}

console.log(sumOfDigits(1248));

console.log(Math.floor(Math.log10(9)) + 1);
