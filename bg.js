"use strict";
const body = document.querySelector("body");
const IMG = 5;

init();

function init() {
  //random image
  const randNo = Math.floor(Math.random() * IMG);
  printImg(randNo);
}

function printImg(ImgNo) {
  const img = new Image();
  img.src = `img/${ImgNo + 1}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}
