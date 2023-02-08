const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('Those two arrays are equal');
  } else {
    console.log('Those two arrays are not equal');
  }
};

// const flatten = function(array) {
//   let flattened = [];
//    for (let element of array) {
//     if(!Array.isArray(element)){
//       flattened.push(element);
//     } else {
//         flattened = flattened.concat(flatten(element));
//       }
//     }
//    console.log(flattened);
// }

const flatten = function(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(item);
    } else {
      result.push(item);
    }
  }
  console.log(result) ;
};

flatten([1, 2, [3, 4], 5, [6],7,[8],[9,10,11,12]]) // => [1, 2, 3, 4, 5, 6]