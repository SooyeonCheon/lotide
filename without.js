const without = function(source, itemsToRemove) {
  let result = [];
  for (let word of source) {
    if (!itemsToRemove.includes(word)) {
      result.push(word);
    }
  }
  return result;
};



module.exports = without;