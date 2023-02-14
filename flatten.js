const flatten = function(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(item);
    } else {
      result.push(item);
    }
  }
  return result;
};


module.exports = flatten;