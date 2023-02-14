
// const findKey = function(obj, callback) {
//   for(let name in obj) {
//     if (callback(obj[name])) {
//       console.log(name);
//       return name;
//     } 
//   }
// };

const findKey = function(obj, callback) {

  const keys = Object.keys(obj);

  for (const key of keys) {
    const item = obj[key];

    const result = callback(item);
    if(result) {
      return key;
    }
  }
};


module.exports = findKey;