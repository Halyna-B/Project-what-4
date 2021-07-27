/*Task 1:
Sum of Minimums!
Given a 2D array of size m * n. Your task is to write a function to find the sum of minimum value in each row.
Note: You will be always given non-empty array containing Positive values.
*/

function sumMin(arr) {
    const minimalNumbers = arr.map(el => Math.min(...el));
    return minimalNumbers.reduce((acc, el) => acc + el);
}








console.log(sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]))   //24

console.log(sumMin([[11,2],[323,2,55]]))   //4

console.log(sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]]))   //15

