/*Task 2:
Two Oldest Ages
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument
and return the two highest numbers within the array.
The returned value should be an array in the format [second oldest age, oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items.
*/
/*
function twoOldestAges(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be array");
    }

    const firstOldest = Math.max(...arr);
    arr.splice(arr.indexOf(firstOldest), 1);
    const secondOldest = Math.max(...arr);
    return [secondOldest, firstOldest];
  } catch (e) {
    return `${e.name}: ${e.message}`;
  }
}
*/

function twoOldestAges(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be array");
    }

    return arr.reduce(
      (acc, el) => {
        return el > acc[1] ? [acc[1], el] : el > acc[0] ? [el, acc[1]] : acc;
      },[0, 0]);
  } catch (err) {
    return `${err.name}: ${err.message}`;
  }
}

