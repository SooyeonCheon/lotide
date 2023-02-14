const titleCase = function(text) {
  text = text.toLowerCase();
  if (text.length === 0) {
    return "";
  }
  if (text.length === 1) {
    return text.toUpperCase();
  }
  let words = text.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  text = words.join(" ");
  return text;
}

module.exports = titleCase;