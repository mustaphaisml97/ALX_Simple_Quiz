// Step 1: Arithmetic Functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  // Optional: Handle division by zero
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Step 2: Helper to get input values safely
function getInputValues() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

// Step 3: Event Listeners for Buttons
document.getElementById('add').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = add(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = subtract(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = multiply(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = divide(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});
