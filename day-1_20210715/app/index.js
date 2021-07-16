function sum(a, b){
    return a + b;
}

function multi(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function subtraction(a, b){
    return a - b;
}

function HTest(func, result, ...args){
    const callFunc = func(...args);
    const passFaild = callFunc === result ? 'PASS' : 'FAILED';
    const str = `${passFaild}: ${func.name} (${args}) Expected: ${result}, Received: ${callFunc}`;


    const styles = {
        PASS : 'color: green',
        FAILED : 'color: red; font-weight: bold'
    }
    
    console.log('%c%s', styles[passFaild], str);
   
}


HTest(sum, 42, 23, 19);
HTest(sum, -135.7, -56.8, -78.9);
HTest(sum, NaN, null, undefined);
HTest(sum, NaN, [2, 5], [33.7, 63]);
HTest(sum, [Object], {name: 'Bobby'}, {age: 33});
HTest(sum, 58, -23.6, 81.6);
HTest(sum, 'bob', 'b', 'ob');
HTest(sum, '33Cows', 33, 'Cows');
HTest(sum, 97, [100,-200, 3], 0);
HTest(sum, 3, 2, true);

HTest(multi, 60, 10, 6);
HTest(multi, -41.290284, -6.598, 6.258);
HTest(multi, NaN, '80', 21);
HTest(multi, 0, Infinity, 0);
HTest(multi, Infinity, Infinity, Infinity);
HTest(multi, 0, null, 695);
HTest(multi, NaN, 'Hello', 42.6);
HTest(multi, 0, [23.6, 7], 0);
HTest(multi, NaN, 5);
HTest(multi, 25, 5, [5]);
HTest(multi, 0, 0, -0);

HTest(divide, 11.92, 59.6, 5);
HTest(divide, 0, Infinity, 0);
HTest(divide, 0, 0, Infinity);
HTest(divide, NaN, 6, '553');
HTest(divide, 228.49, 456.98, 2);
HTest(divide, 2, [6], [3]);
HTest(divide, 0, 59.6, 0);
HTest(divide, -39.7, -158.8, 4);
HTest(divide, NaN, {0: 1}, 5);
HTest(divide, 100, 1000, 10);

HTest(subtraction, 'Banana', 'Bananaa', 'a');
HTest(subtraction, -1916, -1325, 591);
HTest(subtraction, 317, 318, true);
HTest(subtraction, 0, Infinity, Infinity);
HTest(subtraction, -Infinity, 0, Infinity);
HTest(subtraction, NaN, 'str', 3840.82,);
HTest(subtraction, 742, 800, 58);
HTest(subtraction, NaN, 'str', 3840.82,);
HTest(subtraction, -25, 12, 37);
HTest(subtraction, -53, [5], [58]);

