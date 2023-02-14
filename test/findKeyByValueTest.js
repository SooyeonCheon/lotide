const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe('#findKeyByValue', () => {

  it('returns key which value matches a given value', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

  it('returns key which value matches a given value', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s show"), undefined);
  })


})