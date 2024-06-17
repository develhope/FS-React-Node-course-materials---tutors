// Exercise: Array Manipulation

// Step 1: Define an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Use a for loop to iterate over the array and print each number
console.log('Step 2: Using for loop');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Step 3: Use forEach to iterate over the array and print each number
console.log('Step 3: Using forEach');
numbers.forEach(number => console.log(number));

// Step 4: Use filter to create a new array with only even numbers
console.log('Step 4: Using filter');
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Step 5: Use push to add a number to the end of the array
console.log('Step 5: Using push');
numbers.push(11);
console.log(numbers);

// Step 6: Use pop to remove the last number from the array
console.log('Step 6: Using pop');
numbers.pop();
console.log(numbers);

// Step 7: Use unshift to add a number to the beginning of the array
console.log('Step 7: Using unshift');
numbers.unshift(0);
console.log(numbers);

// Step 8: Use shift to remove the first number from the array
console.log('Step 8: Using shift');
numbers.shift();
console.log(numbers);

// Step 9: Use join to create a string from the array elements
console.log('Step 9: Using join');
let numberString = numbers.join(', ');
console.log(numberString);

// Step 10: Create a function expression to check if a number is greater than 5
const isGreaterThanFive = function(number) {
    return number > 5;
};

// Step 11: Use filter with the function expression to create a new array
console.log('Step 11: Using filter with function expression');
let numbersGreaterThanFive = numbers.filter(isGreaterThanFive);
console.log(numbersGreaterThanFive);

// Step 12: Create a callback function to print elements
function printElement(element) {
    console.log(element);
}

// Step 13: Use forEach with the callback function
console.log('Step 13: Using forEach with callback function');
numbers.forEach(printElement);

// Step 14: Use an arrow function inside a forEach to print "even" or "odd" based on the number
console.log('Step 14: Using arrow function with forEach');
numbers.forEach(number => {
    let type = (number % 2 === 0) ? 'even' : 'odd';
    console.log(`${number} is ${type}`);
});
