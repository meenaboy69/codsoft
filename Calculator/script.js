const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay() {
  display.value = currentInput;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (value.includes("⌫")) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ("0123456789+-*/.".includes(key)) {
    currentInput += key;
  } else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (key === "Delete") {
    currentInput = "";
  }
  updateDisplay();
});