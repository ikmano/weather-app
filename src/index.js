import "./scss/style.scss";
import renderWeather from "./renderWeather";
import { loader, loaded, activate } from "./loader";
import { getOutputDiv } from "./domUtils";

/*function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}*/

window.addEventListener("load", () => {
  activate(loader);
  loaded(renderWeather());

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual submit
    //removeAllChildNodes(document.querySelector(".current-weather"));
    activate(loader);
    loaded(renderWeather());
  });
});
