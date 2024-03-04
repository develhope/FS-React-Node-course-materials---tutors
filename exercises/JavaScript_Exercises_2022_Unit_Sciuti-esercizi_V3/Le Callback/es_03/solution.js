function filterArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}
function isEven(num) {
  return num % 2 === 0;
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]