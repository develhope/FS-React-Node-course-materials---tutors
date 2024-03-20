### Fare riferimento sempre al Syllabus per l'effetivo inizio del progetto
## Settimana 03 - Settimana 05
### In this exercise, you will create a simple task management system using JavaScript. You will utilize array methods, setTimeout, functions, callbacks, spread operator, and error management techniques.
### Instructions:
### Setup:
* Create a new JavaScript file named taskManagementSystem.js.
* Open the file in your preferred text editor.
* Task Management System:
* Initialize an empty array named tasks to store task names.
* Function to Add a Task:
* Define a function named addTask that takes two parameters:
* task: A string representing the task to add.
* callback: A callback function to handle the result.
* Inside the addTask function, use setTimeout to simulate an asynchronous operation.
* If the task parameter is empty or not a string, invoke the callback function with an Error object containing the message "Task must be a non-empty string".
* Otherwise, add the task to the tasks array and invoke the callback function with null as the first parameter and the message "Task added successfully" as the second parameter.

### Function to Complete a Task:
### Define a function named completeTask that takes two parameters:
* index: An integer representing the index of the task to complete.
* callback: A callback function to handle the result.

Inside the completeTask function, use setTimeout to simulate an asynchronous operation.
If the index parameter is out of range (less than 0 or greater than or equal to the length of the tasks array), invoke the callback function with an Error object containing the message "Invalid task index".
Otherwise, remove the task at the specified index from the tasks array and invoke the callback function with null as the first parameter and the message "Task completed successfully" as the second parameter.

Function to List Tasks:
Define a function named listTasks that does not take any parameters.
Inside the listTasks function, log each task in the tasks array to the console, along with its corresponding index.

### Example Usage:
Add tasks using the addTask function with different inputs, including an empty string.
Complete tasks using the completeTask function with valid and invalid indices.
List tasks using the listTasks function to verify the changes.
Error Handling:
Implement error handling in the example usage to handle errors returned by the addTask and completeTask functions.
Testing:
Test your task management system with various scenarios to ensure proper functionality and error handling.

