const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tipPercent");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipSelect.value);

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount");
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  tipAmount.textContent = tip.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipSelect.value = "15";
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
});
