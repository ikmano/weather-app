import "./scss/style.scss";
import renderWeather from "./renderWeather";
import { preloader, loaded, activate } from "./loader";
import { removeChildren } from "./domUtils";

window.addEventListener("DOMContentLoaded", () => {
  activate(preloader);
  loaded(renderWeather());

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual submit

    activate(preloader);
    removeChildren();
    loaded(renderWeather());
  });
});
