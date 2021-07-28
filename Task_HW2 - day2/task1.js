/*Task 1:
Sum of Minimums!
Given a 2D array of size m * n. Your task is to write a function to find the sum of minimum value in each row.
Note: You will be always given non-empty array containing Positive values.
*/

function sumMin(arr) {
  try {
    if (!Array.isArray(arr) || !arr.some((subarr) => Array.isArray(subarr))) {
      throw new TypeError("Input must be a 2D array of size m * n ");
    }

    if (arr.flat(Infinity).some((num) => typeof num !== "number")) {
      throw new TypeError("Input array should contain numbers");
    }

    if (arr.flat(Infinity).some((num) => num < 0)) {
      throw new TypeError("Input array should contain only positive numbers");
    }

    const minimalNumbers = arr.map((el) => Math.min(...el));
    return minimalNumbers.reduce((acc, el) => acc + el);
  } catch (e) {
    return `${e.name}: ${e.message}`;
  }
}


