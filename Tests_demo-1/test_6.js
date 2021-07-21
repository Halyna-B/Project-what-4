function numberSequence(numb) {}

numberSequence();

mocha.setup("bdd");



//Correct working
describe("Verify that function numberSequence is working correct", function () {
  it("Function numberSequence with n=5 m=50 return '8,9,10,11,12'", function () {
    assert.equal(numberSequence(5, 50), "8,9,10,11,12");
  });

  it("Function numberSequence with n=9 m=143 return '12,13,14,15,16,17,18,19,20'", function () {
    assert.equal(numberSequence(9, 143), "12,13,14,15,16,17,18,19,20");
  });

  it("Function numberSequence with n=2 m=7077 return '85,86'", function () {
    assert.equal(numberSequence(2, 7077), "85,86");
  });

  it("Function numberSequence with n=1 m=12666 return '113'", function () {
    assert.equal(numberSequence(1, 12666), "113");
  });
});

// Return correct data
describe("Verify that function numberSequence return correct data type string ", function () {
  it("Function numberSequence with n=7 m=149 return string '13,14,15,16,17,18,19'", function () {
    assert.isString(
      numberSequence(7, 149),
      "return correct type of data - '13,14,15,16,17,18,19' is a string"
    );
  });

  it("Function numberSequence with n=1 m=423 return string '21'", function () {
    assert.isNotNumber(
      numberSequence(1, 423),
      "return correct type of data - '21' is a string"
    );
  });

  it("Function numberSequence with n=7 m=33 return string '6,7,8,9,10,11,12' with length 16", function () {
    assert.lengthOf(
      numberSequence(7, 149),
      16,
      "string '6,7,8,9,10,11,12' has length 16"
    );
  });
});

//Accepts incorrect parameters
describe("Verify that function numberSequence accepts incorrect parameters", function () {
  it("Function numberSequence with n = 0 m = 23 return an empty string ", function () {
    assert.equal(
      numberSequence(0, 23),
      `{status:'failed', reason:TypeError: Wrong arguments was given, n should be > 0}`
    );
  });

  it("Function numberSequence with n = -3 m = 217 return Error ", function () {
    assert.equal(
      numberSequence(-3, 217),
      `{status:'failed', reason:TypeError: Wrong arguments was given, n should be a positive number}`
    );
  });

  it("Function numberSequence with n = 5.9 m = 331 return Error ", function () {
    assert.equal(
      numberSequence(5.9, 331),
      `{status:'failed', reason:TypeError: Wrong arguments was given, n should be an integer number}`
    );
  });

  it("Function numberSequence with n = 3 m = [25] return Error ", function () {
    assert.equal(
      numberSequence(3, [25]),
      `{status:'failed', reason:TypeError: Wrong arguments was given, m should be a number}`
    );
  });

  it("Function numberSequence with n = 7 m = '46' return Error ", function () {
    assert.equal(
      numberSequence(7, '46'),
      `{status:'failed', reason:TypeError: Wrong arguments was given, m should be a number}`
    );
  });

  it("Function numberSequence with [n = 7 m = 33] return Error ", function () {
    assert.equal(
      numberSequence([7, 46]),
      `{status:'failed', reason:TypeError: Wrong arguments was given, function should accepts two argumrnts n and m}`
    );
  });
});


