const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#faltten", () => {

  it("return array into a single-level array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6], 7, [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  })

})