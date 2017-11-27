var expect    = require("chai").expect;
var bubble = require("../app/bubble_sort");

describe("Bubble Sort Thing", function() {
  it("sorts an array", function() {

    var array1 = [10, 3, 7, 6, 2];
    var sorted = bubble.sort(array1)

    expect(sorted).to.deep.equal([2, 3, 6, 7, 10]);

    });
  });
