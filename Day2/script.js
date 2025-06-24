let taskList = [];

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    taskList = JSON.parse(saved);
    taskList.forEach(task => createTaskElement(task.text, task.completed));
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function createTaskElement(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("completed");

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateTaskStatus(text);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    removeTask(text);
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  taskList.push({ text: taskText, completed: false });
  saveTasks();
  createTaskElement(taskText);
  input.value = "";
}

function removeTask(text) {
  taskList = taskList.filter(task => task.text !== text);
  saveTasks();
}

function updateTaskStatus(text) {
  taskList = taskList.map(task =>
    task.text === text ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
}

// Load tasks on page load
window.onload = loadTasks;
