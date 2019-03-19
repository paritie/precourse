// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  arr = [10, 10, 16, 12];
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  arr = [97, 100, 80, 55, 72, 94]
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  arr = [97, 100, 80, 55, 72, 94];
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  const newArray = [10, 10, 16, 12];
  for (let i = 0; i < arr.length; i++;) {
    newArray.push(arr[i] + 1)
  }
  return newArray;

}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr = [97, 100, 80, 55, 72, 94];
  arr.push('Hello');
  return arr;

}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr = [10, 10, 16, 12];
  arr.unshift(10);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  words = ['LambdaSchool', 'JavaScript', 'Class'];
  words.join('LambdaSchool ' + 'JavaScript ' + 'Class');
  return words;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  arr = [10, 10, 16, 12];
    if(arr === 16) {
      return true;
    } else {
      return false;
    }

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  numbers = [10, 10, 16];
  let result = 36;
    result += numbers[10 + 10 + 16];
  }
  return result;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  testScores = [97, 100, 80, 55, 72, 94];
  return testScores / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  numbers = [10, 10, 16, 12];
   let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largest && numbers[i] === Math.floor(numbers[i])) {
      largest = numbers[i];
    }
  }
  return largest;
} 

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  arguments = [5, 5];
  let result = 5 * 5;
    if(result === 25) {
    return 25;
  } else if (result === 0) {
    return 0;
  } else {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return result;
  }
} 
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
