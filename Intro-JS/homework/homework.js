//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "Hello";

//create a number variable, it can be any number
const newNum = 30;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
 
  //simply return the string provided: str
   const str = 'I am worldclass';
  return str;
}
  returnString('I am worldclass');

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const sum = 5 + 5;
  return sum;
}
add(5,5); // 10

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const difference = -1 - 5;
  return difference;
}
subtract(-1, 5); // -6


function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const product = 10 * -5;
  return product;
}
multiply(10, -5); // -50

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide = 10 / 5;
  return divide;
}
divide(10, 5); // 2

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (15 == 15) {
    return true;
  }
  return false;
}
areEqual(15, 15); // true

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if ('hi' == 'there') {
    return true;
  }
  return false;
}
areSameLength('hi', 'there'); // false

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if (100 < 90) {
    return true;
  }
  return false;
}
lessThanNinety(100, 90); // false
function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (60 > 50){
    return true;
  }
  return false;
}
greaterThanFifty(60, 50); // true
function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  const modulo = 11 % 2;
  return modulo;
}
getRemainder(11, 2); // 1

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (6 "isEven") {
    return true;
  }
  return false;
}
isEven(6); // true

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (0 "isOdd") {
    return true;
  }
  return false;
}
isOdd(0); // false

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  const square = '7^2';
  return square;
}
square(7); // 49

function cube(num) {
  // cube num and return the new value
  // code here
  const cube = '3^3';
  return cube;
}
cube(3); // 27

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  Math.pow(2,3) = 27;
}

function roundNumber(num) {
  // round num and return it
  // code here
  Math.round(1.5);
  return round;

}
roundNumber(1.5); // 2

function roundUp(num) {
  // round num up and return it
  // code here
   Math.round(0.1);
  return round;

}
roundUp(0.1); // 1

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const str = 'hello world!';
  return str;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Paritie', 'Dev Bootcamp' -> 'Paritie Dev Bootcamp'
  // code here
  const names = 'Paritie Dev Bootcamp';
  return names;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const name = 'Hello + ' {Ben}!;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  const a = l * ;
  return a;
}
getRectangleArea(2, 2); // 4

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  const a = 1/2bh;
  return a;
}
getTriangleArea(2, 2); // 2

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
