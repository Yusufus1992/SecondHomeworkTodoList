
// записываю в переменные данные о нынешней форме(FORM)
const form = document.querySelector("form");
const taskList = document.querySelector(".task-list");
const sort1 = document.querySelector(".sort1");
const sort2 = document.querySelector(".sort2");
// Создаю копию формы
form.addEventListener("submit", (e) => {

  e.preventDefault();
  const div = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  // копия создана
  button.setAttribute("type", "button");
  div.append(input, button);
  div.classList.add("append-item" );
  div.classList.add("tosort");
  input.classList.add("task-text");
  button.textContent = "x";
  button.classList.add("delete");
  taskList.append(div);
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const numb = taskList.childElementCount;
    if (numb > 1) {
      e.target.closest(".tosort").remove();
    } else {
      document.querySelector(".task-text").value = "";
    }
  }
});

sort1.addEventListener("click", (e) => {
  sort1.style.display = "none";
  sort2.style.display = "block";
  const divs = document.querySelectorAll(".task-text");
  if (divs.length <= 1) return;
  let arr = [];
  divs.forEach((item) => {
    if (item.value === "") {
      item.closest(".tosort").remove();
    } else {
      arr.push(item.value);
    }
  });
  arr.sort();
  divs.forEach((item, index) => {
    item.value = arr[index];
  });
});

sort2.addEventListener("click", (e) => {
  sort2.style.display = "none";
  sort1.style.display = "block";
  const divs = document.querySelectorAll(".task-text");
  if (divs.length <= 1) return;
  let arr = [];
  divs.forEach((item) => {
    if (item.value === "" ) {
      item.closest(".tosort").remove();
    } else {
      arr.push(item.value);
    }
  });
  arr.sort().reverse();
  divs.forEach((item, index) => {
    item.value = arr[index];
  });
});

new Sortable(taskList, {
  animation: 100,
});
