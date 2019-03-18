// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
 const x = 10;
 const y = 5;
  if (x > y) {
    console.log(10);
  } else {
    console.log(5);
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  const language = German;
  const language = Mandarin;
  const language = Spanish;

  if (German || Mandarin || Spanish) {
    console.log('Hola');
  } else {
    console.log('Hello');
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  const num = 10;
  const num = 5;

  if ('num' === 10) {
    console.log('true');
  } else if ('num' === 5) {
    console.log('true');
  } else {
    console.log('false');
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  const num = 35.5;
  if ('num' < 50) {
    console.log('true');
  } else {
    console.log('false');
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  const num = 0.5;
  if (integer) {
    console.log('true');
  } else {
    console.log('false');
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  const num = 10;
  if (10 / 3) {
    console.log('fizz');
  } else if (10 / 5) {
    console.log('buzz');
  } else if (10 / 3 && 10 / 5) {
    console.log('fizzbuzz');
  } else {
    console.log('num');
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  const num = 100;
  if (prime) {
    console.log('true');
  } else {
    console.log('false');
  }
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
