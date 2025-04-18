const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id === "equal") {
      if (display.innerText !== "") {
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += item.id;
    }
  };
});

// Theme toggle
const themeToggleBtn = document.querySelector(".theme-toggle");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
