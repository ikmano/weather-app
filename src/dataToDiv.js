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
  console.log("location div: ", div);
  return div;
}

function dateDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = timeConverter_date(timeStamp);
  console.log("date div:", div);
  return div;
}

function timeDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `updated ${timeConverter_time(timeStamp)}`;
  console.log("time div:", div);
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
  console.log("desc div:", div);
  return div;
}

function sunriseDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Sunrise ${timeConverter_time(timeStamp)}`;
  console.log("sunrise div:", div);
  return div;
}

function sunsetDiv(id, timeStamp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Sunset ${timeConverter_time(timeStamp)}`;
  console.log("sunset div:", div);
  return div;
}

function tempDiv(id, temp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${Math.round(temp)}°`;
  console.log("temp div:", div);
  return div;
}

function minMaxTempDiv(id, min, max) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${Math.round(min)}°/${Math.round(max)}°`;
  console.log("temp div:", div);
  return div;
}

function feelsDiv(id, temp) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Feels like ${Math.round(temp)}°`;
  console.log("feels div:", div);
  return div;
}

function dewDiv(id, dew) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Dew point ${Math.round(dew).toFixed(1)}°`;
  console.log("dew point div: ", div);
  return div;
}

function pressureDiv(id, pressure) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Pressure ${pressure}hpa`;
  console.log("pressure div: ", div);
  return div;
}

function humidityDiv(id, humidity) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Humidity ${humidity}%`;
  console.log("humidity div: ", div);
  return div;
}

function visibilityDiv(id, visibility) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Visibility ${Math.round(visibility / 1000)}km`;
  console.log("visibility div: ", div);
  return div;
}

function windDiv(id, wind) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Wind speed ${wind}m/s`;
  console.log("wind div: ", div);
  return div;
}

function uvDiv(id, uv) {
  const div = makeOutputDiv(id);
  div.innerHTML = `Uv ${uvConverter(Math.round(uv))}`;
  console.log("uv div: ", div);
  return div;
}

function precipitationDiv(id, precipitation) {
  const div = makeOutputDiv(id);
  div.innerHTML = `${capitalize(id)} ${precipitation}mm`;
  console.log("precipitation div: ", div);
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
