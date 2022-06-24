import {
  timeConverter_time,
  timeConverter_date,
  capitalize,
  uvConverter,
  getIconURL,
} from "./utils";
import { makeOutputDiv } from "./domUtils";

function locationDiv(city) {
  const div = makeOutputDiv("location");
  div.innerHTML = city;
  return div;
}

function dateDiv(id, clss, timeStamp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = timeConverter_date(timeStamp);
  div.className = clss;
  return div;
}

function timeDiv(id, clss, timeStamp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `updated ${timeConverter_time(timeStamp)}`;
  div.className = clss;
  return div;
}

function iconDiv(id, clss, src) {
  const div = makeOutputDiv(null, clss);
  const img = document.createElement("img");
  img.id = id;
  img.src = getIconURL(src);
  img.alt = "weather icon";
  div.append(img);
  div.className = clss;
  return div;
}

function descDiv(id, clss, description) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = capitalize(description);
  div.className = clss;
  return div;
}

function sunriseDiv(id, clss, timeStamp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Sunrise ${timeConverter_time(timeStamp)}`;
  div.className = clss;
  return div;
}

function sunsetDiv(id, clss, timeStamp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Sunset ${timeConverter_time(timeStamp)}`;
  div.className = clss;
  return div;
}

function tempDiv(id, clss, temp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `${Math.round(temp)}°`;
  div.className = clss;
  return div;
}

function minMaxTempDiv(id, clss, min, max) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `${Math.round(min)}°/${Math.round(max)}°`;
  div.className = clss;
  return div;
}

function feelsDiv(id, clss, temp) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Feels like ${Math.round(temp)}°`;
  div.className = clss;
  return div;
}

function dewDiv(id, clss, dew) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Dew point ${Math.round(dew).toFixed(1)}°`;
  div.className = clss;
  return div;
}

function pressureDiv(id, clss, pressure) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Pressure ${pressure}hpa`;
  div.className = clss;
  return div;
}

function humidityDiv(id, clss, humidity) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Humidity ${humidity}%`;
  div.className = clss;
  return div;
}

function visibilityDiv(id, clss, visibility) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Visibility ${Math.round(visibility / 1000)}km`;
  div.className = clss;
  return div;
}

function windDiv(id, clss, wind) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Wind speed ${wind}m/s`;
  div.className = clss;
  return div;
}

function uvDiv(id, clss, uv) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `Uv ${uvConverter(Math.round(uv))}`;
  div.className = clss;
  return div;
}

function precipitationDiv(id, clss, precipitation) {
  const div = makeOutputDiv(id, clss);
  div.innerHTML = `${capitalize(id)} ${precipitation}mm`;
  div.className = clss;
  return div;
}

export {
  locationDiv,
  dateDiv,
  timeDiv,
  iconDiv,
  descDiv,
  tempDiv,
  feelsDiv,
  dewDiv,
  pressureDiv,
  humidityDiv,
  visibilityDiv,
  windDiv,
  uvDiv,
  precipitationDiv,
  sunriseDiv,
  sunsetDiv,
  minMaxTempDiv,
};
