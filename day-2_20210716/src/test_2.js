function attachEnvelope(env1, env2) {
    const env1 = {
        a: a,
        b: b
    }
    const env2 = {
        c: c,
        d: d
    }

}

chessBoard();

mocha.setup('bdd');
const assert = chai.assert;

//Tests

//Return correct data type
describe('Verify that function attachEnvelope return correct data type', function(){

    it("Function attachEnvelope with env1{a:123, b:59}, env2{c:75, d:37} return type of data - number", function(){ 
        assert.isNumber( attachEnvelope({a:123, b:59},{c:75, d:37}), 'Return type of data number')
    })

    
})

