import { timeConverter_date, timeConverter_time, getIconURL } from "./utils";

const content = document.querySelector(".content");
const cityHeader = document.querySelector(".city");

const days = ["0", "1", "2", "3", "4", "5", "6", "7"];

function getCity() {
  return document.getElementById("input").value;
}
function fillCityHeader() {
  cityHeader.innerHTML = input.value;
}

/**
 * make div element that contains given weather data
 * @param {string} key key of given key-value pair
 * @param {string} value data to be rendered on page
 */
function makeDiv(key, value) {
  if (key === "icon") {
    const img = document.createElement("img");
    img.id = key;
    img.className = "weather-info";
    img.src = getIconURL(value);
    img.alt = key;
    content.append(img);
  }
  const div = document.createElement("div");
  div.id = key;
  div.className = "weather-info";
  div.innerHTML = `${key}: ${value}`;
  content.append(div);
}

/**
 * gets data from given object and displays them on page
 * @param {*} data temporary param for development and debugging purposes
 * @param {*} obj object from which the info is extracted
 */
function displayData(data, obj) {
  let keys = Object.keys(obj);
  console.log(keys); //development/debugging purposes

  keys.forEach((key) => {
    //condition to chceck for object in object
    //--> recursively extract data from all objects
    //specific for the object structure that is awaited
    //TODO: refactor to be non-specific
    if (key === "weather" || days.includes(key)) {
      return displayData(data, obj[key]);
    }

    if (key === "dt") {
      data[key] = timeConverter_date(obj[key]);
    } else if (key === "sunrise" || key === "sunset") {
      data[key] = timeConverter_time(obj[key]);
    } else if (key === "temp" || key === "feels_like" || key === "dew_point") {
      data[key] = `${Math.round(obj[key], 1).toFixed(1)}°C`;
    } else if (key === "pressure") {
      data[key] = `${obj[key]}hpa`;
    } else if (key === "humidity" || key === "clouds") {
      data[key] = `${obj[key]}%`;
    } else if (key === "visibility") {
      data[key] = `${Math.round(obj[key] / 1000, 2).toFixed(2)}km`;
    } else if (key === "wind_speed") {
      data[key] = `${obj[key]}m/s`;
    } else if (key === "rain" || key === "snow") {
      data[key] = `${obj[key]}mm`;
    } else {
      data[key] = obj[key]; //dvelopment/debugging purposes
    }

    makeDiv(key, data[key], parent);
  });
}

export { displayData, getCity, fillCityHeader };
