// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
if (n == 0) {
  return 1;
}
 return  n * nFactorial(n - 1);
}


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let a = 1, b = 0, temp;
 while (n >= 0){
   temp = a;
   a = a + b;
   b = temp;
   n--;
 }

 return b;

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
