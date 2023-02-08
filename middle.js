const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('Those two arrays are equal');
  } else {
    console.log('Those two arrays are not equal');
  }
};

const middle = function(array) {
  let leng = array.length;
  let middleVal = [];
  // if the array length is shorter than 2, the middle array should be empty
  if (leng <= 2) {
    console.log(middleVal);
    return;
  }
  // if the array length is even, the middle array is 2 center values of the array
  if (leng % 2 === 0) {
    middleVal.push(array[leng/2 - 1]);
    middleVal.push(array[leng/2]);
  } else {
    middleVal.push(array[Math.floor(leng/2)]);
  }
  // if the array length is odd, the middle array is center value of the array
  
  console.log(middleVal);
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]