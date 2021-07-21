function Fibonacci(numb) {}

areaOfTriangles();

mocha.setup("bdd");

//Correct working
describe("Verify that function Fibonacci is working correct", function () {
  it("Function Fibonacci with context {min: 7, max: 33} return [8, 13, 21]", function () {
    assert.equal(Fibonacci({ min: 7, max: 33 }), [8, 13, 21]);
  });

  it("Function Fibonacci with context {min: 3, max: 55} return [3, 8, 13, 21, 34, 55]", function () {
    assert.equal({ min: 3, max: 55 }, [3, 8, 13, 21, 34, 55]);
  });

  it("Function Fibonacci with context {length: 5} return [1, 2, 3, 5, 8]", function () {
    assert.equal(Fibonacci({ length: 5 }), [1, 2, 3, 5, 8]);
  });

  it("Function Fibonacci with context {length: 4} return [1, 2, 3, 5]", function () {
    assert.equal(Fibonacci({ length: 4 }), [1, 2, 3, 5]);
  });
});

// Return correct data
describe("Verify that function Fibonacci return correct data type string ", function () {
  it("Function Fibonacci with context {length: 6} return array [1, 2, 3, 5, 8, 13]", function () {
    assert.isArray(
      Fibonacci({ length: 6 }),
      "return correct type of data - [1, 2, 3, 5, 8, 13] is array"
    );
  });

  it("Function Fibonacci with context {min: 14, max: 90} return array [21, 34, 55, 89]", function () {
    assert.isArray(
      Fibonacci({ min: 14, max: 90 }),
      "return correct type of data - [21, 34, 55, 89] is array"
    );
  });

  it("Function Fibonacci with context {length: 5} return array [1, 2, 3, 5, 8] with length 5", function () {
    assert.lengthOf(
      Fibonacci({ length: 5 }),
      5,
      "array [1, 2, 3, 5, 8] has length 5"
    );
  });

  it("Function Fibonacci with context {length: 9} return array [1, 2, 3, 5, 8, 13, 21, 34, 55] and not include number 89", function () {
    assert.notInclude(
      Fibonacci({ length: 9 }),
      89,
      "array [1, 2, 3, 5, 8, 13, 21, 34, 55] not include 89"
    );
  });
});

//Accepts incorrect parameters
describe("Verify that function Fibonacci accepts incorrect parameters", function () {
  it("Function Fibonacci with {min: 0, max: 0} return an empty array ", function () {
    assert.equal(
      Fibonacci({ min: 0, max: 0 }),
      `{status:'failed', reason:TypeError: Function should have a numeric range, max field should be > 0}`
    );
  });

  it("Function Fibonacci with {length: 0} return an empty array ", function () {
    assert.equal(
      Fibonacci({ length: 0 }),
      `{status:'failed', reason:TypeError: Function should have a numeric range, length should be > 0}`
    );
  });

  it("Function Fibonacci with {length: -7} return Error ", function () {
    assert.equal(
      Fibonacci({ length: -7 }),
      `{status:'failed', reason:TypeError: Wrong arguments was given, length should be a positive number}`
    );
  });

  it("Function Fibonacci with {length: '3'} return Error ", function () {
    assert.equal(
      Fibonacci({ length: "3" }),
      `{status:'failed', reason:TypeError: Wrong arguments was given, length should be a positive number}`
    );
  });

  it("Function Fibonacci with [3, 8] return Error ", function () {
    assert.equal(
      Fibonacci([3, 8]),
      `{status:'failed', reason:TypeError: Wrong arguments was given, function should accepts a context object with min and max fields, or with a length field }`
    );
  });

  it("Function Fibonacci with {min: 23, max: 9} return Error ", function () {
    assert.equal(
      Fibonacci({ min: 23, max: 9 }),
      `{status:'failed', reason:TypeError: Wrong arguments was given, max field should be greater than min field}`
    );
  });

  it("Function Fibonacci with {min: '8', max: '23'} return Error ", function () {
    assert.equal(
      Fibonacci({ min: "8", max: "23" }),
      `{status:'failed', reason:TypeError: Wrong arguments was given, min and max fields should be a number}`
    );
  });
});
