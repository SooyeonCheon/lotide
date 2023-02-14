// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // const results = {};

  // for (const key of allItems) {
  //   if (!itemsToCount) {
  //     continue;
  //   }

  //   if (!results[key]) {
  //     results[key] = 0;
  //   } 
  //     results[key]++;
    
  // }
  // return results;
  
  const results = {};

  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
  
};



// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;