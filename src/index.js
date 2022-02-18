import "./DOM_stuff";
import displayData from "./DOM_stuff";

let data = {};

async function getCoords() {
  const response = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=fd57668c10f7ada1c6e9a2cbc53e10e1",
    { mode: "cors" }
  );
  const result = await response.json();
  const coords = {
    lat: result[0]["lat"],
    lon: result[0]["lon"],
  };
  return coords;
}

async function getWeather(data) {
  const coords = await getCoords();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords["lat"]}&lon=${coords["lon"]}&units=metric&exclude=hourly,minutely&appid=fd57668c10f7ada1c6e9a2cbc53e10e1`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  displayData(data, weatherData.current);
}

getWeather(data);
