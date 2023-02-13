
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

/*
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
*/

// Recursive eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === 0) {
    return true;
  } else if (Array.isArray(arr1[0]) && Array.isArray(arr2[0])) {
    return eqArrays(arr1[0], arr2[0]) && eqArrays(arr1.slice(1), arr2.slice(1));
  } else if (arr1[0] !== arr2[0]) {
    return false;
  } else {
    return eqArrays(arr1.slice(1), arr2.slice(1));
  }
};


module.exports = eqArrays;