"use strict";
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greet = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOW = "showing";

function handleSubmit(e) {
  e.preventDefault();
}

function askForName() {
  form.classList.add(SHOW);
  form.addEventListener("submit", handleSubmit);
}

function printGreet(text) {
  form.classList.remove(SHOW);
  greet.classList.add(SHOW);
  greet.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    printGreet(currentUser);
  }
}

function init() {
  loadName();
}
init();
