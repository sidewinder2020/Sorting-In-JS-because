var expect    = require("chai").expect;
var insertion = require("../app/insertion_sort");

describe("Insertion Sort Thing", function() {
  it("sorts an array", function() {

    var array1 = [10, 3, 7, 6, 2];
    var sorted = insertion.sort(array1)

    expect(sorted).to.deep.equal([2, 3, 6, 7, 10]);

    });
  });
