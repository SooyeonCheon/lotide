const eqArrays = require('./eqArray');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('Those two arrays are equal');
  } else {
    console.log('Those two arrays are not equal');
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,'3']);
assertArraysEqual([1,2,3], [1,2,5]);

module.exports = assertArraysEqual;