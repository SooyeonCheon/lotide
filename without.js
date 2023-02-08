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


const without = function(source, itemsToRemove) {
  let result = [];
  for (let word of source) {
    if (!itemsToRemove.includes(word)) {
      result.push(word);
    }
  }
  console.log(result);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse", "hello"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]