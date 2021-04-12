"use strict";

const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const KEY = "fe8216ebf2001342dc66e6445556a4b9";

init();
function init() {
  loadWeather();
}

function loadWeather() {
  const currentCoords = localStorage.getItem(COORDS);
  if (currentCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.stringify(currentCoords);
    getWeather();
  }
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoError() {
  console.log("can't access geo location");
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordObj = {
    latitude,
    longitude,
  };
  saveCoords(coordObj);
  getWeather(latitude, longitude);
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
  )
    .then((resp) => resp.json())
    .then((json) => {
      const temp = json.main.temp;
      const name = json.name;
      const description = json.weather[0].description;

      weather.innerHTML = `${Math.floor(temp)}º @${name} is ${description}`;
    });
}
