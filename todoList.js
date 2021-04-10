"use strict";

const formTodo = document.querySelector(".js-todo");
const inputTodo = formTodo.querySelector("input");
const showList = document.querySelector("#showList");

const TODO_LS = "toDos";
let toDos = [];

init();

function init() {
  loadList();
  formTodo.addEventListener("submit", handleSubmit);
}

function loadList() {
  const loadToDo = localStorage.getItem(TODO_LS);

  if (loadToDo !== null) {
    const parseToDo = JSON.parse(loadToDo);
    parseToDo.forEach(function (todo) {
      printTodo(todo.text);
    });
  }
}

function printTodo(printText) {
  const newId = toDos.length + 1;
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delTodo);

  span.innerText = printText;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  showList.appendChild(li);

  //save
  const todoObj = {
    text: printText,
    id: newId,
  };
  toDos.push(todoObj);
  saveToDos();
}

function handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  const inputValue = inputTodo.value;
  printTodo(inputValue);
  inputTodo.value = "";
}

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function delTodo(event) {
  console.dir(event.target);

  const btn = event.target;
  const li = btn.parentNode;
  showList.removeChild(li);
}
