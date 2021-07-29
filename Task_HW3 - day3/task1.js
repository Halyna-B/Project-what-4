/*
Task 1: Your order, please

Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.
   Note: 
- Numbers can be from 1 to 9. So 1 will be the first word (not 0).
- If the input string is empty, return an empty string.
- The words in the input String will only contain valid consecutive numbers.
*/

function sortString(str) {
  try {
    const numReg = /\d/;

    if (!typeof str === "string") {
      throw new TypeError("Input argument should be a string");
    }

    if (str === "") {
      return "";
    }

    if (!numReg.test(str)) {
      throw new TypeError("Input string should contains a single number");
    }

    const arr = str.split(" ");
    const result = arr.reduce((acc, el) => {
      acc[el.match(numReg) - 1] = el;
      return acc }, []).join();
    return result;
  } catch (err) {
    return `${err.name}: ${err.message}`;
  }
}

/*
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

""  -->  ""
*/
