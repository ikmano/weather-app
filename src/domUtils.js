//import { capitalize } from "./utils";

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

export { getOutputDiv, makeOutputDiv, getCity };
