const taskInput = document.querySelector(".task_input_box");
const addButton = document.querySelector(".add_button");
const taskBox = document.getElementById("taskBox");
const eachTask = document.querySelector("eachTask");

// Function to add a task
function addTask() {
  const taskTest = taskInput.value.trim(); // Get the trimmed input value
  console.log(taskTest);

  // Only add task if input is not empty
  if (taskTest !== "") {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("eachTask");
    taskContent.textContent = taskTest;
    taskElement.appendChild(taskContent);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.classList.add("complete_button");

    taskElement.appendChild(completeButton);

    // Append new task to the task container
    taskBox.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";

    // Toggle the "completed" class when the complete button is clicked
    completeButton.addEventListener("click", () => {
      taskElement.classList.toggle("completed");
    });

    // Update the visibility of the task box
    updateTaskVisibility();
  }
}

// Function to toggle task box visibility
function updateTaskVisibility() {
  const tasks = taskBox.children.length;

  if (tasks === 0) {
    taskBox.classList.add("hidden"); // Hide the task box if there are no tasks
  } else {
    taskBox.classList.remove("hidden"); // Show the task box if tasks exist
  }
}

// Event listener for the add button
addButton.addEventListener("click", addTask);

// Event listener for the Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Initially hide the task box if no tasks are present
updateTaskVisibility();
