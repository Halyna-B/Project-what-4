function chessBoard(length, width, symb) {}

chessBoard();

mocha.setup("bdd");
const assert = chai.assert;

//Tests

//Correct working
describe("Verify that function chessBoard accepts correct arguments", function () {
  it("Chess Board with length - 3, width - 5, symbol - *", function () {
    assert.equal(`* * *\n * * \n* * *`, chessBoard(3, 5, "*"));
  });

  it("Chess Board with length - 7, width - 15, symbol - #", function () {
    assert.equal(
      `# # # # # # # #\n # # # # # # # \n# # # # # # # #\n # # # # # # # \n# # # # # # # #\n # # # # # # # \n# # # # # # # #`,
      chessBoard(7, 15, "#")
    );
  });

  it("Chess Board with length - 5, width - 21, symbol - $", function () {
    assert.equal(
      `$ $ $ $ $ $ $ $ $ $ $\n $ $ $ $ $ $ $ $ $ $ \n$ $ $ $ $ $ $ $ $ $ $\n $ $ $ $ $ $ $ $ $ $ \n$ $ $ $ $ $ $ $ $ $ $`,
      chessBoard(5, 21, "$")
    );
  });

  it("Function chessBoard include symbol - '*'", function () {
    assert.include(
      chessBoard(3, 9, "*"),
      "*",
      "Function chessBoard include symbol - '*'"
    );
  });

  it("Chess Board has width - 21", function () {
    assert.lengthOf(
      chessBoard(1, 21, "*"),
      21,
      "Chess Board's width is correct"
    );
  });

  it("Chess Board has length - 3", function () {
    const reg = /[^\n]*\n[^\n]*/gi;
    const boardLength = chessBoard(5, 21, "*").match(reg).length;
    assert.equal(boardLength + 1, 5, "Chess Board's length is correct");
  });
});

//Return correct data type
describe("Verify that function chessBoard return correct data type", function () {
    it("Function chessBoard with length - 2, width - 3, symbol - '*' return type of data - string", function () {
      assert.isString(chessBoard(2, 3, "*"), "Return type of data string");
    });
  
    it("Function chessBoard with length - 9, width - 33, symbol - '$' return type of data - string", function () {
      assert.isString(chessBoard(9, 33, "$"), "Return type of data string");
    });
  });  

//Accepts incorrect arguments
describe("Verify that function chessBoard accepts incorrect arguments", function () {
  it("Chess Board with length - -6, width - 20, symbol - '*'", function () {
    assert.equal(
      chessBoard(-6, 20, "*"),
      `{status:'failed', reason:'TypeError: Incorrect value was given, length should be a positive number'}`
    );
  });

  it("Chess Board with length - 13, width - -19, symbol - '*'", function () {
    assert.equal(
      chessBoard(13, -19, "*"),
      `{status:'failed', reason:'TypeError: Incorrect value was given, width should be a positive number'}`
    );
  });

  it("Chess Board with length - 7, width - 25, symbol - 3", function () {
    assert.equal(
      chessBoard(7, 25, 3),
      `{status:'failed', reason:'TypeError: Incorrect value was given, symbol should be a string'}`
    );
  });

  it("Chess Board with length - [6], width - 15, symbol -'#", function () {
    assert.equal(
      chessBoard([6], 15, "*"),
      `{status:'failed', reason:'TypeError: Wrong arguments, length should be a number'}`
    );
  });

  it("Chess Board with length - 12, width - '*', symbol -20", function () {
    assert.equal(
      chessBoard(12, "*", 20),
      `{status:'failed', reason:'TypeError: Wrong arguments, width should be a number and symbol should be a string'}`
    );
  });
});

//Accepts incorrect number of arguments
describe("Verify that function chessBoard takes incorrect number of arguments", function () {
  it("Function chessBoard takes 0 arguments", function () {
    assert.equal(
      chessBoard(),
      `{status:'failed', reason:'TypeError: Wrong number of arguments, function should takes 3 arguments'}`
    );
  });

  it("Function chessBoard takes only 1 argument", function () {
    assert.equal(
      chessBoard(2),
      `{status:'failed', reason:'TypeError: Wrong number of arguments, function should takes 3 arguments'}`
    );
  });

  it("Function chessBoard takes 2 arguments", function () {
    assert.equal(
      chessBoard(5, "*"),
      `{status:'failed', reason:'TypeError: Wrong number of arguments, function should takes 3 arguments'}`
    );
  });

  it("Function chessBoard takes 5 arguments", function () {
    assert.equal(
      chessBoard(3, 14, "*", "&", 7),
      `{status:'failed', reason:'TypeError: Wrong number of arguments, function should takes 3 arguments'}`
    );
  });
});


//Return incorrect data type
describe("Verify that function chessBoard return incorrect data type", function () {
  it("Function chessBoard with length - 2, width - 3, symbol - 7 return incorrect type of data", function () {
    assert.equal(
      chessBoard(2, 3, 7),
      `{status:'failed', reason:'TypeError: Incorrect data type was returned, result of this function should be equal string'}`
    );
  });
});

mocha.run();
