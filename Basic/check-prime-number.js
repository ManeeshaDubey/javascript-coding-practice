//Check if number is prime

/*
A prime number is a whole number greater than 1 that has only two factors (divisors): 1 and itself.
If a number has more than two factors, it's called a composite number.
Simple Example: The Number 7 
You can divide 7 by 1 ( 7 / 1 = 7 ).You can divide 7 by itself ( 7 / 7 = 1 ).
NOTE:
The number 1 is not a prime number because it only has one factor (itself).
The number 2 is the only even prime number.
*/

function prime(n) {
  if (n == 1) {
    console.log("Not a prime number because it has only 1 factor");
  }
  if (n == 2) {
    console.log("Even prime number");
  }
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      console.log("Not a prime number");
    }
  }
  return { prime: false };
}

console.log(prime(2));
