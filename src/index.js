//import "./style/main.scss";
import renderWeather from "./renderWeather";
import { loader, loaded, activate } from "./loader";

/*function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}*/

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent actual submit
  //removeAllChildNodes(document.querySelector(".current-weather"));
  activate(loader);
  loaded(renderWeather());
});
