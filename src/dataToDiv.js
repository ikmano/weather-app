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

function dateDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = timeConverter_date(timeStamp);
  return div;
}

function timeDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `updated ${timeConverter_time(timeStamp)}`;
  return div;
}

function iconDiv(id, src) {
  const div = makeOutputDiv(null, "icon");
  const img = document.createElement("img");
  img.id = id;
  img.src = getIconURL(src);
  img.alt = "weather icon";
  div.append(img);

  return div;
}

function descDiv(id, description) {
  const div = makeOutputDiv(id);
  div.innerHTML = capitalize(description);
  return div;
}

function sunriseDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Sunrise ${timeConverter_time(timeStamp)}`;
  return div;
}

function sunsetDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Sunset ${timeConverter_time(timeStamp)}`;
  return div;
}

function tempDiv(id, temp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${Math.round(temp)}°`;
  return div;
}

function minMaxTempDiv(id, min, max) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${Math.round(min)}°/${Math.round(max)}°`;
  return div;
}

function feelsDiv(id, temp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Feels like ${Math.round(temp)}°`;
  return div;
}

function dewDiv(id, dew) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Dew point ${Math.round(dew).toFixed(1)}°`;
  return div;
}

function pressureDiv(id, pressure) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Pressure ${pressure}hpa`;
  return div;
}

function humidityDiv(id, humidity) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Humidity ${humidity}%`;
  return div;
}

function visibilityDiv(id, visibility) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Visibility ${Math.round(visibility / 1000)}km`;
  return div;
}

function windDiv(id, wind) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Wind speed ${wind}m/s`;
  return div;
}

function uvDiv(id, uv) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Uv ${uvConverter(Math.round(uv))}`;
  return div;
}

function precipitationDiv(id, precipitation) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${capitalize(id)} ${precipitation}mm`;
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
