function happyTicket(context) { }

happyTicket();

mocha.setup("bdd");



//Tests

//Correct working
describe("Verify that function happyTicket is working correct", function () {
    it(`Function happyTicket with context {min: 100000, max: 455555}
    return {winner : 'simple', tickets : {simple :20067, hard : 9797}}`, function () {
      assert.equal(happyTicket({min: 100000, max: 455555}), {winner : 'simple', tickets : {simple :20067, hard : 9797}});
    });

    it(`Function happyTicket with context {min: 111111, max: 999000}
    return {winner : 'simple', tickets : {simple :50118, hard : 21079}}`, function () {
      assert.equal(happyTicket({min: 111111, max: 999000}), {winner : 'simple', tickets : {simple :50118, hard : 21079}});
    });

    it(`Function happyTicket with context {min: 723564, max: 950326}
    return {winner : 'simple', tickets : {simple :12494, hard : 4647}}`, function () {
      assert.equal(happyTicket({min: 723564, max: 950326}), {winner : 'simple', tickets : {simple :12494, hard : 4647}});
    });
})

// Return correct data
describe("Verify that function happyTicket return correct data", function () {
    it("Function happyTicket with context {min: 123456, max: 574256} return object", function () {
      assert.isObject(happyTicket({min: 123456, max: 574256}), "Function return correct type of data - object");
    });

    it("Function happyTicket  return object with property 'winner'", function () {
        assert.property(happyTicket({min: 354788, max: 913256}),
        'winner',
      );
    });

    it("Function happyTicket  return object with property 'tickets'", function () {
        assert.property(happyTicket({min: 354788, max: 913256}),
        'tickets',
      );
    });

    it("Function happyTicket return object which has a property 'tickets.hard' with a value 21355 ", function () {
        assert.nestedPropertyVal(happyTicket({min: 100000, max: 999999}),
        'tickets.hard',
         21355
      );
    });
})

//Accepts incorrect parameters
describe("Verify that function happyTicket accepts incorrect parameters", function () {
    it("Function happyTicket with context {min: 0, max: 766846} return Error ", function () {
        assert.equal(happyTicket({min: 0, max: 766846}),
        `{status:'failed', reason:TypeError: Wrong arguments was given, function should accepts a context object with min and max fields > 0}`
      );
    });

    it("Function happyTicket with array [min: 1, max: 766846] return Error ", function () {
        assert.equal(happyTicket([1, 766846]),
        `{status:'failed', reason:TypeError: Wrong arguments was given, function should accepts a context object with min and max fields}`
      );
    });

    it("Function happyTicket with context {min: 467, max: 272.842} return Error ", function () {
        assert.equal(happyTicket({min: 467, max: 272.842}),
        `{status:'failed', reason:TypeError: Wrong arguments was given, function should accepts a context object with integer numbers}`
      );
    });

    it("Function happyTicket with empty parameter return Error ", function () {
        assert.equal(happyTicket(),
        `{status:'failed', reason:TypeError: Wrong arguments was given, Wrong arguments was given, function should accepts a context object with min and max fields}`
      );
    });

    it("Function happyTicket with context {min: '223546', max: 453790} return Error ", function () {
        assert.equal(happyTicket({min: '223546', max: 453790}),
        `{status:'failed', reason:TypeError: Wrong arguments was given, Wrong arguments was given, min and max fields should be a number}`
      );
    });
})

