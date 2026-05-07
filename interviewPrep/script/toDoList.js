const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);

//     let span = document.createElement("span");
//     span.innerHTML = "x";
//     li.appendChild(span);

//     saveData();
//     inputBox.value = "";
//   }
// }

// listContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//     saveData();
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//     saveData();
//   }
// });

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function showData() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showData();
