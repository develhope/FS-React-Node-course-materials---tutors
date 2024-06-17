// Exercise: To-Do List Manager

// Step 1: Define an array of to-do items
let toDoList = [
    { task: 'Buy groceries', priority: 'High' },
    { task: 'Clean the house', priority: 'Medium' },
    { task: 'Pay bills', priority: 'High' },
    { task: 'Walk the dog', priority: 'Low' },
    { task: 'Call mom', priority: 'Medium' }
];

// Step 2: Create a function to print all to-do items
function printToDoList(list) {
    console.log('To-Do List:');
    list.forEach(item => console.log(`Task: ${item.task}, Priority: ${item.priority}`));
}

// Step 3: Use the function to print the initial to-do list
console.log('Step 3: Initial To-Do List');
printToDoList(toDoList);

// Step 4: Add a new to-do item using push
console.log('Step 4: Adding a new to-do item using push');
toDoList.push({ task: 'Read a book', priority: 'Low' });
printToDoList(toDoList);

// Step 5: Remove the last to-do item using pop
console.log('Step 5: Removing the last to-do item using pop');
toDoList.pop();
printToDoList(toDoList);

// Step 6: Add a new to-do item to the beginning using unshift
console.log('Step 6: Adding a new to-do item to the beginning using unshift');
toDoList.unshift({ task: 'Finish project', priority: 'High' });
printToDoList(toDoList);

// Step 7: Remove the first to-do item using shift
console.log('Step 7: Removing the first to-do item using shift');
toDoList.shift();
printToDoList(toDoList);

// Step 8: Filter the to-do list to include only high priority tasks
console.log('Step 8: Filtering to include only high priority tasks');
let highPriorityTasks = toDoList.filter(item => item.priority === 'High');
printToDoList(highPriorityTasks);

// Step 9: Use a conditional operator to check if there are any high priority tasks
console.log('Step 9: Checking for high priority tasks');
let hasHighPriority = highPriorityTasks.length > 0 ? 'Yes' : 'No';
console.log(`Are there any high priority tasks? ${hasHighPriority}`);

// Step 10: Create a callback function to print each task
function printTask(task) {
    console.log(task);
}

// Step 11: Use forEach with the callback function to print all tasks in the original list
console.log('Step 11: Using forEach with callback function');
toDoList.forEach(item => printTask(item.task));

// Step 12: Join all task names into a single string separated by commas
console.log('Step 12: Joining all task names into a single string');
let allTasks = toDoList.map(item => item.task).join(', ');
console.log(`All tasks: ${allTasks}`);
