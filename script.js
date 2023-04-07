let calculation = "";

function updateDisplay(value) {
  calculation += value;
  document.getElementById("display").value = calculation;
}

function clearDisplay() {
  calculation = "";
  document.getElementById("display").value = "";
}

function backspace() {
  calculation = calculation.slice(0, -1);
  document.getElementById("display").value = calculation;
}

function calculate() {
  const result = eval(calculation);
  document.getElementById("display").value = result;
  calculation = result.toString();
}
