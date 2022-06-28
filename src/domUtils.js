import renderWeather from "./renderWeather";
import { loaded } from "./loader";

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeChildren() {
  const parentArr = [
    getOutputDiv(".date-time-place"),
    getOutputDiv(".weather-info"),
    getOutputDiv(".detailed-info"),
    getOutputDiv(".daily-forcast"),
  ];

  parentArr.forEach((parent) => {
    removeAllChildNodes(parent);
  });
}

function reload() {
  removeChildren();
  loaded(renderWeather());
}

function getOutputDiv(selector) {
  const div = document.querySelector(selector);
  if (div === null) {
    throw new Error(`div ${selector} was not found on your page`);
  }
  return div;
}

function makeOutputDiv(id, clss) {
  const div = document.createElement("div");
  div.id = id;
  div.className = clss;
  return div;
}

function getCity() {
  return document.getElementById("city-input").value;
}

export { getOutputDiv, makeOutputDiv, getCity, removeChildren, reload };
