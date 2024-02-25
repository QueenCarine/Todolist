let todoList = [];

// Function to add tasks to the ToDo list with specified categories
function addTask(title, category) {
  let task = {
    title: title,
    category: category,
    completed: false
  };
  todoList.push(task);
}

// Function to display tasks grouped by their categories
function displayTasksByCategory() {
  let groupedTasks = {};

  todoList.forEach(task => {
    if (!(task.category in groupedTasks)) {
      groupedTasks[task.category] = [];
    }
    groupedTasks[task.category].push(task.title);
  });

  for (let category in groupedTasks) {
    console.log(`${category}:`);
    console.log(groupedTasks[category].join(", "));
  }
}

// Function to mark tasks as completed
function markTaskAsCompleted(title) {
  let task = todoList.find(task => task.title === title);
  if (task) {
    task.completed = true;
    console.log(`${task.title} marked as completed.`);
  } else {
    console.log("Task not found.");
  }
}

// Function to remove tasks from the list
function removeTask(title) {
  todoList = todoList.filter(task => task.title !== title);
  console.log(`${title} removed from the list.`);
}

// Test the functions
addTask("Complete Project 2", "Work");
addTask("Buy groceries", "Personal");
addTask("Call mom", "Personal");
addTask("Submit reports", "Work");

console.log("Tasks grouped by category:");
displayTasksByCategory();

markTaskAsCompleted("Buy groceries");
removeTask("Call mom");

console.log("Updated Tasks grouped by category:");
displayTasksByCategory();