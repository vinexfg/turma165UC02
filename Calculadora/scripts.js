function insertToDisplay(data) {
  document.querySelector("#display").value += data;
}

function clean() {
  document.querySelector("#display").value = "";
}

function back() {
  const display = (document.querySelector("#display").value = "");
  display.value = display.value.slice(0, -1);
}

function result() {
  const display = document.querySelector("#display");
  try {
    display.value = eval(display.value).toFixed(2);
  } catch {
    display.value = "Error";
  }
}
