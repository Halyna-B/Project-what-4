function areaOfTriangles(...triangles) { }

areaOfTriangles();

mocha.setup("bdd");


//Tests

//Correct working
describe("Verify that function areaOfTriangles is working correct", function () {

  it("Function areaOfTriangles return ['ABC', 'MKN', 'DFE']", function () {
    assert.equal(
      areaOfTriangles([
        { vertices: "ABC", a: 10, b: 20, c: 22.36 },
        { vertices: "DFE", d: 2.35, f: 1.79, e: 1.56 },
        { vertices: "MKN", m: 7.97, k: 3.61, n: 7 }
      ]),
      ['ABC', 'MKN', 'DFE']
    );
  });

  it("Function areaOfTriangles return ['DFE', 'ABC', 'MKN']", function () {
    assert.equal(
      areaOfTriangles([
        { vertices: "ABC", a: 12, b: 25, c: 27.9 },
        { vertices: "DFE", d: 45.89, f: 71.31, e: 100 },
        { vertices: "MKN", m: 30.79, k: 23.03, n: 30.79 }
      ]),
      ['DFE', 'ABC', 'MKN']
    );
  });

  it("Function areaOfTriangles return ['MKN', 'DFE', 'ABC']", function () {
    assert.equal(
      areaOfTriangles([
        { vertices: "ABC", a: 53.1, b: 70.85, c: 25.7 },
        { vertices: "DFE", d: 69.51, f: 37.84, e: 77.9 },
        { vertices: "MKN", m: 51.9, k: 31.72, n: 80 }
      ]),
      ['MKN', 'DFE', 'ABC']
    );
  });

});


//Return correct data 
describe("Verify that function areaOfTriangles return correct data", function () {

    it("The function's return response ['ABC', 'MKN', 'DFE'] is an array", function () {
        assert.isArray(
          areaOfTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DFE", d: 2.35, f: 1.79, e: 1.56 },
          { vertices: "MKN", m: 7.97, k: 3.61, n: 7 }
      ]), "Function areaOfTriangles return an array");
  });

    it("The function's return array ['ABC', 'MKN', 'DFE'] include string 'MKN'", function () {
        assert.include(
          areaOfTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DFE", d: 2.35, f: 1.79, e: 1.56 },
          { vertices: "MKN", m: 7.97, k: 3.61, n: 7 }
      ]), 'MKN');
  });

    it("The function's return array ['ABC', 'FEO', 'MKN', 'DFE'] has length of 4", function () {
        assert.lengthOf(
          areaOfTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DFE", d: 2.35, f: 1.79, e: 1.56 },
          { vertices: "MKN", m: 7.97, k: 3.61, n: 7 },
          { vertices: "FEO", f: 9.12, e: 23.03, o: 30.79 }
  ]), 4);
});

})

//Accepts objects are not triangles
describe("Verify that accepts objects in a function areaOfTriangles are not triangles", function () {

    it("Objects { vertices: 'ABC', a: 42.7, b: 21.85, c: 10 } in a function areaOfTriangles is not triangle ", function () {
      assert.fail(
        areaOfTriangles([
          { vertices: "ABC", a: 42.7, b: 21.85, c: 10 },
          { vertices: "DFE", d: 69.51, f: 37.84, e: 77.9 },
          { vertices: "MKN", m: 51.9, k: 31.72, n: 80 }
        ]), ['DFE', 'ABC', 'MKN'],
        `{status:'failed', reason:TypeError: argument of this function should be an array of objects with triangles, 'ABC' is not triangle}`
      );
    });
  
    it("Object { vertices: 'DFE', d: 0.7, f: 31.84, e: 22.1 } in a function areaOfTriangles is not triangle ", function () {
      assert.fail(
        areaOfTriangles([
          { vertices: "ABC", a: 12, b: 25, c: 27.9 },
          { vertices: "DFE", d: 0.7, f: 31.84, e: 22.1 },
          { vertices: "MKN", m: 4, k: 1.24, n: 3 }
        ]), ['ABC', 'DFE', 'MKN'],
        `{status:'failed', reason:TypeError: argument of this function should be an array of objects with triangles, 'DFE' is not triangle}`
      );
    });
  
  });

//Accepts incorrect objects 
describe("Verify that accepts objects in a function areaOfTriangles are not correct", function () {

    it("Objects { vertices:'MKN', m: 7.97, k: '3.61', n: 7 } has incorrect value 'k' - string ", function () {
      assert.fail(
        areaOfTriangles([
          { vertices: "ABC", a: 10, b: 20, c: 22.36 },
          { vertices: "DFE", d: 2.35, f: 1.79, e: 1.56 },
          { vertices: "MKN", m: 7.97, k: '3.61', n: 7 },
          { vertices: "FEO", f: 9.12, e: 23.03, o: 30.79 }
        ]), ['ABC', 'FEO', 'MKN', 'DFE'],
        `{status:'failed', reason:TypeError: the sides of the triangle must be numbers, 'k' should be equal a number}`
      );
    });
  
    it("Object { vertices: 'DFE', d: 2.35, f: 1.79, e: -1.56 } has incorrect value 'e' - negative number  ", function () {
      assert.fail(
        areaOfTriangles([
            { vertices: "ABC", a: 10, b: 20, c: 22.36 },
            { vertices: "DFE", d: 2.35, f: 1.79, e: -1.56 },
            { vertices: "MKN", m: 7.97, k: 3.61, n: 7 }
          ]), ['ABC', 'MKN', 'DFE'],
        `{status:'failed', reason:TypeError: the sides of the triangle must be positive numbers, 'e' should be equal a positive number}`
      );
    });  

})
