import { activate, loaded, loader } from "./loader";
import renderWeather from "./renderWeather";

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
  activate(loader);
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
  const location = document.getElementById("city-input").value;
  /*if (location === "") {
    throw new Error(
      'empty form_input \n form_input-id: "city-input" \n form-class: "form" \n function: getCity() in domUtils.js'
    );
    
  }*/
  return location;
}

export { getOutputDiv, makeOutputDiv, getCity, removeChildren, reload };
