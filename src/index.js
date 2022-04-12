//import "./style/main.scss";
import { data, getWeather } from "./data_fn";
import makeNavbar from "./frame";
import { getCity } from "./DOM_fn";

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

makeNavbar();
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent actual submit
  removeAllChildNodes(document.querySelector(".content"));

  getWeather(data, getCity());
  //fillCityHeader();
});

//getWeather(data, "Bratislava");
