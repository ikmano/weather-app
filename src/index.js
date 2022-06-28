import "./scss/style.scss";
import renderWeather from "./renderWeather";
import { removeChildren } from "./domUtils";
import { activateLoader, loaded } from "./loader";

loaded(renderWeather());

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent actual submit
  removeChildren();
  loaded(renderWeather());
});
