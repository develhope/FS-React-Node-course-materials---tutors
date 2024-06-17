// Exercise: Student Data Manipulation

// Step 1: Define an array of student objects
let students = [
    { name: 'Alice', age: 20, grades: [85, 92, 88] },
    { name: 'Bob', age: 22, grades: [70, 80, 75] },
    { name: 'Charlie', age: 23, grades: [95, 90, 93] },
    { name: 'David', age: 21, grades: [60, 65, 70] },
    { name: 'Eve', age: 20, grades: [78, 82, 85] }
];

// Step 2: Use a for loop to iterate over the array and print each student's name and age
console.log('Step 2: Using for loop');
for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i].name}, Age: ${students[i].age}`);
}

// Step 3: Use forEach to iterate over the array and print each student's name and average grade
console.log('Step 3: Using forEach');
students.forEach(student => {
    let averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
});

// Step 4: Use filter to create a new array with students older than 21
console.log('Step 4: Using filter');
let studentsOlderThan21 = students.filter(student => student.age > 21);
console.log(studentsOlderThan21);

// Step 5: Use push to add a new student to the array
console.log('Step 5: Using push');
students.push({ name: 'Frank', age: 24, grades: [88, 90, 85] });
console.log(students);

// Step 6: Use pop to remove the last student from the array
console.log('Step 6: Using pop');
students.pop();
console.log(students);

// Step 7: Use unshift to add a new student to the beginning of the array
console.log('Step 7: Using unshift');
students.unshift({ name: 'Grace', age: 19, grades: [80, 85, 88] });
console.log(students);

// Step 8: Use shift to remove the first student from the array
console.log('Step 8: Using shift');
students.shift();
console.log(students);

// Step 9: Use join to create a string of student names separated by commas
console.log('Step 9: Using join');
let studentNames = students.map(student => student.name).join(', ');
console.log(studentNames);

// Step 10: Create a function expression to check if a student's average grade is greater than 80
const hasHighAverageGrade = function(student) {
    let averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return averageGrade > 80;
};

// Step 11: Use filter with the function expression to create a new array of students with high average grades
console.log('Step 11: Using filter with function expression');
let studentsWithHighGrades = students.filter(hasHighAverageGrade);
console.log(studentsWithHighGrades);

// Step 12: Create a callback function to print student details
function printStudentDetails(student) {
    let averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log(`Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`);
}

// Step 13: Use forEach with the callback function to print details of all students
console.log('Step 13: Using forEach with callback function');
students.forEach(printStudentDetails);

// Step 14: Use an arrow function inside a forEach to print if a student is "Pass" or "Fail" based on their average grade (pass if average grade is >= 75)
console.log('Step 14: Using arrow function with forEach');
students.forEach(student => {
    let averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    let status = averageGrade >= 75 ? 'Pass' : 'Fail';
    console.log(`Name: ${student.name}, Status: ${status}`);
});
