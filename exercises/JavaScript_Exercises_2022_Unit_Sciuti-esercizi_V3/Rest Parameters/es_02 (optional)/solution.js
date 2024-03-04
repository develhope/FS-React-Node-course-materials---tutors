function filterOutOdds(...numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
console.log(filterOutOdds(1, 2, 3, 4, 5, 6)); // Should output [2, 4, 6]
console.log(filterOutOdds(11, 21, 30, 42, 55)); // Should output [30, 42]