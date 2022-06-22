import { getCoordURL, getWeatherURL } from "./utils";
//import { displayCurrent, displayDaily } from "./newDom";

async function getCoords(city) {
  const response = await fetch(getCoordURL(city), { mode: "cors" });
  const result = await response.json();
  const coords = {
    lat: result[0]["lat"],
    lon: result[0]["lon"],
  };
  return coords;
}

async function getWeather(city) {
  const coords = await getCoords(city);
  const response = await fetch(getWeatherURL(coords["lat"], coords["lon"]), {
    mode: "cors",
  });
  const weatherData = await response.json();

  return weatherData;
}

export default getWeather;
