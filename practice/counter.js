// JavaScript
// Initialize a variable count = 0
// When each button is clicked:
// “Increase” → count++
// “Decrease” → count--
// “Reset” → count = 0
// Update the number displayed
// // Change its color depending on the value (positive/negative/zero)

let currentCount = 0;
const displayCount = document.getElementById("currentCount");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classes = e.target.classList;

    if (classes.contains("increaseBtn")) {
      currentCount++;
    } else if (classes.contains("decreaseBtn")) {
      currentCount--;
    } else if (classes.contains("resetBtn")) {
      currentCount = 0;
    }

    if (currentCount > 0) {
        displayCount.style.color = "green";
    } else if (currentCount < 0 ) {
        displayCount.style.color = "red";
    } else {
        displayCount.style.color = "black";
    }

    displayCount.textContent = currentCount;
  });
});
