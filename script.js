document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");

  function append(value) {
    display.value += value;
  }

  function del() {
    display.value = display.value.slice(0, -1);
  }

  function reset() {
    display.value = "";
  }

  function calculate_result() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }

  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let body = document.body;
  let toggle = document.getElementById("circle");

  if (one && two && three && toggle) {
    one.addEventListener("click", function () {
      body.classList.remove("active1", "active2");
      toggle.style.left = "0";
    });

    two.addEventListener("click", function () {
      body.classList.add("active1");
      body.classList.remove("active2");
      toggle.style.left = "36%";
    });

    three.addEventListener("click", function () {
      body.classList.add("active2");
      body.classList.remove("active1");
      toggle.style.left = "65%";
    });
  }

  window.append = append;
  window.del = del;
  window.reset = reset;
  window.calculate_result = calculate_result;
});
