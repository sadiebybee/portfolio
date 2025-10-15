const addBtn = document.getElementById("addBtn");
const taskSection = document.getElementById("taskSection");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskSection.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskSection.value = "";
}

addBtn.addEventListener("click", addTask);

taskSection.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
