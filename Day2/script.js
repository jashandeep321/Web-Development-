
function addTask() {
  const input = document.getElementById("taskInput");
  const inputText = input.value.trim();

  if (inputText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const tick = document.createElement("span");
  tick.classList.add("tick");
  tick.innerHTML = "";

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = inputText;

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "❌";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateSummary();
  });

  // Timestamp
  const timeStamp = document.createElement("small");
  const now = new Date();
  timeStamp.textContent = now.toLocaleString();
  timeStamp.classList.add("timestamp");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    tick.innerHTML = li.classList.contains("completed") ? "✔️" : "";
    updateSummary();
  });

  li.appendChild(tick);
  li.appendChild(taskText);
  li.appendChild(timeStamp);
  li.appendChild(deleteBtn);

  document.getElementById("tasks").appendChild(li);
  input.value = "";
  updateSummary();
   saveTasksToStorage();
}

function updateSummary() {
  const allTasks = document.querySelectorAll("#tasks li");
  const completed = document.querySelectorAll("#tasks li.completed");

  document.getElementById("total").textContent = allTasks.length;
  document.getElementById("completed").textContent = completed.length;
  document.getElementById("remaining").textContent = allTasks.length - completed.length;
}

function filterTasks(type, buttonElement) {
  const tasks = document.querySelectorAll("#tasks li");

  tasks.forEach(task => {
    switch (type) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
      case "incomplete":
        task.style.display = !task.classList.contains("completed") ? "flex" : "none";
        break;
    }
  });

  // Reset all buttons
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.classList.remove("active-all", "active-completed", "active-incomplete");
  });

  // Apply class based on current type
  switch (type) {
    case "all":
      buttonElement.classList.add("active-all");
      break;
    case "completed":
      buttonElement.classList.add("active-completed");
      break;
    case "incomplete":
      buttonElement.classList.add("active-incomplete");
      break;
  }
}


//
function saveTasksToStorage() {
  const tasks = [];
  document.querySelectorAll("#tasks li").forEach(li => {
    const text = li.querySelector(".task-text").textContent;
    const time = li.querySelector(".timestamp").textContent;
    const completed = li.classList.contains("completed");
    tasks.push({ text, time, completed });
  });
  localStorage.setItem("todoList", JSON.stringify(tasks));
}


function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("todoList")) || [];
  saved.forEach(({ text, time, completed }) => {
    const li = document.createElement("li");

    const tick = document.createElement("span");
    tick.classList.add("tick");
    tick.innerHTML = completed ? "✔️" : "";

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = text;

    const timeStamp = document.createElement("small");
    timeStamp.textContent = time;
    timeStamp.classList.add("timestamp");

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      li.remove();
      updateSummary();
      saveTasksToStorage();
    });

    li.appendChild(tick);
    li.appendChild(taskText);
    li.appendChild(timeStamp);
    li.appendChild(deleteBtn);

    if (completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      tick.innerHTML = li.classList.contains("completed") ? "✔️" : "";
      updateSummary();
      saveTasksToStorage();
    });

    document.getElementById("tasks").appendChild(li);
  });

  updateSummary();
}





window.addEventListener("DOMContentLoaded", loadTasks);
