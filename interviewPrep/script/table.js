const form = document.querySelector(".styled-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const table = document.getElementById("data-table");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;

  if (name === "" || age === "") {
    alert("Both fields must be filled out.");
    return;
  }

  const newRow = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  const ageCell = document.createElement("td");
  ageCell.textContent = age;

  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  table.appendChild(newRow);
});

form.reset();

// // Get elements
// const form = document.querySelector(".styled-form");
// const nameInput = document.getElementById("name");
// const ageInput = document.getElementById("age");
// const table = document.getElementById("data-table");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // 1️⃣ Stop page refresh

//   const name = nameInput.value.trim();
//   const age = ageInput.value.trim();

//   // Simple validation
//   if (name === "" || age === "") {
//     alert("Please fill out both fields.");
//     return;
//   }

//   // 2️⃣ Create new row
//   const newRow = document.createElement("tr");

//   const nameCell = document.createElement("td");
//   nameCell.textContent = name;

//   const ageCell = document.createElement("td");
//   ageCell.textContent = age;

//   newRow.appendChild(nameCell);
//   newRow.appendChild(ageCell);

//   // 3️⃣ Add row to table
//   table.appendChild(newRow);

//   // 4️⃣ Clear form
//   form.reset();
// });
