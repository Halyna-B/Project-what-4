function attachEnvelope(env1, env2) {}

attachEnvelope();

mocha.setup("bdd");



//Tests

//Correct working
describe("Verify that function attachEnvelope is working correct", function () {
  it("Function attachEnvelope with env1{a:521.7, b:179.4}, env2{c:521.7, d:179.4} return 0", function () {
    assert.equal(
      attachEnvelope({ a: 521.7, b: 179.4 }, { c: 521.7, d: 179.4 }),
      0
    );
  });

  it("Function attachEnvelope with env1{a:31.5, b:100.4}, env2{c:11.5, d:48.6} return 1", function () {
    assert.equal(
      attachEnvelope({ a: 31.5, b: 100.4 }, { c: 11.5, d: 48.6 }),
      1
    );
  });

  it("Function attachEnvelope with env1{a:331.7, b:241.4}, env2{c:950.5, d:408.6} return 2", function () {
    assert.equal(
      attachEnvelope({ a: 331.7, b: 241.4 }, { c: 950.5, d: 408.6 }),
      2
    );
  });

  it("Function attachEnvelope with env1{a:57.3, b:31.1}, env2{c:130.5, d:62.5} return 2", function () {
    assert.equal(
      attachEnvelope({ a: 57.3, b: 31.1 }, { c: 130.5, d: 62.5 }),
      2
    );
  });

  it("Function attachEnvelope with env1{a:35.4, b:179.6}, env2{c:71.3, d:179.5} return 0", function () {
    assert.equal(
      attachEnvelope({ a: 35.4, b: 179.6 }, { c: 71.3, d: 179.5 }),
      0
    );
  });
});

//Return correct data type
describe("Verify that function attachEnvelope return correct data type", function () {
  it("Function attachEnvelope with env1{a:123, b:59}, env2{c:75, d:37} return type of data - number", function () {
    assert.isNumber(
      attachEnvelope({ a: 123, b: 59 }, { c: 75, d: 37 }),
      "Return type of data number"
    );
  });

  it("Function attachEnvelope with env1{a:343.9, b:387.1}, env2{c:2864.26, d:6831.2} return type of data - number", function () {
    assert.isNumber(
      attachEnvelope({ a: 343.9, b: 387.1 }, { c: 2864.26, d: 6831.2 }),
      "Return type of data number"
    );
  });

  it("Function attachEnvelope with env1{a:152.7, b:61.9}, env2{c:152.7, d:61.9} return type of data - number", function () {
    assert.isNumber(
      attachEnvelope({ a: 152.7, b: 61.9 }, { c: 152.7, d: 61.9 }),
      "Return type of data number"
    );
  });
});

//Incorrect arguments
describe("Verify that function attachEnvelope accepts incorrect arguments", function () {
  it("Function attachEnvelope accepts object with argument 0 ", function () {
    assert.equal(
      attachEnvelope({ a: 0, b: 389.2 }, { c: 42, d: 81.2 }),
      `{status:'failed', reason:'TypeError: incorrect numbers was accept, arguments of this function should be > 0'}`
    );
  });

  it("Function attachEnvelope accepts object with arguments <= 0 ", function () {
    assert.equal(
      attachEnvelope({ a: -31.95, b: 389.2 }, { c: -42, d: 81.2 }),
      `{status:'failed', reason:'TypeError: incorrect numbers was accept, arguments of objects should be > 0'}`
    );
  });

  it("Function attachEnvelope accepts object with arguments strings ", function () {
    assert.equal(
      attachEnvelope({ a: "1795.87", b: 8423.8 }, { c: "c", d: 3961.9 }),
      `{status:'failed', reason:'TypeError: incorrect data type was accept, arguments of objects should be equal number'}`
    );
  });

  it("Function attachEnvelope accepts object with arguments > 1000000 ", function () {
    assert.equal(
      attachEnvelope({ a: 14832.39, b: 94217.96 }, { c: 2368916.92, d: 49282.92 }),
      `{status:'failed', reason:'TypeError: incorrect numbers was accept, arguments of objects should be < 1000000'}`
    );
  });

  it("Function attachEnvelope accepts more then two objects ", function () {
    assert.equal(
      attachEnvelope(
        { a: 142.39, b: 917.96 },
        { c: 2366.92, d: 492.92 },
        { c: 36891.2, d: 2.92 }
      ),
      `{status:'failed', reason:'TypeError: incorrect number of objects was accept, function attachEnvelope should accepts two objects'}`
    );
  });

  it("Function attachEnvelope accepts 1 objects ", function () {
    assert.equal(
      attachEnvelope({ a: 142.39, b: 917.96 }),
      `{status:'failed', reason:'TypeError: incorrect number of objects was accept, function attachEnvelope should accepts two objects'}`
    );
  });

  it("Function attachEnvelope doesn't accepts objects ", function () {
    assert.equal(
      attachEnvelope(),
      `{status:'failed', reason:'TypeError: incorrect arguments was accept, function attachEnvelope should accepts two objects'}`
    );
  });
});


