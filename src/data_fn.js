import { displayData, displayCurrent } from "./DOM_fn";
import { getCoordURL, getWeatherURL } from "./utils";

let data = {};

/**************FUNCTION GETCOORDS()******************/
//FETCHE LATITUDE AND LONGITUDE OF PROVIDED CITY NAME
//@param city
//@return object {lat, lon}

async function getCoords(city) {
  const response = await fetch(getCoordURL(city), { mode: "cors" });
  const result = await response.json();
  const coords = {
    lat: result[0]["lat"],
    lon: result[0]["lon"],
  };
  return coords;
}

//function getWeather()
//fetches current and daily weather data of location based on lat and lon
//

async function getWeather(data, city) {
  const coords = await getCoords(city);
  const response = await fetch(getWeatherURL(coords["lat"], coords["lon"]), {
    mode: "cors",
  });
  const weatherData = await response.json();
  console.log(weatherData);
  displayData(data, weatherData.current);
  displayData(data, weatherData.daily);
}

export { data, getWeather };
