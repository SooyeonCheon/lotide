
const middle = function(array) {
  let leng = array.length;
  let middleVal = [];
  // if the array length is shorter than 2, the middle array should be empty
  if (leng <= 2) {
    return middleVal;
  }
  // if the array length is even, the middle array is 2 center values of the array
  if (leng % 2 === 0) {
    middleVal.push(array[leng/2 - 1]);
    middleVal.push(array[leng/2]);
  } else {
    middleVal.push(array[Math.floor(leng/2)]);
  }
  // if the array length is odd, the middle array is center value of the array
  
  return middleVal;
}


module.exports = middle;