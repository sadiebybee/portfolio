// Select elements
const colorBtn = document.getElementById("colorBtn");
const colorCode = document.getElementById("colorCode");

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change color on button click
colorBtn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
