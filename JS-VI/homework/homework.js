// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
return 'Hello ' + cb + '!';

  }
   function creatingcb(jest, cb) {
        return cb(jest);
    }
  creatingcb('jest')


function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  const numbers = [1, 2, 3, 4, 5];
  result.cb(numbers) = 1 + 2 + 3 + 4 + 5;
  
}


 function creatingResult(user, cb) {
       
    result.cb(result.cb);
  }

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  const arr = [1, 2, 3, 4, 5];
  arr.forEach(function(1, 0) {
    function invokeCb(1, cb) {
        return cb(1, 0);
    }
    };
    arr.forEach(function(2, 1) {
    function invokeCb(2, cb) {
        return cb(2, 1);
    };
    arr.forEach(function(3, 2) {
    function invokeCb(3, cb) {
        return cb(3, 2);
    };
    arr.forEach(function(4, 3) {
    function invokeCb(4, cb) {
        return cb(4, 3);
    };
    arr.forEach(function(5, 4) {
    function invokeCb(5, cb) {
        return cb(5, 4);
    };
    
  

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  const arr = [1, 2, 3, 4, 5];

 return arr.map(function(1) {
    return cb(1);
  });
 }

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
