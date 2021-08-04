function findPalindrome(numb) {}

findPalindrome();

mocha.setup("bdd");



//Tests

//Correct working
describe("Verify that function Palindrome is working correct", function () {
  it("Function Palindrome with parameter 1234437 return 3443", function () {
    assert.equal(findPalindrome(1234437), 3443);
  });

  it("Function Palindrome with parameter 9010109713179 return 9010109", function () {
    assert.equal(findPalindrome(9010109713179), 9010109);
  });

  it("Function Palindrome with parameter 83737919 return 373", function () {
    assert.equal(findPalindrome(83737919), 373);
  });

  it("Function Palindrome with parameter 09540130156565721 return 56565", function () {
    assert.equal(findPalindrome(09540130156565721), 56565);
  });

  it("Function Palindrome with parameter 1246438577502 return 5775", function () {
    assert.equal(findPalindrome(1246438577502), 5775);
  });

  it("Function Palindrome with parameter 10 return 0", function () {
    assert.equal(findPalindromee(10), 0);
  });

  it("Function Palindrome with parameter 4659104573 return 0", function () {
    assert.equal(findPalindrome(4659104573), 0);
  });
});

// Return correct data type
describe("Verify that function Palindrome return correct data ", function () {
  it("Function Palindrome with parameter 199 return type of data number", function () {
    assert.isNumber(
      findPalindrome(199),
      "return correct type of data - 99 is a number"
    );
  });

  it("Function Palindrome with parameter 7192 return type of data number ", function () {
    assert.isNumber(
      findPalindrome(7192),
      "return correct type of data - 0 is a number"
    );
  });
});

//Accepts incorrect parameter
describe("Verify that function Palindrome accepts incorrect data ", function () {
  it("Function Palindrome accepts incorrect parameter - string '53235107' ", function () {
    assert.equal(
      findPalindrome("53235107"),
      `{status:'failed', reason:TypeError: function's parameter must be a number, '53235107' is not a number}`
    );
  });

  it("Function Palindrome accepts incorrect parameter - array [61675555555] ", function () {
    assert.equal(
      findPalindrome([61675555555]),
      `{status:'failed', reason:TypeError: function's parameter must be a number, [61675555555] is not a number}`
    );
  });

  it("Function Palindrome accepts incorrect amount of parameters ", function () {
    assert.equal(
      findPalindrome(),
      `{status:'failed', reason:TypeError: missing 1 required argument, function should accepts a number}`
    );
  });

  it("Function Palindrome accepts incorrect amount of parameters - two numbers ", function () {
    assert.equal(
      findPalindrome(131, 333333),
      `{status:'failed', reason:TypeError: function should requires only one parameter }`
    );
  });

  it("Function Palindrome accepts incorrect parameter - float 3.131 ", function () {
    assert.equal(
      findPalindrome(3.131),
      `{status:'failed', reason:TypeError: function's parameter must be an integer number, 3.131 is not an integer number}`
    );
  });

  it("Function Palindrome accepts incorrect parameter - negative number -7337351 ", function () {
    assert.equal(
      findPalindrome(-7337351),
      `{status:'failed', reason:TypeError: function's parameter must be a positive number, -7337351 is a negative number}`
    );
  });
});

