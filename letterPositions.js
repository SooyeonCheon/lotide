const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Those two arrays are equal");
  } else {
    console.log("Those two arrays are not equal");
  }
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (sentence[i] !== " ") {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
