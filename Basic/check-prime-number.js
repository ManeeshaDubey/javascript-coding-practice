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
  if (n <= 1) {
    return false;
  }

  // 2 is Even prime number
  if (n == 2) {
    return true;
  }
  //All other even numbers are not prime
  if (n % 2 == 0) {
    return false;
  }

  /*
you only need to check for divisors up to the square root of n.
Why? Because factors come in pairs.
For example, the factors of 36 are:
1 * 36
2 * 18
3 * 12
4 * 9
6 * 6 (The square root is 6)
...after this, the pairs just flip: 9 * 4, 12 * 3, etc.

If a number n has a factor a that is bigger than Math.sqrt(n), it must also have a factor b that is smaller than Math.sqrt(n).
   */

  for (let i = 3; i <= Math.sqrt(n); i += 1) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(prime(54));
