const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {

  it('returns array without items to remove', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]), ["world"])
  })

  it('returns array without items to remove', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  })

  it('returns array without items to remove', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  })

})