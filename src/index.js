import "./scss/style.scss";
import renderWeather from "./renderWeather";
import { loader, loaded, activate } from "./loader";
import { removeChildren } from "./domUtils";

window.addEventListener("DOMContentLoaded", () => {
  activate(loader);
  loaded(renderWeather());

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual submit
    //removeAllChildNodes(document.querySelector(".current-weather"));
    activate(loader);
    removeChildren();
    loaded(renderWeather());
  });
});
