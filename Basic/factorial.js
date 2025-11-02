/*
A factorial is a mathematical operation applied to a non-negative integer (a whole number 0 or greater). It is the product of all positive integers less than or equal to that number.
The symbol for factorial is an exclamation mark (!).
So, for a number 3$n$, the factorial (written as 4$n!$) is:$n! = n x (n-1) x (n-2) x ... x 1
A special case is the factorial of 0, which is defined as 1.0! = 1
*/

//function to find factorial of a number

function factorial(n) {
  let temp = 1;
  for (let i = n; i >= 1; i--) {
    temp *= i;
  }
  return temp;
}

console.log(factorial(4));
